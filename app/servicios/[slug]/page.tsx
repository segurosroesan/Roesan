import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/services-data";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Shield } from "lucide-react";
import Image from "next/image";
import QuoteFunnel from "@/components/home/QuoteFunnel";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { ProductId } from "@/components/home/QuoteFunnel";

// Using native Next.js params typing
type Props = {
    params: Promise<{ slug: string }>;
};

// Generate metadata for SEO with async handling
export async function generateMetadata({ params }: Props) {
    const resolvedParams = await params;
    const service = servicesData.find((s) => s.slug === resolvedParams.slug);

    if (!service) return { title: "Servicio no encontrado" };

    return {
        title: `${service.title} | Roesan Seguros`,
        description: service.shortDescription,
        keywords: service.seoKeywords?.join(", ") || "",
    };
}

// Generate static params for all services to be static generated at build time
export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailPage({ params }: Props) {
    const resolvedParams = await params;
    const service = servicesData.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        notFound();
    }

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
        "responsabilidad-civil-empresarial": "responsabilidad-civil",
        colectivos: "salud-colectivo",
        "arl-vida-grupo": "arl",
        copropiedades: "copropiedades",
    };

    return (
        <div className="bg-white pb-24">
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
                        <div className={`h-full w-full bg-gradient-to-br ${service.gradient}`} />
                    )}
                    <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                </div>

                <Container className="relative pt-8">
                    <div className="mb-8">
                        {/* We use a custom dark theme version or just render it since the background is dark */}
                        <div className="text-white/80">
                            <Breadcrumbs 
                                variant="dark"
                                items={[
                                    { 
                                        label: service.category === 'empresa' ? 'Seguros Empresas' : 'Seguros Personas', 
                                        href: service.category === 'empresa' ? '/servicios/empresas' : '/servicios/personas' 
                                    },
                                    { label: service.title }
                                ]} 
                            />
                        </div>
                    </div>

                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            {/* Icon Container */}
                            <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.image ? 'bg-white/20 backdrop-blur-md text-white' : 'bg-white text-slate-900'} shadow-xl`}>
                                <service.icon className="h-8 w-8" />
                            </div>
                            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
                                <Shield className="mr-1.5 h-3.5 w-3.5" /> Cobertura Premium
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-[1.1]">
                            {service.title}
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed max-w-2xl text-shadow">
                            {service.fullDescription}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <Container className="mt-12 lg:-mt-12 relative z-10">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Features List */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-900/5">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Qué incluye?</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="rounded-xl border border-slate-100 bg-slate-50/50 p-5 hover:border-slate-200 transition-colors">
                                        <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-2">
                                            <CheckCircle2 className={`h-5 w-5 ${service.color.replace('text-', 'text-opacity-80 ')}`} />
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {service.faqs && service.faqs.length > 0 && (
                            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-900/5">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Preguntas Frecuentes</h2>
                                <div className="space-y-6">
                                    {service.faqs.map((faq, idx) => (
                                        <div key={idx} className={`${idx !== 0 ? 'border-t border-slate-100 pt-6' : ''}`}>
                                            <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                                            <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">Información Importante</h2>
                            <p className="text-slate-600 mb-4">
                                Cada póliza tiene condiciones específicas que se adaptan a tu perfil. Nuestros asesores analizarán tu caso para ofrecerte la mejor opción del mercado.
                            </p>
                            <p className="text-sm text-slate-500 italic">
                                * Aplican términos y condiciones de cada aseguradora aliada.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <div>
                        <div className="xl:sticky xl:top-28 rounded-3xl bg-white p-2 sm:p-4 shadow-xl ring-1 ring-slate-900/5">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 px-4 pt-4">
                                {service.category === 'empresa' ? 'Solicita asesoría empresarial' : 'Solicita tu cotización'}
                            </h3>
                            <p className="text-slate-600 text-sm mb-6 px-4">
                                {service.category === 'empresa'
                                    ? `Ingresa tus datos corporativos y un asesor experto se contactará contigo para estructurar tu plan de ${service.title}.`
                                    : `Ingresa tus datos básicos y te presentaremos las mejores opciones en ${service.title}.`}
                            </p>

                            <div className="w-full">
                                <QuoteFunnel 
                                    initialType={service.quoteType as "auto" | "salud" | "empresarial" | "cumplimiento" | "vida"}
                                    initialProductId={initialProductMap[service.slug]}
                                    variant="compact"
                                />
                            </div>

                            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400 pb-2">
                                <Shield className="h-4 w-4" /> Tus datos están en un entorno seguro
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
