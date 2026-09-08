import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Portafolio de seguros para empresas y personas",
    description: "Explora nuestro portafolio de seguros. Vida, salud, vehículos, empresariales, cumplimiento y más. Cobertura premium con las mejores aseguradoras de Colombia.",
    path: "/servicios",
});

export default function ServiciosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
