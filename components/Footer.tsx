import { Facebook, Instagram, Linkedin, Phone, MapPin, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { Container } from "./ui/Container";
import Image from "next/image";

const footerLinks = {
    servicios: [
        { label: "Empresariales", href: "/servicios/empresas" },
        { label: "Personas y Hogar", href: "/servicios/personas" },
        { label: "Vida", href: "/servicios/vida" },
        { label: "Salud", href: "/servicios/salud" },
        { label: "Autos", href: "/servicios/autos" },
        { label: "ARL y Vida Grupo", href: "/servicios/arl-vida-grupo" },
        { label: "Cumplimiento", href: "/servicios/cumplimiento" },
        { label: "Copropiedades", href: "/servicios/copropiedades" },
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
        <footer className="relative bg-[#1e103c]/90 backdrop-blur-md text-slate-300 overflow-hidden border-t border-white/10">
            <Container>
                {/* Main Footer Grid */}
                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="relative h-10 w-44 brightness-0 invert opacity-90">
                            <Image
                                src="/logo-roesan.png"
                                alt="Roesan Seguros"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm text-slate-400">
                            Agencia de seguros fundada en 1982. Más de 40 años protegiendo el patrimonio y la tranquilidad de familias y empresas colombianas.
                        </p>
                        {/* Quick Contact */}
                        <div className="space-y-3">
                            <a href="tel:+573002114998" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                                    <Phone className="w-3.5 h-3.5" />
                                </div>
                                <span>+57 300 211 4998 <span className="text-slate-500 text-xs">(Administrativo)</span></span>
                            </a>
                            <a href="tel:+573126000414" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                                    <Phone className="w-3.5 h-3.5" />
                                </div>
                                <span>+57 312 600 0414 <span className="text-slate-500 text-xs">(Comercial)</span></span>
                            </a>
                            <a href="mailto:comercial@roesan.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                                    <Mail className="w-3.5 h-3.5" />
                                </div>
                                comercial@roesan.com
                            </a>
                            <div className="flex items-start gap-3 text-sm">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <MapPin className="w-3.5 h-3.5" />
                                </div>
                                Calle 109 #19-36 of. 203, Bogotá, Colombia
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                                    <Clock className="w-3.5 h-3.5" />
                                </div>
                                Lun–Vie: 8:30 am – 5:00 pm
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
                            <a href="https://www.facebook.com/Roesanltda/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all" aria-label="Facebook">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/roesanseguros" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all" aria-label="Instagram">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://co.linkedin.com/company/roesan-agencia-de-seguros" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all" aria-label="LinkedIn">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Roesan Seguros. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                        <Link href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link>
                        <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
