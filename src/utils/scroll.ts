import type { SectionId } from '../types'

const DEFAULT_HEADER_OFFSET = 80

export function scrollToSection(
  sectionId: SectionId,
  headerOffset: number = DEFAULT_HEADER_OFFSET,
): void {
  const element = document.getElementById(sectionId)
  if (!element) return

  const elementTop = element.getBoundingClientRect().top + window.scrollY
  const targetTop = Math.max(0, elementTop - headerOffset)

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  window.scrollTo({
    top: targetTop,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  })
}
