import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Catálogo de seguros 2026",
  description:
    "Descarga o visualiza nuestros brochures de seguros para personas y empresas. Conoce todos los productos y coberturas que Roesan tiene para ti.",
  path: "/brochures",
});

const brochures = [
  {
    slug: "personas",
    title: "Seguros Personas 2026",
    description: "Vehículos, vida, hogar, salud, mascotas y más. Todo lo que tu familia necesita.",
    file: "/assets/brochures/Brochure-seguros-personas-2026.pdf",
    fileName: "Brochure-seguros-personas-2026.pdf",
    color: "#51408d",
    tag: "Personas",
    pages: "17 páginas",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    slug: "empresas",
    title: "Seguros Empresas 2026",
    description: "RC, todo riesgo, transporte, pólizas colectivas, cumplimiento y ciberseguridad.",
    file: "/assets/brochures/Brochure-seguros-empresas-2026.pdf",
    fileName: "Brochure-seguros-empresas-2026.pdf",
    color: "#61bbe4",
    tag: "Empresas",
    pages: "18 páginas",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
];

export default function BrochuresPage() {
  return (
    <div className="bg-transparent">
      {/* Hero */}
      <section className="pt-36 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#51408d]/5 via-transparent to-[#61bbe4]/5 pointer-events-none" />
        <Container className="relative z-10">
          <span className="inline-block bg-[#51408d]/10 text-[#51408d] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Material Comercial
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            Brochures <span className="text-[#51408d]">Roesan</span> 2026
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Conoce todo nuestro portafolio de seguros. Puedes visualizarlos aquí o descargarlos para compartir.
          </p>
        </Container>
      </section>

      {/* Cards */}
      <section className="pb-24">
        <Container>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {brochures.map((b) => (
              <div
                key={b.slug}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Card header */}
                <div
                  className="h-28 flex items-center justify-center relative"
                  style={{ background: `linear-gradient(135deg, ${b.color}15, ${b.color}30)` }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md"
                    style={{ backgroundColor: b.color }}
                  >
                    {b.icon}
                  </div>
                  <span
                    className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: b.color }}
                  >
                    {b.tag}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  {/* PDF icon + name */}
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-8 h-10 shrink-0 mt-0.5" viewBox="0 0 32 40" fill="none">
                      <rect width="32" height="40" rx="4" fill="#f1f5f9"/>
                      <path d="M20 0v8h8" fill="#e2e8f0"/>
                      <path d="M20 0l8 8H20V0z" fill="#cbd5e1"/>
                      <text x="5" y="28" fontSize="9" fontWeight="bold" fill="#ef4444">PDF</text>
                    </svg>
                    <div>
                      <p className="font-semibold text-slate-800 leading-tight">{b.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{b.pages} · PDF</p>
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{b.description}</p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href={`/brochures/${b.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
                      style={{ backgroundColor: b.color }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      Ver brochure
                    </Link>
                    <a
                      href={b.file}
                      download={b.fileName}
                      className="flex-1 flex items-center justify-center gap-2 border text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors hover:bg-slate-50"
                      style={{ borderColor: b.color, color: b.color }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      Descargar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact nudge */}
          <div className="text-center mt-16">
            <p className="text-slate-400 text-sm mb-3">
              ¿Quieres que te enviemos los brochures por correo?
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-[#51408d] font-semibold text-sm hover:underline"
            >
              Contáctanos →
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
