"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import QuoteFunnel from "./QuoteFunnel";
import { CheckCircle2 } from "lucide-react";

const benefits = [
    "Comparamos más de 10 aseguradoras por ti",
    "Respuesta en menos de 2 horas",
    "Sin costos adicionales ni letra pequeña",
    "Asesor experto asignado a tu caso",
];

export function QuoteCTA() {
    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-400/10 blur-3xl pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400 mb-4">
                            Cotización 100% Digital
                        </p>
                        <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-white leading-[1.15] mb-6">
                            Tu cotización en <span className="text-cyan-400 italic">minutos</span>, no en días
                        </h2>
                        <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-md">
                            Ingresa tus datos una sola vez y nosotros conseguimos las mejores opciones del mercado. Sin llamadas invasivas, sin presión, sin costo.
                        </p>

                        <ul className="space-y-4">
                            {benefits.map((benefit, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-center gap-3 text-white/90"
                                >
                                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <span className="text-base">{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right: QuoteFunnel */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <QuoteFunnel />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
