import type { LucideIcon } from 'lucide-react'
import {
  CalendarCheck,
  ClipboardList,
  MessageSquareText,
  PhoneCall,
} from 'lucide-react'

export interface ProcessStep {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    number: '01',
    title: 'Get in Touch',
    description:
      'Call +91 9831848048 or reach out via email to initiate your inquiry at a time convenient for you.',
    icon: PhoneCall,
  },
  {
    number: '02',
    title: 'Discuss Your Pest Problem',
    description:
      'Share the type of pest activity you are experiencing and which areas of your property need attention.',
    icon: MessageSquareText,
  },
  {
    number: '03',
    title: 'Understand the Service Requirements',
    description:
      'Review the scope of your concern together and clarify practical service requirements before proceeding.',
    icon: ClipboardList,
  },
  {
    number: '04',
    title: 'Connect for Service Consultation',
    description:
      'Coordinate directly with ANSWER PEST CONTROL SERVICE for your local service consultation in Liluah and Howrah.',
    icon: CalendarCheck,
  },
] as const
