"use client";

import React from "react";
import { Container } from "../ui/Container";
import { motion } from "framer-motion";

const partners = [
    { name: "SURA", accent: "#0080C9" },
    { name: "ALLIANZ", accent: "#003781" },
    { name: "MAPFRE", accent: "#D30F00" },
    { name: "AXA COLPATRIA", accent: "#E6000F" },
    { name: "SEGUROS BOLÍVAR", accent: "#E4002B" },
    { name: "LIBERTY", accent: "#2D9CDB" },
    { name: "ZURICH", accent: "#1C69D4" },
    { name: "CHUBB", accent: "#002D62" },
];

export function TrustBar() {
    return (
        <section className="border-y border-slate-100 bg-white py-14">
            <Container>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400"
                >
                    Respaldados por las mejores aseguradoras de Colombia
                </motion.p>
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.08 }}
                            className="group relative flex items-center justify-center px-5 py-2.5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 cursor-default"
                        >
                            <span
                                className="text-sm font-extrabold tracking-wider text-slate-300 group-hover:text-opacity-100 transition-colors duration-300"
                                style={{ color: `${partner.accent}60` }}
                            >
                                <span
                                    className="group-hover:opacity-100 opacity-50 transition-opacity duration-300"
                                    style={{ color: partner.accent }}
                                >
                                    {partner.name}
                                </span>
                            </span>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
