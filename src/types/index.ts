export type SectionId =
  | 'home'
  | 'about'
  | 'services'
  | 'why-us'
  | 'process'
  | 'location'
  | 'faq'
  | 'contact'

export interface NavItem {
  id: SectionId
  label: string
}

export interface BusinessInfo {
  name: string
  owner: string
  address: string
  landmark: string
  phone: string
  phoneHref: string
  whatsappHref: string
  whatsappNumber: string
  email: string
  emailHref: string
  googleMapsUrl: string
  serviceArea: string
}
