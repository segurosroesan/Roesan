import type { Metadata } from "next";
import { Roboto, Philosopher } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Script from "next/script";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-philosopher",
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
        className={`${roboto.variable} ${philosopher.variable} antialiased flex min-h-screen flex-col font-sans text-slate-600 bg-white selection:bg-accent selection:text-accent-foreground`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
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
      </body>
    </html>
  );
}
