"use client";

import React from "react";
import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import { Shield, Calendar, MapPin } from "lucide-react";

const stats = [
    {
        label: "Año de fundación",
        value: "1982",
        icon: Calendar,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100",
        description: "Fundada en 1982 por Roberto Estrada Ángel"
    },
    {
        label: "Aseguradoras aliadas",
        value: "13",
        icon: Shield,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        description: "Compañías aseguradoras con las que trabajamos"
    },
    {
        label: "Sede principal",
        value: "Bogotá",
        icon: MapPin,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100",
        description: "Atención a personas y empresas en Colombia"
    },
];

export function StatsSection() {
    return (
        <section className="relative py-24 bg-white/40 backdrop-blur-md overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-purple-50 opacity-60 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cyan-50 opacity-60 blur-3xl pointer-events-none" />

            <Container className="relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl font-medium tracking-tight text-purple-800 sm:text-4xl lg:text-5xl">
                        Números que respaldan nuestra confianza
                    </h2>
                    <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto font-light">
                        Décadas de experiencia y el acompañamiento de aseguradoras aliadas.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -6 }}
                            className={`relative group rounded-2xl border ${stat.border} bg-white/80 backdrop-blur-sm p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center overflow-hidden`}
                        >
                            {/* Background glow on hover */}
                            <div className={`absolute inset-0 ${stat.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />

                            <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} mb-6`}>
                                <stat.icon className="w-7 h-7" />
                            </div>

                            <div className={`relative text-5xl font-bold tracking-tight ${stat.color} leading-none mb-3`}>
                                {stat.value}
                            </div>

                            <p className="relative text-sm font-bold text-slate-700 mb-2">{stat.label}</p>
                            <p className="relative text-xs text-slate-400 leading-relaxed">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
