import type { Metadata } from "next";
import BrochureViewer from "@/components/ui/BrochureViewer";

export const metadata: Metadata = {
  title: "Seguros para Empresas en Colombia: Portafolio 2026",
  description:
    "Conoce el portafolio de seguros para empresas en Colombia: responsabilidad civil, todo riesgo, transporte, ciberseguridad, pólizas colectivas y otras soluciones empresariales.",
  robots: { index: true, follow: true },
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
