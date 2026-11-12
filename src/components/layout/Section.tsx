import type { ReactNode } from 'react'
import type { SectionId } from '../../types'

type SectionSpacing = 'default' | 'compact' | 'none'
type SectionSurface = 'offwhite' | 'white' | 'soft' | 'forest'

interface SectionProps {
  id: SectionId
  children: ReactNode
  spacing?: SectionSpacing
  surface?: SectionSurface
  className?: string
  ariaLabel?: string
}

const SPACING_CLASSES: Record<SectionSpacing, string> = {
  default: 'section-spacing',
  compact: 'section-spacing-compact',
  none: '',
}

const SURFACE_CLASSES: Record<SectionSurface, string> = {
  offwhite: 'bg-offwhite text-charcoal',
  white: 'bg-white text-charcoal',
  soft: 'bg-surface-soft text-charcoal',
  forest: 'bg-forest text-white',
}

export function Section({
  id,
  children,
  spacing = 'default',
  surface = 'offwhite',
  className = '',
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`scroll-mt-20 overflow-x-clip ${SPACING_CLASSES[spacing]} ${SURFACE_CLASSES[surface]} ${className}`.trim()}
    >
      {children}
    </section>
  )
}
