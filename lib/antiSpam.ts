/**
 * antiSpam.ts
 *
 * Defensas del endpoint público de captura de leads (`/api/crm-lead`).
 *
 * Contexto: hasta septiembre de 2026 ese endpoint no tenía ninguna barrera y un
 * bot metió 7 leads falsos entre junio y septiembre (nombres de letras al azar,
 * Gmail con puntos inyectados, celulares que no empiezan por 3). Las capas de
 * aquí son independientes a propósito: si mañana el bot aprende a resolver una,
 * las otras siguen en pie.
 *
 * Todo esto corre SOLO en el servidor. Nada de lo de aquí debe importarse desde
 * un componente cliente: filtraría la lógica de detección al navegador.
 */

/* ────────────────────────────────────────────────────────────────────────────
   1. Cloudflare Turnstile
   ──────────────────────────────────────────────────────────────────────────── */

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export interface TurnstileResult {
  ok: boolean;
  /** Motivo del rechazo, para el log del servidor. Nunca se muestra al visitante. */
  motivo?: string;
}

/**
 * Valida contra Cloudflare el token que el widget generó en el navegador.
 *
 * Si `TURNSTILE_SECRET_KEY` no está configurada, la verificación se SALTA con
 * una advertencia en el log. Es deliberado: sin esa válvula, desplegar este
 * código antes de cargar las claves en Netlify dejaría el formulario mudo y
 * perderíamos leads reales. En cuanto la clave existe, la capa es obligatoria.
 */
export async function verificarTurnstile(
  token: string | undefined,
  ip: string | undefined,
): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.warn(
      "[antiSpam] TURNSTILE_SECRET_KEY no configurada: el captcha NO se está verificando.",
    );
    return { ok: true };
  }

  if (!token) return { ok: false, motivo: "sin-token" };

  try {
    const body = new URLSearchParams({ secret, response: token });
    // Cloudflare usa la IP para detectar tokens reusados desde otra máquina.
    if (ip) body.set("remoteip", ip);

    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      // Si Cloudflare tarda, no dejamos al visitante colgado esperando.
      signal: AbortSignal.timeout(8000),
    });

    const data = (await res.json()) as {
      success?: boolean;
      "error-codes"?: string[];
    };

    if (data.success === true) return { ok: true };
    return {
      ok: false,
      motivo: (data["error-codes"] || ["desconocido"]).join(","),
    };
  } catch (error) {
    // Cloudflare caído o timeout. Dejamos pasar al visitante: preferimos un
    // lead spam ocasional a rechazar clientes reales por una caída ajena.
    console.error("[antiSpam] Turnstile no respondió, se deja pasar:", error);
    return { ok: true };
  }
}

/* ────────────────────────────────────────────────────────────────────────────
   2. Límite de peticiones por IP
   ──────────────────────────────────────────────────────────────────────────── */

const ventanas = new Map<string, number[]>();
const VENTANA_MS = 10 * 60 * 1000; // 10 minutos
const MAX_POR_VENTANA = 5;

/**
 * Corta las ráfagas: máximo 5 envíos por IP cada 10 minutos.
 *
 * El contador vive en memoria del proceso. En Netlify las funciones son
 * efímeras y puede haber varias instancias, así que esto NO es un límite
 * global exacto: es un freno barato para el caso normal (un bot machacando
 * desde una IP suele caer en la misma instancia caliente). El captcha es la
 * defensa fuerte; esto solo abarata el resto.
 *
 * `ambito` separa los contadores por endpoint. Sin él, un solo envío del
 * formulario gastaba dos intentos (crear el lead y avisar al comercial), y un
 * cliente real se quedaba sin cupo a la tercera solicitud.
 */
export function superaLimitePorIp(
  ip: string | undefined,
  ambito = "general",
): boolean {
  if (!ip) return false;

  const clave = `${ambito}:${ip}`;
  const ahora = Date.now();
  const previas = (ventanas.get(clave) || []).filter((t) => ahora - t < VENTANA_MS);

  if (previas.length >= MAX_POR_VENTANA) {
    ventanas.set(clave, previas);
    return true;
  }

  previas.push(ahora);
  ventanas.set(clave, previas);

  // Poda perezosa: sin esto el Map crece sin fin en una instancia longeva.
  if (ventanas.size > 5000) {
    for (const [k, marcas] of ventanas) {
      if (marcas.every((t) => ahora - t >= VENTANA_MS)) ventanas.delete(k);
    }
  }

  return false;
}

/* ────────────────────────────────────────────────────────────────────────────
   3. Heurísticas sobre el contenido del lead
   ──────────────────────────────────────────────────────────────────────────── */

export interface AnalisisContenido {
  /** Número de señales de spam encontradas. */
  puntaje: number;
  señales: string[];
}

/**
 * Normaliza un email de Gmail: en Gmail `a.b.c@gmail.com` y `abc@gmail.com`
 * son el MISMO buzón, y el bot abusa de eso para aparentar remitentes nuevos.
 * Comparando la forma normalizada se ve que todos salen de pocas cuentas.
 */
export function normalizarEmail(email: string): string {
  const limpio = email.trim().toLowerCase();
  const [usuario, dominio] = limpio.split("@");
  if (!dominio) return limpio;
  if (dominio !== "gmail.com" && dominio !== "googlemail.com") return limpio;
  // Los puntos se ignoran y todo lo posterior a "+" es una etiqueta.
  return `${usuario.split("+")[0].replace(/\./g, "")}@gmail.com`;
}

/** Un celular colombiano válido tiene 10 dígitos y empieza por 3. */
export function esCelularColombianoValido(telefono: string): boolean {
  const digitos = telefono.replace(/\D/g, "").replace(/^57/, "");
  if (digitos.length === 10) return digitos.startsWith("3");
  // Fijo con indicativo (7 u 8 dígitos) también es legítimo.
  return digitos.length >= 7 && digitos.length <= 8;
}

