import type { Metadata } from "next";
import BrochureViewer from "@/components/ui/BrochureViewer";

export const metadata: Metadata = {
  title: "Brochure Seguros Empresas 2026",
  description:
    "Portafolio completo de seguros empresariales Roesan: responsabilidad civil, todo riesgo, transporte, ciberseguridad, pólizas colectivas y más.",
  robots: { index: false, follow: true },
};

export default function BrochureEmpresasPage() {
  return (
    <BrochureViewer
      pdfUrl="/assets/brochures/Brochure-seguros-empresas-2026.pdf"
      fileName="Brochure-seguros-empresas-2026.pdf"
      title="Seguros Empresas 2026 — Roesan"
    />
  );
}
