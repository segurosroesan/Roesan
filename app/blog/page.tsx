import { publishedBlogPosts } from "@/lib/blog-data";
import { blogTopics } from "@/lib/blog-topics";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Clock, FileText, Rss, Tag } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

const baseMetadata = createPageMetadata({
  title: "Blog de seguros",
  description: "Guías verificadas sobre seguros en Colombia, elaboradas con fuentes oficiales para ayudarte a comparar coberturas y tomar decisiones informadas.",
  path: "/blog",
  image: "/images/edificio-moderno.png",
});

export const metadata = {
  ...baseMetadata,
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/feed.xml" },
  },
};

function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("es-CO", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  });
}

export default function BlogPage() {
  const featured = publishedBlogPosts[0];
  const remaining = publishedBlogPosts.slice(1);

  return (
    <div className="bg-transparent">
      <header className="relative overflow-hidden bg-slate-900 pb-24 pt-36 text-center">
        <Image src="/images/edificio-moderno.png" alt="" fill priority className="object-cover opacity-30 mix-blend-luminosity" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40" />
        <Container className="relative z-10">
          <span className="mb-6 inline-block rounded-full bg-purple-700/30 px-4 py-1.5 text-sm font-medium text-purple-200">Blog y educación</span>
          <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">Seguros explicados con claridad</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300">Guías verificadas para entender coberturas, exclusiones y decisiones de protección en Colombia.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/blog/politica-editorial" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-medium text-white hover:bg-white/20"><FileText className="h-4 w-4" />Política Editorial</Link>
            <a href="/blog/feed.xml" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-medium text-white hover:bg-white/20"><Rss className="h-4 w-4" />RSS</a>
          </div>
        </Container>
      </header>

      <main>
        <section className="py-16" aria-labelledby="temas-principales">
          <Container>
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-purple-700">Explorar por tema</p>
              <h2 id="temas-principales" className="mt-2 text-3xl font-bold text-slate-900">Guías y centros temáticos</h2>
              <p className="mt-3 text-slate-600">La biblioteca está organizada por necesidades reales, no por listas artificiales de palabras clave.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {blogTopics.map((topic) => (
                <Link key={topic.slug} href={`/blog/temas/${topic.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md">
                  <h3 className="font-bold text-slate-900 group-hover:text-purple-700">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{topic.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-purple-700">Explorar tema <ArrowRight className="h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {featured && (
          <section className="border-y border-slate-100 bg-white/60 py-16" aria-labelledby="guia-destacada">
            <Container>
              <h2 id="guia-destacada" className="mb-8 text-3xl font-bold text-slate-900">Guía destacada</h2>
              <Link href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl lg:grid-cols-2">
                <div className="relative min-h-64">{featured.coverImage && <Image src={featured.coverImage} alt={featured.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />}</div>
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <span className="text-sm font-semibold text-purple-700">{featured.category}</span>
                  <h3 className="mt-3 text-3xl font-bold leading-tight text-slate-900 group-hover:text-purple-700">{featured.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{featured.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500"><span>{formatDate(featured.dateModified)}</span><span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{featured.readTime}</span></div>
                </div>
              </Link>
            </Container>
          </section>
        )}

        <section className="py-16" aria-labelledby="articulos-verificados">
          <Container>
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-wider text-purple-700">Biblioteca</p><h2 id="articulos-verificados" className="mt-2 text-3xl font-bold text-slate-900">Artículos verificados</h2></div><p className="text-sm text-slate-500">{publishedBlogPosts.length} guías públicas</p></div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {(remaining.length ? remaining : publishedBlogPosts).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-48">{post.coverImage && <Image src={post.coverImage} alt={post.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />}</div>
                  <div className="p-6"><div className="mb-4 flex items-center gap-3"><span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${post.categoryColor}`}><Tag className="h-3 w-3" />{post.category}</span><span className="inline-flex items-center gap-1 text-xs text-slate-400"><Clock className="h-3 w-3" />{post.readTime}</span></div><h3 className="text-lg font-bold leading-tight text-slate-900 group-hover:text-purple-700">{post.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-500">{post.excerpt}</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-purple-700">Leer guía <ArrowRight className="h-4 w-4" /></span></div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-purple-900/90 py-20 text-center"><Container><h2 className="text-2xl font-bold text-white">¿Necesitas revisar una póliza o comparar opciones?</h2><p className="mx-auto mt-4 max-w-xl text-purple-100">Nuestros asesores pueden orientarte sobre las condiciones aplicables a tu caso.</p><Link href="/contacto" className="mt-7 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-purple-900 hover:bg-purple-50">Solicitar asesoría</Link></Container></section>
      </main>
    </div>
  );
}
