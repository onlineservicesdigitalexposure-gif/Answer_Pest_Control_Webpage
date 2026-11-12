import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Icon } from './Icon'

export type BadgeVariant = 'soft' | 'forest' | 'lime' | 'onDark'

interface BadgeProps {
  children: ReactNode
  icon?: LucideIcon
  variant?: BadgeVariant
  className?: string
}

const BADGE_CLASSES: Record<BadgeVariant, string> = {
  soft: 'bg-surface-soft text-forest border border-border',
  forest: 'bg-forest text-lime border border-forest',
  lime: 'bg-lime text-forest border border-lime',
  onDark: 'bg-white/10 text-lime border border-white/15',
}

export function Badge({
  children,
  icon,
  variant = 'soft',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 font-heading text-xs font-semibold tracking-wide uppercase ${BADGE_CLASSES[variant]} ${className}`.trim()}
    >
      {icon && <Icon icon={icon} size="xs" />}
      <span>{children}</span>
    </span>
  )
}
