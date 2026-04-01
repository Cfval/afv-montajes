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
              borderColor: isActive ? '#E87B35' : '#D1D1CF',
              backgroundColor: isActive ? '#E87B35' : '#F5F5F3',
              color: isActive ? '#FFFFFF' : '#999999',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = '#E87B35'
                e.currentTarget.style.color = '#E87B35'
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = '#D1D1CF'
                e.currentTarget.style.color = '#999999'
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
