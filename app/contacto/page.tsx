"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "@/lib/instant";
import { id } from "@instantdb/react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            await db.transact(
                db.tx.contact_messages[id()].create({
                    ...formData,
                    createdAt: Date.now()
                })
            );
            setStatus("success");
            setFormData({ name: "", phone: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (err) {
            console.error("Error saving message:", err);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="bg-slate-900 pb-32 pt-24 text-center lg:pt-32">
                <Container>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
                    >
                        Hablemos
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-lg text-slate-300"
                    >
                        Estamos aquí para escucharte y asesorarte en lo que necesites.
                    </motion.p>
                </Container>
            </div>

            <Container className="relative -mt-20 pb-20">
                <div className="grid gap-8 lg:grid-cols-2">

                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        {[
                            { icon: MapPin, title: "Visítanos", content: "Calle 109 #19-36 of. 203, Bogotá", color: "text-emerald-500", delay: 0 },
                            { icon: Phone, title: "Llámanos", content: "+57 601 629 4040", color: "text-blue-500", delay: 0.1 },
                            { icon: Mail, title: "Escríbenos", content: "administrativo@roesan.com.co", color: "text-rose-500", delay: 0.2 },
                            { icon: Clock, title: "Horario", content: "Lun-Vie: 8:30am - 5:30pm", color: "text-amber-500", delay: 0.3 }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: item.delay }}
                                className="flex items-center gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 ${item.color}`}>
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                    <p className="text-slate-600">{item.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-900/5 lg:p-12"
                    >
                        <div className="mb-8 text-center sm:text-left">
                            <h2 className="text-2xl font-bold text-slate-900">Envíanos un mensaje</h2>
                            <p className="mt-2 text-slate-600">Te responderemos a la brevedad posible.</p>
                        </div>

                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="mb-4 rounded-full bg-emerald-100 p-3 text-emerald-600">
                                        <CheckCircle2 className="h-12 w-12" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">¡Mensaje Enviado!</h3>
                                    <p className="mt-2 text-slate-600">
                                        Gracias por contactarnos. Un asesor de Roesan se comunicará contigo pronto.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="mt-8"
                                        onClick={() => setStatus("idle")}
                                    >
                                        Enviar otro mensaje
                                    </Button>
                                </motion.div>
                            ) : (
                                <form key="form" onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-slate-900">Nombre</label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="mt-2 block w-full rounded-lg border-0 bg-slate-50 py-2.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-slate-900">Teléfono</label>
                                            <input
                                                type="text"
                                                id="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="mt-2 block w-full rounded-lg border-0 bg-slate-50 py-2.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">Correo electrónico</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="mt-2 block w-full rounded-lg border-0 bg-slate-50 py-2.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-900">Mensaje</label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="mt-2 block w-full rounded-lg border-0 bg-slate-50 py-2.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 transition-all"
                                        />
                                    </div>

                                    {/* HABEAS DATA */}
                                    <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                                        <input
                                            type="checkbox"
                                            id="acceptedTerms"
                                            checked={acceptedTerms}
                                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                                            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-purple-700 focus:ring-purple-600 shrink-0 cursor-pointer"
                                            required
                                        />
                                        <label htmlFor="acceptedTerms" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                                            Acepto el{" "}
                                            <a href="/privacidad" target="_blank" className="text-purple-700 underline hover:text-purple-900 font-medium">
                                                tratamiento de mis datos personales
                                            </a>
                                            {" "}conforme a la Ley 1581 de 2012 (Habeas Data). Entiendo que la información suministrada será usada para fines de asesoría en seguros.
                                        </label>
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full gap-2 rounded-xl group"
                                        disabled={status === "loading"}
                                    >
                                        {status === "loading" ? (
                                            <>
                                                Enviando...
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                            </>
                                        ) : (
                                            <>
                                                Enviar Mensaje
                                                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </>
                                        )}
                                    </Button>

                                    {status === "error" && (
                                        <p className="text-center text-sm text-rose-500">
                                            Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo.
                                        </p>
                                    )}
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </Container>

            {/* Google Maps */}
            <div className="w-full">
                <div className="bg-slate-900 py-8">
                    <Container>
                        <h2 className="text-xl font-bold text-white mb-2">¿Cómo llegar?</h2>
                        <p className="text-slate-400 text-sm">Calle 109 #19-36 of. 203, Bogotá D.C.</p>
                    </Container>
                </div>
                <div className="relative w-full" style={{ height: "420px" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.337396!2d-74.0535512!3d4.6954958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ab82e0f7677%3A0xdecfb384e0964bb2!2sAgencia%20de%20Seguros%20ROESAN%20ltda.!5e0!3m2!1ses!2sco!4v1711000000000!5m2!1ses!2sco"
                        width="100%"
                        height="420"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación Roesan Seguros"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}
