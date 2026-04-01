"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";

export function ServicesGrid() {
    return (
        <section className="py-24 bg-slate-50" id="servicios">
            <Container>
                <div className="text-center md:mb-16 mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="font-serif text-3xl font-medium tracking-tight text-purple-800 sm:text-4xl lg:text-5xl">
                            Nuestras Soluciones
                        </h2>
                        <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto font-light">
                            Diseñamos cada póliza pensando en tu tranquilidad y seguridad, tanto para tu negocio como para tu familia.
                        </p>
                    </motion.div>
                </div>

                {/* Seguros Empresas */}
                <div id="empresas" className="mb-16 scroll-mt-32">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Seguros para Empresas</h3>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {servicesData.filter(s => s.category === "empresa").map((service, idx) => (
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
                </div>

                {/* Seguros Personas */}
                <div id="personas" className="scroll-mt-32">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Seguros para Personas</h3>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {servicesData.filter(s => s.category === "persona").map((service, idx) => (
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
                </div>
            </Container>
        </section>
    );
}
