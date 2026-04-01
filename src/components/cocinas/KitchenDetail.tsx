'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/lib/navigation'
import type { Kitchen } from '@/data/kitchens'
import { kitchensTranslations } from '@/data/kitchens-translations'

export default function KitchenDetail({ kitchen }: { kitchen: Kitchen }) {
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const t = useTranslations('cocinas.detail')
  const ts = useTranslations('cocinas.styleLabels')
  const locale = useLocale()

  const isEnglish = locale === 'en'
  const kitchenData = isEnglish ? kitchensTranslations.en[kitchen.slug as keyof typeof kitchensTranslations.en] : undefined

  const slides = kitchen.images.map((src) => ({ src }))

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto px-8" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <header className="mb-8" style={{ paddingTop: 6 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#E87B35' }}>
              {ts(kitchen.style)}
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(26px, 3.4vw, 40px)', color: '#1A1A1A', margin: 0 }}>{kitchenData?.name || kitchen.name}</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '16px', color: '#666666', lineHeight: 1.6, maxWidth: '880px' }}>{kitchenData?.description || kitchen.description}</p>
          </div>
        </header>

        {/* Image gallery */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* First image — large */}
            <button
              className="col-span-2 row-span-2 relative overflow-hidden group"
              onClick={() => setLightboxIndex(0)}
              style={{ minHeight: '360px', cursor: 'zoom-in' }}
            >
              <Image
                src={kitchen.images[0]}
                alt={kitchen.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                style={{ objectFit: 'cover', transition: 'transform 0.7s ease' }}
                className="group-hover:scale-[1.03]"
              />
              <div
                className="absolute bottom-0 right-0 p-3"
                style={{ color: '#666666', fontSize: '12px', fontFamily: 'var(--font-sans)' }}
              >
                1 / {kitchen.images.length}
              </div>
            </button>

            {/* Rest of images */}
            {kitchen.images.slice(1, 5).map((src, i) => (
              <button
                key={i}
                className="relative overflow-hidden group"
                onClick={() => setLightboxIndex(i + 1)}
                style={{ minHeight: '175px', cursor: 'zoom-in' }}
              >
                <Image
                  src={src}
                  alt={`${kitchen.name} — foto ${i + 2}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  className="group-hover:scale-[1.04]"
                />
                {i === 3 && kitchen.images.length > 5 && (
                  <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.85)' }}>
                    <span style={{ color: '#E87B35', fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 700 }}>
                      +{kitchen.images.length - 4}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '15px', color: '#666666', lineHeight: 1.7, marginBottom: '20px' }}>
              {t('bottomCta.description')}
            </p>

            <Link href="/trabajos" className="btn-outline">
              {t('bottomCta.button')}
            </Link>
          </div>

          {/* Technical specs */}
          <div>
            <div style={{ backgroundColor: '#F5F5F3', border: '1px solid #E5E5E3', padding: '20px' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', color: '#1A1A1A', marginBottom: '12px' }}>{t('techSheet')}</p>

              {[
                { label: t('styleField'), value: ts(kitchen.style) },
                { label: t('materialsField'), value: kitchen.details.materials },
                { label: t('locationField'), value: kitchen.details.location },
              ].map((item, i, arr) => (
                <div key={item.label} style={{ paddingBottom: '12px', marginBottom: i < arr.length - 1 ? '12px' : 0, borderBottom: i < arr.length - 1 ? '1px solid #E5E5E3' : 'none' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: '#E87B35', marginBottom: '6px' }}>{item.label}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '14px', color: '#1A1A1A', lineHeight: 1.5 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />
    </div>
  )
}
