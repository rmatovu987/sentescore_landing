import type { Metadata } from 'next'
import { SITE } from './constants'

interface PageSEO {
  title?: string
  description?: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  path = '',
  keywords = [],
  noIndex = false,
}: PageSEO = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`
  const pageDescription = description ?? SITE.description
  const pageUrl = `${SITE.url}${path}`

  const defaultKeywords = [
    'credit scoring',
    'dynamic credit scoring',
    'loan origination',
    'workflow automation',
    'fintech platform',
    'credit decisioning',
    'automated underwriting',
    'alternative data scoring',
    'scoring rules',
    'application management',
    'SenteScore',
  ]

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: pageUrl },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: pageUrl,
      siteName: SITE.name,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: `${SITE.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${SITE.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@sentescore',
      creator: '@sentescore',
      title: pageTitle,
      description: pageDescription,
      images: [`${SITE.url}/og-image.png`],
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    verification: {
      // Add your Google Search Console / Bing verification tokens here
      // google: 'your-google-verification-token',
    },
  }
}

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    alternateName: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE.email,
      contactType: 'customer support',
    },
    sameAs: [SITE.social.twitter, SITE.social.linkedin],
  },
  software: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.name,
    applicationCategory: 'FinanceApplication',
    description: SITE.description,
    url: SITE.url,
    operatingSystem: 'Web',
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter',
        price: '350',
        priceCurrency: 'USD',
        description: 'For teams getting started with smarter lending',
      },
      {
        '@type': 'Offer',
        name: 'Professional',
        price: '500',
        priceCurrency: 'USD',
        description: 'For growing lenders with advanced needs',
      },
      {
        '@type': 'Offer',
        name: 'Enterprise',
        price: '1000',
        priceCurrency: 'USD',
        description: 'For large institutions with unlimited scale',
      },
    ],
  },
  breadcrumb: (items: { name: string; url: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
  faq: (items: { question: string; answer: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }),
}
