import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Nosotros | Historia y Experiencia",
    description: "Conoce a Roesan Seguros. Más de 40 años protegiendo el patrimonio de las familias y empresas colombianas con honestidad, respaldo y cobertura personalizada.",
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
