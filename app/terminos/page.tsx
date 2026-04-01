import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Términos y Condiciones | Roesan Seguros",
    description:
        "Términos y condiciones de uso del sitio web y los servicios de asesoría en seguros de Roesan Seguros.",
};

export default function TerminosPage() {
    return (
        <div className="bg-white">
            <section className="bg-slate-900 py-20">
                <Container className="max-w-3xl text-center">
                    <h1 className="text-4xl font-bold text-white">
                        Términos y Condiciones
                    </h1>
                    <p className="mt-4 text-slate-300">
                        Condiciones de uso del sitio web roesan.com.co
                    </p>
                </Container>
            </section>

            <section className="py-16">
                <Container className="max-w-3xl">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <p className="text-slate-600">
                            <strong>Última actualización:</strong> Marzo de 2026
                        </p>

                        <h2>1. Aceptación de los términos</h2>
                        <p>
                            Al acceder y utilizar el sitio web de <strong>Roesan Seguros</strong>{" "}
                            (roesan.com.co), usted acepta los presentes Términos y Condiciones.
                            Si no está de acuerdo, le pedimos que no utilice nuestro sitio.
                        </p>

                        <h2>2. Uso del sitio</h2>
                        <p>El usuario se compromete a:</p>
                        <ul>
                            <li>
                                Proporcionar información veraz al completar formularios de
                                cotización o contacto.
                            </li>
                            <li>
                                No utilizar el sitio con fines fraudulentos, ilegales o que
                                vulneren derechos de terceros.
                            </li>
                            <li>
                                No intentar acceder de forma no autorizada a los sistemas o
                                servidores del sitio.
                            </li>
                        </ul>

                        <h2>3. Información y asesoría</h2>
                        <p>
                            La información publicada en este sitio web tiene carácter
                            informativo y educativo. Las cotizaciones generadas a través de
                            formularios son aproximaciones y no constituyen una oferta formal de
                            póliza. La vinculación de un seguro requiere la evaluación por parte
                            de un asesor autorizado y la aceptación por parte de la aseguradora.
                        </p>

                        <h2>4. Propiedad intelectual</h2>
                        <p>
                            Todo el contenido del sitio (textos, logos, diseños, imágenes) es
                            propiedad de Roesan Seguros o de sus respectivos titulares. Queda
                            prohibida su reproducción, distribución o modificación sin
                            autorización expresa.
                        </p>

                        <h2>5. Limitación de responsabilidad</h2>
                        <p>
                            Roesan Seguros no será responsable por daños directos o indirectos
                            derivados del uso o imposibilidad de uso del sitio web, de la
                            información contenida en él, o de errores u omisiones en los
                            contenidos.
                        </p>

                        <h2>6. Modificaciones</h2>
                        <p>
                            Roesan Seguros se reserva el derecho de modificar estos Términos y
                            Condiciones en cualquier momento. Los cambios entrarán en vigor
                            desde su publicación en el sitio.
                        </p>

                        <h2>7. Ley aplicable</h2>
                        <p>
                            Estos Términos y Condiciones se rigen por las leyes de la República
                            de Colombia. Cualquier controversia será resuelta conforme a la
                            legislación colombiana vigente.
                        </p>

                        <h2>8. Contacto</h2>
                        <p>
                            Para consultas sobre estos términos, escríbanos a{" "}
                            <a href="mailto:administrativo@roesan.com.co">
                                administrativo@roesan.com.co
                            </a>
                            .
                        </p>

                        <div className="mt-8 rounded-xl bg-amber-50 border border-amber-200 p-6">
                            <p className="text-amber-800 text-sm font-medium">
                                ⚖️ Aviso legal: La información publicada en este sitio es
                                informativa y no constituye asesoría contractual. Las condiciones
                                de cada póliza están determinadas por el contrato suscrito con la
                                aseguradora correspondiente.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
