import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/lib/navigation'
import { kitchens } from '@/data/kitchens'
import { routing } from '@/i18n/routing'
import KitchenDetail from '@/components/cocinas/KitchenDetail'
import KitchenCard from '@/components/cocinas/KitchenCard'

type Props = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    kitchens.map((k) => ({ locale, slug: k.slug }))
  )
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const kitchen = kitchens.find((k) => k.slug === slug)
  if (!kitchen) return {}
  const desc = kitchen.description.slice(0, 160)
  return {
    title: kitchen.name,
    description: desc,
    openGraph: {
      title: `${kitchen.name} | AFV Cocinas`,
      description: desc,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: kitchen.name }],
    },
    twitter: { title: kitchen.name, description: desc },
  }
}

export default async function KitchenPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const kitchen = kitchens.find((k) => k.slug === slug)
  if (!kitchen) notFound()

  const t = await getTranslations({ locale, namespace: 'cocinas.detail' })

  const related = kitchens
    .filter((k) => k.slug !== kitchen.slug && k.style === kitchen.style)
    .slice(0, 3)

  const fallbackRelated =
    related.length === 0
      ? kitchens.filter((k) => k.slug !== kitchen.slug).slice(0, 3)
      : related

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto px-6 pt-8" style={{ maxWidth: '1180px' }}>
        <nav style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#666666', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#666666', textDecoration: 'none' }}>{t('breadcrumbHome')}</Link>
          <span style={{ color: '#E5E5E3' }}>›</span>
          <Link href="/trabajos" style={{ color: '#666666', textDecoration: 'none' }}>{t('breadcrumbKitchens')}</Link>
          <span style={{ color: '#E5E5E3' }}>›</span>
          <span style={{ color: '#1A1A1A', fontWeight: 500 }}>{kitchen.name}</span>
        </nav>
      </div>

      {/* Kitchen detail */}
      <KitchenDetail kitchen={kitchen} />

      {/* Related kitchens */}
      {fallbackRelated.length > 0 && (
        <section className="py-16" style={{ backgroundColor: '#F5F5F3' }}>
          <div className="mx-auto px-6" style={{ maxWidth: '1180px' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#E87B35', marginBottom: '8px' }}>
              {t('relatedTag')}
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(20px, 2.4vw, 28px)', color: '#1A1A1A', marginBottom: '20px' }}>
              {t('relatedHeading')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {fallbackRelated.map((k) => (
                <KitchenCard key={k.slug} kitchen={k} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
