'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  ReactCompareSlider,
} from 'react-compare-slider'

interface BeforeAfterProps {
  before: { src: string; alt: string }
  after: { src: string; alt: string }
  labels?: { before?: string; after?: string }
}

function PlaceholderImage({ alt, tone }: { alt: string; tone: 'dark' | 'medium' }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: tone === 'dark' ? '#F3F4F6' : '#E8EDEE',
        backgroundImage: tone === 'dark'
          ? 'radial-gradient(ellipse at 40% 50%, rgba(232,123,53,0.04) 0%, transparent 60%)'
          : 'radial-gradient(ellipse at 60% 50%, rgba(232,123,53,0.03) 0%, transparent 60%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 300,
          fontSize: '11px',
          color: '#374151',
          textAlign: 'center',
          lineHeight: 1.5,
        }}
      >
        {alt}
      </p>
    </div>
  )
}

function SliderHandle() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0',
        cursor: 'ew-resize',
      }}
    >
      {/* Vertical line */}
      <div
        style={{
          width: '1px',
          height: '100vh',
          backgroundColor: '#1A1A1A',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.9,
        }}
      />
      {/* Circle */}
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid #1A1A1A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7H1M1 7L3.5 4M1 7L3.5 10M13 7H17M17 7L14.5 4M17 7L14.5 10"
            stroke="#1A1A1A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default function BeforeAfter({ before, after, labels }: BeforeAfterProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const beforeLabel = labels?.before ?? 'ANTES'
  const afterLabel = labels?.after ?? 'DESPUÉS'

  if (!mounted) return <div style={{ aspectRatio: '16/9', backgroundColor: '#F5F5F5' }} />

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <ReactCompareSlider
        handle={<SliderHandle />}
        itemOne={
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {before.src
              ? (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src={before.src} alt={before.alt} fill sizes="(max-width: 560px) 100vw, 560px" style={{ objectFit: 'cover' }} />
                </div>
              ) : <PlaceholderImage alt={before.alt} tone="dark" />
            }
            {/* Before label */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#111827',
                backgroundColor: 'rgba(255,255,255,0.9)',
                padding: '6px 12px',
                borderRadius: 6,
                border: '1px solid rgba(26,26,26,0.15)',
              }}
            >
              {beforeLabel}
            </div>
          </div>
        }
        itemTwo={
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {after.src
              ? (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src={after.src} alt={after.alt} fill sizes="(max-width: 560px) 100vw, 560px" style={{ objectFit: 'cover' }} />
                </div>
              ) : <PlaceholderImage alt={after.alt} tone="medium" />
            }
            {/* After label */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#111827',
                backgroundColor: 'rgba(255,255,255,0.9)',
                padding: '6px 12px',
                borderRadius: 6,
                border: '1px solid rgba(26,26,26,0.15)',
              }}
            >
              {afterLabel}
            </div>
          </div>
        }
        style={{ aspectRatio: '16/9' }}
      />
    </div>
  )
}
