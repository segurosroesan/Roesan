"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
    Mail, MapPin, Phone, Clock, Send, CheckCircle2,
    Loader2, MessageCircle, Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { init, tx, id } from "@instantdb/react";

// Conexión directa al App ID — bypasses local schema for contact_messages
const APP_ID = process.env.NEXT_PUBLIC_INSTANT_APP_ID || "636468fb-7b17-409e-a391-268cc24d6853";
const contactDb = init({ appId: APP_ID });

const INSURANCE_TOPICS = [
    "Seguro de Auto / Vehículo",
    "Seguro de Salud / Medicina Prepagada",
    "Seguro de Vida",
    "Seguro Empresarial / PYME",
    "Póliza de Cumplimiento",
    "Renovación de póliza existente",
    "Otro",
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        topic: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const createdAt = Date.now();
            const composedMessage = [
                formData.topic ? `Tema: ${formData.topic}` : "",
                formData.message,
            ].filter(Boolean).join("\n\n");

            await contactDb.transact(
                tx.contact_messages[id()].update({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    message: composedMessage || "(sin mensaje)",
                    createdAt,
                })
            );
            
            fetch("/api/lead-notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    origin: "Contacto",
                    createdAt,
                    leadName: formData.name,
                    leadPhone: formData.phone,
                    leadEmail: formData.email,
                    topic: formData.topic,
                    message: formData.message,
                }),
            }).catch(console.error);
            setStatus("success");
            setFormData({ name: "", phone: "", email: "", topic: "", message: "" });
        } catch (err) {
            console.error("Error saving message:", err);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const getWhatsAppLink = () => {
        const msg = encodeURIComponent(`Hola, me contacté por la web de ROESAN. Soy ${formData.name || 'un visitante'} y me interesa asesoría sobre ${formData.topic || 'seguros'}.`);
        return `https://wa.me/573002114998?text=${msg}`;
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="bg-slate-900 pb-32 pt-36 text-center lg:pt-48">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-4"
                    >
                        <Shield className="w-4 h-4" />
                        Asesoría 100% gratuita y sin compromiso
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl font-medium leading-[1.1] text-white sm:text-5xl"
                    >
                        Tu asesor personal está<br />
                        <span className="text-purple-400">a un mensaje</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-lg text-slate-300 max-w-xl mx-auto"
                    >
                        Un asesor te contactará a la brevedad posible en horario hábil.
                    </motion.p>
                </Container>
            </div>

            <Container className="relative -mt-20 pb-20">
                <div className="grid gap-8 lg:grid-cols-2">

                    {/* Contact Info Cards */}
                    <div className="space-y-4">
                        {[
                            {
                                icon: MapPin,
                                title: "Visítanos",
                                content: "Calle 109 #19-36 of. 203, Bogotá, Colombia",
                                href: "https://maps.google.com/?q=Calle+109+%2319-36+Oficina+203,+Bogot%C3%A1,+Colombia",
                                color: "text-primary",
                                bg: "bg-purple-50",
                                delay: 0
                            },
                            { icon: Phone, title: "Llámanos", content: "+57 3002114998", color: "text-primary", bg: "bg-purple-50", delay: 0.1 },
                            { icon: Mail, title: "Escríbenos", content: "comercial@roesan.com", color: "text-primary", bg: "bg-purple-50", delay: 0.2 },
                            { icon: Clock, title: "Horario de atención", content: "Lun–Vie: 8:30 am – 5:00 pm", color: "text-primary", bg: "bg-purple-50", delay: 0.3 },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: item.delay }}
                                className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-lg hover:-translate-y-0.5"
                            >
                                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
                                    {item.href ? (
                                        <p className="text-slate-600 text-sm mt-0.5">
                                            Dirección:{" "}
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary font-medium underline underline-offset-2 hover:text-purple-800"
                                            >
                                                {item.content}
                                            </a>
                                        </p>
                                    ) : (
                                        <p className="text-slate-600 text-sm mt-0.5">{item.content}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* WhatsApp quick-access card */}
                        <motion.a
                            href="https://wa.me/573002114998"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-5 rounded-2xl bg-[#25D366] p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group"
                        >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20">
                                <MessageCircle className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-sm">¿Urgente? Escríbenos por WhatsApp</h3>
                                <p className="text-white/80 text-sm mt-0.5">Respuesta inmediata en horario hábil →</p>
                            </div>
                        </motion.a>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-900/5 lg:p-10"
                    >
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-slate-900">Solicitar asesoría gratuita</h2>
                            <p className="mt-1.5 text-slate-500 text-sm">
                                Cuéntanos qué necesitas y un experto revisará tu caso personalmente.
                            </p>
                        </div>

                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-10 text-center"
                                >
                                    <div className="mb-4 rounded-full bg-emerald-100 p-3 text-emerald-600">
                                        <CheckCircle2 className="h-12 w-12" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">¡Solicitud recibida!</h3>
                                    <p className="mt-2 text-slate-500 text-sm max-w-xs">
                                        Un asesor de ROESAN revisará tu caso y te contactará a la brevedad posible.
                                    </p>

                                    <a
                                        href={getWhatsAppLink()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        ¿Quieres respuesta inmediata? WhatsApp →
                                    </a>

                                    <Button
                                        variant="outline"
                                        className="mt-3 w-full"
                                        onClick={() => setStatus("idle")}
                                    >
                                        Enviar otro mensaje
                                    </Button>
                                </motion.div>
                            ) : (
                                <form key="form" onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name + Phone */}
                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                                                Nombre *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Juan Pérez"
                                                className="block w-full rounded-lg border-0 bg-slate-50 py-2.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-primary sm:text-sm transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                                                Celular WhatsApp *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="300 000 0000"
                                                className="block w-full rounded-lg border-0 bg-slate-50 py-2.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-primary sm:text-sm transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                                            Correo electrónico *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="tu@correo.com"
                                            className="block w-full rounded-lg border-0 bg-slate-50 py-2.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-primary sm:text-sm transition-all"
                                        />
                                    </div>

                                    {/* Topic selector */}
                                    <div>
                                        <label htmlFor="topic" className="block text-sm font-medium text-slate-700 mb-1.5">
                                            ¿Sobre qué tipo de seguro? *
                                        </label>
                                        <select
                                            id="topic"
                                            required
                                            value={formData.topic}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border-0 bg-slate-50 py-2.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-primary sm:text-sm transition-all"
                                        >
                                            <option value="">Selecciona un tema...</option>
                                            {INSURANCE_TOPICS.map((t) => (
                                                <option key={t} value={t}>{t}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message — optional */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                                            Cuéntanos más{" "}
                                            <span className="text-slate-400 font-normal">(opcional)</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={3}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="¿Tienes alguna pregunta específica o contexto que quieras compartir?"
                                            className="block w-full rounded-lg border-0 bg-slate-50 py-2.5 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-primary sm:text-sm transition-all resize-none"
                                        />
                                    </div>

                                    {/* HABEAS DATA */}
                                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
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
                                            {" "}conforme a la Ley 1581 de 2012 (Habeas Data). La información será usada únicamente para asesoría en seguros.
                                        </label>
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full gap-2 rounded-xl group font-bold"
                                        disabled={status === "loading" || !acceptedTerms}
                                    >
                                        {status === "loading" ? (
                                            <>
                                                Enviando...
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                            </>
                                        ) : (
                                            <>
                                                Solicitar Asesoría Gratuita
                                                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </>
                                        )}
                                    </Button>

                                    {status === "error" && (
                                        <p className="text-center text-sm text-rose-500">
                                            Ocurrió un error. Por favor intenta de nuevo o escríbenos por WhatsApp.
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
                        <h2 className="text-xl font-bold text-white mb-1">¿Cómo llegar?</h2>
                        <p className="text-slate-400 text-sm">Calle 109 #19-36 of. 203, Bogotá, Colombia</p>
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
