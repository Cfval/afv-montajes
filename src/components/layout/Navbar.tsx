'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '@/lib/navigation'
import Logo from '@/components/layout/Logo'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useTranslations('navbar')

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])
  const locale = useLocale()
  const pathname = usePathname()

  const navLinks = [
    { href: '/trabajos' as const, label: t('kitchens') },
    { href: '/galeria' as const, label: t('gallery') },
  ]

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: '#1A1A1A',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          className="relative mx-auto flex items-center px-8 lg:pl-0 lg:pr-8 h-16"
          style={{ maxWidth: '1280px' }}
        >
          {/* Logo with decorative slashes + V-notch — left aligned */}
          <div className="logo-group" style={{ display: 'flex', alignItems: 'stretch', height: '100%', marginLeft: '-16px' }}>
            {/* Stripe 1 */}
            <div
              style={{
                width: '24px',
                backgroundColor: '#FFFFFF',
                transform: 'skewX(22deg)',
                marginRight: '18px',
              }}
            />
            {/* Stripe 2 */}
            <div
              style={{
                width: '24px',
                backgroundColor: '#FFFFFF',
                transform: 'skewX(22deg)',
                marginRight: '6px',
              }}
            />
            {/* Main logo container */}
            <Link
              href="/"
              aria-label="AFV Montajes — Inicio"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                padding: '0 32px',
                height: '100%',
                clipPath: 'polygon(0 0, 100% 0, 88% 100%, 12% 100%)',
                textDecoration: 'none',
              }}
            >
              <Logo height={30} color="#1A1A1A" />
            </Link>
          </div>

          {/* Desktop nav — centered absolutely */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '15px',
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                    paddingBottom: '4px',
                    borderBottom: isActive ? '2px solid #E87B35' : '2px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#FFFFFF'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right: language switcher + Hamburger */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Language switcher — desktop */}
            <div
              className="hidden md:flex items-center gap-1"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '14px',
                letterSpacing: '1px',
              }}
            >
              {locale === 'es' ? (
                <span style={{ color: '#E87B35' }}>ES</span>
              ) : (
                <Link
                  href={pathname}
                  locale="es"
                  style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E87B35')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  ES
                </Link>
              )}
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
              {locale === 'en' ? (
                <span style={{ color: '#E87B35' }}>EN</span>
              ) : (
                <Link
                  href={pathname}
                  locale="en"
                  style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E87B35')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  EN
                </Link>
              )}
            </div>

            {/* Hamburger button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
            >
              <span
                className="block w-6 h-px transition-all duration-300 origin-center"
                style={{
                  backgroundColor: '#FFFFFF',
                  transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-300"
                style={{
                  backgroundColor: '#FFFFFF',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-px transition-all duration-300 origin-center"
                style={{
                  backgroundColor: '#FFFFFF',
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
            style={{ backgroundColor: '#1A1A1A' }}
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-8 px-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl transition-colors duration-200"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      color: isActive ? '#E87B35' : '#FFFFFF',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E87B35')}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#FFFFFF'
                    }}
                  >
                    {link.label}
                  </Link>
                )
              })}

              {/* Language switcher — mobile */}
              <div
                className="flex items-center gap-2 mt-2"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: '14px',
                  letterSpacing: '1px',
                }}
              >
                {locale === 'es' ? (
                  <span style={{ color: '#E87B35' }}>ES</span>
                ) : (
                  <Link
                    href={pathname}
                    locale="es"
                    onClick={() => setMenuOpen(false)}
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    ES
                  </Link>
                )}
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
                {locale === 'en' ? (
                  <span style={{ color: '#E87B35' }}>EN</span>
                ) : (
                  <Link
                    href={pathname}
                    locale="en"
                    onClick={() => setMenuOpen(false)}
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    EN
                  </Link>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
