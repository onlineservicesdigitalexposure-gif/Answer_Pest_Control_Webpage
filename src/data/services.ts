import type { LucideIcon } from 'lucide-react'
import {
  Bug,
  Home,
  Shield,
  ShieldCheck,
  Sparkles,
  Trees,
} from 'lucide-react'

export interface ServiceItem {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  icon: LucideIcon
  /**
   * The first four categories are referenced on the original visiting card.
   * Items marked `isProposed: true` are proposed website content to be confirmed
   * with the business owner (Mukul Ghosh) before final publication.
   */
  isProposed: boolean
}

const IMAGE_BASE = `${import.meta.env.BASE_URL}images`

export const SERVICES: readonly ServiceItem[] = [
  {
    id: 'cockroach-control',
    title: 'Cockroach Control',
    description:
      'Enquire about cockroach control in Howrah and Liluah for kitchens, dining areas, storage spaces, and residential or commercial interiors.',
    image: `${IMAGE_BASE}/cockroach-control-kitchen-hygiene.webp`,
    imageAlt:
      'Spotless modern residential kitchen representing cockroach control in Howrah',
    icon: Bug,
    isProposed: false,
  },
  {
    id: 'ant-control',
    title: 'Ant Control',
    description:
      'Consultation and assistance to address common ant trails around pantries, doorways, dining rooms, and indoor surfaces near Liluah.',
    image: `${IMAGE_BASE}/ant-control-dining-pantry.webp`,
    imageAlt:
      'Clean sunlit dining area and sealed pantry jars representing ant control near Liluah',
    icon: Sparkles,
    isProposed: false,
  },
  {
    id: 'mosquito-control',
    title: 'Mosquito Control',
    description:
      'Practical consultation for mosquito control in Howrah aimed at helping reduce mosquito presence around balconies, courtyards, and living areas.',
    image: `${IMAGE_BASE}/mosquito-control-patio-garden.webp`,
    imageAlt:
      'Well-maintained residential veranda and garden patio representing mosquito control in Howrah',
    icon: Trees,
    isProposed: false,
  },
  {
    id: 'spider-control',
    title: 'Spider Control',
    description:
      'Assistance with managing unwanted spiders and cobwebs across high corners, window frames, hallways, and utility rooms.',
    image: `${IMAGE_BASE}/spider-control-clean-living-room.webp`,
    imageAlt:
      'Bright clean living room corners and tall windows representing spider control',
    icon: Shield,
    isProposed: false,
  },
  {
    id: 'termite-control',
    title: 'Termite Control',
    description:
      'Proposed service category for termite control in Howrah, helping property owners discuss concerns around wooden doors, furniture, and timber fixtures.',
    image: `${IMAGE_BASE}/termite-control-woodwork-protection.webp`,
    imageAlt:
      'Well-preserved natural wooden doors and timber flooring representing termite control in Howrah',
    icon: Home,
    isProposed: true,
  },
  {
    id: 'general-pest-management',
    title: 'General Pest Management',
    description:
      'Proposed service category for general pest control service in Liluah and Howrah across homes, apartments, and local commercial premises.',
    image: `${IMAGE_BASE}/general-pest-management-home-exterior.webp`,
    imageAlt:
      'Clean residential home exterior and entrance porch representing pest control service in Liluah',
    icon: ShieldCheck,
    isProposed: true,
  },
] as const
