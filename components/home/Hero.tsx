"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Shield } from "lucide-react";
import { Container } from "../ui/Container";
import Image from "next/image";
import QuoteFunnel from "./QuoteFunnel";
import { Modal } from "../ui/Modal";

const slides = [
    {
        image: "/images/hero-familia.png",
        tag: "Seguros para Personas",
        title: "Protegemos lo que más valoras",
        subtitle: "Tu familia merece tranquilidad ante cualquier imprevisto. Más de 40 años cuidando hogares colombianos.",
        overlayColor: "from-purple-950/80 via-purple-900/60 to-transparent",
        funnelPreset: "vida" as const,
    },
    {
        image: "/images/hero-empresa.png",
        tag: "Seguros Empresariales",
        title: "Asesoría que protege tu empresa",
        subtitle: "Soluciones integrales para proteger tu operación, empleados y patrimonio con el respaldo de las mejores aseguradoras.",
        overlayColor: "from-slate-950/80 via-slate-900/60 to-transparent",
        funnelPreset: "empresarial" as const,
    },
    {
        image: "/images/hero-auto.png",
        tag: "Seguro de Vehículos",
        title: "Viaja con total confianza",
        subtitle: "Cotiza tu seguro de auto en minutos. Comparamos entre las mejores aseguradoras para darte la tarifa ideal.",
        overlayColor: "from-cyan-950/70 via-slate-900/50 to-transparent",
        funnelPreset: "auto" as const,
    },
];

export function Hero() {
    const [current, setCurrent] = useState(0);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        if (isQuoteModalOpen) return;
        const timer = setInterval(next, 9000);
        return () => clearInterval(timer);
    }, [isQuoteModalOpen, next]);

    const slide = slides[current];

    return (
        <section className="relative mt-24 md:mt-28 mb-12 mx-4 md:mx-8 lg:mx-12 rounded-3xl overflow-hidden bg-slate-900 min-h-[550px] shadow-2xl">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                    {/* Additional general dark overlay to guarantee text legibility */}
                    <div className="absolute inset-0 bg-slate-950/40" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <Container className="relative z-10 flex flex-col justify-center min-h-[550px] py-16 lg:py-20">

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
                            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] font-medium tracking-tight text-white leading-[1.1] drop-shadow-xl shadow-black/50">
                                {slide.title}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-xl lg:text-2xl text-white/95 leading-relaxed mx-auto max-w-2xl drop-shadow-md shadow-black/50">
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

                    {/* Button — Centered under controls */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="relative z-20 w-full max-w-2xl mx-auto mt-12 flex justify-center"
                    >
                        <button
                            type="button"
                            onClick={() => setIsQuoteModalOpen(true)}
                            className="bg-purple-800 text-white hover:bg-purple-900 transition-all duration-300 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 group hover:scale-105 shadow-[0_0_40px_rgba(107,33,168,0.4)]"
                        >
                            Cotiza tu seguro
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </Container>

            <Modal
                open={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
                title="Cotización guiada"
            >
                <div className="bg-[radial-gradient(circle_at_top,_rgba(81,64,141,0.28),_transparent_38%),linear-gradient(180deg,#111827_0%,#0f172a_100%)] p-4 sm:p-6 lg:p-8">
                    <QuoteFunnel
                        key={`hero-quote-${isQuoteModalOpen ? "open" : "closed"}`}
                        onClose={() => setIsQuoteModalOpen(false)}
                    />
                </div>
            </Modal>
        </section>
    );
}
