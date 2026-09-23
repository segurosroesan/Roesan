import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Contacto y Asesoría en Seguros en Bogotá",
    description: "Contáctanos para recibir asesoría personalizada en seguros en Bogotá. Encuentra opciones para personas y empresas y solicita información o una cotización.",
    path: "/contacto",
    image: "/images/sede_roesan_clean_v2.png",
});

export default function ContactoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
