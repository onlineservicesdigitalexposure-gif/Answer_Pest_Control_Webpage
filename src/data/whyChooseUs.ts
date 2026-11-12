import type { LucideIcon } from 'lucide-react'
import {
  ClipboardCheck,
  MapPin,
  MessageSquare,
  PhoneCall,
} from 'lucide-react'

export interface WhyChooseUsItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const WHY_CHOOSE_US_ITEMS: readonly WhyChooseUsItem[] = [
  {
    id: 'convenient-local-contact',
    title: 'Convenient Local Contact',
    description:
      'Reach a neighborhood pest control service in Liluah, Howrah quickly by phone or email whenever pest concerns arise.',
    icon: PhoneCall,
  },
  {
    id: 'direct-communication',
    title: 'Direct Communication',
    description:
      'Speak directly with Mukul Ghosh for clear answers and straightforward coordination without unnecessary delays.',
    icon: MessageSquare,
  },
  {
    id: 'attention-to-customer-concerns',
    title: 'Attention to Customer Concerns',
    description:
      'Every inquiry is heard carefully so your specific home or workplace pest situation is properly understood.',
    icon: ClipboardCheck,
  },
  {
    id: 'accessible-business-location',
    title: 'Accessible Business Location',
    description:
      'Conveniently situated at 5 No, G Road, Liluah, Howrah near Agragami Club for easy local access and consultation.',
    icon: MapPin,
  },
] as const
