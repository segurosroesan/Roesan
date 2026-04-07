"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Shield } from "lucide-react";
import { Container } from "../ui/Container";
import Image from "next/image";
import QuoteFunnel from "./QuoteFunnel";

const slides = [
    {
        image: "/images/hero-familia.png",
        tag: "Seguros para Personas",
        title: "Protegemos lo que más valoras",
        subtitle: "Tu familia merece tranquilidad ante cualquier imprevisto. Más de 40 años cuidando hogares colombianos.",
        overlayColor: "from-purple-950/80 via-purple-900/60 to-transparent",
    },
    {
        image: "/images/hero-empresa.png",
        tag: "Seguros Empresariales",
        title: "Tu empresa, blindada",
        subtitle: "Soluciones integrales para proteger tu operación, empleados y patrimonio con el respaldo de las mejores aseguradoras.",
        overlayColor: "from-slate-950/80 via-slate-900/60 to-transparent",
    },
    {
        image: "/images/hero-auto.png",
        tag: "Seguro de Vehículos",
        title: "Viaja con total confianza",
        subtitle: "Cotiza tu seguro de auto en minutos. Comparamos entre las mejores aseguradoras para darte la tarifa ideal.",
        overlayColor: "from-cyan-950/70 via-slate-900/50 to-transparent",
    },
];

export function Hero() {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    const slide = slides[current];

    return (
        <section className="relative min-h-screen pt-20 overflow-hidden bg-slate-900">
            {/* Background Images — Crossfade */}
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover object-center"
                        priority={current === 0}
                        sizes="100vw"
                    />
                    {/* Horizontal overlay: dark on left, clear on right */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlayColor}`} />
                    {/* Vertical overlay bottom only */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <Container className="relative z-10 flex flex-col min-h-[calc(100vh-5rem)] py-16 lg:py-20">

                {/* Top: Animated text — centered */}
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-5 max-w-3xl"
                        >
                            {/* Tag */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-widest text-white/90">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                                </span>
                                {slide.tag}
                            </div>

                            {/* Title */}
                            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                                {slide.title}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg lg:text-xl text-white/75 leading-relaxed mx-auto max-w-xl">
                                {slide.subtitle}
                            </p>

                            {/* Trust indicator */}
                            <div className="flex items-center justify-center gap-3 text-sm text-white/60 pt-1">
                                <Shield className="w-4 h-4 text-cyan-400" />
                                Más de 2,000 familias y empresas protegidas desde 1982
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Slide controls */}
                    <div className="flex items-center gap-6 mt-10">
                        {/* Dots */}
                        <div className="flex items-center gap-2.5">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrent(idx)}
                                    className={`transition-all duration-500 rounded-full ${
                                        idx === current
                                            ? "w-10 h-3 bg-white"
                                            : "w-3 h-3 bg-white/35 hover:bg-white/55"
                                    }`}
                                    aria-label={`Slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                        {/* Arrows */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={prev}
                                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all"
                                aria-label="Anterior"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={next}
                                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all"
                                aria-label="Siguiente"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom: QuoteFunnel — anclado abajo, centrado */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative z-20 w-full max-w-2xl mx-auto mt-10"
                >
                    <QuoteFunnel />
                </motion.div>
            </Container>
        </section>
    );
}
