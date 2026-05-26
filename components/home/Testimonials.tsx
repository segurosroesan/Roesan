"use client";

import React from "react";
import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        quote: "Tenía una póliza de responsabilidad civil que me salía por $8.2M al año. El equipo de Roesan revisó el riesgo real de mi fábrica en Engativá y me negoció la misma cobertura por $4.8M. Eso es casi $40k mensuales que recuperé.",
        author: "Carlos Mendoza",
        role: "Gerente de Planta, Engativá",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "CM",
        colorFrom: "from-purple-500",
        colorTo: "to-indigo-600",
        rating: 5
    },
    {
        quote: "Cuando quedé embarazada me asusté pensando que no podría cambiar mi seguro de vida. Roesan no solo me lo permitió, sino que me diseñó una póliza flexible de $300M de cobertura que crecía con mi familia. Ahora duermo tranquila sabiendo que mis hijos estarían cubiertos.",
        author: "Daniela Ortiz",
        role: "Abogada, Usaquén",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "DO",
        colorFrom: "from-rose-500",
        colorTo: "to-pink-600",
        rating: 5
    },
    {
        quote: "Somos constructores y las pólizas de cumplimiento son un dolor de cabeza. En 2018 otro corredor me cobró $60M por cobertura insuficiente. Con Roesan obtuve el doble de cobertura por $35M. Han estado conmigo en 8 proyectos sin un problema.",
        author: "Andrés Villamizar",
        role: "Director Proyectos, Chapinero",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "AV",
        colorFrom: "from-blue-500",
        colorTo: "to-cyan-600",
        rating: 5
    },
    {
        quote: "A las 3:15 AM tuve un choque grave cerca de Cali. Llamé a Roesan en pánico y en menos de 2 horas tenía la grúa en el sitio. Me resolvieron todo: defensa legal, reparación, hospedaje. Sin ellos hubiera perdido $85M más por los daños a terceros.",
        author: "Jorge Cárdenas",
        role: "Vendedor independiente, Cali",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "JC",
        colorFrom: "from-emerald-500",
        colorTo: "to-teal-600",
        rating: 5
    },
    {
        quote: "Implementar salud para 48 empleados parecía imposible por el costo. Roesan estructuró un plan hibrido donde la empresa paga $580k/mes y nuestro equipo está cubierto 100%. La rotación de personal bajó 40% y no tuvimos ni una queja de cobertura.",
        author: "Sofía Londoño",
        role: "Directora RRHH, Santa Fe",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "SL",
        colorFrom: "from-fuchsia-500",
        colorTo: "to-purple-600",
        rating: 5
    },
    {
        quote: "Mi hogar en Suba es mi patrimonio más importante. Desde 2009 confío mis pólizas a Roesan. Cuando tuve un daño por inundación en 2022, me pagan sin peleas. La honestidad no tiene precio. Son la excepción en esta industria.",
        author: "Héctor Ruiz",
        role: "Jubilado, Suba (cliente 15 años)",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "HR",
        colorFrom: "from-orange-500",
        colorTo: "to-red-600",
        rating: 5
    },
    {
        quote: "Nuestro conjunto en Rosales tiene 120 apartamentos. El fuerte invierno de 2024 causó daños por $28M. Porque Roesan estructuró bien la cobertura, la aseguradora pagó todo sin cuota extraordinaria. Eso nos hubiera costado $260k por apartamento.",
        author: "Patricia Echeverri",
        role: "Admin. Condominio, Rosales",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "PE",
        colorFrom: "from-violet-500",
        colorTo: "to-purple-600",
        rating: 5
    },
    {
        quote: "Mi perro Simón se fracturó una pata y la cirugía costó $4.2M. Pensé que lo iba a perder. El seguro de mascota de Roesan me cubrió el 85%. Sin eso, tendría que haber endeudado. Ahora todos mis animales están asegurados.",
        author: "Laura Jaramillo",
        role: "Veterinaria, La Candelaria",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "LJ",
        colorFrom: "from-pink-500",
        colorTo: "to-rose-600",
        rating: 5
    },
    {
        quote: "Tengo una flota de 32 camiones. En 5 años, he hecho 3 reclamaciones por accidentes. Roesan pagó los 3 en menos de 15 días, sin retrasos. Las otras aseguradoras me cobraban igual pero pagaban a los 45 días. Esos días de retraso me cuestan dinero.",
        author: "Fernando Arango",
        role: "Gerente Logístico, Bogotá",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256&q=80",
        initials: "FA",
        colorFrom: "from-cyan-500",
        colorTo: "to-blue-600",
        rating: 5
    },
    {
        quote: "Me retiré a los 62 años sin mucha claridad sobre mi pensión. Roesan me diseñó un seguro de inversión que genera rendimiento anual del 5.2%, muy superior a lo que el banco me ofrecía. En 3 años he recuperado mi inversión inicial y voy ganancia.",
        author: "Camila Restrepo",
        role: "Jubilada, Teusaquillo",
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
