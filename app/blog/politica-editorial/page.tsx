import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Política Editorial del blog",
  description: "Cómo Roesan selecciona fuentes, revisa, actualiza y corrige sus contenidos educativos sobre seguros.",
  path: "/blog/politica-editorial",
});

export default function EditorialPolicyPage() {
  return (
    <div className="bg-white"><header className="bg-slate-900 pb-20 pt-36 text-white"><Container className="max-w-3xl"><Link href="/blog" className="text-sm text-slate-300 hover:text-white">← Volver al blog</Link><h1 className="mt-7 font-serif text-4xl font-medium sm:text-5xl">Política Editorial</h1><p className="mt-5 text-xl leading-relaxed text-slate-300">Principios para publicar información útil, verificable y responsable sobre seguros.</p></Container></header>
      <main className="py-14"><Container className="max-w-3xl"><article className="space-y-10 text-slate-700">
        <section><h2 className="text-2xl font-bold text-slate-900">Objetivo del blog</h2><p className="mt-3 leading-relaxed">El blog de Roesan tiene fines educativos. Busca ayudar a personas y empresas a entender conceptos, coberturas, exclusiones y preguntas que conviene hacer antes de contratar o usar un seguro.</p></section>
        <section><h2 className="text-2xl font-bold text-slate-900">Selección de fuentes</h2><p className="mt-3 leading-relaxed">Priorizamos normas vigentes, entidades públicas, gremios reconocidos y documentación oficial de las aseguradoras. Cuando una afirmación depende de una fuente externa, procuramos enlazarla desde el contexto y reunir las referencias al final del artículo.</p></section>
        <section><h2 className="text-2xl font-bold text-slate-900">Revisión y atribución</h2><p className="mt-3 leading-relaxed">Cada artículo identifica autor, fecha de publicación y fecha de actualización. Los contenidos técnicos, jurídicos o sensibles pueden incluir una persona revisora cuando Roesan haya confirmado su participación. No atribuimos títulos, certificaciones ni autoría sin confirmación.</p></section>
        <section><h2 className="text-2xl font-bold text-slate-900">Actualizaciones</h2><p className="mt-3 leading-relaxed">Revisamos artículos cuando cambian normas, productos o fuentes relevantes. La fecha de modificación solo cambia cuando existe una actualización sustantiva. Los contenidos con afirmaciones que no puedan verificarse pueden retirarse temporalmente de indexación mientras se revisan.</p></section>
        <section><h2 className="text-2xl font-bold text-slate-900">Correcciones</h2><p className="mt-3 leading-relaxed">Si detectas un error, puedes escribir a <a href="mailto:administrativo@roesan.com" className="font-medium text-purple-700 underline">administrativo@roesan.com</a>. Evaluaremos la evidencia y corregiremos el contenido cuando corresponda, dejando una fecha de actualización coherente.</p></section>
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6"><h2 className="text-xl font-bold text-slate-900">Aclaración importante</h2><p className="mt-3 leading-relaxed">La información del blog es educativa y general. Las coberturas, exclusiones, primas, límites, deducibles y demás condiciones definitivas dependen de la aseguradora, del producto, del perfil del asegurado y de las condiciones particulares de cada póliza. El contenido no sustituye asesoría jurídica, médica, financiera ni la lectura del contrato.</p></section>
      </article></Container></main>
    </div>
  );
}
