"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Users, Target, Award, Handshake, Sparkles, Landmark, ShieldCheck, UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const sliderRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        if (sliderRef.current) sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    };
    const scrollRight = () => {
        if (sliderRef.current) sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    };

    const team = [
        { name: "Carmen Eugenia Estrada Grueso", role: "Gerente General" },
        { name: "Jonathan Jordan", role: "Gerente" },
        { name: "Ana Lucia Grueso H", role: "Gerente" },
        { name: "Patricia Ortegón", role: "Directora Administrativa" },
        { name: "Federico López", role: "Gestor Comercial" },
        { name: "Adriana Garzón", role: "Ejecutiva de Autos" },
        { name: "Jose Rodríguez", role: "Ejecutivo Líneas Personales" },
        { name: "Alejandro Sarmiento", role: "Auxiliar Operativo" },
    ];

    const values = [
        {
            title: "Excelencia",
            description: "Buscamos la más alta calidad en cada póliza y en cada interacción con nuestros clientes.",
            icon: Award,
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            title: "Cercanía",
            description: "Construimos relaciones de confianza a largo plazo. Conocemos a cada cliente por su nombre.",
            icon: Users,
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            title: "Transparencia",
            description: "Brindamos información clara y honesta sobre coberturas, costos y exclusiones.",
            icon: Target,
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            title: "Compromiso",
            description: "Estamos contigo en los momentos que más importan, especialmente cuando ocurre un siniestro.",
            icon: Handshake,
            color: "text-primary",
            bg: "bg-primary/10"
        }
    ];

    return (
        <div className="bg-transparent">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32 bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner_nosotros.png"
                        alt="Equipo Roesan Seguros"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                </div>

                <Container className="relative text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]"
                    >
                        Nuestra Historia
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto mt-6 max-w-2xl text-lg text-slate-300"
                    >
                        Más de 40 años acompañando a familias, empresas y empresarios con confianza, criterio y respaldo real.
                    </motion.p>
                </Container>
            </section>

            {/* History Section */}
            <section className="py-24 bg-[radial-gradient(circle_at_top_left,_rgba(97,187,228,0.08),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(81,64,141,0.08),_transparent_24%)]">
                <Container>
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Sparkles className="h-6 w-6" />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Un legado construido con confianza</h2>
                            </div>

                            <div className="space-y-6 text-[1.05rem] leading-8 text-slate-600 [text-align:justify]">
                                <div className="rounded-2xl border border-primary/10 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                                    <p className="text-xl font-medium text-slate-900 [text-align:justify]">
                                        Durante más de <strong>40 años</strong>, en <strong>Roesan</strong> hemos acompañado a familias,
                                        empresas y empresarios en Colombia con una convicción que sigue intacta:
                                        los seguros se basan en la <strong>confianza</strong>, el <strong>respaldo</strong> y la
                                        tranquilidad de saber que siempre hay alguien respondiendo.
                                    </p>
                                </div>

                                <p>
                                    Nuestra historia comenzó en <strong>1982</strong>, cuando{" "}
                                    <strong>Roberto Estrada Ángel</strong> fundó <strong>Roesan</strong> con una visión clara:
                                    construir una empresa cercana, seria y confiable.
                                    Años después, <strong>María Eugenia Estrada</strong> asumió el liderazgo y se convirtió en el gran
                                    pilar de nuestra consolidación. Con una trayectoria destacada en <strong>Seguros Bolívar</strong>,
                                    donde desarrolló una carrera ejemplar y fue reconocida en múltiples ocasiones por su desempeño
                                    comercial, logró fortalecer una relación de respaldo y confianza con la compañía que nos ha
                                    acompañado durante décadas.
                                </p>

                                <p>
                                    Pero nuestro verdadero legado no se ha construido solo vendiendo pólizas. Durante más de cuatro
                                    décadas, hemos asesorado a clientes corporativos y personales en las decisiones más importantes
                                    para proteger su patrimonio, sus negocios, sus familias y su futuro. Hemos estado presentes en
                                    cada etapa: desde la prevención y la planeación, hasta el acompañamiento cercano en momentos
                                    críticos, incluyendo reclamaciones y siniestros, cuando más se necesita experiencia y respaldo.
                                </p>

                                <p>
                                    Hoy, ese legado continúa con <strong>Carmen Eugenia Estrada</strong>, quien creció dentro de este
                                    oficio, aprendiendo de cerca cada detalle del negocio junto a su madre. Después de años de formación
                                    y experiencia, hoy lidera <strong>Roesan</strong> con el mismo compromiso de servicio que nos ha
                                    caracterizado siempre, sumando una visión moderna, estratégica y cercana a las nuevas necesidades
                                    del mercado.
                                </p>

                                <p>
                                    Actualmente trabajamos con más de <strong>nueve aseguradoras líderes del país</strong>, lo que nos
                                    permite ofrecer a cada cliente un portafolio amplio de soluciones, opciones competitivas y una
                                    asesoría verdaderamente personalizada. Nuestro valor está en entender cada necesidad y encontrar
                                    la mejor alternativa con independencia, criterio y conocimiento.
                                </p>

                                <div className="rounded-2xl border border-cyan-200/60 bg-cyan-50/70 p-6">
                                    <p className="text-slate-700 [text-align:justify]">
                                        En <strong>2026</strong> iniciamos una nueva etapa: nuestra <strong>renovación digital</strong>.
                                        Este proceso nace con un propósito claro: evolucionar junto con el mundo y seguir siendo el
                                        aliado de confianza de nuestros clientes en una época de transformación acelerada. Estamos
                                        incorporando tecnología, optimizando procesos y fortaleciendo nuestros canales de atención
                                        para ofrecer una experiencia más ágil, cercana y eficiente, sin perder lo que siempre nos ha
                                        diferenciado: el <strong>trato humano</strong>, la <strong>experiencia</strong> y el{" "}
                                        <strong>compromiso real</strong>.
                                    </p>
                                </div>

                                <p className="text-lg font-medium text-slate-900 [text-align:justify]">
                                    En <strong>Roesan</strong> no solo protegemos riesgos. Construimos relaciones de largo plazo, damos
                                    tranquilidad y acompañamos a nuestros clientes con la experiencia de un legado familiar que ha
                                    sabido adaptarse, crecer y responder con solidez en cada momento. Porque proteger bien no es solo
                                    tener una póliza: es contar con un aliado que esté a tu lado cuando más importa.
                                </p>
                            </div>
                        </motion.div>

                        {/* Visual Composition */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative lg:h-[620px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
                            <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-900/5 group bg-slate-900">
                                <Image
                                    src="/images/sede_roesan_clean_v2.png"
                                    alt="Sede Roesan"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>

                            <div className="relative z-20 -mt-20 mx-6 grid gap-4 rounded-[1.8rem] border border-slate-200 bg-white/95 p-6 shadow-2xl backdrop-blur-sm sm:grid-cols-3">
                                <div>
                                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <Landmark className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-semibold text-slate-900">Fundación</p>
                                    <p className="text-sm text-slate-500"><strong>1982</strong> marcó el inicio de una historia familiar sólida.</p>
                                </div>
                                <div>
                                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <ShieldCheck className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-semibold text-slate-900">Respaldo</p>
                                    <p className="text-sm text-slate-500">Más de <strong>9 aseguradoras líderes</strong> para asesoría independiente.</p>
                                </div>
                                <div>
                                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        <Sparkles className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-semibold text-slate-900">Nueva etapa</p>
                                    <p className="text-sm text-slate-500"><strong>2026</strong> impulsa nuestra renovación digital con foco humano.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-[#1e103c] overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
                <Container className="relative z-10">
                    <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-16">
                        <div>
                            <span className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">Nuestro Equipo</span>
                            <h2 className="mt-2 text-4xl font-serif font-medium text-white">Conoce a las personas<br />detrás de Roesan.</h2>
                        </div>
                    </div>

                    <div className="relative overflow-hidden flex pb-8 group">
                        {/* Gradient masks for infinite scroll effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1e103c] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1e103c] to-transparent z-10 pointer-events-none" />

                        <div className="animate-marquee flex gap-6 hover:animate-pause">
                            {[...team, ...team].map((member, idx) => (
                                <div
                                    key={idx}
                                    className="shrink-0 w-[280px] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:scale-105 duration-300 cursor-pointer"
                                >
                                    <div className="h-20 w-20 bg-gradient-to-tr from-purple-900/50 to-purple-800/50 rounded-full mb-6 flex items-center justify-center shadow-inner overflow-hidden relative group-hover:from-purple-600 group-hover:to-purple-500 transition-colors border border-white/5">
                                        <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <UserCircle2 className="w-10 h-10 text-purple-200 group-hover:text-cyan-400 transition-colors relative z-10" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">{member.name}</h3>
                                    <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
                
                <style dangerouslySetInnerHTML={{__html: `
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-50% - 12px)); }
                    }
                    .animate-marquee {
                        animation: scroll 35s linear infinite;
                    }
                    .animate-pause {
                        animation-play-state: paused;
                    }
                `}} />
            </section>

            {/* Values Section */}
            <section className="bg-transparent py-24">
                <Container>
                    <div className="mb-16">
                        <span className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Nuestros Valores</span>
                        <h2 className="mt-2 text-4xl font-serif font-medium text-slate-900">Lo que nos define.</h2>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, idx) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
                            >
                                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${value.bg} ${value.color}`}>
                                    <value.icon className="h-7 w-7" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-slate-900">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-justify">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