/**
 * Puntúa el contenido del formulario. Dos señales o más = se rechaza.
 *
 * Un solo indicio nunca basta: hay clientes reales que escriben el teléfono
 * raro o que ponen un nombre de una sola palabra. Exigir dos coincidencias es
 * lo que separa a los 7 falsos de los 45 leads legítimos que ya tenemos.
 */
export function analizarContenido(datos: {
  nombre?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
}): AnalisisContenido {
  const señales: string[] = [];

  const nombre = (datos.nombre || "").trim();
  // Cadena larga de puras letras sin un solo espacio: nadie se llama así.
  if (nombre.length >= 12 && /^[A-Za-zÁÉÍÓÚÑáéíóúñ]+$/.test(nombre)) {
    señales.push("nombre-sin-espacios");
  }
  // Sin una sola vocal, o con una racha de 5 consonantes: texto generado.
  const soloLetras = nombre.replace(/[^A-Za-z]/g, "");
  if (
    soloLetras.length >= 8 &&
    /[BCDFGHJKLMNPQRSTVWXYZ]{5}/i.test(soloLetras)
  ) {
    señales.push("nombre-impronunciable");
  }

  const email = (datos.email || "").trim();
  // 3+ puntos en el usuario de un Gmail es la firma del bot, no de una persona.
  if (
    /@(gmail|googlemail)\.com$/i.test(email) &&
    (email.split("@")[0].match(/\./g) || []).length >= 3
  ) {
    señales.push("gmail-con-puntos-inyectados");
  }

  const telefono = (datos.telefono || "").trim();
  if (telefono && !esCelularColombianoValido(telefono)) {
    señales.push("telefono-imposible");
  }

  const mensaje = (datos.mensaje || "").trim();
  const mensajeLetras = mensaje.replace(/[^A-Za-z]/g, "");
  if (
    mensajeLetras.length >= 12 &&
    mensaje.split(/\s+/).length <= 2 &&
    /[BCDFGHJKLMNPQRSTVWXYZ]{5}/i.test(mensajeLetras)
  ) {
    señales.push("mensaje-impronunciable");
  }
  // Enlaces en el mensaje: el formulario pide una consulta, no promoción.
  if (/https?:\/\/|\[url=|<a\s+href/i.test(mensaje)) {
    señales.push("mensaje-con-enlaces");
  }

  return { puntaje: señales.length, señales };
}

/* ────────────────────────────────────────────────────────────────────────────
   4. Trampas de formulario (honeypot y tiempo de llenado)
   ──────────────────────────────────────────────────────────────────────────── */

/** Un humano no puede llenar y enviar el formulario en menos de 3 segundos. */
const MINIMO_LLENADO_MS = 3000;

export function detectarTrampas(datos: {
  /** Campo invisible: solo lo llena un bot que rellena todo lo que encuentra. */
  honeypot?: string;
  /** Momento en que se pintó el formulario, en milisegundos. */
  abiertoEn?: number;
}): string | null {
  if (datos.honeypot && datos.honeypot.trim() !== "") return "honeypot";

  if (typeof datos.abiertoEn === "number" && datos.abiertoEn > 0) {
    const transcurrido = Date.now() - datos.abiertoEn;
    if (transcurrido < MINIMO_LLENADO_MS) return "demasiado-rapido";
    // Una marca del futuro o de hace días es un payload fabricado a mano.
    if (transcurrido < 0 || transcurrido > 24 * 60 * 60 * 1000) {
      return "marca-de-tiempo-invalida";
    }
  }

  return null;
}

/* ────────────────────────────────────────────────────────────────────────────
   5. Control de origen
   ──────────────────────────────────────────────────────────────────────────── */

const HOSTS_PERMITIDOS = new Set([
  "roesan.com",
  "www.roesan.com",
  "localhost",
  "127.0.0.1",
]);

function hostPermitido(valor: string | null): boolean {
  if (!valor) return false;
  try {
    const hostname = new URL(valor).hostname;
    if (HOSTS_PERMITIDOS.has(hostname)) return true;
    // Previsualizaciones de Netlify del propio sitio, no cualquier *.netlify.app:
    // ese comodín dejaba entrar a cualquiera con una cuenta gratis de Netlify.
    return /^([a-z0-9-]+--)?roesan[a-z0-9-]*\.netlify\.app$/.test(hostname);
  } catch {
    return false;
  }
}

/**
 * Solo aceptamos peticiones que vengan de una página del propio sitio.
 *
 * Antes esto era simbólico: `if (!origin) return true` dejaba pasar cualquier
 * `curl`, porque una petición hecha fuera de un navegador no manda `Origin`.
 * Ahora la ausencia de cabecera es motivo de rechazo, no de indulto.
 */
export function origenPermitido(headers: Headers): boolean {
  const origin = headers.get("origin");
  if (origin) return hostPermitido(origin);
  // Algunos navegadores omiten Origin en peticiones del mismo sitio; en ese
  // caso Referer sigue estando. Si no hay ninguno de los dos, no es un
  // formulario abierto en un navegador.
  return hostPermitido(headers.get("referer"));
}

/* ────────────────────────────────────────────────────────────────────────────
   6. Datos de procedencia
   ──────────────────────────────────────────────────────────────────────────── */

/**
 * IP real del visitante. En Netlify la petición llega por un proxy, así que la
 * IP de la conexión es del proxy: la buena es la primera de `x-forwarded-for`.
 */
export function ipDeLaPeticion(headers: Headers): string | undefined {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return headers.get("x-nf-client-connection-ip") || undefined;
}
