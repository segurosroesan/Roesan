import { i } from "@instantdb/core";

const _schema = i.schema({
    entities: {
        contact_messages: i.entity({
            name: i.string(),
            phone: i.string(),
            email: i.string().indexed(),
            message: i.string(),
            createdAt: i.number().indexed(),
        }),
        chat_sessions: i.entity({
            status: i.string(), // 'active', 'closed', 'archived'
            userName: i.string().optional(),
            userPhone: i.string().optional(),
            createdAt: i.number(),
            updatedAt: i.number(),
        }),
        messages: i.entity({
            role: i.string(), // 'user', 'assistant', 'system'
            content: i.string(),
            createdAt: i.number().indexed(),
        }),
        insurance_leads: i.entity({
            type: i.string().indexed(), // 'auto', 'salud', 'empresarial', 'cumplimiento'
            name: i.string(),
            phone: i.string(),
            email: i.string().indexed(),
            city: i.string().optional(),
            // Auto
            vehiclePlate: i.string().optional(),
            vehicleBrand: i.string().optional(),
            vehicleModel: i.string().optional(),
            vehicleYear: i.string().optional(),
            vehicleUse: i.string().optional(),
            driverBirthDate: i.string().optional(),
            // Salud
            patientAge: i.string().optional(),
            healthCoverage: i.string().optional(),
            currentEps: i.string().optional(),
            // Empresa
            companyName: i.string().optional(),
            companyNit: i.string().optional(),
            companySector: i.string().optional(),
            companyEmployees: i.string().optional(),
            companyRisk: i.string().optional(),
            // Cumplimiento
            contractType: i.string().optional(),
            contractValue: i.string().optional(),
            contractEntity: i.string().optional(),
            
            // Meta
            status: i.string().indexed(), // 'nuevo', 'contactado', 'cotizado'
            createdAt: i.number().indexed(),
        }),
    },
    links: {
        chatSessionMessages: {
            forward: {
                on: "chat_sessions",
                has: "many",
                label: "messages",
            },
            reverse: {
                on: "messages",
                has: "one",
                label: "session",
            },
        },
    },
});

export default _schema;
