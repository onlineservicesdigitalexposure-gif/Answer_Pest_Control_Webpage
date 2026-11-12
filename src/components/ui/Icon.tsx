import type { LucideIcon, LucideProps } from 'lucide-react'

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type IconBoxVariant = 'soft' | 'forest' | 'lime' | 'onDark'

const ICON_SIZE_MAP: Record<IconSize, number> = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
}

interface IconProps extends Omit<LucideProps, 'size'> {
  icon: LucideIcon
  size?: IconSize
}

export function Icon({
  icon: LucideComponent,
  size = 'md',
  strokeWidth = 1.75,
  className = '',
  'aria-hidden': ariaHidden = true,
  ...rest
}: IconProps) {
  return (
    <LucideComponent
      size={ICON_SIZE_MAP[size]}
      strokeWidth={strokeWidth}
      aria-hidden={ariaHidden}
      className={`shrink-0 ${className}`.trim()}
      {...rest}
    />
  )
}

interface IconBoxProps {
  icon: LucideIcon
  variant?: IconBoxVariant
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const BOX_SIZE_CLASSES = {
  sm: 'h-9 w-9 rounded-lg',
  md: 'h-11 w-11 rounded-xl',
  lg: 'h-13 w-13 rounded-2xl',
} as const

const BOX_ICON_SIZE: Record<'sm' | 'md' | 'lg', IconSize> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
}

const BOX_VARIANT_CLASSES: Record<IconBoxVariant, string> = {
  soft: 'bg-surface-soft text-forest',
  forest: 'bg-forest text-lime',
  lime: 'bg-lime text-forest',
  onDark: 'bg-white/10 text-lime',
}

export function IconBox({
  icon,
  variant = 'soft',
  size = 'md',
  className = '',
}: IconBoxProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${BOX_SIZE_CLASSES[size]} ${BOX_VARIANT_CLASSES[variant]} ${className}`.trim()}
      aria-hidden="true"
    >
      <Icon icon={icon} size={BOX_ICON_SIZE[size]} />
    </span>
  )
}
