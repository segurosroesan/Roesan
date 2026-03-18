export const quoteData = {
    "seguro-de-auto": {
        id: "auto",
        slug: "seguro-de-auto",
        h1: "Cotizar Seguro de Auto en Colombia",
        subtitle: "Protege tu vehículo en minutos. Encuentra la mejor cobertura todo riesgo y asistencia 24/7.",
        title: "Cotizar Seguro de Auto y Todo Riesgo en Colombia | Roesan",
        description: "Cotiza fácil y rápido tu seguro de auto y póliza todo riesgo. Compara opciones con las mejores aseguradoras de Colombia y protege tu vehículo hoy mismo.",
        keywords: ["cotizar seguro de auto", "seguro de carro", "seguro todo riesgo", "seguro de auto Colombia", "cotizar seguro de auto en Bogotá"],
        features: [
            "Cobertura total por hurto y daños",
            "Asistencia en viaje y grúa 24/7",
            "Conductor elegido ilimitado",
            "Protección contra daños a terceros"
        ],
        iconName: "Car",
        serviceSlug: "vehiculos"
    },
    "seguro-de-salud": {
        id: "salud",
        slug: "seguro-de-salud",
        h1: "Cotizar Seguro de Salud Familiar",
        subtitle: "Acceso inmediato a los mejores especialistas y clínicas del país sin largas esperas.",
        title: "Cotizar Seguro de Salud en Colombia | Pólizas y Salud Integral",
        description: "Encuentra el mejor seguro de salud en Colombia. Cotiza pólizas individuales o familiares con cobertura en la mejor red de clínicas y hospitales.",
        keywords: ["cotizar seguro de salud", "seguro de salud Colombia", "medicina prepagada", "mejor seguro de salud", "seguro para familia"],
        features: [
            "Acceso directo a especialistas",
            "Habitación individual en hospitalización",
            "Atención médica domiciliaria",
            "Maternidad y urgencias cubiertas"
        ],
        iconName: "HeartPulse",
        serviceSlug: "vida-y-salud"
    },
    "medicina-prepagada": {
        id: "salud",
        slug: "medicina-prepagada",
        h1: "Cotizar Planes de Medicina Prepagada",
        subtitle: "Asegura el bienestar de tu familia con medicina prepagada premium a precios accesibles.",
        title: "Cotizar Medicina Prepagada en Colombia | Cobertura Premium",
        description: "Cotiza tu plan de medicina prepagada. Atención preferencial, acceso a especialistas sin remisión y urgencias en las mejores clínicas del país.",
        keywords: ["cotizar medicina prepagada", "medicina prepagada Colombia", "medicina prepagada en Bogotá", "comparar medicina prepagada"],
        features: [
            "Consultas sin copagos ni bonos ocultos",
            "Red médica VIP a nivel nacional",
            "Servicios de odontología y pediatría",
            "Agendamiento prioritario"
        ],
        iconName: "HeartPulse",
        serviceSlug: "vida-y-salud"
    },
    "seguro-de-vida": {
        id: "salud", // using health form as a fallback, or we can make the form adapt. For now, 'salud' fits better due to age requirement.
        slug: "seguro-de-vida",
        h1: "Cotizar Seguro de Vida",
        subtitle: "Garantiza el futuro financiero de tus seres queridos ante cualquier imprevisto.",
        title: "Cotizar Seguro de Vida en Colombia | Respaldo para tu Familia",
        description: "Cotiza tu seguro de vida hoy. Ofrecemos pólizas adaptables a tus ingresos para asegurar la tranquilidad y educación de tu familia.",
        keywords: ["cotizar seguro de vida", "seguro de vida Colombia", "mejor seguro de vida", "póliza de vida"],
        features: [
            "Respaldo económico por fallecimiento",
            "Indemnización por incapacidad total y permanente",
            "Cobertura de enfermedades graves",
            "Planes de ahorro y protección combinados"
        ],
        iconName: "HeartPulse",
        serviceSlug: "vida-y-salud"
    },
    "seguro-empresarial": {
        id: "empresarial",
        slug: "seguro-empresarial",
        h1: "Cotizar Seguro Empresarial y Pyme",
        subtitle: "Blinda la operación de tu empresa contra contingencias legales, daños e imprevistos.",
        title: "Cotizar Seguro Empresarial y para PYMES | Roesan",
        description: "Protege tu PYME o gran empresa. Cotiza seguros multiriesgo, pólizas de responsabilidad civil y seguros de maquinaria con asesoría experta.",
        keywords: ["cotizar seguro empresarial", "seguro pyme", "seguro para pymes Colombia", "seguro empresarial en Bogotá", "ARL"],
        features: [
            "Protección contra incendio y terremoto",
            "Responsabilidad civil extracontractual",
            "Cobertura contra hurto y fraude",
            "Respaldo para maquinaria y equipo"
        ],
        iconName: "Building2",
        serviceSlug: "empresariales"
    },
    "seguro-de-cumplimiento": {
        id: "cumplimiento",
        slug: "seguro-de-cumplimiento",
        h1: "Cotizar Pólizas de Cumplimiento",
        subtitle: "Gestión ágil para tus garantías contractuales. Aprobación en tiempo récord.",
        title: "Cotizar Seguro y Póliza de Cumplimiento | Contratación Segura",
        description: "Emite tus pólizas de cumplimiento de manera rápida. Ideales para contratos estatales, arrendamientos, anticipos y seriedad de la oferta.",
        keywords: ["cotizar seguro de cumplimiento", "póliza de cumplimiento Colombia", "seguro para contratistas", "seguro de cumplimiento en Bogotá"],
        features: [
            "Seriedad de la oferta comercial",
            "Garantía de buen manejo de anticipos",
            "Cumplimiento de obligaciones laborales",
            "Análisis financiero y cupos ágiles"
        ],
        iconName: "FileCheck",
        serviceSlug: "empresariales"
    }
};

export type QuoteRamo = keyof typeof quoteData;
export const getQuoteDataList = () => Object.values(quoteData);
export const getQuoteData = (slug: string) => quoteData[slug as QuoteRamo];
