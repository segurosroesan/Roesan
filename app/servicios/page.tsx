"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative overflow-hidden bg-slate-900 py-24 text-center lg:py-32">
                {/* Abstract background */}
                <div className="absolute inset-0 bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 opacity-20" />
                    {/* Animated shapes */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[50%] -left-[50%] h-[200%] w-[200%] opacity-[0.03] bg-[url('/grid.svg')]"
                    />
                </div>

                <Container className="relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        Portafolio de Soluciones
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        Diseñamos estrategias de protección integral para ti, tu familia y tu empresa.
                    </motion.p>
                </Container>
            </section>

            {/* Main Grid reused but enhanced context */}
            <div className="relative z-10 -mt-12">
                <ServicesGrid />
            </div>

            {/* Detailed Features / Process Section */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                ¿Por qué elegir un seguro con Roesan?
                            </h2>
                            <p className="mt-4 text-lg text-slate-600">
                                No solo vendemos pólizas, construimos tranquilidad. Nuestro proceso se enfoca en entender tu riesgo real.
                            </p>

                            <ul className="mt-8 space-y-4">
                                {[
                                    "Análisis de riesgo personalizado.",
                                    "Respaldo de las mejores aseguradoras del país.",
                                    "Acompañamiento jurídico en caso de siniestro.",
                                    "Renovación automática y gestión de cartera."
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-3 text-slate-700"
                                    >
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-10">
                                <Button size="lg" className="rounded-full">
                                    Agendar Cita Virtual <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-900/5"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="rounded-lg bg-orange-100 p-3 text-orange-600">
                                    <HelpCircle className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Preguntas Frecuentes</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-slate-900">¿Qué cubre un seguro de vida?</h4>
                                    <p className="mt-2 text-sm text-slate-600">Dependiendo de la póliza, puede cubrir fallecimiento, incapacidad total o parcial, y enfermedades graves.</p>
                                </div>
                                <div className="border-t border-slate-200 pt-6">
                                    <h4 className="font-semibold text-slate-900">¿Cómo reportar un siniestro de vehículo?</h4>
                                    <p className="mt-2 text-sm text-slate-600">Llámanos inmediatamente o usa el # de asistencia de tu aseguradora. Nosotros gestionamos el trámite por ti.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* CTA Bottom */}
            <section className="bg-primary py-16">
                <Container className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        ¿No encuentras lo que buscas?
                    </h2>
                    <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                        Contamos con un portafolio amplio. Contáctanos para una solución a medida.
                    </p>
                    <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-slate-100">
                        Contactar Asesor
                    </Button>
                </Container>
            </section>
        </div>
    );
}
