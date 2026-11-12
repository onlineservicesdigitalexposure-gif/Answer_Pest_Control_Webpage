import { m } from 'framer-motion'
import { ArrowRight, Building2, MapPin, Phone, UserCheck } from 'lucide-react'
import { memo, useCallback } from 'react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import {
  ButtonLink,
  Card,
  Eyebrow,
  IconBox,
  Text,
} from '../components/ui'
import { BUSINESS_INFO } from '../config/business'
import {
  fadeLeft,
  fadeUp,
  staggerContainer,
  VIEWPORT_ONCE,
} from '../utils/animations'
import { scrollToSection } from '../utils/scroll'

export const About = memo(function About() {
  const handleContactClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      const contactEl = document.getElementById('contact')
      if (contactEl) {
        event.preventDefault()
        scrollToSection('contact')
      }
    },
    [],
  )

  return (
    <Section
      id="about"
      surface="white"
      ariaLabel="About ANSWER PEST CONTROL SERVICE"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Imagery Composition */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={fadeLeft}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-full w-full rounded-[1.5rem] bg-surface-soft sm:-bottom-4 sm:-left-4"
              />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-offwhite shadow-[var(--shadow-card)]">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/pest-management-property-consultation.webp`}
                    alt="Pest management inspection and customer consultation at a residential doorway in Liluah, Howrah"
                    width={960}
                    height={720}
                    className="h-full w-full object-cover object-[50%_20%]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </m.div>

          {/* Right Column: Business Story & Key Details */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={staggerContainer}
            className="lg:col-span-6"
          >
            <m.div variants={fadeUp}>
              <Eyebrow>ABOUT OUR BUSINESS</Eyebrow>
              <h2 className="mt-2.5">
                Your Local Partner for a Cleaner, Pest-Free Environment
              </h2>
            </m.div>

            <m.div variants={fadeUp}>
              <Text size="lg" tone="muted" className="mt-5">
                <strong className="font-semibold text-forest">
                  {BUSINESS_INFO.name}
                </strong>
                , led by{' '}
                <strong className="font-semibold text-forest">
                  {BUSINESS_INFO.owner}
                </strong>
                , is based in Liluah, Howrah. Whether you are looking for a
                pest control service near Liluah or across Howrah, we aim to
                provide convenient access and help customers address common
                pest-related concerns.
              </Text>
            </m.div>

            {/* Structured Factual Business Details */}
            <m.div
              variants={fadeUp}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              <Card variant="soft" padding="sm" className="flex items-start gap-3.5">
                <IconBox icon={Building2} variant="forest" size="sm" />
                <div className="min-w-0">
                  <p className="font-heading text-xs font-semibold tracking-wider text-muted uppercase">
                    Business Name
                  </p>
                  <p className="mt-1 font-heading text-sm font-semibold text-forest">
                    {BUSINESS_INFO.name}
                  </p>
                </div>
              </Card>

              <Card variant="soft" padding="sm" className="flex items-start gap-3.5">
                <IconBox icon={UserCheck} variant="forest" size="sm" />
                <div className="min-w-0">
                  <p className="font-heading text-xs font-semibold tracking-wider text-muted uppercase">
                    Led By
                  </p>
                  <p className="mt-1 font-heading text-sm font-semibold text-forest">
                    {BUSINESS_INFO.owner}
                  </p>
                </div>
              </Card>

              <Card
                variant="soft"
                padding="sm"
                className="flex items-start gap-3.5 sm:col-span-2"
              >
                <IconBox icon={MapPin} variant="forest" size="sm" />
                <div className="min-w-0">
                  <p className="font-heading text-xs font-semibold tracking-wider text-muted uppercase">
                    Business Location
                  </p>
                  <p className="mt-1 text-sm leading-relaxed font-medium text-charcoal">
                    {BUSINESS_INFO.address} (Landmark: {BUSINESS_INFO.landmark})
                  </p>
                </div>
              </Card>
            </m.div>

            <m.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <ButtonLink
                href="#contact"
                onClick={handleContactClick}
                variant="primary"
                size="md"
                trailingIcon={ArrowRight}
              >
                Contact Us
              </ButtonLink>
              <ButtonLink
                href={BUSINESS_INFO.phoneHref}
                variant="outline"
                size="md"
                leadingIcon={Phone}
              >
                {BUSINESS_INFO.phone}
              </ButtonLink>
            </m.div>
          </m.div>
        </div>
      </Container>
    </Section>
  )
})
