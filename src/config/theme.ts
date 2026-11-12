export const BRAND_COLORS = {
  primary: '#123D30',
  secondary: '#A3D65C',
  background: '#F6F8F3',
  white: '#FFFFFF',
  darkText: '#252D2A',
  mutedText: '#68736C',
  border: '#DCE4D7',
  softSurface: '#ECF1E5',
} as const

export const TYPOGRAPHY_SCALE = {
  display: 'font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.025em]',
  h1: 'font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-[-0.02em]',
  h2: 'font-heading text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-[1.18] tracking-[-0.02em]',
  h3: 'font-heading text-xl sm:text-2xl font-semibold leading-[1.28] tracking-[-0.015em]',
  h4: 'font-heading text-lg font-semibold leading-[1.35] tracking-[-0.01em]',
  lead: 'font-sans text-base sm:text-lg leading-relaxed',
  body: 'font-sans text-base leading-relaxed',
  small: 'font-sans text-sm leading-relaxed',
  eyebrow: 'font-heading text-xs font-semibold uppercase tracking-[0.14em]',
} as const

export const RADII = {
  control: 'rounded-xl',
  card: 'rounded-[1.25rem]',
  cardLg: 'rounded-3xl',
  pill: 'rounded-full',
} as const
