"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Home page has a light background, others have a dark hero section
    const isHome = pathname === "/";
    const forceLightMode = isHome || isScrolled;

    return (
        <nav
            className={`fixed top-0 z-40 w-full transition-all duration-300 ${isScrolled ? "glass-panel shadow-sm py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className={`relative h-12 w-48 transition-all duration-300 ${forceLightMode ? "brightness-0 opacity-80" : ""}`}>
                            <Image
                                src="/logo-roesan.png"
                                alt="Roesan Seguros"
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { name: "Inicio", href: "/" },
                            { name: "Nosotros", href: "/nosotros" },
                            { name: "Seguros Empresas", href: "/servicios#empresas" },
                            { name: "Seguros Personas", href: "/servicios#personas" },
                            { name: "Blog", href: "/blog" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-300 ${forceLightMode
                                    ? "text-slate-600 hover:text-purple-800"
                                    : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contacto">
                            <button className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 group hover:scale-105 hover:shadow-lg ${forceLightMode
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
                            { name: "Nosotros", href: "/nosotros" },
                            { name: "Seguros Empresas", href: "/servicios#empresas" },
                            { name: "Seguros Personas", href: "/servicios#personas" },
                            { name: "Blog", href: "/blog" },
                            { name: "Contáctanos", href: "/contacto", special: true },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${link.special
                                    ? "bg-purple-800 text-white mt-4"
                                    : "text-purple-800 hover:bg-slate-50"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

