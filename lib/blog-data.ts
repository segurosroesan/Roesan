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
        title: "¿Por qué tener un seguro en Colombia no es un gasto sino la mejor inversión para tu futuro?",
        excerpt:
            "En Colombia, muchas personas aún ven los seguros como un gasto innecesario. Descubre por qué una póliza bien estructurada es una herramienta financiera clave para proteger tu patrimonio de la inflación y los imprevistos.",
        date: "2026-03-20",
        readTime: "6 min",
        category: "Educación Financiera",
        categoryColor: "bg-blue-100 text-blue-700",
        coverImage: "/images/card-todo-riesgo-globo.png",
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
        title: "Seguro para Bicicletas y Patinetas Eléctricas: Protege tu Movilidad Sostenible",
        excerpt: "La micromovilidad llegó para quedarse en las ciudades colombianas. Descubre cómo proteger tu bici o scooter contra robo, accidentes y daños a terceros.",
        date: "2026-05-08",
        readTime: "5 min",
        category: "Movilidad Urbana",
        categoryColor: "bg-emerald-100 text-emerald-700",
        coverImage: "/images/blog/seguro-bicicletas-patinetas.png",
        content: [
            {
                type: "intro",
                text: "En los últimos años, las calles de Bogotá, Medellín y Cali se han llenado de ciclistas y usuarios de patinetas eléctricas. Esta transición hacia una movilidad más sostenible y eficiente es fantástica, pero también trae nuevos riesgos. ¿Qué pasa si te roban la bicicleta saliendo del trabajo? ¿O si accidentalmente golpeas a un peatón con tu scooter? Aquí te explicamos por qué necesitas un seguro de micromovilidad."
            },
            {
                type: "heading",
                text: "Los riesgos de la micromovilidad en la ciudad"
            },
            {
                type: "paragraph",
                text: "Moverse en dos ruedas (o ruedas pequeñas) tiene sus desafíos técnicos y de seguridad. Los incidentes más comunes reportados en Colombia incluyen:"
            },
            {
                type: "list",
                items: [
                    "Hurto calificado: Las bicicletas de gama media y alta, así como las patinetas eléctricas, son objetivos frecuentes de la delincuencia.",
                    "Accidentes viales: Caídas por mal estado de la vía o colisiones con otros vehículos.",
                    "Responsabilidad Civil: Daños causados a otras personas o bienes ajenos mientras transitas."
                ]
            },
            {
                type: "heading",
                text: "¿Qué cubre una póliza para bicis y scooters?"
            },
            {
                type: "paragraph",
                text: "Un buen seguro de movilidad urbana no solo protege el equipo, sino también al usuario y su patrimonio:"
            },
            {
                type: "list",
                items: [
                    "Indemnización por robo: Reposición del valor de tu vehículo en caso de hurto.",
                    "Daños accidentales: Cubre las reparaciones necesarias tras un choque o caída.",
                    "Responsabilidad Civil Extracontractual: Paga los daños que puedas causar a terceros (el amparo más importante).",
                    "Asistencia en vía: Grúa, transporte por avería o incluso asistencia médica si la necesitas."
                ]
            },
            {
                type: "heading",
                text: "Consejos para usuarios de movilidad eléctrica"
            },
            {
                type: "paragraph",
                text: "Si usas patineta eléctrica, recuerda que la normativa en Colombia exige el uso de casco, luces y, en algunos casos, chaleco reflectivo. Contar con un seguro no solo te da tranquilidad financiera, sino que te respalda ante posibles reclamaciones legales derivadas de tu tránsito por la ciudad."
            },
            {
                type: "paragraph",
                text: "En Roesan Seguros te ayudamos a encontrar el plan que mejor se adapte a tu estilo de vida y al valor de tu vehículo eléctrico o bicicleta."
            },
            { type: "cta", text: "" }
        ]
    },
    {
        slug: "seguro-para-copropiedades-guia",
        title: "Seguro para Copropiedades: Más que un requisito legal, la protección de tu patrimonio",
        excerpt: "La Ley 675 exige a las copropiedades en Colombia asegurar las áreas comunes. Conoce por qué una buena póliza salva a los propietarios de cuotas extraordinarias millonarias.",
        date: "2026-05-12",
        readTime: "5 min",
        category: "Propiedad Horizontal",
        categoryColor: "bg-indigo-100 text-indigo-700",
        coverImage: "/images/card-copropiedades.png",
        content: [
            {
                type: "intro",
                text: "Vivir en un conjunto residencial, edificio o parcelación trae grandes comodidades, pero también implica asumir riesgos compartidos. ¿Qué pasaría si un incendio daña severamente los pasillos y el lobby? ¿O si un visitante sufre un accidente grave en la zona de la piscina y decide demandar a la copropiedad? Aquí es donde entra en juego el seguro de copropiedades, un escudo financiero vital para la comunidad."
            },
            {
                type: "heading",
                text: "¿Qué exige la Ley de Propiedad Horizontal en Colombia?"
            },
            {
                type: "paragraph",
                text: "La Ley 675 de 2001 es muy clara al respecto: todas las copropiedades están en la obligación legal de adquirir una póliza que asegure las áreas comunes contra los riesgos de incendio y terremoto. Sin embargo, quedarse únicamente con el mínimo legal suele ser insuficiente."
            },
            {
                type: "list",
                items: [
                    "Incendio y Rayo: Cobertura básica y obligatoria para reconstruir áreas esenciales.",
                    "Terremoto y Temblor: Fundamental en Colombia dada nuestra geografía sísmica.",
                    "Responsabilidad Civil Extracontractual (RCE): El amparo que protege el patrimonio del conjunto ante demandas de terceros (ej. accidentes de visitantes o contratistas dentro de las instalaciones)."
                ]
            },
            {
                type: "heading",
                text: "La barrera contra las Cuotas Extraordinarias"
            },
            {
                type: "paragraph",
                text: "El verdadero valor de este seguro se ve en los momentos de crisis. Si ocurre un siniestro que daña la estructura compartida (por ejemplo, la rotura del ascensor o una explosión en la subestación eléctrica) y el conjunto no está correctamente asegurado, el costo de las reparaciones o indemnizaciones recaerá directamente sobre los copropietarios."
            },
            {
                type: "paragraph",
                text: "Esto se traduce en cuotas extraordinarias dolorosas que pueden ascender a varios millones de pesos por apartamento, desestabilizando las finanzas de cientos de familias."
            },
            {
                type: "heading",
                text: "Evita el Infraseguro: Asesoría experta para Administradores"
            },
            {
                type: "paragraph",
                text: "Uno de los errores más comunes es asegurar la copropiedad por un valor inferior al costo real de reconstrucción (infraseguro) para ahorrar en la cuota mensual. En caso de desastre, la aseguradora aplicará una penalización proporcional y la copropiedad no recibirá el dinero suficiente para recuperar lo perdido."
            },
            {
                type: "paragraph",
                text: "En Roesan Seguros trabajamos de la mano con administradores y consejos de administración. Realizamos análisis rigurosos para garantizar coberturas integrales (daños por agua, rotura de maquinaria, manejo de fondos y protección a directivos) asegurando que tu comunidad esté respaldada 100% ante la adversidad."
            },
            { type: "cta", text: "" }
        ]
    },
    {
        slug: "seguro-mascotas-responsabilidad-civil",
        title: "Seguro para Mascotas: ¿Por qué la Responsabilidad Civil es el amparo más importante?",
        excerpt: "Tu perro o gato es parte de la familia, pero ¿qué sucede si causa un accidente o lesiona a un tercero? Entiende cómo esta póliza te protege de demandas millonarias.",
        date: "2026-05-12",
        readTime: "4 min",
        category: "Personas y Hogar",
        categoryColor: "bg-orange-100 text-orange-700",
        coverImage: "/images/card-mascotas.png",
        content: [
            {
                type: "intro",
                text: "Nuestros perros y gatos no son solo animales de compañía; son miembros fundamentales de nuestra familia. Sin embargo, su instinto, el miedo o una reacción inesperada pueden causar incidentes. Muchos dueños buscan seguros exclusivamente para cubrir gastos veterinarios, pasando por alto el escudo financiero más crítico: la cobertura de Responsabilidad Civil."
            },
            {
                type: "heading",
                text: "¿Qué es la Responsabilidad Civil en mascotas?"
            },
            {
                type: "paragraph",
                text: "La Responsabilidad Civil Extracontractual (RCE) es la cobertura encargada de indemnizar económicamente a terceros por los daños materiales o lesiones corporales que tu mascota pueda causar. En Colombia, el Código Civil (Artículo 2353) establece de forma estricta que el dueño o tenedor es el responsable directo de pagar por los perjuicios causados por su animal."
            },
            {
                type: "heading",
                text: "Escenarios reales donde este seguro salva tu bolsillo"
            },
            {
                type: "list",
                items: [
                    "Mordeduras a terceros: Los gastos médicos de urgencias, terapias, cirugías plásticas o lucro cesante (incapacidades) de la víctima pueden sumar rápidamente decenas de millones de pesos.",
                    "Peleas con otras mascotas: Si tu perro lesiona de gravedad a la mascota del vecino en el parque, la ley te obliga a asumir la totalidad de la factura veterinaria.",
                    "Accidentes de tránsito: Si tu mascota se suelta, cruza la calle y provoca que un motociclista o ciclista sufra una caída grave al intentar esquivarlo, la demanda civil recaerá sobre tu patrimonio.",
                    "Daños a la propiedad ajena: Desde destrozos costosos en la ropa o celular de un visitante, hasta daños en el mobiliario de las zonas comunes de tu conjunto residencial."
                ]
            },
            {
                type: "heading",
                text: "Mascotas de Manejo Especial (Razas Fuertes)"
            },
            {
                type: "paragraph",
                text: "Es vital recordar que el Código Nacional de Policía y Convivencia exige que los propietarios de ciertas razas de perros (anteriormente catalogadas como 'potencialmente peligrosas' como Pitbull, Dóberman, Rottweiler, entre otras) cuenten con una póliza de Responsabilidad Civil de manera completamente obligatoria. No tenerla te expone a cuantiosas multas y al decomiso del animal, pero más grave aún, al embargo de tus cuentas bancarias si ocurre una tragedia y eres demandado."
            },
            {
                type: "heading",
                text: "Tranquilidad para ti, respaldo legal para tu mascota"
            },
            {
                type: "paragraph",
                text: "En Roesan Seguros siempre recomendamos que la protección de tu mascota sea integral. Una póliza robusta de Responsabilidad Civil (que en muchos casos se puede integrar a tu Seguro de Hogar sin costos prohibitivos) no solo cubre la indemnización a la víctima, sino que también asume los gastos de tu defensa legal y honorarios de abogados."
            },
            {
                type: "paragraph",
                text: "Proteger a tu mascota también significa blindar tus ahorros y los de tu familia frente a imprevistos que están fuera de tu control."
            },
            { type: "cta", text: "" }
        ]
    },
    {
        slug: "sarlaft-importancia-empresas-personas",
        title: "¿Qué es el Formulario de Conocimiento de la Persona (SARLAFT)?",
        excerpt: "El SARLAFT no es solo un trámite; es un requisito ineludible tanto para negocios como para individuos al interactuar con bancos y aseguradoras. Conoce su impacto legal.",
        date: "2026-05-14",
        readTime: "6 min",
        category: "Cumplimiento",
        categoryColor: "bg-blue-100 text-blue-700",
        coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        content: [
            {
                type: "intro",
                text: "En Colombia, la prevención de delitos financieros es una prioridad absoluta. A menudo se piensa que el SARLAFT es un dolor de cabeza exclusivo para las grandes empresas, pero la realidad es que también impacta directamente a las personas naturales. Tanto si tienes un negocio como si vas a pedir un crédito o comprar una póliza de seguro a título personal, mantener esta información actualizada es obligatorio. Pero, ¿qué es exactamente y por qué es tan estricto?"
            },
            {
                type: "heading",
                text: "¿Qué es el SARLAFT?"
            },
            {
                type: "paragraph",
                text: "El Sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo (SARLAFT) es un conjunto de políticas y controles implementados por el sector financiero y real. Su propósito es evitar que la economía legal sea utilizada para ocultar dineros ilícitos. Por esto, cada vez que abres una cuenta, compras un seguro o firmas un contrato, debes diligenciar y actualizar este formulario, declarando el origen lícito de tus fondos (ya seas empresa o persona)."
            },
            {
                type: "heading",
                text: "La importancia crítica de tenerlo actualizado"
            },
            {
                type: "list",
                items: [
                    "Evitar Sanciones Millonarias: Las multas por incumplimiento o desactualización de los manuales del SARLAFT por parte de Supersociedades o la Superfinanciera pueden ser devastadoras para el flujo de caja.",
                    "Protección Reputacional: Estar involucrado, incluso por omisión o descuido de un tercero (clientes o proveedores), en una investigación por lavado de activos puede destruir la confianza del mercado en tu marca.",
                    "Acceso al Sistema Financiero y Asegurador: Los bancos y aseguradoras exigen el cumplimiento estricto y actualizado del SARLAFT. Sin él, es casi imposible obtener créditos, abrir cuentas corporativas o emitir pólizas de cumplimiento.",
                    "Evolución del Riesgo: Las modalidades de fraude y delitos financieros evolucionan constantemente. Un manual que no se actualiza es una puerta abierta a nuevos riesgos que tu empresa no está detectando."
                ]
            },
            {
                type: "heading",
                text: "El rol de los Seguros de Responsabilidad (D&O)"
            },
            {
                type: "paragraph",
                text: "Implementar y mantener el SARLAFT implica designar un Oficial de Cumplimiento y asignar responsabilidades legales directas a la junta directiva y representantes legales. En caso de fallas operativas u omisiones involuntarias en el sistema de control, estas personas pueden enfrentar procesos investigativos complejos."
            },
            {
                type: "paragraph",
                text: "Aquí es donde entran las pólizas de Responsabilidad Civil para Directivos y Administradores (conocidas como D&O). Estos seguros respaldan el patrimonio personal de los líderes empresariales frente a reclamaciones, asumiendo gastos de defensa legal especializada siempre que se demuestre que no hubo dolo (intención de cometer el delito)."
            },
            {
                type: "heading",
                text: "Asegura el cumplimiento de tu empresa"
            },
            {
                type: "paragraph",
                text: "En Roesan Seguros entendemos que el riesgo corporativo va más allá de un incendio o un robo. Asesoramos a tu empresa para garantizar que el riesgo legal, operativo y reputacional esté correctamente cubierto con pólizas de primer nivel, permitiéndote a ti y a tus directivos enfocarse en el crecimiento del negocio con total tranquilidad."
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
    }
];
