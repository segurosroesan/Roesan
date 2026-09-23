import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Seguros para Personas y Familias en Colombia",
    description:
        "Encuentra seguros para personas y familias en Colombia: vida, salud, autos, hogar, exequial, mascotas y más. Recibe asesoría para elegir la protección adecuada.",
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
