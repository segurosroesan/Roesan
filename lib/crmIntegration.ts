/**
 * crmIntegration.ts
 * 
 * Módulo de integración con el CRM de Roesan.
 * Al completar un formulario de cotización en el sitio web, este módulo
 * crea simultáneamente un Lead y una Tarea de cotización en el CRM.
 * 
 * App ID del CRM: b389dc19-2c05-488d-9bf4-43d12abd95e0
 * (Distinto al App ID del sitio web — son dos bases InstantDB independientes)
 */

import { init, tx, id } from '@instantdb/core';

// Conexión exclusiva al CRM de Roesan
const crmDb = init({ appId: 'b389dc19-2c05-488d-9bf4-43d12abd95e0' });

interface LeadPayload {
  nombre: string;
  telefono?: string;
  email?: string;
  notas?: string;
}

/**
 * Envía un lead capturado en el sitio web al CRM de Roesan.
 * Crea el registro del Lead en el pipeline y genera automáticamente
 * una Tarea de cotización asociada.
 *
 * @param payload - Datos del prospecto
 * @returns true si el envío fue exitoso, false en caso de error
 */
export async function enviarLeadAlCRM(payload: LeadPayload): Promise<boolean> {
  const { nombre, telefono, email, notas } = payload;
  const newLeadId = id();

  try {
    await crmDb.transact([
      // 1. Crear el registro del Lead en el Pipeline
      tx.leads[newLeadId].update({
        name: nombre,
        phone: telefono || '',
        email: email || '',
        source: 'Sitio Web',
        status: 'Nuevo',
        notes: notas || 'Lead capturado desde formulario web.',
        createdAt: Date.now(),
      }),

      // 2. Crear la Tarea / Ticket de Cotización asociada
      tx.tasks[id()].update({
        description: `Cotizar seguro para prospecto: ${nombre}`,
        leadId: newLeadId,
        completed: false,
        createdAt: Date.now(),
      }),
    ]);

    console.log('✅ Lead y tarea enviados exitosamente al CRM de Roesan.');
    return true;
  } catch (error) {
    console.error('❌ Error al enviar lead al CRM de Roesan:', error);
    return false;
  }
}
