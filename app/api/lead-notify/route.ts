import { NextRequest, NextResponse } from "next/server";

const LEAD_RECIPIENTS = ["Comercial@roesan.com", "Seguros@roesan.com"];

export async function POST(request: NextRequest) {
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
