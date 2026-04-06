import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsSection />
      <ServicesGrid />
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-20 bg-white/70 backdrop-blur-md text-center">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              ¿Listo para asegurar tu futuro?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Contacta con nosotros hoy mismo y recibe una asesoría personalizada sin compromiso.
            </p>
            <div className="mt-8">
              <Button size="lg">Hablemos Ahora</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
