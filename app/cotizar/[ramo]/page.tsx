import { getQuoteData, getQuoteDataList } from "@/lib/quote-data";
import { servicesData } from "@/lib/services-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import QuoteFunnel from "@/components/home/QuoteFunnel";
import { CheckCircle2, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {
    params: Promise<{ ramo: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { ramo } = await params;
    const data = getQuoteData(ramo);
    
    if (!data) return {};

    return {
        title: data.title,
        description: data.description,
        keywords: data.keywords.join(", "),
        openGraph: {
            title: data.title,
            description: data.description,
            url: `https://roesan.com.co/cotizar/${data.slug}`,
            siteName: "Roesan Seguros",
            images: [
                {
                    url: "/images/og-roesan.jpg",
                    width: 1200,
                    height: 630,
                    alt: data.title,
                },
            ],
            locale: "es_CO",
            type: "website",
        },
    };
}

export async function generateStaticParams() {
    return getQuoteDataList().map((post) => ({
        ramo: post.slug,
    }));
}

export default async function QuoteLandingPage({ params }: Props) {
    const { ramo } = await params;
    const data = getQuoteData(ramo);

    if (!data) {
        notFound();
    }

    const linkedService = servicesData.find(s => s.slug === data.serviceSlug);

    // Provide default visual fallbacks if linkedService isn't found
    const bgGradient = linkedService?.gradient || "from-purple-900 to-indigo-900";
    const ServiceIcon = linkedService?.icon || Shield;
    const colorTheme = linkedService?.color || "text-purple-600";
    const bgTheme = linkedService?.bg || "bg-purple-50";

    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            {/* Premium Hero Header (Adapted from Servicios) */}
            <section className="relative overflow-hidden py-24 lg:py-32">
                {/* Background Image / Overlay */}
                <div className="absolute inset-0">
                    {linkedService?.image ? (
                        <Image
                            src={linkedService.image}
                            alt={data.h1}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <div className={`h-full w-full bg-gradient-to-br ${bgGradient}`} />
                    )}
                    <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent" />
                </div>

                <Container className="relative z-10">
                    <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
                    </Link>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                        {/* Text Content */}
                        <div className="lg:col-span-7 xl:col-span-6 space-y-6">
                            <div className="flex items-center gap-4 mb-4">
                                {/* Icon Container */}
                                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${linkedService?.image ? 'bg-white/20 backdrop-blur-md text-white' : 'bg-white text-slate-900'} shadow-xl`}>
                                    {<ServiceIcon className="h-7 w-7" />}
                                </div>
                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
                                    <span className="relative flex h-2 w-2 mr-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                                    </span>
                                    Cotización 100% Digital
                                </span>
                            </div>

                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl mb-6 shadow-sm leading-tight text-balance">
                                {data.h1}
                            </h1>
                            
                            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl text-shadow">
                                {data.subtitle}
                            </p>

                            <div className="pt-6 space-y-4">
                                {data.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-white/90">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
                                        <span className="text-lg font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="pt-8 flex items-center gap-4 text-sm text-white/80 border-t border-white/10 mt-8">
                                <Shield className="w-8 h-8 text-cyan-400" />
                                <p>Proceso respaldado por expertos con más de 40 años de experiencia comprobada.</p>
                            </div>
                        </div>

                        {/* Quote Funnel Container */}
                        <div className="lg:col-span-5 xl:col-span-6 lg:mt-0 relative z-20">
                            {/* Visual tweak to make it look embedded in the hero */}
                            <div className="bg-white/10 p-2 sm:p-3 rounded-3xl backdrop-blur-md shadow-2xl">
                                <QuoteFunnel initialType={data.id as any} />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Added Value / Trust Section */}
            <section className="py-16 bg-white border-b border-slate-100">
                <Container>
                    <div className="text-center max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl font-bold text-slate-900">Por qué elegir a Roesan</h2>
                        <p className="text-slate-600">Más allá de venderte una póliza, nos convertimos en tu departamento de seguros. Nos encargamos de todo el papeleo y las negociaciones por ti.</p>
                        
                        <div className="grid md:grid-cols-3 gap-8 text-center pt-8">
                            <div className="space-y-4">
                                <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mx-auto text-purple-600">
                                    <span className="text-xl font-bold">1</span>
                                </div>
                                <h3 className="font-semibold text-slate-900">Análisis Comparativo</h3>
                                <p className="text-sm text-slate-500">Comparamos entre las principales aseguradoras (Sura, Allianz, Mapfre, etc.) para darte opciones reales.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center mx-auto text-cyan-600">
                                    <span className="text-xl font-bold">2</span>
                                </div>
                                <h3 className="font-semibold text-slate-900">Asesoría Imparcial</h3>
                                <p className="text-sm text-slate-500">Al ser multimarca, nuestra lealtad es contigo, no con una aseguradora en particular.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                                    <span className="text-xl font-bold">3</span>
                                </div>
                                <h3 className="font-semibold text-slate-900">Gestión de Siniestros</h3>
                                <p className="text-sm text-slate-500">El verdadero valor de un seguro se ve en el siniestro. Nosotros peleamos los reclamos por ti.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
