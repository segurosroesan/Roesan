import { id, init, tx } from "@instantdb/admin";
import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { z } from "zod";

export const runtime = "nodejs";

/**
 * Ramos que ya tienen formulario detallado en el CRM (apps/backend/src/forms/form-definitions.ts).
 * Si el producto elegido en el funnel de cotización no está aquí, no se genera formulario:
 * el cliente se queda con el mensaje de agradecimiento normal.
 */
const RAMOS_SOPORTADOS: Record<string, string> = {
  hogar: "Hogar",
  mascotas: "Mascotas",
  vida: "Vida",
  pyme: "Pyme / Comercio",
  copropiedades: "Copropiedades / Conjuntos Residenciales",
};

const DEFAULT_EXPIRA_DIAS = 14;

const bodySchema = z.object({
  leadId: z.string().trim().min(1),
  ramo: z.string().trim().min(1),
});

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

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false, error: "Origen no autorizado." }, { status: 403 });
  }

  const parsed = bodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Datos inválidos." }, { status: 400 });
  }

  const { leadId, ramo } = parsed.data;
  const ramoName = RAMOS_SOPORTADOS[ramo];
  if (!ramoName) {
    // No es un error: este ramo simplemente no tiene formulario detallado todavía.
    return NextResponse.json({ ok: true, supported: false });
  }

  const appId = process.env.CRMREAL_INSTANT_APP_ID;
  const adminToken = process.env.CRMREAL_INSTANT_ADMIN_TOKEN;
  if (!appId || !adminToken) {
    console.error("CRMREAL environment variables are not configured.");
    return NextResponse.json(
      { ok: false, error: "CRMREAL no está configurado en el servidor." },
      { status: 503 },
    );
  }

  const db = init({ appId, adminToken });
  const token = randomBytes(32).toString("base64url");
  const linkId = id();
  const interaccionId = id();
  const ahora = Date.now();
  const expiresAt = ahora + DEFAULT_EXPIRA_DIAS * 24 * 60 * 60 * 1000;

  try {
    await db.transact([
      tx.form_links[linkId].update({
        token,
        leadId,
        ramo,
        estado: "enviado",
        canalEnvio: "sitio_web",
        expiresAt,
        sentAt: ahora,
        createdBy: "Sitio web de Roesan",
        createdAt: ahora,
      }),
      tx.interacciones[interaccionId].update({
        leadId,
        tipo: "formulario_enviado",
        notas: `Formulario de ${ramoName} enviado automáticamente desde el sitio web tras la cotización.`,
        createdBy: "Sitio web de Roesan",
        metadata: { ramo, formLinkId: linkId, canal: "sitio_web" },
        createdAt: ahora,
      }),
      tx.interacciones[interaccionId].link({ lead: leadId }),
    ]);
  } catch (error) {
    console.error("Error creating form link:", error);
    return NextResponse.json(
      { ok: false, error: "No se pudo generar el formulario." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, supported: true, token }, { status: 201 });
}
