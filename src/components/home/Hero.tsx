'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('home.hero')

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div
        className="mx-auto w-full px-6 md:px-8 py-16 md:py-0"
        style={{ maxWidth: '1400px' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start min-h-screen md:min-h-0 md:h-screen">
          {/* Left: text + third photo */}
          <div className="md:col-span-4 relative z-10 flex flex-col justify-center md:pt-[20vh] pt-24">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(44px, 5.5vw, 76px)',
                color: '#1A1A1A',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: '16px',
              }}
            >
              {t('name')}
            </motion.h1>

            {/* Role + location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                marginBottom: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  fontSize: 'clamp(15px, 1.4vw, 17px)',
                  color: '#666666',
                  margin: 0,
                }}
              >
                {t('role')}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  fontSize: 'clamp(15px, 1.4vw, 17px)',
                  color: '#666666',
                  margin: 0,
                }}
              >
                {t('location')}
              </p>
            </motion.div>

            {/* Orange decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                width: '75px',
                height: '3px',
                backgroundColor: '#E87B35',
                transformOrigin: 'left',
              }}
            />

            {/* Blueprint — desktop only (below text) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="hidden md:block"
              style={{
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '709/751',
                position: 'relative',
                marginTop: '48px',
              }}
            >
              <Image src="/images/hero/plano.jfif" alt="Plano cocina" fill sizes="340px" style={{ objectFit: 'contain', objectPosition: 'left center' }} />
            </motion.div>
          </div>

          {/* Right: main photo — desktop */}
          <div
            className="md:col-span-8 relative hidden md:flex flex-col items-end gap-6 md:pt-[5vh]"
            style={{ minHeight: '480px' }}
          >
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                width: '90%',
                marginLeft: 'auto',
                height: '70vh',
                maxHeight: '700px',
                minHeight: '420px',
                position: 'relative',
              }}
            >
              <Image src="/images/hero/home-hero.jpeg" alt="Home hero" fill sizes="(max-width: 768px) 100vw, 60vw" loading="eager" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </motion.div>
          </div>

          {/* Mobile: main photo + blueprint stacked and centered */}
          <div className="md:hidden flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                width: '100%',
                aspectRatio: '4/3',
                position: 'relative',
              }}
            >
              <Image src="/images/hero/home-hero.jpeg" alt="Home hero" fill sizes="(max-width: 768px) 92vw, 60vw" loading="eager" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{
                width: '80%',
                maxWidth: '320px',
                aspectRatio: '16/10',
                position: 'relative',
              }}
            >
              <Image src="/images/hero/plano.jfif" alt="Plano cocina" fill sizes="320px" quality={100} style={{ objectFit: 'contain', objectPosition: 'center' }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
