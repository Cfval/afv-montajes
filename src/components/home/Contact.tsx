'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34600000000'

export default function Contact() {
  const t = useTranslations('home.contact')
  const waT = useTranslations('whatsapp')

  const waLink = `https://wa.me/${waNumber}?text=${waT('message')}`

  return (
    <section
      className="py-20 md:py-32"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E5E5E3',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-8"
        style={{ maxWidth: '100%' }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 'clamp(40px, 5vw, 64px)',
            color: '#1A1A1A',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '48px',
            textAlign: 'left',
          }}
        >
          {t('heading')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: contact details */}
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: '16px',
              color: '#1A1A1A',
              lineHeight: 1.8,
            }}
            className="flex flex-col gap-5"
          >
            <div>
              <span style={{ fontWeight: 500, color: '#666666', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '4px' }}>
                {t('emailLabel')}
              </span>
              <a
                href="mailto:info@afvmontajes.es"
                style={{ color: '#1A1A1A', textDecoration: 'none', fontSize: '18px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E87B35')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#1A1A1A')}
              >
                info@afvmontajes.es
              </a>
            </div>

            <div>
              <span style={{ fontWeight: 500, color: '#666666', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '4px' }}>
                {t('phoneLabel')}
              </span>
              <a
                href="tel:+34600000000"
                style={{ color: '#1A1A1A', textDecoration: 'none', fontSize: '18px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E87B35')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#1A1A1A')}
              >
                +34 600 000 000
              </a>
            </div>

            <div style={{ marginTop: '8px' }}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('whatsappCta')}
              </a>
            </div>
          </div>

          {/* Right: descriptive text */}
          <div className="flex items-start">
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: 'clamp(16px, 1.5vw, 19px)',
                color: '#666666',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {t('description')}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
