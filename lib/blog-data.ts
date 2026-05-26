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
    type: "intro" | "heading" | "paragraph" | "list" | "cta" | "image" | "links";
    text?: string;
    items?: string[];
    imageUrl?: string;
    imageAlt?: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "costo-seguro-contra-todo-riesgo-bogota",
        title: "Seguro Auto Todo Riesgo en Bogotá 2026: Costos, Comparativa y Coberturas Vitales",
        excerpt: "¿Cuánto cuesta un seguro todo riesgo en Bogotá? Comparativa de SURA, Bolívar y Allianz. Descubre rangos de precio, coberturas contra granizo y hurto, y cuál es el deducible mínimo en 2026.",
        date: "2026-04-08",
        readTime: "8 min",
        category: "Seguros de Autos",
        categoryColor: "bg-cyan-100 text-cyan-700",
        coverImage: "/images/blog/cover-auto-bogota.png",
        content: [
            {
                type: "intro",
                text: "Manejar en Bogotá es, para muchos, un deporte extremo. Entre el estrés de la Avenida Boyacá en hora pico, los cambios de carril abruptos en la Autopista Norte y el clima impredecible que suele traer granizadas devastadoras, tu vehículo está en constante exposición. La pregunta más común que recibimos en Roesan es: ¿Cuánto cuesta un seguro todo riesgo en Bogotá? Aquí te desglosamos la realidad del mercado asegurador colombiano para el 2026, con comparativas reales y opciones de cotización directo con Sura, Bolívar y Allianz."
            },
            {
                type: "heading",
                text: "Rango de precios de Seguro Todo Riesgo en Bogotá 2026"
            },
            {
                type: "paragraph",
                text: "No existe una tarifa única, pero el rango oscila entre $1.2 millones y $4.5 millones COP anuales ($100,000 a $375,000 mensuales aprox.) dependiendo de múltiples factores. Aquí te mostramos la realidad por rango de vehículos:"
            },
            {
                type: "paragraph",
                text: "Rango de Precios Estimados por Tipo de Vehículo (Bogotá 2026):"
            },
            {
                type: "list",
                items: [
                    "Automóviles compactos (Hyundai i10, Chevrolet Spark): $1.2M - $2.0M COP/año",
                    "Sedanes medianos (Toyota Corolla, Renault Symbol): $1.8M - $2.8M COP/año",
                    "SUVs y vehículos familiares (Chevrolet Captiva, Kia Sportage): $2.2M - $3.5M COP/año",
                    "Vehículos premium (BMW, Audi, Mercedes): $3.5M - $4.5M+ COP/año"
                ]
            },
            {
                type: "heading",
                text: "Los factores que definen el precio en la capital"
            },
            {
                type: "paragraph",
                text: "En Bogotá, las aseguradoras calculan el riesgo considerando variables específicas. El costo final puede variar significativamente de un conductor a otro con el mismo vehículo:"
            },
            {
                type: "list",
                items: [
                    "Índice de hurto del modelo: En localidades como Santa Fe, La Candelaria y El Hueco, carros muy robados (Toyota Corolla, Renault Twingo) tienen primas hasta 40% más altas.",
                    "Frecuencia de accidentes urbanos: Las estadísticas de choques simples (latas) en la Avenida Calle 26, Anillo Vial y Autopista Norte incrementan el riesgo percibido.",
                    "Perfil del conductor: Edad (menores de 25 años pagan 20-30% más), experiencia, si guarda el vehículo en parqueadero cubierto (reduce prima 10-15%), y zona de residencia.",
                    "Deducible elegido: Seleccionar deducible de $2M en lugar de $500k puede reducir la prima mensual entre $30,000 a $60,000 COP."
                ]
            },
            {
                type: "heading",
                text: "Comparativa de Aseguradoras: SURA vs Bolívar vs Allianz"
            },
            {
                type: "paragraph",
                text: "Las tres principales aseguradoras en Colombia ofrecen productos competitivos para Bogotá. Aquí la comparación de opciones más populares:"
            },
            {
                type: "heading",
                text: "SURA - Cobertura Integral y Beneficios Adicionales"
            },
            {
                type: "list",
                items: [
                    "✓ Prima promedio: $1.8M - $2.9M COP/año",
                    "✓ Deducible mínimo: $500,000 COP (Responsabilidad Civil y Daño Propio)",
                    "✓ Red de talleres certificados: Más de 1,500 en el país",
                    "✓ Amparo de Granizo: Cubre daños desde baja cuantía",
                    "✓ Auxilio vial 24/7 y grúa sin límite de kilómetros",
                    "✓ Vehículo de reemplazo automático en caso de siniestro"
                ]
            },
            {
                type: "links",
                text: "Cotiza directamente con SURA:",
                items: ["https://www.sura.com.co - Portal principal SURA", "https://www.sura.com.co/seguros-de-auto - Seguros de automóvil y cotización online"]
            },
            {
                type: "heading",
                text: "Seguros Bolívar - Mejor Relación Precio-Cobertura"
            },
            {
                type: "list",
                items: [
                    "✓ Prima promedio: $1.5M - $2.7M COP/año",
                    "✓ Deducible mínimo: $500,000 COP (con opción a $1M para reducir prima)",
                    "✓ Cobertura de Granizo: Amparo específico con coberturas altas",
                    "✓ Asistencia Vial: Grúa, mecanería en vía y transporte de pasajeros",
                    "✓ Plus Seguridad: Rastreo GPS opcional e incorporable",
                    "✓ Aceptación rápida: Emisión de póliza en máximo 24 horas"
                ]
            },
            {
                type: "links",
                text: "Solicita cotización con Bolívar:",
                items: ["https://www.segurosbolivar.com - Sitio oficial Seguros Bolívar", "https://www.segurosbolivar.com/autos - Seguros de automóvil y simulador de costos"]
            },
            {
                type: "heading",
                text: "Allianz - Innovación y Flexibilidad"
            },
            {
                type: "list",
                items: [
                    "✓ Prima promedio: $1.7M - $3.0M COP/año",
                    "✓ Deducible flexible: Desde $300,000 COP (con sobreprime)",
                    "✓ Conductores Adicionales: Permite registrar 3 conductores sin recargo",
                    "✓ Amparo de Vandalismo y Terrorismo: Cobertura amplia y específica",
                    "✓ App Allianz: Reporte de siniestros por celular y seguimiento en tiempo real",
                    "✓ Taller de tu confianza: Red abierta con talleres certificados de tu elección"
                ]
            },
            {
                type: "links",
                text: "Cotiza con Allianz:",
                items: ["https://www.allianz.com.co - Portal Allianz Colombia", "https://www.allianz.com.co/cotizador-auto - Cotizador en línea de seguros auto"]
            },
            {
                type: "heading",
                text: "Granizo y Vandalismo: Las coberturas vitales en Bogotá"
            },
            {
                type: "paragraph",
                text: "Un diferencial innegociable de una póliza Todo Riesgo en Bogotá es la protección por daños de fuerza mayor. Una granizada bogotana promedio (frecuentes en abril-junio) puede arruinar el capó, techo y cristales, cuya reparación de taller certificado excede fácilmente $5 millones de pesos. Sin este amparo, la pérdida recae 100% sobre tu bolsillo."
            },
            {
                type: "list",
                items: [
                    "Daños por Granizo: Reparación de techo, capó, cristales, espejos sin franquicia adicional",
                    "Vandalismo y Rayones: Cobertura de rayones intencionales y actos vandálicos",
                    "Responsabilidad Civil: El pilar más importante. Si colisionas con un auto de alta gama e hieres a sus ocupantes, tu póliza paga sentencias legales que podrían arruinar a tu familia"
                ]
            },
            {
                type: "heading",
                text: "¿Cuál es el Deducible Mínimo en Bogotá?"
            },
            {
                type: "paragraph",
                text: "El deducible es la cantidad que tú asumes en cada siniestro. En Bogotá, los deducibles mínimos ofrecidos por las principales aseguradoras son:"
            },
            {
                type: "list",
                items: [
                    "$300,000 COP: Allianz ofrece esta opción con sobreprime (aumenta la prima mensual unos $20,000-$40,000)",
                    "$500,000 COP: Estándar en SURA y Bolívar, es el más balanceado para el mercado bogotano",
                    "$1,000,000 COP: Deducible alto, reduce prima mensual entre $30,000-$60,000 COP, recomendado para conductores experimentados",
                    "Por Hurto Total: Generalmente es el doble del deducible normal ($1M si tu deducible es $500k)"
                ]
            },
            {
                type: "heading",
                text: "Hurtos en Bogotá 2026: Localidades de Mayor Riesgo"
            },
            {
                type: "paragraph",
                text: "Según datos de denuncias 2025-2026, las localidades con mayor índice de hurto de vehículos en Bogotá son:"
            },
            {
                type: "list",
                items: [
                    "Santa Fe: 14.2% del total de hurtos en la ciudad (zona histórica con acceso a Cali)",
                    "La Candelaria: 8.9% (comercio intenso y circulación de delincuentes especializados)",
                    "El Hueco: 7.5% (sector comercial con estacionamientos públicos)",
                    "Chapinero: 6.8% (parqueaderos en vía en horarios nocturnos)",
                    "Kennedy: 5.2% (crecimiento de hurto especializado en zonas residenciales)"
                ]
            },
            {
                type: "paragraph",
                text: "Si resides o trabajas frecuentemente en estas zonas, las aseguradoras pueden solicitar requisitos adicionales: parqueadero cubierto, cerco eléctrico o dispositivo antirobo certificado. Estos requisitos pueden aumentar la prima entre 5-15%."
            },
            {
                type: "heading",
                text: "Errores comunes al cotizar Seguro Auto Todo Riesgo"
            },
            {
                type: "list",
                items: [
                    "Buscar únicamente 'lo más barato': Primas muy bajas suelen esconder deducibles ocultos o redes de talleres mediocres.",
                    "No revisar detalles del deducible: Un deducible bajo parece atractivo, pero aumenta la prima mensual significativamente.",
                    "Ignorar la Responsabilidad Civil: Este es el amparo que te protege de demandas millonarias. No es donde ahorrar.",
                    "Confundir 'Responsabilidad Civil' con 'Daño Propio': RCE es daños a terceros (vehículos, personas); Daño Propio es tu carro."
                ]
            },
            {
                type: "heading",
                text: "Asesoría especializada en Roesan Seguros"
            },
            {
                type: "paragraph",
                text: "En Roesan Seguros cruzamos coberturas, exclusiones, deducibles y precios entre SURA, Bolívar, Allianz, Mapfre, HDI y más. Analizamos tu perfil específico (zona de residencia, horarios de uso, conductor principal) para recomendarte la póliza Todo Riesgo que maximize cobertura a mínimo costo."
            },
            {
                type: "paragraph",
                text: "Nuestro objetivo es que manejes en Bogotá con total tranquilidad, sabiendo que cada centavo de tu prima está protegiendo adecuadamente tu vehículo y tu patrimonio personal."
            },
            {
                type: "cta", text: ""
            }
        ]
    },
    {
        slug: "medicina-prepagada-adultos-mayores-bogota",
        title: "Medicina Prepagada para Adultos Mayores en Bogotá 2026: Planes, Exclusiones y Alternativas",
        excerpt: "Comparativa de medicina prepagada vs EPS vs planes livianos para mayores de 60 en Bogotá. Acceso a Fundación Santa Fe, Clínica Shaio y Clínica del Country sin esperas. Preguntas frecuentes sobre exclusiones por edad.",
        date: "2026-04-06",
        readTime: "8 min",
        category: "Salud y Vida",
        categoryColor: "bg-teal-100 text-teal-700",
        coverImage: "/images/card-salud-co.png",
        content: [
            {
                type: "intro",
                text: "El sistema de salud EPS en Colombia, aunque funcional para temas básicos, suele colapsar precisamente cuando nuestros padres o abuelos requieren atención especializada urgente. En Bogotá, las esperas para un cardiólogo, oncólogo o especialista vascular pueden tardar 4-6 meses, tiempo que los adultos mayores simplemente no tienen. La medicina prepagada para adultos mayores no es un lujo: es una vía rápida y comprobada para preservar su calidad de vida, garantizar diagnósticos oportunos y acceso a los mejores especialistas de Latinoamérica. Esta guía compara todas las opciones disponibles en Bogotá 2026."
            },
            {
                type: "heading",
                text: "El Problema Real: EPS vs Medicina Prepagada"
            },
            {
                type: "paragraph",
                text: "Aunque la EPS cubre intervenciones quirúrgicas mayores y hospitalizaciones de alto costo, el gran vacío está en la medicina ambulatoria (consultas, especialistas, exámenes diagnósticos). Para un adulto mayor, este vacío puede ser la diferencia entre detectar un cáncer a tiempo o descubrirlo cuando ya es terminal."
            },
            {
                type: "list",
                items: [
                    "EPS: Cubre emergencias y cirugías, pero esperas de 2-6 meses para especialistas.",
                    "Medicina Prepagada: Acceso directo sin remisión, citas en 1-3 días, copagos bajos.",
                    "Plan Liviano Complementario: Costo bajo ($35k-$60k/mes), cubre ambulatoria, se combina con EPS.",
                    "Sin cobertura adicional: Riesgo de tomar decisiones médicas por presupuesto, no por salud."
                ]
            },
            {
                type: "heading",
                text: "Comparativa: EPS vs Prepagada vs Plan Liviano Complementario"
            },
            {
                type: "paragraph",
                text: "Aquí el desglose completo de las tres opciones disponibles para adultos mayores en Bogotá:"
            },
            {
                type: "list",
                items: [
                    "EPS Estándar: Costo $0 (cotización obligatoria). Cobertura: Hospitalización, cirugía, algunos especialistas. Tiempo citas: 2-6 meses. Copagos: Variables, a veces prohibitivos. Acceso clínicas premium: NO.",
                    "Medicina Prepagada (Integral): Costo $400k-$900k/mes para mayores 60. Cobertura: TODO ambulatorio + algunas cirugías. Tiempo citas: 1-3 días. Copagos: $20k-$80k. Acceso clínicas premium: SÍ (Santa Fe, Shaio, del Country).",
                    "Plan Liviano Complementario (SURA/Bolívar): Costo $35k-$60k/mes. Cobertura: Ambulatoria solamente. Tiempo citas: 2-5 días. Copagos: $15k-$40k. Acceso clínicas: Red de prestadores (no las premium)."
                ]
            },
            {
                type: "heading",
                text: "Clínicas Especializadas en Bogotá para Adultos Mayores"
            },
            {
                type: "paragraph",
                text: "Bogotá alberga algunas de las mejores infraestructuras médicas de América Latina. Si tu plan prepagado te da acceso a estas clínicas, es un diferencial valioso:"
            },
            {
                type: "links",
                text: "Principales clínicas de referencia en Bogotá:",
                items: ["https://www.fsfb.org.co - Fundación Santa Fe de Bogotá (Cardiología, Oncología, Neurología premium)", "https://www.shaio.org - Hospital Universitario Shaio (Especialidades y urgencias de alto nivel)", "https://www.clinicadelcountry.com - Clínica del Country (Medicina integral y especialistas premium)"]
            },
            {
                type: "heading",
                text: "Planes Específicos para Mayores de 60: Opciones Disponibles en 2026"
            },
            {
                type: "paragraph",
                text: "A partir de los 60 años, la aceptación en medicina prepagada se vuelve más restrictiva y costosa. Aquí las opciones que SÍ aceptan y qué esperar:"
            },
            {
                type: "heading",
                text: "Opción 1: Medicina Prepagada Integral (Colegiadas/Seguros de Salud)"
            },
            {
                type: "list",
                items: [
                    "Aceptación: Mayores de 60 con evaluación médica (algunos límites de edad hasta 75 años)",
                    "Costo: $500k-$900k/mes según edad y antecedentes",
                    "Requisitos: Examen médico completo (hemograma, EKG, radiografía), declaración de salud",
                    "Exclusiones comunes: Enfermedades pre-existentes (primera cuota de espera 90-180 días), cirugía de cadera, algunas terapias"
                ]
            },
            {
                type: "heading",
                text: "Opción 2: Plan Liviano Complementario (SURA, Bolívar, AXA)"
            },
            {
                type: "list",
                items: [
                    "Aceptación: Mayoría sin límite de edad (incluso 80+ años)",
                    "Costo: $40k-$70k/mes, muchísimo más asequible",
                    "Cobertura: Consultas especialistas, exámenes, procedimientos ambulatorios",
                    "No cubre: Cirugías, hospitalizaciones (para eso usas tu EPS)",
                    "Ventaja: Acceso rápido sin evaluación médica exhaustiva"
                ]
            },
            {
                type: "heading",
                text: "Opción 3: Planes Familiares o Parejas"
            },
            {
                type: "list",
                items: [
                    "Concepto: Un plan que cubre a dos personas (pareja) con prima reducida",
                    "Costo: $300k-$600k/mes para dos adultos mayores (30-40% descuento)",
                    "Aceptación: Más flexible que planes individuales",
                    "Estrategia: Si tus padres son pareja, es la opción más económica"
                ]
            },
            {
                type: "heading",
                text: "Preguntas Frecuentes: Exclusiones por Edad"
            },
            {
                type: "list",
                items: [
                    "¿Pueden rechazarme por edad? NO legalmente (Ley de Protección al Consumidor), pero pueden cobrar primas más altas o solicitar evaluación médica.",
                    "¿Qué pasa si tengo diabetes o hipertensión? Estos son pre-existentes. Habrá cuota de espera (90-180 días) para coberturas relacionadas.",
                    "¿Hay exclusiones permanentes? Algunas pólizas excluyen permanentemente artritis severa, ciertas cirugías ortopédicas o enfermedades degenerativas.",
                    "¿Puedo agregar cobertura de medicamentos? SÍ, pero con recargo. Muchos planes de mayores NO incluyen farmacia.",
                    "¿Hay límite de edad máxima? Algunos planes aceptan hasta 75-80 años. Después es muy difícil encontrar cobertura nueva.",
                    "¿Los médicos domiciliarios están incluidos? En planes de prepagada SÍ. En planes livianos DEPENDE del plan."
                ]
            },
            {
                type: "heading",
                text: "¿Por Qué Bogotá es Clave para Elegir un Buen Plan?"
            },
            {
                type: "paragraph",
                text: "Bogotá concentra la mayor densidad de especialistas y clínicas premium de Colombia. Un plan que te da acceso a instituciones de clase mundial sin autorizaciones tortuosas es un diferencial de salud muy real. Además:"
            },
            {
                type: "list",
                items: [
                    "Infraestructura: Las 3 clínicas mencionadas tienen servicios de cardiología, oncología, neurología y geriatría de nivel mundial.",
                    "Médicos domiciliarios: Crítico en Bogotá debido al clima y tráfico. Que tu plan incluya medicina domiciliaria puede evitar hospitalizaciones innecesarias.",
                    "Telemedicina: Muchos planes ahora ofrecen consultas virtuales con especialistas (útil en días de mal clima o cuando el paciente está limitado).",
                    "Farmacias convenidas: Descuentos de 30-50% en medicamentos que un adulto mayor toma de por vida."
                ]
            },
            {
                type: "heading",
                text: "Checklist: Qué Verificar Antes de Contratar Medicina Prepagada"
            },
            {
                type: "list",
                items: [
                    "☑ Directorio de especialistas: Verifica que incluya cardiólogo, geriatra, oftalmólogo, urólogo/ginecólogo.",
                    "☑ Clínicas de referencia: Confirma que accedes a Santa Fe, Shaio o similar (no solo hospitales de tercera línea).",
                    "☑ Copagos por edad: Algunos planes cobran copago diferenciado ($50k a mayores de 70). Negocia esto.",
                    "☑ Cobertura de medicamentos: ¿Incluye fármaco? ¿Con cuál nivel de descuento?",
                    "☑ Cláusulas de pre-existencia: Pide por escrito el período de espera para tus condiciones de salud específicas.",
                    "☑ Período de carencia: ¿Cuántos días debe esperar antes de poder usar la cobertura?",
                    "☑ Exclusiones permanentes: Solicita lista completa de lo que NO cubre NUNCA."
                ]
            },
            {
                type: "heading",
                text: "Estrategia Recomendada para Adultos Mayores en Bogotá"
            },
            {
                type: "paragraph",
                text: "La combinación ideal para máxima protección y mínimo costo es: EPS (obligatoria para cirugías/hospitalizaciones) + Plan Liviano Complementario (para ambulatoria rápida y económica)."
            },
            {
                type: "list",
                items: [
                    "Costo total: $35k-$70k/mes (el plan liviano) + tu EPS",
                    "Cobertura: 100% del cuidado de salud sin esperas",
                    "Ventaja: Acceso rápido a especialistas sin el costo prohibitivo de prepagada integral",
                    "Para patrimonio alto: Si pueden pagar, prepagada integral completa brinda mayor tranquilidad"
                ]
            },
            {
                type: "heading",
                text: "Asesoría Especializada para Tu Familia"
            },
            {
                type: "paragraph",
                text: "Sabemos que a partir de los 60 años la aceptación en medicina se vuelve compleja y costosa. En Roesan analizamos el perfil de salud específico de tu padre/madre/abuelo para recomendar la mejor combinación: EPS + Planes Complementarios, Medicina Prepagada Integral, o Planes Familiares."
            },
            {
                type: "paragraph",
                text: "Nuestro objetivo es garantizar que los adultos mayores de tu familia reciban atención médica de calidad sin esperas tortuosas, accediendo a los mejores especialistas de Bogotá a un precio justo. Contáctanos hoy para una asesoría sin compromiso adaptada a tu situación."
            },
            {
                type: "cta", text: ""
            }
        ]
    },
    {
        slug: "seguro-inversion-no-gasto",
        title: "Seguro como Inversión en Colombia 2026: Proteger Patrimonio vs Inflación y Imprevistos",
        excerpt:
            "¿Es el seguro un gasto o una inversión? Descubre cómo una póliza bien estructurada protege tu patrimonio en Colombia. Comparativa: dinero en banco vs seguro. ROI a 5 años. Rendimiento financiero y protección contra inflación.",
        date: "2026-03-20",
        readTime: "8 min",
        category: "Educación Financiera",
        categoryColor: "bg-blue-100 text-blue-700",
        coverImage: "/images/card-todo-riesgo-globo.png",
        content: [
            {
                type: "intro",
                text: "En Colombia, la mayor parte de personas ve los seguros como un gasto mensuales que erosiona su presupuesto. Pero esto es un error conceptual. Un seguro bien estructurado no es un recibo más en tu extracto bancario: es una herramienta financiera que protege tu patrimonio de la inflación acumulada en 30 años, de eventos catastróficos, y que genera rendimiento financiero. En esta guía, desglosamos por qué para muchos, el seguro tiene un ROI superior al que obtendrías dejando dinero en una cuenta corriente o en fondos pasivos.",
            },
            {
                type: "heading",
                text: "Gasto vs. Inversión: La Mentalidad Equivocada del Colombiano Promedio",
            },
            {
                type: "paragraph",
                text: "Cuando una persona ahorra $300,000 COP mensuales en una cuenta corriente sin invertir, después de 5 años acumula $18 millones. Pero con inflación promedio del 3.5% anual en Colombia, ese dinero pierde poder adquisitivo. En realidad, el dinero se devalúa en torno a 0.3% mensuales. Un seguro de vida con componente de ahorro o inversión, por el contrario, genera rentabilidad que supera la inflación.",
            },
            {
                type: "heading",
                text: "Comparativa: $300,000/mes en Banco vs. Seguro en 5 Años",
            },
            {
                type: "list",
                items: [
                    "En cuenta corriente: $18M acumulados - 17.5% inflación = $14.85M de poder adquisitivo real",
                    "En seguro de vida con ahorro: $18M + rentabilidad del 6-8% E.A. = $23.4M - 17.5% inflación = $19.3M de poder real",
                    "Diferencia: Hasta $4.5 millones adicionales de protección y patrimonio",
                    "Beneficio adicional: Tu familia está cubierta si algo te sucede (suma asegurada de $100M-$500M según el plan)"
                ]
            },
            {
                type: "heading",
                text: "Los Riesgos Catastróficos que El Banco No Protege",
            },
            {
                type: "paragraph",
                text: "Un accidente de tránsito, un diagnóstico de cáncer, o la pérdida de tu principal fuente de ingresos, pueden desencadenar gastos que superan fácilmente $30-100 millones de pesos en pocas semanas. Sin seguro, esos costos recaen 100% sobre tus ahorros y endeudamiento.",
            },
            {
                type: "list",
                items: [
                    "Pérdida total de vehículo (hurto o siniestro): $20M-$50M COP. Un seguro paga esto; el banco no.",
                    "Tratamiento oncológico especializado: $15M-$60M COP. La EPS cubre parcialmente; medicina prepagada + seguro de salud, lo cubre todo.",
                    "Invalidez permanente (accidente laboral): Tu ingreso se detiene. Seguro de invalidez paga cuota de casa, educación hijos ($500k-$1.5M/mes × 10-20 años).",
                    "Fallecimiento del proveedor principal: Sin seguro de vida, tu familia debe vender activos a precio de fire sale (-30-40% del valor real)."
                ]
            },
            {
                type: "heading",
                text: "Seguro de Vida Flexible (Universal Life): Inversión + Protección",
            },
            {
                type: "paragraph",
                text: "Los seguros flexibles (Universal Life) combinan protección con acumulación de capital. Tu prima se divide entre: 1) Costo de protección (suma asegurada), y 2) Fondo de ahorro/inversión que genera rentabilidad. Es el producto más cercano a lo que financieramente llamamos \"inversión\".",
            },
            {
                type: "list",
                items: [
                    "Prima mensual: $400,000-$700,000 COP (edad 35, $200M suma asegurada)",
                    "Componente protección: $150,000 (tu familia cobra si falleces)",
                    "Componente ahorro/inversión: $250,000-$550,000 (generan rentabilidad del 5-8% E.A.)",
                    "A los 15 años: Acumulaste $45M-$99M en el fondo de ahorro + protección activa",
                    "Ventaja: Si no usas la protección, recuperas el ahorro. Si la necesitas, tu familia recibe suma asegurada + fondo."
                ]
            },
            {
                type: "heading",
                text: "Tipos de Seguros por Objetivo de Protección e Inversión",
            },
            {
                type: "list",
                items: [
                    "Seguro de vida integral (Protección Principal): Suma asegurada $100M-$500M para proteger dependientes. Costo: $250k-$500k/mes. ROI: Paz mental infinita.",
                    "Seguro de salud (Medicina Prepagada): Acceso a especialistas sin espera + medicamentos de alto costo. Costo: $200k-$800k/mes. ROI: Evita endeudamiento por enfermedad.",
                    "Seguro de auto Todo Riesgo: Protege vehículo + responsabilidad civil. Costo: $100k-$375k/mes. ROI: Evita pérdida de $20M-$50M en caso de siniestro.",
                    "Seguros de invalidez (Desempleo/ITT): Pagan cuota de vivienda si pierdes ingresos. Costo: $50k-$200k/mes. ROI: Salva tu crédito hipotecario."
                ]
            },
            {
                type: "heading",
                text: "El Costo de NO Tener Seguro: Análisis Financiero Real",
            },
            {
                type: "paragraph",
                text: "Las encuestas de inclusión financiera del Banco Mundial muestran que el 67% de familias en Colombia que enfrentan un evento catastrófico caen en mora o insolvencia. Aquí el costo real de no protegerse:",
            },
            {
                type: "list",
                items: [
                    "Siniestro de auto sin seguro: Pierdes $30M en reparación + endeudamiento a 24% E.A. = $57.6M en 2 años",
                    "Enfermedad grave sin medicina prepagada: Gastos médicos $50M + pérdida de ingresos 6 meses = $80M+ de deuda",
                    "Fallecimiento del proveedor sin seguro de vida: Familia vende casa a 60% de valor para sobrevivir = Pérdida patrimonial de $150M-$300M",
                    "Alternativa con seguro: Primas de $500k/mes × 60 meses = $30M invertidos. Retorno en protección/ahorro: $200M-$500M"
                ]
            },
            {
                type: "heading",
                text: "Rendimiento Real: Seguro de Vida vs. Otras Inversiones",
            },
            {
                type: "paragraph",
                text: "En términos de ROI puro (retorno de inversión), el seguro se compara favorablemente con depósitos a término y fondos de inversión cuando incluyes la protección:",
            },
            {
                type: "list",
                items: [
                    "Depósito a término (2.5% E.A.): $300k/mes × 5 años = $18M + $2.25M rendimiento = $20.25M (sin protección si falleces)",
                    "Seguro Universal Life (6% E.A. en fondo + protección): $300k/mes × 5 años = $18M + $5.4M rendimiento + $200M suma asegurada = Protección total + patrimonio",
                    "Fondo mutualista (7% E.A.): $300k/mes × 5 años = $18M + $6.3M rendimiento = $24.3M (sin protección de vida/invalidez)",
                    "Seguro como inversión GANA: Combina protección del patrimonio + rendimiento financiero + tranquilidad mental"
                ]
            },
            {
                type: "heading",
                text: "Cómo Estructurar Tu Portafolio de Seguros (Plan de Protección Integral)",
            },
            {
                type: "list",
                items: [
                    "Paso 1 - Seguro de Vida Base: $200M-$500M según ingresos. Costo: $300k-$600k/mes",
                    "Paso 2 - Seguro de Salud: Medicina prepagada o plan liviano. Costo: $150k-$500k/mes",
                    "Paso 3 - Seguro de Auto Todo Riesgo: Si manejas. Costo: $100k-$350k/mes",
                    "Paso 4 - Seguro de Invalidez (ITT): Cubre cuota hipotecaria si pierdes ingresos. Costo: $50k-$150k/mes",
                    "Inversión Total: $600k-$1.6M/mes ($7.2M-$19.2M anuales) que te protege contra riesgos de $200M-$500M"
                ]
            },
            {
                type: "heading",
                text: "Asesoría Especializada en Roesan Seguros",
            },
            {
                type: "paragraph",
                text: "Nuestro enfoque es diferente. No vendemos pólizas: estructuramos soluciones financieras de protección. Analizamos tu flujo de caja, dependientes, deudas, y patrimonio para diseñar un plan donde el seguro funciona como una inversión que genera retorno (rendimiento + protección contra pérdidas catastróficas).",
            },
            {
                type: "links",
                text: "Conoce nuestras opciones de seguros con rentabilidad:",
                items: [
                    "https://www.roesan.co/seguros/vida - Seguros de vida con componente de ahorro",
                    "https://www.roesan.co/seguros/salud - Planes de medicina prepagada",
                    "https://www.roesan.co/seguros/auto - Seguros de vehículos con cobertura integral"
                ]
            },
            { type: "cta", text: "" },
        ],
    },
    {
        slug: "seguro-automovil-colombia-guia",
        title: "Seguro de Automóvil en Colombia 2026: SOAT vs Todo Riesgo - Guía Definitiva y Comparativa",
        excerpt:
            "Guía completa sobre seguros de auto en Colombia. Entiende diferencias entre SOAT, Responsabilidad Civil y Todo Riesgo. Comparativa de SURA, Bolívar, Allianz, Mapfre y HDI con enlaces directos para cotizar.",
        date: "2026-03-15",
        readTime: "9 min",
        category: "Seguros de Autos",
        categoryColor: "bg-cyan-100 text-cyan-700",
        coverImage: "/images/blog/cover_auto.png",
        content: [
            {
                type: "intro",
                text: "Con el constante volumen de tráfico en Bogotá, los cerros transitados de Medellín o el clima impredecible en la Costa, tener un vehículo en Colombia es un reto diario. Millones de conductores se encomiendan solo a su experiencia y al documento de SOAT obligatorio, desconociendo el cráter legal y financiero al que se exponen. Esta guía definitiva te explica qué cubre realmente el SOAT, por qué es insuficiente, y cómo blindar tu patrimonio con seguros voluntarios. Incluye comparativa directa de SURA, Bolívar, Allianz, Mapfre y HDI.",
            },
            {
                type: "heading",
                text: "¿Qué es el SOAT y qué cubre realmente?",
            },
            {
                type: "paragraph",
                text: "El Seguro Obligatorio de Accidentes de Tránsito (SOAT) es estrictamente obligatorio por ley en Colombia desde 1990. Su alcance es muy específico: está diseñado por el gobierno para financiar atención médica de urgencias en caso de accidentes viales, pero tu patrimonio NO está protegido.",
            },
            {
                type: "list",
                items: [
                    "✓ Cubre ÚNICAMENTE lesiones a peatones, conductores y pasajeros en el siniestro.",
                    "✓ El tope de cobertura hospitalaria en Colombia es delimitado a salarios mínimos legales diarios vigentes (SMLDV) - aproximadamente $1.3 millones COP en 2026.",
                    "✗ NO paga daños materiales: rayones, golpes o destrucción de tu carro.",
                    "✗ NO cubre rayones al bumper, espejo o vehículo de terceros.",
                    "✗ NO repone tu carro si fue hurtado a mano armada.",
                    "✗ NO te defiende de demandas civiles si causaste un accidente grave que injurie a personas.",
                    "✗ NO cubre gastos de grúa, mecánica, vehículo de reemplazo ni asistencia vial."
                ]
            },
            {
                type: "heading",
                text: "Comparativa: SOAT vs Responsabilidad Civil vs Todo Riesgo",
            },
            {
                type: "paragraph",
                text: "Entender las diferencias entre estas tres opciones es crítico para proteger tu patrimonio. Aquí el desglose completo:"
            },
            {
                type: "list",
                items: [
                    "SOAT (Obligatorio): Cubre daños a terceros en salud. Costo: $250k-$400k COP/año. Riesgo: Tu carro no está protegido.",
                    "Responsabilidad Civil Voluntaria: Cubre daños materiales y corporales a terceros. Costo: $500k-$1.5M COP/año. Riesgo: Tu propio vehículo sigue sin protección.",
                    "Todo Riesgo (Completo): Cubre tu vehículo + responsabilidad civil a terceros + beneficios adicionales. Costo: $1.2M-$4.5M COP/año. Protección: TOTAL."
                ]
            },
            {
                type: "image",
                imageUrl: "/images/blog/inside_auto.png",
                imageAlt: "Familia colombiana tranquila manejando en su carro protegido por póliza Todo Riesgo. Roesan Seguros.",
            },
            {
                type: "heading",
                text: "Responsabilidad Civil: El Amparo Más Crítico",
            },
            {
                type: "paragraph",
                text: "La Responsabilidad Civil Extracontractual (RCE) es el pilar que protege tu patrimonio personal. Aquí por qué es tan importante:"
            },
            {
                type: "list",
                items: [
                    "Demandas civiles: Si causas un accidente grave e injurias a personas, la familia puede demandarte por millones de pesos (lucro cesante, daño moral, gastos médicos).",
                    "Daños a propiedad ajena: Colisionar con un vehículo premium (BMW, Audi, Mercedes) puede costarte $30-50 millones de pesos en reparaciones.",
                    "Protección legal: La RCE no solo paga indemnizaciones, también asume gastos de defensa legal y honorarios de abogados especializados.",
                    "Límites de cobertura recomendados: Mínimo $3.000 millones COP para RCE en áreas urbanas."
                ]
            },
            {
                type: "heading",
                text: "La Póliza Todo Riesgo: Tu Escudo Completo",
            },
            {
                type: "paragraph",
                text: "Un seguro Todo Riesgo (Voluntario) es el contrato que ampara la estructura y valor comercial de tu vehículo bajo estándares de Fasecolda (Federación Colombiana de Aseguradoras). Es la protección más integral disponible."
            },
            {
                type: "list",
                items: [
                    "✓ Pérdida Total: Si tu carro es totalizado, recibís el 100% de su valor comercial.",
                    "✓ Pérdida Parcial: Cubre reparaciones por choques, colisiones, incendios o daños por fuerza mayor.",
                    "✓ Responsabilidad Civil: El pilar más importante, protege tu patrimonio de demandas.",
                    "✓ Protección por Hurto: Reembolso total por robo y reemplazo de autopartes.",
                    "✓ Beneficios Adicionales: Grúa 24/7, vehículo de reemplazo, mecánica en vía, auxilio vial sin límite de kilómetros.",
                    "✓ Cobertura Ampliada: Granizo, vandalismo, accidentes naturales según la póliza."
                ]
            },
            {
                type: "heading",
                text: "Aseguradoras Principales en Colombia: Opciones de Cotización",
            },
            {
                type: "paragraph",
                text: "Las cinco principales aseguradoras compiten agresivamente en el mercado colombiano. Aquí acceso directo a cotizaciones:"
            },
            {
                type: "heading",
                text: "SURA - Cobertura Integral",
            },
            {
                type: "list",
                items: [
                    "Prima Todo Riesgo: $1.8M - $2.9M COP/año",
                    "Deducible mínimo: $500,000 COP",
                    "RCE: Hasta $5,000 millones COP",
                    "Red de talleres: 1,500+ en el país",
                    "Diferencial: Amparo de granizo completo y vehículo de reemplazo automático"
                ]
            },
            {
                type: "links",
                text: "Cotiza con SURA:",
                items: ["https://www.sura.com.co - Portal principal", "https://www.sura.com.co/seguros-de-auto - Seguros de automóvil"]
            },
            {
                type: "heading",
                text: "Seguros Bolívar - Mejor Precio-Cobertura",
            },
            {
                type: "list",
                items: [
                    "Prima Todo Riesgo: $1.5M - $2.7M COP/año",
                    "Deducible: $500k o $1M (ajustable)",
                    "RCE: Hasta $4,000 millones COP",
                    "Ventaja: Emisión en máximo 24 horas y aceptación rápida",
                    "Plus: Rastreo GPS opcional sin costo adicional"
                ]
            },
            {
                type: "links",
                text: "Solicita cotización Bolívar:",
                items: ["https://www.segurosbolivar.com - Sitio oficial", "https://www.segurosbolivar.com/autos - Simulador de costos"]
            },
            {
                type: "heading",
                text: "Allianz - Innovación y Flexibilidad",
            },
            {
                type: "list",
                items: [
                    "Prima Todo Riesgo: $1.7M - $3.0M COP/año",
                    "Deducible flexible: Desde $300k (con sobreprime)",
                    "RCE: Hasta $5,000 millones COP",
                    "Novedad: Permite registrar 3 conductores sin recargo",
                    "App Allianz: Reporte de siniestros por celular y seguimiento en tiempo real"
                ]
            },
            {
                type: "links",
                text: "Cotiza con Allianz:",
                items: ["https://www.allianz.com.co - Portal Allianz Colombia", "https://www.allianz.com.co/cotizador-auto - Cotizador en línea"]
            },
            {
                type: "heading",
                text: "Mapfre - Opciones Personalizadas",
            },
            {
                type: "list",
                items: [
                    "Prima Todo Riesgo: $1.6M - $2.8M COP/año",
                    "Deducible: $500k o $1M",
                    "Especialidad: Excelente cobertura para vehículos comerciales",
                    "Diferencial: Planes con agregados de cobertura ampliada"
                ]
            },
            {
                type: "heading",
                text: "HDI - Alternativa Competitiva",
            },
            {
                type: "list",
                items: [
                    "Prima Todo Riesgo: $1.4M - $2.6M COP/año",
                    "Deducible: $500k (más económico del mercado)",
                    "Ventaja: Una de las primas más competitivas",
                    "Red de apoyo: Acuerdos con talleres de confianza"
                ]
            },
            {
                type: "heading",
                text: "Errores Críticos al Cotizar Seguro de Auto",
            },
            {
                type: "list",
                items: [
                    "❌ Buscar únicamente 'lo más barato': Bajas primas suelen esconder deducibles ocultos o redes de talleres mediocres.",
                    "❌ Confundir SOAT con Seguro Voluntario: SOAT es obligatorio pero INSUFICIENTE para proteger tu patrimonio.",
                    "❌ No revisar detalle de RCE: Una RCE baja ($1.5M) es insuficiente para accidentes graves con vehículos costosos.",
                    "❌ Ignorar deducibles por daño propio: Un deducible de $2M significa que tú asumes ese monto en cada siniestro.",
                    "❌ No cotizar en múltiples aseguradoras: El mismo perfil puede variar $500k-$1M entre aseguradoras."
                ]
            },
            {
                type: "heading",
                text: "Checklist: ¿Qué debes revisar antes de comprar tu seguro auto?"
            },
            {
                type: "list",
                items: [
                    "☑ Cobertura de Responsabilidad Civil: Mínimo $3.000 millones COP",
                    "☑ Deducible en Pérdida Parcial: No mayor a $1.000 millones COP",
                    "☑ Amparo de Granizo: Crítico en zonas andinas (Bogotá, Medellín, Cali)",
                    "☑ Red de Talleres: Verifica que incluya talleres de tu confianza",
                    "☑ Exclusiones: Lee letra pequeña (riesgo de uso comercial, conductores sin licencia, etc.)",
                    "☑ Beneficios adicionales: Grúa, vehículo de reemplazo, asistencia médica",
                    "☑ Documentación: Solicita póliza en PDF y certifica que incluya tus beneficiarios"
                ]
            },
            {
                type: "heading",
                text: "Asesoría especializada en Roesan Seguros",
            },
            {
                type: "paragraph",
                text: "En Roesan Seguros analizamos tu perfil específico (ubicación, uso del vehículo, conductores habituales) y cotizamos directamente con SURA, Bolívar, Allianz, Mapfre, HDI y otras aseguradoras para consolidar tu póliza Todo Riesgo ideal."
            },
            {
                type: "paragraph",
                text: "Nuestro objetivo es que manejes en Colombia con tranquilidad total, sabiendo que cada centavo de prima está protegiendo efectivamente tu vehículo y tu patrimonio personal. Contáctanos hoy mismo para una asesoría sin compromiso."
            },
            { type: "cta", text: "" },
        ],
    },
    {
        slug: "seguro-de-vida-decision-importante",
        title: "Seguro de Vida en Colombia 2026: Tipos, Coberturas y Cálculo de Suma Asegurada",
        excerpt:
            "Guía completa sobre seguro de vida. Entiende cobertura por invalidez, enfermedades graves, ahorro e inversión. Calcula cuánta suma asegurada necesitas según ingresos y familia. Comparativa de productos: Tradicional vs Flexible vs con Ahorro.",
        date: "2026-03-10",
        readTime: "7 min",
        category: "Seguro de Vida",
        categoryColor: "bg-rose-100 text-rose-700",
        coverImage: "/images/card-seguro-vida-bogota.png",
        content: [
            {
                type: "intro",
                text: "Abordar el tema de nuestro propio fallecimiento nunca es cómodo. Por tabú o superstición, un porcentaje alarmante de hogares colombianos carecen de seguro de vida integral, dependiendo únicamente del amparo pensional básico estatal (que es insuficiente). La realidad es que postergar esta decisión puede destruir el futuro económico de las personas que más amas: cónyuge, hijos, padres dependientes. Este artículo te guía paso a paso para entender qué tipo de seguro necesitas, cómo calcular la suma asegurada correcta, y cuáles son las opciones disponibles en 2026."
            },
            {
                type: "heading",
                text: "¿Por qué el Seguro de Vida sirve Estando Vivo?"
            },
            {
                type: "paragraph",
                text: "Existe el gran mito de que el seguro de vida es 'exclusivo para cuando falleces'. Las pólizas modernas de vida (Seguros Flexibles, Seguros con Ahorro, Seguros Vida Deudores) están llenas de coberturas que te protegen EN VIDA:"
            },
            {
                type: "list",
                items: [
                    "Amparo por Invalidez Total Temporal: Si un accidente o enfermedad te impide trabajar, el seguro adelanta un porcentaje de la suma asegurada para cubrir tu incapacidad.",
                    "Invalidez Permanente (Desmembración): Si pierdes una extremidad o quedas parapléjico, recibes indemnización inmediata.",
                    "Enfermedades Graves (Critical Illness): Algunos seguros adelantan hasta el 50% de la suma asegurada al diagnosticar cáncer, accidente cerebrovascular, infarto, insuficiencia renal, etc.",
                    "Seguros de Acumulación/Pensión: Inyectas primas mensuales y acumulas capital que luego retiras al retirarte o en caso de emergencia."
                ]
            },
            {
                type: "heading",
                text: "Perfiles Prioritarios: ¿Quién Necesita Seguro de Vida AHORA?"
            },
            {
                type: "list",
                items: [
                    "Padres jóvenes (25-45 años): Responsables del sustento de 2+ hijos. Un deceso impacta colegiatura, vivienda, alimentación. Prioridad CRÍTICA.",
                    "Emprendedores/Autónomos: Sin empleador que asegure, eres el único ingreso del hogar. Una incapacidad larga es catastrófica.",
                    "Deudores Hipotecarios: El seguro obligatorio del banco suele cobrar carísimo y solo salda la deuda, dejando a la familia sin casa. Endosa a un seguro independiente y ahorra.",
                    "Hijos adultos que mantienen económicamente a padres mayores: Tu muerte significa que los adultos mayores pierden el único sustento.",
                    "Cónyuges en pareja donde uno gana significativamente más: El de menor ingreso también necesita cobertura por muerte del principal."
                ]
            },
            {
                type: "heading",
                text: "Cálculo de Suma Asegurada: ¿Cuánto Necesitas Realmente?"
            },
            {
                type: "paragraph",
                text: "La suma asegurada debe cubrir: (1) deudas pendientes, (2) gastos funerarios, (3) educación de hijos hasta universidad, (4) sustento familiar durante 5 años mínimo. Aquí una guía rápida:"
            },
            {
                type: "list",
                items: [
                    "Ingreso $2M-$4M/mes + 2 hijos: Mínimo $200M-$300M de suma asegurada (5-7 años de ingresos).",
                    "Ingreso $4M-$8M/mes + 2 hijos: Mínimo $400M-$600M (cobertura más holgada).",
                    "Ingreso $8M+/mes + familia dependiente: Mínimo $800M-$1,500M (riqueza/inversiones acumuladas).",
                    "Fórmula práctica: [Ingreso mensual × 12 × 5 años] + [deudas] + [educación futura] = suma asegurada recomendada"
                ]
            },
            {
                type: "heading",
                text: "Tipos de Seguros de Vida: Tradicional vs Flexible vs con Ahorro"
            },
            {
                type: "paragraph",
                text: "Existen tres categorías principales de seguros de vida disponibles en Colombia. Elige según tu perfil:"
            },
            {
                type: "heading",
                text: "1. Seguro de Vida Tradicional (Temporal/A Término)"
            },
            {
                type: "list",
                items: [
                    "Concepto: Cobertura pura de muerte por N años (10, 15, 20 años típicamente).",
                    "Costo: ULTRA económico ($15k-$50k/mes según edad y suma).",
                    "Cobertura: Muerte e invalidez total permanente.",
                    "Ventaja: Máxima protección, mínimo costo.",
                    "Desventaja: Al finalizar el plazo, no hay valor acumulado.",
                    "Ideal para: Padres jóvenes que necesitan cobertura máxima a costo mínimo."
                ]
            },
            {
                type: "heading",
                text: "2. Seguro de Vida Flexible (Universal Life)"
            },
            {
                type: "list",
                items: [
                    "Concepto: Cobertura de muerte + fondo de inversión interno.",
                    "Costo: Moderado ($40k-$150k/mes según edad).",
                    "Características: Puedes ajustar cobertura y primas según necesidad. Fondo genera rendimiento interno.",
                    "Ventaja: Flexibilidad total + inversión + protección en vida (Critical Illness).",
                    "Desventaja: Más costoso que tradicional, requiere monitoreo anual.",
                    "Ideal para: Profesionales 35-50 años que quieren protección + ahorro simultáneamente."
                ]
            },
            {
                type: "heading",
                text: "3. Seguro de Vida con Ahorro (Dotales/Capitalización)"
            },
            {
                type: "list",
                items: [
                    "Concepto: Cobertura de muerte + acumulación de capital garantizado.",
                    "Costo: Alto ($100k-$300k/mes, inversión a largo plazo).",
                    "Características: Al final del plazo (10-20 años) recuperas TODO el capital acumulado (incluso si no moriste).",
                    "Ventaja: Forzado de ahorro disciplinado + protección familiar.",
                    "Desventaja: Capital no es muy alto comparado con inversiones directas, costo prohibitivo para jóvenes.",
                    "Ideal para: Personas 45+ que quieren asegurar educación universitaria de hijos + jubilación propia."
                ]
            },
            {
                type: "heading",
                text: "Coberturas Adicionales (Agregados) Recomendadas"
            },
            {
                type: "list",
                items: [
                    "Invalidez Total Temporal (ITT): Paga % de suma asegurada si quedas incapacitado temporalmente.",
                    "Enfermedades Graves (Critical Illness): Adelanta capital al diagnosticar cáncer, infarto, ACV, etc.",
                    "Incapacidad de Pago: Si pierdes empleo, la aseguradora paga tu prima por 6-12 meses.",
                    "Cobertura de Hijos: Agregado que asegura a todos tus hijos automáticamente.",
                    "Accidentes Personales (AD&D): Cobertura adicional de muerte por accidente (multiplica suma)."
                ]
            },
            {
                type: "heading",
                text: "La Matemática Biométrica: Por Qué Comprar Joven"
            },
            {
                type: "paragraph",
                text: "Este es probablemente el consejo más importante: tu prima de seguro de vida es una función directa de tu edad y salud actual. Comprar joven puede ahorrate millones:"
            },
            {
                type: "list",
                items: [
                    "A los 30 años sin pre-existencias: $300M suma asegurada = $25k-$35k/mes (BARATÍSIMO).",
                    "A los 45 años con hipertensión controlada: Mismo $300M = $60k-$90k/mes (+150%).",
                    "A los 55 años con antecedentes: Mismo $300M = $150k-$250k/mes (+400%).",
                    "Después de los 60: Muchas aseguradoras RECHAZAN solicitudes nuevas. Solo aceptan aumentos en pólizas existentes."
                ]
            },
            {
                type: "heading",
                text: "¿Qué Ocurre si Tengo Pre-existencias (Diabetes, Hipertensión, etc.)?"
            },
            {
                type: "list",
                items: [
                    "Diabetes controlada: Sobreprime de 25-50%, pero SÍ te aceptan.",
                    "Hipertensión controlada: Sobreprime de 10-25%, evaluación médica requerida.",
                    "Obesidad (IMC>30): Sobreprime de 50-100%, posibles restricciones.",
                    "Antecedentes de cáncer: Algunos rechazos, otros aceptan pero con período de espera de 5 años.",
                    "Consumo de tabaco: Multiplica prima por 2-3x, muchas aseguradoras lo excluyen.",
                    "Lo importante: Aunque tengas pre-existencias, SIGUE SIENDO más barato asegurar ahora que esperar."
                ]
            },
            {
                type: "heading",
                text: "Checklist: Qué Verificar Antes de Contratar"
            },
            {
                type: "list",
                items: [
                    "☑ Suma asegurada correcta: Hiciste el cálculo de 5 años ingresos + deudas + educación?",
                    "☑ Período de vigencia: ¿A qué edad vence la cobertura? (Crítico si aún tendrás dependientes).",
                    "☑ Exclusiones permanentes: ¿Qué NO cubre? (Suicidio primeros 2 años es estándar, pero verifica otras).",
                    "☑ Beneficiarios registrados: ¿Está correctamente designado cónyuge/hijos en póliza?",
                    "☑ Coberturas agregadas: ¿Incluye Critical Illness, Invalidez, Accidentes?",
                    "☑ Portabilidad: ¿Puedo mantener la póliza si cambio de empleo?"
                ]
            },
            {
                type: "heading",
                text: "Asesoría Especializada en Roesan Seguros"
            },
            {
                type: "paragraph",
                text: "En Roesan construimos portafolios de vida personalizados según tu perfil familiar, ingresos y obligaciones financieras. Calculamos la suma asegurada correcta, te explicamos cada tipo de cobertura, y cotizamos con las principales aseguradoras (SURA, Bolívar, AXA, Allianz, Mapfre) para obtener las mejores tasas."
            },
            {
                type: "paragraph",
                text: "Nuestro objetivo es que tengas tranquilidad total sabiendo que, bajo cualquier circunstancia, el patrimonio y educación de tu familia estarán protegidos. Contáctanos hoy para una asesoría sin costo ni compromiso."
            },
            { type: "cta", text: "" },
        ],
    },
    {
        slug: "seguro-vida-deudor-hipotecario-ahorro",
        title: "Endoso de Seguros Hipotecarios en Colombia 2026: Ahorra $200k-$500k Mensuales",
        excerpt:
            "No estás obligado a usar el seguro del banco. Endosa a una póliza independiente y ahorra. Guía completa sobre Ley 1328, requisitos mínimos, y cómo cambiar de asegurador en 4 pasos. Comparativa de costos banco vs seguros independientes.",
        date: "2026-05-08",
        readTime: "7 min",
        category: "Educación Financiera",
        categoryColor: "bg-blue-100 text-blue-700",
        coverImage: "/images/blog/apartamentos-hipotecario.png",
        content: [
            {
                type: "intro",
                text: "La mayoría de colombianos con crédito hipotecario pagan entre $300k y $800k mensuales en seguro de vida deudor + incendio sin saber que pueden reducir esa cifra hasta en 50% manteniendo la MISMA cobertura. Este artículo te explica el derecho legal que tienes (Ley 1328 de 2009) para cambiar de asegurador, los ahorros reales que puedes lograr, y el proceso paso a paso para endosar tu póliza hipotecaria con Roesan."
            },
            {
                type: "heading",
                text: "El Gran Secreto Que Los Bancos NO Te Dicen"
            },
            {
                type: "paragraph",
                text: "Cuando firmas un crédito hipotecario en Colombia, el banco te presenta (casi por imposición) dos seguros obligatorios:"
            },
            {
                type: "list",
                items: [
                    "Seguro de Vida Deudor (VD): Cubre el saldo insoluto de la deuda si falleces.",
                    "Seguro de Incendio y Terremoto (SIT): Protege la estructura del inmueble contra desastres naturales."
                ]
            },
            {
                type: "paragraph",
                text: "Lo que el banco NO subraya es que estos seguros son OBLIGATORIOS EN COBERTURA pero NO en asegurador. Tienes derecho absoluto a presentar una póliza de tercera empresa que cumpla los requisitos mínimos del banco. Esto se llama 'endoso'."
            },
            {
                type: "heading",
                text: "¿Cuánto Puedes Ahorrar con el Endoso?"
            },
            {
                type: "paragraph",
                text: "Los ahorros varían según el banco y el valor del inmueble, pero estos son números REALES de clientes que hemos ayudado:"
            },
            {
                type: "list",
                items: [
                    "Inmueble $200M (Bogotá, estrato 4): Banco cobraba $450k/mes → Endoso: $250k/mes = AHORRO $200k/mes ($2.4M/año)",
                    "Inmueble $400M (Medellín, estrato 5): Banco cobraba $680k/mes → Endoso: $380k/mes = AHORRO $300k/mes ($3.6M/año)",
                    "Inmueble $600M (Cali, premium): Banco cobraba $950k/mes → Endoso: $480k/mes = AHORRO $470k/mes ($5.6M/año)"
                ]
            },
            {
                type: "heading",
                text: "¿Por Qué el Seguro del Banco es Tan Caro?"
            },
            {
                type: "list",
                items: [
                    "Póliza colectiva: El banco negocia un precio único para TODOS sus deudores hipotecarios (no hay individualización).",
                    "Sobreprecio del intermediario: El banco retiene comisión de la aseguradora (15-25% del valor).",
                    "Cero competencia: El deudor tiene presión de cerrar el crédito y no compara opciones.",
                    "Sumas aseguradas conservadoras: Los bancos aseguran por el valor comercial, pero podrían ahorrar con tasación más realista."
                ]
            },
            {
                type: "heading",
                text: "La Base Legal: Ley 1328 de 2009 (Protección al Consumidor Financiero)"
            },
            {
                type: "paragraph",
                text: "En Colombia existe prohibición explícita de 'ventas atadas' (tied selling). El banco NO PUEDE:"
            },
            {
                type: "list",
                items: [
                    "❌ Obligarte a tomar seguro solo con una aseguradora específica.",
                    "❌ Cobrarte penalización o recargo si presentas seguro externo.",
                    "❌ Negar la solicitud de endoso si la póliza cumple requisitos mínimos.",
                    "❌ Retrasarte el proceso de desembolso si cambias de asegurador.",
                    "✅ SÍ puede exigir que la póliza cumpla: cobertura mínima igual o superior, exclusiones compatibles, aseguradora con calificación AA- o superior."
                ]
            },
            {
                type: "heading",
                text: "¿Qué Son los 'Requisitos Mínimos' Que Debe Cumplir tu Póliza?"
            },
            {
                type: "paragraph",
                text: "Cada banco establece requisitos específicos. Estos son típicos (verifica con tu banco):"
            },
            {
                type: "list",
                items: [
                    "Cobertura Vida Deudor: Mínimo igual al saldo insoluto del crédito (no menor).",
                    "Incendio y Terremoto: Mínimo igual al valor de avalúo del inmueble o mayor.",
                    "Aseguradora: Calificación AA- mínimo (Standard & Poor's o Fitch). SURA, Bolívar, Allianz, Mapfre, HDI califican.",
                    "Período de cobertura: Igual o mayor al plazo del crédito.",
                    "Beneficiarios: El banco debe estar como beneficiario de la cobertura de vida (línea de crédito).",
                    "Cláusula de subrogación: Que permita al banco cobrar directamente en caso de siniestro."
                ]
            },
            {
                type: "heading",
                text: "Proceso Paso a Paso: Cómo Endosar tu Seguro con Roesan"
            },
            {
                type: "list",
                items: [
                    "PASO 1 - Solicita Certificado: Llama a tu banco y pide el 'Certificado de Condiciones Mínimas de Seguros Hipotecarios'. Que lo envíen por email.",
                    "PASO 2 - Nos Compartes la Info: Reenvíanos el certificado y datos básicos (valor inmueble, saldo deuda, banco, plazo restante).",
                    "PASO 3 - Cotizamos: Obtenemos cotizaciones de SURA, Bolívar, Allianz, Mapfre comparando costos.",
                    "PASO 4 - Emitimos Póliza: Hacemos que la aseguradora emita la póliza con beneficiario el banco.",
                    "PASO 5 - Presentas al Banco: Tú (o nosotros) presentas la póliza original al banco con solicitud formal de endoso.",
                    "PASO 6 - Cambio Efectivo: El banco acepta (debe hacerlo) y tu nueva prima se descuenta del próximo pago. ¡Ahorros comienzan inmediatamente!"
                ]
            },
            {
                type: "heading",
                text: "Ventajas Adicionales del Endoso (Más Allá del Ahorro)"
            },
            {
                type: "list",
                items: [
                    "Asesoría personal: Tendrás un agente Roesan dedicado, no una línea al banco.",
                    "Flexibilidad: Puedes aumentar coberturas (deducible bajo, extensiones) sin autorización del banco.",
                    "Portabilidad: Si cambias de vivienda o refinancias con otro banco, la póliza es portable.",
                    "Gestión de siniestros: Si hay incendio u otro evento, Roesan te apoya 100% en el reclamo.",
                    "Actualizaciones: Podemos ajustar montos asegurados sin trámites bancariosengorrosos."
                ]
            },
            {
                type: "heading",
                text: "¿Hay Desventajas o Riesgos?"
            },
            {
                type: "list",
                items: [
                    "⚠️ Cambio administrativo: Requiere gestiones (mínimas, pero requieren paciencia).",
                    "⚠️ Tiempos: El proceso toma 15-30 días. Plan con anticipación.",
                    "⚠️ Banco rechaza póliza: Muy raro si cumples requisitos mínimos, pero puede ocurrir si tu aseguradora no tiene calificación suficiente.",
                    "✅ Sin riesgos en cobertura: Siempre y cuando cumplas requisitos mínimos, tu cobertura es idéntica o superior."
                ]
            },
            {
                type: "heading",
                text: "¿Cuándo NO Vale la Pena Endosar?"
            },
            {
                type: "list",
                items: [
                    "Crédito con menos de 2 años: Los ahorros no justifican el trámite administrativo.",
                    "Inmueble muy antiguo/especial: Algunos bancos rechazan pólizas si tasación es compleja.",
                    "Crédito a punto de terminar: Si solo faltan 1-2 años, ahorros marginales."
                ]
            },
            {
                type: "heading",
                text: "Asesoría Especializada con Roesan"
            },
            {
                type: "paragraph",
                text: "En Roesan gestionamos el 100% del proceso de endoso. Solo necesitas darnos el Certificado de Condiciones Mínimas de tu banco, nosotros cotizamos con las principales aseguradoras, emitimos la póliza con los beneficiarios correctos, y coordinamos la presentación al banco."
            },
            {
                type: "paragraph",
                text: "El ahorro promedio de nuestros clientes es de $2.4M-$5.6M anuales. No esperes más: contáctanos hoy y comienza a ahorrar desde el próximo mes."
            },
            { type: "cta", text: "" }
        ]
    },
    {
        slug: "seguro-bicicletas-patinetas-electricas-colombia",
        title: "Seguro Bicicleta y Patineta Eléctrica en Colombia 2026: Responsabilidad Civil y Robo",
        excerpt: "Protege tu bicicleta o scooter eléctrico contra robo, accidentes y responsabilidad civil. Guía completa de seguros de micromovilidad en Bogotá, Medellín y Cali. Coberturas, costos y regulaciones por ciudad.",
        date: "2026-05-08",
        readTime: "7 min",
        category: "Movilidad Urbana",
        categoryColor: "bg-emerald-100 text-emerald-700",
        coverImage: "/images/blog/seguro-bicicletas-patinetas.png",
        content: [
            {
                type: "intro",
                text: "En las calles de Bogotá, Medellín y Cali, la micromovilidad se ha duplicado en los últimos 24 meses. Bicicletas de gama alta, patinetas eléctricas, scooters eléctricos: todos son medios de transporte prácticos y ecológicos, pero también generan nuevos riesgos financieros. ¿Qué sucede si te roban la bicicleta ($3M-$8M) saliendo del trabajo? ¿O si accidentalmente golpeas a un peatón con tu scooter y te demanda por lesiones? Este artículo desglose los seguros de micromovilidad, sus coberturas, costos, y regulaciones por ciudad."
            },
            {
                type: "heading",
                text: "Auge de la Micromovilidad en Colombia"
            },
            {
                type: "paragraph",
                text: "Según estudios de movilidad urbana, el 28% de los desplazamientos en Bogotá, 22% en Medellín y 18% en Cali se realizan en bicicleta o vehículos micromovilidad. Las aplicaciones de bici compartida (Pícaro, DimoApp) han registrado más de 15 millones de viajes anuales. Con este crecimiento exponencial, los riesgos de pérdida o daño también se han multiplicado."
            },
            {
                type: "heading",
                text: "Los Riesgos Financieros de la Micromovilidad"
            },
            {
                type: "paragraph",
                text: "Moverse en dos ruedas trae desafíos técnicos y de seguridad. Los incidentes más comunes que requieren protección asegurada en Colombia incluyen:"
            },
            {
                type: "list",
                items: [
                    "Hurto de bicicleta o scooter: Pérdida de $3M-$12M. Bicicletas de gama media (Trek, Specialized, Santa Cruz) y scooters eléctricos (Xiaomi, Ninebot) son objetivos frecuentes de la delincuencia.",
                    "Daño material por accidente: Reparaciones que oscilan entre $500k-$3M en caso de colisión o caída.",
                    "Responsabilidad Civil por Lesiones a Terceros: Si atropellas o golpeas a un peatón, podrías enfrentar demandas de $10M-$50M por gastos médicos, lucro cesante y daño moral.",
                    "Accidente con vehículo motorizado: Si un carro o moto choca con tu bici/scooter, necesitas protección legal."
                ]
            },
            {
                type: "heading",
                text: "Regulaciones por Ciudad: Bogotá, Medellín, Cali"
            },
            {
                type: "paragraph",
                text: "Cada ciudad colombiana ha implementado normativas diferentes para la micromovilidad. Conocerlas es esencial para estar legal y protegido:"
            },
            {
                type: "list",
                items: [
                    "Bogotá (Decreto 064 de 2023): Obligatorio casco y reflectivos. Scooters limitados a 25 km/h en ciclovías. Edad mínima: 14 años. Responsabilidad civil recomendada $5M-$10M.",
                    "Medellín (Acuerdo 484 de 2022): Uso obligatorio de casco, luces y timbre. Prohibición de circular en aceras (solo ciclovías). Patinetas eléctricas requieren seguro si usan vías públicas compartidas.",
                    "Cali (Resolución 0384 de 2021): Casco obligatorio, prohibición en aceras y parques. Usuarios menores de 18 años deben contar con autorización parental y seguro específico."
                ]
            },
            {
                type: "heading",
                text: "Coberturas Esenciales de un Seguro de Micromovilidad"
            },
            {
                type: "paragraph",
                text: "Una póliza integral para bicicletas o patinetas eléctricas debe incluir:"
            },
            {
                type: "list",
                items: [
                    "Cobertura de Robo y Hurto: Indemnización del 80-100% del valor del equipo si es robado. Bicicletas: hasta $8M COP. Scooters eléctricos: hasta $5M COP.",
                    "Daño Material Accidental: Cubre reparaciones por caídas, colisiones o impacto. Límite: $1M-$2M COP.",
                    "Responsabilidad Civil Extracontractual (RCE): LA COBERTURA MÁS CRÍTICA. Paga indemnizaciones si lesionas a un peatón. Límite recomendado: $5M-$10M COP.",
                    "Gastos Médicos Personales: Si sufres lesiones en accidente, cubre atención de urgencia. Límite: $500k-$1.5M COP.",
                    "Asistencia en Vía 24/7: Transporte del equipo a taller, asistencia por pinchazos, cambio de ruedas."
                ]
            },
            {
                type: "heading",
                text: "Rango de Precios de Seguros de Micromovilidad en Colombia 2026"
            },
            {
                type: "paragraph",
                text: "Los costos varían según el tipo de equipo, valor, ciudad y coberturas seleccionadas:"
            },
            {
                type: "list",
                items: [
                    "Bicicleta convencional (MTB/Carrera): $25,000-$80,000 COP/mes. Valor equipo $3M-$8M. RCE incluida.",
                    "Bicicleta eléctrica de gama media (e-bikes): $60,000-$150,000 COP/mes. Valor equipo $8M-$20M. RCE expandida hasta $10M.",
                    "Patineta eléctrica básica (Xiaomi M365): $40,000-$90,000 COP/mes. Valor equipo $3M-$5M.",
                    "Patineta eléctrica premium (Xiaomi Pro, Ninebot): $80,000-$180,000 COP/mes. Valor equipo $5M-$15M. RCE hasta $15M.",
                    "Scooter eléctrico comercial: $100,000-$250,000 COP/mes si lo usas para mensajería."
                ]
            },
            {
                type: "heading",
                text: "Aseguradoras que Ofrecen Seguros de Micromovilidad en Colombia"
            },
            {
                type: "paragraph",
                text: "Varias aseguradoras principales han creado productos específicos para micromovilidad. Las opciones incluyen:"
            },
            {
                type: "links",
                text: "Aseguradoras con seguros de micromovilidad y bicicletas:",
                items: [
                    "https://www.sura.com.co - SURA seguros (opciones de bicicleta y movilidad urbana)",
                    "https://www.allianz.com.co - Allianz Colombia (planes de responsabilidad civil para ciclistas)",
                    "https://www.bolivar.com.co - Seguros Bolívar (seguros de bienes para bicicletas eléctricas)"
                ]
            },
            {
                type: "heading",
                text: "Aplicaciones de Bici Compartida que Funcionan en Colombia"
            },
            {
                type: "paragraph",
                text: "Si usas bicicletas compartidas en lugar de comprar una propia, revisa que las plataformas tengan cobertura de responsabilidad civil:"
            },
            {
                type: "list",
                items: [
                    "Pícaro (Bogotá): Más de 5,000 bicicletas. Incluye cobertura básica en sus bikes.",
                    "DimoApp (Medellín, Bogotá): Bicicletas y scooters eléctricos. Verificar cobertura con operador.",
                    "MiBici (Cali): Sistema municipal. Costo: $500/viaje.",
                    "Recomendación: Aunque uses bici compartida, ten seguro personal de RCE para protegerte si causas daño a terceros durante el uso."
                ]
            },
            {
                type: "heading",
                text: "Checklist: 5 Puntos para Elegir Tu Seguro de Micromovilidad"
            },
            {
                type: "list",
                items: [
                    "Responsabilidad Civil: Mínimo $5M-$10M según tu ciudad de residencia.",
                    "Cobertura de Robo: Debe cubrir 100% del valor de tu equipo según factura.",
                    "Atención en Vía: Asistencia 24/7 si quedas varado.",
                    "Regulación Local: Verifica que el seguro cumple requisitos de tu ciudad (Bogotá, Medellín, Cali).",
                    "Costo Mensual: Compara ofertas. No debería exceder el 1-2% del valor de tu equipo."
                ]
            },
            { type: "cta", text: "" }
        ]
    },
    {
        slug: "seguro-para-copropiedades-guia",
        title: "Seguro Copropiedades Ley 675 en Colombia 2026: Evita Cuotas Extraordinarias",
        excerpt: "Seguro obligatorio para copropiedades colombianas. Cobertura Ley 675, responsabilidad civil edificios, riesgos propiedad horizontal. Cómo evitar cuotas extraordinarias millonarias.",
        date: "2026-05-12",
        readTime: "7 min",
        category: "Propiedad Horizontal",
        categoryColor: "bg-indigo-100 text-indigo-700",
        coverImage: "/images/card-copropiedades.png",
        content: [
            {
                type: "intro",
                text: "Vivir en apartamento condominio, conjunto residencial o edificio multifamiliar trae comodidades, pero también riesgos compartidos. Si un incendio destruye los pasillos y el techo, o un visitante sufre un accidente grave en la piscina y demanda a la copropiedad por $20M-$50M: ¿quién paga? La Ley 675 exige un seguro, pero muchos administradores lo contratan de forma insuficiente. Esta guía explica cómo estructurar una póliza integral que evite cuotas extraordinarias de $500k-$5M+ por apartamento."
            },
            {
                type: "heading",
                text: "La Ley 675 de 2001: Requisitos Legales Mínimos"
            },
            {
                type: "paragraph",
                text: "El Código de Propiedad Horizontal colombiano establece obligaciones muy específicas. Toda copropiedad debe contratar seguro para:"
            },
            {
                type: "list",
                items: [
                    "Cobertura de Incendio y Rayo: Obligatoria. Cubre daños estructurales, reconstrucción de áreas comunes.",
                    "Terremoto y Temblor: Obligatoria en edificios de más de 7 pisos según Decreto 1400 de 2001. Colombia está en zona sísmica activa.",
                    "Responsabilidad Civil Extracontractual (RCE): Cubre indemnizaciones a terceros por accidentes en áreas comunes (visitantes, contratistas, empleados).",
                    "Valor asegurado mínimo: Debe cubrir 100% del costo de reconstrucción (NO puede ser infraseguro)."
                ]
            },
            {
                type: "heading",
                text: "El Verdadero Enemigo: Las Cuotas Extraordinarias Millonarias"
            },
            {
                type: "paragraph",
                text: "Un siniestro sin seguro adecuado genera cuotas extraordinarias brutales que pueden comprometer la estabilidad financiera de cientos de familias. Aquí algunos escenarios reales:"
            },
            {
                type: "list",
                items: [
                    "Incendio en zona común: Daño estimado $500M-$2,000M para reconstruir pasillos, ascensores, cubiertas. Cuota extraordinaria: $500k-$5M por apartamento (edificio de 100 unidades).",
                    "Demanda por accidente de visitante: Fractura grave, cirugía, incapacidad permanente. Demanda: $15M-$40M. Sin RCE, la copropiedad debe pagar de fondos de reserva.",
                    "Inundación por ruptura de tubería principal: Daños a apartamentos privados + áreas comunes = $200M-$800M. Responsabilidad solidaria de copropiedad.",
                    "Explosión en subestación eléctrica: Daño estructural severo + falta de electricidad por meses = cuota extraordinaria de $2M-$8M/apartamento."
                ]
            },
            {
                type: "heading",
                text: "Riesgos Específicos a Asegurar en Copropiedades"
            },
            {
                type: "list",
                items: [
                    "Daños por Agua: Ruptura de tuberías, desbordamiento de tanques, filtraciones. Límite recomendado: 80% del valor total de la construcción.",
                    "Rotura de Equipos: Ascensores, bombas de agua, generadores eléctricos. Costo de reparación: $50M-$300M por equipo.",
                    "Responsabilidad Civil Diferenciada: RCE estándar ($10M-$50M) vs. RCE ampliada para piscinas/áreas de alto riesgo ($100M+).",
                    "Manejo de Fondos y Administración: Póliza que proteja los recursos en tesorería contra fraude o mal uso.",
                    "Responsabilidad de Directivos (D&O): Protege al consejo de administración contra demandas por decisiones negligentes."
                ]
            },
            {
                type: "heading",
                text: "Tabla Comparativa: Infraseguro vs. Seguro Completo"
            },
            {
                type: "paragraph",
                text: "Comparativa de dos escenarios ante un incendio que afecta 40% de la estructura común ($800M de daño):"
            },
            {
                type: "list",
                items: [
                    "Infraseguro (INCORRECTO): Póliza de $500M. Aseguradora aplica penalización proporcional: paga solo $250M (50%). Déficit: $550M. Cuota extraordinaria: $5.5M por apartamento (100 unidades).",
                    "Seguro Completo (CORRECTO): Póliza de $2,000M (cobertura 100%). Aseguradora paga $800M íntegro. Cuota extraordinaria: $0. Copropiedad se recupera rápidamente.",
                    "Diferencia: Una cuota extraordinaria evitada de $5.5M × 100 = $550M en patrimonio colectivo protegido."
                ]
            },
            {
                type: "heading",
                text: "Costos de Pólizas de Copropiedades en Colombia 2026"
            },
            {
                type: "paragraph",
                text: "El costo mensual incluido en la cuota de administración varía según:"
            },
            {
                type: "list",
                items: [
                    "Edificio pequeño (12-30 apartamentos): $180,000-$400,000 mensuales ($15k-$35k por apto).",
                    "Edificio mediano (30-100 apartamentos): $400,000-$1.2M mensuales ($5k-$20k por apto).",
                    "Conjunto grande (100+ unidades, áreas comunes amplias): $1.5M-$5M mensuales ($8k-$12k por apto).",
                    "Edificio con piscina/zona recreativa: +30% adicional en prima.",
                    "Conjunto con riesgo sísmico alto o en zona de riesgo: +20-40% en prima."
                ]
            },
            {
                type: "heading",
                text: "Evita el Infraseguro: Checklist para Administradores"
            },
            {
                type: "list",
                items: [
                    "Realiza avalúo de reconstrucción ANUAL (costos de construcción suben 8-12% E.A.)",
                    "Suma asegurada debe ser 100% del avalúo (NO hagas infraseguro para ahorrar cuota).",
                    "Incluye coberturas adicionales: daño por agua, responsabilidad civil ampliada, manejo de fondos.",
                    "Negocia límites de RCE acordes al riesgo: mínimo $10M-$50M; si hay piscina o zona de alto riesgo, hasta $100M.",
                    "Revisa cobertura de terremoto (obligatoria) y valida deductible razonable (máx. 5% del valor asegurado).",
                    "Contrata D&O (Directivos y Administradores) para proteger consejo de demandas por negligencia."
                ]
            },
            {
                type: "heading",
                text: "Soluciones Integrales de Roesan para Administradores"
            },
            {
                type: "paragraph",
                text: "Trabajamos directamente con consejos de administración para estruturar seguros que cubran 100% del riesgo, a costos racionales. Incluimos análisis de riesgos, avalúos de reconstrucción actualizados, y asesoría en reclamaciones ante siniestros."
            },
            {
                type: "links",
                text: "Soluciones de seguros para copropiedades:",
                items: [
                    "https://www.roesan.co/empresas/seguros-condominios - Pólizas integrales para conjuntos residenciales",
                    "https://www.roesan.co/empresas/responsabilidad-civil - Cobertura RCE para edificios y copropiedades"
                ]
            },
            { type: "cta", text: "" }
        ]
    },
    {
        slug: "seguro-mascotas-responsabilidad-civil",
        title: "Seguro de Mascotas en Colombia 2026: Responsabilidad Civil para Perros y Gatos",
        excerpt: "Seguro de responsabilidad civil para mascotas. Cobertura mordidas, demandas civiles, razas especiales (Pitbull, Rottweiler). Costos, coberturas y exclusiones por raza en Colombia.",
        date: "2026-05-12",
        readTime: "6 min",
        category: "Personas y Hogar",
        categoryColor: "bg-orange-100 text-orange-700",
        coverImage: "/images/card-mascotas.png",
        content: [
            {
                type: "intro",
                text: "Tus perros y gatos son miembros de la familia. Pero bajo la ley colombiana (Código Civil Artículo 2353), eres 100% responsable legal de cualquier daño que causen. Una mordida que requiere 15 puntos, una demanda por $8M en cirugías plásticas, o un accidente de tránsito provocado por tu perro suelto pueden arruinar tu patrimonio. Por eso la Responsabilidad Civil es el seguro MÁS CRÍTICO para mascota propietarios. Esta guía explica coberturas, razas especiales, costos, y por qué el seguro de hogar simple no es suficiente."
            },
            {
                type: "heading",
                text: "Responsabilidad Civil en Mascotas: La Base Legal (Código Civil Art. 2353)"
            },
            {
                type: "paragraph",
                text: "En Colombia, el dueño o tenedor de una mascota es el responsable directo (responsabilidad extracontractual) de cualquier daño que el animal cause a terceros. Esto no es opcional: es tu obligación legal indemnizar a la víctima por gastos médicos, incapacidad, daño moral y cualquier consecuencia del accidente."
            },
            {
                type: "list",
                items: [
                    "No importa si el animal es pequeño, dócil o fue un 'accidente': legalmente eres responsable.",
                    "No tener dinero para pagar NO te exonera: la víctima puede demandarte al juzgado y embargar tus cuentas, bienes, sueldos.",
                    "La mayoría de seguros de hogar básicos incluyen solo $5M-$10M de RCE, insuficiente para daños graves."
                ]
            },
            {
                type: "heading",
                text: "Escenarios Financieros Reales: Cuánto Cuesta un Incidente de Mascota"
            },
            {
                type: "list",
                items: [
                    "Mordida a niño (15 puntos de sutura + infección): Urgencias $1.5M + cirugía plástica $4M + incapacidad 2 semanas $2M = $7.5M en demanda",
                    "Mordida severa (hospitales, terapia intensiva, cicatrices permanentes, daño moral): $15M-$30M en demanda",
                    "Accidente de tránsito (tu perro suelto causa que moto colisione): Lesiones motociclista + casco/daños moto = $20M-$50M demanda",
                    "Pelea con mascota ajena (veterinario especialista, cirugía de emergencia, secuelas): $3M-$12M demanda",
                    "Daños a propiedad (rotura de celular, lentes, ropa, mobiliario de común): $500k-$3M demanda"
                ]
            },
            {
                type: "heading",
                text: "Razas de Manejo Especial: Seguros Obligatorios"
            },
            {
                type: "paragraph",
                text: "El Código Nacional de Policía y Convivencia de Colombia identifica razas de 'manejo especial' que REQUIEREN seguro obligatorio. Incumplir esto trae multas de $930k-$1.86M y decomiso del animal:"
            },
            {
                type: "list",
                items: [
                    "Pitbull Terrier: Costo seguro $200k-$400k/mes. RCE obligatoria mínimo $10M-$20M.",
                    "Rottweiler: Costo $180k-$350k/mes. RCE mínimo $10M.",
                    "Dóberman: Costo $180k-$350k/mes. RCE mínimo $10M.",
                    "Pastor Alemán: Costo $150k-$300k/mes. RCE mínimo $5M-$10M.",
                    "Otras razas fuertes (Boxer, Mastín, Presa Canario, Akita): Costo $150k-$350k/mes según aseguradora.",
                    "Gatos y mascotas pequeñas: Generalmente incluidas en seguro de hogar básico sin sobrecosto."
                ]
            },
            {
                type: "heading",
                text: "Coberturas Esenciales de Seguro de Mascotas"
            },
            {
                type: "list",
                items: [
                    "Responsabilidad Civil Extracontractual (RCE): Cobertura PRINCIPAL. Indemnización a víctima. Rango: $5M-$50M según necesidad.",
                    "Gastos de Defensa Legal: Asume honorarios de abogados si eres demandado. Crítico en casos complejos.",
                    "Cobertura de Mascota en Hogar + RCE: Muchos seguros incluyen RCE de mascotas en póliza de hogar a bajo costo adicional.",
                    "Gastos Veterinarios de Emergencia (Opcional): Cirugías de emergencia, hospitalizaciones. Límite $5M-$20M.",
                    "Cobertura de Robo de Mascota (Opcional): Reembolso si tu mascota es robada. Menos prioritario."
                ]
            },
            {
                type: "heading",
                text: "Costos de Seguros de Responsabilidad Civil para Mascotas 2026"
            },
            {
                type: "list",
                items: [
                    "Gatos y razas pequeñas (bajo riesgo): $20k-$80k/mes. Incluido en seguro hogar basico.",
                    "Razas medianas (Labrador, Golden Retriever, Beagle): $80k-$150k/mes con RCE $5M-$10M.",
                    "Razas fuertes sin lista especial (Pastor Alemán, Boxer): $150k-$300k/mes con RCE $10M-$20M.",
                    "Razas de lista especial (Pitbull, Rottweiler, Dóberman): $200k-$400k/mes con RCE $10M-$30M OBLIGATORIA.",
                    "Cobertura ampliada (RCE $30M-$50M + gastos veterinarios): $300k-$600k/mes."
                ]
            },
            {
                type: "heading",
                text: "FAQ: Preguntas Frecuentes sobre Seguros de Mascotas"
            },
            {
                type: "list",
                items: [
                    "¿Si mi mascota es pequeña, necesito seguro? Sí. Incluso un gato puede morder a un niño; la demanda no discrimina por tamaño.",
                    "¿Mi seguro de hogar cubre a mi mascota? Parcialmente. La mayoría incluye RCE básica ($5M-$10M), insuficiente para daños graves.",
                    "¿Qué pasa si no tengo seguro y ocurre un incidente? Serás demandado. El juzgado puede embargar tus cuentas, salario o bienes para pagar indemnización.",
                    "¿Las razas pequeñas tienen pólizas más baratas? Sí, dramáticamente. Un gato $20k/mes vs. Pitbull $300k/mes.",
                    "¿El seguro cubre todo tipo de daño? No. Exclusiones típicas: daños por negligencia flagrante, animales agresivos previamente conocidos, daños intencionales."
                ]
            },
            {
                type: "heading",
                text: "Recomendaciones para Dueños de Mascotas"
            },
            {
                type: "list",
                items: [
                    "Si tienes raza especial (Pitbull, Rottweiler, etc): OBLIGATORIO. Mínimo $10M-$20M de RCE. Costo: $200k-$400k/mes.",
                    "Si tienes raza mediana o grande: RCE de al menos $10M incluida en seguro hogar ampliado. Costo adicional: $100k-$200k/mes.",
                    "Si tienes mascotas pequeñas/gatos: Incluye RCE en seguro hogar básico. Costo: marginal ($10k-$50k/mes adicional).",
                    "Verifica exclusiones en póliza: Revisa qué razas/situaciones la aseguradora NO cubre.",
                    "Mantén comportamiento controlado: Paseo con correa, entrenamiento básico, vaccunas al día. Reduce riesgo de incidentes."
                ]
            },
            { type: "cta", text: "" }
        ]
    },
    {
        slug: "sarlaft-importancia-empresas-personas",
        title: "SARLAFT en Colombia 2026: Requisito Legal para Empresas y Personas Naturales",
        excerpt: "SARLAFT: qué es, quién debe hacerlo, multas por incumplimiento. Lavado de activos, regulador Superfinanciera y Supersociedades. Seguros D&O para directivos.",
        date: "2026-05-14",
        readTime: "8 min",
        category: "Cumplimiento",
        categoryColor: "bg-blue-100 text-blue-700",
        coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        content: [
            {
                type: "intro",
                text: "En Colombia, el lavado de activos y la financiación del terrorismo son delitos perseguidos activamente por la Superfinanciera y la Superintendencia de Sociedades. El SARLAFT (Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo) no es un trámite administrativo más: es una obligación legal que afecta a empresas, trabajadores independientes, profesionales y personas naturales que interactúan con el sistema financiero o asegurador. Incumplir trae multas de $93M-$1.86 mil millones COP y riesgo criminal. Esta guía explica qué es, quién debe hacerlo, multas por incumplimiento, y cómo protegerse con seguros D&O."
            },
            {
                type: "heading",
                text: "¿Qué es el SARLAFT y quién debe hacerlo?"
            },
            {
                type: "paragraph",
                text: "El SARLAFT es un sistema de controles y políticas obligatorias que bancos, aseguradoras, SURA, Bolívar y otras entidades financieras implementan para prevenir que la economía legal sea utilizada para ocultar dineros ilícitos. Su objetivo es identificar y bloquear transacciones sospechosas relacionadas con lavado de activos o terrorismo."
            },
            {
                type: "list",
                items: [
                    "Personas Naturales: Si abres una cuenta bancaria, solicitas un crédito, compras seguro, o recibes remesas internacionales, debes diligenciar formulario SARLAFT declarando el origen lícito de tus fondos.",
                    "Empresas (todos los sectores): Todas las PYMES, empresas medias y grandes DEBEN implementar un programa SARLAFT formal con Oficial de Cumplimiento designado.",
                    "Profesionales Independientes: Abogados, contadores, arquitectos que manejan fondos de clientes requieren programa SARLAFT.",
                    "Trabajadores Independientes: Si recibes pagos por servicios frecuentes o internacionales, el banco/aseguradora puede solicitar actualización de SARLAFT."
                ]
            },
            {
                type: "heading",
                text: "Reguladores Clave: Superfinanciera y Superintendencia de Sociedades"
            },
            {
                type: "paragraph",
                text: "Dos organismos supervisan el cumplimiento SARLAFT en Colombia:"
            },
            {
                type: "list",
                items: [
                    "Superfinanciera (Superintendencia Financiera): Supervisa a bancos, compañías de seguros, cooperativas financieras, corredores de seguros. Multas: $93M-$1.86 mil millones COP por incumplimiento.",
                    "Superintendencia de Sociedades: Supervisa a PYMES y empresas del sector real (comercio, manufactura, servicios, etc.). Multas similares por falla en SARLAFT."
                ]
            },
            {
                type: "heading",
                text: "Componentes Críticos de un Programa SARLAFT Completo"
            },
            {
                type: "list",
                items: [
                    "Oficial de Cumplimiento: Persona designada responsable de monitorear riesgos de lavado de activos. En empresa grande: dedicado 100%. PYME: puede ser acumulativo.",
                    "Conocimiento del Cliente (KYC): Recopilar información completa de clientes, proveedores, accionistas: identidad, ocupación, origen de fondos, relaciones comerciales.",
                    "Monitoreo de Transacciones: Vigilancia continua de flujos de dinero. Alertas automáticas si hay patrones sospechosos (depósitos/giros estructurados, destinos de alto riesgo).",
                    "Política Anti-Lavado: Documento que describe cómo la empresa identifica, reporta y maneja riesgos de lavado de activos.",
                    "Capacitación Permanente: Entrenamientos anuales para empleados sobre detección de riesgos y prevención.",
                    "Reportes a Autoridades: Obligación de reportar operaciones sospechosas a la UIAF (Unidad de Información y Análisis Financiero)."
                ]
            },
            {
                type: "heading",
                text: "Multas por Incumplimiento SARLAFT en Colombia"
            },
            {
                type: "paragraph",
                text: "Las sanciones son drásticas. La Superfinanciera y Supersociedades aplican:"
            },
            {
                type: "list",
                items: [
                    "Por no tener programa SARLAFT: Multa de $930M-$1.86 billones COP (hasta $234M en pesos de 2026 USD).",
                    "Por desactualización de formularios: $250M-$500M COP.",
                    "Por falla en designación de Oficial de Cumplimiento: $500M-$1 billón COP.",
                    "Por no reportar transacciones sospechosas: $1 billón-$1.86 billones COP + procesos penales contra directivos.",
                    "Por reincidencia: Multas duplicadas o triplicadas.",
                    "Responsabilidad personal: El representante legal y directivos pueden enfrentar procesos criminales si hay complicidad o negligencia grave."
                ]
            },
            {
                type: "heading",
                text: "Responsabilidad de Directivos y Administradores: D&O"
            },
            {
                type: "paragraph",
                text: "La implementación del SARLAFT coloca responsabilidad directa en la junta directiva, representante legal y Oficial de Cumplimiento. Si hay falla en detección de riesgos u omisión involuntaria, estas personas pueden enfrentar:"
            },
            {
                type: "list",
                items: [
                    "Investigaciones de la Fiscalía General (procesos criminales por 'crimen de omisión').",
                    "Demandas civiles de accionistas o terceros por daño reputacional.",
                    "Inhabilitación profesional (Registro Nacional de Antecedentes Disciplinarios).",
                    "Embargo de bienes personales para pago de multas administrativas.",
                    "Pérdida de credibilidad empresarial / salida forzada de la junta directiva."
                ]
            },
            {
                type: "heading",
                text: "Seguros de Responsabilidad para Directivos (D&O)"
            },
            {
                type: "paragraph",
                text: "Para proteger el patrimonio personal de directivos, existen pólizas de Responsabilidad Civil para Directivos y Administradores (D&O). Estas cubren:"
            },
            {
                type: "list",
                items: [
                    "Gastos de defensa legal especializada en procesos administrativos y penales.",
                    "Multas administrativas impuestas por Superfinanciera/Supersociedades (en caso de omisión involuntaria demostrada).",
                    "Indemnizaciones civiles a terceros por daño reputacional.",
                    "Costo de crisis management y asesoría en protección patrimonial.",
                    "Beneficio CRÍTICO: Cubre incluso errores de Oficial de Cumplimiento asignado, siempre que haya diligencia razonable."
                ]
            },
            {
                type: "heading",
                text: "Costo de Seguros D&O en Colombia 2026"
            },
            {
                type: "list",
                items: [
                    "PYME (ingresos $500M-$2 mil millones): Seguro D&O $500k-$2M/mes. Cobertura: $500M-$2 mil millones.",
                    "Empresa mediana ($2 mil millones-$10 mil millones ingresos): Costo $2M-$8M/mes. Cobertura: $2 mil millones-$10 mil millones.",
                    "Empresa grande ($10 mil millones+): Costo $8M-$30M+/mes. Cobertura: $10 mil millones+.",
                    "Profesional independiente/consultor: Costo $200k-$500k/mes. Cobertura: $200M-$500M."
                ]
            },
            {
                type: "heading",
                text: "Checklist: Paso a Paso para Cumplir SARLAFT"
            },
            {
                type: "list",
                items: [
                    "Paso 1: Designa un Oficial de Cumplimiento (interno o externo: abogado, consultor especializado).",
                    "Paso 2: Implementa política Anti-Lavado documental y aprobada por junta directiva.",
                    "Paso 3: Establece procedimiento de KYC (Know Your Customer) para clientes y proveedores.",
                    "Paso 4: Desarrolla sistema de monitoreo de transacciones (manual o software especializado).",
                    "Paso 5: Capacita a equipo anualmente sobre identificación de riesgos.",
                    "Paso 6: Reporta operaciones sospechosas a UIAF inmediatamente (máx. 5 días).",
                    "Paso 7: Contrata seguro D&O para proteger patrimonio personal de directivos.",
                    "Paso 8: Actualiza formularios SARLAFT de clientes cada 24 meses (o si hay cambio significativo de perfil)."
                ]
            },
            {
                type: "links",
                text: "Recursos y autoridades de SARLAFT en Colombia:",
                items: [
                    "https://www.superfinanciera.gov.co - Superintendencia Financiera (supervisión de bancos/aseguradoras)",
                    "https://www.supersociedades.gov.co - Superintendencia de Sociedades (supervisión de PYMES/empresas)",
                    "https://www.uiaf.gov.co - UIAF: reportar operaciones sospechosas"
                ]
            },
            { type: "cta", text: "" }
        ]
    },
    {
        slug: "planes-mas-que-seguros-eps",
        title: "Planes más que Seguros: Salud Liviana de SURA y Bolívar sin dejar tu EPS en 2026",
        excerpt: "Descubre cómo complementar tu EPS con planes livianos de SURA y Bolívar. Acceso rápido a especialistas, sin copagos altos y con primas económicas. Mejora tu atención ambulatoria hoy.",
        date: "2026-05-14",
        readTime: "5 min",
        category: "Salud y Vida",
        categoryColor: "bg-teal-100 text-teal-700",
        coverImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
        content: [
            {
                type: "intro",
                text: "El sistema de salud en Colombia a través de las EPS cubre intervenciones quirúrgicas mayores y hospitalizaciones de alto costo, pero el verdadero dolor de cabeza para la mayoría de los usuarios está en el día a día: conseguir una cita rápida con un especialista o autorizar un examen diagnóstico sencillo. Muchos creen que la única salida es pagar una costosa póliza de salud integral o medicina prepagada, pero existe una tercera vía muy eficiente: los seguros de salud livianos de empresas como SURA y Bolívar."
            },
            {
                type: "heading",
                text: "¿Qué es un seguro de salud liviano o complementario?"
            },
            {
                type: "paragraph",
                text: "Un seguro liviano (también llamado póliza ambulatoria o seguro complementario) es un producto diseñado para complementar a tu EPS cubriendo exactamente donde esta falla: la oportunidad y rapidez en la atención básica. En lugar de pagar por coberturas hospitalarias complejas (que tu EPS ya asume por ley), pagas un valor mensual muy asequible enfocado en brindarte acceso directo y sin filas a consultas médicas, especialistas y exámenes de laboratorio. Es ideal para trabajadores independientes, empleados del sector privado y pensionados."
            },
            {
                type: "heading",
                text: "Mejores planes livianos en Colombia: SURA y Bolívar"
            },
            {
                type: "paragraph",
                text: "Las dos principales aseguradoras del país han desarrollado soluciones innovadoras y económicas para este segmento. Aquí detallamos las opciones más competitivas:"
            },
            {
                type: "heading",
                text: "Salud para Todos - Seguros Bolívar"
            },
            {
                type: "paragraph",
                text: "Bolívar, la aseguradora con más de 70 años de trayectoria en Colombia, lanzó 'Salud para Todos', un plan liviano diseñado específicamente para la clase media que desea medicina de calidad sin pagar de más."
            },
            {
                type: "list",
                items: [
                    "✓ Acceso directo a especialistas sin remisión del médico general",
                    "✓ Red amplia de médicos y clínicas afiliadas en Bogotá, Medellín, Cali y otras ciudades",
                    "✓ Citas en cuestión de 1-3 días hábiles (vs. meses en EPS)",
                    "✓ Exámenes de laboratorio y diagnóstico con cobertura alta",
                    "✓ Orientación médica telefónica 24/7",
                    "✓ Copagos económicos (por lo general entre $20,000 y $50,000 COP)",
                    "✓ Primas mensuales accesibles (desde $40,000 COP aprox.)"
                ]
            },
            {
                type: "links",
                text: "Para conocer más detalles, planes específicos y cotizaciones actualizadas de Bolívar, visita:",
                items: ["https://www.segurosbolivar.com - Sitio oficial Seguros Bolívar", "https://www.segurosbolivar.com/salud - Planes de salud complementaria"]
            },
            {
                type: "heading",
                text: "Planes Modulares y Salud para Dos - SURA"
            },
            {
                type: "paragraph",
                text: "SURA, el gigante asegurador con presencia en toda América Latina, ofrece productos de salud liviana pensados en flexibilidad y personalización. Puedes ajustar coberturas según tu edad y necesidades específicas."
            },
            {
                type: "list",
                items: [
                    "✓ Planes modulares: Elige qué servicios incluir (medicina general, especialistas, cirugía, dental)",
                    "✓ Opción familiar o compartida con la pareja",
                    "✓ Red preferencial de centros médicos de primer nivel",
                    "✓ Acceso a telemedicina (consultas virtuales con especialistas)",
                    "✓ Incluye algunos servicios preventivos (vacunas, odontología básica)",
                    "✓ Primas desde $35,000 COP mensuales (dependiendo del módulo)",
                    "✓ Procesamiento rápido de autorizaciones (máximo 24 horas)"
                ]
            },
            {
                type: "links",
                text: "Para explorar todos los planes y cotizar en línea, accede a:",
                items: ["https://www.sura.com.co - Portal oficial de SURA", "https://www.sura.com.co/seguros-de-salud - Todos sus planes de salud"]
            },
            {
                type: "heading",
                text: "Comparación directa: Bolívar vs SURA"
            },
            {
                type: "paragraph",
                text: "Ambas aseguradoras compiten fuertemente por este segmento. La diferencia principal radica en la red de prestadores y la flexibilidad de personalización. SURA permite mayor modularidad (armar tu propio plan), mientras que Bolívar ofrece paquetes más predefinidos pero con mejor relación precio-cobertura en muchos casos."
            },
            {
                type: "heading",
                text: "Ventajas de los planes livianos frente al modelo tradicional EPS"
            },
            {
                type: "list",
                items: [
                    "Acceso Directo: Te saltas el paso del médico general. Si te duele la rodilla, pides cita directamente con el ortopedista.",
                    "Economía: Las primas mensuales son sustancialmente más bajas que las de una póliza de salud integral completa, haciéndolas accesibles para la clase media.",
                    "Rapidez: Citas en cuestión de días (no meses), en consultorios privados o centros médicos VIP de calidad.",
                    "Sin copagos excesivos: Estructuras claras y en muchos casos, exenciones para servicios básicos de prevención.",
                    "Cobertura ambulatoria: Ideal para tratamientos continuos, fisioterapia, odontología y medicina especializada."
                ]
            },
            {
                type: "heading",
                text: "¿Por qué complementar tu EPS con un plan liviano?"
            },
            {
                type: "paragraph",
                text: "Las EPS están diseñadas para cobertura de urgencias y cirugías mayores, pero su estructura pública hace que se saturen fácilmente. Un plan liviano de SURA o Bolívar cubre exactamente donde las EPS flaquean: la medicina ambulatoria (consultas, especialistas, exámenes)."
            },
            {
                type: "list",
                items: [
                    "Evita perder tiempo en filas del médico general para obtener una remisión",
                    "Acceso a especialistas de alto nivel sin meses de espera",
                    "Protege tu presupuesto: copagos predecibles y bajos",
                    "Mejora significativamente tu calidad de vida e índices de salud preventiva"
                ]
            },
            {
                type: "heading",
                text: "Una decisión estratégica para tu salud"
            },
            {
                type: "paragraph",
                text: "La estrategia ideal para proteger tu salud financiera y física no es siempre comprar el seguro más caro. Mantener tu EPS para urgencias vitales, hospitalizaciones y cirugías mayores, combinada con un seguro liviano de SURA o Bolívar para tu atención ambulatoria, te brinda lo mejor de ambos mundos: protección integral a bajo costo."
            },
            {
                type: "heading",
                text: "Asesoría especializada en Roesan Seguros"
            },
            {
                type: "paragraph",
                text: "En Roesan Seguros analizamos tu perfil de salud, edad, presupuesto mensual y las clínicas de tu preferencia para recomendarte el plan liviano (Bolívar 'Salud para Todos', SURA modular, o alternativas de otras aseguradoras) que mejor complemente tus necesidades de salud diarias. Cotizamos directamente con las aseguradoras para garantizarte las mejores tarifas del mercado."
            },
            {
                type: "paragraph",
                text: "Contáctanos hoy y descubre cuánto podrías estar ahorrando con un plan complementario bien estructurado."
            },
            { type: "cta", text: "" }
        ]
    },
    {
        slug: "seguro-hogar-vivienda-guia-completa",
        title: "Seguro Hogar en Colombia 2026: Guía Completa - Cobertura, Costos y Comparativa",
        excerpt: "Seguro de hogar en Colombia. Cobertura incendio, robo, responsabilidad civil vivienda. Costo seguro casa por ciudad. Comparativa SURA, Bolívar, Allianz.",
        date: "2026-05-20",
        readTime: "8 min",
        category: "Personas y Hogar",
        categoryColor: "bg-orange-100 text-orange-700",
        coverImage: "/images/blog/seguro-hogar.png",
        content: [
            {
                type: "intro",
                text: "Tu vivienda es tu mayor patrimonio. Pero mientras proteges otros activos (auto, empresa, vida), muchas personas dejan desprotegida su casa. Un incendio, un robo, una explosión de gas, una tubería reventada que daña el interior: cualquiera de estos eventos puede destruir años de ahorros. En Colombia, un seguro de hogar no es un lujo: es protección patrimonial esencial. Esta guía explica coberturas, costos por ciudad, y cómo elegir la póliza correcta."
            },
            {
                type: "heading",
                text: "¿Por Qué Necesitas Seguro de Hogar en Colombia?"
            },
            {
                type: "paragraph",
                text: "Los riesgos de una vivienda en Colombia son variados y reales. Según el DANE y Fenaincol (Federación Nacional de Aseguradoras), el 18% de robo en hogares ocurre en Bogotá, 12% en Medellín, 10% en Cali. Además, eventos climáticos (granizadas en Bogotá, inundaciones en la Costa) destruyen viviendas regularmente."
            },
            {
                type: "list",
                items: [
                    "Robo a vivienda: Pérdida promedio $8M-$30M en bienes y daño estructural.",
                    "Incendio: Reconstrucción total puede costar $150M-$500M+ para casa de estrato 4-5.",
                    "Daño por agua: Rotura de tubería principal, inundación por lluvia = $10M-$50M.",
                    "Responsabilidad civil: Si un visitante se cae en tu casa y se lesiona, puede demandarte por $5M-$20M.",
                    "Eventos climáticos: Granizo, rayo, viento fuerte = daños de $2M-$20M."
                ]
            },
            {
                type: "heading",
                text: "Coberturas Esenciales de Seguro de Hogar"
            },
            {
                type: "list",
                items: [
                    "Cobertura de Incendio: La más importante. Reconstrucción de estructura + contenido. Rango: $50M-$300M según tamaño de casa.",
                    "Cobertura de Robo: Bienes sustraídos. Rango: $10M-$50M.",
                    "Daño por Agua: Rupturas de tuberías, inundaciones. Rango: $20M-$100M.",
                    "Responsabilidad Civil: Si lesionas a visitante. Rango: $5M-$20M.",
                    "Cristales: Vidrios de ventanas/puertas. Cobertura baja pero útil.",
                    "Bienes en Tránsito: Protege contenido si te mudas.",
                    "Gastos de Salvamento: Mitigación de pérdidas (emergencias, contención)."
                ]
            },
            {
                type: "heading",
                text: "Rango de Precios de Seguro de Hogar por Ciudad 2026"
            },
            {
                type: "paragraph",
                text: "El costo varía significativamente por ubicación, estrato socioeconómico y coberturas seleccionadas:"
            },
            {
                type: "list",
                items: [
                    "Bogotá estrato 3 (apartamento 80m²): $80k-$150k/mes. Cobertura: $80M.",
                    "Bogotá estrato 4-5 (casa 250m²): $200k-$400k/mes. Cobertura: $200M-$300M.",
                    "Medellín estrato 3: $70k-$130k/mes. Cobertura: $70M.",
                    "Medellín estrato 4-5: $180k-$350k/mes. Cobertura: $180M-$250M.",
                    "Cali estrato 3-4: $60k-$120k/mes. Cobertura: $60M-$100M.",
                    "Barranquilla/costa (riesgo sísmico): +20% en prima por cobertura sísmica."
                ]
            },
            {
                type: "heading",
                text: "Comparativa: SURA vs Bolívar vs Allianz en Hogar"
            },
            {
                type: "list",
                items: [
                    "SURA: Prima promedio 0.12% del valor asegurado. Red de peritos amplia. Trámite rápido.",
                    "Bolívar: Prima promedio 0.10% del valor. Ofertas para paquetes (auto + hogar). Buen servicio técnico.",
                    "Allianz: Prima promedio 0.11% del valor. Énfasis en protección de responsabilidad civil. Defensa legal incluida.",
                    "Recomendación: Cotiza con las 3 para comparar. Diferencia: $20k-$50k/mes según perfil."
                ]
            },
            {
                type: "heading",
                text: "Checklist: 7 Puntos para Elegir Tu Seguro de Hogar"
            },
            {
                type: "list",
                items: [
                    "Suma asegurada correcta: Debe cubrir 100% de valor de reconstrucción (no hagas infraseguro).",
                    "Incluye responsabilidad civil: Mínimo $5M-$10M para proteger de demandas.",
                    "Cobertura de agua: Crítico si vives en zona de riesgo de inundación.",
                    "Deducible razonable: Máximo 5-10% del valor asegurado.",
                    "Peritos en tu ciudad: Verifica que aseguradora tenga red local para tramitar siniestros rápido.",
                    "Cláusula de reposición a nuevo: Asegura que si pierdes un bien, se repone a precio actual (no depreciado).",
                    "Cobertura de eventos climáticos: Incluye granizo, rayo, viento fuerte (especialmente en Bogotá/Medellín)."
                ]
            },
            {
                type: "heading",
                text: "Errores Comunes al Contratar Seguro de Hogar"
            },
            {
                type: "list",
                items: [
                    "Infraseguro: Asegurar por $80M una casa que cuesta reconstruir $200M. En siniestro, aseguradora paga solo proporcionalmente ($80M/$200M = 40%).",
                    "No actualizar valor cada 2 años: Costos de construcción suben 8-12% E.A. Tu póliza se queda atrás.",
                    "Omitir responsabilidad civil: Visitante se cae en tu escalera = demanda de $10M que no está cubierta.",
                    "No reportar mejoras: Si reformaste la casa (+$50M valor), póliza se vuelve insuficiente.",
                    "Deducible muy alto: Buscar prima baja = deducible 20-30%. En siniestro pequeño ($5M), asumes casi todo."
                ]
            },
            {
                type: "links",
                text: "Cotiza tu seguro de hogar directamente con aseguradoras:",
                items: [
                    "https://www.sura.com.co - SURA seguros de hogar y propiedad",
                    "https://www.bolivar.com.co - Bolívar seguros para vivienda y contenido",
                    "https://www.allianz.com.co - Allianz pólizas integrales de hogar"
                ]
            },
            { type: "cta", text: "" }
        ]
    },
    {
        slug: "mejores-aseguradoras-colombia-2026",
        title: "Mejores Aseguradoras en Colombia 2026: Ranking, Servicios y Comparativa",
        excerpt: "Ranking de mejores aseguradoras en Colombia 2026: SURA, Bolívar, Allianz, Mapfre, HDI. Comparativa por servicio, precios, reclamos y calificación.",
        date: "2026-05-22",
        readTime: "9 min",
        category: "Educación Financiera",
        categoryColor: "bg-blue-100 text-blue-700",
        coverImage: "/images/blog/aseguradoras-colombia.png",
        content: [
            {
                type: "intro",
                text: "Elegir una aseguradora correcta es decisión crítica. No todas las compañías ofrecen el mismo nivel de servicio, velocidad en reclamaciones o red de peritos. En Colombia operan más de 30 aseguradoras, pero 5-6 dominan 80% del mercado. Esta guía ranking las mejores según servicio, precio, calidad de atención y rapidez de pago. Incluye análisis de cada una en seguros de auto, hogar, vida y salud."
            },
            {
                type: "heading",
                text: "Las 5 Principales Aseguradoras en Colombia"
            },
            {
                type: "paragraph",
                text: "Según datos de la Superintendencia Financiera, estas son las aseguradoras con mayor participación de mercado y solidez financiera:"
            },
            {
                type: "heading",
                text: "1. SURA (Grupo Suramericana)"
            },
            {
                type: "list",
                items: [
                    "Posición: #1 en Colombia por ingresos y volumen de pólizas.",
                    "Fortaleza: Mayor red de peritos (3,000+), rapidez en pagos (promedio 15 días).",
                    "Productos Principales: Auto todo riesgo, hogar, vida integral, salud, empresa.",
                    "Presencia: Oficinas en 20+ ciudades. Atención 24/7.",
                    "Calificación: Excelente servicio al cliente (NPS 72). Solidez financiera: AAA (Fitch).",
                    "Ventaja Competitiva: Integración con otras empresas del grupo (pensiones, fondos, salud).",
                    "Costo Promedio: Auto $2.0M-$3.5M/año. Hogar $120k-$350k/mes."
                ]
            },
            {
                type: "heading",
                text: "2. Seguros Bolívar"
            },
            {
                type: "list",
                items: [
                    "Posición: #2 en mercado. Subsidiaria de Grupo Bolívar (finanzas).",
                    "Fortaleza: Precios competitivos, paquetes combinados (auto + hogar descuento).",
                    "Productos Principales: Auto, vida, hogar, salud complementaria.",
                    "Presencia: 15+ ciudades, oficinas en malls.",
                    "Calificación: Buen servicio. Solidez: AA (Fitch).",
                    "Ventaja Competitiva: Acceso a crédito Grupo Bolívar (descuentos financieros).",
                    "Costo Promedio: Auto $1.8M-$3.0M/año. Hogar $100k-$300k/mes."
                ]
            },
            {
                type: "heading",
                text: "3. Allianz Colombia"
            },
            {
                type: "list",
                items: [
                    "Posición: #3-4. Filial de Allianz Global (Alemania).",
                    "Fortaleza: Solidez internacional, énfasis en defensa legal (incluida en pólizas).",
                    "Productos Principales: Auto todo riesgo, responsabilidad civil, hogar, vida.",
                    "Presencia: 12 ciudades principales.",
                    "Calificación: Servicio técnico superior. Solidez: AAA (Fitch).",
                    "Ventaja Competitiva: Cobertura internacional de auto (viajes a países vecinos).",
                    "Costo Promedio: Auto $2.2M-$3.8M/año (premium). Hogar $130k-$400k/mes."
                ]
            },
            {
                type: "heading",
                text: "4. Mapfre Colombia"
            },
            {
                type: "list",
                items: [
                    "Posición: #4-5. Empresa española con presencia latinoamericana.",
                    "Fortaleza: Bajo costo, productos modulares (arma tu póliza).",
                    "Productos Principales: Auto, hogar, salud, empresa PYME.",
                    "Presencia: 8-10 ciudades. Atención online fuerte.",
                    "Calificación: Servicio básico. Solidez: AA (Fitch).",
                    "Ventaja Competitiva: Mejor opción para PYMES y presupuesto ajustado.",
                    "Costo Promedio: Auto $1.6M-$2.8M/año (económico). Hogar $80k-$250k/mes."
                ]
            },
            {
                type: "heading",
                text: "5. HDI Colombia"
            },
            {
                type: "list",
                items: [
                    "Posición: #6-7 en mercado.",
                    "Fortaleza: Especialidad en auto. Programa de descuentos para conductores seguros (GreenDrive).",
                    "Productos Principales: Auto especializado, hogar básico, responsabilidad civil.",
                    "Presencia: 10 ciudades.",
                    "Calificación: Bueno en auto, básico en otros. Solidez: AA (Fitch).",
                    "Ventaja Competitiva: Descuentos por telemetría y conducción responsable.",
                    "Costo Promedio: Auto $1.7M-$3.0M/año (variable por perfil)."
                ]
            },
            {
                type: "heading",
                text: "Tabla Comparativa: Ranking por Tipo de Seguro"
            },
            {
                type: "list",
                items: [
                    "MEJOR PARA AUTO: SURA (rapidez peritos) > Bolívar (precio) > HDI (descuentos conducta).",
                    "MEJOR PARA HOGAR: SURA (cobertura completa) > Bolívar (precio paquete) > Allianz (defensa legal).",
                    "MEJOR PARA VIDA: SURA (opciones) > Bolívar (precio) > Allianz (defensa).",
                    "MEJOR PARA SALUD: SURA/Bolívar (planes livianos) > Allianz (cobertura).",
                    "MEJOR PARA PYME: Mapfre (precio) > Bolívar (servicio) > SURA (opciones)."
                ]
            },
            {
                type: "heading",
                text: "Criterios para Elegir la Mejor Aseguradora para Ti"
            },
            {
                type: "list",
                items: [
                    "Solidez Financiera: Verifica calificación en Fitch/Moody's. Mínimo AA (garantiza pago de siniestros).",
                    "Rapidez en Reclamaciones: Consulta con amigos/family. SURA y Allianz: 10-20 días promedio.",
                    "Red de Peritos: Asegura que tenga en TU CIUDAD. Mapfre/HDI tienen redes limitadas en provincia.",
                    "Presencia 24/7: ¿Puedo reportar siniestro a las 11pm? SURA/Bolívar tienen mejor cobertura.",
                    "Precio Competitivo: Cotiza siempre con 3-4 aseguradoras. Diferencia: $30k-$100k/mes.",
                    "Productos Combinados: ¿Ofrecen paquetes descuento (auto + hogar + vida)? Bolívar lo hace bien.",
                    "Atención al Cliente: Lee comentarios. NPS de SURA es más alto que Mapfre."
                ]
            },
            {
                type: "heading",
                text: "Recomendaciones Finales"
            },
            {
                type: "list",
                items: [
                    "Para mejor servicio overall: SURA (primer lugar). Costo: premium 10-15% arriba del promedio.",
                    "Para mejor relación precio-servicio: Bolívar (recomendado para presupuesto balanceado).",
                    "Para presupuesto ajustado: Mapfre (ahorras 20-30% vs SURA, sacrificas algo en servicio).",
                    "Para especialidad auto: HDI (si aplicas descuentos por conducción).",
                    "Para protección legal máxima: Allianz (defensa legal incluida, costo alto)."
                ]
            },
            {
                type: "paragraph",
                text: "Lo más importante: NO elijas solo por precio. Una aseguradora que demora 3 meses en pagar un reclamo no vale el ahorro de $30k/mes. Cotiza, compara servicio, y elige según TUS prioridades."
            },
            { type: "cta", text: "" }
        ]
    }
];
