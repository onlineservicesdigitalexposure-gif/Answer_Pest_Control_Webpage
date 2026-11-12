import { m } from 'framer-motion'
import { ArrowDownRight, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { memo, useCallback } from 'react'
import { Container } from '../components/layout/Container'
import { Badge, ButtonLink, Eyebrow, Icon, Text } from '../components/ui'
import { BUSINESS_INFO } from '../config/business'
import { fadeUp, scaleIn, staggerContainer } from '../utils/animations'
import { scrollToSection } from '../utils/scroll'

export const Hero = memo(function Hero() {
  const handleExploreServices = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      const servicesEl = document.getElementById('services')
      if (servicesEl) {
        event.preventDefault()
        scrollToSection('services')
      }
    },
    [],
  )

  return (
    <section
      id="home"
      aria-label="Hero — ANSWER PEST CONTROL SERVICE"
      className="relative overflow-hidden bg-offwhite pt-6 pb-4 sm:pt-8 sm:pb-5"
    >
      {/* Subtle Decorative Background Shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-lime/12 blur-3xl lg:h-[26rem] lg:w-[26rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-forest/5 blur-3xl"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-12 xl:gap-x-16">
          {/* 1. Eyebrow & Headline (Top-left on desktop, first on mobile) */}
          <m.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end"
          >
            <m.div variants={fadeUp}>
              <Badge icon={ShieldCheck} variant="soft">
                YOUR LOCAL PEST CONTROL SERVICE
              </Badge>
            </m.div>

            <m.h1
              variants={fadeUp}
              className="mt-5 text-4xl font-bold tracking-[-0.025em] text-forest sm:mt-6 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]"
            >
              Protect Your Home.{' '}
              <span className="relative inline-block text-forest">
                Keep Pests Away.
                <span
                  aria-hidden="true"
                  className="absolute right-0 -bottom-1 left-0 -z-10 h-2 rounded-full bg-lime/60"
                />
              </span>
            </m.h1>
          </m.div>

          {/* 2. Hero Image (Right column on desktop, placed under H1 on mobile) */}
          <m.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="mt-7 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:mt-0"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Forest Backdrop Frame */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -bottom-3 h-full w-full rounded-[1.75rem] bg-forest sm:-right-4 sm:-bottom-4"
              />
              {/* Subtle Lime Accent Corner */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 h-24 w-24 rounded-3xl border-2 border-lime/80 bg-lime/20 sm:-top-4 sm:-left-4"
              />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-forest/15 bg-white shadow-[0_20px_50px_-24px_rgba(18,61,48,0.28)]">
                <div className="aspect-[4/4.3] w-full overflow-hidden bg-surface-soft sm:aspect-[4/3.9]">
                  <img
                    src={`${import.meta.env.BASE_URL}images/pest-control-technician-home-inspection.webp`}
                    alt="Indian pest control technician inspecting a sunlit residential doorway for home protection in Liluah, Howrah"
                    width={1000}
                    height={1125}
                    className="h-full w-full object-cover object-[50%_28%]"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>

                {/* Grounded Forest Footer Strip inside Frame */}
                <div className="flex items-center justify-between gap-4 bg-forest px-5 py-4 text-white sm:px-6">
                  <div>
                    <Eyebrow onDark>Direct Service Consultation</Eyebrow>
                    <p className="mt-1 font-heading text-sm font-semibold text-white sm:text-base">
                      {BUSINESS_INFO.name}
                    </p>
                  </div>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open service location on Google Maps"
                    className="focus-ring-on-dark inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime text-forest transition-colors hover:bg-lime-hover"
                  >
                    <Icon icon={MapPin} size="sm" />
                  </a>
                </div>
              </div>
            </div>
          </m.div>

          {/* 3. Supporting Copy, CTAs & Local Context (Bottom-left on desktop, below image on mobile) */}
          <m.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mt-7 lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:mt-5 lg:self-start"
          >
            <m.div variants={fadeUp}>
              <Text size="lg" tone="muted" className="max-w-xl">
                Looking for reliable pest control services in Liluah, Howrah?{' '}
                <strong className="font-semibold text-forest">
                  {BUSINESS_INFO.name}
                </strong>{' '}
                is here to help you address common pest problems with convenient
                communication and service consultation.
              </Text>
            </m.div>

            <m.div
              variants={fadeUp}
              className="mt-7 flex flex-col gap-3.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <ButtonLink
                href={BUSINESS_INFO.phoneHref}
                variant="primary"
                size="lg"
                leadingIcon={Phone}
                aria-label={`Call Now at ${BUSINESS_INFO.phone}`}
              >
                Call Now
              </ButtonLink>

              <ButtonLink
                href="#services"
                onClick={handleExploreServices}
                variant="outline"
                size="lg"
                trailingIcon={ArrowDownRight}
              >
                Explore Our Services
              </ButtonLink>
            </m.div>

            {/* Factual Local Context Strip */}
            <m.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-muted sm:mt-10"
            >
              <div className="flex items-center gap-2">
                <Icon icon={MapPin} size="sm" className="text-forest" />
                <span>
                  Pest control service in Liluah &amp; Howrah · Near{' '}
                  {BUSINESS_INFO.landmark}
                </span>
              </div>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="focus-ring inline-flex items-center gap-2 rounded-md font-medium text-forest transition-colors hover:text-forest-hover"
              >
                <Icon icon={Phone} size="sm" className="text-forest" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </m.div>
          </m.div>
        </div>
      </Container>
    </section>
  )
})
