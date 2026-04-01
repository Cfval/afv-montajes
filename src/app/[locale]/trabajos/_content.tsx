"use client"

import Image from 'next/image'
import Link from 'next/link'
import editorialImg from '../../../../public/images/cocinas/detalle-editorial.jpg'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { kitchens } from '@/data/kitchens'
import KitchenGrid from '@/components/cocinas/KitchenGrid'
import BeforeAfter from '@/components/shared/BeforeAfter'

export default function CocinasContent() {
  const t = useTranslations('cocinas')

  return (
    <>
      {/* Hero */}
      <section className="flex items-center bg-white" style={{ minHeight: '48vh' }}>
        <div className="mx-auto px-6 py-20" style={{ maxWidth: '1180px' }}>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E87B35', marginBottom: '10px' }}
          >
            {t('hero.tag')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(28px, 4.6vw, 44px)', color: '#1A1A1A', lineHeight: 1.05, maxWidth: '720px' }}
          >
            {t('hero.heading')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '16px', color: '#666666', lineHeight: 1.6, marginTop: '16px', maxWidth: '620px' }}
          >
            {t('hero.description')}
          </motion.p>
        </div>
      </section>

      {/* Trabajos realizados */}
      <section id="portfolio" className="py-20" style={{ backgroundColor: '#F5F5F3' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1180px' }}>
          <div className="mb-8">
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E87B35', marginBottom: '8px' }}>
              {t('portfolio.tag')}
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', color: '#1A1A1A', lineHeight: 1.15 }}>
              {t('portfolio.heading')}
            </h2>
          </div>
          <KitchenGrid kitchens={kitchens} />
        </div>
      </section>

      {/* Nuestro enfoque */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-6" style={{ maxWidth: '1180px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden' }}>
              <Image
                src={editorialImg}
                alt="Detalle de montaje"
                fill
                priority={false}
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E87B35', marginBottom: '10px' }}>
                {t('approach.tag')}
              </p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(20px, 2.6vw, 30px)', color: '#1A1A1A', lineHeight: 1.2, marginBottom: '14px' }}>
                {t('approach.heading')}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '16px', color: '#666666', lineHeight: 1.7, marginBottom: '20px' }}>
                {t('approach.body')}
              </p>
              <Link href="/galeria" className="btn-outline">
                {t('approach.galleryButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformaciones */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F3' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1180px' }}>
          <div className="mb-8 text-center">
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#E87B35', marginBottom: '8px' }}>
              {t('beforeAfter.tag')}
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', color: '#1A1A1A', lineHeight: 1.15 }}>
              {t('beforeAfter.heading')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BeforeAfter
              before={{ src: '/images/slider/antes2.jpeg', alt: 'Cocina antes de la reforma' }}
              after={{ src: '/images/slider/despues2.jpeg', alt: 'Cocina después de la reforma' }}
              labels={{ before: t('beforeAfter.before'), after: t('beforeAfter.after') }}
            />
            <BeforeAfter
              before={{ src: '', alt: 'Cocina antes' }}
              after={{ src: '', alt: 'Cocina después' }}
              labels={{ before: t('beforeAfter.before'), after: t('beforeAfter.after') }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
