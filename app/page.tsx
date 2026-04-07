import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <StatsSection />
      <Testimonials />

      {/* Final CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-cyan-900" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/hero-familia.png')" }}
        />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6">
              ¿Listo para proteger lo que más importa?
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Recibe asesoría personalizada sin costo. No importa si necesitas
              un seguro personal o empresarial, nuestro equipo te guía paso a paso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-cyan-50 font-bold px-8 py-4 rounded-full text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  Solicitar asesoría gratuita
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a
                href="https://wa.me/573002114998"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp directo
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
