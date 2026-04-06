"use client";

import React from "react";
import { Container } from "../ui/Container";
import { motion } from "framer-motion";

import Image from "next/image";

const partners = [
    { name: "SURA", file: "Sura.jpeg" },
    { name: "ALLIANZ", file: "Allianz.jpeg" },
    { name: "MAPFRE", file: "Mapfre.jpeg" },
    { name: "AXA COLPATRIA", file: "AXXA.jpeg" },
    { name: "SEGUROS BOLÍVAR", file: "Seguros_Bolivar.jpeg" },
    { name: "LIBERTY", file: "Liverty.jpeg" },
    { name: "HDI", file: "HDI_Seguros.jpeg" },
    { name: "ESTADO", file: "Seguros del estado.jpeg" },
    { name: "QUALITAS", file: "Qualitas.jpeg" },
    { name: "SBS", file: "SBS.jpeg" },
    { name: "MUNDIAL", file: "Seguros_mudial.jpeg" },
];

export function TrustBar() {
    return (
        <section className="border-y border-slate-200/50 bg-white/50 backdrop-blur-sm py-14 overflow-hidden">
            <Container>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400"
                >
                    Respaldados por las mejores aseguradoras de Colombia
                </motion.p>
                
                {/* Looping Carousel via CSS animation for better UX with many logos */}
                <div className="relative flex overflow-hidden w-full group mask-image-fade">
                    <div className="flex w-max animate-marquee space-x-8 md:space-x-12 items-center hover:[animation-play-state:paused] py-4 will-change-transform">
                        {[...partners, ...partners].map((partner, idx) => (
                            <div
                                key={`${partner.name}-${idx}`}
                                className="relative flex items-center justify-center w-32 h-16 md:w-40 md:h-20 transition-all duration-300 group/logo"
                            >
                                <img
                                    src={`/images/${partner.file}`}
                                    alt={`Logo de ${partner.name}`}
                                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 mix-blend-multiply transition-all duration-500 ease-out group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
