import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/services-data';
import { quoteData } from '@/lib/quote-data';
import { publishedBlogPosts } from '@/lib/blog-data';
import { blogTopics } from '@/lib/blog-topics';
import { blogAuthors } from '@/lib/blog-authors';
import { colombiaTopCars } from '@/lib/car-catalog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://roesan.com';

  // Static routes — ordered by importance
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: '',                              priority: 1.0, freq: 'daily'   },
    { path: '/cotizador',                    priority: 0.9, freq: 'weekly'  },
    { path: '/servicios',                   priority: 0.8, freq: 'weekly'  },
    { path: '/servicios/personas',          priority: 0.7, freq: 'weekly'  },
    { path: '/servicios/empresas',          priority: 0.7, freq: 'weekly'  },
    { path: '/nosotros',                    priority: 0.6, freq: 'monthly' },
    { path: '/blog',                        priority: 0.7, freq: 'weekly'  },
    { path: '/blog/politica-editorial',    priority: 0.4, freq: 'yearly'  },
    { path: '/contacto',                    priority: 0.6, freq: 'monthly' },
    { path: '/lineas-asistencia',           priority: 0.5, freq: 'monthly' },
    { path: '/brochures',                   priority: 0.5, freq: 'monthly' },
    { path: '/brochures/personas',          priority: 0.5, freq: 'monthly' },
    { path: '/brochures/empresas',          priority: 0.5, freq: 'monthly' },
    { path: '/privacidad',                  priority: 0.3, freq: 'yearly'  },
    { path: '/terminos',                    priority: 0.3, freq: 'yearly'  },
    { path: '/aviso-legal',                 priority: 0.3, freq: 'yearly'  },
  ].map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    changeFrequency:
      freq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority,
  }));

  // /cotizar/[ramo] — intención comercial alta
  const quoteRoutes: MetadataRoute.Sitemap = Object.values(quoteData).map(
    (quote) => ({
      url: `${baseUrl}/cotizar/${quote.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })
  );

  // /servicios/[slug]
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/servicios/${service.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // /cotizar/auto/[marca]/[modelo] — SEO programático long-tail
  const carRoutes: MetadataRoute.Sitemap = colombiaTopCars.map((car) => ({
    url: `${baseUrl}/cotizar/auto/${car.slugMarca}/${car.slugModelo}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // /blog/[slug]
  const blogRoutes: MetadataRoute.Sitemap = publishedBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // /blog/temas/[slug]
  const blogTopicRoutes: MetadataRoute.Sitemap = blogTopics.map((topic) => ({
    url: `${baseUrl}/blog/temas/${topic.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // /blog/autores/[slug]
  const blogAuthorRoutes: MetadataRoute.Sitemap = blogAuthors.map((author) => ({
    url: `${baseUrl}${author.profilePath}`,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [
    ...staticRoutes,
    ...quoteRoutes,
    ...serviceRoutes,
    ...carRoutes,
    ...blogRoutes,
    ...blogTopicRoutes,
    ...blogAuthorRoutes,
  ];
}
