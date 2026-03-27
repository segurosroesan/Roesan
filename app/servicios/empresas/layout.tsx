import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Seguros para Empresas y PYMES | Roesan Seguros",
    description: "Te asesoramos en Seguros Colectivos, ARL, Cumplimiento, Responsabilidad Civil y Transporte. Protege tu negocio, empleados y activos corporativos.",
};

export default function EmpresasHubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
