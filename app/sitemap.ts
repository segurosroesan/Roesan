import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/services-data';
import { quoteData } from '@/lib/quote-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://roesan.com.co';

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/nosotros',
    '/servicios',
    '/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Service routes
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/servicios/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic Quote routes (SEO transaccional)
  const quoteRoutes: MetadataRoute.Sitemap = Object.values(quoteData).map((quote) => ({
    url: `${baseUrl}/cotizar/${quote.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9, // High priority for commercial intent
  }));

  return [...staticRoutes, ...serviceRoutes, ...quoteRoutes];
}
