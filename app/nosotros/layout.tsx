import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Corredora de Seguros con Más de 40 Años de Experiencia",
    description:
        "Conoce la historia de una corredora de seguros con más de 40 años de experiencia en Colombia. Descubre nuestro equipo, trayectoria y enfoque de asesoría personalizada.",
    path: "/nosotros",
    image: "/images/banner_nosotros.png",
});

export default function NosotrosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
