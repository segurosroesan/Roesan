import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Clock, Tag, BookOpen, ShieldCheck, HeartPulse, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog de Seguros | Roesan Seguros",
    description:
        "Artículos educativos sobre seguros en Colombia. Aprende a proteger tu patrimonio, tu familia y tu empresa con las mejores coberturas.",
    openGraph: {
        title: "Blog de Seguros | Roesan Seguros",
        description:
            "Aprende sobre seguros en Colombia: autos, vida, salud, empresarial y más.",
    },
};

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

const getCategoryIcon = (category: string) => {
    switch (category) {
        case "Educación Financiera": return <BookOpen className="w-12 h-12 text-white/90 drop-shadow-md" />;
        case "Seguros de Autos": return <ShieldCheck className="w-12 h-12 text-white/90 drop-shadow-md" />;
        case "Seguro de Vida": return <HeartPulse className="w-12 h-12 text-white/90 drop-shadow-md" />;
        default: return <Shield className="w-12 h-12 text-white/90 drop-shadow-md" />;
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

export default function BlogPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-slate-900 pt-36 pb-24 text-center">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-slate-900 opacity-60" />
                </div>
                <Container className="relative">
                    <span className="inline-block rounded-full bg-purple-700/30 px-4 py-1.5 text-sm font-medium text-purple-300 mb-6">
                        Blog & Educación
                    </span>
                    <h1 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                        Blog de Seguros
                    </h1>
                    <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
                        Artículos para que tomes decisiones informadas sobre la protección de
                        tu familia y tu empresa.
                    </p>
                </Container>
            </section>

            {/* Articles Grid */}
            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group block bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Card Header */}
                                <div className={`bg-gradient-to-br ${getCategoryGradient(post.category)} h-48 flex items-center justify-center relative overflow-hidden`}>
                                    {post.coverImage ? (
                                        <div 
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url(${post.coverImage})` }}
                                        />
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-black/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                            <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                                                {getCategoryIcon(post.category)}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Card Body */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span
                                            className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${post.categoryColor}`}
                                        >
                                            <Tag className="w-3 h-3" />
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-slate-400">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-purple-700 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-slate-400">
                                            {formatDate(post.date)}
                                        </span>
                                        <span className="flex items-center gap-1 text-sm font-medium text-purple-700 group-hover:gap-2 transition-all">
                                            Leer más <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="bg-purple-800 py-16">
                <Container className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        ¿Tienes dudas sobre qué seguro necesitas?
                    </h2>
                    <p className="text-purple-200 mb-8 max-w-xl mx-auto">
                        Nuestros asesores te orientan sin compromiso y sin costo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/576016294040"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
                        >
                            Hablar por WhatsApp
                        </a>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                        >
                            Solicitar asesoría
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
}
