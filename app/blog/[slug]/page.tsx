import { blogPosts, publishedBlogPosts, type BlogPost, type BlogSection } from "@/lib/blog-data";
import { getBlogAuthor } from "@/lib/blog-authors";
import { getBlogTopic } from "@/lib/blog-topics";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, MessageCircle, Tag, UserRound } from "lucide-react";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }
const siteUrl = "https://roesan.com";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((candidate) => candidate.slug === slug);
  if (!post) return {};
  const canonical = `/blog/${post.slug}`;
  const title = post.seoTitle || post.title;
  const socialTitle = `${title} | Roesan Seguros`;
  return {
    title,
    description: post.excerpt,
    alternates: { canonical },
    robots: post.isReadyForPublication ? undefined : { index: false, follow: true },
    openGraph: {
      title: socialTitle,
      description: post.excerpt,
      url: canonical,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Equipo editorial de Roesan Seguros"],
      images: post.coverImage ? [{ url: post.coverImage, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("es-CO", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  });
}

function getRelatedPosts(post: BlogPost) {
  const explicit = post.relatedArticleSlugs
    .map((slug) => publishedBlogPosts.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is BlogPost => Boolean(candidate));
  const semantic = publishedBlogPosts
    .filter((candidate) => candidate.slug !== post.slug && !explicit.some((item) => item.slug === candidate.slug))
    .map((candidate) => ({
      candidate,
      score: (candidate.topicSlug === post.topicSlug ? 3 : 0) + candidate.tags.filter((tag) => post.tags.includes(tag)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ candidate }) => candidate);
  return [...explicit, ...semantic].slice(0, 3);
}

function SourceCitations({ post, ids }: { post: BlogPost; ids?: string[] }) {
  if (!ids?.length) return null;
  const sources = ids
    .map((id) => post.sources.find((source) => source.id === id))
    .filter((source): source is BlogPost["sources"][number] => Boolean(source));
  if (!sources.length) return null;
  return (
    <span className="ml-2 text-sm text-slate-500">
      Fuentes:{" "}
      {sources.map((source, index) => (
        <span key={source.id}>
          {index > 0 && ", "}
          <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-purple-700 underline decoration-purple-300 underline-offset-2">{source.publisher}</a>
        </span>
      ))}
    </span>
  );
}

function ArticleSection({ section, post, index }: { section: BlogSection; post: BlogPost; index: number }) {
  if (section.type === "intro" || section.type === "cta") return null;
  if (section.type === "heading") {
    if (section.level === 3) return <h3 className="mb-3 mt-8 text-xl font-bold text-slate-900">{section.text}</h3>;
    return <h2 className="mb-4 mt-12 flex items-center gap-2 text-2xl font-bold text-slate-900"><span className="inline-block h-7 w-1 shrink-0 rounded-full bg-purple-600" />{section.text}</h2>;
  }
  if (section.type === "paragraph") {
    return <p className="mb-4 leading-relaxed text-slate-600">{section.text}<SourceCitations post={post} ids={section.citations} /></p>;
  }
  if (section.type === "list") {
    return <ul className="mb-6 ml-2 space-y-3">{section.items?.map((item) => <li key={item} className="flex items-start gap-3 text-slate-600"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">✓</span><span>{item}</span></li>)}</ul>;
  }
  if (section.type === "table" && section.headers && section.rows) {
    return (
      <div className="my-8 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full border-collapse text-left text-sm">
          {section.caption && <caption className="bg-slate-50 px-4 py-3 text-left font-semibold text-slate-800">{section.caption}</caption>}
          <thead className="bg-purple-50 text-slate-900"><tr>{section.headers.map((header) => <th key={header} scope="col" className="border-b border-slate-200 px-4 py-3 font-semibold">{header}</th>)}</tr></thead>
          <tbody>{section.rows.map((row, rowIndex) => <tr key={`${index}-${rowIndex}`} className="border-b border-slate-100 last:border-0">{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`} className="px-4 py-3 align-top text-slate-600">{cell}</td>)}</tr>)}</tbody>
        </table>
        {section.citations?.length ? <div className="border-t border-slate-100 px-4 py-3"><SourceCitations post={post} ids={section.citations} /></div> : null}
      </div>
    );
  }
  if (section.type === "links") {
    return <div className="mb-6 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-6"><p className="mb-3 font-semibold text-slate-700">{section.text}</p><ul className="space-y-2">{section.items?.map((item) => {
      const url = item.match(/^(https?:\/\/[^\s]+)/)?.[1];
      if (!url) return null;
      const label = item.replace(/^https?:\/\/[^\s]+\s*-\s*/, "");
      return <li key={item}><a href={url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-700 hover:underline">{label || url}</a></li>;
    })}</ul></div>;
  }
  if (section.type === "image" && section.imageUrl) {
    return <figure className="my-10"><Image src={section.imageUrl} alt={section.imageAlt || "Ilustración del artículo"} width={1200} height={675} className="aspect-video w-full rounded-2xl border border-slate-200 object-cover shadow-lg" />{section.imageAlt && <figcaption className="mt-3 text-center text-sm italic text-slate-500">{section.imageAlt}</figcaption>}</figure>;
  }
  return null;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((candidate) => candidate.slug === slug);
  if (!post) notFound();
  const author = getBlogAuthor(post.authorSlug);
  const reviewer = post.reviewerSlug ? getBlogAuthor(post.reviewerSlug) : undefined;
  const topic = getBlogTopic(post.topicSlug);
  const relatedPosts = getRelatedPosts(post);
  const intro = post.content.find((section) => section.type === "intro")?.text;
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = post.coverImage ? `${siteUrl}${post.coverImage}` : `${siteUrl}/logo-roesan.png`;
  const structuredData = post.isReadyForPublication && author ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", headline: post.title, description: post.excerpt, image: imageUrl,
        datePublished: post.datePublished, dateModified: post.dateModified,
        author: { "@type": author.type, name: author.name, url: `${siteUrl}${author.profilePath}` },
        publisher: { "@type": "Organization", name: "Roesan Seguros", url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/logo-roesan.png` } },
        mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
          ...(topic ? [{ "@type": "ListItem", position: 3, name: topic.title, item: `${siteUrl}/blog/temas/${topic.slug}` }] : []),
          { "@type": "ListItem", position: topic ? 4 : 3, name: post.title, item: canonicalUrl },
        ],
      },
    ],
  } : null;

  return (
    <div className="bg-white">
      {structuredData && <script id="blog-posting-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />}
      <header className="relative overflow-hidden bg-slate-900 pb-20 pt-36">
        {post.coverImage && <Image src={post.coverImage} alt="" fill priority className="object-cover opacity-25 mix-blend-overlay" sizes="100vw" />}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
        <Container className="relative z-10 max-w-3xl">
          <nav aria-label="Migas de pan" className="mb-8 text-sm text-slate-300"><Link href="/blog" className="inline-flex items-center gap-2 hover:text-white"><ArrowLeft className="h-4 w-4" /> Blog</Link>{topic && <><span className="mx-2">/</span><Link href={`/blog/temas/${topic.slug}`} className="hover:text-white">{topic.title}</Link></>}</nav>
          <div className="mb-5 flex flex-wrap items-center gap-3"><span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${post.categoryColor}`}><Tag className="h-3 w-3" />{post.category}</span><span className="inline-flex items-center gap-1 text-xs text-slate-300"><Clock className="h-3 w-3" />{post.readTime} de lectura</span></div>
          <h1 className="font-serif text-3xl font-medium leading-[1.1] text-white sm:text-4xl lg:text-5xl">{post.title}</h1>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
            {author && <Link href={author.profilePath} rel="author" className="inline-flex items-center gap-1.5 hover:text-white"><UserRound className="h-4 w-4" />{author.name}</Link>}
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />Publicado: <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time></span>
            <span>Actualizado: <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time></span>
            {reviewer && <span>Revisado por {reviewer.name}</span>}
          </div>
        </Container>
      </header>
      <main className="py-14"><Container className="max-w-3xl">
        {!post.isReadyForPublication ? (
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-slate-700"><p className="text-sm font-bold uppercase tracking-wider text-amber-800">Contenido en revisión editorial</p><p className="mt-4 leading-relaxed">Retiramos temporalmente el contenido de este artículo porque contiene cifras o afirmaciones que requieren verificación adicional. Conservamos la URL para no romper enlaces existentes y publicaremos una versión revisada cuando las fuentes y la validación humana estén completas.</p><p className="mt-4 leading-relaxed">Mientras tanto, puedes consultar nuestra <Link href="/blog/politica-editorial" className="font-semibold text-purple-700 underline">Política Editorial</Link> o solicitar orientación sobre tu caso particular.</p></article>
        ) : <>
          {intro && <p className="mb-8 border-l-4 border-purple-600 pl-6 text-xl font-light leading-relaxed text-slate-600">{intro}</p>}
          {post.quickAnswer?.length ? <section aria-labelledby="respuesta-rapida" className="mb-10 rounded-2xl border border-purple-100 bg-purple-50/70 p-6"><h2 id="respuesta-rapida" className="text-xl font-bold text-slate-900">Respuesta rápida</h2>{post.quickAnswer.map((paragraph) => <p key={paragraph} className="mt-3 leading-relaxed text-slate-700">{paragraph}</p>)}</section> : null}
          <article className="prose prose-lg prose-slate max-w-none">{post.content.map((section, index) => <ArticleSection key={`${section.type}-${index}`} section={section} post={post} index={index} />)}</article>
          {post.relatedServices.length > 0 && <aside className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6" aria-labelledby="orientacion-relacionada"><h2 id="orientacion-relacionada" className="text-xl font-bold text-slate-900">Orientación relacionada de Roesan</h2><div className="mt-4 grid gap-4 sm:grid-cols-2">{post.relatedServices.map((service) => <Link key={service.href} href={service.href} className="rounded-xl bg-white p-4 ring-1 ring-slate-200 transition hover:ring-purple-300"><span className="font-semibold text-purple-800">{service.label}</span><span className="mt-1 block text-sm leading-relaxed text-slate-600">{service.description}</span></Link>)}</div></aside>}
          {post.sources.length > 0 && <section className="mt-12 border-t border-slate-200 pt-8" aria-labelledby="fuentes"><h2 id="fuentes" className="text-xl font-bold text-slate-900">Fuentes consultadas</h2><ul className="mt-4 space-y-3 text-sm text-slate-600">{post.sources.map((source) => <li key={source.id}><a href={source.url} target="_blank" rel="noopener noreferrer" className="font-medium text-purple-700 underline decoration-purple-300 underline-offset-2">{source.title}</a><span> — {source.publisher}. Consultada el {formatDate(source.accessedAt)}.</span></li>)}</ul></section>}
        </>}
        <aside className="mt-14 rounded-2xl bg-gradient-to-br from-purple-700 to-slate-800 p-8 text-center text-white"><h2 className="text-2xl font-bold">¿Necesitas orientación para comparar alternativas?</h2><p className="mx-auto mt-3 max-w-lg text-purple-100">Un asesor de Roesan puede ayudarte a revisar coberturas, exclusiones y condiciones aplicables a tu caso.</p><div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row"><a href="https://wa.me/573126000414?text=Hola,%20leí%20un%20artículo%20del%20blog%20y%20quisiera%20orientación" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold hover:bg-emerald-600"><MessageCircle className="h-4 w-4" />Hablar por WhatsApp</a><Link href="/contacto" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold hover:bg-white/20">Solicitar asesoría</Link></div></aside>
        {relatedPosts.length > 0 && <section className="mt-14 border-t border-slate-100 pt-10" aria-labelledby="articulos-relacionados"><h2 id="articulos-relacionados" className="text-xl font-bold text-slate-900">Artículos relacionados</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{relatedPosts.map((related) => <Link key={related.slug} href={`/blog/${related.slug}`} className="rounded-xl border border-slate-200 p-4 transition hover:border-purple-300 hover:bg-purple-50/50"><span className="font-semibold text-slate-800">{related.title}</span><span className="mt-2 block text-xs text-slate-500">{related.readTime} de lectura</span></Link>)}</div></section>}
      </Container></main>
    </div>
  );
}
