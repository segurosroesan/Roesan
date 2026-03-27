import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nosotros | Historia y Experiencia",
    description: "Conoce a Roesan Seguros. Más de 40 años protegiendo el patrimonio de las familias y empresas colombianas con honestidad, respaldo y cobertura personalizada.",
};

export default function NosotrosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
