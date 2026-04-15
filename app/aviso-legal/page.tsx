import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aviso Legal | Roesan Seguros",
    description:
        "Aviso legal de Roesan Seguros. La información publicada en este sitio es de carácter informativo y no constituye asesoría contractual.",
};

export default function AvisoLegalPage() {
    return (
        <div className="bg-white">
            <section className="bg-slate-900 pt-32 pb-20">
                <Container className="max-w-3xl text-center">
                    <h1 className="text-4xl font-bold text-white">Aviso Legal</h1>
                    <p className="mt-4 text-slate-300">
                        Información legal obligatoria sobre el sitio web de Roesan Seguros
                    </p>
                </Container>
            </section>

            <section className="py-16">
                <Container className="max-w-3xl">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <p className="text-slate-600">
                            <strong>Última actualización:</strong> Marzo de 2026
                        </p>

                        <div className="my-8 rounded-xl bg-slate-50 border border-slate-200 p-8">
                            <p className="text-slate-800 text-xl font-semibold text-center leading-relaxed">
                                "La información contenida en este sitio web es de carácter
                                informativo y no constituye asesoría contractual."
                            </p>
                        </div>

                        <h2>Identificación del titular</h2>
                        <ul>
                            <li>
                                <strong>Razón Social:</strong> Roesan Seguros S.A.S.
                            </li>
                            <li>
                                <strong>Actividad:</strong> Agencia de seguros / Intermediación
                                de seguros en Colombia
                            </li>
                            <li>
                                <strong>Domicilio:</strong> Calle 109 #19-36 of. 203, Bogotá D.C.
                            </li>
                            <li>
                                <strong>Correo:</strong>{" "}
                                <a href="mailto:administrativo@roesan.com.co">
                                    administrativo@roesan.com.co
                                </a>
                            </li>
                            <li>
                                <strong>Teléfono:</strong> +57 601 629 4040
                            </li>
                        </ul>

                        <h2>Naturaleza de la información</h2>
                        <p>
                            El contenido de este sitio web (descripciones de coberturas,
                            simulaciones de precios, artículos de blog y cualquier otro
                            material) es de carácter orientativo y educativo. No constituye
                            en ningún caso:
                        </p>
                        <ul>
                            <li>Una oferta formal de contrato de seguro.</li>
                            <li>Una póliza de seguro vigente.</li>
                            <li>
                                Asesoría legal, financiera o actuarial con valor contractual.
                            </li>
                        </ul>
                        <p>
                            Las condiciones definitivas de cualquier póliza están determinadas
                            exclusivamente por el contrato suscrito con la aseguradora
                            correspondiente, conforme a la normativa de la Superintendencia
                            Financiera de Colombia.
                        </p>

                        <h2>Marco regulatorio</h2>
                        <p>
                            Roesan Seguros opera conforme a la legislación colombiana vigente,
                            incluyendo:
                        </p>
                        <ul>
                            <li>
                                <strong>Código de Comercio de Colombia</strong> — Libro IV
                                (Contrato de Seguro)
                            </li>
                            <li>
                                <strong>Estatuto Orgánico del Sistema Financiero</strong>
                            </li>
                            <li>
                                <strong>Ley 1581 de 2012</strong> — Protección de Datos
                                Personales (Habeas Data)
                            </li>
                            <li>
                                <strong>Decreto 1377 de 2013</strong> — Reglamentario de la Ley
                                1581
                            </li>
                        </ul>

                        <h2>Responsabilidad</h2>
                        <p>
                            Roesan Seguros no se hace responsable de las decisiones tomadas
                            basadas exclusivamente en la información publicada en este sitio.
                            Para obtener asesoría personalizada y vinculación de pólizas,
                            comuníquese directamente con nuestros asesores.
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    );
}
