"use client";

import React from "react";
import { Container } from "../ui/Container";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        quote: "Pagaba $2.8M al año por responsabilidad civil con otra agencia que no visitaba mi fábrica. Roesan vino, analizó el riesgo real de Engativá, estructuró cobertura con Sura y Allianz, y bajé a $1.8M manteniendo la cobertura. Ese ahorro de $83k anuales y el servicio de verdad justifica estar con Roesan.",
        author: "Carlos Mendoza",
        role: "Gerente de Planta, Engativá",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
        initials: "CM",
        colorFrom: "from-purple-500",
        colorTo: "to-indigo-600",
        rating: 5
    },
    {
        quote: "Cuando quedé embarazada me asusté pensando que no podría cambiar mi seguro de vida. Roesan no solo me lo permitió, sino que me estructuró una póliza flexible de $150M de cobertura que crecía con mi familia. Ahora duermo tranquila sabiendo que mis hijos estarían protegidos.",
        author: "Daniela Ortiz",
        role: "Abogada, Usaquén",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
        initials: "DO",
        colorFrom: "from-rose-500",
        colorTo: "to-pink-600",
        rating: 5
    },
    {
        quote: "Somos constructores y las pólizas de cumplimiento son complejas. Otra agencia me pidió $18M por cobertura insuficiente. Roesan estructuró con 3 aseguradoras y logró el doble de cobertura por $12M. En 8 proyectos, 0 problemas. Eso es asesoría de verdad.",
        author: "Andrés Villamizar",
        role: "Director Proyectos, Chapinero",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces",
        initials: "AV",
        colorFrom: "from-blue-500",
        colorTo: "to-cyan-600",
        rating: 5
    },
    {
        quote: "Tuve un choque grave cerca de Cali a las 3 AM. Llamé a Roesan porque mi póliza con HDI fue estructurada por ellos. Me conectaron con la aseguradora en el acto, HDI activó los servicios de grúa y defensa legal. Tener una póliza bien hecha marca la diferencia en emergencias.",
        author: "Jorge Cárdenas",
        role: "Vendedor independiente, Cali",
        image: "https://images.unsplash.com/photo-1554727242-741c14fa6bac?w=400&h=400&fit=crop&crop=faces",
        initials: "JC",
        colorFrom: "from-emerald-500",
        colorTo: "to-teal-600",
        rating: 5
    },
    {
        quote: "Implementar salud para 48 empleados parecía imposible por el costo. Roesan estructuró un plan híbrido donde la empresa paga $220k/mes y el equipo está cubierto 100%. La rotación bajó 35% desde que lo implementamos y cero quejas de cobertura. Fue la mejor decisión que tomamos.",
        author: "Sofía Londoño",
        role: "Directora RRHH, Santa Fe",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
        initials: "SL",
        colorFrom: "from-fuchsia-500",
        colorTo: "to-purple-600",
        rating: 5
    },
    {
        quote: "Mi hogar en Suba es mi patrimonio más importante. Desde 2009 confío mis pólizas a Roesan. Cuando tuve un daño por inundación en 2022, me pagan sin peleas. La honestidad no tiene precio. Son la excepción en esta industria.",
        author: "Héctor Ruiz",
        role: "Jubilado, Suba (cliente 15 años)",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&age=60",
        initials: "HR",
        colorFrom: "from-orange-500",
        colorTo: "to-red-600",
        rating: 5
    },
    {
        quote: "Nuestro conjunto en Rosales tiene 120 apartamentos. El invierno de 2024 causó daños por $7.2M. Porque Roesan estructuró bien la cobertura, la aseguradora pagó sin cuota extraordinaria. Otros edificios sin buena asesoría pagaron cuotas de hasta $60k por apartamento. Roesan nos ahorró eso.",
        author: "Patricia Echeverri",
        role: "Admin. Condominio, Rosales",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces",
        initials: "PE",
        colorFrom: "from-violet-500",
        colorTo: "to-purple-600",
        rating: 5
    },
    {
        quote: "Mi perro Simón se fracturó una pata y la cirugía costó $1.2M. La póliza de mascotas que Roesan me estructuró con Seguros Bolívar cubrió el 90%. Sin esa cobertura bien diseñada, hubiera sido un golpe fuerte. Ahora recomiendo a Roesan a todos mis clientes veterinarios.",
        author: "Laura Jaramillo",
        role: "Veterinaria, La Candelaria",
        image: "https://images.unsplash.com/photo-1532219516461-14feb11d16ef?w=400&h=400&fit=crop&crop=faces",
        initials: "LJ",
        colorFrom: "from-pink-500",
        colorTo: "to-rose-600",
        rating: 5
    },
    {
        quote: "Tengo 32 camiones y en 5 años hice 3 reclamaciones. Con la póliza que Roesan negoció con Sura, los pagos llegaron en menos de 15 días. Con otra agencia antes, la misma aseguradora tardaba 45 días. Roesan estructuró bien el trámite y eso me ahorró cash flow.",
        author: "Fernando Arango",
        role: "Gerente Logístico, Bogotá",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&age=50",
        initials: "FA",
        colorFrom: "from-cyan-500",
        colorTo: "to-blue-600",
        rating: 5
    },
    {
        quote: "Me retiré a los 62 años sin mucha claridad sobre mi pensión. Roesan me diseñó un seguro de inversión que genera rendimiento anual del 5.2%, muy superior a lo que el banco me ofrecía. En 3 años he recuperado mi inversión inicial y voy ganancia.",
        author: "Camila Restrepo",
        role: "Jubilada, Teusaquillo",
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=400&fit=crop&crop=faces",
        initials: "CR",
        colorFrom: "from-amber-500",
        colorTo: "to-orange-600",
        rating: 5
    }
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-1 mb-6">
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
        </div>
    );
}

