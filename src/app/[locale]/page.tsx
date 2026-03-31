import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Hero from '@/components/home/Hero'

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

async function AboutSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'home' })
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#1A1A17' }}>
      <div className="mx-auto px-8" style={{ maxWidth: '600px' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(28px, 3vw, 40px)', color: '#F2F0E8', lineHeight: 1.2, marginBottom: '32px' }}>
          Montador de cocinas en Alicante
        </h2>
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '16px', color: '#9C9A8E', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '16px' }}>
            Me llamo Alberto y llevo más de 15 años dedicándome al montaje y diseño de cocinas en la provincia de Alicante.
          </p>
          <p>
            Trabajo con precisión milimétrica, atención al detalle y materiales de primera calidad. Cada proyecto es único y lo trato como si fuera mi propia casa.
          </p>
        </div>
      </div>
    </section>
  )
}

async function ContactSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'home' })
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#0E0E0C', borderTop: '0.5px solid rgba(201,169,110,0.08)' }}>
      <div className="mx-auto px-8" style={{ maxWidth: '600px' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'clamp(28px, 3vw, 40px)', color: '#F2F0E8', lineHeight: 1.2, marginBottom: '32px' }}>
          Contacto
        </h2>
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '16px', color: '#9C9A8E', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '24px' }}>
            <strong style={{ color: '#F2F0E8' }}>Email:</strong><br />
            <a href="mailto:info@afvcocinas.es" style={{ color: '#C9A96E', textDecoration: 'none' }}>info@afvcocinas.es</a>
          </p>
          <p>
            <strong style={{ color: '#F2F0E8' }}>Teléfono:</strong><br />
            <a href="tel:+34600000000" style={{ color: '#C9A96E', textDecoration: 'none' }}>+34 600 000 000</a>
          </p>
          <p style={{ marginTop: '24px', fontSize: '14px', color: '#6B6A60' }}>
            También puedes contactarme a través del botón de WhatsApp flotante.
          </p>
        </div>
      </div>
    </section>
  )
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <>
      <Hero />
      <AboutSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  )
}
