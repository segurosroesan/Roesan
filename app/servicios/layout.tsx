import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portafolio de Soluciones | Seguros para Empresas y Personas",
    description: "Explora nuestro portafolio de seguros. Vida, salud, vehículos, empresariales, cumplimiento y más. Cobertura premium con las mejores aseguradoras de Colombia.",
};

export default function ServiciosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
