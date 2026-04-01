"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Shield, Users, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const values = [
        {
            title: "Comprendemos",
            description: "Antes de sugerirte cualquier alternativa, queremos conocer tus necesidades. Cada persona es diferente.",
            icon: Heart,
            color: "text-rose-600",
            bg: "bg-rose-50"
        },
        {
            title: "Priorizamos",
            description: "Te explicamos en qué consiste cada póliza para evitar sorpresas. Queremos que sepas con qué cuentas.",
            icon: Target,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Respondemos",
            description: "Somos el puente que te facilita el proceso de reclamación y te acompañamos todo el camino.",
            icon: Shield,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
                <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary blur-[100px] opacity-20" />

                <Container className="relative text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        Nuestra Historia
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto mt-6 max-w-2xl text-lg text-slate-300"
                    >
                        Más de 40 años construyendo relaciones de confianza y protegiendo el patrimonio de las familias colombianas.
                    </motion.p>
                </Container>
            </section>

            {/* History Section */}
            <section className="py-24">
                <Container>
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Users className="h-6 w-6" />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight text-slate-900">El Legado Roesan</h2>
                            </div>

                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    Somos una agencia de seguros fundada en <strong>1982</strong> por <strong>Roberto Estrada Ángel</strong>. Su visión de servicio y protección dio origen al acrónimo que hoy nos identifica: <strong>ROESAN</strong>.
                                </p>
                                <p>
                                    Tras toda una vida dedicada al sector asegurador, en 1985, <strong>María Eugenia Grueso de Estrada</strong> asumió la gerencia. Bajo su liderazgo, la agencia ha evolucionado sin perder su esencia: el trato humano y cercano.
                                </p>
                                <blockquote className="border-l-4 border-primary pl-4 italic text-slate-800">
                                    "Comprendemos cuán incierto es el futuro, por eso queremos forjar un vínculo a largo plazo acompañándote en cada momento."
                                </blockquote>
                            </div>
                        </motion.div>

                        {/* Visual Composition */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative lg:h-[500px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
                            <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-900/5 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                                <Image
                                    src="/images/office-building.png"
                                    alt="Oficinas Roesan"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                                    <div className="mb-2 flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-sm font-medium text-emerald-100">Sede Principal - Bogotá</span>
                                    </div>
                                    <h3 className="text-2xl font-bold">Fundada en 1982</h3>
                                    <p className="mt-1 text-slate-200">40+ Años de Experiencia</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Values Section */}
            <section className="bg-slate-50 py-24">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Nuestros Pilares</h2>
                        <p className="mt-4 text-slate-600">Lo que nos hace diferentes.</p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-3">
                        {values.map((value, idx) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
                            >
                                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${value.bg} ${value.color}`}>
                                    <value.icon className="h-7 w-7" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-slate-900">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
