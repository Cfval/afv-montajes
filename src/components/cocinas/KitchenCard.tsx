'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'
import type { Kitchen } from '@/data/kitchens'

export default function KitchenCard({ kitchen }: { kitchen: Kitchen }) {
  const [hovered, setHovered] = useState(false)
  const ts = useTranslations('cocinas.styleLabels')

  return (
    <Link href={`/trabajos/${kitchen.slug}`} className="block" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div
        className="bg-white overflow-hidden transition-all duration-250"
        style={{
          boxShadow: hovered ? '0 4px 16px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
          borderBottom: hovered ? '2px solid #E87B35' : '2px solid transparent',
          transform: hovered ? 'translateY(-4px)' : 'none',
        }}
      >
        <div style={{ position: 'relative', width: '100%', minHeight: 200, overflow: 'hidden' }}>
          <Image
            src={kitchen.images[0]}
            alt={kitchen.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover', transition: 'transform 0.6s ease', transform: hovered ? 'scale(1.03)' : 'scale(1)' }}
          />
        </div>

        <div className="p-4">
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#E87B35', marginBottom: 8 }}>
            {ts(kitchen.style)}
          </span>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: '#1A1A1A', lineHeight: 1.25, marginTop: 4 }}>
            {kitchen.name}
          </p>
        </div>
      </div>
    </Link>
  )
}
