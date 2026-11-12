import type { ReactNode } from 'react'

interface EyebrowProps {
  children: ReactNode
  onDark?: boolean
  className?: string
}

export function Eyebrow({
  children,
  onDark = false,
  className = '',
}: EyebrowProps) {
  return (
    <p
      className={`font-heading text-xs font-semibold uppercase tracking-[0.14em] ${
        onDark ? 'text-lime' : 'text-forest/75'
      } ${className}`.trim()}
    >
      {children}
    </p>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  onDark?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  onDark = false,
  className = '',
}: SectionHeaderProps) {
  const alignment =
    align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'

  return (
    <div className={`${alignment} ${className}`.trim()}>
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-2.5 ${onDark ? 'text-white' : 'text-forest'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            onDark ? 'text-white/80' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

type TextTone = 'default' | 'muted' | 'forest' | 'onDark' | 'onDarkMuted'
type TextSize = 'sm' | 'base' | 'lg'

interface TextProps {
  children: ReactNode
  tone?: TextTone
  size?: TextSize
  className?: string
}

const TONE_CLASSES: Record<TextTone, string> = {
  default: 'text-charcoal',
  muted: 'text-muted',
  forest: 'text-forest',
  onDark: 'text-white',
  onDarkMuted: 'text-white/75',
}

const SIZE_CLASSES: Record<TextSize, string> = {
  sm: 'text-sm leading-relaxed',
  base: 'text-base leading-relaxed',
  lg: 'text-base sm:text-lg leading-relaxed',
}

export function Text({
  children,
  tone = 'default',
  size = 'base',
  className = '',
}: TextProps) {
  return (
    <p className={`${SIZE_CLASSES[size]} ${TONE_CLASSES[tone]} ${className}`.trim()}>
      {children}
    </p>
  )
}
