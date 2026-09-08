# Protección anti-spam del formulario web

## Qué pasó

Entre el 20 de junio y el 6 de septiembre de 2026 entraron 7 leads falsos por el
formulario de `/contacto`. Todos con la misma firma: nombre de letras al azar,
correo de Gmail con puntos inyectados (`a.x.ef.o.r.e@gmail.com` y
`axefore@gmail.com` son **el mismo buzón**), celular de 10 dígitos que no empieza
por 3, y siempre "Seguro de Auto". Cinco de los siete llegaron en los últimos
diez días: el ritmo iba en aumento.

La causa: `POST /api/crm-lead` escribía en la base del CRM con credenciales de
administrador sin captcha, sin límite de peticiones y sin honeypot. El control de
origen no servía de nada, porque `if (!origin) return true` dejaba pasar
cualquier petición hecha fuera de un navegador — y un script nunca manda esa
cabecera.

## Cómo está protegido ahora

Cuatro capas independientes en `lib/antiSpam.ts`. Si un bot aprende a esquivar
una, las otras siguen en pie.

| Capa | Qué hace | Dónde |
|---|---|---|
| Origen | Rechaza lo que no venga de una página del sitio. Sin `Origin` ni `Referer` válidos, 403. | `origenPermitido()` |
| Trampas | Campo invisible (honeypot) y tiempo mínimo de llenado de 3 s. | `detectarTrampas()` |
| Captcha | Cloudflare Turnstile, invisible, verificado en el servidor. | `verificarTurnstile()` |
| Límite por IP | 5 envíos cada 10 minutos, con contador propio por endpoint. | `superaLimitePorIp()` |
| Contenido | Rechaza con 2 señales o más (nombre impronunciable, Gmail con puntos, teléfono imposible, enlaces en el mensaje). | `analizarContenido()` |

Las heurísticas de contenido se probaron contra los 52 leads históricos del
sitio: **detectan los 7 falsos y no rechazan a ninguno de los 45 clientes
reales**.

Todos los rechazos responden lo mismo, con el mismo código. Es deliberado: decirle
al bot qué capa lo frenó sería darle el mapa para esquivarla. El motivo real
queda en el log del servidor (Netlify → Functions → `crm-lead`), con la IP.

## ⚠️ Falta un paso: cargar las claves de Turnstile

**Mientras no se haga, el captcha no se está aplicando.** Las otras capas sí
funcionan. Es un fail-open a propósito: si el captcha se exigiera sin claves
configuradas, el formulario dejaría de recibir leads reales.

1. Entrar a <https://dash.cloudflare.com> (crear cuenta si no hay; es gratis e
   ilimitado para este uso) → **Turnstile** → **Add site**.
2. Nombre: `Roesan Web`. Dominios: `roesan.com` y `www.roesan.com`.
   Widget mode: **Managed**.
3. Cloudflare da dos claves. En Netlify (sitio de la web) → **Site settings** →
   **Environment variables**, añadir:

   | Variable | Valor |
   |---|---|
   | `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | la *Site Key* (pública, va en el navegador) |
   | `TURNSTILE_SECRET_KEY` | la *Secret Key* (**nunca** en el código) |

4. Volver a desplegar el sitio. Listo: el visitante no verá nada distinto.

Para comprobar que quedó activo, en los logs de la función no debe volver a
aparecer `TURNSTILE_SECRET_KEY no configurada`.

## Cómo investigar un lead sospechoso

Desde septiembre de 2026 cada lead del sitio guarda `ip_origen`,
`origen_user_agent`, `origen_referer` y `email_normalizado` (el correo con los
puntos de Gmail colapsados, para ver de un vistazo que varios "remitentes
distintos" salen de una sola cuenta). Antes no se guardaba nada de esto y por eso
no se pudo rastrear ni uno de los siete.

## Pendiente

`QuoteFunnel` escribe la tabla `insurance_leads` de la base del **sitio**
directamente desde el navegador, lo que implica permisos públicos de escritura en
esa app de InstantDB. No afecta al CRM (ese camino sí pasa por `/api/crm-lead`),
pero conviene revisarlo.
