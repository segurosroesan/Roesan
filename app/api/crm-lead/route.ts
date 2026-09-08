import { id, init, tx } from "@instantdb/admin";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  analizarContenido,
  detectarTrampas,
  ipDeLaPeticion,
  origenPermitido,
  normalizarEmail,
  superaLimitePorIp,
  verificarTurnstile,
} from "@/lib/antiSpam";

export const runtime = "nodejs";

const leadSchema = z.object({
  nombre: z.string().trim().min(2).max(120),
  lastName: z.string().trim().max(120).optional(),
  telefono: z.string().trim().max(30).optional(),
  email: z.string().trim().max(180).optional(),
  notas: z.string().trim().max(5000).optional(),
  observaciones: z.string().trim().max(3000).optional(),
  type: z.string().trim().max(80).optional(),
  customerType: z.string().trim().max(40).optional(),
  selectedProducts: z.string().trim().max(1000).optional(),
  vehiclePlate: z.string().trim().max(20).optional(),
  documento: z.string().trim().max(40).optional(),
  companyName: z.string().trim().max(180).optional(),
  companyNit: z.string().trim().max(40).optional(),
  responsibleName: z.string().trim().max(120).optional(),
  responsiblePhone: z.string().trim().max(30).optional(),
  driverBirthDate: z.string().trim().max(30).optional(),
  hasPledge: z.boolean().optional(),
  entidadPrenda: z.string().trim().max(500).optional(),
  drivingZone: z.string().trim().max(120).optional(),
  pipeline_tipo: z.string().trim().max(40).optional(),

  // Campos anti-spam. No se guardan en el lead: solo sirven para decidir si la
  // solicitud entra. Ver lib/antiSpam.ts.
  /** Token que genera el widget de Cloudflare Turnstile en el navegador. */
  captchaToken: z.string().trim().max(4000).optional(),
  /** Campo trampa, invisible para una persona. Si viene lleno, es un bot. */
  empresaWeb: z.string().max(200).optional(),
  /** Milisegundos en que se pintó el formulario, para medir cuánto tardó. */
  formularioAbiertoEn: z.number().optional(),
});

type LeadPayload = z.infer<typeof leadSchema>;

interface CrmTarget {
  name: "crmreal" | "legacy";
  appId: string;
  adminToken: string;
}

function getTargets(): CrmTarget[] {
  const targets: CrmTarget[] = [];
  const crmrealAppId = process.env.CRMREAL_INSTANT_APP_ID;
  const crmrealAdminToken = process.env.CRMREAL_INSTANT_ADMIN_TOKEN;

  if (crmrealAppId && crmrealAdminToken) {
    targets.push({
      name: "crmreal",
      appId: crmrealAppId,
      adminToken: crmrealAdminToken,
    });
  }

  const legacyAppId = process.env.CRM_LEGACY_INSTANT_APP_ID;
  const legacyAdminToken = process.env.CRM_LEGACY_INSTANT_ADMIN_TOKEN;
  if (legacyAppId && legacyAdminToken) {
    targets.push({
      name: "legacy",
      appId: legacyAppId,
      adminToken: legacyAdminToken,
    });
  }

  return targets;
}

/** Rastro de dónde vino la solicitud. Sin esto no hay forma de investigar un abuso. */
export interface Procedencia {
  ip?: string;
  userAgent?: string;
  referer?: string;
}

function leadRecord(payload: LeadPayload, now: number, procedencia: Procedencia) {
  return {
    name: payload.nombre,
    lastName: payload.lastName || "",
    phone: payload.telefono || "",
    email: payload.email || "",
    source: "Sitio Web",
    status: "Nuevos",
    // Los leads nuevos del sitio web se asignan a Alejandro por defecto.
    asesorId: "alejandro",
    pipeline_tipo: payload.pipeline_tipo || "preventa",
    priority: "Media",
    score: 0,
    notes: payload.notas || "",
    observaciones: payload.observaciones || "",
    createdBy: "Sitio web de Roesan",
    createdByEmail: "",
    creationOrigin: "sitio_web",
    createdAt: now,
    updatedAt: now,
    type: payload.type || "persona",
    customerType: payload.customerType || "persona",
    selectedProducts: payload.selectedProducts || "",
    vehiclePlate: payload.vehiclePlate || "",
    hasPledge: payload.hasPledge ?? false,
    // `pledgeDetails` era texto libre que en 721 leads nadie llenó nunca, y su
    // placeholder pedía justo lo mismo que este campo. Queda uno solo.
    entidad_prenda: payload.entidadPrenda || "",
    drivingZone: payload.drivingZone || "",
    documento: payload.documento || "",
    // `driverBirthDate` no lo lee nadie en el CRM; el campo vivo —el que se ve
    // en la ficha y el que prellena el formulario— es `fecha_nacimiento`. Se
    // escriben los dos para no romper nada que dependa del viejo.
    driverBirthDate: payload.driverBirthDate || "",
    fecha_nacimiento: payload.driverBirthDate || "",
    companyName: payload.companyName || "",
    companyNit: payload.companyNit || "",
    responsibleName: payload.responsibleName || "",
    responsiblePhone: payload.responsiblePhone || "",

    // Procedencia técnica. Cuando en junio empezaron a llegar leads falsos no
    // pudimos rastrear ni uno porque no guardábamos nada de esto.
    // `ip_origen` ya existía en el esquema del CRM (consentimiento Ley 1581);
    // se reutiliza en vez de abrir un campo paralelo con el mismo significado.
    ip_origen: procedencia.ip || "",
    origen_user_agent: (procedencia.userAgent || "").slice(0, 300),
    origen_referer: (procedencia.referer || "").slice(0, 300),
    // Gmail ignora los puntos: guardar la forma normalizada permite ver de un
    // vistazo que varios "remitentes distintos" son en realidad un solo buzón.
    email_normalizado: payload.email ? normalizarEmail(payload.email) : "",
  };
}

