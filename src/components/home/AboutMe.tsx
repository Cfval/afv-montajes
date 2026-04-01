'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function AboutMe() {
  const t = useTranslations('home.about')

  // Text uses [[highlight]] as delimiter to avoid next-intl interpolation
  const text = t('text')
  const highlight = t('highlight')
  const parts = text.split('[[highlight]]')

  return (
    <section style={{ backgroundColor: '#F5F5F3' }} className="py-20 md:py-32">
      <div className="mx-auto px-6 md:px-8 relative" style={{ maxWidth: '1280px' }}>
        {/* Decorative large number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 'clamp(80px, 12vw, 160px)',
            color: '#EAEAE8',
            lineHeight: 0.8,
            position: 'absolute',
            top: '-20px',
            right: '0',
            userSelect: 'none',
            zIndex: 0,
          }}
        >
          {t('number')}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10"
          style={{ maxWidth: '640px' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: 'clamp(17px, 1.8vw, 21px)',
              color: '#1A1A1A',
              lineHeight: 1.8,
              textAlign: 'left',
            }}
          >
            {parts[0]}
            <span style={{ color: '#E87B35' }}>{highlight}</span>
            {parts[1] ?? ''}
          </p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              marginTop: '40px',
              display: 'flex',
              gap: '40px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '7+', label: t('statYears') },
              { value: '300+', label: t('statKitchens') },
              { value: t('statLocation'), label: null },
            ].map(({ value, label }) => (
              <div key={value} style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 2.5vw, 28px)',
                    color: '#1A1A1A',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {value}
                </span>
                {label && (
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: '#666666',
                    }}
                  >
                    {label}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
