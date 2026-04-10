export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    categoryColor: string;
    coverImage?: string;
    content: BlogSection[];
}

export interface BlogSection {
    type: "intro" | "heading" | "paragraph" | "list" | "cta" | "image";
    text?: string;
    items?: string[];
    imageUrl?: string;
    imageAlt?: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "costo-seguro-contra-todo-riesgo-bogota",
        title: "¿Cuánto cuesta un Seguro Automotriz Contra Todo Riesgo en Bogotá en 2026?",
        excerpt: "Bogotá tiene desafíos únicos: trancones interminables, granizadas sorpresivas y un alto volumen de incidentes menores. Descubre cuánto vale proteger tu carro aquí y por qué es vital.",
        date: "2026-04-08",
        readTime: "7 min",
        category: "Seguros de Autos",
        categoryColor: "bg-cyan-100 text-cyan-700",
        coverImage: "/images/blog/cover_auto.png",
        content: [
            {
                type: "intro",
                text: "Manejar en Bogotá es, para muchos, un deporte extremo. Entre el estrés de la Avenida Boyacá en hora pico, los cambios de carril abruptos en la Autopista Norte y el clima impredecible que suele traer granizadas devastadoras, tu vehículo está en constante exposición. La pregunta más común que recibimos en Roesan es: ¿Cuánto cuesta un seguro todo riesgo en Bogotá? Aquí te desglosamos la realidad para el 2026."
            },
            {
                type: "heading",
                text: "Los factores que definen el precio en la capital"
            },
            {
                type: "paragraph",
                text: "En Bogotá, las aseguradoras calculan el riesgo considerando múltiples variables. No existe una tarifa única, pero el rango oscila entre $1.2M y $4.5M COP anuales dependiendo de:"
            },
            {
                type: "list",
                items: [
                    "Índice de hurto del modelo: Carros muy robados en localidades específicas tienen primas más altas.",
                    "Frecuencia de accidentes urbanos: Las estadísticas de choques simples (latas) en intersecciones clave incrementan el riesgo.",
                    "Perfil del conductor: Edad, experiencia y si guarda el vehículo en un parqueadero cubierto."
                ]
            },
            {
                type: "heading",
                text: "Granizo y Vandalismo: Las coberturas vitales en Bogotá"
            },
            {
                type: "paragraph",
                text: "Un diferencial innegociable de una póliza Todo Riesgo en Bogotá es la protección por daños de fuerza mayor. Una \"granizada bogotana\" promedio puede arruinar el capó, techo y cristales, cuya reparación de taller certificado excede los $5 millones de pesos. El amparo de Responsabilidad Civil también es crucial por accidentes envolvendo motos o ciclistas, actores viales muy frecuentes en la ciudad."
            },
            {
                type: "cta", text: ""
            }
        ]
    },
    {
        slug: "medicina-prepagada-adultos-mayores-bogota",
        title: "Mejor Medicina Prepagada para Adultos Mayores en Bogotá",
        excerpt: "Garantiza acceso directo a especialistas en Fundación Santa Fe, Clínica del Country y Shaio. Analizamos los mejores planes para el adulto mayor sin largas esperas.",
        date: "2026-04-06",
        readTime: "6 min",
        category: "Seguro de Vida",
        categoryColor: "bg-rose-100 text-rose-700",
        content: [
            {
                type: "intro",
                text: "El sistema de salud EPS, aunque funcional para temas básicos, suele colapsar cuando nuestros padres o abuelos requieren atención especializada. En Bogotá, las esperas para un cardiólogo o especialista vascular pueden tardar meses. La medicina prepagada para adultos mayores no es un lujo, es una vía rápida para preservar su calidad de vida."
            },
            {
                type: "heading",
                text: "¿Por qué Bogotá es clave para elegir un buen plan?"
            },
            {
                type: "paragraph",
                text: "Bogotá concentra de las mejores infraestructuras clínicas de Latinoamérica. Al adquirir medicina prepagada, evalúas el directorio médico al que te da acceso. Un buen plan garantiza atención prioritaria en la Fundación Santa Fe, Clínica Shaio o Clínica del Country, sin autorizaciones previas tortuosas."
            },
            {
                type: "list",
                items: [
                    "Asegura que incluyan médicos domiciliarios, ya que el clima y tráfico bogotano hacen difícil el desplazamiento.",
                    "Valida si existen exclusiones por pre-existencias en adultos mayores de 60 años.",
                    "Revisa convenios de terapias respiratorias y exámenes diagnósticos especializados."
                ]
            },
            {
                type: "heading",
                text: "Asesoría especializada para tu familia"
            },
            {
                type: "paragraph",
                text: "Sabemos que a partir de los 60 años es más complejo ser aceptado o resulta sumamente costoso. En Roesan analizamos opciones de inclusión como Planes Familiares, Planes Complementarios (PAC) o seguros de salud para asegurar que consigan la mejor relación costo-beneficio."
            },
            {
                type: "cta", text: ""
            }
        ]
    },
    {
        slug: "seguro-inversion-no-gasto",
        title: "¿Por qué tener un seguro en Colombia no es un gasto sino la mejor inversión para tu futuro?",
        excerpt:
            "En Colombia, muchas personas aún ven los seguros como un gasto innecesario. Descubre por qué una póliza bien estructurada es una herramienta financiera clave para proteger tu patrimonio de la inflación y los imprevistos.",
        date: "2026-03-20",
        readTime: "6 min",
        category: "Educación Financiera",
        categoryColor: "bg-blue-100 text-blue-700",
        content: [
            {
                type: "intro",
                text: "En ciudades como Bogotá, Medellín o Cali, muchas personas aún ven los acuerdos de asegurabilidad como una renta que merma su bolsillo mensual. Sin embargo, la perspectiva financiera moderna es categórica: un seguro bien estructurado no es un recibo mensual más, es el cerrojo de tu patrimonio frente a la volatilidad económica en Colombia.",
            },
            {
                type: "heading",
                text: "El verdadero riesgo financiero: asimilar el impacto con tu propio bolsillo",
            },
            {
                type: "paragraph",
                text: "Un accidente de tránsito, una enfermedad compleja fuera de las EPS, o incluso un daño estructural en tu vivienda debido al clima cambiante en Colombia, pueden desencadenar gastos que superan fácilmente decenas de millones de pesos. Si no cuentas con respaldo asegurador, todos esos costos recaen sobre tus ahorros.",
            },
            {
                type: "list",
                items: [
                    "Sustituir una pérdida total de vehículo puede comprometer créditos a tasas altas (superiores al 20% E.A.).",
                    "Un tratamiento oncológico o especializado en las principales clínicas del país excede frecuentemente tu capacidad de ahorro.",
                    "La ausencia de un proveedor de familia representa, en promedio, una desestabilización económica para los dependientes de más de 5 años.",
                ],
            },
            {
                type: "heading",
                text: "Proteger lo que te costó años construir: El fin último del Seguro",
            },
            {
                type: "paragraph",
                text: "Cada ladrillo, cada inversión comercial y el estilo de vida que le das a tu familia requiere esfuerzo. Transferirle ese riesgo a una aseguradora en Colombia a través de Roesan es el equivalente a proteger esos años de esfuerzo.",
            },
            {
                type: "list",
                items: [
                    "Seguro de vida integral → Garantiza el pago de deudas y educación para tus hijos.",
                    "Seguro de salud (Medicina prepagada/Póliza de Salud) → Acceso a especialistas VIP, eludiendo meses de espera.",
                    "Seguro de auto Todo Riesgo → Evita devaluar tu medio de transporte por siniestros.",
                    "Pólizas PYME Empresariales → Asegura la continuidad de operaciones de tu negocio frente a robos o catástrofes.",
                ],
            },
            {
                type: "heading",
                text: "Menor endeudamiento y estabilidad: Beneficios a largo plazo",
            },
            {
                type: "paragraph",
                text: "Las encuestas de inclusión financiera en el país denotan que el porcentaje de familias que caen en mora extrema por imprevistos médicos o vehiculares es muy alto. Eludir este ciclo de endeudamiento es precisamente la función silenciosa, pero irrefutable, de la póliza de seguros.",
            },
            {
                type: "list",
                items: [
                    "Tus emergencias son pagadas con capital de la aseguradora, no del ahorro neto.",
                    "Al elegir pólizas de inversión en seguros de vida, tu capital genera rendimiento (Ahorro + Protección).",
                    "Evitas rematar patrimonio inmobiliario para costear emergencias (evitando pérdidas del 30% a 40% del valor comercial).",
                ],
            },
            {
                type: "heading",
                text: "En Roesan Seguros te asesoramos con transparencia",
            },
            {
                type: "paragraph",
                text: "Nuestro compromiso como agencia en Colombia no es empujar ventas superficiales. Evaluamos tu nivel de riesgo, tu ubicación geográfica y estructura familiar para que accedas a la solución que efectivamente va a blindar tus finanzas a precios competitivos del mercado.",
            },
            { type: "cta", text: "" },
        ],
    },
    {
        slug: "seguro-automovil-colombia-guia",
        title: "Seguro de Auto Todo Riesgo en Colombia: No basta con el SOAT (Guía Definitiva)",
        excerpt:
            "Conducir en ciudades colombianas implica riesgos diarios. Aunque el SOAT es obligatorio por ley, este no respalda tus rayones, robos ni te salva de multas civiles millonarias. Entiende cómo blindar tu vehículo.",
        date: "2026-03-15",
        readTime: "7 min",
        category: "Seguros de Autos",
        categoryColor: "bg-cyan-100 text-cyan-700",
        coverImage: "/images/blog/cover_auto.png",
        content: [
            {
                type: "intro",
                text: "Con el constante volumen de tráfico en Bogotá, los cerros transitados de Medellín o el clima en la Costa, tener un vehículo en Colombia es un reto. Millones de conductores se encomiendan solo a su experiencia y al documento de SOAT, desconociendo el cráter legal y financiero al que se exponen.",
            },
            {
                type: "heading",
                text: "¿Por qué el SOAT es solo la 'punta del iceberg'?",
            },
            {
                type: "paragraph",
                text: "El Seguro Obligatorio (SOAT) es estricto en su alcance: está diseñado por el gobierno para salvar vidas, financiando la infraestructura hospitalaria de emergencias. Pero tu patrimonio queda a la deriva.",
            },
            {
                type: "list",
                items: [
                    "Cubre únicamente lesiones a peatones, conductores y pasajeros en el siniestro.",
                    "El tope de cobertura hospitalaria en Colombia es delimitado a salarios mínimos legales diarios vigentes (SMLDV).",
                    "NO paga rayones al bumper del vecino.",
                    "NO repone tu carro si fue hurtado a mano armada.",
                    "NO te defiende de demandas civiles si causaste un accidente mayor.",
                ],
            },
            {
                type: "image",
                imageUrl: "/images/blog/inside_auto.png",
                imageAlt: "Familia colombiana tranquila manejando en su carro protegido por póliza Todo Riesgo. Roesan Seguros.",
            },
            {
                type: "heading",
                text: "La Póliza Todo Riesgo: Tu Escudo Completo",
            },
            {
                type: "paragraph",
                text: "Un seguro Todo Riesgo (Voluntario) es el contrato que ampara la estructura y valor comercial de tu vehículo (bajo estándares de referencias como Fasecolda). Incluye:",
            },
            {
                type: "list",
                items: [
                    "Cobertura ante Pérdida Total o Parcial (Daños propios ocasionados por choques, incendios o clima extremo).",
                    "Responsabilidad Civil Extracontractual (RCE): El pilar más importante. Si colisionas con un auto de alta gama e hieres a sus ocupantes, tu póliza paga sentencias legales que podrían arruinar a tu familia.",
                    "Protección por Hurto: Reembolso del valor comercial por robo total y reemplazo por hurto de autopartes.",
                    "Carro Taller, Grúas, Vehículo de Reemplazo y Conductor Inteligente 24/7.",
                ],
            },
            {
                type: "heading",
                text: "Cuidado: El error de cotizar únicamente buscando 'lo más barato'",
            },
            {
                type: "paragraph",
                text: "Comprar pólizas vehiculares solo guiándose por el último renglón de la factura de cobro es riesgoso en Colombia. Aseguradoras con deducibles ocultos (aquello que tú asumes del gasto final), redes de talleres multimarca ineficientes o cláusulas de menor cuantía pueden causar dolores de cabeza que anulan el 'ahorro' inicial.",
            },
            {
                type: "list",
                items: [
                    "Evita Deducibles excesivos en Pérdida Parcial.",
                    "Garantiza RCE superiores a los 3.000 Millones de COP.",
                    "Verifica beneficios como amparo patrimonial o defensa jurídica.",
                ],
            },
            {
                type: "heading",
                text: "Comparamos las mejores aseguradoras del país para ti",
            },
            {
                type: "paragraph",
                text: "En Roesan cruzamos coberturas, exclusiones y precios entre Sura, Bolívar, Allianz, Mapfre, HDI y más, para consolidar tu póliza Todo Riesgo. Consigue tu tranquilidad al volante HOY.",
            },
            { type: "cta", text: "" },
        ],
    },
    {
        slug: "seguro-de-vida-decision-importante",
        title: "Seguro de Vida Integral: El acto de amor y responsabilidad definitivo con los tuyos",
        excerpt:
            "Comprar un seguro de vida genera fricción emocional, por eso muchas personas en Colombia lo evitan. Sin embargo, es el respaldo único que asegura el sustento, la educación y el pago de créditos a los tuyos si llegas a faltar.",
        date: "2026-03-10",
        readTime: "5 min",
        category: "Seguro de Vida",
        categoryColor: "bg-rose-100 text-rose-700",
        content: [
            {
                type: "intro",
                text: "Abordar el tema de nuestro propio fallecimiento nunca es cómodo. Por tabú o superstición, un alto porcentaje de hogares en el territorio colombiano carecen de seguro de vida o únicamente dependen del amparo pensional básico. La cruda realidad es que postergar esta decisión puede poner en jaque el futuro de las personas que más amamos.",
            },
            {
                type: "heading",
                text: "¿Por qué el seguro de vida sirve Estando Vivo?",
            },
            {
                type: "paragraph",
                text: "Existe el gran mito de que el seguro de vida es 'exclusivo para cuando falleces'. Las pólizas modernas de vida (Seguros Flexibles, Seguros con Ahorro, Seguros Vida Deudores, etc.) están llenas de anexos para protegerte en vida.",
            },
            {
                type: "list",
                items: [
                    "Amparo por Invalidez o Desmembración: Si un accidente te impide volver a laborar, obtienes indemnización líquida.",
                    "Enfermedades Graves (Diagnósticos críticos): Algunas pólizas adelantan capital al diagnosticar condiciones como cáncer, accidente cerebrovascular, etc., aliviando tu tratamiento.",
                    "Seguros de acumulación / pensión: Inyectas primas mensuales y luego retiras el monto en inversión.",
                ],
            },
            {
                type: "heading",
                text: "Perfiles prioritarios: ¿Quién necesita con urgencia un Seguro de Vida en Colombia?",
            },
            {
                type: "list",
                items: [
                    "Padres de familia joven: Para asegurar toda la colegiatura de sus hijos hasta la universidad.",
                    "Emprendedores / Autónomos: Su flujo de caja no da tregua económica en caso de hospitalización larga.",
                    "Quienes pagan Créditos Hipotecarios: Los seguros vida obligatorios de los bancos a menudo solo saldan la deuda al banco, dejando en la marginalidad a los deudos. Tienes derecho a endosar el tuyo donde sea más barato.",
                    "Hijos adultos que velan económicamente por sus padres mayores.",
                ],
            },
            {
                type: "heading",
                text: "La matemática no miente: Compra joven, paga poco",
            },
            {
                type: "paragraph",
                text: "Asegurar tu vida a los 30 años sin prexistencias de peso (como hipertensión) puede salir en cuotas irrisoriamente bajas, permitiendo contratar sumas gigantescas. Cuando se intenta cotizar a los 55 años, el riesgo biométrico se dispara. No pospongas asegurar tu prima ideal de salud actual.",
            },
            {
                type: "heading",
                text: "Asesoría compasiva y especializada con Roesan",
            },
            {
                type: "paragraph",
                text: "Construimos portafolios a la medida, adaptándonos al presupuesto mensual familiar. Nuestro objetivo es que duermas sabiendo que, bajo cualquier circunstancia, el estatus económico de tu familia no declinará.",
            },
            { type: "cta", text: "" },
        ],
    },
];
