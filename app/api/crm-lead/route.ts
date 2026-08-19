import { id, init, tx } from "@instantdb/admin";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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
  pledgeDetails: z.string().trim().max(500).optional(),
  drivingZone: z.string().trim().max(120).optional(),
  pipeline_tipo: z.string().trim().max(40).optional(),
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

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const hostname = new URL(origin).hostname;
    return (
      hostname === "roesan.com" ||
      hostname === "www.roesan.com" ||
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname.endsWith(".netlify.app")
    );
  } catch {
    return false;
  }
}

function leadRecord(payload: LeadPayload, now: number) {
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
    pledgeDetails: payload.pledgeDetails || "",
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
  };
}

async function createInTarget(
  target: CrmTarget,
  payload: LeadPayload,
  leadId: string,
  now: number,
) {
  const db = init({ appId: target.appId, adminToken: target.adminToken });

  // El lead es la operación crítica. Las tareas y el timeline se crean después
  // para que un fallo auxiliar nunca haga desaparecer la solicitud principal.
  await db.transact(tx.leads[leadId].update(leadRecord(payload, now)));

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

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { ok: false, error: "Origen no autorizado." },
      { status: 403 },
    );
  }

  const parsed = leadSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Datos del formulario inválidos." },
      { status: 400 },
    );
  }

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
        return await createInTarget(target, parsed.data, leadId, now);
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
