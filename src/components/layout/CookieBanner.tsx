'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'

const COOKIE_KEY = 'afv-cookies'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const t = useTranslations('cookies')

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY)
    if (!saved) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(COOKIE_KEY, 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          role="dialog"
          aria-label={t('ariaLabel')}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(26,26,23,0.97)',
            borderTop: '1px solid rgba(201,169,110,0.15)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            className="mx-auto px-6 py-4"
            style={{
              maxWidth: '1280px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            {/* Text */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '13px',
                color: '#9C9A8E',
                lineHeight: 1.55,
                flex: '1 1 300px',
              }}
            >
              {t('text')}{' '}
              <Link
                href="/politica-cookies"
                style={{
                  color: '#C9A96E',
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(201,169,110,0.4)',
                }}
              >
                {t('moreInfo')}
              </Link>
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
              <button
                onClick={reject}
                style={{
                  background: 'transparent',
                  border: '0.5px solid rgba(201,169,110,0.35)',
                  padding: '9px 20px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#9C9A8E',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,169,110,0.6)'
                  e.currentTarget.style.color = '#C9A96E'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,169,110,0.35)'
                  e.currentTarget.style.color = '#9C9A8E'
                }}
              >
                {t('reject')}
              </button>
              <button
                onClick={accept}
                style={{
                  backgroundColor: '#C9A96E',
                  border: 'none',
                  padding: '9px 20px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#0E0E0C',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E2CFA0')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C9A96E')}
              >
                {t('accept')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
