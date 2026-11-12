import { m } from 'framer-motion'
import { memo } from 'react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Card, Icon, SectionHeader, Text } from '../components/ui'
import {
  fadeUp,
  staggerItem,
  staggerSequential,
  VIEWPORT_ONCE,
} from '../utils/animations'
import { PROCESS_STEPS } from '../data/process'

export const Process = memo(function Process() {
  return (
    <Section
      id="process"
      surface="offwhite"
      ariaLabel="How to get started with ANSWER PEST CONTROL SERVICE"
    >
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={fadeUp}
        >
          <SectionHeader
            eyebrow="WORKING PROCESS"
            title="How to Get Started"
            description="A straightforward four-step process to connect with us and discuss your pest control requirements."
            align="center"
          />
        </m.div>

        <div className="relative mt-12 lg:mt-16">
          {/* Desktop Horizontal Connecting Line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-7 right-[12%] left-[12%] hidden h-px bg-border lg:block"
          />

          {/* Mobile Vertical Timeline Rail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-6 bottom-6 left-6 w-px bg-border lg:hidden"
          />

          <m.ol
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={staggerSequential}
            className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-6"
          >
            {PROCESS_STEPS.map((step) => (
              <m.li
                key={step.number}
                variants={staggerItem}
                className="relative flex items-start gap-5 lg:flex-col lg:items-center lg:gap-5 lg:text-center"
              >
                {/* Step Node Marker */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-forest/15 bg-white text-forest shadow-xs lg:h-14 lg:w-14">
                  <Icon icon={step.icon} size="md" />
                  <span className="absolute -top-1.5 -right-1.5 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-lime px-1.5 font-heading text-[11px] font-bold text-forest">
                    {step.number}
                  </span>
                </div>

                {/* Step Card */}
                <Card
                  variant="elevated"
                  padding="md"
                  interactive
                  className="w-full flex-1"
                >
                  <p className="font-heading text-xs font-semibold tracking-[0.14em] text-forest/65 uppercase">
                    Step {step.number}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-forest">
                    {step.title}
                  </h3>
                  <Text size="sm" tone="muted" className="mt-2.5">
                    {step.description}
                  </Text>
                </Card>
              </m.li>
            ))}
          </m.ol>
        </div>
      </Container>
    </Section>
  )
})
