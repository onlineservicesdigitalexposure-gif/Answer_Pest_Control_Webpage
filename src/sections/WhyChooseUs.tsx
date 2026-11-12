import { m } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { memo } from 'react'
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
  fadeUp,
  staggerContainer,
  staggerItem,
  VIEWPORT_ONCE,
} from '../utils/animations'
import { WHY_CHOOSE_US_ITEMS } from '../data/whyChooseUs'

export const WhyChooseUs = memo(function WhyChooseUs() {
  return (
    <Section
      id="why-us"
      surface="white"
      ariaLabel="Why contact ANSWER PEST CONTROL SERVICE"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading & Local Direct Contact Callout */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <m.div variants={fadeUp}>
              <Eyebrow>WHY CHOOSE US</Eyebrow>
              <h2 className="mt-2.5">
                Why Contact {BUSINESS_INFO.name}?
              </h2>
              <Text size="lg" tone="muted" className="mt-4">
                Clear communication and accessible local support in Liluah,
                Howrah make it simple to discuss your pest control needs.
              </Text>
            </m.div>

            <m.div variants={fadeUp} className="mt-8">
              <Card variant="forest" padding="md">
                <Eyebrow onDark>Local Service Desk</Eyebrow>
                <p className="mt-2 font-heading text-lg font-semibold text-white">
                  Speak directly with {BUSINESS_INFO.owner}
                </p>
                <Text size="sm" tone="onDarkMuted" className="mt-2">
                  {BUSINESS_INFO.address} (Near {BUSINESS_INFO.landmark})
                </Text>

                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink
                    href={BUSINESS_INFO.phoneHref}
                    variant="secondary"
                    size="sm"
                    leadingIcon={Phone}
                  >
                    Call {BUSINESS_INFO.phone}
                  </ButtonLink>
                  <ButtonLink
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="outlineLight"
                    size="sm"
                    leadingIcon={MapPin}
                  >
                    Directions
                  </ButtonLink>
                </div>
              </Card>
            </m.div>
          </m.div>

          {/* Right Column: Four Customer-Focused Points */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={staggerContainer}
            className="grid gap-5 sm:grid-cols-2 lg:col-span-7"
          >
            {WHY_CHOOSE_US_ITEMS.map((item, index) => (
              <m.div key={item.id} variants={staggerItem} className="flex">
                <Card
                  variant="soft"
                  padding="md"
                  interactive
                  className="flex w-full flex-col"
                >
                  <div className="flex items-center justify-between gap-3">
                    <IconBox icon={item.icon} variant="forest" size="md" />
                    <span className="font-heading text-xs font-bold tracking-widest text-forest/45">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-forest">
                    {item.title}
                  </h3>
                  <Text size="sm" tone="muted" className="mt-2">
                    {item.description}
                  </Text>
                </Card>
              </m.div>
            ))}
          </m.div>
        </div>
      </Container>
    </Section>
  )
})
