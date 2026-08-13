/**
 * crmIntegration.ts
 * 
 * Módulo cliente de integración con el CRM de Roesan.
 *
 * Los formularios envían la información a un Route Handler del sitio. El
 * servidor es quien escribe en CRMREAL con credenciales administrativas;
 * así no se exponen tokens ni se depende de permisos públicos de InstantDB.
 */

interface LeadPayload {
  nombre: string;
  lastName?: string;
  telefono?: string;
  email?: string;
  notas?: string;              // texto completo de observaciones/notas
  observaciones?: string;      // mensaje libre del usuario
  type?: string;
  customerType?: string;
  selectedProducts?: string;   // label legible de los ramos seleccionados
  vehiclePlate?: string;
  documento?: string;          // cédula conductora
  companyName?: string;
  companyNit?: string;
  responsibleName?: string;
  responsiblePhone?: string;
  driverBirthDate?: string;
  hasPledge?: boolean;
  pledgeDetails?: string;
  drivingZone?: string;
  pipeline_tipo?: string;
}

export interface EnviarLeadResult {
  ok: boolean;
  /** id del lead creado en CRMREAL (distinto del id local de `insurance_leads`). */
  leadId?: string;
}

/**
 * Envía un lead capturado en el sitio web al endpoint seguro del servidor.
 */
export async function enviarLeadAlCRM(payload: LeadPayload): Promise<EnviarLeadResult> {
  try {
    const response = await fetch("/api/crm-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => null);
    if (!response.ok || result?.ok !== true) {
      console.error("❌ CRMREAL rechazó el lead:", result?.error || response.statusText);
      return { ok: false };
    }

    return { ok: true, leadId: result?.leadId };
  } catch (error) {
    console.error("❌ Error al conectar con CRMREAL:", error);
    return { ok: false };
  }
}
