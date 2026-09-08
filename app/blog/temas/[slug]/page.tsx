import { blogTopics, getBlogTopic } from "@/lib/blog-topics";
import { publishedBlogPosts } from "@/lib/blog-data";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return blogTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getBlogTopic(slug);
  if (!topic) return {};
  const canonical = `/blog/temas/${topic.slug}`;
  return {
    title: `${topic.title}: guías de seguros`,
    description: topic.description,
    alternates: { canonical },
    openGraph: { title: `${topic.title}: guías de seguros | Roesan Seguros`, description: topic.description, url: canonical, type: "website" },
  };
}

export default async function BlogTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getBlogTopic(slug);
  if (!topic) notFound();
  const posts = publishedBlogPosts.filter((post) => post.topicSlug === topic.slug);

  return (
    <div className="bg-white">
      <header className="bg-slate-900 pb-20 pt-36 text-white">
        <Container className="max-w-4xl">
          <nav aria-label="Migas de pan" className="mb-7 text-sm text-slate-300"><Link href="/blog" className="hover:text-white">Blog</Link><span className="mx-2">/</span><span>{topic.title}</span></nav>
          <h1 className="font-serif text-4xl font-medium sm:text-5xl">{topic.title}</h1>
          <p className="mt-5 max-w-3xl text-xl leading-relaxed text-slate-300">{topic.description}</p>
        </Container>
      </header>
      <main className="py-16"><Container className="max-w-4xl">
        <section aria-labelledby="preguntas-clave">
          <h2 id="preguntas-clave" className="text-3xl font-bold text-slate-900">Preguntas clave antes de contratar</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Este centro temático reúne contenido que prioriza la comprensión del riesgo, las condiciones de la póliza y la evidencia disponible. Las respuestas generales siempre deben contrastarse con la oferta concreta de cada aseguradora.</p>
          <ul className="mt-7 grid gap-4 sm:grid-cols-2">{topic.questions.map((question) => <li key={question} className="rounded-xl border border-slate-200 bg-slate-50 p-5 font-medium text-slate-800">{question}</li>)}</ul>
        </section>

        <section className="mt-14" aria-labelledby="guias-tema">
          <h2 id="guias-tema" className="text-3xl font-bold text-slate-900">Guías verificadas</h2>
          {posts.length ? <div className="mt-6 grid gap-5 sm:grid-cols-2">{posts.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-2xl border border-slate-200 p-6 transition hover:border-purple-300 hover:shadow-md"><h3 className="text-xl font-bold text-slate-900">{post.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p><span className="mt-4 inline-block text-sm font-semibold text-purple-700">Leer guía →</span></Link>)}</div> : <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-6 text-slate-700">Todavía no hay una guía publicada para este tema. La arquitectura está lista, pero Roesan solo incorporará artículos cuando hayan completado su revisión editorial y de fuentes.</div>}
        </section>

        <aside className="mt-14 rounded-2xl bg-purple-50 p-7"><h2 className="text-xl font-bold text-slate-900">Orientación comercial relacionada</h2><p className="mt-2 text-slate-600">Consulta la página de {topic.serviceLabel.toLowerCase()} para conocer los servicios de asesoría de Roesan.</p><Link href={topic.servicePath} className="mt-5 inline-flex rounded-full bg-purple-800 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-900">Ver {topic.serviceLabel}</Link></aside>
      </Container></main>
    </div>
  );
}
