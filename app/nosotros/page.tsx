"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Shield, Users, Target, Heart, Award, Handshake } from "lucide-react";
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
            title: "Excelencia",
            description: "Buscamos la más alta calidad en cada póliza y en cada interacción con nuestros clientes.",
            icon: Award,
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            title: "Cercanía",
            description: "Construimos relaciones de confianza a largo plazo. Conocemos a cada cliente por su nombre.",
            icon: Users,
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            title: "Transparencia",
            description: "Brindamos información clara y honesta sobre coberturas, costos y exclusiones.",
            icon: Target,
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            title: "Compromiso",
            description: "Estamos contigo en los momentos que más importan, especialmente cuando ocurre un siniestro.",
            icon: Handshake,
            color: "text-primary",
            bg: "bg-primary/10"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-900 pt-36 pb-24 lg:pt-48 lg:pb-32">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
                <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-primary blur-[100px] opacity-20" />

                <Container className="relative text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]"
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
                                <p className="text-xl font-medium text-slate-800 mb-6">
                                    Más de 40 años de historia familiar al servicio de Colombia.
                                </p>
                                <p>
                                    En <strong>1982</strong>, <strong>Roberto Estrada Ángel</strong> fundó Roesan con una convicción simple: los seguros se construyen sobre la confianza. Su esposa, <strong>María Eugenia Estrada</strong>, tomó las riendas del negocio y durante décadas fue ella quien forjó la reputación, las relaciones y la solidez que hoy nos definen.
                                </p>
                                <p>
                                    <strong>Carmen Eugenia Estrada</strong>, su hija, creció en este oficio. Trabajó junto a su madre durante años, aprendió cada detalle del negocio y hoy lidera Roesan con el mismo compromiso de siempre, sumando una visión renovada del sector.
                                </p>
                                <p>
                                    Con la incorporación de <strong>Jonathan y Ana Lucía</strong> como nuevos socios, Roesan abre un nuevo capítulo: el mismo legado familiar, con la energía y las herramientas para seguir creciendo.
                                </p>
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
                                    src="/images/bogota-chapinero-1980.png"
                                    alt="Chapinero, Bogotá, 1982 – Fundación de Roesan"
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
                    <div className="mb-16">
                        <span className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Nuestros Valores</span>
                        <h2 className="mt-2 text-4xl font-serif font-medium text-slate-900">Lo que nos define.</h2>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
