import type { HTMLAttributes, ReactNode } from 'react'

export type CardVariant = 'elevated' | 'soft' | 'outlined' | 'forest'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: CardVariant
  padding?: CardPadding
  interactive?: boolean
  className?: string
}

const VARIANT_CLASSES: Record<CardVariant, string> = {
  elevated: 'bg-white border border-border/80 shadow-[var(--shadow-card)]',
  soft: 'bg-surface-soft border border-border/60',
  outlined: 'bg-white/70 border border-border',
  forest: 'bg-forest text-white border border-white/10',
}

const PADDING_CLASSES: Record<CardPadding, string> = {
  none: '',
  sm: 'p-5',
  md: 'p-6 sm:p-7',
  lg: 'p-7 sm:p-9',
}

const INTERACTIVE_CLASSES: Record<CardVariant, string> = {
  elevated:
    'transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-forest/20 hover:shadow-[var(--shadow-card-hover)]',
  soft: 'transition-colors duration-200 ease-out hover:border-forest/25',
  outlined:
    'transition-colors duration-200 ease-out hover:border-forest/30 hover:bg-white',
  forest: 'transition-colors duration-200 ease-out hover:border-lime/40',
}

export function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  interactive = false,
  className = '',
  ...rest
}: CardProps) {
  return (
    <div
      className={[
        'rounded-[var(--radius-card)]',
        VARIANT_CLASSES[variant],
        PADDING_CLASSES[padding],
        interactive ? INTERACTIVE_CLASSES[variant] : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </div>
  )
}
