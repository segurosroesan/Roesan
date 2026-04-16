"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Now that the hero banner is floating, we always need light mode (white navbar)
    const forceLightMode = true;

    return (
        <nav
            className={`fixed top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/60 ${isScrolled ? "shadow-md py-2" : "py-4"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-24 items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative h-16 w-60 transition-all duration-300 md:h-[4.5rem] md:w-72">
                            <Image
                                src={forceLightMode ? "/logo-roesan.png" : "/logo-roesan-blanco.png"}
                                alt="Roesan Seguros"
                                fill
                                className="object-contain transition-all duration-500 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-9">
                        {[
                            { name: "Inicio", href: "/" },
                            { name: "Seguros Personas", href: "/servicios/personas" },
                            { name: "Seguros Empresas", href: "/servicios/empresas" },
                            { name: "Quiénes Somos", href: "/nosotros" },
                            { name: "Blog", href: "/blog" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[15px] font-medium leading-none transition-colors duration-300 lg:text-base ${forceLightMode
                                    ? "text-slate-600 hover:text-purple-800"
                                    : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contacto">
                            <button className={`px-7 py-3 rounded-full text-[15px] font-medium transition-all duration-300 flex items-center gap-2 group hover:scale-105 hover:shadow-lg lg:text-base ${forceLightMode
                                ? "bg-purple-800 text-white hover:bg-purple-900"
                                : "bg-white text-purple-800 hover:bg-slate-50"
                                }`}>
                                <span>Contáctanos</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`transition-colors duration-300 ${forceLightMode ? "text-purple-800" : "text-white"}`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass-panel border-t border-slate-200 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="space-y-1 px-4 pb-6 pt-4">
                        {[
                            { name: "Inicio", href: "/" },
                            { name: "Seguros Personas", href: "/servicios/personas" },
                            { name: "Seguros Empresas", href: "/servicios/empresas" },
                            { name: "Quiénes Somos", href: "/nosotros" },
                            { name: "Blog", href: "/blog" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block rounded-xl px-4 py-3 text-[1.05rem] font-medium transition-colors text-purple-800 hover:bg-slate-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contacto"
                            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-purple-800 px-4 py-3 text-[1.05rem] font-medium text-white transition-all hover:bg-purple-900"
                            onClick={() => setIsOpen(false)}
                        >
                            <span>Contáctanos</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
