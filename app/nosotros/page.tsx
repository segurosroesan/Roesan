"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Users, Target, Award, Handshake, Sparkles, UserCircle2 } from "lucide-react";
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
        { name: "Patricia Ortegón", role: "Directora Administrativa", image: "/images/equipo/Patricia.jpeg" },
        { name: "Federico López", role: "Gestor Comercial", image: "/images/equipo/Federico.jpeg", position: "object-[center_20%]" },
        { name: "Adriana Garzón", role: "Ejecutiva de Autos" },
        { name: "Jose Rodríguez", role: "Ejecutivo Líneas Personales", image: "/images/equipo/Jose.jpeg" },
        { name: "Alejandro Sarmiento", role: "Auxiliar Operativo", image: "/images/equipo/Alejandro.jpeg" },
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
                    <div className="absolute inset-0 bg-slate-900/45" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/20 to-transparent" />
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
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
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
                                        la protección se construye desde la <strong>confianza</strong>, el <strong>respaldo</strong> y la
                                        tranquilidad de saber que siempre hay alguien respondiendo.
                                    </p>
                                </div>

                                <p>
                                    Nuestra historia comenzó en <strong>1982</strong>, cuando{" "}
                                    <strong>Roberto Estrada Ángel</strong> fundó <strong>Roesan</strong> con una visión clara:
                                    construir una empresa cercana, seria y confiable.
                                    Años después, <strong>María Eugenia de Estrada</strong> asumió el liderazgo y se convirtió en el gran
                                    pilar de nuestra consolidación. Con una trayectoria destacada en <strong>Seguros Bolívar</strong>,
                                    donde desarrolló una carrera ejemplar y fue reconocida en múltiples ocasiones por su desempeño
                                    comercial, logró fortalecer una relación de respaldo y confianza con la compañía que nos ha
                                    acompañado durante décadas.
                                </p>

                                <p>
                                    Nuestro verdadero legado no se ha construido desde la venta, sino desde la asesoría. Durante más de cuatro
                                    décadas, hemos guiado a clientes corporativos y personales en la estructuración de coberturas y pólizas,
                                    ayudándolos a tomar decisiones clave para proteger su patrimonio, sus negocios, sus familias y su futuro.
                                    Hemos estado presentes en cada etapa: desde la prevención y la planeación, hasta el acompañamiento cercano
                                    en momentos críticos, incluyendo reclamaciones y siniestros, cuando más se necesita experiencia y respaldo.
                                </p>

                                <p>
                                    Hoy, ese legado continúa con <strong>Carmen Eugenia Estrada</strong>, quien creció dentro de este
                                    oficio, aprendiendo de cerca cada detalle del negocio junto a su madre. Después de años de formación
                                    y experiencia, hoy lidera <strong>Roesan</strong> con el mismo compromiso de servicio que nos ha
                                    caracterizado siempre, sumando una visión moderna, estratégica y alineada con las nuevas necesidades
                                    del mercado.
                                </p>

                                <p>
                                    Actualmente trabajamos con <strong>13 aseguradoras líderes del país</strong>, lo que nos
                                    permite estructurar soluciones a la medida, con opciones competitivas y una asesoría verdaderamente independiente.
                                    Nuestro valor está en entender cada necesidad y diseñar la mejor combinación de coberturas y pólizas con
                                    criterio y conocimiento.
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
                                    En <strong>Roesan</strong> no solo gestionamos riesgos. Construimos relaciones de largo plazo, damos
                                    tranquilidad y acompañamos a nuestros clientes con la experiencia de un legado familiar que ha
                                    sabido adaptarse, crecer y responder con solidez en cada momento. Porque proteger bien no es solo
                                    tener una póliza: es contar con un aliado que te asesora y está a tu lado cuando más importa.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="hidden lg:flex flex-col rounded-3xl bg-[#1e103c] p-6"
                        >
                            <div className="mb-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Nuestro Equipo</span>
                                <h3 className="mt-1 text-4xl font-serif font-medium text-white">Las personas detrás de Roesan</h3>
                            </div>

                            {/* Carrusel vertical con scroll automático */}
                            <div className="relative overflow-hidden rounded-2xl" style={{ height: "620px" }}>
                                {/* Máscaras de degradado morado */}
                                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#1e103c] to-transparent z-10 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1e103c] to-transparent z-10 pointer-events-none" />

                                <div className="team-scroll-vertical flex flex-col gap-4 pr-1">
                                    {[...team, ...team].map((member, idx) => (
                                        <div
                                            key={idx}
                                            className="flex-shrink-0 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-5 hover:bg-white/20 transition-all duration-300"
                                        >
                                            <div className="relative h-[88px] w-[88px] flex-shrink-0 rounded-full overflow-hidden bg-gradient-to-tr from-purple-200 to-indigo-200 border-2 border-white/20 flex items-center justify-center shadow-inner">
                                                {(member as any).image ? (
                                                    <Image
                                                        src={(member as any).image}
                                                        alt={member.name}
                                                        fill
                                                        className={`object-cover ${(member as any).position || "object-center"}`}
                                                    />
                                                ) : (
                                                    <UserCircle2 className="w-11 h-11 text-purple-200" />
                                                )}
                                            </div>
                                            <div>
                                                <p className="text-lg font-bold text-white leading-tight">{member.name}</p>
                                                <p className="text-base text-cyan-400 font-medium mt-1">{member.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <style dangerouslySetInnerHTML={{__html: `
                                @keyframes scroll-v {
                                    0%   { transform: translateY(0); }
                                    100% { transform: translateY(calc(-50% - 8px)); }
                                }
                                .team-scroll-vertical {
                                    animation: scroll-v 22s linear infinite;
                                }
                                .team-scroll-vertical:hover {
                                    animation-play-state: paused;
                                }
                            `}} />
                        </motion.div>
                    </div>
                </Container>
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
