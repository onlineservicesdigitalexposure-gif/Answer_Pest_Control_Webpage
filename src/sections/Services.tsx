import { m } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { memo, useCallback } from 'react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import {
  Card,
  Icon,
  IconBox,
  SectionHeader,
  Text,
} from '../components/ui'
import { SERVICES } from '../data/services'
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  VIEWPORT_ONCE,
} from '../utils/animations'
import { scrollToSection } from '../utils/scroll'

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void
}

export const Services = memo(function Services({
  onSelectService,
}: ServicesProps) {
  const handleServiceContact = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, serviceTitle: string) => {
      onSelectService?.(serviceTitle)
      const contactEl = document.getElementById('contact')
      if (contactEl) {
        event.preventDefault()
        scrollToSection('contact')
      }
    },
    [onSelectService],
  )

  return (
    <Section
      id="services"
      surface="offwhite"
      ariaLabel="Pest control services"
    >
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={fadeUp}
        >
          <SectionHeader
            eyebrow="WHAT WE DO"
            title="Pest Control Solutions for Common Pest Problems"
            description="Reach out to discuss residential or commercial pest concerns across Liluah and Howrah."
            align="center"
          />
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-7"
        >
          {SERVICES.map((service) => (
            <m.article
              key={service.id}
              variants={staggerItem}
              className="flex"
            >
              <Card
                variant="elevated"
                padding="none"
                interactive
                className="group flex w-full flex-col overflow-hidden"
              >
                {/* Service Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-soft">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <IconBox icon={service.icon} variant="soft" size="sm" />
                    <h3 className="text-lg font-semibold text-forest sm:text-xl">
                      {service.title}
                    </h3>
                  </div>

                  <Text size="sm" tone="muted" className="mt-3.5 flex-1">
                    {service.description}
                  </Text>

                  <div className="mt-6 border-t border-border/80 pt-4">
                    <a
                      href="#contact"
                      onClick={(event) =>
                        handleServiceContact(event, service.title)
                      }
                      className="focus-ring inline-flex items-center gap-2 rounded-lg font-heading text-sm font-semibold text-forest transition-colors hover:text-forest-hover"
                    >
                      <span>Contact for Service</span>
                      <Icon
                        icon={ArrowRight}
                        size="sm"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </Card>
            </m.article>
          ))}
        </m.div>
      </Container>
    </Section>
  )
})
