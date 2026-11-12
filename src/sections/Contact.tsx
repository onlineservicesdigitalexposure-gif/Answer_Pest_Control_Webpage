import { m } from 'framer-motion'
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  UserCheck,
} from 'lucide-react'
import { memo, useState, type ReactNode } from 'react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import {
  Badge,
  Button,
  ButtonLink,
  Card,
  Eyebrow,
  Icon,
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
import { SERVICES } from '../data/services'

interface EnquiryFormValues {
  fullName: string
  phone: string
  pestProblem: string
  message: string
}

type EnquiryFormErrors = Partial<Record<keyof EnquiryFormValues, string>>

const INITIAL_FORM_VALUES: EnquiryFormValues = {
  fullName: '',
  phone: '',
  pestProblem: '',
  message: '',
}

const PEST_PROBLEM_OPTIONS = [
  ...SERVICES.map((service) => service.title),
  'Other Pest Inquiry',
]

function validateForm(values: EnquiryFormValues): EnquiryFormErrors {
  const errors: EnquiryFormErrors = {}

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.'
  }

  const trimmedPhone = values.phone.trim()
  const digitsOnly = trimmedPhone.replace(/\D/g, '')
  if (
    !/^[+\d\s()-]+$/.test(trimmedPhone) ||
    digitsOnly.length < 10 ||
    digitsOnly.length > 15
  ) {
    errors.phone = 'Please enter a valid phone number (10 to 15 digits).'
  }

  if (!values.pestProblem.trim()) {
    errors.pestProblem = 'Please select the pest problem you want to discuss.'
  }

  if (values.message.trim().length < 10) {
    errors.message =
      'Please share a short message (at least 10 characters) about your concern.'
  }

  return errors
}

function buildWhatsAppUrl(values: EnquiryFormValues): string {
  const lines = [
    `Hello ${BUSINESS_INFO.name},`,
    '',
    `Name: ${values.fullName.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Pest Problem: ${values.pestProblem.trim()}`,
    `Message: ${values.message.trim()}`,
  ]
  return `${BUSINESS_INFO.whatsappHref}?text=${encodeURIComponent(lines.join('\n'))}`
}

function getControlClasses(hasError: boolean): string {
  return `focus-ring mt-1.5 w-full rounded-[var(--radius-control)] border bg-offwhite px-4 py-3 text-sm text-charcoal placeholder:text-muted/70 ${
    hasError ? 'border-red-600' : 'border-border'
  }`
}

interface FormFieldProps {
  id: string
  label: string
  error?: string
  children: ReactNode
}

function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-heading text-sm font-semibold text-forest"
      >
        {label} <span className="text-red-700">*</span>
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700"
        >
          <Icon icon={AlertCircle} size="xs" />
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}

const CONTACT_CHANNELS = [
  {
    title: 'Call Now',
    description: 'Speak directly on the phone for immediate assistance.',
    actionLabel: BUSINESS_INFO.phone,
    href: BUSINESS_INFO.phoneHref,
    icon: Phone,
    external: false,
  },
  {
    title: 'WhatsApp Enquiry',
    description: 'Send a quick message and share details over WhatsApp.',
    actionLabel: 'Chat on WhatsApp',
    href: BUSINESS_INFO.whatsappHref,
    icon: MessageCircle,
    external: true,
  },
  {
    title: 'Send Email',
    description: 'Write to us anytime with your pest control inquiry.',
    actionLabel: BUSINESS_INFO.email,
    href: BUSINESS_INFO.emailHref,
    icon: Mail,
    external: false,
  },
] as const

interface ContactProps {
  selectedPestProblem?: string
  onPestProblemChange?: (value: string) => void
}

