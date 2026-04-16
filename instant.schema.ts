// Docs: https://www.instantdb.com/docs/modeling-data
// Schema sincronizado con la nube de InstantDB — última actualización: 2026-04-16

import { i } from "@instantdb/core";

const _schema = i.schema({
  entities: {
    "$files": i.entity({
      "path": i.string().unique().indexed(),
      "url": i.string().optional(),
    }),
    "$users": i.entity({
      "email": i.string().unique().indexed().optional(),
      "imageURL": i.string().optional(),
      "type": i.string().optional(),
    }),
    "chat_sessions": i.entity({
      "createdAt": i.number(),
      "status": i.string(),
      "updatedAt": i.number(),
      "userName": i.string().optional(),
      "userPhone": i.string().optional(),
    }),
    "contact_messages": i.entity({
      "createdAt": i.number().indexed(),
      "email": i.string().indexed(),
      "message": i.string(),
      "name": i.string(),
      "phone": i.string(),
    }),
    "insurance_leads": i.entity({
      "city": i.string().optional(),
      "companyEmployees": i.string().optional(),
      "companyName": i.string().optional(),
      "companyNit": i.string().optional(),
      "companySector": i.string().optional(),
      "contractType": i.string().optional(),
      "contractValue": i.string().optional(),
      "createdAt": i.number().indexed().optional(),
      "customerType": i.string().optional(),
      "driverBirthDate": i.string().optional(),
      "email": i.string().indexed().optional(),
      "healthCoverage": i.string().optional(),
      "lastName": i.string().optional(),
      "message": i.string().optional(),
      "name": i.string().optional(),
      "patientAge": i.string().optional(),
      "phone": i.string().optional(),
      "responsibleName": i.string().optional(),
      "selectedProducts": i.string().optional(),
      "status": i.string().indexed().optional(),
      "type": i.string().indexed().optional(),
      "vehiclePlate": i.string().optional(),
      "vehicleYear": i.string().optional(),
    }),
    "messages": i.entity({
      "content": i.string(),
      "createdAt": i.number().indexed(),
      "role": i.string(),
    }),
  },
  links: {
    "$usersLinkedPrimaryUser": {
      "forward": {
        "on": "$users",
        "has": "one",
        "label": "linkedPrimaryUser",
        "onDelete": "cascade"
      },
      "reverse": {
        "on": "$users",
        "has": "many",
        "label": "linkedGuestUsers"
      }
    },
    "chat_sessionsMessages": {
      "forward": {
        "on": "chat_sessions",
        "has": "many",
        "label": "messages"
      },
      "reverse": {
        "on": "messages",
        "has": "one",
        "label": "session"
      }
    }
  },
  rooms: {}
});

// This helps TypeScript display nicer intellisense
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema }
export default schema;
