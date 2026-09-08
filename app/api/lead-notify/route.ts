import { NextRequest, NextResponse } from "next/server";
import { ipDeLaPeticion, origenPermitido, superaLimitePorIp } from "@/lib/antiSpam";

const LEAD_RECIPIENTS = ["comercial@roesan.com", "seguros@roesan.com"];

/**
 * Avisa al equipo comercial de un lead nuevo.
 *
 * Este endpoint dispara correos hacia comercial@ y seguros@, así que estaba
 * abierto a que cualquiera inundara esas bandejas desde fuera del sitio. Lleva
 * las mismas dos barreras que `/api/crm-lead`; no lleva captcha porque se
 * invoca desde el código después de que el lead ya pasó por él.
 */
export async function POST(request: NextRequest) {
  if (!origenPermitido(request.headers)) {
    return NextResponse.json(
      { ok: false, error: "Origen no autorizado." },
      { status: 403 },
    );
  }

  const ip = ipDeLaPeticion(request.headers);
  if (superaLimitePorIp(ip, "lead-notify")) {
    console.warn(`[lead-notify] Límite de envíos superado desde ip=${ip}`);
    return NextResponse.json(
      { ok: false, error: "Demasiados envíos seguidos." },
      { status: 429 },
    );
  }

  try {
    const body = await request.json();
    const webhookUrl = process.env.LEADS_WEBHOOK_URL || process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn("Lead notification skipped: no LEADS_WEBHOOK_URL or N8N_WEBHOOK_URL configured.");
      return NextResponse.json({ ok: true, delivered: false, recipients: LEAD_RECIPIENTS });
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        recipients: LEAD_RECIPIENTS,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { ok: false, delivered: false, error: text || "Webhook delivery failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true, recipients: LEAD_RECIPIENTS });
  } catch (error) {
    console.error("Lead notification error:", error);
    return NextResponse.json(
      { ok: false, delivered: false, error: "Unexpected lead notification error" },
      { status: 500 }
    );
  }
}
