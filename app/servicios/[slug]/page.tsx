import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/services-data";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Shield } from "lucide-react";
import Image from "next/image";
import QuoteFunnel from "@/components/home/QuoteFunnel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { ProductId } from "@/components/home/QuoteFunnel";
import type { Metadata } from "next";
import type { ServiceData } from "@/lib/services-data";

type Props = {
    params: Promise<{ slug: string }>;
};

/**
 * Fallback SEO title for services that do not have a custom seoTitle.
 */
function buildSeoTitle(service: ServiceData) {
    const audience =
        service.category === "empresa"
            ? "para empresas"
            : "para personas y familias";

    return `${service.title} en Colombia ${audience}`;
}

/**
 * Fallback SEO description for services that do not have a custom seoDescription.
 */
function buildSeoDescription(service: ServiceData) {
    const target =
        service.category === "empresa"
            ? "tu empresa"
            : "ti y tu familia";

    return `Cotiza ${service.title.toLowerCase()} en Colombia con asesoría experta. ${service.shortDescription} En Roesan te ayudamos a comparar coberturas, beneficios y condiciones para proteger a ${target}.`;
}

/**
 * Generates supporting SEO paragraphs using the service's existing
 * keywords, features, category and content.
 */
function buildSeoParagraphs(service: ServiceData) {
    const keyword =
        service.seoKeywords[0] ?? service.title.toLowerCase();

    const secondaryKeyword =
        service.seoKeywords[1] ?? service.title.toLowerCase();

    const features = service.features
        .slice(0, 3)
        .map((feature) => feature.title.toLowerCase())
        .join(", ");

    if (service.category === "empresa") {
        return [
            `Si tu empresa está buscando ${keyword}, esta cobertura te ayuda a proteger la operación, el patrimonio y la continuidad del negocio con soluciones ajustadas al tamaño, sector y exposición al riesgo de cada organización. En Roesan analizamos el contexto real de la compañía para estructurar una póliza alineada con sus obligaciones, activos y necesidades de respaldo.`,

            `${service.title} permite fortalecer la estabilidad financiera de la empresa frente a eventos que pueden afectar contratos, mercancías, empleados, instalaciones o reclamaciones de terceros. Entre los amparos y enfoques más consultados se encuentran ${features}, así como coberturas complementarias que pueden adaptarse a la actividad económica de cada cliente.`,

            `Además de cotizar ${secondaryKeyword}, acompañamos a nuestros clientes en la revisión de condiciones, deducibles, exclusiones, límites asegurados y requerimientos documentales. Esto permite tomar decisiones mejor informadas y contratar una protección empresarial con criterio técnico, lenguaje claro y acompañamiento cercano durante todo el proceso.`,
        ];
    }

    return [
        `Si estás buscando ${keyword}, esta página reúne información clave para entender cómo funciona esta póliza, qué coberturas suele incluir y qué factores conviene evaluar antes de contratarla. En Roesan acompañamos a personas y familias en Colombia para encontrar alternativas bien estructuradas, competitivas y alineadas con su etapa de vida.`,

        `${service.title} es una opción de protección pensada para brindar tranquilidad financiera ante situaciones que pueden impactar tu salud, patrimonio, vehículo, vivienda o estabilidad familiar. Dentro de los beneficios más consultados se encuentran ${features}, además de opciones adicionales que se ajustan al perfil y presupuesto de cada asegurado.`,

        `Al cotizar ${secondaryKeyword} con asesoría, no solo comparas precios: también revisas coberturas reales, periodos de carencia, asistencias, exclusiones, valores asegurados y condiciones de reclamación. Esa combinación entre información y acompañamiento ayuda a elegir una póliza más útil, clara y coherente con lo que realmente necesitas proteger.`,
    ];
}

/**
 * Generates the "ideal for" section based on the service category.
 */
function buildIdealForItems(service: ServiceData) {
    if (service.category === "empresa") {
        return [
            `Empresas que necesitan ${service.title.toLowerCase()} con respaldo técnico y comparativo entre aseguradoras.`,
            "Negocios que buscan proteger su operación, patrimonio, contratos o colaboradores con una solución a la medida.",
            "Organizaciones que quieren acompañamiento experto en cotización, emisión, renovación y siniestros.",
        ];
    }

    return [
        `Personas y familias que quieren cotizar ${service.title.toLowerCase()} con una asesoría clara y personalizada.`,
        "Clientes que desean comparar coberturas, beneficios y costos antes de tomar una decisión.",
        "Hogares que valoran un acompañamiento cercano durante la contratación y el proceso de reclamación.",
    ];
}

/**
 * Generate page metadata dynamically for each service.
 */
