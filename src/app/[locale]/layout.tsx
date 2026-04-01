import type { Metadata } from 'next'
import { Syne, Outfit } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import CookieBanner from '@/components/layout/CookieBanner'
import '@/app/globals.css'

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return {
    metadataBase: new URL('https://afvcocinas.es'),
    title: {
      default: t('siteTitle'),
      template: `%s | ${t('siteName')}`,
    },
    description: t('siteDescription'),
    openGraph: {
      siteName: t('siteName'),
      locale: t('ogLocale'),
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/og-image.jpg'],
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AFV Montajes',
  description: 'Montador de cocinas en la provincia de Alicante',
  url: 'https://afvcocinas.es',
  telephone: '+34600000000',
  email: 'info@afvcocinas.es',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Alicante',
    addressCountry: 'ES',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Provincia de Alicante',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de cocinas',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Montaje de cocinas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño integral de cocinas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reforma de cocinas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Venta directa de cocinas' } },
    ],
  },
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${syne.variable} ${outfit.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
