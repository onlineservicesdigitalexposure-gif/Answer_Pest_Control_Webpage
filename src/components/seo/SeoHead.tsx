import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { BUSINESS_INFO } from '../../config/business'

interface SeoHeadProps {
  title?: string
  description?: string
  canonicalUrl?: string
}

// Replace this placeholder canonical URL once the production domain is live.
const DEFAULT_CANONICAL_URL = 'https://www.answerpestcontrol.example/'
const DEFAULT_TITLE = `${BUSINESS_INFO.name} | Pest Control in Liluah, Howrah`
const DEFAULT_DESCRIPTION = `Looking for pest control services in Liluah, Howrah? Contact ${BUSINESS_INFO.name} by ${BUSINESS_INFO.owner} for enquiries about pest control solutions.`

export function SeoHead({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl = DEFAULT_CANONICAL_URL,
}: SeoHeadProps) {
  const structuredDataJson = useMemo(
    () =>
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        description: DEFAULT_DESCRIPTION,
        url: canonicalUrl,
        founder: {
          '@type': 'Person',
          name: BUSINESS_INFO.owner,
        },
        telephone: BUSINESS_INFO.phone,
        email: BUSINESS_INFO.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: `5 No, G Road, Liluah (Near ${BUSINESS_INFO.landmark})`,
          addressLocality: 'Howrah',
          addressRegion: 'West Bengal',
          postalCode: '711108',
          addressCountry: 'IN',
        },
        hasMap: BUSINESS_INFO.googleMapsUrl,
        areaServed: ['Liluah', 'Howrah', 'West Bengal'],
        serviceType: [
          'Cockroach Control',
          'Ant Control',
          'Mosquito Control',
          'Spider Control',
        ],
      }),
    [canonicalUrl],
  )

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* LocalBusiness Structured Data */}
      <script type="application/ld+json">{structuredDataJson}</script>
    </Helmet>
  )
}
