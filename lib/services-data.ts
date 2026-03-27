import { Heart, Car, Building2, User, Shield, Briefcase, Home, Stethoscope, Truck, Scale, GraduationCap } from "lucide-react";

export interface ServiceData {
    slug: string;
    category: "empresa" | "persona";
    quoteType: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: any;
    color: string;
    bg: string;
    gradient: string;
    image: string;
    features: { title: string; desc: string }[];
    seoKeywords: string[];
    faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
    // --- SEGUROS EMPRESAS ---
    {
        slug: "copropiedades",
        category: "empresa",
        quoteType: "empresarial",
        title: "Seguro de Copropiedades",
        shortDescription: "Protección integral para edificios, conjuntos residenciales y centros comerciales.",
        fullDescription: "El seguro de copropiedades protege las áreas comunes y bienes de tu edificio o conjunto residencial en Colombia. Es una póliza diseñada para cumplir con la ley de propiedad horizontal y garantizar el patrimonio de los copropietarios ante incendios, terremotos, daños por agua y responsabilidad civil.",
        icon: Building2,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        gradient: "from-indigo-600 to-blue-800",
        image: "/images/office-building.png",
        features: [
            { title: "Incendio y Rayo", desc: "Respaldo ante daños directos a la copropiedad." },
            { title: "Terremoto y Eventos de la Naturaleza", desc: "Protección contra sismos, inundaciones y vendavales." },
            { title: "Responsabilidad Civil", desc: "Cubrimiento por daños a terceros en áreas comunes." }
        ],
        seoKeywords: ["seguro de copropiedades bogota", "poliza areas comunes", "ley propiedad horizontal colombia", "seguro para edificios"],
        faqs: [
            { question: "¿Es obligatorio el seguro de copropiedades en Colombia?", answer: "Sí, de acuerdo con la Ley 675 de 2001 de Propiedad Horizontal, es obligatorio asegurar los bienes y áreas comunes contra riesgos de incendio y terremoto." },
            { question: "¿Cubre los bienes privados de mi apartamento?", answer: "No, el seguro de copropiedad ampara únicamente las áreas comunes. Tus bienes privados debes asegurarlos con una póliza de Hogar." }
        ]
    },
    {
        slug: "transporte",
        category: "empresa",
        quoteType: "empresarial",
        title: "Seguro de Transporte de Mercancías",
        shortDescription: "Asegura tu carga y mercancía durante su movilización nacional o internacional.",
        fullDescription: "Minimiza las pérdidas económicas de tu empresa causadas por riesgos de trayecto. Nuestro seguro de transporte cubre tu mercancía movilizada vía terrestre, marítima o aérea desde el punto de origen hasta su destino, ideal para importadores, exportadores y distribuidores en Colombia.",
        icon: Truck,
        color: "text-amber-600",
        bg: "bg-amber-50",
        gradient: "from-amber-500 to-orange-600",
        image: "/images/service-business.png",
        features: [
            { title: "Pérdida Total o Daños", desc: "Cobertura frente a accidentes del vehículo transportador." },
            { title: "Saqueo y Hurto", desc: "Indemnización en caso de robo durante el transporte." },
            { title: "Carga y Descarga", desc: "Amparo durante maniobras de movilización inicial y final." }
        ],
        seoKeywords: ["seguro de transporte de mercancias", "poliza de transporte colombia", "seguridad en carga logistica", "seguro para importadores bogota"],
        faqs: [
            { question: "¿Cubre movilización internacional?", answer: "Sí, dependiendo de la póliza y término de negociación (Incoterms), podemos asegurar transporte marítimo y aéreo internacional." },
            { question: "¿Qué tipo de mercancía se puede asegurar?", answer: "Aseguramos materias primas, productos terminados, maquinaria, y bienes en general, sujeto a la evaluación de riesgos." }
        ]
    },
    {
        slug: "cumplimiento",
        category: "empresa",
        quoteType: "cumplimiento",
        title: "Seguro de Cumplimiento (Pólizas y Fianzas)",
        shortDescription: "Garantiza tus contratos estatales y comerciales rápida y fácilmente.",
        fullDescription: "La Póliza de Cumplimiento es fundamental para empresas contratistas en Colombia. Respaldamos tus obligaciones derivadas de contratos con entidades del Estado o particulares. Cubrimos seriedad de la oferta, buen manejo de anticipo, cumplimiento, calidad del servicio y pago de salarios.",
        icon: Briefcase,
        color: "text-slate-700",
        bg: "bg-slate-50",
        gradient: "from-slate-700 to-slate-900",
        image: "/images/service-business.png",
        features: [
            { title: "Seriedad de Oferta", desc: "Exigible en procesos de licitación pública y contrataciones." },
            { title: "Buen Manejo de Anticipo", desc: "Garantiza la correcta destinación de los fondos entregados." },
            { title: "Pago de Salarios", desc: "Ampara a los empleados del contratista ante incumplimientos laborales." }
        ],
        seoKeywords: ["poliza de cumplimiento colombia", "seguro para licitaciones", "garantia de contratos estado", "cotizar poliza de cumplimiento online"],
        faqs: [
            { question: "¿Cuánto tarda la emisión de una póliza de cumplimiento?", answer: "Con tu cupo preaprobado y la exigencia del contrato, la emisión puede tardar solo un par de horas." },
            { question: "¿Se puede expedir a nombre de consorcios?", answer: "Sí, aseguramos la partición consorciada según el porcentaje de participación." }
        ]
    },
    {
        slug: "responsabilidad-civil-empresarial",
        category: "empresa",
        quoteType: "empresarial",
        title: "Responsabilidad Civil Extracontractual (RCE) para Empresas",
        shortDescription: "Protege el patrimonio de tu empresa frente a demandas y daños a terceros.",
        fullDescription: "Cualquier negocio está expuesto a causar daños o perjuicios a un tercero operativo, ambiental o patronalmente. La póliza de RCE resguarda el patrimonio de tu empresa pagando las indemnizaciones y gastos de defensa jurídica a raíz de demandas por daños o lesiones en el ejercicio de tu labor comercial.",
        icon: Scale,
        color: "text-teal-600",
        bg: "bg-teal-50",
        gradient: "from-teal-600 to-emerald-800",
        image: "/images/office-building.png",
        features: [
            { title: "Predios y Labores", desc: "Daños ocasionados en tu sede a visitantes o clientes." },
            { title: "RCE Patronal", desc: "Indemnizaciones por muerte o lesiones a tus propios empleados." },
            { title: "Gastos de Defensa", desc: "Pago de honorarios de abogados ante procesos judiciales." }
        ],
        seoKeywords: ["responsabilidad civil extracontractual empresas", "poliza rce comercial colombia", "seguro demandas empresas", "rce patronal y predios"],
        faqs: [
            { question: "¿Qué pasa si un cliente se accidenta en mi local?", answer: "Si la empresa resulta responsable, el seguro de RCE Predios y Labores ampara los gastos médicos o indemnizaciones del cliente." },
            { question: "¿Incluye responsabilidad por productos?", answer: "Sí, como cobertura opcional podemos amparar los daños que un producto fabricado o vendido por tu empresa cause a terceros." }
        ]
    },
    {
        slug: "empresariales",
        category: "empresa",
        quoteType: "empresarial",
        title: "Seguro Multirriesgo Empresarial & PYME",
        shortDescription: "Cobertura completa (Todo Riesgo Daño Material) para tus activos comerciales.",
        fullDescription: "La póliza Multirriesgo o Todoriesgo Daño Material está diseñada para proteger tu maquinaria, equipos, adecuaciones, inventarios y edificios ante sucesos imprevistos como incendio, terremoto, explosión, robo y lucro cesante, manteniendo a flote la economía de tu PYME o gran empresa.",
        icon: Building2,
        color: "text-sky-600",
        bg: "bg-sky-50",
        gradient: "from-sky-500 to-blue-600",
        image: "/images/service-business.png",
        features: [
            { title: "Daños Materiales", desc: "Protege frente a incendios, caídas de rayos, temblores e inundaciones." },
            { title: "Lucro Cesante", desc: "Cubre los ingresos que tu empresa deje de percibir por la materialización de un riesgo amparado." },
            { title: "Equipo Eléctrico", desc: "Cobertura por picos de voltaje en tus equipos y computadores." }
        ],
        seoKeywords: ["seguro multirriesgo pyme colombia", "poliza todo riesgo empresa", "aseguradora para pequeñas empresas", "cobertura lucro cesante negocios"],
        faqs: [
            { question: "¿El seguro Pyme es adecuado para cualquier tipo de comercio?", answer: "Sí, estructuramos planes, desde oficinas, comercios, bodegas, hasta fábricas industriales, según el análisis de tu riesgo." },
            { question: "¿Qué bienes no se cubren normalmente?", answer: "Por defecto, no se cubren desgastes naturales, dolo del asegurado, ni multas, pero ciertas maquinarias específicas pueden requerir un anexo en la póliza (rotura de maquinaria)." }
        ]
    },

