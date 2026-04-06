"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Shield } from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/Container";
import QuoteFunnel from "./QuoteFunnel";

export function Hero() {
    const words = ["Tu familia", "Tu empresa", "Tu patrimonio"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden luxury-gradient">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 opacity-50 skew-x-12 translate-x-32 pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8 max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-purple-800 mb-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                            </span>
                            Cotización Rápida y 100% Digital
                        </div>

                        <h1 className="font-serif text-5xl lg:text-7xl font-medium tracking-tight text-purple-800 leading-[1.2]">
                            Protegemos lo que más <span>Valoras</span>:
                            <br className="hidden sm:block" />
                            <span className="block mt-2 sm:mt-4 h-[1.2em] relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={index}
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -50, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute left-0 text-cyan-400 italic"
                                    >
                                        {words[index]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-lg">
                            Cotiza tu seguro en minutos con el respaldo de más de 40 años de experiencia. Asesoría experta, sin complicaciones, y con las mejores aseguradoras del país.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 hidden lg:flex">
                            <Link href="#servicios">
                                <button className="w-full sm:w-auto bg-white border border-slate-200 text-purple-800 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-all hover:border-slate-300 flex items-center justify-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    <span>Conocer Diferenciales</span>
                                </button>
                            </Link>
                        </div>

                        <div className="pt-8 flex items-center gap-4 text-sm text-slate-400">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">A</div>
                                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">B</div>
                                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">C</div>
                            </div>
                            <p>Únete a las más de 2,000 familias e instituciones protegidas por Roesan</p>
                        </div>
                    </motion.div>

                    {/* Funnel Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative w-full lg:max-w-xl mx-auto xl:mr-0 z-20"
                    >
                        <QuoteFunnel />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
