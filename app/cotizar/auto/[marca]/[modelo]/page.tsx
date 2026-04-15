import { getCarBySlugs, getAllCarSlugs } from "@/lib/car-catalog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import QuoteFunnel from "@/components/home/QuoteFunnel";
import { CheckCircle2, Shield, ArrowLeft, Clock, Users, Star, Car } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {
    params: Promise<{ marca: string; modelo: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { marca, modelo } = await params;
    const car = getCarBySlugs(marca, modelo);

    if (!car) return {};

    const title = `Seguro Todo Riesgo para ${car.marca} ${car.modelo} | Precios 2026`;
    const description = `Cotiza tu seguro todo riesgo para ${car.marca} ${car.modelo} en Colombia. Compara precios desde $${car.precioMensualEstimado.toLocaleString("es-CO")} mensuales. Asesoría experta y gratuita.`;

    return {
        title,
        description,
        keywords: `seguro todo riesgo ${car.marca} ${car.modelo}, precio seguro ${car.marca} ${car.modelo}, póliza todo riesgo ${car.marca}, seguros para ${car.modelo} colombia`,
        openGraph: {
            title,
            description,
            url: `https://roesan.com.co/cotizar/auto/${marca}/${modelo}`,
            siteName: "Roesan Seguros",
            images: [
                {
                    url: car.imagenReferencia,
                    width: 1200,
                    height: 630,
                    alt: `Seguro para ${car.marca} ${car.modelo}`,
                },
            ],
            locale: "es_CO",
            type: "website",
        },
    };
}

export async function generateStaticParams() {
    return getAllCarSlugs();
}

const testimonials = [
    {
        quote: "Pude cotizar rápidamente el seguro de mi carro sin complicaciones. La asesoría fue excelente.",
        author: "Felipe T.",
        location: "Bogotá",
        stars: 5,
    },
    {
        quote: "No sabía si asegurar mi vehículo valía la pena hasta que vi la comparativa que me enviaron, la mejor inversión.",
        author: "María V.",
        location: "Medellín",
        stars: 5,
    },
];

export default async function CarInsuranceLandingPage({ params }: Props) {
    const { marca, modelo } = await params;
    const car = getCarBySlugs(marca, modelo);

    if (!car) {
        notFound();
    }

    const bgGradient = "from-slate-900 to-indigo-900";

    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            {/* Premium Hero Header */}
            <section className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
                <div className="absolute inset-0">
                    <div className={`h-full w-full bg-gradient-to-br ${bgGradient}`} />
                    <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent" />
                </div>

                <Container className="relative z-10">
                    <Link href="/cotizar/seguro-de-auto" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Seguros de Auto
                    </Link>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                        {/* Text Content */}
                        <div className="lg:col-span-7 xl:col-span-6 space-y-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-white shadow-xl">
                                    <Car className="h-7 w-7" />
                                </div>
                                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
                                    <span className="relative flex h-2 w-2 mr-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                                    </span>
                                    Asegura tu {car.marca} hoy mismo
                                </span>
                            </div>

                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl mb-6 shadow-sm leading-tight text-balance">
                                Cotiza el Seguro Todo Riesgo para tu <span className="text-cyan-400">{car.marca} {car.modelo}</span>
                            </h1>

                            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">
                                Conducir un {car.tipo} como tu {car.modelo} implica riesgos que el SOAT no cubre. Compara pólizas con las aseguradoras top en Colombia y protege tu inversión.
                            </p>

                            <div className="pt-4 space-y-3">
                                <div className="flex items-start gap-3 text-white/90">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                    <span className="text-base font-medium">Precios estimados desde <strong>${car.precioMensualEstimado.toLocaleString("es-CO")} mensuales</strong></span>
                                </div>
                                <div className="flex items-start gap-3 text-white/90">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                    <span className="text-base font-medium">Asistencia y Grúa 24/7 sin límites de eventos</span>
                                </div>
                                <div className="flex items-start gap-3 text-white/90">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                    <span className="text-base font-medium">Cubrimos daños materiales de tu {car.modelo} y Responsabilidad Civil al 100%</span>
                                </div>
                            </div>

                            {/* Stats strip */}
                            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 mt-4">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white">#1</p>
                                    <p className="text-xs text-white/60">Elección para {car.marca}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white">+500</p>
                                    <p className="text-xs text-white/60">{car.modelo} Asegurados</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white">&lt; 2h</p>
                                    <p className="text-xs text-white/60">Aprobación rápida</p>
                                </div>
                            </div>
                        </div>

                        {/* Quote Funnel */}
                        <div className="lg:col-span-5 xl:col-span-6 lg:mt-0 relative z-20">
                            <div className="bg-white/10 p-2 sm:p-3 rounded-3xl backdrop-blur-md shadow-2xl">
                                <QuoteFunnel initialType="auto" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* How it works section */}
            <section className="py-16 bg-white border-b border-slate-100">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">
                                ¿Por qué cotizar tu {car.marca} con nosotros?
                            </h2>
                            <p className="text-slate-500 max-w-2xl mx-auto">
                                No somos una aseguradora, somos tu asesor experto imparcial. Tu {car.modelo} merece la mejor protección del mercado en las vías colombianas.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            <div className="relative bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Asesoría de Expertos</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Conocemos qué coberturas convienen más para los {car.marca} {car.modelo} según índices de hurto y accidentalidad.
                                </p>
                            </div>

                            <div className="relative bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-6 h-6 text-cyan-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Comparativa Imparcial</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Obtenemos la cotización de tu póliza de las principales compañías: Sura, Allianz, Equidad, Mapfre, Bolívar, entre otras.
                                </p>
                            </div>

                            <div className="relative bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">Gestión Transparente</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Te evitamos burocracia en caso de siniestros. Te asistimos durante toda la vigencia de tu vehículo.
                                </p>
                            </div>
                        </div>

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

                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-4 text-center sm:text-left">
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-primary shrink-0" />
                                <p className="text-sm text-slate-700 font-medium">
                                    Protege tu {car.modelo} sin papeleos interminables. Requisitos sencillos y ágiles.
                                </p>
                            </div>
                            <a
                                href="#top"
                                className="text-sm font-bold text-primary hover:text-primary/80 whitespace-nowrap flex items-center gap-1 transition-colors"
                            >
                                Cotizar en 1 minuto →
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
