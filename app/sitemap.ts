import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/services-data';
import { quoteData } from '@/lib/quote-data';
import { blogPosts } from '@/lib/blog-data';
import { colombiaTopCars } from '@/lib/car-catalog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://roesan.com.co';

  // Static routes — ordered by importance
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: '',                       priority: 1.0, freq: 'daily'   },
    { path: '/cotizar',               priority: 0.9, freq: 'weekly'  },
    { path: '/servicios',             priority: 0.8, freq: 'weekly'  },
    { path: '/servicios/personas',    priority: 0.7, freq: 'weekly'  },
    { path: '/servicios/empresas',    priority: 0.7, freq: 'weekly'  },
    { path: '/nosotros',              priority: 0.6, freq: 'monthly' },
    { path: '/blog',                  priority: 0.7, freq: 'weekly'  },
    { path: '/contacto',              priority: 0.6, freq: 'monthly' },
    { path: '/privacidad',            priority: 0.3, freq: 'yearly'  },
    { path: '/terminos',              priority: 0.3, freq: 'yearly'  },
    { path: '/aviso-legal',           priority: 0.3, freq: 'yearly'  },
  ].map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: freq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority,
  }));

  // /cotizar/[ramo] — intención comercial alta
  const quoteRoutes: MetadataRoute.Sitemap = Object.values(quoteData).map((quote) => ({
    url: `${baseUrl}/cotizar/${quote.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // /servicios/[slug]
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/servicios/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // /cotizar/auto/[marca]/[modelo] — SEO programático long-tail
  const carRoutes: MetadataRoute.Sitemap = colombiaTopCars.map((car) => ({
    url: `${baseUrl}/cotizar/auto/${car.slugMarca}/${car.slugModelo}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // /blog/[slug]
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...quoteRoutes, ...serviceRoutes, ...carRoutes, ...blogRoutes];
}
