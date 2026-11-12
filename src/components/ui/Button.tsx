import { m, type HTMLMotionProps } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { BUTTON_HOVER_TAP } from '../../utils/animations'
import { Icon } from './Icon'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'outlineLight'

export type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  leadingIcon?: LucideIcon
  trailingIcon?: LucideIcon
  fullWidth?: boolean
  className?: string
}

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-full transition-colors duration-200 ease-out disabled:pointer-events-none disabled:opacity-55 whitespace-nowrap select-none'

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-forest text-white hover:bg-forest-hover active:bg-forest-deep focus-ring',
  secondary:
    'bg-lime text-forest hover:bg-lime-hover active:bg-lime-hover focus-ring',
  outline:
    'border border-forest/20 bg-white text-forest hover:border-forest/40 hover:bg-surface-soft/70 focus-ring',
  ghost:
    'bg-transparent text-forest hover:bg-surface-soft focus-ring',
  outlineLight:
    'border border-white/25 bg-transparent text-white hover:border-white/45 hover:bg-white/10 focus-ring-on-dark',
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-base',
}

function getButtonClasses({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
}: Pick<
  BaseButtonProps,
  'variant' | 'size' | 'fullWidth' | 'className'
>): string {
  return [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

function ButtonContent({
  children,
  leadingIcon,
  trailingIcon,
  size = 'md',
}: Pick<
  BaseButtonProps,
  'children' | 'leadingIcon' | 'trailingIcon' | 'size'
>) {
  const iconSize = size === 'sm' ? 'xs' : 'sm'

  return (
    <>
      {leadingIcon && <Icon icon={leadingIcon} size={iconSize} />}
      <span>{children}</span>
      {trailingIcon && <Icon icon={trailingIcon} size={iconSize} />}
    </>
  )
}

export interface ButtonProps
  extends BaseButtonProps,
    Omit<HTMLMotionProps<'button'>, 'children'> {}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  className = '',
  type = 'button',
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <m.button
      type={type}
      disabled={disabled}
      whileHover={disabled ? undefined : BUTTON_HOVER_TAP.whileHover}
      whileTap={disabled ? undefined : BUTTON_HOVER_TAP.whileTap}
      transition={BUTTON_HOVER_TAP.transition}
      className={getButtonClasses({ variant, size, fullWidth, className })}
      {...rest}
    >
      <ButtonContent
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        size={size}
      >
        {children}
      </ButtonContent>
    </m.button>
  )
}

export interface ButtonLinkProps
  extends BaseButtonProps,
    Omit<HTMLMotionProps<'a'>, 'children'> {}

export function ButtonLink({
  children,
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  className = '',
  ...rest
}: ButtonLinkProps) {
  return (
    <m.a
      whileHover={BUTTON_HOVER_TAP.whileHover}
      whileTap={BUTTON_HOVER_TAP.whileTap}
      transition={BUTTON_HOVER_TAP.transition}
      className={getButtonClasses({ variant, size, fullWidth, className })}
      {...rest}
    >
      <ButtonContent
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        size={size}
      >
        {children}
      </ButtonContent>
    </m.a>
  )
}
