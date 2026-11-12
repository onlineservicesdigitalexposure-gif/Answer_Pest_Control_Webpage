import { BUSINESS_INFO } from '../config/business'

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 'services-enquire',
    question: 'What types of pest control services can I enquire about?',
    answer: `You can reach out to ${BUSINESS_INFO.name} regarding common household and commercial pest concerns, including cockroach control, ant control, mosquito control, and spider control, as well as general pest management or termite-related enquiries.`,
  },
  {
    id: 'how-to-contact',
    question: 'How can I contact ANSWER PEST CONTROL SERVICE?',
    answer: `You can call ${BUSINESS_INFO.phone} directly, start a WhatsApp enquiry, send an email to ${BUSINESS_INFO.email}, or use the enquiry form in the Contact section below to prepare your WhatsApp message.`,
  },
  {
    id: 'business-location',
    question: 'Where is the business located?',
    answer: `${BUSINESS_INFO.name} is located at ${BUSINESS_INFO.address}, near the ${BUSINESS_INFO.landmark} landmark. You can also open the exact location link on Google Maps from the Location section.`,
  },
  {
    id: 'discuss-pest-problem',
    question: 'How can I discuss my pest problem?',
    answer: `Simply call ${BUSINESS_INFO.phone} or share a brief description of the pest issue and affected areas via WhatsApp or email. This helps Mukul Ghosh understand your concern and discuss suitable next steps.`,
  },
  {
    id: 'service-availability',
    question: 'How can I get information about service availability?',
    answer: `For current scheduling and local service availability in Liluah, Howrah, and nearby areas, please call ${BUSINESS_INFO.phone} or send a WhatsApp enquiry so we can confirm directly with you.`,
  },
] as const
