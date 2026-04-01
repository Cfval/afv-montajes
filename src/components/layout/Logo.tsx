interface LogoProps {
  height?: number
  color?: string
}

export default function Logo({ height = 36, color = '#1A1A1A' }: LogoProps) {
  const fontSize = Math.round(height * 0.6)
  return (
    <span
      style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: `${fontSize}px`,
        color,
        letterSpacing: '-0.01em',
        lineHeight: 1,
      }}
      aria-label="AFV Montajes"
    >
      AFV Montajes
    </span>
  )
}