async function createInTarget(
  target: CrmTarget,
  payload: LeadPayload,
  leadId: string,
  now: number,
  procedencia: Procedencia,
) {
  const db = init({ appId: target.appId, adminToken: target.adminToken });

  // El lead es la operación crítica. Las tareas y el timeline se crean después
  // para que un fallo auxiliar nunca haga desaparecer la solicitud principal.
  await db.transact(tx.leads[leadId].update(leadRecord(payload, now, procedencia)));

  const taskId = id();
  const interactionId = id();
  const quoteLabel = payload.selectedProducts || payload.type || "seguro";

  const auxiliaryResults = await Promise.allSettled([
    db.transact([
      tx.tasks[taskId].update({
        title: `Cotizar ${quoteLabel}`,
        description: `Cotizar ${quoteLabel} para: ${payload.nombre}`,
        leadId,
        completed: false,
        createdAt: now,
      }),
      tx.tasks[taskId].link({ lead: leadId }),
    ]),
    db.transact([
      tx.interacciones[interactionId].update({
        leadId,
        tipo: "creacion_lead",
        notas: "Lead creado automáticamente desde el formulario del sitio web de Roesan.",
        createdBy: "Sitio web de Roesan",
        metadata: { origin: "sitio_web", source: "Sitio Web" },
        createdAt: now,
      }),
      tx.interacciones[interactionId].link({ lead: leadId }),
    ]),
  ]);

  const auxiliaryFailures = auxiliaryResults.filter(
    (result) => result.status === "rejected",
  ).length;

  return { target: target.name, ok: true, auxiliaryFailures };
}

/**
 * Todos los rechazos por spam responden lo mismo y con el mismo código.
 *
 * Es a propósito: si le dijéramos al bot cuál capa lo frenó, le estaríamos
 * dando el mapa para esquivarla. El motivo real queda solo en el log del
 * servidor (Netlify → Functions → crm-lead).
 */
function rechazar(motivo: string, ip: string | undefined) {
  console.warn(`[crm-lead] Solicitud rechazada (${motivo}) desde ip=${ip || "?"}`);
  return NextResponse.json(
    { ok: false, error: "No pudimos procesar la solicitud. Intenta de nuevo." },
    { status: 400 },
  );
}

export async function POST(request: NextRequest) {
  const ip = ipDeLaPeticion(request.headers);

  if (!origenPermitido(request.headers)) {
    return NextResponse.json(
      { ok: false, error: "Origen no autorizado." },
      { status: 403 },
    );
  }

  if (superaLimitePorIp(ip, "crm-lead")) {
    console.warn(`[crm-lead] Límite de envíos superado desde ip=${ip}`);
    return NextResponse.json(
      { ok: false, error: "Demasiados envíos seguidos. Espera unos minutos." },
      { status: 429 },
    );
  }

  const parsed = leadSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Datos del formulario inválidos." },
      { status: 400 },
    );
  }

  // Capa 1 — trampas del formulario: gratis, silenciosas y las cae un bot tonto.
  const trampa = detectarTrampas({
    honeypot: parsed.data.empresaWeb,
    abiertoEn: parsed.data.formularioAbiertoEn,
  });
  if (trampa) return rechazar(trampa, ip);

  // Capa 2 — captcha de Cloudflare: la defensa fuerte contra un bot con navegador.
  const captcha = await verificarTurnstile(parsed.data.captchaToken, ip);
  if (!captcha.ok) return rechazar(`captcha:${captcha.motivo}`, ip);

  // Capa 3 — el contenido en sí. Ataja al bot que sí resolvió el captcha pero
  // sigue inventando nombres y teléfonos imposibles.
  const contenido = analizarContenido({
    nombre: parsed.data.nombre,
    email: parsed.data.email,
    telefono: parsed.data.telefono,
    mensaje: parsed.data.observaciones || parsed.data.notas,
  });
  if (contenido.puntaje >= 2) {
    return rechazar(`contenido:${contenido.señales.join("+")}`, ip);
  }

  const procedencia: Procedencia = {
    ip,
    userAgent: request.headers.get("user-agent") || undefined,
    referer: request.headers.get("referer") || undefined,
  };

  const targets = getTargets();
  const crmrealTarget = targets.find((target) => target.name === "crmreal");
  if (!crmrealTarget) {
    console.error("CRMREAL environment variables are not configured.");
    return NextResponse.json(
      { ok: false, error: "CRMREAL no está configurado en el servidor." },
      { status: 503 },
    );
  }

  const leadId = id();
  const now = Date.now();
  const results = await Promise.all(
    targets.map(async (target) => {
      try {
        return await createInTarget(target, parsed.data, leadId, now, procedencia);
      } catch (error) {
        console.error(`Error creating lead in ${target.name}:`, error);
        return {
          target: target.name,
          ok: false,
          auxiliaryFailures: 0,
        };
      }
    }),
  );

  const crmrealResult = results.find((result) => result.target === "crmreal");
  if (!crmrealResult?.ok) {
    return NextResponse.json(
      { ok: false, error: "CRMREAL no confirmó la creación del lead.", results },
      { status: 502 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      leadId,
      mirroredToLegacy: results.some(
        (result) => result.target === "legacy" && result.ok,
      ),
      results,
    },
    { status: 201 },
  );
}
