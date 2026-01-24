"use client";

import React from "react";
import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Roesan nos brindó la tranquilidad que necesitábamos para nuestra empresa. Su servicio es excepcional y siempre están dispuestos a ayudar.",
        author: "Jaime Foldón",
        role: "Cliente corporativo",
        initials: "JF"
    },
    {
        quote: "La atención personalizada de María Eugenia hace toda la diferencia. Me siento realmente protegido y respaldado en todo momento.",
        author: "Ricardo Amigo",
        role: "Cliente personal",
        initials: "RA"
    },
    {
        quote: "Llevo más de 20 años con ellos. Son sinónimo de honestidad y confianza. No dejaría mi patrimonio en otras manos.",
        author: "Antonio Garrete",
        role: "Cliente fidelizado",
        initials: "AG"
    },
];

export function Testimonials() {
    return (
        <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
            <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary blur-[100px] opacity-20" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-secondary blur-[100px] opacity-20" />

            <Container className="relative">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
                    >
                        Confían y prefieren a ROESAN
                    </motion.h2>
                    <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
                        Historias reales de personas y empresas que han depositado su confianza en nuestra experiencia.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10"
                        >
                            <Quote className="absolute top-8 right-8 h-8 w-8 text-white/5" />

                            <div className="mb-6">
                                {/* Rating stars could go here */}
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <span key={s} className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                                    ))}
                                </div>
                            </div>

                            <p className="mb-8 text-lg leading-relaxed text-slate-300 italic relative z-10">"{t.quote}"</p>

                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white shadow-lg">
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
