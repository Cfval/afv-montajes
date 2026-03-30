import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import ParallaxSection from '@/components/home/ParallaxSection'
import FeaturedWork from '@/components/home/FeaturedWork'
import Stats from '@/components/home/Stats'
import Brands from '@/components/home/Brands'
import CtaSection from '@/components/home/CtaSection'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home.meta' })
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: locale === 'es' ? 'https://afvcocinas.es' : 'https://afvcocinas.es/en',
    },
    twitter: {
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <>
      <Hero />
      <Services />
      <ParallaxSection phraseKey="phrase1" />
      <FeaturedWork />
      <ParallaxSection phraseKey="phrase2" />
      <Stats />
      <Brands />
      <CtaSection />
    </>
  )
}
