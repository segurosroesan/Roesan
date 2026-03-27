"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function PersonasHubPage() {
    const personasServices = servicesData.filter(s => s.category === "persona");

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative overflow-hidden bg-slate-900 py-24 text-center lg:py-32">
                <div className="absolute inset-0 bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 opacity-20" />
                </div>

                <Container className="relative pt-8">
                    <div className="mb-8">
                        <Breadcrumbs 
                            variant="dark"
                            items={[
                                { label: 'Seguros Personas' }
                            ]} 
                        />
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        Seguros para Personas y Familias
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        Protege tu vida, tu salud y tu patrimonio con pólizas diseñadas a tu medida.
                    </motion.p>
                </Container>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-50" id="servicios">
                <Container>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {personasServices.map((service, idx) => (
                            <Link key={service.slug} href={`/servicios/${service.slug}`} className="block h-full group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden flex flex-col"
                                >
                                    <div className={`w-14 h-14 rounded-xl flex shrink-0 items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${service.bg}`}>
                                        <service.icon className={`h-7 w-7 ${service.color}`} />
                                    </div>

                                    <h4 className="font-serif text-xl font-medium text-purple-800 mb-2">
                                        {service.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                                        {service.shortDescription}
                                    </p>

                                    <div className="flex items-center text-sm font-medium text-cyan-500 group-hover:text-cyan-400 transition-colors mt-auto">
                                        Ver detalles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="bg-primary py-16">
                <Container className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        ¿Necesitas asesoría personalizada?
                    </h2>
                    <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                        Déjanos entender tus necesidades familiares y te recomendaremos el plan perfecto.
                    </p>
                    <Link href="/contacto">
                        <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-slate-100">
                            Hablar con un Asesor
                        </Button>
                    </Link>
                </Container>
            </section>
        </div>
    );
}
