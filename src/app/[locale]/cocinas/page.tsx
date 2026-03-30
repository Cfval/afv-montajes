import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import CocinasContent from './_content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cocinas.meta' })
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: locale === 'es' ? 'https://afvcocinas.es/cocinas' : 'https://afvcocinas.es/en/cocinas',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: { title: t('ogTitle'), description: t('ogDescription') },
  }
}

export default async function CocinasPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <CocinasContent />
}
