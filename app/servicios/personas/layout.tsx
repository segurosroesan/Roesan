import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Seguros para Personas y Familias | Roesan Seguros",
    description: "Conoce nuestras opciones en Seguro de Vida, Salud, Automóviles, Exequial y más. Protege lo que más valoras con la asesoría de expertos.",
};

export default function PersonasHubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
