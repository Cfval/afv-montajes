'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'
import type { Kitchen } from '@/data/kitchens'

export default function KitchenDetail({ kitchen }: { kitchen: Kitchen }) {
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const t = useTranslations('cocinas.detail')
  const ts = useTranslations('cocinas.styleLabels')

  const slides = kitchen.images.map((src) => ({ src }))

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto px-8" style={{ maxWidth: '1280px' }}>

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
                style={{ color: 'rgba(201,169,110,0.8)', fontSize: '12px', fontFamily: 'var(--font-sans)' }}
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
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(14,14,12,0.75)' }}
                  >
                    <span style={{ color: '#C9A96E', fontFamily: 'var(--font-serif)', fontSize: '22px' }}>
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
            {/* Style badge */}
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '10px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#C9A96E',
                border: '0.5px solid rgba(201,169,110,0.35)',
                padding: '4px 12px',
                marginBottom: '16px',
              }}
            >
              {ts(kitchen.style)}
            </span>

            {/* Title */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: '#F2F0E8',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              {kitchen.name}
            </h1>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#9C9A8E',
                marginBottom: '40px',
              }}
            >
              {kitchen.description}
            </p>

            <Link href="/presupuesto" className="btn-primary">
              {t('similarCta')}
            </Link>
          </div>

          {/* Technical specs */}
          <div>
            <div
              style={{
                backgroundColor: '#1A1A17',
                border: '0.5px solid rgba(201,169,110,0.1)',
                padding: '28px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: '11px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: '#C9A96E',
                  marginBottom: '20px',
                }}
              >
                {t('techSheet')}
              </p>

              {[
                { label: t('styleField'), value: ts(kitchen.style) },
                { label: t('materialsField'), value: kitchen.details.materials },
                { label: t('locationField'), value: kitchen.details.location },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  style={{
                    paddingBottom: '16px',
                    marginBottom: i < arr.length - 1 ? '16px' : 0,
                    borderBottom: i < arr.length - 1 ? '0.5px solid rgba(201,169,110,0.08)' : 'none',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      color: '#6B6A60',
                      marginBottom: '6px',
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 300,
                      fontSize: '14px',
                      color: '#F2F0E8',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.value}
                  </p>
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
