import { publishedBlogPosts } from "@/lib/blog-data";

const siteUrl = "https://roesan.com";

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export function GET() {
  const items = [...publishedBlogPosts]
    .sort((a, b) => b.dateModified.localeCompare(a.dateModified))
    .map((post) => `<item><title>${escapeXml(post.title)}</title><link>${siteUrl}/blog/${post.slug}</link><guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid><description>${escapeXml(post.excerpt)}</description><pubDate>${new Date(`${post.datePublished}T12:00:00Z`).toUTCString()}</pubDate></item>`)
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Blog de Roesan Seguros</title><link>${siteUrl}/blog</link><description>Guías verificadas sobre seguros en Colombia.</description><language>es-CO</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=3600" } });
}
