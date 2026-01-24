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
                            Diseñamos cada póliza pensando en tu tranquilidad y seguridad.
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {servicesData.map((service, idx) => (
                        <Link key={service.slug} href={`/servicios/${service.slug}`} className="block h-full group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden"
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${service.bg}`}>
                                    <service.icon className={`h-7 w-7 ${service.color}`} />
                                </div>

                                <h3 className="font-serif text-xl font-medium text-purple-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                    {service.shortDescription}
                                </p>

                                <div className="flex items-center text-sm font-medium text-cyan-500 group-hover:text-cyan-400 transition-colors">
                                    Ver detalles <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
