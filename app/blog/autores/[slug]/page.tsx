import { blogAuthors, getBlogAuthor } from "@/lib/blog-authors";
import { publishedBlogPosts } from "@/lib/blog-data";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() { return blogAuthors.map((author) => ({ slug: author.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = getBlogAuthor(slug);
  if (!author) return {};
  const canonical = author.profilePath;
  return { title: author.name, description: author.bio, alternates: { canonical }, openGraph: { title: `${author.name} | Roesan Seguros`, description: author.bio, url: canonical, type: "profile" } };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = getBlogAuthor(slug);
  if (!author) notFound();
  const posts = publishedBlogPosts.filter((post) => post.authorSlug === author.slug);
  return <div className="bg-white"><header className="bg-slate-900 pb-20 pt-36 text-white"><Container className="max-w-3xl"><Link href="/blog" className="text-sm text-slate-300 hover:text-white">← Volver al blog</Link><div className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-center"><div className="relative h-24 w-64 overflow-hidden rounded-2xl bg-white p-3"><Image src={author.image} alt={author.name} fill className="object-contain p-3" sizes="256px" /></div><div><h1 className="font-serif text-4xl font-medium">{author.name}</h1><p className="mt-2 text-slate-300">{author.role}</p></div></div></Container></header><main className="py-14"><Container className="max-w-3xl"><p className="text-lg leading-relaxed text-slate-700">{author.bio}</p><section className="mt-12 border-t border-slate-200 pt-8"><h2 className="text-2xl font-bold text-slate-900">Artículos publicados</h2><div className="mt-5 space-y-4">{posts.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-xl border border-slate-200 p-5 hover:border-purple-300"><h3 className="font-bold text-slate-900">{post.title}</h3><p className="mt-2 text-sm text-slate-600">{post.excerpt}</p></Link>)}</div></section></Container></main></div>;
}
