import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = (process.env.BASE_URL || "http://127.0.0.1:3000").replace(/\/$/, "");

async function get(path) {
  return fetch(`${baseUrl}${path}`, {
    headers: { "user-agent": "Roesan SEO smoke test" },
    redirect: "manual",
  });
}

test("an unknown route returns a real HTML 404", async () => {
  const paths = [
    "/__seo-test-route-that-does-not-exist__",
    "/servicios/__seo-test-service-that-does-not-exist__",
  ];

  for (const path of paths) {
    const response = await get(path);
    assert.equal(response.status, 404, path);
    assert.match(response.headers.get("content-type") || "", /text\/html/i);
  }

  const response = await get(paths[0]);
  assert.match(await response.text(), /Página no encontrada/i);
});

test("home exposes one H1, relevant content and valid JSON-LD in initial HTML", async () => {
  const response = await get("/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /Protegemos lo que más valoras/i);
  assert.equal((html.match(/<h1(?:\s|>)/gi) || []).length, 1);

  const match = html.match(
    /<script[^>]*id="roesan-insurance-agency-jsonld"[^>]*>([\s\S]*?)<\/script>/i,
  );
  assert.ok(match, "InsuranceAgency JSON-LD was not found");
  const jsonLd = JSON.parse(match[1]);
  assert.equal(jsonLd["@type"], "InsuranceAgency");
  assert.equal(jsonLd.url, "https://roesan.com/");
  assert.match(html, />1982</);
  assert.match(html, />13</);
  assert.match(html, />Bogotá</);
  assert.doesNotMatch(html, /Satisfacción clientes|>0\+<|>0%<|>0 aseguradoras</i);
});

test("sitemap only advertises valid public routes", async () => {
  const response = await get("/sitemap.xml");
  assert.equal(response.status, 200);
  const xml = await response.text();

  assert.match(xml, /<loc>https:\/\/roesan\.com<\/loc>/);
  assert.match(xml, /<loc>https:\/\/roesan\.com\/cotizador<\/loc>/);
  assert.doesNotMatch(xml, /<loc>https:\/\/roesan\.com\/cotizar<\/loc>/);
  assert.doesNotMatch(xml, /\/api\//);
  assert.doesNotMatch(xml, /\/brochures\/(?:personas|empresas)<\/loc>/);
  assert.match(xml, /\/blog\/seguro-automovil-colombia-guia<\/loc>/);
  assert.match(xml, /\/blog\/seguro-para-copropiedades-guia<\/loc>/);
  assert.match(xml, /\/blog\/seguro-hogar-vivienda-guia-completa<\/loc>/);
  assert.doesNotMatch(xml, /\/blog\/mejores-aseguradoras-colombia-2026<\/loc>/);

  const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.equal(new Set(locations).size, locations.length, "sitemap contains duplicate URLs");

  const results = await Promise.all(
    locations.map(async (location) => {
      const path = new URL(location).pathname;
      const routeResponse = await get(path);
      return { path, status: routeResponse.status };
    }),
  );
  assert.deepEqual(
    results.filter(({ status }) => status !== 200),
    [],
    "every sitemap URL must return 200",
  );
});

test("published blog articles expose verifiable editorial and structured data", async () => {
  const path = "/blog/seguro-para-copropiedades-guia";
  const response = await get(path);
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.equal((html.match(/<h1(?:\s|>)/gi) || []).length, 1);
  assert.match(html, /Respuesta rápida/);
  assert.match(html, /Equipo editorial de Roesan Seguros/);
  assert.match(html, /Publicado:/);
  assert.match(html, /Actualizado:/);
  assert.match(html, /Fuentes consultadas/);
  assert.match(html, /Ley 675 de 2001, artículo 15/);
  assert.match(html, /<table/);

  const match = html.match(/<script[^>]*id="blog-posting-jsonld"[^>]*>([\s\S]*?)<\/script>/i);
  assert.ok(match, "BlogPosting JSON-LD was not found");
  const jsonLd = JSON.parse(match[1]);
  const posting = jsonLd["@graph"].find((item) => item["@type"] === "BlogPosting");
  const breadcrumbs = jsonLd["@graph"].find((item) => item["@type"] === "BreadcrumbList");
  assert.ok(posting);
  assert.ok(breadcrumbs);
  assert.equal(posting.author.name, "Equipo editorial de Roesan Seguros");
  assert.equal(posting.mainEntityOfPage["@id"], `https://roesan.com${path}`);
});

test("unverified articles keep their URL but are noindex and hide disputed content", async () => {
  const response = await get("/blog/mejores-aseguradoras-colombia-2026");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<meta name="robots" content="noindex, follow"/);
  assert.match(html, /Contenido en revisión editorial/);
  assert.doesNotMatch(html, /NPS 72|SURA \(primer lugar\)|Mapfre \(ahorras 20-30%/i);
  assert.doesNotMatch(html, /id="blog-posting-jsonld"/);
});

test("blog hub, policy, topics, author profile and RSS are public", async () => {
  const routes = [
    "/blog",
    "/blog/politica-editorial",
    "/blog/temas/seguro-autos",
    "/blog/autores/equipo-editorial-roesan",
  ];
  for (const path of routes) {
    const response = await get(path);
    assert.equal(response.status, 200, path);
    assert.equal((await response.text()).match(/<h1(?:\s|>)/gi)?.length, 1, `${path} H1 count`);
  }

  const feedResponse = await get("/blog/feed.xml");
  assert.equal(feedResponse.status, 200);
  assert.match(feedResponse.headers.get("content-type") || "", /application\/rss\+xml/i);
  const feed = await feedResponse.text();
  assert.match(feed, /<rss version="2.0">/);
  assert.match(feed, /seguro-para-copropiedades-guia/);
  assert.doesNotMatch(feed, /mejores-aseguradoras-colombia-2026/);
});

test("core pages expose unique headings and complete page-specific metadata", async () => {
  const routes = [
    "/servicios",
    "/servicios/personas",
    "/servicios/empresas",
    "/nosotros",
    "/blog",
    "/contacto",
    "/cotizador",
  ];

  for (const path of routes) {
    const response = await get(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const canonical = `https://roesan.com${path}`;

    assert.equal((html.match(/<h1(?:\s|>)/gi) || []).length, 1, `${path} H1 count`);
    assert.match(html, new RegExp(`<link rel="canonical" href="${canonical}"`));
    assert.match(html, new RegExp(`<meta property="og:url" content="${canonical}"`));
    assert.match(html, /<meta name="twitter:card" content="summary_large_image"/);
    assert.doesNotMatch(html, /Roesan Seguros \| Roesan Seguros/i);
  }
});

test("robots keeps APIs private and points to the sitemap", async () => {
  const response = await get("/robots.txt");
  assert.equal(response.status, 200);
  const robots = await response.text();

  assert.match(robots, /Allow: \//);
  assert.match(robots, /Disallow: \/api\//);
  assert.match(robots, /User-Agent: OAI-SearchBot/);
  assert.match(robots, /Sitemap: https:\/\/roesan\.com\/sitemap\.xml/);
});

test("llms.txt is public, plain text and links to core pages", async () => {
  const response = await get("/llms.txt");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") || "", /text\/plain/i);
  const body = await response.text();

  assert.match(body, /Roesan Seguros/);
  assert.match(body, /https:\/\/roesan\.com\/servicios\/personas/);
  assert.match(body, /https:\/\/roesan\.com\/servicios\/empresas/);
  assert.match(body, /https:\/\/roesan\.com\/contacto/);
});
