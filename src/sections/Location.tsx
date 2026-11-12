import { m } from 'framer-motion'
import { ExternalLink, Landmark, MapPin, Navigation } from 'lucide-react'
import { memo } from 'react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import {
  ButtonLink,
  Card,
  Eyebrow,
  Icon,
  IconBox,
  Text,
} from '../components/ui'
import { BUSINESS_INFO } from '../config/business'
import {
  fadeRight,
  fadeUp,
  staggerContainer,
  VIEWPORT_ONCE,
} from '../utils/animations'

export const Location = memo(function Location() {
  return (
    <Section
      id="location"
      surface="white"
      ariaLabel="Location of ANSWER PEST CONTROL SERVICE"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Address & Landmark Card */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={staggerContainer}
            className="lg:col-span-6"
          >
            <m.div variants={fadeUp}>
              <Eyebrow>OUR LOCATION</Eyebrow>
              <h2 className="mt-2.5">
                Find {BUSINESS_INFO.name}
              </h2>
              <Text size="lg" tone="muted" className="mt-4">
                Conveniently located in Liluah, Howrah for local residents and
                businesses seeking direct pest control consultation.
              </Text>
            </m.div>

            <m.div variants={fadeUp} className="mt-8">
              <Card variant="soft" padding="lg" className="space-y-6">
                <div className="flex items-start gap-4">
                  <IconBox icon={MapPin} variant="forest" size="md" />
                  <div>
                    <p className="font-heading text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                      Business Address
                    </p>
                    <p className="mt-1.5 font-heading text-base font-semibold leading-relaxed text-forest sm:text-lg">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-border/80 pt-5">
                  <IconBox icon={Landmark} variant="lime" size="md" />
                  <div>
                    <p className="font-heading text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                      Nearby Landmark
                    </p>
                    <p className="mt-1 font-heading text-base font-semibold text-forest">
                      {BUSINESS_INFO.landmark}
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <ButtonLink
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                    size="md"
                    leadingIcon={Navigation}
                    trailingIcon={ExternalLink}
                  >
                    Open Google Maps
                  </ButtonLink>
                </div>
              </Card>
            </m.div>
          </m.div>

          {/* Right Column: Clean Visual Map Direction Card (No Fabricated Coordinates) */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            variants={fadeRight}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-forest/15 bg-forest p-7 text-white shadow-[0_20px_50px_-24px_rgba(18,61,48,0.28)] sm:p-9">
              {/* Subtle Architectural Grid Pattern */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(163,214,92,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(163,214,92,0.35) 1px, transparent 1px)',
                  backgroundSize: '36px 36px',
                }}
              />

              <div className="relative flex flex-col justify-between gap-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-heading text-xs font-semibold tracking-wide text-lime uppercase">
                    <Icon icon={MapPin} size="xs" />
                    <span>Liluah, Howrah · 711108</span>
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-forest">
                    <Icon icon={Navigation} size="md" />
                  </span>
                </div>

                {/* Stylized Location Pin Focal Block */}
                <div className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime text-forest">
                      <Icon icon={MapPin} size="md" />
                    </span>
                    <div>
                      <p className="font-heading text-base font-bold text-white">
                        {BUSINESS_INFO.name}
                      </p>
                      <p className="text-xs text-lime">
                        Near {BUSINESS_INFO.landmark}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    {BUSINESS_INFO.address}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-4">
                    <span className="text-xs text-white/70">
                      Get live directions via Google Maps
                    </span>
                    <ButtonLink
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="secondary"
                      size="sm"
                      trailingIcon={ExternalLink}
                    >
                      Open Google Maps
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </Container>
    </Section>
  )
})
