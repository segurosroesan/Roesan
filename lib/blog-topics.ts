export interface BlogTopic {
  slug: string;
  title: string;
  description: string;
  questions: string[];
  servicePath: string;
  serviceLabel: string;
}

export const blogTopics: BlogTopic[] = [
  {
    slug: "seguro-autos",
    title: "Seguro de autos",
    description: "Guías para entender SOAT, pólizas voluntarias, responsabilidad civil, deducibles, pérdidas y reclamaciones de vehículos.",
    questions: ["¿Qué cubre una póliza voluntaria?", "¿Cómo funciona el deducible?", "¿Qué diferencia existe frente al SOAT?"],
    servicePath: "/servicios/autos",
    serviceLabel: "Seguro de autos",
  },
  {
    slug: "seguro-hogar",
    title: "Seguro de hogar",
    description: "Información para proteger la edificación, los contenidos y la responsabilidad derivada de una vivienda.",
    questions: ["¿Qué bienes se pueden asegurar?", "¿Cómo estimar la suma asegurada?", "¿Qué exclusiones deben revisarse?"],
    servicePath: "/servicios/hogar",
    serviceLabel: "Seguro de hogar",
  },
  {
    slug: "seguro-vida",
    title: "Seguro de vida",
    description: "Orientación sobre protección familiar, beneficiarios, suma asegurada y seguros asociados a obligaciones financieras.",
    questions: ["¿Quiénes pueden ser beneficiarios?", "¿Cómo estimar la protección necesaria?", "¿Qué diferencia hay entre vida individual y vida deudor?"],
    servicePath: "/servicios/vida",
    serviceLabel: "Seguro de vida",
  },
  {
    slug: "salud-medicina-prepagada",
    title: "Salud y medicina prepagada",
    description: "Contenido para distinguir pólizas de salud, medicina prepagada, planes complementarios y su relación con el sistema de salud.",
    questions: ["¿Qué tipo de plan corresponde a cada necesidad?", "¿Cómo operan preexistencias y exclusiones?", "¿Qué red médica ofrece cada producto?"],
    servicePath: "/servicios/salud",
    serviceLabel: "Seguros de salud",
  },
  {
    slug: "responsabilidad-civil",
    title: "Responsabilidad civil",
    description: "Guías sobre la protección patrimonial frente a daños causados a terceros en contextos personales, profesionales y empresariales.",
    questions: ["¿Cuándo puede existir responsabilidad?", "¿Qué límite conviene evaluar?", "¿Qué exclusiones son habituales?"],
    servicePath: "/servicios/responsabilidad-civil-personal",
    serviceLabel: "Responsabilidad civil",
  },
  {
    slug: "copropiedades",
    title: "Copropiedades",
    description: "Información sobre bienes comunes, Ley 675, reconstrucción y coberturas adicionales para edificios y conjuntos.",
    questions: ["¿Qué seguro exige la Ley 675?", "¿Qué bienes son comunes?", "¿Qué coberturas adicionales deben evaluarse?"],
    servicePath: "/servicios/copropiedades",
    serviceLabel: "Seguro para copropiedades",
  },
  {
    slug: "cumplimiento",
    title: "Cumplimiento",
    description: "Contenido educativo sobre garantías contractuales, pólizas de cumplimiento y controles de conocimiento del cliente.",
    questions: ["¿Qué obligación se garantiza?", "¿Qué documentos pide la aseguradora?", "¿Qué amparos corresponden al contrato?"],
    servicePath: "/servicios/cumplimiento",
    serviceLabel: "Seguro de cumplimiento",
  },
  {
    slug: "seguros-empresariales",
    title: "Seguros empresariales",
    description: "Guías para identificar riesgos de operación, patrimonio, terceros, empleados y continuidad de una empresa.",
    questions: ["¿Qué riesgos pueden detener la operación?", "¿Cómo valorar activos?", "¿Qué coberturas dependen del sector?"],
    servicePath: "/servicios/empresariales",
    serviceLabel: "Seguros empresariales",
  },
  {
    slug: "arl-vida-grupo",
    title: "ARL y vida grupo",
    description: "Información para empresas sobre riesgos laborales, protección colectiva y aspectos que deben revisarse con asesoría especializada.",
    questions: ["¿Qué cubre el sistema de riesgos laborales?", "¿Qué aporta una póliza de vida grupo?", "¿Cómo se mantienen actualizados los asegurados?"],
    servicePath: "/servicios/arl-vida-grupo",
    serviceLabel: "ARL y vida grupo",
  },
  {
    slug: "educacion-seguros",
    title: "Educación sobre seguros",
    description: "Conceptos transversales para leer pólizas, comparar alternativas y tomar decisiones informadas sin depender únicamente del precio.",
    questions: ["¿Qué es un amparo?", "¿Cómo se interpreta una exclusión?", "¿Qué información debe tener una comparación responsable?"],
    servicePath: "/servicios",
    serviceLabel: "Portafolio de seguros",
  },
];

export function getBlogTopic(slug: string) {
  return blogTopics.find((topic) => topic.slug === slug);
}
