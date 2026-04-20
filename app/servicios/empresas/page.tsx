"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/lib/services-data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import QuoteFunnel from "@/components/home/QuoteFunnel";

export default function EmpresasHubPage() {
    const order = [
        "empresariales",
        "transporte",
        "cumplimiento",
        "responsabilidad-civil-empresarial",
        "colectivos",
        "arl-vida-grupo",
        "copropiedades",
    ];
    const empresasServices = order
        .map((slug) => servicesData.find((service) => service.slug === slug))
        .filter(Boolean) as typeof servicesData;

    return (
        <div className="bg-transparent">
            {/* Hero */}
            <section className="relative overflow-hidden pt-36 pb-24 text-center lg:pt-48 lg:pb-32">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/banner-empresas.png" alt="Seguros Empresas" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-slate-900/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-indigo-900/30" />
                </div>

                <Container className="relative z-10 pt-8">
                    <div className="mb-8">
                        <Breadcrumbs 
                            variant="dark"
                            items={[
                                { label: 'Seguros Empresas' }
                            ]} 
                        />
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]"
                    >
                        Seguros para Empresas
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        Blinda tu negocio, protege a tus empleados y asegura la continuidad de tus operaciones corporativas.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8"
                    >
                        <Link href="#cotiza-tu-seguro" className="inline-flex">
                            <Button variant="primary" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                                Cotiza tu seguro
                            </Button>
                        </Link>
                    </motion.div>
                </Container>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-transparent" id="servicios">
                <Container>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {empresasServices.map((service, idx) => (
                            <Link key={service.slug} href={`/servicios/${service.slug}`} className="block h-full group">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                                    className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 h-full min-h-[300px]"
                                >
                                    <div className="absolute inset-0">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/40 to-slate-950/10" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-transparent" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex flex-col justify-end h-full">
                                        <div className="absolute inset-x-4 bottom-4 top-1/3 rounded-2xl bg-gradient-to-t from-slate-950/60 via-slate-950/45 to-primary/5 backdrop-blur-[1px]" />
                                        <div className="relative">
                                        <div className="w-8 h-1 bg-purple-500 rounded-full mb-3 group-hover:w-12 transition-all duration-500" />
                                        <h4 className="font-serif text-xl font-medium text-slate-50 mb-2 [text-shadow:0_2px_10px_rgba(15,23,42,0.7)]">
                                            {service.title}
                                        </h4>
                                        <p className="text-slate-200 text-sm leading-relaxed mb-4 line-clamp-2 [text-shadow:0_1px_6px_rgba(15,23,42,0.65)]">
                                            {service.shortDescription}
                                        </p>

                                        <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors mt-auto [text-shadow:0_1px_6px_rgba(15,23,42,0.65)]">
                                            Ver detalles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            <section id="cotiza-tu-seguro" className="bg-white py-20 scroll-mt-28">
                <Container className="max-w-3xl">
                    <QuoteFunnel variant="compact" />
                </Container>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 py-16">
                <Container className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        ¿Requieres un análisis de riesgos corporativos?
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        Nuestros expertos evaluarán la situación de tu empresa para ofrecerte coberturas especializadas.
                    </p>
                    <Link href="/contacto">
                        <Button variant="primary" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                            Solicitar Asesoría Empresarial
                        </Button>
                    </Link>
                </Container>
            </section>
        </div>
    );
}
