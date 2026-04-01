"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Shield } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex items-center">
            <Container>
                <div className="mx-auto max-w-2xl text-center py-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-purple-50"
                    >
                        <Shield className="w-12 h-12 text-purple-800" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="font-serif text-8xl font-bold text-purple-800 leading-none mb-4"
                    >
                        404
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-2xl font-semibold text-slate-800 mb-4"
                    >
                        Página no encontrada
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-500 text-lg mb-12 max-w-md mx-auto"
                    >
                        La página que buscas no existe o fue movida. No te preocupes, podemos ayudarte desde aquí.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 bg-purple-800 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-900 transition-all hover:shadow-xl hover:-translate-y-1 group"
                        >
                            <Home className="w-4 h-4" />
                            Ir al Inicio
                        </Link>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-purple-800 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Contactar Asesor
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
