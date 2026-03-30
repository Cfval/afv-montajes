'use client'

import { useTranslations } from 'next-intl'

const brands = ['Silestone', 'Siemens', 'Franke', 'Bosch', 'Neff', 'Smeg']

export default function Brands() {
  const t = useTranslations('home.brands')

  return (
    <section className="py-20" style={{ backgroundColor: '#0E0E0C' }}>
      <div className="mx-auto px-8" style={{ maxWidth: '1280px' }}>
        {/* Header */}
        <p
          className="text-center mb-10"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#6B6A60',
          }}
        >
          {t('tag')}
        </p>

        {/* Brands row */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {brands.map((brand, i) => (
            <span
              key={brand}
              className="hover:text-text-secondary transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#6B6A60',
              }}
            >
              {brand}
              {i < brands.length - 1 && (
                <span
                  style={{
                    marginLeft: '40px',
                    color: 'rgba(201,169,110,0.2)',
                    fontWeight: 300,
                  }}
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
