import type { BlogPost } from "@/lib/blog-data";

type BlogEditorialOverride = Partial<Omit<BlogPost, "slug">>;

const reviewedAt = "2026-08-28";

export const blogEditorialOverrides: Record<string, BlogEditorialOverride> = {
  "seguro-automovil-colombia-guia": {
    title: "SOAT y seguro todo riesgo: diferencias y coberturas en Colombia",
    seoTitle: "SOAT vs. seguro todo riesgo: diferencias en Colombia",
    excerpt:
      "Conoce qué protege el SOAT, qué puede cubrir un seguro voluntario de automóvil y qué revisar antes de comparar pólizas en Colombia.",
    dateModified: reviewedAt,
    tags: ["SOAT", "seguro de automóvil", "coberturas", "deducible"],
    topicSlug: "seguro-autos",
    editorialStatus: "maintain",
    isReadyForPublication: true,
    quickAnswer: [
      "El SOAT y el seguro voluntario de automóvil no cumplen la misma función. El SOAT es obligatorio y atiende los daños corporales causados a las personas en accidentes de tránsito, dentro de sus límites legales. No reemplaza una póliza que proteja el vehículo o el patrimonio del conductor.",
      "Un seguro voluntario puede incluir responsabilidad civil, daños, hurto y asistencias, pero cada producto define sus propios amparos, límites, deducibles y exclusiones. La comparación debe hacerse sobre la carátula y el condicionado de cada oferta, no solo sobre el precio.",
    ],
    sources: [
      {
        id: "fasecolda-auto",
        title: "Preguntas frecuentes sobre el seguro de automóviles",
        publisher: "Fasecolda",
        url: "https://www.fasecolda.com/ramos/automoviles/preguntas-frecuentes/",
        accessedAt: reviewedAt,
      },
      {
        id: "sfc-seguros",
        title: "Preguntas frecuentes: seguros",
        publisher: "Superintendencia Financiera de Colombia",
        url: "https://www.superfinanciera.gov.co/preguntas-frecuentes/20/20-seguros/",
        accessedAt: reviewedAt,
      },
    ],
    relatedArticleSlugs: [],
    relatedServices: [
      {
        label: "Seguro de autos",
        href: "/servicios/autos",
        description: "Revisa la orientación comercial de Roesan para proteger tu vehículo.",
      },
      {
        label: "Cotizar seguro de auto",
        href: "/cotizar/seguro-de-auto",
        description: "Solicita una comparación ajustada al vehículo y al perfil del conductor.",
      },
    ],
    content: [
      {
        type: "intro",
        text: "Esta guía explica qué problema resuelve cada seguro, cuáles son las diferencias esenciales y qué información conviene revisar antes de aceptar una cotización de automóvil en Colombia.",
      },
      {
        type: "heading",
        text: "SOAT y seguro de automóvil no son equivalentes",
      },
      {
        type: "paragraph",
        text: "El SOAT está dirigido a la atención de daños corporales de las víctimas de un accidente de tránsito. El seguro voluntario de automóviles protege los intereses definidos en el contrato y puede incluir daños al vehículo, hurto, responsabilidad civil y asistencias.",
        citations: ["fasecolda-auto", "sfc-seguros"],
      },
      {
        type: "table",
        caption: "Diferencias generales entre SOAT y seguro voluntario de automóvil",
        headers: ["Aspecto", "SOAT", "Seguro voluntario de automóvil"],
        rows: [
          ["Carácter", "Obligatorio para circular", "Voluntario"],
          ["Finalidad principal", "Daños corporales a víctimas del accidente", "Protección patrimonial según los amparos contratados"],
          ["Daños al vehículo propio", "No", "Puede incluirlos"],
          ["Hurto y responsabilidad civil", "No protege el vehículo frente a hurto ni sustituye la RC contractual", "Puede incluirlos, con límites y exclusiones"],
        ],
        citations: ["fasecolda-auto"],
      },
      {
        type: "heading",
        text: "Qué puede cubrir una póliza voluntaria",
      },
      {
        type: "paragraph",
        text: "Es común encontrar amparos de responsabilidad civil, daños totales o parciales, hurto total o parcial y servicios de asistencia. Que un amparo sea común no significa que esté incluido automáticamente: siempre debe verificarse en la oferta y en el condicionado particular.",
        citations: ["fasecolda-auto"],
      },
      {
        type: "heading",
        text: "Cómo funciona el deducible",
      },
      {
        type: "paragraph",
        text: "El deducible es la parte del riesgo que queda a cargo del asegurado cuando ocurre un evento cubierto. Puede expresarse como una suma, un porcentaje o una combinación de ambos. Un deducible menor suele influir en el valor de la prima, pero la relación exacta depende de cada aseguradora y perfil.",
        citations: ["fasecolda-auto", "sfc-seguros"],
      },
      {
        type: "heading",
        text: "Qué comparar antes de elegir",
      },
      {
        type: "list",
        items: [
          "Amparos, límites y sublímites de responsabilidad civil.",
          "Deducible aplicable a cada cobertura.",
          "Exclusiones, garantías y condiciones de uso del vehículo.",
          "Valor asegurado y forma de determinar la indemnización en pérdida total.",
          "Red de talleres, asistencias y procedimiento para avisar un siniestro.",
          "Prima total, forma de pago y vigencia, después de revisar lo anterior.",
        ],
      },
      {
        type: "heading",
        text: "Si ocurre un accidente o hurto",
      },
      {
        type: "paragraph",
        text: "Prioriza la seguridad de las personas, contacta a las autoridades cuando corresponda y avisa a la aseguradora por sus canales oficiales. Conserva fotografías, datos de los involucrados y documentos relacionados con el hecho. Los requisitos concretos dependen de la póliza y del tipo de evento.",
        citations: ["fasecolda-auto"],
      },
    ],
  },

  "seguro-para-copropiedades-guia": {
    title: "Seguro para copropiedades y obligación de la Ley 675",
    seoTitle: "Seguro de copropiedades: qué exige la Ley 675",
    excerpt:
      "Explicación precisa del seguro obligatorio para bienes comunes asegurables frente a incendio y terremoto, y de las coberturas adicionales que deben evaluarse por separado.",
    dateModified: reviewedAt,
    tags: ["copropiedades", "Ley 675", "bienes comunes", "incendio", "terremoto"],
    topicSlug: "copropiedades",
    editorialStatus: "maintain",
    isReadyForPublication: true,
    quickAnswer: [
      "El artículo 15 de la Ley 675 de 2001 obliga a constituir pólizas que cubran incendio y terremoto sobre los bienes comunes susceptibles de ser asegurados. Esa es la obligación legal expresa que debe distinguirse de otras coberturas recomendables.",
      "Responsabilidad civil, daños por agua, manejo, equipos u otros riesgos pueden ser pertinentes según la copropiedad, pero no deben presentarse como obligaciones creadas por el artículo 15. Su contratación depende del análisis de riesgos, las decisiones de la copropiedad y las condiciones ofrecidas por la aseguradora.",
    ],
    sources: [
      {
        id: "ley-675",
        title: "Ley 675 de 2001, artículo 15",
        publisher: "Secretaría Jurídica Distrital / Secretaría del Senado",
        url: "http://www.secretariasenado.gov.co/senado/basedoc/ley_0675_2001.html#15",
        accessedAt: reviewedAt,
      },
      {
        id: "fasecolda-bienes-comunes",
        title: "Seguro de bienes comunes",
        publisher: "Fasecolda",
        url: "https://www.fasecolda.com/ramos/propiedad-e-ingenieria/los-seguros/bienes-comunes/",
        accessedAt: reviewedAt,
      },
    ],
    relatedArticleSlugs: ["seguro-hogar-vivienda-guia-completa"],
    relatedServices: [
      {
        label: "Seguro para copropiedades",
        href: "/servicios/copropiedades",
        description: "Conoce cómo Roesan acompaña la evaluación de riesgos de edificios y conjuntos.",
      },
      {
        label: "Responsabilidad civil empresarial",
        href: "/servicios/responsabilidad-civil-empresarial",
        description: "Evalúa esta cobertura adicional según la exposición de la copropiedad.",
      },
    ],
    content: [
      {
        type: "intro",
        text: "Esta guía separa la obligación concreta de la Ley 675 de las coberturas adicionales que una copropiedad puede evaluar según sus riesgos, presupuesto y reglamento.",
      },
      {
        type: "heading",
        text: "Qué exige exactamente el artículo 15",
      },
      {
        type: "paragraph",
        text: "La Ley 675 permite asegurar edificios o conjuntos para garantizar su reconstrucción total y establece como obligatoria la cobertura contra incendio y terremoto de los bienes comunes susceptibles de ser asegurados.",
        citations: ["ley-675"],
      },
      {
        type: "paragraph",
        text: "La norma también dispone que las indemnizaciones se destinan primero a la reconstrucción cuando esta sea procedente. Si el inmueble no se reconstruye, indica cómo debe distribuirse la indemnización.",
        citations: ["ley-675"],
      },
      {
        type: "heading",
        text: "Qué no convierte en obligatorio esa disposición",
      },
      {
        type: "paragraph",
        text: "El artículo 15 no declara obligatorios, por sí solo, los amparos de responsabilidad civil, manejo, daños por agua, rotura de maquinaria, terrorismo ni la protección de los bienes privados de cada propietario. Pueden ser coberturas convenientes, pero deben justificarse mediante el análisis de riesgo y las decisiones aplicables a la copropiedad.",
        citations: ["ley-675"],
      },
      {
        type: "table",
        caption: "Tratamiento general de coberturas para una copropiedad",
        headers: ["Cobertura", "Tratamiento"],
        rows: [
          ["Incendio y terremoto sobre bienes comunes asegurables", "Obligatoria conforme al artículo 15"],
          ["Responsabilidad civil de la copropiedad", "Adicional; evaluar exposición y condiciones"],
          ["Manejo o infidelidad de empleados", "Adicional; evaluar controles y administración"],
          ["Daños por agua, equipos y maquinaria", "Adicional; depende de activos y riesgos"],
          ["Bienes privados y contenidos de residentes", "No forman parte automática del seguro de bienes comunes"],
        ],
        citations: ["ley-675", "fasecolda-bienes-comunes"],
      },
      {
        type: "heading",
        text: "Información necesaria para revisar la póliza",
      },
      {
        type: "list",
        items: [
          "Inventario y valoración técnica de los bienes comunes asegurables.",
          "Suma asegurada y criterio utilizado para estimar la reconstrucción.",
          "Amparos, exclusiones, deducibles y sublímites.",
          "Equipos, zonas especiales y actividades que cambian la exposición al riesgo.",
          "Responsabilidades asignadas al administrador y decisiones documentadas por los órganos de la copropiedad.",
          "Procedimiento de aviso, documentación y actualización anual de valores.",
        ],
      },
    ],
  },

  "seguro-hogar-vivienda-guia-completa": {
    title: "Seguro de hogar en Colombia: coberturas y cómo elegir",
    seoTitle: "Seguro de hogar en Colombia: guía de coberturas",
    excerpt:
      "Guía para entender qué puede proteger un seguro de hogar, cómo definir los bienes asegurados y qué revisar en coberturas, exclusiones y deducibles.",
    dateModified: reviewedAt,
    tags: ["seguro de hogar", "vivienda", "contenidos", "incendio", "hurto"],
    topicSlug: "seguro-hogar",
    editorialStatus: "maintain",
    isReadyForPublication: true,
    quickAnswer: [
      "Un seguro de hogar puede proteger la edificación, los contenidos o ambos frente a riesgos definidos en la póliza. Entre las coberturas habituales se encuentran incendio, terremoto, hurto, explosión y daños por agua, pero su inclusión y alcance dependen de cada contrato.",
      "Para comparar ofertas conviene separar el valor de reconstrucción de la vivienda del valor de sus contenidos, revisar deducibles y exclusiones, y confirmar quién tiene interés asegurable. No existe un precio promedio responsable sin conocer ubicación, características, valores y coberturas solicitadas.",
    ],
    sources: [
      {
        id: "fasecolda-hogar",
        title: "El seguro para el hogar",
        publisher: "Fasecolda",
        url: "https://www.fasecolda.com/ramos/propiedad-e-ingenieria/los-seguros/hogar/",
        accessedAt: reviewedAt,
      },
      {
        id: "sfc-contrato-seguro",
        title: "Jurisprudencia sobre contrato de seguros",
        publisher: "Superintendencia Financiera de Colombia",
        url: "https://www.superfinanciera.gov.co/publicaciones/10085296/consumidor-financierofunciones-jurisdiccionales-historico-jurisprudencia-superintendencia-financiera-de-colombiacontrato-de-seguros-10085296/",
        accessedAt: reviewedAt,
      },
    ],
    relatedArticleSlugs: ["seguro-para-copropiedades-guia"],
    relatedServices: [
      {
        label: "Seguro de hogar",
        href: "/servicios/hogar",
        description: "Conoce la asesoría de Roesan para proteger vivienda y contenidos.",
      },
      {
        label: "Seguros para personas y familias",
        href: "/servicios/personas",
        description: "Explora otras alternativas de protección personal y patrimonial.",
      },
    ],
    content: [
      {
        type: "intro",
        text: "Esta guía ayuda a identificar qué se desea proteger, qué coberturas suelen ofrecerse y qué preguntas hacer antes de contratar un seguro de hogar.",
      },
      {
        type: "heading",
        text: "Qué puede proteger un seguro de hogar",
      },
      {
        type: "paragraph",
        text: "Las pólizas pueden cubrir la edificación, los contenidos o ambos. Fasecolda identifica como coberturas comunes incendio, terremoto, hurto, explosión, daños por agua, granizo y vientos fuertes. La existencia de una cobertura en el mercado no significa que esté incluida en todas las pólizas.",
        citations: ["fasecolda-hogar"],
      },
      {
        type: "table",
        caption: "Elementos que conviene separar al asegurar una vivienda",
        headers: ["Elemento", "Qué comprende", "Qué revisar"],
        rows: [
          ["Edificación", "Estructura y elementos incorporados", "Criterio y valor de reconstrucción"],
          ["Contenidos", "Muebles, electrodomésticos y otros bienes declarados", "Límites, prueba de propiedad y valoración"],
          ["Responsabilidad civil", "Daños a terceros amparados por la póliza", "Límite, eventos cubiertos y exclusiones"],
          ["Asistencias", "Servicios definidos por el producto", "Cantidad de eventos, topes y proveedores"],
        ],
      },
      {
        type: "heading",
        text: "Cómo definir una suma asegurada útil",
      },
      {
        type: "paragraph",
        text: "El valor comercial de una vivienda y su costo de reconstrucción no son necesariamente iguales. Para la edificación conviene usar un criterio técnico de reconstrucción; para los contenidos, un inventario actualizado. La aseguradora y el intermediario deben explicar cómo opera la suma asegurada y si existe aplicación proporcional en caso de infraseguro.",
      },
      {
        type: "heading",
        text: "Coberturas, exclusiones y prueba del siniestro",
      },
      {
        type: "paragraph",
        text: "Las aseguradoras delimitan los riesgos que asumen mediante amparos, exclusiones y condiciones. En una reclamación, el asegurado debe acreditar la ocurrencia y, cuando corresponda, la cuantía de la pérdida; por eso son importantes el inventario, las facturas disponibles, las fotografías y los soportes del evento.",
        citations: ["sfc-contrato-seguro"],
      },
      {
        type: "heading",
        text: "Lista de verificación antes de contratar",
      },
      {
        type: "list",
        items: [
          "Definir si se asegura la edificación, los contenidos o ambos.",
          "Comparar amparos y límites antes de comparar la prima.",
          "Revisar deducibles por evento y cobertura.",
          "Leer exclusiones, garantías y obligaciones del asegurado.",
          "Confirmar cómo se valora una pérdida y qué documentos pueden solicitarse.",
          "Actualizar inventarios y valores cuando cambien la vivienda o sus contenidos.",
        ],
      },
    ],
  },

  "seguro-de-vida-decision-importante": {
    title: "Seguro de vida en Colombia (en revisión editorial)",
    seoTitle: "Seguro de vida en Colombia | Contenido en revisión",
    excerpt:
      "Estamos verificando esta guía sobre seguro de vida, beneficiarios y suma asegurada antes de volver a publicarla.",
    editorialStatus: "update",
    topicSlug: "seguro-vida",
    tags: ["seguro de vida", "suma asegurada", "beneficiarios"],
  },
  "seguro-bicicletas-patinetas-electricas-colombia": {
    title: "Seguros para bicicletas y patinetas (en revisión editorial)",
    seoTitle: "Seguros para bicicletas y patinetas | En revisión",
    excerpt:
      "Estamos revisando las coberturas y condiciones aplicables a bicicletas y patinetas eléctricas.",
    editorialStatus: "update",
    topicSlug: "responsabilidad-civil",
    tags: ["bicicletas", "patinetas eléctricas", "responsabilidad civil"],
  },
  "seguro-mascotas-responsabilidad-civil": {
    title: "Seguros para mascotas y responsabilidad civil (en revisión)",
    seoTitle: "Seguros para mascotas | Contenido en revisión",
    excerpt:
      "Estamos verificando esta guía sobre protección veterinaria y responsabilidad civil antes de volver a publicarla.",
    editorialStatus: "update",
    topicSlug: "responsabilidad-civil",
    tags: ["mascotas", "responsabilidad civil", "veterinaria"],
  },
  "costo-seguro-contra-todo-riesgo-bogota": {
    title: "Costo del seguro todo riesgo en Bogotá (en revisión)",
    seoTitle: "Costo del seguro todo riesgo | Contenido en revisión",
    excerpt:
      "Estamos actualizando la metodología y las variables necesarias para comparar cotizaciones de automóviles.",
    topicSlug: "seguro-autos",
    tags: ["seguro de automóvil", "precios", "comparación de aseguradoras"],
  },
  "medicina-prepagada-adultos-mayores-bogota": {
    title: "Medicina prepagada para adultos mayores (en revisión)",
    seoTitle: "Medicina prepagada para adultos mayores | En revisión",
    excerpt:
      "Estamos verificando requisitos, condiciones y fuentes para actualizar esta guía de salud.",
    topicSlug: "salud-medicina-prepagada",
    tags: ["medicina prepagada", "adultos mayores", "salud"],
  },
  "seguro-inversion-no-gasto": {
    title: "Seguros y protección patrimonial (en revisión editorial)",
    seoTitle: "Seguros y protección patrimonial | En revisión",
    excerpt:
      "Estamos revisando los conceptos financieros y las fuentes de este contenido educativo.",
    topicSlug: "educacion-seguros",
    tags: ["educación financiera", "seguro de vida", "ahorro"],
  },
  "seguro-vida-deudor-hipotecario-ahorro": {
    title: "Seguro de vida deudor hipotecario (en revisión editorial)",
    seoTitle: "Seguro de vida deudor hipotecario | En revisión",
    excerpt:
      "Estamos verificando la información contractual y financiera de esta guía antes de volver a publicarla.",
    topicSlug: "seguro-vida",
    tags: ["vida deudor", "crédito hipotecario", "endoso"],
  },
  "sarlaft-importancia-empresas-personas": {
    title: "SARLAFT para empresas y personas (en revisión editorial)",
    seoTitle: "SARLAFT para empresas y personas | En revisión",
    excerpt:
      "Estamos actualizando el alcance normativo y las fuentes de este contenido sobre cumplimiento.",
    topicSlug: "cumplimiento",
    tags: ["SARLAFT", "cumplimiento", "empresas"],
  },
  "planes-mas-que-seguros-eps": {
    title: "Cómo comparar planes de salud (en revisión editorial)",
    seoTitle: "Cómo comparar planes de salud | Contenido en revisión",
    excerpt:
      "Estamos verificando categorías, condiciones y fuentes antes de volver a publicar esta comparación.",
    topicSlug: "salud-medicina-prepagada",
    tags: ["salud", "EPS", "planes complementarios"],
  },
  "mejores-aseguradoras-colombia-2026": {
    title: "Cómo comparar aseguradoras en Colombia (en revisión)",
    seoTitle: "Cómo comparar aseguradoras | Contenido en revisión",
    excerpt:
      "Estamos construyendo una metodología verificable antes de publicar una nueva comparación de aseguradoras.",
    topicSlug: "educacion-seguros",
    tags: ["aseguradoras", "comparación", "metodología"],
  },
};