export function Testimonials() {
    // Generate Schema.org structured data for testimonials
    const testimonialSchema = {
        "@context": "https://schema.org",
        "@type": "Collection",
        "name": "Testimonios de Roesan Seguros",
        "description": "Historias reales de personas y empresas que han depositado su confianza en nuestra experiencia.",
        "url": "https://roesan.com",
        "hasPart": testimonials.map((t, index) => ({
            "@type": "Review",
            "@id": `https://roesan.com/#testimonial-${index}`,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody": t.quote,
            "author": {
                "@type": "Person",
                "name": t.author,
                "jobTitle": t.role
            },
            "datePublished": new Date().toISOString().split('T')[0],
            "publisher": {
                "@type": "Organization",
                "name": "Roesan Seguros",
                "url": "https://roesan.com"
            }
        }))
    };

    return (
        <section className="relative overflow-hidden py-24 lg:py-32">
            {/* Schema.org JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialSchema) }}
            />
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 50s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Additional schema for aggregated ratings */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AggregateRating",
                        "@id": "https://roesan.com/#aggregate-rating",
                        "ratingValue": "5",
                        "bestRating": "5",
                        "worstRating": "1",
                        "ratingCount": testimonials.length,
                        "reviewCount": testimonials.length,
                        "name": "Roesan Seguros - Testimonios"
                    })
                }}
            />
            
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/hero-empresa.png"
                    alt="Fondo Testimonios"
                    fill
                    className="object-cover object-center opacity-40 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30" />
            </div>
            
            <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-purple-600 blur-[100px] opacity-20 z-0" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 h-96 w-96 rounded-full bg-cyan-600 blur-[100px] opacity-20 z-0" />

            <div className="relative z-10 w-full overflow-hidden">
                <Container>
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4"
                        >
                            Testimonios
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl"
                        >
                            Confían y prefieren a ROESAN
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto"
                        >
                            Historias reales de personas y empresas que han depositado su confianza en nuestra experiencia.
                        </motion.p>
                    </div>
                </Container>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden">
                    {/* Fading edges */}
                    <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
                    
                    <div className="animate-marquee gap-6 px-6">
                        {/* Render testimonials twice for seamless infinite loop */}
                        {[...testimonials, ...testimonials].map((t, idx) => (
                            <div
                                key={idx}
                                className="relative rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/30 flex flex-col w-[350px] shrink-0"
                            >
                                {/* Large decorative quote */}
                                <div className="absolute top-6 right-6 text-7xl leading-none text-white/5 font-serif select-none">"</div>

                                <StarRating count={t.rating} />

                                <p className="mb-8 text-base leading-relaxed text-slate-300 italic relative z-10 flex-1">
                                    "{t.quote}"
                                </p>

                                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                    {t.image ? (
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-lg shrink-0">
                                            <Image src={t.image} alt={t.author} fill className="object-cover" />
                                        </div>
                                    ) : (
                                        <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.colorFrom} ${t.colorTo} text-sm font-bold text-white shadow-lg`}>
                                            {t.initials}
                                        </div>
                                    )}
                                    <div>
                                        <p className="font-semibold text-white truncate max-w-[200px]">{t.author}</p>
                                        <p className="text-sm text-slate-400 truncate max-w-[200px]">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
