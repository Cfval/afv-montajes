import type { MetadataRoute } from 'next'
import { kitchens } from '@/data/kitchens'

const BASE = 'https://afvcocinas.es'

function url(path: string, locale: string): string {
  return locale === 'es' ? `${BASE}${path}` : `${BASE}/en${path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['es', 'en'] as const

  const staticRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) => [
    { url: url('/', locale), lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: url('/cocinas', locale), lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: url('/galeria', locale), lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  ])

  // Legal pages — Spanish only (content is always in Spanish)
  const legalRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/aviso-legal`, changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${BASE}/politica-privacidad`, changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: `${BASE}/politica-cookies`, changeFrequency: 'yearly' as const, priority: 0.2 },
  ]

  const kitchenRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    kitchens.map((k) => ({
      url: url(`/cocinas/${k.slug}`, locale),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  )

  return [...staticRoutes, ...legalRoutes, ...kitchenRoutes]
}