export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const resolvedParams = await params;

    const service = servicesData.find(
        (s) => s.slug === resolvedParams.slug
    );

    if (!service) {
        return {
            title: "Servicio no encontrado",
        };
    }

    const title =
        service.seoTitle || buildSeoTitle(service);

    const description =
        service.seoDescription || buildSeoDescription(service);

    const socialTitle = `${title} | Roesan Seguros`;

    const canonical = `/servicios/${service.slug}`;

    return {
        /**
         * absolute prevents the global Next.js title template
         * from automatically appending the brand to the SEO title.
         */
        title: {
            absolute: title,
        },

        description,

        keywords:
            service.seoKeywords?.join(", ") || undefined,

        alternates: {
            canonical,
        },

        openGraph: {
            title: socialTitle,
            description,
            url: canonical,
            type: "article",
            images: service.image
                ? [
                      {
                          url: service.image,
                          alt: service.title,
                      },
                  ]
                : undefined,
        },

        twitter: {
            card: "summary_large_image",
            title: socialTitle,
            description,
            images: service.image
                ? [service.image]
                : undefined,
        },
    };
}

/**
 * Generate static params for all services at build time.
 */
export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailPage({
    params,
}: Props) {
    const resolvedParams = await params;

    const service = servicesData.find(
        (s) => s.slug === resolvedParams.slug
    );

    if (!service) {
        notFound();
    }

    const seoParagraphs = buildSeoParagraphs(service);
    const idealForItems = buildIdealForItems(service);

    /**
     * Canonical URL using the confirmed primary domain.
     */
    const canonicalUrl = `https://roesan.com/servicios/${service.slug}`;

    /**
     * Use the custom SEO description when available so that
     * metadata and structured data remain aligned.
     */
    const seoDescription =
        service.seoDescription ||
        buildSeoDescription(service);

    /**
     * Structured data for the service page.
     */
    const jsonLd = {
        "@context": "https://schema.org",

        "@graph": [
            {
                "@type": "Service",

                name: service.title,

                description: seoDescription,

                serviceType:
                    service.category === "empresa"
                        ? "Seguro empresarial"
                        : "Seguro para personas",

                provider: {
                    "@type": "InsuranceAgency",
                    name: "Roesan Seguros",
                    url: "https://roesan.com",
                },

                areaServed: {
                    "@type": "Country",
                    name: "Colombia",
                },

                url: canonicalUrl,

                keywords:
                    service.seoKeywords?.join(", ") || undefined,
            },

            ...(service.faqs?.length
                ? [
                      {
                          "@type": "FAQPage",

                          mainEntity: service.faqs.map(
                              (faq) => ({
                                  "@type": "Question",

                                  name: faq.question,

                                  acceptedAnswer: {
                                      "@type": "Answer",
                                      text: faq.answer,
                                  },
                              })
                          ),
                      },
                  ]
                : []),
        ],
    };

    /**
     * Initial product mapping for the quote funnel.
     */
    const initialProductMap: Record<string, ProductId> = {
        vida: "seguro-vida",
        salud: "salud-medicina-prepagada",
        autos: "todo-riesgo-autos",
        hogar: "seguro-hogar",
        mascotas: "seguro-mascotas",
        "vida-deudor": "seguro-vida-deudor",
        exequial: "otros-persona",
        educativo: "otros-persona",
        "responsabilidad-civil-personal": "otros-persona",
        empresariales: "pyme",
        transporte: "transporte",
        cumplimiento: "cumplimiento",
        "responsabilidad-civil-empresarial":
            "responsabilidad-civil",
        colectivos: "salud-colectivo",
        "arl-vida-grupo": "arl",
        copropiedades: "copropiedades",
    };

    return (
        <div className="bg-transparent pb-24">
            {/* Structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />

            {/* Hero Header */}
            <section className="relative overflow-hidden py-24 lg:py-32">
                {/* Background Image / Overlay */}
                <div className="absolute inset-0">
                    {service.image ? (
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <div
                            className={`h-full w-full bg-gradient-to-br ${service.gradient}`}
                        />
                    )}

                    <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply" />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/20 to-transparent" />
                </div>

                <Container className="relative pt-8">
                    <div className="mb-8">
                        <div className="text-white/80">
                            <Breadcrumbs
                                variant="dark"
                                items={[
                                    {
                                        label:
                                            service.category ===
                                            "empresa"
                                                ? "Seguros Empresas"
                                                : "Seguros Personas",

                                        href:
                                            service.category ===
                                            "empresa"
                                                ? "/servicios/empresas"
                                                : "/servicios/personas",
                                    },

                                    {
                                        label: service.title,
                                    },
                                ]}
                            />
                        </div>
                    </div>

                    <div className="max-w-3xl">
                        <div className="mb-6 flex items-center gap-4">
                            <div
                                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                                    service.image
                                        ? "bg-white/20 backdrop-blur-md text-white"
                                        : "bg-white text-slate-900"
                                } shadow-xl`}
                            >
                                <service.icon className="h-8 w-8" />
                            </div>

                            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
                                <Shield className="mr-1.5 h-3.5 w-3.5" />
                                Cobertura Premium
                            </span>
                        </div>

                        <h1 className="mb-6 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            {service.seoH1 || service.title}
                        </h1>

                        <p className="max-w-2xl text-justify text-xl leading-relaxed text-white/90 text-shadow">
                            {service.fullDescription}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <Container className="relative z-10 mt-12 lg:-mt-12">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Features List */}
                    <div className="space-y-8 lg:col-span-2">
                        <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-900/5">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">
                                ¿Qué incluye?
                            </h2>

                            <div className="grid gap-6 md:grid-cols-2">
                                {service.features.map(
                                    (feature, idx) => (
                                        <div
                                            key={idx}
                                            className="rounded-xl border border-slate-100 bg-slate-50/50 p-5 transition-colors hover:border-slate-200"
                                        >
                                            <h3 className="mb-2 flex items-center gap-2 font-semibold text-slate-900">
                                                <CheckCircle2
                                                    className={`h-5 w-5 ${service.color.replace(
                                                        "text-",
                                                        "text-opacity-80 "
                                                    )}`}
                                                />

                                                {feature.title}
                                            </h3>

                                            <p className="text-justify text-sm leading-relaxed text-slate-600">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* SEO Content */}
                        <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-900/5">
                            <h2 className="mb-4 text-2xl font-bold text-slate-900">
                                {service.title} en Colombia: coberturas,
                                beneficios y asesoría
                            </h2>

                            <div className="space-y-4 leading-8 text-slate-600 [text-align:justify]">
                                {seoParagraphs.map(
                                    (paragraph, index) => (
                                        <p key={index}>
                                            {paragraph}
                                        </p>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Ideal For + Related Searches */}
                        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
                            <div className="rounded-3xl border border-slate-100 bg-white p-8">
                                <h2 className="mb-4 text-xl font-bold text-slate-900">
                                    ¿Para quién es ideal este{" "}
                                    {service.category === "empresa"
                                        ? "seguro empresarial"
                                        : "seguro"}
                                    ?
                                </h2>

                                <div className="space-y-4">
                                    {idealForItems.map(
                                        (item, index) => (
                                            <div
                                                key={index}
                                                className="flex gap-3"
                                            >
                                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />

                                                <p className="leading-relaxed text-slate-600">
                                                    {item}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
                                <h2 className="mb-4 text-xl font-bold">
                                    Búsquedas relacionadas
                                </h2>

                                <div className="flex flex-wrap gap-3">
                                    {service.seoKeywords.map(
                                        (keyword) => (
                                            <span
                                                key={keyword}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85"
                                            >
                                                {keyword}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        {service.faqs &&
                            service.faqs.length > 0 && (
                                <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-900/5">
                                    <h2 className="mb-6 text-2xl font-bold text-slate-900">
                                        Preguntas Frecuentes
                                    </h2>

                                    <div className="space-y-6">
                                        {service.faqs.map(
                                            (faq, idx) => (
                                                <div
                                                    key={idx}
                                                    className={
                                                        idx !== 0
                                                            ? "border-t border-slate-100 pt-6"
                                                            : ""
                                                    }
                                                >
                                                    <h3 className="mb-2 font-semibold text-slate-900">
                                                        {
                                                            faq.question
                                                        }
                                                    </h3>

                                                    <p className="text-justify text-sm leading-relaxed text-slate-600">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}

                        {/* Important Information */}
                        <div className="rounded-3xl border border-slate-100 bg-white p-8">
                            <h2 className="mb-4 text-xl font-bold text-slate-900">
                                Información Importante
                            </h2>

                            <p className="mb-4 text-justify text-slate-600">
                                Cada póliza tiene condiciones específicas
                                que se adaptan a tu perfil. Nuestros asesores
                                analizarán tu caso para ofrecerte la mejor
                                opción del mercado.
                            </p>

                            <p className="text-justify text-sm italic text-slate-500">
                                * Aplican términos y condiciones de cada
                                aseguradora aliada.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <div>
                        <div className="rounded-3xl p-0 shadow-none xl:sticky xl:top-28">
                            <h3 className="mb-2 px-4 pt-4 text-xl font-bold text-slate-900">
                                {service.category === "empresa"
                                    ? "Solicita asesoría empresarial"
                                    : "Solicita tu cotización"}
                            </h3>

                            <p className="mb-6 px-4 text-justify text-sm text-slate-600">
                                {service.category === "empresa"
                                    ? `Ingresa tus datos corporativos y un asesor experto se contactará contigo para estructurar tu plan de ${service.title}.`
                                    : `Ingresa tus datos básicos y te presentaremos las mejores opciones en ${service.title}.`}
                            </p>

                            <div className="w-full">
                                <QuoteFunnel
                                    initialType={
                                        service.quoteType as
                                            | "auto"
                                            | "salud"
                                            | "empresarial"
                                            | "cumplimiento"
                                            | "vida"
                                    }
                                    initialProductId={
                                        initialProductMap[
                                            service.slug
                                        ]
                                    }
                                    variant="compact"
                                />
                            </div>

                            <div className="mt-4 flex items-center justify-center gap-2 pb-2 text-xs text-slate-400">
                                <Shield className="h-4 w-4" />
                                Tus datos están en un entorno seguro
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
