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
        image: "/images/card-copropiedades.png",
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
        title: "Seguro de Transporte",
        shortDescription: "Protege las mercancías durante su traslado, ya sea a nivel nacional o internacional.",
        fullDescription: "Protege las mercancías y el inventario de tu negocio durante su traslado, ya sea a nivel nacional o internacional. Es esencial para empresas que movilizan productos y quieren asegurar su cadena logística eliminando los riesgos del trayecto.",
        icon: Truck,
        color: "text-amber-600",
        bg: "bg-amber-50",
        gradient: "from-amber-500 to-orange-600",
        image: "/images/Seguro_transporte.jpeg",
        features: [
            { title: "Robo y Saqueo", desc: "Cubrimiento directo en caso de que la mercancía sea hurtada durante su transporte." },
            { title: "Daños en Trayecto", desc: "Respaldo ante afectaciones por accidentes viales o mala manipulación." },
            { title: "Pérdidas Totales o Parciales", desc: "Indemnización conforme al valor de la carga afectada o destruida." }
        ],
        seoKeywords: ["seguro de transporte de mercancias", "poliza de transporte colombia", "seguridad en carga logistica", "seguro para logistica"],
        faqs: [
            { question: "¿Cubre movilización internacional marítima y aérea?", answer: "Sí, protegiendo tus productos en todo el ciclo logístico ya sea para procesos de importación o exportación." },
            { question: "¿Qué tipo de mercancía asegura?", answer: "Aseguramos una gran variedad de cargas comerciales, desde materias primas hasta equipo tecnológico terminado." }
        ]
    },
    {
        slug: "cumplimiento",
        category: "empresa",
        quoteType: "cumplimiento",
        title: "Seguro de Cumplimiento",
        shortDescription: "Garantiza el cumplimiento de obligaciones contractuales frente a terceros o entidades.",
        fullDescription: "Esta póliza asegura y garantiza el cumplimiento de obligaciones contractuales que tu empresa adquiere frente a terceros o entidades. Brinda confianza a los clientes y un sólido respaldo financiero en contratos importantes.",
        icon: Briefcase,
        color: "text-slate-700",
        bg: "bg-slate-50",
        gradient: "from-slate-700 to-slate-900",
        image: "/images/card-cumplimiento-contrato-co.png",
        features: [
            { title: "Contratos Estatales y Privados", desc: "Requisito para licitaciones públicas y convenios con empresas privadas." },
            { title: "Cobertura de Anticipos", desc: "Ampara el buen manejo y la destinación de dineros entregados por adelantado." },
            { title: "Calidad y Estabilidad", desc: "Garantiza la calidad de los materiales y estabilidad de la obra/producto." },
            { title: "Cumplimiento de Entregas", desc: "Respaldo ante demoras u omisiones en el plazo estipulado del contrato." }
        ],
        seoKeywords: ["poliza de cumplimiento colombia", "seguro para licitaciones", "garantia de contratos estado", "cotizar poliza de cumplimiento online"],
        faqs: [
            { question: "¿Cuánto tarda la emisión de una póliza de cumplimiento?", answer: "Con la documentación en regla de tu empresa, el proceso de cupo y emisión se gestiona de manera muy ágil." },
            { question: "¿Respaldan contratos frente a entidades estatales?", answer: "Sí, emitimos las garantías exigidas por el Estado bajo todas las modalidades de contratación vigentes." }
        ]
    },
    {
        slug: "responsabilidad-civil-empresarial",
        category: "empresa",
        quoteType: "empresarial",
        title: "Responsabilidad Civil",
        shortDescription: "Protege a la empresa frente a reclamaciones de terceros por daños personales, materiales o económicos.",
        fullDescription: "Protege a la empresa frente a reclamaciones de terceros por daños personales, materiales o perjuicios económicos ocasionados en el desarrollo de su actividad. Es clave para cualquier empresa que interactúe con terceros, ya que un solo evento puede generar pérdidas millonarias.",
        icon: Scale,
        color: "text-teal-600",
        bg: "bg-teal-50",
        gradient: "from-teal-600 to-emerald-800",
        image: "/images/card-rc-bogota.png",
        features: [
            { title: "Daños a Clientes o Visitantes", desc: "Cubre los daños generados a terceros dentro del desarrollo de la operación." },
            { title: "Perjuicios Causados por Empleados", desc: "Amparo civil por daños que tus trabajadores ocasionen trabajando." },
            { title: "Gastos Legales y Jurídicos", desc: "Pago de defensa jurídica y honorarios requeridos durante una demanda." }
        ],
        seoKeywords: ["responsabilidad civil extracontractual empresas", "poliza rce comercial colombia", "seguro demandas empresas", "rce patronal y predios"],
        faqs: [
            { question: "¿Qué pasa si un cliente se accidenta en mi local?", answer: "Si la empresa resulta responsable, el seguro ampara los gastos médicos o las reclamaciones patrimoniales del afectado." },
            { question: "¿Por qué es clave esta póliza?", answer: "Un solo evento de afectación severa a un tercero puede significar una indemnización millonaria que ponga en riesgo la supervivencia de la empresa." }
        ]
    },
    {
        slug: "empresariales",
        category: "empresa",
        quoteType: "empresarial",
        title: "Todo Riesgo: Daños Materiales",
        shortDescription: "Ampara los bienes de la empresa frente a eventos inesperados que puedan afectar su operación.",
        fullDescription: "Ampara los bienes e instalaciones de la empresa frente a eventos inesperados de gran magnitud. Garantiza la continuidad del negocio ante imprevistos naturales, accidentales o malintencionados que puedan detener la operación mercantil.",
        icon: Building2,
        color: "text-sky-600",
        bg: "bg-sky-50",
        gradient: "from-sky-500 to-blue-600",
        image: "/images/card-todo-riesgo-globo.png",
        features: [
            { title: "Exposición a Desastres", desc: "Respalda frente a afectaciones por Incendio, explosión o terremoto." },
            { title: "Equipos Tecnológicos", desc: "Cobertura ante daños eléctricos de aparatos corporativos." },
            { title: "Robo y Vandalismo", desc: "Protección integral frente a asaltos, motines o acciones malintencionadas." },
            { title: "Maquinaria e Instalaciones", desc: "Amparo a la maquinaria y a la infraestructura ante eventos súbitos." }
        ],
        seoKeywords: ["seguro todo riesgo empresa colombia", "poliza todoriesgo pyme", "seguro bodegas colombia", "seguro daño material empresas"],
        faqs: [
            { question: "¿Este seguro protege a la industria pesada?", answer: "Sí, podemos estructurar planes para bodegas, grandes superficies y líneas industriales especializadas." },
            { question: "¿Qué pasa si mi negocio debe cerrar por los daños?", answer: "Dependiendo del esquema, cubrimos no solo las reparaciones físicas, sino que podemos proteger frente al 'lucro cesante'." }
        ]
    },

    // --- SEGUROS PERSONAS ---
    {
        slug: "vida",
        category: "persona",
        quoteType: "vida",
        title: "Seguro de Vida",
        shortDescription: "Protección económica a su familia en caso de incapacidad o fallecimiento.",
        fullDescription: "Tu vida es el motor económico de tu hogar. El Seguro de Vida garantiza que tus seres queridos mantengan su nivel de vida y puedan cumplir sus metas (como pagar el estudio o una hipoteca) en caso de que llegues a faltar. Más importante aún, es un seguro que te protege a ti en vida: entrega capital de respaldo de manera anticipada si sufres una incapacidad que te impida volver a trabajar o si eres diagnosticado con una enfermedad grave o crítica, brindándote tranquilidad financiera cuando más la necesitas.",
        icon: Heart,
        color: "text-rose-600",
        bg: "bg-rose-50",
        gradient: "from-rose-500 to-pink-600",
        image: "/images/card-seguro-vida-bogota.png",
        features: [
            { title: "Fallecimiento por cualquier motivo", desc: "Entrega del valor asegurado a los beneficiarios designados en caso de muerte por enfermedad o accidente." },
            { title: "Incapacidad total o permanente", desc: "Pago del 100% del capital asegurado si un accidente o enfermedad te impide volver a ejercer tu ocupación." },
            { title: "Anticipos por enfermedades críticas", desc: "Un adelanto del capital asegurado para cubrir tratamientos urgentes o costosos." },
            { title: "Renta por incapacidad", desc: "Ingreso mensual para solventar tus gastos durante una recuperación prolongada." },
            { title: "Enfermedades graves", desc: "Indemnización en vida al ser diagnosticado con enfermedades complejas (como cáncer, infartos o afecciones neurológicas)." }
        ],
        seoKeywords: [
            "seguro de vida en colombia",
            "poliza de vida",
            "cotizar poliza de vida", 
            "seguro enfermedades graves integral", 
            "cobertura incapacidad total",
            "seguro de vida familiar",
            "seguro de fallecimiento"
        ],
        faqs: [
            { question: "¿Puedo cobrar el seguro de vida estando vivo?", answer: "¡Por supuesto! Coberturas como Incapacidad Total y Permanente y Enfermedades Graves e indemnizaciones por rentas se te pagan directamente a ti para que tengas libertad financiera durante un tratamiento o recuperación." },
            { question: "¿Debo hacerme exámenes médicos para que me lo aprueben?", answer: "Todo depende de tu edad, tus antecedentes médicos (preexistencias) y el monto asegurado que solicites. La mayoría de los pólizas tradicionales solo exigen diligenciar una declaración de salud escrita que se firma de buena fe." },
            { question: "¿A quién puedo nombrar como beneficiario?", answer: "Tienes total libertad. Puedes nombrar a tu cónyuge, hijos, padres, hermanos o cualquier persona e incluso distribuir el porcentaje que cada uno recibirá libremente. Además, puedes modificar a los beneficiarios en un futuro cuando desees." },
            { question: "¿El seguro de vida es embargable?", answer: "No. En Colombia el dinero que reciben los beneficiarios de un seguro de vida es de uso libre, no forma parte de la masa sucesoral (herencia) y, por lo tanto, es inembargable y no entra en juicios de sucesión, asegurando que llegue directo y rápido a tus seres queridos." }
        ]
    },
    {
        slug: "salud",
        category: "persona",
        quoteType: "salud",
        title: "Póliza de Salud y Medicina Prepagada",
        shortDescription: "Acceso a atención médica de alta calidad, prioritaria y exclusiva para ti y tu familia.",
        fullDescription: "Supera los largos tiempos de espera del sistema tradicional (EPS). Una Póliza de Salud o un plan de Medicina Prepagada te brinda acceso a la mejor red hospitalaria y clínica de Colombia y el exterior. Contarás con autorizaciones médicas ágiles, acceso directo a médicos especialistas sin pasar por consulta general, y comodidades como habitación individual, atención médica domiciliaria y cobertura en el extranjero, garantizando tu bienestar y el de tu familia en cualquier eventualidad médica.",
        icon: Stethoscope,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        gradient: "from-emerald-400 to-teal-600",
        image: "/images/card-salud-co.png",
        features: [
            { title: "Atención médica y exámenes", desc: "Acceso directo a consultas médicas, laboratorio clínico y medios de diagnóstico de alta tecnología." },
            { title: "Hospitalización y cirugías", desc: "Cobertura total en red de clínicas premium, incluyendo habitación hospitalaria individual y pago de honorarios." },
            { title: "Urgencias y especialista directos", desc: "Atención prioritaria y agendamiento ágil con especialistas sin remisión previa de médico general." },
            { title: "Medicamentos, maternidad y terapias", desc: "Respaldo en medicamentos especializados, cobertura integral del embarazo, parto y sesiones de rehabilitación." },
            { title: "Cobertura internacional", desc: "Tranquilidad fuera del país con asistencia médica al viajero frente a urgencias o enfermedades repentinas." }
        ],
        seoKeywords: [
            "poliza de salud sura colombia", 
            "seguro de salud particular", 
            "medicina prepagada economica", 
            "planes complementarios de salud eps",
            "comprar seguro de salud",
            "cotizar medicina prepagada",
            "cobertura internacional salud"
        ],
        faqs: [
            { question: "¿Cuál es la diferencia entre Póliza de Salud y EPS?", answer: "La EPS es el sistema de seguridad social básico que atiende en redes generales. La póliza de salud es un seguro privado voluntario ('VIP') que te ofrece acceso a clínicas de alto nivel, citas mucho más rápido y comodidades como habitación individual en caso de hospitalización." },
            { question: "¿Qué sucede si tengo una preexistencia médica?", answer: "Debes declararla al momento de afiliarte. Dependiendo de la política de la aseguradora elegida, el diagnóstico previo puede generar una exclusión, o puede ampararse mediante el pago de un valor adicional (extraprima)." },
            { question: "¿Puedo asegurar solo a mis hijos o debo incluir a todo el grupo familiar?", answer: "Existen planes que permiten afiliar de manera individual a un solo miembro de la familia, pero en muchos casos incluir al grupo familiar completo otorga descuentos importantes en la tarifa final." },
            { question: "¿Existen copagos o cuotas moderadoras?", answer: "Sí, dependiendo del diseño del plan. Muchos establecen un bono o bono (copago) de valor fijo para las citas y exámenes de rutina, mientras que para urgencias severas, hospitalizaciones y cirugías complejas el cubrimiento suele ser del 100% sin cobro." }
        ]
    },
    {
        slug: "autos",
        category: "persona",
        quoteType: "auto",
        title: "Seguro Todo Riesgo para Autos",
        shortDescription: "Protección integral para su vehículo y su responsabilidad frente a terceros, cubriendo daños, hurto y asistencias premium.",
        fullDescription: "Un Seguro Todo Riesgo para Autos es la única manera de proteger realmente tu inversión vehicular y tu patrimonio ante imprevistos en la vía. Esta póliza va mucho más allá del SOAT, asumiendo los elevados costos de reparación por daños mecánicos accidentales o totales, gastos legales en demandas por responsabilidad civil extracontractual a terceros, y cobertura económica por hurto. Al cotizar con nosotros, comparamos las mejores aseguradoras de Colombia para ofrecerte un seguro a tu medida con todas las asistencias 24/7.",
        icon: Car,
        color: "text-blue-600",
        bg: "bg-blue-50",
        gradient: "from-blue-500 to-cyan-600",
        image: "/images/card-tesla-todo-riesgo-bogota.png",
        features: [
            { title: "Daños a su vehículo", desc: "Cobertura para reparar arreglos y abolladuras tras un accidente o choque." },
            { title: "Responsabilidad civil a terceros", desc: "Protección integral frente a demandas y daños ocasionados a bienes o personas." },
            { title: "Pérdida total por hurto", desc: "Indemnización conforme al valor comercial de su auto en caso de ser robado." },
            { title: "Pérdida total por daños", desc: "Indemnización económica si su vehículo sufre daños severos irreparables." },
            { title: "Asistencia en carretera", desc: "Servicio de grúa, carro taller, cerrajería y paso de corriente en cualquier emergencia." },
            { title: "Vehículo de reemplazo", desc: "Carro sustituto durante los días en que su auto esté en el taller autorizado." },
            { title: "Conductor elegido", desc: "Servicio para regresar a casa de forma segura cuando usted no pueda manejar." },
            { title: "Gastos médicos ocupantes", desc: "Protección en salud y atención clínica para los pasajeros de su vehículo en caso de accidente." }
        ],
        seoKeywords: [
            "seguro todo riesgo para autos", 
            "seguro de vehiculos colombia",
            "comprar soat y todoriesgo", 
            "cotizador de seguro automoviles", 
            "aseguradora robo carros", 
            "vehiculos colombia poliza",
            "seguro de auto",
            "seguro contra todo riesgo carro"
        ],
        faqs: [
            { question: "¿Cuál es la diferencia entre el Seguro Todo Riesgo y el SOAT?", answer: "El SOAT es un seguro obligatorio por ley que cubre únicamente atención médica inicial de víctimas en un accidente. El Seguro Todo Riesgo es voluntario y protege tu bolsillo al cubrir los daños a tu carro, reposición en caso de robo, y pagar las demandas de terceros si chocas a alguien." },
            { question: "¿Deben inspeccionar mi carro antes de asegurarlo?", answer: "Sí. Para vehículos usados, las aseguradoras exigen una inspección preventiva, la cual hoy en día puede realizarse de forma 100% digital a través de fotos desde tu celular, o acudiendo a un centro de diagnóstico certificado." },
            { question: "¿Me prestan otro carro si el mío se accidenta?", answer: "¡Sí! La mayoría de los planes Todo Riesgo que asesoramos incluyen la cobertura de Vehículo de Reemplazo (Carro Sustituto) hasta por 15 o 30 días mientras reparan tu auto o te indemnizan." },
            { question: "¿Se cubre el robo de accesorios (espejos, llantas)?", answer: "Depende de la configuración de la póliza. Muchos planes incluyen auxilio de pérdida de llaves y reposición de espejos o llantas por hurto de partes, pero es importante declararlo al momento de la cotización." }
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
        image: "/images/card-rc-bogota.png",
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
        quoteType: "auto",
        title: "Seguro de Hogar",
        shortDescription: "Protege tu vivienda y tus bienes más preciados frente a diversos riesgos cotidianos y desastres.",
        fullDescription: "Tu casa es el refugio de tu familia y seguramente uno de tus mayores esfuerzos económicos. Ya seas propietario o arrendatario, el Seguro de Hogar está diseñado para brindarte un blindaje total tanto para la estructura física del inmueble (paredes, techos) como para tus contenidos (muebles, electrodomésticos, ropa). Te protegemos ante desastres naturales, accidentes caseros y robos, además de brindarte Asistencia en el Hogar 24/7 para emergencias de plomería, electricidad y cerrajería.",
        icon: Home,
        color: "text-fuchsia-600",
        bg: "bg-fuchsia-50",
        gradient: "from-fuchsia-500 to-pink-600",
        image: "/images/card-hogar.png",
        features: [
            { title: "Incendio y Rayo", desc: "Indemnización en caso de que las llamas o la caída de un rayo afecten gravemente la estructura de tu casa o tus bienes." },
            { title: "Terremoto y Temblores", desc: "Protección patrimonial si un sismo debilita la estructura de tu vivienda o destruye los enseres en su interior." },
            { title: "Hurto y Sustracción", desc: "Cobertura económica si roban objetos de valor, equipos de tecnología o muebles forzando el ingreso a tu hogar." },
            { title: "Daños por agua", desc: "Reparación y reposición en caso de que una rotura repentina de tuberías inunde tu casa dañando pisos o enseres." },
            { title: "RC Familiar (Responsabilidad Civil)", desc: "Pago de daños legales y médicos si un incidente en tu casa (ej: una gotera, una caída) afecta a un vecino o a un tercero." },
            { title: "Daños Eléctricos", desc: "Respaldo ante cortocircuitos o picos de voltaje en tu zona que averíen tus electrodomésticos, computadores o televisores." }
        ],
        seoKeywords: [
            "seguro de hogar en colombia",
            "asegurar apartamento contra terremoto",
            "seguro de arrendamiento y vivienda",
            "proteccion robo de vivienda",
            "poliza seguro de casa",
            "cotizar seguro para hogar",
            "seguro de daños a terceros en casa"
        ],
        faqs: [
            { question: "¿Si vivo en arriendo tiene sentido comprar este seguro?", answer: "¡Totalmente! Como arrendatario no tienes que asegurar la estructura física, pero SÍ puedes asegurar exclusivamente tus 'Contenidos' (televisores, computadores, ropa, enseres), blindando el fruto de tu trabajo en caso de hurto o incendio." },
            { question: "¿El seguro cubre los arreglos si se rompe un tubo de agua?", answer: "Sí, estas pólizas suelen incluir un servicio gratuito de 'Asistencia al Hogar' que te envía un plomero certificado 24/7 para frenar daños por roturas accidentales y fallas eléctricas menores." },
            { question: "¿Qué pasa si se incendia mi apartamento y debo salir?", answer: "La gran mayoría de nuestras pólizas de Hogar incluyen una cobertura de 'Alojamiento Temporal'. Esto significa que la aseguradora asume los gastos de tu estadía en un hotel o una vivienda en alquiler mientras reparan tu hogar." },
            { question: "¿La Responsabilidad Civil Familiar cobija a mis hijos o empleada doméstica?", answer: "Sí, la cobertura de RC Familiar ampara los actos accidentales descuidados que realicen tus dependientes (hijos menores de edad), tu empleada de servicio, e incluso tu mascota (salvo razas catalogadas de manejo especial) frente a los vecinos." }
        ]
    },
    {
        slug: "exequial",
        category: "persona",
        quoteType: "auto",
        title: "Seguro Exequial",
        shortDescription: "Protección para cubrir gastos y servicios funerarios en momentos difíciles.",
        fullDescription: "En los momentos más difíciles, nadie debería preocuparse por presiones económicas ni trámites burocráticos complejos. El Seguro Exequial es una protección integral diseñada para cubrir el 100% de los gastos funerarios y brindar un acompañamiento respetuoso a tu familia tras la pérdida de un ser querido. Nos encargamos de toda la gestión administrativa y coordinación de los servicios mortuorios desde el primer momento, asegurando que tú y los tuyos puedan vivir el duelo con total tranquilidad financiera y emocional.",
        icon: Shield,
        color: "text-slate-600",
        bg: "bg-slate-100",
        gradient: "from-slate-600 to-slate-800",
        image: "/images/card-exequial.png",
        features: [
            { title: "Traslado del cuerpo", desc: "Servicio de recogida y transporte a nivel nacional hasta el lugar de velación y destino final previsto (inhumación o cremación)." },
            { title: "Sala de velación y cofre funerario", desc: "Suministro del cofre o urna cineraria, uso de salas de velación con todos los protocolos y arreglo floral." },
            { title: "Servicios religiosos", desc: "Coordinación de actos y ceremonias religiosas con total respeto a las creencias de la familia." },
            { title: "Trámites legales y transporte familiar", desc: "Gestión completa de los documentos de defunción ante notarías o entidades de salud y transporte para los acompañantes el día del funeral." }
        ],
        seoKeywords: [
            "seguro exequial colombia",
            "poliza funeraria",
            "cobertura gastos funerarios",
            "seguro de sepelio",
            "pago de exequias",
            "seguro funerario familiar",
            "servicios funerarios integrales"
        ],
        faqs: [
            { question: "¿A quiénes puedo incluir en mi plan Exequial?", answer: "Normalmente los seguros exequiales ofrecen planes familiares donde puedes afiliar a tu cónyuge e hijos, e incluso planes ampliados para añadir a tus padres o suegros por una tarifa mensual muy competitiva." },
            { question: "¿Existe algún límite de edad para afiliarse?", answer: "Generalmente sí. La mayoría de aseguradoras permiten el ingreso inicial hasta los 65 o 70 años. No obstante, una vez que la persona queda afiliada y asegurada, goza de protección por el resto de su vida (siempre que el plan se mantenga al día)." },
            { question: "¿Qué significa el período de carencia?", answer: "Es el tiempo que debes esperar, desde que inicias el plan, antes de poder usarlo por muerte natural o enfermedad (usualmente entre 30 a 90 días). Sin embargo, si el fallecimiento ocurre por un accidente, ¡estarás cubierto desde el primer día!" },
            { question: "¿La póliza obliga a un tipo de servicio (entierro o cremación)?", answer: "No. El familiar encargado o beneficiario puede elegir el destino final del cuerpo conforme a sus deseos, garantizando total respeto, ya sea inhumación (entierro) en lote/bóveda temporal o cremación con urna de cenizas." }
        ]
    },
    {
        slug: "mascotas",
        category: "persona",
        quoteType: "auto",
        title: "Seguro para Mascotas",
        shortDescription: "Protege a tu peludo ante emergencias veterinarias y cubre tu responsabilidad civil si causa daños a terceros.",
        fullDescription: "Tu perro o gato es un miembro más de la familia, pero su curiosidad puede resultar en accidentes costosos o visitas inesperadas al veterinario. El Seguro para Mascotas está diseñado para darte tranquilidad financiera: no solo cubre los gastos médicos y quirúrgicos frente a enfermedades o accidentes propios del animal, sino que asume el pago de indemnizaciones y abogados si tu mascota muerde a un tercero o daña propiedad ajena (Responsabilidad Civil).",
        icon: Heart,
        color: "text-orange-500",
        bg: "bg-orange-50",
        gradient: "from-orange-400 to-amber-500",
        image: "/images/card-mascotas.png",
        features: [
            { title: "Responsabilidad Civil Extracontractual", desc: "Pago de indemnizaciones legales y gastos médicos a terceros si tu mascota lastima a otra persona, a otro animal, o daña propiedad ajena." },
            { title: "Defensa Jurídica", desc: "Respaldo y asesoría legal con abogados especializados frente a cualquier demanda o citación en inspecciones de policía relacionada con tu mascota." },
            { title: "Gastos Veterinarios y Accidentes", desc: "Cobertura para consultas de urgencia, hospitalización, exámenes diagnósticos y cirugías derivadas de accidentes o enfermedades inesperadas." },
            { title: "Asistencia de Búsqueda", desc: "Apoyo económico e impresión de volantes en caso de que tu mascota se pierda o sea extraviada." },
            { title: "Guardería por Hospitalización", desc: "Si tú como cuidador principal debes ser hospitalizado, la póliza cubre los días de guardería para que tu mascota no se quede sola." }
        ],
        seoKeywords: [
            "seguro de mascotas colombia",
            "responsabilidad civil perros",
            "poliza mascotas bogota",
            "seguro veterinario para perros y gatos",
            "seguro responsabilidad civil perros peligrosos",
            "asegurar a mi mascota",
            "cotizar seguro para perros"
        ],
        faqs: [
            { question: "¿La póliza cubre gastos de vacunas o de estética rutinaria?", answer: "No, las pólizas de mascotas tradicionales no funcionan como 'planes prepagados' para prevención, sino como seguros para riesgos mayores e inminentes (accidentes repentinos, enfermedades sorpresivas y demandas de terceros)." },
            { question: "¿Es obligatorio asegurar a algunas razas de perros?", answer: "En Colombia, la ley exige que las razas de manejo especial (anteriormente llamadas potencialmente peligrosas) deben contar obligatoriamente con una póliza de Responsabilidad Civil Extracontractual para transitar por el espacio público." },
            { question: "¿Se puede asegurar cualquier animal?", answer: "La mayoría de aseguradoras tienen diseñado este producto exclusivamente para perros y gatos de compañía. Si tienes animales exóticos o equinos, se requieren pólizas de líneas comerciales distintas." },
            { question: "¿Cuáles son los límites de edad para asegurar a mi mascota?", answer: "Usualmente puedes asegurar a tu mascota (perros y gatos) a partir de los 2 o 3 meses de vida. La edad de ingreso máxima suele limitarse a los 9 o 10 años, pero si aseguras a tu peludo estando joven, la póliza se renueva anualmente durante el resto de su vida." }
        ]
    },
    {
        slug: "educativo",
        category: "persona",
        quoteType: "vida",
        title: "Seguro Educativo",
        shortDescription: "Garantiza la educación futura y universitaria de tus hijos sin importar los imprevistos económicos.",
        fullDescription: "El futuro profesional de tus hijos es una prioridad, pero la educación superior es cada día más costosa. El Seguro Educativo es un sistema de ahorro garantizado a largo plazo que asegura el pago total de las metas universitarias de tus hijos, sumando una cobertura de vida fundamental: si llegas a faltar, la aseguradora aportará el dinero faltante hasta que tu hijo llegue a la universidad.",
        icon: GraduationCap,
        color: "text-indigo-500",
        bg: "bg-indigo-50",
        gradient: "from-indigo-500 to-purple-600",
        image: "/images/card-educativo.png",
        features: [
            { title: "Ahorro Programado", desc: "Aportes estructurados de acuerdo a tus finanzas que se capitalizan para crear el fondo necesario para la universidad." },
            { title: "Protección por Fallecimiento", desc: "Si el asegurado (mamá o papá) falta o se incapacita, la póliza exime del pago de primas y garantiza el 100% del fondo a los hijos." },
            { title: "Pago de Estudios Universitarios", desc: "Desembolso garantizado del capital asegurado para cubrir los semestres en la universidad, manutención o incluso la educación en el exterior." }
        ],
        seoKeywords: [
            "seguro educativo colombia",
            "ahorro universidad para hijos",
            "poliza educativa y ahorro",
            "seguro estudios universitarios",
            "garantizar educacion hijos",
            "seguro de educacion superior",
            "fondo de ahorro educativo"
        ],
        faqs: [
            { question: "¿Desde qué edad de mi hijo puedo contratar el seguro?", answer: "Lo ideal es comenzar lo más pronto posible (desde meses de gestación) para que el esfuerzo de ahorro mensual sea mucho menor y la rentabilidad mayor. Usualmente se pueden iniciar hasta que el hijo tenga unos 12 años." },
            { question: "¿Qué pasa si llegado el tiempo mi hijo decide no estudiar?", answer: "¡El dinero ahorrado no se pierde! Si llegado a los 18 años el beneficiario decide emprender un negocio u otra alternativa, la compañía aseguradora entrega el capital acumulado al asegurado." },
            { question: "¿La póliza le transfiere el dinero directo a la universidad?", answer: "Puede ser así si se compra la figura clásica ('pago de semestres'), aunque hoy las pólizas de Vida Ahorro Educativo más modernas entregan la totalidad del monto ('Suma Asegurada') acumulado para pagar cualquier carrera, pregrado o posgrado de libre elección ya sea en Colombia o el extranjero." },
            { question: "¿Qué sucede si sufro un accidente muy grave mientras ahorro?", answer: "Si sufres una Incapacidad Total y Permanente, la cláusula de 'Exención de Pago de Primas' asume los aportes restantes y el seguro de todas formas entregará el monto completo al finalizar el plazo o, dependiendo de las coberturas, puedes recibir tú la indemnización en vida." }
        ]
    },
    {
        slug: "vida-deudor",
        category: "persona",
        quoteType: "vida",
        title: "Seguro Vida Deudor",
        shortDescription: "Garantiza el pago de la deuda de tu vivienda en caso de eventos graves como fallecimiento o incapacidad.",
        fullDescription: "Un crédito hipotecario es un compromiso a largo plazo. El Seguro de Vida Deudor es la garantía de que tus seres queridos no heredarán obligaciones financieras impagables. Este seguro especializado garantiza el pago total del saldo de la deuda de tu vivienda en caso de que sufras eventos graves como fallecimiento o una incapacidad total y permanente, librando a tu familia de perder su patrimonio por no poder cumplir con el banco.",
        icon: Home,
        color: "text-teal-600",
        bg: "bg-teal-50",
        gradient: "from-teal-500 to-cyan-600",
        image: "/images/card-vida-deudor.png",
        features: [
            { title: "Fallecimiento", desc: "La aseguradora salda inmediatamente el total de la deuda hipotecaria pendiente con la entidad financiera si llegas a faltar." },
            { title: "Incapacidad Total y Permanente", desc: "Protección en vida: si una enfermedad severa o accidente te impide volver a trabajar, el seguro asume y cancela tu deuda habitacional." },
            { title: "Tranquilidad Patrimonial", desc: "Impide que el banco embargue o remate la vivienda por cesación de pagos, asegurando que tu familia conserve su hogar." },
            { title: "Mejora de Tasas (Endoso)", desc: "Las pólizas contratadas fuera del banco (con nosotros) suelen ser mucho más económicas que los seguros cobrados directamente en el extracto del crédito." }
        ],
        seoKeywords: [
            "seguro vida deudor hipotecario",
            "poliza deudor colombia",
            "seguro credito hipotecario",
            "endoso seguro de vida deudor",
            "seguro para deuda vivienda",
            "poliza vida credito banco",
            "cotizar seguro hipotecario"
        ],
        faqs: [
            { question: "¿Es obligatorio tener un Seguro de Vida Deudor para un crédito?", answer: "Sí, la gran mayoría de entidades financieras en Colombia exigen un seguro ligado a la deuda para desembolsar un crédito hipotecario o leasing habitacional." },
            { question: "¿Tengo que comprarle el seguro obligatoriamente al banco?", answer: "¡Absolutamente NO! Tienes el derecho legal de escoger tu propia aseguradora (Derecho a la Libre Elección) y presentarla al banco mediante un trámite llamado 'Endoso'. Comprarlo por tu cuenta suele ser hasta un 40% más barato." },
            { question: "¿Puedo endosar mi seguro actual si ya lo tengo cobrado con el banco?", answer: "Sí, en cualquier momento puedes solicitar la cancelación del que te cobra el banco, cotizando y presentando una póliza nueva que lo reemplace de inmediato." },
            { question: "¿El Seguro Vida Deudor entrega dinero a mi familia?", answer: "A diferencia de un Seguro de Vida Individual tradicional (que deja el dinero de libre inversión a los herederos), el Vida Deudor le paga de manera prioritaria al banco acreedor para saldar el saldo pendiente exacto de la hipoteca." }
        ]
    },
    {
        slug: "colectivos",
        category: "empresa",
        quoteType: "empresarial",
        title: "Seguros Colectivos",
        shortDescription: "Protección para grupos de empleados con beneficios y costos más competitivos.",
        fullDescription: "Protección estructurada para grupos de empleados o miembros de una organización, permitiendo acceder a beneficios de vida, salud y coberturas accidentales con costos altamente competitivos. Son una herramienta clave para atraer y fidelizar talento, además de brindar bienestar y sentido de pertenencia a los colaboradores.",
        icon: User,
        color: "text-violet-600",
        bg: "bg-violet-50",
        gradient: "from-violet-600 to-purple-700",
        image: "/images/card-colectivos.png",
        features: [
            { title: "Vida Grupo", desc: "Respaldo y amparo económico vital para las familias en caso de fallecimiento." },
            { title: "Salud / EPS", desc: "Acceso diferencial a redes integrales de atención médica Premium." },
            { title: "Accidentes Personales", desc: "Amparo para eventos accidentales ocurridos a los colaboradores." }
        ],
        seoKeywords: ["seguros colectivos empresas colombia", "poliza vida grupo empleados", "beneficios laborales seguros bogota", "seguro grupal corporativo"],
        faqs: [
            { question: "¿Desde cuántos empleados se puede armar una póliza colectiva?", answer: "Las aseguradoras permiten formar grupos accediendo a descuentos por volumen desde números muy reducidos, ideal para PyMEs." },
            { question: "¿El costo del seguro colectivo quién lo asume?", answer: "La empresa puede decidir pagar el 100% como incentivo, o armar un esquema mixto pagando una parte y deduciendo a nómina al empleado." }
        ]
    },
    {
        slug: "arl-vida-grupo",
        category: "empresa",
        quoteType: "empresarial",
        title: "ARL / Vida Grupo",
        shortDescription: "Soluciones de protección del talento humano frente a riesgos laborales y eventos de vida.",
        fullDescription: "Completo esquema orientado a salvaguardar al talento humano de los eventos diarios. Una combinación entre la Administradora de Riesgos Laborales (ARL), que es la cobertura obligatoria en Colombia ante accidentes laborales; más una póliza de Vida Grupo, proporcionando respaldo económico. Así tu empresa cumple la normatividad laboral al tiempo que fortalece la protección integral del equipo.",
        icon: Briefcase,
        color: "text-emerald-700",
        bg: "bg-emerald-50",
        gradient: "from-emerald-600 to-teal-700",
        image: "/images/card-arl-vida-grupo-co.png",
        features: [
            { title: "ARL Obligatoria", desc: "Administradora de Riesgos Laborales que atiende a los colaboradores accidentados." },
            { title: "Vida Grupo Complementario", desc: "Poliza voluntaria que respalda económicamente de forma independiente y paralela a la ARL." },
            { title: "Cumplimiento Legal", desc: "Evita graves multas ante el Estado por el incumplimiento de protección del trabajador." }
        ],
        seoKeywords: ["arl colombia empresas", "vida grupo empleados bogota", "seguro obligatorio empleados colombia", "riesgos laborales colombia"],
        faqs: [
            { question: "¿Es suficiente solo tener la ARL?", answer: "La ARL solo cubre riesgos en horarios y entornos de trabajo. El Vida Grupo garantiza respaldo 24/7 incluso si el evento es por enfermedad común o un fin de semana fuera de su labor." },
            { question: "¿Quién asume los costos de cada protección?", answer: "Legalmente, la ARL es 100% asumida y pagada por la empresa cotizante. El Vida Grupo suele estructurarse como un beneficio adicional también pagado por recursos extra de la compañía." }
        ]
    }

];
