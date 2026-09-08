import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

const homeTitle = "Roesan Seguros | Protección que se adapta a tu vida";
const homeDescription =
  "Agencia de seguros con más de 40 años de experiencia. Seguros de vida, salud, vehículos y empresariales en Colombia.";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
};

const insuranceAgencyJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://roesan.com/#insurance-agency",
  name: "Roesan Seguros",
  legalName: "ORGANIZACION DE SEGUROS ROESAN LTDA.",
  description:
    "Agencia de seguros fundada en 1982. Más de 40 años protegiendo el patrimonio y la tranquilidad de familias y empresas colombianas.",
  url: "https://roesan.com/",
  logo: "https://roesan.com/logo-roesan.png",
  image: "https://roesan.com/logo-roesan.png",
  telephone: "+573002114998",
  email: "administrativo@roesan.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle 109 #19-36 oficina 203",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+573002114998",
      email: "administrativo@roesan.com",
      contactType: "administrative",
      availableLanguage: "Spanish",
    },
    {
      "@type": "ContactPoint",
      telephone: "+573126000414",
      email: "comercial@roesan.com",
      contactType: "sales",
      availableLanguage: "Spanish",
    },
  ],
  areaServed: { "@type": "Country", name: "Colombia" },
  currenciesAccepted: "COP",
  openingHours: "Mo-Fr 08:30-17:00",
  sameAs: [
    "https://www.facebook.com/Roesanltda/",
    "https://www.instagram.com/roesanseguros",
    "https://co.linkedin.com/company/roesan-agencia-de-seguros",
  ],
};

export default function Home() {
  return (
    <>
      <script
        id="roesan-insurance-agency-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(insuranceAgencyJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <StatsSection />

      {/* Final CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-slate-900/90 to-cyan-900/90 backdrop-blur-sm" />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-familia.png"
            alt=""
            fill
            aria-hidden="true"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
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
                  Solicitar asesoría
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a
                href="https://wa.me/573126000414"
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
