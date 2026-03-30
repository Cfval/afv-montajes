interface LogoProps {
  height?: number
}

export default function Logo({ height = 36 }: LogoProps) {
  const width = Math.round((200 / 42) * height)
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AFV Cocinas"
    >
      <rect x="1" y="1" width="40" height="40" stroke="#C9A96E" strokeWidth="1.5" fill="none" rx="3" />
      <rect x="7" y="6" width="12" height="10" fill="#C9A96E" rx="1" />
      <rect x="23" y="6" width="12" height="10" fill="#C9A96E" rx="1" />
      <line x1="7" y1="22" x2="35" y2="22" stroke="#C9A96E" strokeWidth="2" />
      <rect x="7" y="26" width="28" height="10" stroke="#C9A96E" strokeWidth="1.2" fill="none" rx="1" />
      <text x="56" y="22" fontFamily="var(--font-sora), Sora, sans-serif" fontSize="32" fontWeight="600" fill="#F2F0E8" letterSpacing="3">AFV</text>
      <text x="56" y="36" fontFamily="var(--font-sora), Sora, sans-serif" fontSize="12" fontWeight="300" fill="#C9A96E" letterSpacing="5">COCINAS</text>
    </svg>
  )
}
