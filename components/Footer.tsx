import { Facebook, Instagram, Linkedin, MessageCircle, Phone, MapPin, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { Container } from "./ui/Container";
import Image from "next/image";

const footerLinks = {
    servicios: [
        { label: "Vida y Salud", href: "/servicios/vida-y-salud" },
        { label: "Vehículos", href: "/servicios/vehiculos" },
        { label: "Empresariales", href: "/servicios/empresariales" },
        { label: "Personas y Hogar", href: "/servicios/personas" },
    ],
    empresa: [
        { label: "Nosotros", href: "/nosotros" },
        { label: "Servicios", href: "/servicios" },
        { label: "Blog", href: "/blog" },
        { label: "Contacto", href: "/contacto" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400">
            <Container>
                {/* Main Footer Grid */}
                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="relative h-10 w-44 brightness-0 invert opacity-80">
                            <Image
                                src="/logo-roesan.png"
                                alt="Roesan Seguros"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm text-slate-500">
                            Agencia de seguros fundada en 1982. Más de 40 años protegiendo el patrimonio y la tranquilidad de familias y empresas colombianas.
                        </p>
                        {/* Quick Contact */}
                        <div className="space-y-3">
                            <a href="tel:+576016294040" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                                    <Phone className="w-3.5 h-3.5" />
                                </div>
                                +57 601 629 4040
                            </a>
                            <a href="mailto:administrativo@roesan.com.co" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                                    <Mail className="w-3.5 h-3.5" />
                                </div>
                                administrativo@roesan.com.co
                            </a>
                            <div className="flex items-start gap-3 text-sm">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <MapPin className="w-3.5 h-3.5" />
                                </div>
                                Calle 109 #19-36 of. 203, Bogotá
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                                    <Clock className="w-3.5 h-3.5" />
                                </div>
                                Lun–Vie: 8:30am – 5:30pm
                            </div>
                        </div>
                    </div>

                    {/* Servicios Column */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
                            Nuestros Servicios
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.servicios.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empresa + RRSS Column */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
                            Empresa
                        </h4>
                        <ul className="space-y-3 mb-8">
                            {footerLinks.empresa.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                            Síguenos
                        </h4>
                        <div className="flex gap-3">
                            <a
                                href="https://wa.me/576016294040"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all" aria-label="Facebook">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all" aria-label="Instagram">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all" aria-label="LinkedIn">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                    <p>© {new Date().getFullYear()} Roesan Seguros. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/privacidad" className="hover:text-slate-400 transition-colors">Política de Privacidad</Link>
                        <Link href="/terminos" className="hover:text-slate-400 transition-colors">Términos y Condiciones</Link>
                        <Link href="/aviso-legal" className="hover:text-slate-400 transition-colors">Aviso Legal</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
