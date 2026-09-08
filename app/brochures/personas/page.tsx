import type { Metadata } from "next";
import BrochureViewer from "@/components/ui/BrochureViewer";

export const metadata: Metadata = {
  title: "Brochure Seguros Personas 2026",
  description:
    "Portafolio completo de seguros personales Roesan: vehículos, vida, hogar, salud, mascotas, educativo y más.",
  robots: { index: false, follow: true },
};

export default function BrochurePersonasPage() {
  return (
    <BrochureViewer
      pdfUrl="/assets/brochures/Brochure-seguros-personas-2026.pdf"
      fileName="Brochure-seguros-personas-2026.pdf"
      title="Seguros Personas 2026 — Roesan"
    />
  );
}
