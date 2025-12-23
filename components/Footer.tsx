import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Container } from "./ui/Container";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-12">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="relative h-8 w-32 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all brightness-0">
                            <Image
                                src="/logo-roesan.png"
                                alt="Roesan"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Roesan Seguros. Todos los derechos reservados.
                    </div>

                    <div className="flex gap-6">
                        <Link href="#" className="text-slate-400 hover:text-navy-800 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-navy-800 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-navy-800 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-navy-800 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
