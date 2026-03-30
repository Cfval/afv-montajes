'use client'

import { useTranslations } from 'next-intl'

interface KitchenFiltersProps {
  activeFilter: string
  onFilterChange: (value: string) => void
}

export default function KitchenFilters({ activeFilter, onFilterChange }: KitchenFiltersProps) {
  const t = useTranslations('cocinas.filters')

  const filters: { value: string; label: string }[] = [
    { value: 'todas', label: t('todas') },
    { value: 'moderna', label: t('moderna') },
    { value: 'rustica', label: t('rustica') },
    { value: 'minimalista', label: t('minimalista') },
    { value: 'con-isla', label: t('con-isla') },
    { value: 'clasica', label: t('clasica') },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value
        return (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '8px 18px',
              border: '1px solid',
              borderColor: isActive ? '#C9A96E' : 'rgba(201,169,110,0.3)',
              backgroundColor: isActive ? '#C9A96E' : 'transparent',
              color: isActive ? '#0E0E0C' : '#C9A96E',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = 'rgba(201,169,110,0.12)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = 'transparent'
              }
            }}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
