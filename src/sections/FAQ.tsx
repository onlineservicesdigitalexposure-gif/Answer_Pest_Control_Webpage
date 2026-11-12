import { AnimatePresence, m } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { memo, useCallback, useRef, useState } from 'react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Icon, SectionHeader, Text } from '../components/ui'
import {
  fadeUp,
  MOTION_EASE,
  staggerContainer,
  staggerItem,
  VIEWPORT_ONCE,
} from '../utils/animations'
import { FAQ_ITEMS } from '../data/faq'

export const FAQ = memo(function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])

  const toggleItem = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }, [])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      const lastIndex = FAQ_ITEMS.length - 1
      let targetIndex: number | null = null

      if (event.key === 'ArrowDown') {
        targetIndex = index === lastIndex ? 0 : index + 1
      } else if (event.key === 'ArrowUp') {
        targetIndex = index === 0 ? lastIndex : index - 1
      } else if (event.key === 'Home') {
        targetIndex = 0
      } else if (event.key === 'End') {
        targetIndex = lastIndex
      }

      if (targetIndex !== null) {
        event.preventDefault()
        triggerRefs.current[targetIndex]?.focus()
      }
    },
    [],
  )

  return (
    <Section
      id="faq"
      surface="offwhite"
      ariaLabel="Frequently Asked Questions"
    >
      <Container size="narrow">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={fadeUp}
        >
          <SectionHeader
            eyebrow="COMMON QUESTIONS"
            title="Frequently Asked Questions"
            description="Straightforward answers about reaching ANSWER PEST CONTROL SERVICE, our location in Liluah, Howrah, and how to begin a consultation."
            align="center"
          />
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer}
          className="mt-10 space-y-3.5 sm:mt-12"
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id
            const buttonId = `faq-trigger-${item.id}`
            const panelId = `faq-panel-${item.id}`

            return (
              <m.div
                key={item.id}
                variants={staggerItem}
                className={`overflow-hidden rounded-[var(--radius-card)] border transition-colors duration-200 ${
                  isOpen
                    ? 'border-forest/25 bg-white shadow-[var(--shadow-card)]'
                    : 'border-border bg-white/85 hover:border-forest/20 hover:bg-white'
                }`}
              >
                <h3>
                  <button
                    ref={(el) => {
                      triggerRefs.current[index] = el
                    }}
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="flex items-center gap-3.5">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
                          isOpen
                            ? 'bg-forest text-lime'
                            : 'bg-surface-soft text-forest'
                        }`}
                        aria-hidden="true"
                      >
                        <Icon icon={HelpCircle} size="sm" />
                      </span>
                      <span className="font-heading text-base font-semibold text-forest sm:text-lg">
                        {item.question}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                        isOpen
                          ? 'rotate-180 bg-surface-soft text-forest'
                          : 'text-muted'
                      }`}
                    >
                      <Icon icon={ChevronDown} size="sm" />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: MOTION_EASE }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border/70 px-5 pt-4 pb-5 sm:px-6 sm:pl-[4.375rem]">
                        <Text size="sm" tone="muted" className="sm:text-base">
                          {item.answer}
                        </Text>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            )
          })}
        </m.div>
      </Container>
    </Section>
  )
})
