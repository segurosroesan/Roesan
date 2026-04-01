"use client";

import React from "react";
import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Roesan nos brindó la tranquilidad que necesitábamos para nuestra empresa. Su servicio es excepcional y siempre están dispuestos a ayudar.",
        author: "Jaime Foldón",
        role: "Cliente corporativo",
        initials: "JF",
        colorFrom: "from-purple-500",
        colorTo: "to-indigo-600",
        rating: 5
    },
    {
        quote: "La atención personalizada de María Eugenia hace toda la diferencia. Me siento realmente protegido y respaldado en todo momento.",
        author: "Ricardo Amigo",
        role: "Cliente personal",
        initials: "RA",
        colorFrom: "from-cyan-500",
        colorTo: "to-blue-600",
        rating: 5
    },
    {
        quote: "Llevo más de 20 años con ellos. Son sinónimo de honestidad y confianza. No dejaría mi patrimonio en otras manos.",
        author: "Antonio Garrete",
        role: "Cliente fidelizado",
        initials: "AG",
        colorFrom: "from-emerald-500",
        colorTo: "to-teal-600",
        rating: 5
    },
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
        <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
            <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-purple-600 blur-[100px] opacity-15" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-cyan-600 blur-[100px] opacity-15" />

            <Container className="relative">
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

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col"
                        >
                            {/* Large decorative quote */}
                            <div className="absolute top-6 right-6 text-7xl leading-none text-white/5 font-serif select-none">"</div>

                            <StarRating count={t.rating} />

                            <p className="mb-8 text-base leading-relaxed text-slate-300 italic relative z-10 flex-1">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.colorFrom} ${t.colorTo} text-sm font-bold text-white shadow-lg`}>
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-white">{t.author}</p>
                                    <p className="text-sm text-slate-400">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
