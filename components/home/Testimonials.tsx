"use client";

import React from "react";
import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        quote: "Roesan nos ayudó a estructurar la póliza de Responsabilidad Civil de nuestra fábrica en tiempo récord. Su nivel técnico es invaluable.",
        author: "Carlos Mendoza",
        role: "Gerente de Planta",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "CM",
        colorFrom: "from-purple-500",
        colorTo: "to-indigo-600",
        rating: 5
    },
    {
        quote: "Asegurar el futuro de mi familia con un seguro de vida integral fue la mejor decisión. Nos explicaron cada detalle con muchísima empatía.",
        author: "Daniela Ortiz",
        role: "Cliente Seguros de Vida",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "DO",
        colorFrom: "from-rose-500",
        colorTo: "to-pink-600",
        rating: 5
    },
    {
        quote: "Como constructora, requerimos pólizas de cumplimiento muy complejas. Roesan siempre nos consigue las mejores tasas del mercado.",
        author: "Andrés Villamizar",
        role: "Director de Proyectos",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "AV",
        colorFrom: "from-blue-500",
        colorTo: "to-cyan-600",
        rating: 5
    },
    {
        quote: "Tuve un siniestro grave con mi vehículo en carretera. La atención de Roesan a las 3:00 AM fue inmediata y gestionaron todo con la aseguradora.",
        author: "Jorge Cárdenas",
        role: "Cliente Auto Todo Riesgo",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "JC",
        colorFrom: "from-emerald-500",
        colorTo: "to-teal-600",
        rating: 5
    },
    {
        quote: "Implementar nuestra póliza de salud corporativa para 50 empleados fue un éxito total. El equipo está más motivado y protegido.",
        author: "Sofía Londoño",
        role: "Directora de RRHH",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "SL",
        colorFrom: "from-fuchsia-500",
        colorTo: "to-purple-600",
        rating: 5
    },
    {
        quote: "Llevo 15 años confiando el seguro de hogar de mi familia a Roesan. Son honestos, transparentes y siempre están ahí cuando los necesitas.",
        author: "Héctor Ruiz",
        role: "Cliente Fidelizado",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "HR",
        colorFrom: "from-orange-500",
        colorTo: "to-red-600",
        rating: 5
    },
    {
        quote: "El seguro de Copropiedades que nos diseñaron salvó a nuestro conjunto de una cuota extraordinaria millonaria tras el fuerte invierno.",
        author: "Patricia Echeverri",
        role: "Admin. Inmobiliaria",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "PE",
        colorFrom: "from-violet-500",
        colorTo: "to-purple-600",
        rating: 5
    },
    {
        quote: "Nunca pensé que asegurar a mi mascota fuera tan útil. Un accidente de mi perro fue cubierto por la RC sin afectar mi bolsillo.",
        author: "Laura Jaramillo",
        role: "Cliente Hogar y Mascotas",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "LJ",
        colorFrom: "from-pink-500",
        colorTo: "to-rose-600",
        rating: 5
    },
    {
        quote: "Nuestra flota de camiones está cubierta 100%. Las reclamaciones se procesan ágilmente, lo cual es vital para nuestra logística.",
        author: "Fernando Arango",
        role: "Gerente Logístico",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "FA",
        colorFrom: "from-cyan-500",
        colorTo: "to-blue-600",
        rating: 5
    },
    {
        quote: "La asesoría para mi plan de retiro fue clara y ajustada a mi realidad. Hoy siento que mi futuro financiero está verdaderamente blindado.",
        author: "Camila Restrepo",
        role: "Cliente Inversión",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "CR",
        colorFrom: "from-amber-500",
        colorTo: "to-orange-600",
        rating: 5
    }
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-1 mb-6">
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
        </div>
    );
}

export function Testimonials() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-32">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 50s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
            
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/hero-empresa.png"
                    alt="Fondo Testimonios"
                    fill
                    className="object-cover object-center opacity-40 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30" />
            </div>
            
            <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-purple-600 blur-[100px] opacity-20 z-0" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-cyan-600 blur-[100px] opacity-20 z-0" />

            <div className="relative z-10 w-full overflow-hidden">
                <Container>
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4"
                        >
                            Testimonios
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl"
                        >
                            Confían y prefieren a ROESAN
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto"
                        >
                            Historias reales de personas y empresas que han depositado su confianza en nuestra experiencia.
                        </motion.p>
                    </div>
                </Container>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden">
                    {/* Fading edges */}
                    <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
                    
                    <div className="animate-marquee gap-6 px-6">
                        {/* Render testimonials twice for seamless infinite loop */}
                        {[...testimonials, ...testimonials].map((t, idx) => (
                            <div
                                key={idx}
                                className="relative rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/30 flex flex-col w-[350px] shrink-0"
                            >
                                {/* Large decorative quote */}
                                <div className="absolute top-6 right-6 text-7xl leading-none text-white/5 font-serif select-none">"</div>

                                <StarRating count={t.rating} />

                                <p className="mb-8 text-base leading-relaxed text-slate-300 italic relative z-10 flex-1">
                                    "{t.quote}"
                                </p>

                                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                    {t.image ? (
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-lg shrink-0">
                                            <Image src={t.image} alt={t.author} fill className="object-cover" />
                                        </div>
                                    ) : (
                                        <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.colorFrom} ${t.colorTo} text-sm font-bold text-white shadow-lg`}>
                                            {t.initials}
                                        </div>
                                    )}
                                    <div>
                                        <p className="font-semibold text-white truncate max-w-[200px]">{t.author}</p>
                                        <p className="text-sm text-slate-400 truncate max-w-[200px]">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
