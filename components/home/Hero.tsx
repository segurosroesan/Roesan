"use client";

import { motion } from "framer-motion";
import { ChevronRight, PlayCircle, Shield, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/Container";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden luxury-gradient">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 opacity-50 skew-x-12 translate-x-20 pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

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
                            Nueva Experiencia Digital
                        </div>

                        <h1 className="font-serif text-5xl lg:text-7xl font-medium tracking-tight text-purple-800 leading-[1.1]">
                            Protección que se adapta a <span className="italic text-cyan-500">tu vida</span>.
                        </h1>

                        <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-lg">
                            Deja de preocuparte por el futuro. En Roesan construimos un respaldo sólido para tu familia y tu patrimonio con más de 40 años de experiencia.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/contacto">
                                <button className="w-full sm:w-auto bg-purple-800 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-purple-900 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group relative overflow-hidden">
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                                    <span>Solicitar Asesoría</span>
                                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </Link>
                            <Link href="/servicios">
                                <button className="w-full sm:w-auto bg-white border border-slate-200 text-purple-800 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-all hover:border-slate-300 flex items-center justify-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    <span>Ver Coberturas</span>
                                </button>
                            </Link>
                        </div>

                        <div className="pt-8 flex items-center gap-4 text-sm text-slate-400">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">A</div>
                                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">B</div>
                                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">C</div>
                            </div>
                            <p>Con la confianza de 2,000+ familias</p>
                        </div>
                    </motion.div>

                    {/* Visual Content (Chaos vs Calm Concept) */}
                    <div className="relative h-[500px] w-full group perspective-1000 hidden lg:block">
                        {/* The "Chaos" (Risks) - Background Element */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
                            animate={{ opacity: 0.6, rotate: -6, scale: 0.9 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="absolute top-10 left-0 w-full max-w-md bg-white rounded-xl shadow-lg border border-red-50 p-6 transform transition-all duration-700 group-hover:opacity-0 group-hover:translate-x-[-100px]"
                        >
                            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <span className="text-xs font-semibold text-red-500">Riesgo no cubierto</span>
                            </div>
                            <div className="space-y-3 opacity-50">
                                <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                                <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                            </div>
                        </motion.div>

                        {/* The "Calm" (Roesan Solution) - Foreground Element */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-0 overflow-hidden transform transition-all duration-700 hover:scale-105 z-20"
                        >
                            <div className="bg-purple-800 p-4 flex justify-between items-center">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                </div>
                                <span className="text-xs font-medium text-white/80">Portal Clientes Roesan</span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-serif text-lg font-medium text-purple-800">Todo bajo control</h3>
                                    <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full border border-green-100 flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Activo
                                    </span>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                <Shield className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-700">Póliza de Vehículo</span>
                                        </div>
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                                                <Shield className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-700">Seguro de Salud</span>
                                        </div>
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <div className="absolute top-20 left-10 p-3 bg-white shadow-lg rounded-xl animate-float">
                            <Shield className="w-6 h-6 text-cyan-500" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
