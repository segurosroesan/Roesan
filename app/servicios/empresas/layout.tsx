import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Seguros para empresas y PYMES",
    description: "Te asesoramos en Seguros Colectivos, ARL, Cumplimiento, Responsabilidad Civil y Transporte. Protege tu negocio, empleados y activos corporativos.",
    path: "/servicios/empresas",
    image: "/images/banner-empresas.png",
});

export default function EmpresasHubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
