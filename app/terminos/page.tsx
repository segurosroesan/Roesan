import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Términos y Condiciones | Roesan Seguros",
    description:
        "Términos y condiciones de uso del sitio web y los servicios de asesoría en seguros de Organización de Seguros Roesan Ltda.",
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
                        Condiciones generales de uso del sitio web y servicios asociados
                    </p>
                </Container>
            </section>

            <section className="py-16">
                <Container className="max-w-4xl">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <p className="text-slate-600 font-medium">
                            <strong>Última actualización:</strong> Abril de 2026
                        </p>
                        
                        <p>
                            Al acceder, navegar y utilizar el sitio web de Organización de Seguros Roesan Ltda. Nit. 860507906-5 (en adelante "Roesan Seguros", "la Compañía" o "nosotros"), usted acepta expresamente los presentes Términos y Condiciones. Le sugerimos leerlos detenidamente antes de formalizar cualquier solicitud de póliza o servicio.
                        </p>

                        <hr className="my-8" />

                        <h2>1. Definiciones</h2>
                        <ul>
                            <li><strong>La Compañía:</strong> Organización de Seguros Roesan Ltda. Nit. 860507906-5, agencia de seguros autorizada.</li>
                            <li><strong>Usuario o Cliente:</strong> Cualquier persona natural o jurídica que ingrese al sitio web, solicite cotizaciones o haga uso de nuestros servicios.</li>
                            <li><strong>Aseguradora o Entidad de Salud:</strong> Compañía debidamente autorizada por la Superintendencia Financiera de Colombia o entidad de salud, que asume los riesgos o presta el servicio amparado en las pólizas emitidas.</li>
                            <li><strong>Servicios:</strong> La intermediación, asesoría, acompañamiento en siniestros y cotización de seguros u otros productos de previsión ofrecidos mediante el Sitio Web.</li>
                        </ul>

                        <h2>2. Descripción de los Servicios Ofrecidos</h2>
                        <p>
                            Roesan Seguros actúa como <strong>intermediario (Agencia de Seguros)</strong> entre los Usuarios y las Aseguradoras. Nuestro alcance se enfoca en facilitar la búsqueda, cotización interactiva, asesoría experta y vinculación a soluciones de seguros (Autos, Salud, Vida, Pyme, Cumplimiento, entre otros). Ninguna cotización inicial vincula a la Aseguradora hasta que el Usuario cumpla con todos los requisitos de expedición.
                        </p>

                        <h2>3. Condiciones de Uso del Sitio Web</h2>
                        <p>
                            El acceso a nuestro sitio es libre y gratuito. No obstante, el Usuario se compromete a:
                        </p>
                        <ul>
                            <li>Suministrar datos veraces, exactos y vigentes en nuestros módulos de cotización (Ej. QuoteFunnel) y formularios de contacto.</li>
                            <li>No utilizar la plataforma para fines ilícitos, fraudulentos o que perjudiquen a la Compañía, a las Aseguradoras o a terceros.</li>
                            <li>Comprender que las proyecciones y costos mostrados en la cotización son referenciales. El costo definitivo es establecido directamente por la Aseguradora tras la evaluación de riesgo.</li>
                        </ul>

                        <h2>4. Proceso de Contratación y Validez de las Pólizas</h2>
                        <p>
                            El uso de nuestro cotizador y la selección de un plan no constituyen un contrato de seguro automático. Para que la póliza tenga total validez y cobertura, se requiere:
                        </p>
                        <ul>
                            <li>El diligenciamiento del formato de conocimiento del cliente (SARLAFT).</li>
                            <li>Aprobación por parte del departamento de expedición de la Aseguradora.</li>
                            <li>La realización exitosa de inspecciones o exámenes médicos requeridos (en el caso de autos, salud o vida).</li>
                            <li>La expedición formal y entrega de la póliza definitiva, así como el pago de la prima.</li>
                        </ul>

                        <h2>5. Pago de Primas y Reembolsos</h2>
                        <p>
                            El Usuario deberá realizar el pago de la prima anual o fraccionada utilizando los medios habilitados (débito bancario, tarjetas de crédito, financiación o pago directo a la Aseguradora). Roesan Seguros no realiza captación masiva ni retiene de manera indebida el dinero de la prima; este fluye hacia la Aseguradora correspondiente.
                            Las políticas de reembolsos, devoluciones y cancelaciones de pólizas están dictaminadas estrictamente por los condicionados generales de cada Aseguradora.
                        </p>

                        <h2>6. Política de Privacidad y Tratamiento de Datos Personales</h2>
                        <p>
                            En cabal cumplimiento a la Ley Estatutaria 1581 de 2012 y sus decretos reglamentarios, Roesan Seguros informa que los datos personales aportados por los Usuarios serán tratados bajo altos estándares de confidencialidad y seguridad. 
                            La recolección tiene como finalidad exclusiva la intermediación de seguros, generación de ofertas comparativas reales, prospección comercial, evaluación del riesgo (compartiendo la información de forma segura con la Aseguradora respectiva), y contacto operativo. El Usuario cuenta con los derechos de conocer, actualizar y rectificar la información proporcionada.
                        </p>

                        <h2>7. Régimen de Responsabilidad y Garantías</h2>
                        <p>
                            Al ser Roesan Seguros un intermediario, <strong>no asume directamente los riesgos objeto de seguro</strong>, ni presta los servicios médicos, mecánicos o de indemnización. La responsabilidad de indemnizar y cumplir el contrato de seguro recae exclusiva y jurídicamente sobre la Aseguradora emisora de la póliza avalada por la Superintendencia Financiera.
                            Roesan Seguros, sin embargo, se compromete a brindar orientación proactiva en caso de un evento o siniestro por parte del Usuario.
                        </p>

                        <h2>8. Comunicaciones y Notificaciones</h2>
                        <p>
                            Toda comunicación legal se dirigirá por medios formales a nuestra área encargada. Usted puede contactarnos para PQR o soporte a través de:
                        </p>
                        <ul>
                            <li><strong>Correo Electrónico:</strong> <a href="mailto:administrativo@roesan.com.co" className="text-slate-800 hover:text-slate-600">administrativo@roesan.com.co</a></li>
                            <li><strong>Línea de Atención WhatsApp:</strong> Nuestro equipo de asesores mediante el botón oficial en la web.</li>
                        </ul>

                        <h2>9. Modificación a los Términos y Condiciones</h2>
                        <p>
                            La Organización de Seguros Roesan Ltda. se reserva el derecho de actualizar, modificar o complementar estos Términos en cualquier momento. Las modificaciones regirán prospectivamente tras su publicación.
                        </p>

                        <h2>10. Ley Aplicable y Resolución de Controversias</h2>
                        <p>
                            Estos Términos y Condiciones están regulados y sometidos a las leyes de la República de Colombia. Las controversias se buscarán conciliar de forma rápida y directa, antes de elevarse a centros de arbitraje, la Superintendencia de Industria y Comercio o justicia ordinaria.
                        </p>

                        <div className="mt-12 rounded-xl bg-slate-50 border border-slate-200 p-8 shadow-sm">
                            <h3 className="text-lg font-semibold text-slate-900 mt-0">Aviso Legal Definitivo</h3>
                            <p className="text-slate-700 text-sm mb-0">
                                La información publicada en nuestro portal tiene propósitos informativos y no reemplaza los clausulados formales del contrato del seguro. Los amparos, exclusiones, límites y deducibles de cada plan están taxativamente indicados en la carátula y el condicionado general de la Aseguradora de libre elección del cliente, entregados en el momento de la expedición oficial.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

