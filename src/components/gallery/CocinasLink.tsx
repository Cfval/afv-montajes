'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'

export default function CocinasLink() {
  const [hovered, setHovered] = useState(false)
  const t = useTranslations('gallery')

  return (
    <Link
      href="/trabajos#portfolio"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        marginBottom: '40px',
        padding: '36px 32px',
        backgroundColor: '#1A1A1A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Orange accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '4px',
          height: '100%',
          backgroundColor: '#E87B35',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#E87B35',
            marginBottom: '8px',
          }}
        >
          Portfolio
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 32px)',
              color: '#FFFFFF',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {t('portfolioLink')}
          </p>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E87B35"
            strokeWidth="1.4"
            style={{
              transition: 'transform 0.3s ease',
              transform: hovered ? 'translateX(8px)' : 'translateX(0)',
              flexShrink: 0,
            }}
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
