"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/lib/services-data";

// Map slugs to card images
const cardImages: Record<string, string> = {
    // Empresas
    copropiedades: "/images/card-copropiedades.png",
    transporte: "/images/Seguro_transporte.jpeg",
    cumplimiento: "/images/card-cumplimiento-contrato-co.png",
    "responsabilidad-civil-empresarial": "/images/card-rc-bogota.png",
    "todo-riesgo": "/images/card-todo-riesgo-maquinaria.png",
    empresariales: "/images/card-todo-riesgo-globo.png",
    colectivos: "/images/card-colectivos.png",
    "arl-vida-grupo": "/images/card-arl-vida-grupo-co.png",
    // Personas
    vida: "/images/card-seguro-vida-bogota.png",
    autos: "/images/card-tesla-todo-riesgo-bogota.png",
    "responsabilidad-civil-personal": "/images/card-rc-bogota.png",
    salud: "/images/card-salud-co.png",
    exequial: "/images/card-exequial.png",
    mascotas: "/images/card-mascotas.png",
    hogar: "/images/card-hogar.png",
    educativo: "/images/card-educativo.png",
    "vida-deudor": "/images/card-vida-deudor.png",
};

// Color accents for the cards
const cardAccents: Record<string, string> = {
    copropiedades: "bg-indigo-600",
    transporte: "bg-amber-600",
    cumplimiento: "bg-purple-700",
    "responsabilidad-civil-empresarial": "bg-rose-600",
    empresariales: "bg-emerald-600",
    colectivos: "bg-cyan-600",
    "arl-vida-grupo": "bg-teal-600",
    vehiculos: "bg-blue-600",
    salud: "bg-rose-500",
    excequial: "bg-slate-700",
    mascotas: "bg-amber-500",
    hogar: "bg-orange-600",
    "vida-deudor": "bg-purple-600",
    "seguro-educativo": "bg-cyan-700",
};

function ServiceCard({ service, idx, isLarge = false }: { service: typeof servicesData[0]; idx: number; isLarge?: boolean }) {
    const image = cardImages[service.slug] || "/images/card-empresarial.png";
    const accent = cardAccents[service.slug] || "bg-purple-600";

    return (
        <Link href={`/servicios/${service.slug}`} className={`block group ${isLarge ? "md:col-span-2 md:row-span-2" : ""}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 h-full ${isLarge ? "min-h-[400px]" : "min-h-[320px]"}`}
            >
                {/* Image */}
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                    />
                    {/* Dark gradient overlay - made darker for larger text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
                </div>

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                    {/* Accent bar */}
                    <div className={`w-10 h-1 ${accent} rounded-full mb-4 group-hover:w-16 transition-all duration-500`} />

                    <h4 className={`font-serif font-medium text-white mb-3 ${isLarge ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                        {service.title}
                    </h4>
                    <p className={`text-white/80 leading-relaxed mb-5 line-clamp-3 ${isLarge ? "text-lg max-w-lg" : "text-base"}`}>
                        {service.shortDescription}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        Conocer más
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

export function ServicesGrid() {
    const empresas = servicesData.filter((s) => s.category === "empresa");
    const personas = servicesData.filter((s) => s.category === "persona");

    return (
        <section className="py-24 bg-white" id="servicios">
            <Container>
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500 mb-4">
                        Nuestras Soluciones
                    </p>
                    <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-6">
                        Protección a tu medida
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Más de 40 años asesorando familias y empresas colombianas con las mejores pólizas del mercado.
                    </p>
                </motion.div>

                {/* === Seguros para Personas === */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <h3 className="text-2xl font-bold text-slate-900">Seguros para Personas</h3>
                        <div className="flex-1 h-px bg-slate-200" />
                        <Link 
                            href="/servicios/personas" 
                            className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 flex items-center gap-1 shrink-0"
                        >
                            Ver todos <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* First card is large */}
                        {personas.length > 0 && (
                            <ServiceCard service={personas[0]} idx={0} isLarge={true} />
                        )}
                        {/* Remaining cards */}
                        <div className="grid grid-cols-1 gap-6 lg:col-span-1 md:col-span-1">
                            {personas.slice(1, 3).map((service, idx) => (
                                <ServiceCard key={service.slug} service={service} idx={idx + 1} />
                            ))}
                        </div>
                    </div>
                    {personas.length > 3 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            {personas.slice(3).map((service, idx) => (
                                <ServiceCard key={service.slug} service={service} idx={idx + 3} />
                            ))}
                        </div>
                    )}
                </div>

                {/* === Seguros para Empresas === */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <h3 className="text-2xl font-bold text-slate-900">Seguros para Empresas</h3>
                        <div className="flex-1 h-px bg-slate-200" />
                        <Link 
                            href="/servicios/empresas" 
                            className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 flex items-center gap-1 shrink-0"
                        >
                            Ver todos <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {empresas.slice(0, 3).map((service, idx) => (
                            <ServiceCard key={service.slug} service={service} idx={idx} />
                        ))}
                    </div>
                    {empresas.length > 3 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            {empresas.slice(3).map((service, idx) => (
                                <ServiceCard key={service.slug} service={service} idx={idx + 3} />
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}
