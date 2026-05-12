import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";
import { CreditCard, MonitorSmartphone, Phone } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Líneas de Asistencia de Aseguradoras | Roesan Seguros",
    description: "Teléfonos de contacto y líneas de atención de las principales aseguradoras en Colombia.",
};

const aseguradoras = [
    {
        nombre: "HDI",
        celular: "#224",
        fijo: "6013077050",
        nacional: "01 8000 113 390",
        pagina: "https://www.hdiseguros.com.co",
        pagos: "https://www.hdiseguros.com.co/pagos",
    },
    {
        nombre: "SURA",
        celular: "#888",
        fijo: "6014897941",
        nacional: "01 8000 51 8888",
        pagina: "https://www.sura.co/seguros/personas/movilidad/soat",
        pagos: "https://pagos.segurossura.com.co/pagos",
    },
    {
        nombre: "BOLÍVAR",
        celular: "#322",
        fijo: "6013811151",
        nacional: "018000 123322",
        pagina: "https://www.segurosbolivar.com/",
        pagos: "https://recaudos.segurosbolivar.com/login",
    },
    {
        nombre: "AXA COLPATRIA",
        celular: "#247",
        fijo: "6014235757",
        nacional: "01-8000-512620",
        pagina: "https://www.axacolpatria.co/home",
        pagos: "https://portalpagos.axacolpatria.co/pagosenlinea/",
    },
    {
        nombre: "SEGUROS DEL ESTADO",
        celular: "#224",
        fijo: "6014434818",
        nacional: "01 8000 123 010",
        pagina: "https://www.segurosdelestado.com/pages/serviciocliente/atencion",
        pagos: "https://portaldepago.segurosdelestado.com/pago-agil",
    },
    {
        nombre: "ALLIANZ",
        celular: "#265",
        fijo: "6015941133",
        nacional: "018000 513500",
        pagina: "https://www.allianz.co/clientes/todos-los-clientes/e-cliente.html",
        pagos: "https://www.allianz.co/clientes/todos-los-clientes/pagos.html",
    },
    {
        nombre: "MAPFRE",
        celular: "#624",
        fijo: "6013077024",
        nacional: "91 519 8000 01",
        pagina: "https://www.mapfre.com.co/contacto/",
        pagos: "https://cotiza.mapfre.com.co/pagosWeb/vista/paginas/noFilterIniPagosPublico.jsf",
    },
    {
        nombre: "QUALITAS",
        celular: "#963",
        fijo: "6016579650",
        nacional: "18000189873",
        pagina: "https://www.qualitascolombia.com.co/web/qco/inicio",
        pagos: "https://www.qualitascolombia.com.co/medios-de-pago",
    },
    {
        nombre: "PREVISORA",
        celular: "#345",
        fijo: "6013487555",
        nacional: "01 8000 910 554",
        pagina: "https://www.previsora.gov.co/automoviles-servicio-de-asistencia",
        pagos: "https://www.previsora.gov.co/web/guest/previpagos",
    },
    {
        nombre: "SBS",
        celular: "#360",
        fijo: "3183900000",
        nacional: "01 8000 911360",
        pagina: "https://www.sbseguros.co/servicio-al-cliente/contactanos",
        pagos: "https://www.sbseguros.co/servicio-al-cliente/alternativas-pagos",
    },
];

export default function DirectorioAseguradorasPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="relative pt-32 pb-20 overflow-hidden min-h-[400px] flex items-center">
                {/* Background Image with overlay */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/images/office-building.png"
                        alt="Fondo Líneas de Asistencia"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#1e103c]/70 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-slate-900/60"></div>
                </div>
                
                <Container className="max-w-4xl text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
                        Líneas de Asistencia de Aseguradoras
                    </h1>
                    <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                        Encuentra rápidamente los teléfonos de contacto, líneas de atención al cliente y enlaces directos para realizar tus pagos en cada una de las aseguradoras aliadas.
                    </p>
                </Container>
            </section>

            <section className="py-16 -mt-12 relative z-20">
                <Container className="max-w-7xl">
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="py-5 px-6 font-semibold text-slate-900 whitespace-nowrap text-[15px]">Compañía</th>
                                        <th className="py-5 px-6 font-semibold text-slate-900 whitespace-nowrap text-[15px]">Celular</th>
                                        <th className="py-5 px-6 font-semibold text-slate-900 whitespace-nowrap text-[15px]">Teléfono Fijo</th>
                                        <th className="py-5 px-6 font-semibold text-slate-900 whitespace-nowrap text-[15px]">Línea Nacional</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-sm">
                                    {aseguradoras.map((aseguradora) => (
                                        <tr key={aseguradora.nombre} className="hover:bg-slate-50/80 transition-colors group">
                                            <td className="py-4 px-6 font-bold text-slate-900 whitespace-nowrap group-hover:text-purple-700 transition-colors">
                                                {aseguradora.nombre}
                                            </td>
                                            <td className="py-4 px-6 text-slate-600 whitespace-nowrap font-medium">
                                                <div className="flex items-center gap-2">
                                                    <Phone className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-500 transition-colors" />
                                                    {aseguradora.celular}
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-slate-600 whitespace-nowrap font-medium">
                                                {aseguradora.fijo}
                                            </td>
                                            <td className="py-4 px-6 text-slate-600 whitespace-nowrap font-medium">
                                                {aseguradora.nacional}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
