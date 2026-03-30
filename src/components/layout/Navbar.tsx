'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '@/lib/navigation'
import Logo from '@/components/layout/Logo'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useTranslations('navbar')
  const locale = useLocale()
  const pathname = usePathname()

  const navLinks = [
    { href: '/' as const, label: t('home') },
    { href: '/cocinas' as const, label: t('kitchens') },
    { href: '/galeria' as const, label: t('gallery') },
    { href: '/sobre-mi' as const, label: t('about') },
    { href: '/blog' as const, label: t('blog') },
    { href: '/contacto' as const, label: t('contact') },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(14, 14, 12, 0.92)',
          borderColor: 'rgba(139, 116, 68, 0.2)',
        }}
      >
        <div className="mx-auto flex items-center justify-between px-8 h-16"
          style={{ maxWidth: '1280px' }}
        >
          {/* Logo */}
          <Link href="/" aria-label="AFV Cocinas — Inicio">
            <Logo height={30} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  color: '#9C9A8E',
                  letterSpacing: '0.05em',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F2F0E8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9C9A8E')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: language switcher + CTA + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Language switcher — desktop */}
            <div className="hidden md:flex items-center gap-1"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px', letterSpacing: '2px' }}
            >
              {locale === 'es' ? (
                <span style={{ color: '#C9A96E' }}>ES</span>
              ) : (
                <Link href={pathname} locale="es" style={{ color: '#6B6A60', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#6B6A60')}
                >ES</Link>
              )}
              <span style={{ color: '#3A3A37' }}>/</span>
              {locale === 'en' ? (
                <span style={{ color: '#C9A96E' }}>EN</span>
              ) : (
                <Link href={pathname} locale="en" style={{ color: '#6B6A60', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#6B6A60')}
                >EN</Link>
              )}
            </div>

            {/* CTA desktop */}
            <Link
              href="/presupuesto"
              className="btn-primary hidden md:inline-flex items-center"
              style={{ padding: '10px 24px' }}
            >
              {t('budgetCta')}
            </Link>

            {/* Hamburger button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
            >
              <span
                className="block w-6 h-px transition-all duration-300 origin-center"
                style={{
                  backgroundColor: '#C9A96E',
                  transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  backgroundColor: '#C9A96E',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-300 origin-center"
                style={{
                  backgroundColor: '#C9A96E',
                  transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 flex flex-col pt-16 md:hidden"
            style={{ backgroundColor: '#0E0E0C' }}
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-8 px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl transition-colors duration-300"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: '#9C9A8E',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9C9A8E')}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/presupuesto"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-4 inline-flex items-center"
              >
                {t('budgetCtaMobile')}
              </Link>

              {/* Language switcher — mobile */}
              <div className="flex items-center gap-2 mt-2"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '12px', letterSpacing: '2px' }}
              >
                {locale === 'es' ? (
                  <span style={{ color: '#C9A96E' }}>ES</span>
                ) : (
                  <Link href={pathname} locale="es" onClick={() => setMenuOpen(false)} style={{ color: '#6B6A60' }}>ES</Link>
                )}
                <span style={{ color: '#3A3A37' }}>/</span>
                {locale === 'en' ? (
                  <span style={{ color: '#C9A96E' }}>EN</span>
                ) : (
                  <Link href={pathname} locale="en" onClick={() => setMenuOpen(false)} style={{ color: '#6B6A60' }}>EN</Link>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
