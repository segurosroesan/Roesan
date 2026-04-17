import type { Metadata } from "next";
import { Roboto, Philosopher } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Script from "next/script";
import { UnicornBackground } from "@/components/ui/UnicornBackground";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "Roesan Seguros | Protección que se adapta a tu vida",
    template: "%s | Roesan Seguros",
  },
  description:
    "Agencia de seguros con más de 40 años de experiencia. Seguros de vida, salud, vehículos y empresariales respaldados por las mejores aseguradoras de Colombia.",
  keywords: [
    "seguros",
    "seguros Colombia",
    "seguro de vida",
    "seguro de vehiculo",
    "seguro empresarial",
    "aseguradora bogota",
    "Roesan",
    "corredora de seguros",
  ],
  authors: [{ name: "Roesan Seguros" }],
  creator: "Roesan Seguros",
  metadataBase: new URL("https://roesan.com.co"),
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://roesan.com.co",
    siteName: "Roesan Seguros",
    title: "Roesan Seguros | Protección que se adapta a tu vida",
    description:
      "Más de 40 años construyendo confianza y protegiendo el patrimonio de familias y empresas colombianas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roesan Seguros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roesan Seguros | Protección que se adapta a tu vida",
    description:
      "Más de 40 años construyendo confianza y protegiendo el patrimonio de familias y empresas colombianas.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${roboto.variable} antialiased flex min-h-screen flex-col font-sans text-slate-600 bg-transparent selection:bg-accent selection:text-accent-foreground`}
      >
        {/* Atmosphere Layer - Fixed and subtle */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Main Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fdfbff] via-[#fffaff] to-[#f9f5ff]" />
            
            {/* Soft Purple Glows (Blobs) */}
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-200/20 blur-[120px] rounded-full" />
            <div className="absolute top-[20%] -right-[5%] w-[30%] h-[40%] bg-cyan-100/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-[10%] left-[20%] w-[35%] h-[35%] bg-purple-100/30 blur-[110px] rounded-full" />
            
            {/* The Wave (Ola) */}
            <div className="absolute bottom-0 left-0 w-full opacity-40">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto translate-y-4">
                    <path fill="#e9e0f8" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </div>

        <UnicornBackground />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <div className="relative z-10"><Footer /></div>
        <ChatWidget />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DYVNSM6WJ2" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DYVNSM6WJ2');
          `}
        </Script>

        {/* Schema Markup */}
        <Script id="schema-local-business" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Roesan Seguros",
              "image": "https://roesan.com.co/logo-roesan.png",
              "description": "Agencia de seguros fundada en 1982. Más de 40 años protegiendo el patrimonio y la tranquilidad de familias y empresas colombianas.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle 109 #19-36 of. 203",
                "addressLocality": "Bogotá",
                "addressCountry": "CO"
              },
              "telephone": "+573002114998",
              "areaServed": ["CO"],
              "currenciesAccepted": "COP",
              "openingHours": "Mo-Fr 08:30-17:00",
              "url": "https://roesan.com.co"
            }
          `}
        </Script>
      </body>
    </html>
  );
}
