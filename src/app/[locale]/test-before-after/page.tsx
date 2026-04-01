import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BeforeAfter from '@/components/shared/BeforeAfter'

type Props = { params: Promise<{ locale: string }> }

export const metadata: Metadata = {
  title: 'Test BeforeAfter',
  description: 'Página de prueba para el slider Before/After',
}

export default async function TestBeforeAfterPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const before = { src: '/images/slider/antes1.jpeg', alt: 'Antes' }
  const after = { src: '/images/slider/despues1.jpeg', alt: 'Después' }

  return (
    <div style={{ padding: '24px', background: '#0f0f0d', minHeight: '100vh' }}>
      <h1 style={{ color: '#F2F0E8', fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>Before / After — Test</h1>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <BeforeAfter before={before} after={after} />
      </div>
    </div>
  )
}
