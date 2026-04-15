import { getQuoteData, getQuoteDataList } from "@/lib/quote-data";
import { servicesData } from "@/lib/services-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import QuoteFunnel from "@/components/home/QuoteFunnel";
import { CheckCircle2, Shield, ArrowLeft, Clock, Users, Star } from "lucide-react";
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

const testimonials = [
    {
        quote: "En menos de una hora tenía 3 opciones comparadas con precios reales. Excelente servicio.",
        author: "Carlos M.",
        location: "Bogotá",
        stars: 5,
    },
    {
        quote: "Asesoría imparcial y rápida. Nos ahorraron más del 20% frente a lo que traíamos cotizado.",
        author: "Patricia G.",
        location: "Medellín",
        stars: 5,
    },
];

export default async function QuoteLandingPage({ params }: Props) {
    const { ramo } = await params;
    const data = getQuoteData(ramo);

    if (!data) {
        notFound();
    }

    const linkedService = servicesData.find(s => s.slug === data.serviceSlug);

    const bgGradient = linkedService?.gradient || "from-purple-900 to-indigo-900";
    const ServiceIcon = linkedService?.icon || Shield;

    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            {/* Premium Hero Header */}
            <section className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
                {/* Background */}
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
                                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${linkedService?.image ? 'bg-white/20 backdrop-blur-md text-white' : 'bg-white text-slate-900'} shadow-xl`}>
                                    {<ServiceIcon className="h-7 w-7" />}
                                </div>
                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
                                    <span className="relative flex h-2 w-2 mr-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                                    </span>
                                    Cotización 100% Gratuita
                                </span>
                            </div>

                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl mb-6 shadow-sm leading-tight text-balance">
                                {data.h1}
                            </h1>

                            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
                                {data.subtitle}
                            </p>

                            <div className="pt-4 space-y-3">
                                {data.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-white/90">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                        <span className="text-base font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Stats strip */}
                            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 mt-4">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white">+40</p>
                                    <p className="text-xs text-white/60">Años de experiencia</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white">+1.2K</p>
                                    <p className="text-xs text-white/60">Pólizas activas</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white">&lt; 2h</p>
                                    <p className="text-xs text-white/60">Tiempo de respuesta</p>
                                </div>
                            </div>
                        </div>

                        {/* Quote Funnel */}
                        <div className="lg:col-span-5 xl:col-span-6 lg:mt-0 relative z-20">
                            <div className="bg-white/10 p-2 sm:p-3 rounded-3xl backdrop-blur-md shadow-2xl">
                                <QuoteFunnel initialType={data.id as any} />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* How it works — CRO-optimized trust section */}
            <section className="py-16 bg-white border-b border-slate-100">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">
                                Así funciona tu asesoría gratuita
                            </h2>
                            <p className="text-slate-500 max-w-2xl mx-auto">
                                No somos una aseguradora. Somos tu aliado independiente que negocia por ti con las mejores compañías del mercado.
                            </p>
                        </div>

                        {/* Process steps */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            <div className="relative bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow">1</div>
                                <h3 className="font-bold text-slate-900 mb-2">Analizamos tu perfil</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Un asesor experto revisa tu caso y establece qué coberturas realmente necesitas — sin venderte lo que no requieres.
                                </p>
                            </div>

                            <div className="relative bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-6 h-6 text-cyan-600" />
                                </div>
                                <div className="absolute -top-3 -right-3 bg-cyan-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow">2</div>
                                <h3 className="font-bold text-slate-900 mb-2">Comparamos el mercado</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Solicitamos cotizaciones a Sura, Allianz, Mapfre y otras líderes. Recibes la comparativa con precios reales, no estimados.
                                </p>
                            </div>

                            <div className="relative bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div className="absolute -top-3 -right-3 bg-emerald-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow">3</div>
                                <h3 className="font-bold text-slate-900 mb-2">Tú eliges sin presión</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Te explicamos cada opción con claridad. Tú decides. Si avanzas, nos encargamos de todo el papeleo y la emisión.
                                </p>
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {testimonials.map((t, i) => (
                                <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <div className="flex gap-0.5 mb-3">
                                        {Array.from({ length: t.stars }).map((_, s) => (
                                            <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-slate-700 text-sm leading-relaxed italic mb-4">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                                            {t.author[0]}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">{t.author}</p>
                                            <p className="text-xs text-slate-500">{t.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Urgency footer bar */}
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-4 text-center sm:text-left">
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-primary shrink-0" />
                                <p className="text-sm text-slate-700 font-medium">
                                    Respondemos en menos de 2 horas en horario hábil. Muchas veces bastante antes.
                                </p>
                            </div>
                            <a
                                href="#top"
                                className="text-sm font-bold text-primary hover:text-primary/80 whitespace-nowrap flex items-center gap-1 transition-colors"
                            >
                                Cotizar ahora →
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
