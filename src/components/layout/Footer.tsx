import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { memo, useCallback } from 'react'
import { BUSINESS_INFO } from '../../config/business'
import type { SectionId } from '../../types'
import { scrollToSection } from '../../utils/scroll'
import { Icon } from '../ui'
import { Container } from './Container'

const FOOTER_LINKS: readonly { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'why-us', label: 'Why Choose Us' },
  { id: 'process', label: 'Process' },
  { id: 'location', label: 'Location' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()

  const handleAnchorClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, sectionId: SectionId) => {
      event.preventDefault()
      scrollToSection(sectionId)
    },
    [],
  )

  return (
    <footer className="border-t border-white/10 bg-forest-deep py-8 text-white/80">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand Summary */}
          <div className="md:col-span-5">
            <a
              href="#home"
              onClick={(event) => handleAnchorClick(event, 'home')}
              className="focus-ring-on-dark inline-flex items-center gap-3 rounded-xl py-1 pr-2"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime text-forest">
                <Icon icon={ShieldCheck} size="md" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-base font-extrabold tracking-tight text-white">
                  ANSWER
                </span>
                <span className="mt-0.5 font-heading text-[11px] font-semibold tracking-[0.16em] text-lime uppercase">
                  PEST CONTROL SERVICE
                </span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Led by {BUSINESS_INFO.owner}. Local pest control consultation and
              service enquiries for homes and businesses in Liluah, Howrah.
            </p>
          </div>

          {/* Quick Section Links */}
          <nav
            aria-label="Footer navigation"
            className="md:col-span-3"
          >
            <p className="font-heading text-xs font-semibold tracking-[0.14em] text-lime uppercase">
              Sections
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => handleAnchorClick(event, link.id)}
                    className="focus-ring-on-dark rounded py-0.5 text-white/75 transition-colors hover:text-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Direct Contact Summary */}
          <div className="md:col-span-4">
            <p className="font-heading text-xs font-semibold tracking-[0.14em] text-lime uppercase">
              Contact Details
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Icon icon={MapPin} size="sm" className="mt-0.5 text-lime" />
                <span>
                  {BUSINESS_INFO.address} (Near {BUSINESS_INFO.landmark})
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon icon={Phone} size="sm" className="text-lime" />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="focus-ring-on-dark rounded font-medium text-white transition-colors hover:text-lime"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon icon={Mail} size="sm" className="text-lime" />
                <a
                  href={BUSINESS_INFO.emailHref}
                  className="focus-ring-on-dark break-all rounded font-medium text-white transition-colors hover:text-lime"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-5 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. Design &amp; Developed by{' '}
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring-on-dark rounded font-medium text-lime underline-offset-4 transition-colors hover:underline"
            >
              Digital Exposure Online Services
            </a>
          </p>
          <p>Liluah, Howrah, West Bengal - 711108</p>
        </div>
      </Container>
    </footer>
  )
})
