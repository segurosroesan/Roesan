import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Seguros para personas y familias",
    description: "Conoce nuestras opciones en Seguro de Vida, Salud, Automóviles, Exequial y más. Protege lo que más valoras con la asesoría de expertos.",
    path: "/servicios/personas",
    image: "/images/banner-personas.png",
});

export default function PersonasHubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
