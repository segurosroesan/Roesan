import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { message, sessionId } = body;

        const n8nUrl = process.env.N8N_WEBHOOK_URL;

        if (!n8nUrl) {
            // Fallback mock if no N8N URL
            console.warn('N8N_WEBHOOK_URL not set. Returning mock response.');
            return NextResponse.json({ text: "Lo siento, no puedo procesar tu solicitud en este momento (Error de configuración)." });
        }

        const response = await fetch(n8nUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, sessionId }),
        });

        if (!response.ok) {
            throw new Error(`N8N Webhook error: ${response.statusText}`);
        }

        const data = await response.json();
        // Assuming n8n returns { "text": "AI response" } or similar
        // The "OpenAI" node usually returns 'content' or 'text'.
        // Adjust based on actual n8n output.
        return NextResponse.json(data);

    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ text: "Hubo un error al conectar con el asistente." }, { status: 500 });
    }
}
