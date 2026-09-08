/* ============================================================================
   instant.perms.ts — Reglas de permisos de la base del SITIO WEB
   ----------------------------------------------------------------------------
   POR QUÉ EXISTE
   --------------
   InstantDB NO trae permisos por defecto: sin este archivo, la base queda
   ABIERTA. Cualquiera con el App ID (que va en el HTML, no es secreto) podía
   leer los leads y los mensajes de contacto (nombres, correos, teléfonos) sin
   autenticarse. Se detectó y cerró el 07/09/2026.

   QUÉ HACE
   --------
   - `insurance_leads`: el formulario de cotización (QuoteFunnel) lo crea desde
     el navegador del visitante, que NO tiene sesión — por eso `create` queda
     abierto. Pero NADIE debe poder LEER esa tabla desde el cliente, así que
     `view` se cierra. El lead que de verdad entra al CRM viaja por
     `POST /api/crm-lead`, que sí está blindado (captcha, honeypot, límite).
   - Todo lo demás (mensajes de contacto y tablas legacy del chat): cerrado.
     El sitio no lee ni escribe esas entidades desde código vivo.

   CÓMO PUBLICAR
   -------------
   Desde la raíz de este repo:  npx instant-cli push perms

   ⚠️ Tras publicar, verificar que el formulario de cotización sigue creando el
   lead y que una lectura anónima de `insurance_leads` devuelve "permission
   denied".

   PENDIENTE (mejora futura)
   -------------------------
   Que `insurance_leads` se cree también por un route handler del servidor, para
   poder cerrar `create` del todo. Hoy sigue abierto porque el QuoteFunnel
   escribe directo; el dato sensible ya no se puede leer, que era la brecha.
   ========================================================================== */

import type { InstantRules } from '@instantdb/react';

const rules = {
  insurance_leads: {
    allow: {
      view: 'false',
      create: 'true',
      update: 'false',
      delete: 'false',
    },
  },
  // Contacto y tablas legacy del chat: sin lectura ni escritura desde el cliente.
  $default: {
    allow: {
      view: 'false',
      create: 'false',
      update: 'false',
      delete: 'false',
    },
  },
  attrs: {
    allow: {
      create: 'false',
    },
  },
} satisfies InstantRules;

export default rules;
