import { m } from 'framer-motion'
import { Phone } from 'lucide-react'
import { memo } from 'react'
import { BUSINESS_INFO } from '../../config/business'
import { FAST_TRANSITION } from '../../utils/animations'
import { Icon } from '../ui'

function WhatsAppLogo() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6 fill-current"
      aria-hidden="true"
    >
      <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.588 4.46 1.706 6.4L3.09 29.04l6.81-1.786a12.74 12.74 0 0 0 6.104 1.55h.005c7.058 0 12.796-5.74 12.796-12.8 0-3.418-1.33-6.632-3.748-9.05A12.71 12.71 0 0 0 16.004 3.2Zm0 23.436h-.004a10.6 10.6 0 0 1-5.404-1.48l-.388-.23-4.04 1.06 1.078-3.94-.252-.404a10.58 10.58 0 0 1-1.622-5.64c0-5.864 4.77-10.634 10.636-10.634 2.84 0 5.51 1.106 7.516 3.116a10.56 10.56 0 0 1 3.114 7.52c0 5.864-4.772 10.632-10.634 10.632Zm5.834-7.964c-.32-.16-1.894-.934-2.186-1.04-.294-.108-.508-.16-.72.16-.214.32-.828 1.04-1.014 1.254-.186.214-.374.24-.694.08-.32-.16-1.352-.498-2.574-1.588-.952-.85-1.594-1.898-1.78-2.218-.186-.32-.02-.494.14-.652.144-.144.32-.374.48-.56.16-.186.214-.32.32-.534.106-.214.054-.4-.026-.56-.08-.16-.72-1.734-.988-2.374-.26-.624-.524-.54-.72-.55l-.614-.01c-.214 0-.56.08-.854.4-.294.32-1.12 1.094-1.12 2.668s1.148 3.094 1.308 3.308c.16.214 2.258 3.448 5.47 4.834.764.33 1.36.528 1.824.676.766.244 1.464.21 2.016.128.614-.092 1.894-.774 2.16-1.522.266-.748.266-1.388.186-1.522-.08-.134-.294-.214-.614-.374Z" />
    </svg>
  )
}

export const FloatingContactButtons = memo(function FloatingContactButtons() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed right-4 bottom-5 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6"
    >
      {/* WhatsApp Floating Button */}
      <m.a
        href={BUSINESS_INFO.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with ANSWER PEST CONTROL SERVICE"
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={FAST_TRANSITION}
        className="focus-ring group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-6px_rgba(37,211,102,0.55)] transition-colors hover:bg-[#1EBE5D] sm:h-13 sm:w-13"
      >
        <WhatsAppLogo />
        <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-forest px-3 py-1.5 font-heading text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 md:block">
          WhatsApp Us
        </span>
      </m.a>

      {/* Call Floating Button */}
      <m.a
        href={BUSINESS_INFO.phoneHref}
        aria-label={`Call ${BUSINESS_INFO.name} at ${BUSINESS_INFO.phone}`}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={FAST_TRANSITION}
        className="focus-ring-on-dark group relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-lime/80 bg-forest text-lime shadow-[0_10px_25px_-6px_rgba(18,61,48,0.5)] transition-colors hover:bg-forest-hover sm:h-13 sm:w-13"
      >
        <Icon icon={Phone} size="md" />
        <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-forest px-3 py-1.5 font-heading text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 md:block">
          Call {BUSINESS_INFO.phone}
        </span>
      </m.a>
    </aside>
  )
})
