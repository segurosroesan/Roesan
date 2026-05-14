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
        coverImage: "/images/blog/cover-auto-bogota.png",
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
        coverImage: "/images/card-salud-co.png",
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
        coverImage: "/images/card-seguro-vida-bogota.png",
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
    {
        slug: "seguro-vida-deudor-hipotecario-ahorro",
        title: "¿Sabías que no estás obligado a mantener el seguro que te ofrece el banco con tu crédito hipotecario?",
        excerpt: "Muchos colombianos pagan de más todos los meses sin saber que pueden mantener la misma cobertura, optimizando costos y recibiendo una asesoría más personalizada.",
        date: "2026-05-08",
        readTime: "6 min",
        category: "Educación Financiera",
        categoryColor: "bg-blue-100 text-blue-700",
        coverImage: "/images/blog/apartamentos-hipotecario.png",
        content: [
            {
                type: "intro",
                text: "💡 ¿Sabías que no estás obligado a mantener el seguro que te ofrece el banco con tu crédito hipotecario? Muchas personas pagan de más todos los meses sin saber que pueden mantener la misma cobertura, optimizando costos y recibiendo una asesoría más personalizada. Aquí te contamos cómo puedes ahorrar dinero hoy mismo."
            },
            {
                type: "heading",
                text: "El derecho a elegir: El endoso de seguros"
            },
            {
                type: "paragraph",
                text: "Cuando contratas un crédito de vivienda, el banco te exige obligatoriamente dos seguros: Vida Deudor (que cubre el saldo de la deuda si falleces) e Incendio y Terremoto (que protege el inmueble). Lo que pocos saben es que tienes el derecho legal de presentar una póliza externa de una aseguradora de tu elección. A esto se le conoce como 'endoso'."
            },
            {
                type: "heading",
                text: "¿Por qué te conviene cambiar el seguro del banco?"
            },
            {
                type: "paragraph",
                text: "Tomar el seguro por fuera del banco ofrece ventajas competitivas que impactan directamente en tu bolsillo y en tu seguridad:"
            },
            {
                type: "list",
                items: [
                    "Ahorro económico: Las pólizas colectivas de los bancos suelen tener primas más altas. Al cotizar de forma individual con Roesan, puedes reducir el costo mensual de tu seguro significativamente.",
                    "Coberturas a tu medida: El seguro del banco suele ser estándar. Con una póliza propia, puedes incluir amparos adicionales que protejan mejor a tu familia.",
                    "Asesoría personalizada: Ante un siniestro, tendrás a tu agencia Roesan de tu lado para gestionar todo el proceso, en lugar de lidiar con los trámites impersonales de un banco."
                ]
            },
            {
                type: "heading",
                text: "La base legal: Ley 1328 de 2009"
            },
            {
                type: "paragraph",
                text: "En Colombia, la Ley de Protección al Consumidor Financiero prohíbe las 'ventas atadas'. El banco NO puede obligarte a tomar su seguro ni penalizarte por presentar uno externo. Solo debes asegurarte de que la póliza que presentes cumpla con los requisitos mínimos exigidos por la entidad bancaria."
            },
            {
                type: "heading",
                text: "Pasos para realizar el endoso con Roesan"
            },
            {
                type: "list",
                items: [
                    "Solicita a tu banco el certificado de condiciones mínimas de la póliza de vida y hogar.",
                    "Envíanos esa información para cotizar con las mejores aseguradoras del país (Sura, Bolívar, Allianz, etc.).",
                    "Emitimos la póliza con los beneficiarios y sumas aseguradas correctas.",
                    "Presentamos la documentación al banco y ¡listo! Tu cuota mensual bajará automáticamente."
                ]
            },
            {
                type: "paragraph",
                text: "No dejes que tu dinero se escape mes a mes. En Roesan Seguros te ayudamos a optimizar tus finanzas protegiendo lo que más quieres."
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
        title: "¿Qué es el SARLAFT y por qué es vital para Empresas y Personas mantenerlo actualizado?",
        excerpt: "El SARLAFT no es solo un trámite; es un requisito ineludible tanto para negocios como para individuos al interactuar con bancos y aseguradoras. Conoce su impacto legal.",
        date: "2026-05-14",
        readTime: "6 min",
        category: "Cumplimiento",
        categoryColor: "bg-blue-100 text-blue-700",
        coverImage: "/images/card-cumplimiento-business.png",
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
        slug: "seguros-salud-livianos-eps",
        title: "Seguros de Salud Livianos: La alternativa inteligente para mejorar tu EPS sin gastar una fortuna",
        excerpt: "Si sientes que las citas en tu EPS tardan demasiado pero una medicina prepagada completa sale de tu presupuesto, los 'seguros livianos' como Salud para Todos (Bolívar) son la solución ideal.",
        date: "2026-05-14",
        readTime: "5 min",
        category: "Salud y Vida",
        categoryColor: "bg-teal-100 text-teal-700",
        coverImage: "/images/card-salud-liviano.png",
        content: [
            {
                type: "intro",
                text: "El sistema de salud en Colombia a través de las EPS cubre intervenciones quirúrgicas mayores y hospitalizaciones de alto costo, pero el verdadero dolor de cabeza para la mayoría de los usuarios está en el día a día: conseguir una cita rápida con un especialista o autorizar un examen diagnóstico sencillo. Muchos creen que la única salida es pagar una costosa póliza de salud integral o medicina prepagada, pero existe una tercera vía muy eficiente: los seguros de salud livianos."
            },
            {
                type: "heading",
                text: "¿Qué es un seguro de salud liviano?"
            },
            {
                type: "paragraph",
                text: "Un seguro liviano (o póliza ambulatoria) es un producto diseñado para complementar a tu EPS cubriendo exactamente donde esta falla: la oportunidad y rapidez en la atención básica. En lugar de pagar por coberturas hospitalarias complejas (que tu EPS ya asume por ley), pagas un valor mensual muy asequible enfocado en brindarte acceso directo y sin filas a consultas médicas, especialistas y exámenes de laboratorio."
            },
            {
                type: "heading",
                text: "Opciones destacadas en el mercado colombiano"
            },
            {
                type: "paragraph",
                text: "Las grandes aseguradoras han entendido esta necesidad y han lanzado productos excelentes. Dos ejemplos muy populares son:"
            },
            {
                type: "list",
                items: [
                    "Salud para Todos (Seguros Bolívar): Es un plan económico que te permite agendar citas con medicina general y un amplio directorio de especialistas sin necesidad de remisión previa. Incluye terapias, ayudas diagnósticas simples y orientación médica telefónica 24/7.",
                    "Planes Modulares y Salud para Dos (SURA): SURA ofrece alternativas flexibles que puedes compartir en pareja o familia. Te brindan acceso preferencial a sus centros médicos, especialistas directos y rapidez en laboratorios, todo por una fracción del costo de un plan tradicional."
                ]
            },
            {
                type: "heading",
                text: "Ventajas frente al modelo tradicional"
            },
            {
                type: "list",
                items: [
                    "Acceso Directo: Te saltas el paso del médico general. Si te duele la rodilla, pides cita directamente con el ortopedista.",
                    "Economía: Las primas (costo mensual) son sustancialmente más bajas que las de una póliza de salud completa, haciéndolas accesibles para la clase media y trabajadores independientes.",
                    "Rapidez: Citas en cuestión de días y no de meses, en consultorios privados o centros médicos VIP de las aseguradoras.",
                    "Sin copagos excesivos: Tienen estructuras de copagos muy claras y en muchos casos, exenciones para ciertos servicios básicos."
                ]
            },
            {
                type: "heading",
                text: "Una decisión estratégica"
            },
            {
                type: "paragraph",
                text: "La estrategia ideal para proteger tu salud financiera y física no siempre es comprar el seguro más caro. Mantener tu EPS para urgencias vitales, hospitalizaciones y cirugías mayores, combinada con un seguro liviano para tu atención ambulatoria, te brinda lo mejor de ambos mundos."
            },
            {
                type: "paragraph",
                text: "En Roesan Seguros analizamos tu perfil, tu presupuesto y las clínicas de tu preferencia para recomendarte el plan liviano (Bolívar, SURA, entre otros) que mejor complemente tus necesidades de salud diarias."
            },
            { type: "cta", text: "" }
        ]
    }
];
