import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidad | Roesan Seguros",
    description:
        "Política de tratamiento de datos personales de Roesan Seguros, de acuerdo con la Ley 1581 de 2012 y sus decretos reglamentarios.",
};

export default function PrivacidadPage() {
    return (
        <div className="bg-white">
            <section className="bg-slate-900 pt-32 pb-20">
                <Container className="max-w-3xl text-center">
                    <h1 className="text-4xl font-bold text-white">
                        Política de Privacidad
                    </h1>
                    <p className="mt-4 text-slate-300">
                        Conforme a la Ley 1581 de 2012 — Habeas Data Colombia
                    </p>
                </Container>
            </section>

            <section className="py-16">
                <Container className="max-w-3xl">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <p className="text-slate-600">
                            <strong>Última actualización:</strong> Marzo de 2026
                        </p>

                        <h2>1. Responsable del tratamiento</h2>
                        <p>
                            <strong>ROESAN SEGUROS</strong> (razón social: Roesan S.A.S.), con
                            domicilio en Calle 109 #19-36 of. 203, Bogotá D.C., Colombia,
                            correo electrónico:{" "}
                            <a href="mailto:administrativo@roesan.com.co">
                                administrativo@roesan.com.co
                            </a>
                            , es el responsable del tratamiento de los datos personales que
                            usted suministre a través de nuestro sitio web y formularios.
                        </p>

                        <h2>2. Finalidad del tratamiento</h2>
                        <p>Los datos personales recopilados se utilizarán para:</p>
                        <ul>
                            <li>Atender solicitudes de cotización y asesoría en seguros.</li>
                            <li>Gestionar la relación comercial y contractual.</li>
                            <li>Enviar información sobre productos, servicios y novedades del sector.</li>
                            <li>Cumplir obligaciones legales y regulatorias.</li>
                        </ul>

                        <h2>3. Datos recopilados</h2>
                        <p>Podemos recopilar, entre otros, los siguientes datos:</p>
                        <ul>
                            <li>Nombre completo</li>
                            <li>Correo electrónico</li>
                            <li>Número de teléfono o celular</li>
                            <li>Ciudad de residencia</li>
                            <li>Información relacionada con el tipo de seguro solicitado</li>
                        </ul>

                        <h2>4. Derechos del titular</h2>
                        <p>
                            De conformidad con la Ley 1581 de 2012, usted como titular de
                            datos personales tiene derecho a:
                        </p>
                        <ul>
                            <li>Conocer, actualizar y rectificar sus datos personales.</li>
                            <li>
                                Solicitar prueba de la autorización otorgada para el tratamiento
                                de sus datos.
                            </li>
                            <li>
                                Ser informado sobre el uso que se ha dado a sus datos personales.
                            </li>
                            <li>
                                Revocar la autorización otorgada para el tratamiento de sus datos.
                            </li>
                            <li>
                                Presentar quejas ante la Superintendencia de Industria y Comercio
                                (SIC) por infracciones a la ley.
                            </li>
                        </ul>

                        <h2>5. Canal de atención</h2>
                        <p>
                            Para ejercer sus derechos, comuníquese con nosotros a través de:
                        </p>
                        <ul>
                            <li>
                                <strong>Correo:</strong>{" "}
                                <a href="mailto:administrativo@roesan.com.co">
                                    administrativo@roesan.com.co
                                </a>
                            </li>
                            <li>
                                <strong>Teléfono:</strong> +57 601 629 4040
                            </li>
                            <li>
                                <strong>Dirección:</strong> Calle 109 #19-36 of. 203, Bogotá
                            </li>
                        </ul>

                        <h2>6. Vigencia</h2>
                        <p>
                            Esta política rige desde marzo de 2026. Nos reservamos el derecho
                            de modificarla, comunicando los cambios a través de nuestro sitio
                            web.
                        </p>

                        <div className="mt-8 rounded-xl bg-amber-50 border border-amber-200 p-6">
                            <p className="text-amber-800 text-sm font-medium">
                                ⚖️ Aviso legal: La información suministrada en este sitio web es
                                de carácter informativo y no constituye asesoría contractual. Para
                                la vinculación de una póliza se requiere un análisis detallado de
                                su perfil de riesgo con un asesor autorizado.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
