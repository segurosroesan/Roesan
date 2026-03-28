export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    categoryColor: string;
    content: BlogSection[];
}

export interface BlogSection {
    type: "intro" | "heading" | "paragraph" | "list" | "cta";
    text?: string;
    items?: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "seguro-inversion-no-gasto",
        title: "¿Por qué tener un seguro en Colombia no es un gasto sino una inversión?",
        excerpt:
            "En Colombia, muchas personas aún ven los seguros como un gasto innecesario. La realidad es completamente distinta: un seguro bien estructurado es una herramienta financiera clave para proteger tu patrimonio.",
        date: "2026-03-20",
        readTime: "4 min",
        category: "Educación Financiera",
        categoryColor: "bg-blue-100 text-blue-700",
        content: [
            {
                type: "intro",
                text: "En Colombia, muchas personas aún ven los seguros como un gasto innecesario. Sin embargo, la realidad es completamente distinta: un seguro bien estructurado es una herramienta financiera clave para proteger tu patrimonio, tu familia y tu tranquilidad.",
            },
            {
                type: "heading",
                text: "El verdadero riesgo no es pagar el seguro, es no tenerlo",
            },
            {
                type: "paragraph",
                text: "Un accidente de tránsito, una enfermedad grave o incluso un robo pueden generar gastos que fácilmente superan millones de pesos. Sin un seguro, esos costos salen directamente de tu bolsillo.",
            },
            {
                type: "list",
                items: [
                    "Un accidente automovilístico puede superar los $20 millones",
                    "Una hospitalización puede costar más de $10 millones",
                    "Un fallecimiento sin seguro de vida deja desprotegida a toda una familia",
                ],
            },
            {
                type: "heading",
                text: "Los seguros protegen lo que más te ha costado construir",
            },
            {
                type: "paragraph",
                text: "Cada persona trabaja años para construir su patrimonio. Un seguro permite que un imprevisto no destruya ese esfuerzo.",
            },
            {
                type: "list",
                items: [
                    "Seguro de vida → protege a tu familia",
                    "Seguro de salud → protege tu bienestar",
                    "Seguro de auto → protege tu patrimonio",
                    "Seguro de hogar → protege tus bienes",
                ],
            },
            {
                type: "heading",
                text: "Un seguro es una decisión financiera inteligente",
            },
            {
                type: "paragraph",
                text: "Las personas que entienden el valor del seguro no lo ven como un gasto, sino como una estrategia de protección y estabilidad.",
            },
            {
                type: "list",
                items: [
                    "Evita endeudamiento en emergencias",
                    "Permite continuidad económica",
                    "Reduce el impacto de eventos inesperados",
                ],
            },
            {
                type: "heading",
                text: "En Roesan te asesoramos, no solo te vendemos",
            },
            {
                type: "paragraph",
                text: "En Roesan Seguros analizamos tu situación y te recomendamos la mejor opción según tus necesidades reales. Porque no se trata de tener cualquier seguro, sino el adecuado.",
            },
            { type: "cta", text: "" },
        ],
    },
    {
        slug: "seguro-automovil-colombia-guia",
        title: "Seguro de automóvil en Colombia: lo que nadie te explica y deberías saber",
        excerpt:
            "Tener un carro en Colombia implica riesgos constantes. Aunque el SOAT es obligatorio, no es suficiente para protegerte realmente. Aquí te explicamos todo lo que debes saber.",
        date: "2026-03-15",
        readTime: "5 min",
        category: "Seguros de Autos",
        categoryColor: "bg-cyan-100 text-cyan-700",
        content: [
            {
                type: "intro",
                text: "Tener un carro en Colombia implica riesgos constantes. Aunque el SOAT es obligatorio, no es suficiente para protegerte realmente.",
            },
            {
                type: "heading",
                text: "Diferencia entre SOAT y seguro todo riesgo",
            },
            {
                type: "paragraph",
                text: "Muchas personas creen que con el SOAT están protegidas, pero este solo cubre:",
            },
            {
                type: "list",
                items: ["Lesiones a personas", "Atención médica básica"],
            },
            {
                type: "paragraph",
                text: "El SOAT NO cubre:",
            },
            {
                type: "list",
                items: ["Daños a tu vehículo", "Daños a terceros materiales", "Robo"],
            },
            {
                type: "paragraph",
                text: "El seguro todo riesgo sí incluye:",
            },
            {
                type: "list",
                items: [
                    "Daños propios",
                    "Responsabilidad civil",
                    "Robo total o parcial",
                    "Asistencia en carretera",
                ],
            },
            {
                type: "heading",
                text: "¿Qué debes revisar antes de comprar un seguro?",
            },
            {
                type: "paragraph",
                text: "No todos los seguros son iguales. Debes analizar:",
            },
            {
                type: "list",
                items: [
                    "Valor asegurado del vehículo",
                    "Deducibles",
                    "Cobertura de responsabilidad civil",
                    "Servicios adicionales",
                ],
            },
            {
                type: "heading",
                text: "El error más común: elegir solo por precio",
            },
            {
                type: "paragraph",
                text: "El seguro más barato puede terminar siendo el más costoso si no cubre adecuadamente un siniestro. Una cobertura baja de responsabilidad civil puede obligarte a pagar millones adicionales.",
            },
            {
                type: "heading",
                text: "Beneficios de tener una buena póliza",
            },
            {
                type: "list",
                items: [
                    "Protección total de tu patrimonio",
                    "Tranquilidad al conducir",
                    "Respaldo legal ante accidentes",
                    "Asistencia en carretera",
                ],
            },
            {
                type: "heading",
                text: "En Roesan te ayudamos a elegir bien",
            },
            {
                type: "paragraph",
                text: "En Roesan Seguros comparamos diferentes aseguradoras para ofrecerte la mejor opción en cobertura y precio. No vendemos pólizas, construimos soluciones.",
            },
            { type: "cta", text: "" },
        ],
    },
    {
        slug: "seguro-de-vida-decision-importante",
        title: "Seguro de vida: la decisión más importante que muchas personas están posponiendo",
        excerpt:
            "Hablar de seguro de vida no es fácil, pero es una de las decisiones más importantes que puedes tomar. El único seguro que siempre alguien va a cobrar.",
        date: "2026-03-10",
        readTime: "4 min",
        category: "Seguro de Vida",
        categoryColor: "bg-rose-100 text-rose-700",
        content: [
            {
                type: "intro",
                text: "Hablar de seguro de vida no es fácil, pero es una de las decisiones más importantes que puedes tomar: el único seguro que siempre alguien va a cobrar.",
            },
            {
                type: "heading",
                text: "¿Qué es realmente un seguro de vida?",
            },
            {
                type: "paragraph",
                text: "Es una herramienta que garantiza estabilidad económica a tu familia en caso de que tú faltes.",
            },
            {
                type: "heading",
                text: "¿Quién debería tenerlo?",
            },
            {
                type: "list",
                items: [
                    "Padres de familia",
                    "Personas con créditos (hipotecarios o personales)",
                    "Empresarios",
                    "Personas con dependientes económicos",
                ],
            },
            {
                type: "heading",
                text: "¿Qué cubre un seguro de vida?",
            },
            {
                type: "paragraph",
                text: "Dependiendo del plan, puede cubrir:",
            },
            {
                type: "list",
                items: [
                    "Fallecimiento",
                    "Incapacidad",
                    "Enfermedades graves",
                    "Ahorro o inversión (en algunos casos)",
                ],
            },
            {
                type: "heading",
                text: "El mayor error: dejarlo para después",
            },
            {
                type: "paragraph",
                text: 'Muchas personas piensan "Lo hago más adelante". Pero la realidad es:',
            },
            {
                type: "list",
                items: [
                    "Entre más joven, más barato",
                    "Entre más sano, mejores condiciones",
                    "No siempre será posible acceder después",
                ],
            },
            {
                type: "heading",
                text: "Más que un seguro, es un acto de responsabilidad",
            },
            {
                type: "paragraph",
                text: "Tener un seguro de vida no es solo una decisión financiera, es una decisión de protección familiar.",
            },
            {
                type: "heading",
                text: "En Roesan te acompañamos en cada paso",
            },
            {
                type: "paragraph",
                text: "En Roesan Seguros diseñamos planes personalizados según tu etapa de vida y necesidades. Tu tranquilidad y la de tu familia es nuestra prioridad.",
            },
            { type: "cta", text: "" },
        ],
    },
];
