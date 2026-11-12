import {
  AnimatePresence,
  m,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { Menu, Phone, ShieldCheck, X } from 'lucide-react'
import { memo, useCallback, useEffect, useState } from 'react'
import { BUSINESS_INFO } from '../../config/business'
import { NAV_ITEMS } from '../../config/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'
import type { SectionId } from '../../types'
import { FAST_TRANSITION, MOTION_EASE } from '../../utils/animations'
import { scrollToSection } from '../../utils/scroll'
import { ButtonLink, Icon } from '../ui'
import { Container } from './Container'

const NAV_SECTION_IDS: readonly SectionId[] = NAV_ITEMS.map((item) => item.id)

export const Navbar = memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection(NAV_SECTION_IDS, 'home')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 16)
  })

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, sectionId: SectionId) => {
      event.preventDefault()
      setIsMobileMenuOpen(false)
      scrollToSection(sectionId)
    },
    [],
  )

  return (
    <m.header
      initial={false}
      animate={{
        backgroundColor:
          isScrolled || isMobileMenuOpen
            ? 'rgba(255, 255, 255, 0.96)'
            : 'rgba(246, 248, 243, 0.82)',
        boxShadow:
          isScrolled || isMobileMenuOpen
            ? '0 8px 28px -16px rgba(18, 61, 48, 0.18)'
            : '0 0 0 0 rgba(18, 61, 48, 0)',
      }}
      transition={FAST_TRANSITION}
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-[border-color] duration-200 ${
        isScrolled || isMobileMenuOpen
          ? 'border-border/90'
          : 'border-transparent'
      }`}
    >
      <Container>
        <div className="flex h-18 items-center justify-between gap-4 sm:h-20">
          {/* Left: Brand Logo */}
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, 'home')}
            className="focus-ring group flex items-center gap-3 rounded-xl py-1 pr-2"
            aria-label={`${BUSINESS_INFO.name} — Back to top`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-lime transition-transform duration-200 group-hover:scale-[1.03]">
              <Icon icon={ShieldCheck} size="md" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-sm font-extrabold tracking-tight text-forest sm:text-base">
                ANSWER
              </span>
              <span className="mt-0.5 font-heading text-[10px] font-semibold tracking-[0.16em] text-muted uppercase sm:text-[11px]">
                PEST CONTROL
              </span>
            </span>
          </a>

          {/* Center: Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleNavClick(event, item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`focus-ring relative rounded-full px-4 py-2 font-heading text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'bg-forest/8 text-forest'
                      : 'text-charcoal/80 hover:bg-forest/5 hover:text-forest'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <m.span
                      initial={{ opacity: 0, scaleX: 0.4 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={FAST_TRANSITION}
                      aria-hidden="true"
                      className="absolute right-4 bottom-1.5 left-4 h-0.5 origin-center rounded-full bg-lime"
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right: Phone CTA + Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <div className="hidden items-center gap-3 sm:flex">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="focus-ring hidden items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-semibold text-forest/85 transition-colors hover:text-forest xl:inline-flex"
              >
                <Icon icon={Phone} size="xs" className="text-forest" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <ButtonLink
                href={BUSINESS_INFO.phoneHref}
                variant="primary"
                size="sm"
                leadingIcon={Phone}
                aria-label={`Call Now at ${BUSINESS_INFO.phone}`}
                className="h-10 px-5 text-xs sm:text-sm"
              >
                Call Now
              </ButtonLink>
            </div>

            <m.button
              type="button"
              whileTap={{ scale: 0.94 }}
              transition={FAST_TRANSITION}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                isMobileMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-forest transition-colors hover:bg-surface-soft lg:hidden"
            >
              <Icon icon={isMobileMenuOpen ? X : Menu} size="md" />
            </m.button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <m.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: MOTION_EASE }}
            className="absolute inset-x-0 top-full overflow-hidden border-t border-border/80 bg-white shadow-[0_18px_36px_-18px_rgba(18,61,48,0.25)] lg:hidden"
          >
            <Container className="py-4">
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-1"
              >
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(event) => handleNavClick(event, item.id)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`focus-ring flex items-center justify-between rounded-xl px-4 py-3 font-heading text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-surface-soft text-forest'
                          : 'text-charcoal hover:bg-offwhite hover:text-forest'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 rounded-full bg-lime"
                        />
                      )}
                    </a>
                  )
                })}
              </nav>

              <div className="mt-4 border-t border-border/80 pt-4">
                <ButtonLink
                  href={BUSINESS_INFO.phoneHref}
                  variant="primary"
                  size="md"
                  leadingIcon={Phone}
                  fullWidth
                >
                  Call Now · {BUSINESS_INFO.phone}
                </ButtonLink>
              </div>
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  )
})