    // --- SEGUROS PERSONAS ---
    {
        slug: "vida",
        category: "persona",
        quoteType: "vida",
        title: "Seguro de Vida Individual",
        shortDescription: "La mejor herencia: Tranquilidad garantizada para quienes amas.",
        fullDescription: "Tu vida es el motor económico de tu familia. Asegura su futuro económico y tu propia red de soporte frente a eventualidades. El Seguro de Vida no solo te paga a ti por invalidez o enfermedades graves, sino que brinda el dinero acordado a los tuyos si tú ya no estás.",
        icon: Heart,
        color: "text-rose-600",
        bg: "bg-rose-50",
        gradient: "from-rose-500 to-pink-600",
        image: "/images/service-health.png",
        features: [
            { title: "Amparo Básico", desc: "Indemnización económica a los beneficiarios en caso de fallecimiento por cualquier causa." },
            { title: "Enfermedades Graves", desc: "Pago en vida para tratamiento de cáncer, infartos y otras patologías severas." },
            { title: "Incapacidad Total", desc: "Respaldo en caso de accidente o enfermedad que impida tu futura labor." }
        ],
        seoKeywords: ["seguro de vida en colombia", "cotizar poliza de vida", "seguro enfermedades graves integral", "cobertura incapacidad total"],
        faqs: [
            { question: "¿Puedo recibir el dinero yo mismo?", answer: "Sí, coberturas como Enfermedades Graves o Incapacidad Total y Permanente, el beneficiario es el propio asegurado para disponer en vida de los recursos." },
            { question: "¿Debo hacerme exámenes médicos?", answer: "Depende de tu edad, preexistencias y del valor económico que deseas asegurar. Muchas pólizas se aprueban solo con una declaración de salud en el formulario." }
        ]
    },
    {
        slug: "salud",
        category: "persona",
        quoteType: "salud",
        title: "Póliza de Salud y Medicina Prepagada",
        shortDescription: "Garantiza un acceso médico prioritario y exclusivo para ti y los tuyos.",
        fullDescription: "Supera los tiempos de espera del sistema EPS tradicional. Con nuestras soluciones de Medicina Prepagada y Pólizas de Salud obtienes autorizaciones ágiles, acceso directo a especialistas, medicina domiciliaria, y la posibilidad de elegir la clínica de tu preferencia.",
        icon: Stethoscope,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        gradient: "from-emerald-400 to-teal-600",
        image: "/images/service-health.png",
        features: [
            { title: "Red de Especialistas", desc: "Directorio médico amplio con acceso sin necesidad de médico general." },
            { title: "Urgencias y Hospitalización", desc: "Habitación individual y cobertura en clínicas VIP de tu ciudad." },
            { title: "Asistencia Internacional (Asistencia al Viajero)", desc: "Tranquilidad y respaldo en caso de urgencias médicas fuera de Colombia." }
        ],
        seoKeywords: ["poliza de salud sura colombia", "seguro de salud particular", "medicina prepagada economica", "planes complementarios de salud eps"],
        faqs: [
            { question: "¿Cuál es la diferencia entre Póliza de Salud y EPS?", answer: "La EPS es el sistema de seguridad social básico obligatorio. La póliza es un seguro privado voluntario que funciona como complemento 'VIP' que ofrece redes adicionales exclusivas y habitación individual." },
            { question: "¿Qué pasa si tengo una preexistencia?", answer: "Deberá ser declarada al inicio. Dependiendo del diagnóstico y la aseguradora, es normal que se genere una exclusión para ese diagnóstico específico, o una 'extraprima'." }
        ]
    },
    {
        slug: "autos",
        category: "persona",
        quoteType: "auto",
        title: "Seguro Todo Riesgo Vehículos",
        shortDescription: "Viaja seguro cubriendo cualquier daño, choque, robo o asistencia vial 24/7.",
        fullDescription: "Nunca sabes lo que pasará en la vía. El Seguro de Autos Todo Riesgo resguarda el capital que invertiste en tu vehículo y, más importante, asume gastos astronómicos ante choques y demandas de terceros lesionados tras un accidente. Desde daños simples, robos, hasta conductor elegido.",
        icon: Car,
        color: "text-blue-600",
        bg: "bg-blue-50",
        gradient: "from-blue-500 to-cyan-600",
        image: "/images/service-auto.png",
        features: [
            { title: "Cobertura frente a Daños de Terceros (RCE)", desc: "Paga reparaciones, demandas legales e indemnizaciones a terceros heridos." },
            { title: "Pérdida Parcial y Total", desc: "Arreglo o indemnización en caso de hurto total o reparación alta." },
            { title: "Asistencias Especializadas", desc: "Grúa por daños, llaves dentro del auto, pinchazos, conductor elegido, y revisiones preventivas." }
        ],
        seoKeywords: ["seguro todo riesgo para autos", "comprar soat y todoriesgo", "cotizador de seguro automoviles", "aseguradora robo carros", "vehiculos colombia poliza"],
        faqs: [
            { question: "¿El Todo Riesgo me cubre el Soat?", answer: "No, son independientes. El SOAT es obligatorio para circular (daños físicos de personas) y el Todo Riesgo es patrimonial: paga bienes o demandas donde el SOAT no alcanza." },
            { question: "¿Deben revisar mi vehículo (Inspección)?", answer: "Sí, comúnmente, si es un carro usado, las aseguradoras exigen una inspección virtual (fotos) o física en talleres aliados para expedir la póliza." }
        ]
    },
    {
        slug: "responsabilidad-civil-personal",
        category: "persona",
        quoteType: "auto", // Reusing standard generic quote forms
        title: "Responsabilidad Civil Profesional / Médica",
        shortDescription: "Salvaguarda tu patrimonio personal y licencia ante demandas por mala praxis.",
        fullDescription: "Si actúas como médico, odontólogo, abogado o ingeniero asesor, una equivocación u omisión profesional no intencionada puede significar tu ruina por demandas de clientes. Esta póliza asume los millonarios gastos de de abogados (defensa) e indemnizaciones por responsabilidad civil derivada del ejercicio laboral.",
        icon: GraduationCap,
        color: "text-purple-600",
        bg: "bg-purple-50",
        gradient: "from-purple-600 to-indigo-700",
        image: "/images/service-health.png",
        features: [
            { title: "Amparo Patrimonial", desc: "Protege el patrimonio económico de tu familia para pagar sentencias de jueces." },
            { title: "Defensa Jurídica", desc: "Financiación de peritos, investigadores, abogados experimentados durante el proceso de demanda." },
            { title: "Conciliación Financiera", desc: "Ampara incluso acuerdos en centros conciliatorios para evitar largos pleitos." }
        ],
        seoKeywords: ["seguro mala praxis medica", "responsabilidad civil doctores colombia", "seguro abogados profesionales", "rc profesional ingenieros"],
        faqs: [
            { question: "¿Aplica si el paciente firma consentimiento informado?", answer: "Sí. El consentimiento disminuye la probabilidad de éxito de la demanda del paciente, pero aun así requerirás abogados (financiados por la póliza) para demostrarlo." },
            { question: "¿Cubre actos intencionales (dolo)?", answer: "No, en Colombia y a nivel mundial los seguros de responsabilidad no amparan delitos intencionales, sino negligencia, errores u omisiones culposas del profesional." }
        ]
    },
    {
        slug: "hogar",
        category: "persona",
        quoteType: "auto", // Can reuse general pipeline later 
        title: "Seguro de Hogar y Bienes Personales",
        shortDescription: "Cuida tu casa y tus objetos valiosos ante incendios, corto circuitos, goteras y hurtos.",
        fullDescription: "Tu casa (propia o alquilada) puede ser asegurada junto con todos sus muebles y electrodomésticos adentro (contenidos). Sea por temblores, asonadas, o robos desde la fachada, la póliza de hogar cuida lo tuyo e incluye servicios gratuitos del día a día como plomería, electricista o cerrajero urgentes.",
        icon: Home,
        color: "text-fuchsia-600",
        bg: "bg-fuchsia-50",
        gradient: "from-cyan-500 to-emerald-500",
        image: "/images/service-business.png",
        features: [
            { title: "Robo e Inseguridad", desc: "Reembolso por sustracción de muebles, computadores, joyas, o bicicletas del interior de la casa." },
            { title: "Desastres Medioambientales", desc: "Incendios por cortocircuito, explosiones de gas, y sismos severos." },
            { title: "Asistencia y Daños a Terceros", desc: "Servicio tipo 'plomero' si se rompe un tubo, además de cubrir el daño a los vecinos o a sus techos." }
        ],
        seoKeywords: ["seguro de hogar bogota", "asegurar apartamento contra terremoto", "seguro arrendamientos", "proteccion robo vivienda poliza"],
        faqs: [
            { question: "¿Si mi casa es alquilada, puedo comprar el seguro?", answer: "Claro que sí. Puedes asegurar únicamente los 'Contenidos' (muebles y electrodomésticos) que te pertenecen, dejando de lado la propiedad física (inmueble)." },
            { question: "¿Qué hace la asistencia de hogar?", answer: "Si pierdes las llaves o un tubo explota, llamas a la asistencia y te envían rápidamente hasta tu puerta y sin costo, al técnico, asumiendo su arreglo." }
        ]
    },
    {
        slug: "exequial",
        category: "persona",
        quoteType: "auto",
        title: "Seguro Exequial",
        shortDescription: "Proteccion economica para cubrir gastos y servicios funerarios en momentos dificiles.",
        fullDescription: "El seguro exequial cubre el traslado del cuerpo, sala de velacion, cofre funerario, servicios religiosos y tramites legales. En momentos dificiles, te liberamos de la carga economica.",
        icon: Shield,
        color: "text-slate-600",
        bg: "bg-slate-100",
        gradient: "from-slate-600 to-slate-800",
        image: "/images/service-health.png",
        features: [
            { title: "Traslado del Cuerpo", desc: "Servicio de traslado hasta el lugar de velacion o inhumacion." },
            { title: "Sala y Cofre Funerario", desc: "Uso de sala de velacion y provision del cofre funerario." },
            { title: "Tramites Legales", desc: "Gestion de documentos legales y transporte de familiares directos." }
        ],
        seoKeywords: ["seguro exequial colombia", "poliza funeraria bogota", "cobertura gastos funerarios"],
        faqs: [
            { question: "Cubre a toda la familia?", answer: "Dependiendo del plan puede cubrir titular, conyuge, hijos y padres." },
            { question: "Hay periodo de carencia?", answer: "Algunos planes tienen espera de 30 dias para fallecimientos por enfermedad, no para accidentes." }
        ]
    },
    {
        slug: "mascotas",
        category: "persona",
        quoteType: "auto",
        title: "Seguro de Mascotas",
        shortDescription: "Cubre los danos que tu mascota cause a terceros con responsabilidad civil.",
        fullDescription: "El seguro de mascotas cubre la responsabilidad civil frente a terceros: si tu perro muerde a alguien o causa danos en propiedad ajena, la poliza responde economicamente.",
        icon: Heart,
        color: "text-orange-500",
        bg: "bg-orange-50",
        gradient: "from-orange-400 to-amber-500",
        image: "/images/service-health.png",
        features: [
            { title: "Responsabilidad Civil", desc: "Indemnizacion si tu mascota lesiona a una persona o dana propiedad de terceros." },
            { title: "Gastos Medicos a Terceros", desc: "Cobertura de gastos medicos causados por tu mascota." },
            { title: "Defensa Juridica", desc: "Respaldo legal ante demandas relacionadas con tu mascota." }
        ],
        seoKeywords: ["seguro de mascotas colombia", "responsabilidad civil perros", "poliza mascotas bogota"],
        faqs: [
            { question: "Solo cubre perros?", answer: "La cobertura principal aplica para perros. Consulta condiciones para otras mascotas." },
            { question: "Que pasa si mi perro muerde a alguien?", answer: "La poliza cubre gastos medicos y posibles demandas del afectado." }
        ]
    },
    {
        slug: "educativo",
        category: "persona",
        quoteType: "vida",
        title: "Seguro Educativo",
        shortDescription: "Garantiza la educacion futura de tus hijos con ahorro programado y proteccion.",
        fullDescription: "El seguro educativo combina ahorro programado con cobertura de vida para que tus hijos accedan a la educacion universitaria sin importar lo que ocurra.",
        icon: GraduationCap,
        color: "text-indigo-500",
        bg: "bg-indigo-50",
        gradient: "from-indigo-500 to-purple-600",
        image: "/images/service-health.png",
        features: [
            { title: "Ahorro Programado", desc: "Aportes periodicos que se acumulan para el futuro educativo." },
            { title: "Proteccion por Fallecimiento", desc: "En caso de muerte del asegurado, la aseguradora sigue aportando al fondo." },
            { title: "Pago de Universidad", desc: "El fondo acumulado financia la matricula y costos de educacion superior." }
        ],
        seoKeywords: ["seguro educativo colombia", "ahorro para universidad hijos", "poliza educativa bogota"],
        faqs: [
            { question: "Desde que edad puedo contratar?", answer: "Desde recien nacido hasta los 12 anos del nino, ajustando el tiempo de ahorro." },
            { question: "Genera rentabilidad?", answer: "Si, los fondos acumulados generan rentabilidad segun la aseguradora seleccionada." }
        ]
    },
    {
        slug: "vida-deudor",
        category: "persona",
        quoteType: "vida",
        title: "Seguro Vida Deudor",
        shortDescription: "Garantiza el pago de tu credito hipotecario en caso de fallecimiento o incapacidad.",
        fullDescription: "El seguro vida deudor protege a tu familia de heredar deudas. Si ocurre un fallecimiento o incapacidad total y permanente, la poliza cancela el saldo de la deuda ante el banco.",
        icon: Home,
        color: "text-teal-600",
        bg: "bg-teal-50",
        gradient: "from-teal-500 to-cyan-600",
        image: "/images/service-business.png",
        features: [
            { title: "Cancelacion de Deuda", desc: "La aseguradora paga el saldo pendiente del credito en caso de fallecimiento." },
            { title: "Incapacidad Total", desc: "Proteccion si una incapacidad te impide trabajar y cumplir la obligacion." },
            { title: "Tranquilidad Familiar", desc: "Tu familia no heredara deudas hipotecarias ni presiones financieras." }
        ],
        seoKeywords: ["seguro vida deudor hipotecario", "poliza deudor colombia", "seguro credito hipotecario"],
        faqs: [
            { question: "Es obligatorio para un credito?", answer: "Muchos bancos en Colombia exigen el seguro vida deudor para aprobar creditos hipotecarios." },
            { question: "Puedo comprarlo fuera del banco?", answer: "Si, y generalmente es mas economico a traves de intermediarios como Roesan." }
        ]
    },
    {
        slug: "colectivos",
        category: "empresa",
        quoteType: "empresarial",
        title: "Seguros Colectivos de Empleados",
        shortDescription: "Proteccion grupal para empleados: vida, salud y accidentes personales.",
        fullDescription: "Los seguros colectivos permiten proteger grupos de empleados con beneficios en vida, salud y accidentes personales a precios mas competitivos que los individuales.",
        icon: User,
        color: "text-violet-600",
        bg: "bg-violet-50",
        gradient: "from-violet-600 to-purple-700",
        image: "/images/service-business.png",
        features: [
            { title: "Vida Grupo", desc: "Respaldo economico para familias de colaboradores en caso de fallecimiento." },
            { title: "Salud Colectiva", desc: "Acceso a planes de salud complementarios para el equipo." },
            { title: "Accidentes Personales", desc: "Cobertura ante accidentes dentro y fuera del trabajo." }
        ],
        seoKeywords: ["seguros colectivos empresas colombia", "poliza vida grupo empleados", "beneficios laborales seguros bogota"],
        faqs: [
            { question: "Cuantos empleados minimo?", answer: "Generalmente desde 5 personas ya es posible acceder a tarifas de grupo." },
            { question: "Reemplaza la ARL?", answer: "No, la ARL es obligatoria. Los seguros colectivos son voluntarios y complementarios." }
        ]
    },
    {
        slug: "arl-vida-grupo",
        category: "empresa",
        quoteType: "empresarial",
        title: "ARL y Vida Grupo Empresarial",
        shortDescription: "Cumple la normatividad laboral colombiana y protege integralmente a tu equipo.",
        fullDescription: "La ARL (Administradora de Riesgos Laborales) es cobertura obligatoria en Colombia que protege ante accidentes de trabajo y enfermedades laborales. Complementada con Vida Grupo da respaldo economico a las familias.",
        icon: Briefcase,
        color: "text-emerald-700",
        bg: "bg-emerald-50",
        gradient: "from-emerald-600 to-teal-700",
        image: "/images/service-business.png",
        features: [
            { title: "ARL Obligatoria", desc: "Cobertura legal ante accidentes de trabajo y enfermedades laborales en Colombia." },
            { title: "Vida Grupo", desc: "Seguro adicional que amplia la proteccion economica de las familias." },
            { title: "Cumplimiento Normativo", desc: "Garantiza el cumplimiento de la legislacion laboral colombiana." }
        ],
        seoKeywords: ["arl colombia empresas", "vida grupo empleados bogota", "seguro obligatorio empleados colombia"],
        faqs: [
            { question: "La ARL la paga el empleador?", answer: "En Colombia si, la ARL la paga el empleador segun el nivel de riesgo de las actividades." },
            { question: "Podemos elegir la ARL?", answer: "Si, como empleador puedes seleccionar entre las ARL habilitadas por la Superintendencia Financiera." }
        ]
    }

];