export const Contact = memo(function Contact({
  selectedPestProblem,
  onPestProblemChange,
}: ContactProps = {}) {
  const [formValues, setFormValues] =
    useState<EnquiryFormValues>(INITIAL_FORM_VALUES)
  const [errors, setErrors] = useState<EnquiryFormErrors>({})
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState<
    string | null
  >(null)

  const effectivePestProblem = selectedPestProblem ?? formValues.pestProblem

  const handleFieldChange = (
    field: keyof EnquiryFormValues,
    value: string,
  ) => {
    if (field === 'pestProblem' && onPestProblemChange) {
      onPestProblemChange(value)
    }
    setFormValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
    if (generatedWhatsAppUrl) {
      setGeneratedWhatsAppUrl(null)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const currentValues: EnquiryFormValues = {
      ...formValues,
      pestProblem: effectivePestProblem,
    }

    const validationErrors = validateForm(currentValues)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setGeneratedWhatsAppUrl(null)
      return
    }

    const whatsappUrl = buildWhatsAppUrl(currentValues)
    setErrors({})
    setGeneratedWhatsAppUrl(whatsappUrl)
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handleReset = () => {
    onPestProblemChange?.('')
    setFormValues(INITIAL_FORM_VALUES)
    setErrors({})
    setGeneratedWhatsAppUrl(null)
  }

  return (
    <Section
      id="contact"
      surface="forest"
      ariaLabel="Contact ANSWER PEST CONTROL SERVICE"
    >
      <Container>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Section Header */}
          <m.div variants={fadeUp} className="max-w-2xl">
            <Badge icon={MessageCircle} variant="onDark">
              CONTACT US
            </Badge>
            <h2 className="mt-4 text-white">
              Let&apos;s Discuss Your Pest Control Needs
            </h2>
            <Text size="lg" tone="onDarkMuted" className="mt-4">
              Reach out directly by phone, WhatsApp, or email to speak with{' '}
              <strong className="font-semibold text-white">
                {BUSINESS_INFO.owner}
              </strong>{' '}
              about your pest control inquiry in Liluah, Howrah.
            </Text>
          </m.div>

          {/* Three Prominent Contact Action Cards */}
          <m.div
            variants={staggerContainer}
            className="grid gap-5 md:grid-cols-3"
          >
            {CONTACT_CHANNELS.map((channel) => (
              <m.a
                key={channel.title}
                variants={staggerItem}
                href={channel.href}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noreferrer' : undefined}
                className="focus-ring-on-dark group block rounded-[var(--radius-card)] border border-white/15 bg-white/8 p-6 transition-colors duration-200 hover:border-lime/55 hover:bg-white/12"
              >
                <div className="flex items-center justify-between gap-3">
                  <IconBox icon={channel.icon} variant="lime" size="md" />
                  <Icon
                    icon={ExternalLink}
                    size="sm"
                    className="text-white/50 transition-colors group-hover:text-lime"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {channel.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/75">
                  {channel.description}
                </p>
                <p className="mt-4 break-all font-heading text-sm font-bold text-lime sm:text-base">
                  {channel.actionLabel}
                </p>
              </m.a>
            ))}
          </m.div>

          {/* Business Details + WhatsApp Enquiry Form */}
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left: Complete Business Information */}
            <m.div variants={fadeUp} className="space-y-6 lg:col-span-5">
              <div className="rounded-[var(--radius-card)] border border-white/15 bg-forest-deep/70 p-6 sm:p-7">
                <Eyebrow onDark>Business Details</Eyebrow>
                <dl className="mt-5 space-y-5 text-sm">
                  <div className="flex items-start gap-3.5">
                    <IconBox icon={Building2} variant="onDark" size="sm" />
                    <div>
                      <dt className="text-xs font-medium tracking-wider text-white/60 uppercase">
                        Business
                      </dt>
                      <dd className="mt-0.5 font-heading font-semibold text-white">
                        {BUSINESS_INFO.name}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <IconBox icon={UserCheck} variant="onDark" size="sm" />
                    <div>
                      <dt className="text-xs font-medium tracking-wider text-white/60 uppercase">
                        Owner
                      </dt>
                      <dd className="mt-0.5 font-heading font-semibold text-white">
                        {BUSINESS_INFO.owner}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <IconBox icon={Phone} variant="onDark" size="sm" />
                    <div>
                      <dt className="text-xs font-medium tracking-wider text-white/60 uppercase">
                        Phone
                      </dt>
                      <dd className="mt-0.5">
                        <a
                          href={BUSINESS_INFO.phoneHref}
                          className="focus-ring-on-dark rounded font-heading font-semibold text-lime hover:underline"
                        >
                          {BUSINESS_INFO.phone}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <IconBox icon={Mail} variant="onDark" size="sm" />
                    <div>
                      <dt className="text-xs font-medium tracking-wider text-white/60 uppercase">
                        Email
                      </dt>
                      <dd className="mt-0.5">
                        <a
                          href={BUSINESS_INFO.emailHref}
                          className="focus-ring-on-dark break-all rounded font-heading font-semibold text-lime hover:underline"
                        >
                          {BUSINESS_INFO.email}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <IconBox icon={MapPin} variant="onDark" size="sm" />
                    <div>
                      <dt className="text-xs font-medium tracking-wider text-white/60 uppercase">
                        Address
                      </dt>
                      <dd className="mt-0.5 leading-relaxed text-white/85">
                        5 No, G Road, Liluah, Howrah, West Bengal - 711108
                        <span className="mt-1 block text-xs text-white/65">
                          Landmark: {BUSINESS_INFO.landmark}
                        </span>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </m.div>

            {/* Right: WhatsApp Enquiry Generator Form */}
            <m.div variants={fadeUp} className="lg:col-span-7">
              <Card variant="elevated" padding="lg" className="text-charcoal">
                <Eyebrow>Quick Enquiry Form</Eyebrow>
                <h3 className="mt-2 text-xl font-bold text-forest sm:text-2xl">
                  Prepare a WhatsApp Enquiry
                </h3>
                <Text size="sm" tone="muted" className="mt-2">
                  Fill in your details below to generate a pre-filled WhatsApp
                  message addressed directly to {BUSINESS_INFO.name}.
                </Text>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-6 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      id="enquiry-full-name"
                      label="Full Name"
                      error={errors.fullName}
                    >
                      <input
                        id="enquiry-full-name"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        value={formValues.fullName}
                        onChange={(e) =>
                          handleFieldChange('fullName', e.target.value)
                        }
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={
                          errors.fullName
                            ? 'enquiry-full-name-error'
                            : undefined
                        }
                        className={getControlClasses(Boolean(errors.fullName))}
                      />
                    </FormField>

                    <FormField
                      id="enquiry-phone"
                      label="Phone Number"
                      error={errors.phone}
                    >
                      <input
                        id="enquiry-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 98318 48048"
                        value={formValues.phone}
                        onChange={(e) =>
                          handleFieldChange('phone', e.target.value)
                        }
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? 'enquiry-phone-error' : undefined
                        }
                        className={getControlClasses(Boolean(errors.phone))}
                      />
                    </FormField>
                  </div>

                  <FormField
                    id="enquiry-pest-problem"
                    label="Pest Problem"
                    error={errors.pestProblem}
                  >
                    <select
                      id="enquiry-pest-problem"
                      name="pestProblem"
                      value={effectivePestProblem}
                      onChange={(e) =>
                        handleFieldChange('pestProblem', e.target.value)
                      }
                      aria-invalid={Boolean(errors.pestProblem)}
                      aria-describedby={
                        errors.pestProblem
                          ? 'enquiry-pest-problem-error'
                          : undefined
                      }
                      className={getControlClasses(Boolean(errors.pestProblem))}
                    >
                      <option value="">Select pest concern...</option>
                      {PEST_PROBLEM_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField
                    id="enquiry-message"
                    label="Message"
                    error={errors.message}
                  >
                    <textarea
                      id="enquiry-message"
                      name="message"
                      rows={4}
                      placeholder="Briefly describe the pest problem and your area in Liluah / Howrah..."
                      value={formValues.message}
                      onChange={(e) =>
                        handleFieldChange('message', e.target.value)
                      }
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? 'enquiry-message-error' : undefined
                      }
                      className={getControlClasses(Boolean(errors.message))}
                    />
                  </FormField>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      leadingIcon={Send}
                    >
                      Send WhatsApp Enquiry
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="md"
                      onClick={handleReset}
                    >
                      Clear Form
                    </Button>
                  </div>

                  {generatedWhatsAppUrl && (
                    <div
                      role="status"
                      aria-live="polite"
                      className="rounded-2xl border border-forest/20 bg-surface-soft p-5"
                    >
                      <div className="flex items-start gap-3">
                        <IconBox icon={CheckCircle2} variant="lime" size="sm" />
                        <div className="min-w-0 flex-1">
                          <p className="font-heading text-sm font-bold text-forest">
                            WhatsApp Enquiry Message Ready
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                            Your enquiry details have been formatted for WhatsApp.
                            If WhatsApp did not open automatically, use the button
                            below to send your message directly.
                          </p>
                          <div className="mt-4">
                            <ButtonLink
                              href={generatedWhatsAppUrl}
                              target="_blank"
                              rel="noreferrer"
                              variant="secondary"
                              size="sm"
                              leadingIcon={MessageCircle}
                              trailingIcon={ExternalLink}
                            >
                              Open WhatsApp to Send
                            </ButtonLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </Card>
            </m.div>
          </div>
        </m.div>
      </Container>
    </Section>
  )
})
