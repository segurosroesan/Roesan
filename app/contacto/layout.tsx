import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | Asesoría en Seguros",
    description: "Contáctanos en Roesan Seguros. Visítanos en nuestra oficina en Bogotá o escríbenos para recibir cotizaciones y asesoría personalizada en seguros para ti o tu empresa.",
    alternates: {
        canonical: "/contacto",
    },
};

export default function ContactoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
