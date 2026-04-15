import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, MessageCircle, BookOpen, ShieldCheck, HeartPulse, Shield } from "lucide-react";
import type { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: `${post.title} | Roesan Seguros`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
        },
    };
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

const getCategoryIconSmall = (category: string) => {
    switch (category) {
        case "Educación Financiera": return <BookOpen className="w-6 h-6 text-white" />;
        case "Seguros de Autos": return <ShieldCheck className="w-6 h-6 text-white" />;
        case "Seguro de Vida": return <HeartPulse className="w-6 h-6 text-white" />;
        default: return <Shield className="w-6 h-6 text-white" />;
    }
};

const getCategoryGradient = (category: string) => {
    switch (category) {
        case "Educación Financiera": return "from-blue-600 to-indigo-900";
        case "Seguros de Autos": return "from-teal-600 to-emerald-900";
        case "Seguro de Vida": return "from-rose-500 to-purple-900";
        default: return "from-slate-700 to-slate-900";
    }
};

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-slate-900 pt-36 pb-24 relative overflow-hidden">
                {post.coverImage && (
                    <div className="absolute inset-0 z-0">
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                            style={{ backgroundImage: `url(${post.coverImage})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
                    </div>
                )}
                <Container className="max-w-3xl relative z-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Volver al blog
                    </Link>

                    <div className="flex items-center gap-3 mb-6">
                        <span
                            className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${post.categoryColor}`}
                        >
                            <Tag className="w-3 h-3" />
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                            <Clock className="w-3 h-3" /> {post.readTime} de lectura
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                            <Calendar className="w-3 h-3" /> {formatDate(post.date)}
                        </span>
                    </div>

                    <h1 className="font-serif text-3xl font-medium text-white sm:text-4xl lg:text-5xl leading-[1.1]">
                        {post.title}
                    </h1>
                </Container>
            </section>

            {/* Content */}
            <section className="py-16">
                <Container className="max-w-3xl">
                    <article className="prose prose-slate prose-lg max-w-none">
                        {post.content.map((section, i) => {
                            if (section.type === "intro") {
                                return (
                                    <p
                                        key={i}
                                        className="text-xl text-slate-600 leading-relaxed border-l-4 border-purple-600 pl-6 mb-10 font-light"
                                    >
                                        {section.text}
                                    </p>
                                );
                            }
                            if (section.type === "heading") {
                                return (
                                    <h2
                                        key={i}
                                        className="text-2xl font-bold text-slate-900 mt-12 mb-4 flex items-center gap-2"
                                    >
                                        <span className="w-1 h-7 rounded-full bg-purple-600 inline-block shrink-0" />
                                        {section.text}
                                    </h2>
                                );
                            }
                            if (section.type === "paragraph") {
                                return (
                                    <p key={i} className="text-slate-600 leading-relaxed mb-4">
                                        {section.text}
                                    </p>
                                );
                            }
                            if (section.type === "list") {
                                return (
                                    <ul key={i} className="space-y-3 mb-6 ml-2">
                                        {section.items?.map((item, j) => (
                                            <li
                                                key={j}
                                                className="flex items-start gap-3 text-slate-600"
                                            >
                                                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                                                    ✓
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                );
                            }
                            if (section.type === "cta") {
                                return null; // Rendered below
                            }
                            if (section.type === "image" && section.imageUrl) {
                                return (
                                    <figure key={i} className="my-10">
                                        <img 
                                            src={section.imageUrl} 
                                            alt={section.imageAlt || "Ilustración de seguros"} 
                                            className="w-full rounded-2xl shadow-lg border border-slate-200 aspect-video object-cover"
                                        />
                                        {section.imageAlt && (
                                            <figcaption className="text-center text-sm text-slate-500 mt-3 italic">
                                                {section.imageAlt}
                                            </figcaption>
                                        )}
                                    </figure>
                                );
                            }
                            return null;
                        })}
                    </article>

                    {/* CTA inside article */}
                    <div className="mt-16 rounded-2xl bg-gradient-to-br from-purple-700 to-slate-800 p-8 text-white text-center">
                        <h3 className="text-2xl font-bold mb-3">
                            ¿Quieres saber qué seguro se adapta a ti?
                        </h3>
                        <p className="text-purple-200 mb-6 max-w-md mx-auto">
                            Un asesor de Roesan Seguros te orienta sin compromiso y sin costo,
                            analizando tu situación real.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/573002114998?text=Hola,%20leí%20su%20artículo%20y%20quisiera%20más%20información"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Hablar por WhatsApp
                            </a>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/30 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                            >
                                Solicitar asesoría gratuita
                            </Link>
                        </div>
                    </div>

                    {/* Other articles */}
                    <div className="mt-16 border-t border-slate-100 pt-12">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">
                            También te puede interesar
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {blogPosts
                                .filter((p) => p.slug !== post.slug)
                                .slice(0, 2)
                                .map((related) => (
                                    <Link
                                        key={related.slug}
                                        href={`/blog/${related.slug}`}
                                        className="group flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/50 transition-all"
                                    >
                                        <div className={`w-12 h-12 rounded-lg shrink-0 flex items-center justify-center bg-gradient-to-br ${getCategoryGradient(related.category)} shadow-inner`}>
                                            {getCategoryIconSmall(related.category)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-800 group-hover:text-purple-700 transition-colors text-sm leading-snug">
                                                {related.title}
                                            </p>
                                            <p className="text-xs text-slate-400 mt-1">
                                                {related.readTime} de lectura
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
