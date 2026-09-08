import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Contacto | Asesoría en Seguros",
    description: "Contáctanos en Roesan Seguros. Visítanos en nuestra oficina en Bogotá o escríbenos para recibir cotizaciones y asesoría personalizada en seguros para ti o tu empresa.",
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
