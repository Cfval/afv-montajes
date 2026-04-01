'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const PAGE_SIZE = 12
const heights = [220, 300, 260, 340, 200, 280, 320, 240, 360, 200, 290, 250]

interface GalleryImage {
  src: string
  alt: string
}

export default function MasonryGrid({ images }: { images: GalleryImage[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const t = useTranslations('gallery')

  const visibleImages = images.slice(0, visible)
  const hasMore = visible < images.length
  const slides = images.map((img) => ({ src: img.src }))

  return (
    <>
      <div
        style={{ columnGap: '12px' }}
        className="[column-count:1] sm:[column-count:2] lg:[column-count:3]"
      >
        {visibleImages.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut' as const,
              delay: Math.min((i % PAGE_SIZE) * 0.04, 0.4),
            }}
            style={{ breakInside: 'avoid', marginBottom: '12px', display: 'block' }}
          >
            <button
              className="relative w-full overflow-hidden group block"
              onClick={() => setLightboxIndex(i)}
              style={{ height: `${heights[i % heights.length]}px`, cursor: 'zoom-in' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                className="group-hover:scale-[1.02]"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255,255,255,0.35)' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E87B35" strokeWidth="1.8">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="flex justify-center mt-12 mb-4">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="btn-outline"
          >
            {t('viewMoreButton')}
          </button>
        </div>
      )}

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />
    </>
  )
}
