import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0B0E',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://shreemarutinandanproperties.com'),
  title: {
    template: '%s | Shree Maruti Nandan Properties',
    default: 'Property Dealer in Bulandshahr | Shree Maruti Nandan Properties',
  },
  description:
    'Looking for a property dealer in Bulandshahr? Contact Shree Maruti Nandan Properties for help finding houses, residential plots and available properties. Enquire today.',
  keywords: [
    'best property dealer in bulandshahr',
    'property dealer in bulandshahr',
    'buy new house property dealer in bulandshahr',
    'properties dealer in bulandshahr',
    'Shree maruti nandan properties bulandshahr',
    'Property Dealer Bulandshahr',
    'Best Property Dealer Bulandshahr',
    'Plots for sale in Bulandshahr',
    'Houses for sale in Bulandshahr',
    'Residential Plot in Bulandshahr',
    'Commercial Property in Bulandshahr',
    'Bhoor Chauraha Bulandshahr property',
    'Transport Nagar Bulandshahr',
  ],
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/',
  },
  openGraph: {
    siteName: 'Shree Maruti Nandan Properties',
    type: 'website',
    locale: 'en_IN',
    url: 'https://shreemarutinandanproperties.com/',
    title: 'Property Dealer in Bulandshahr | Shree Maruti Nandan Properties',
    description:
      'Looking for a property dealer in Bulandshahr? Contact Shree Maruti Nandan Properties for help finding houses, residential plots and available properties. Enquire today.',
    images: [
      {
        url: 'https://shreemarutinandanproperties.com/images/about/office-outside.jpg',
        width: 1200,
        height: 630,
        alt: 'Shree Maruti Nandan Properties Office in Bulandshahr',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Dealer in Bulandshahr | Shree Maruti Nandan Properties',
    description:
      'Looking for a property dealer in Bulandshahr? Contact Shree Maruti Nandan Properties for help finding houses, residential plots and available properties. Enquire today.',
    images: ['https://shreemarutinandanproperties.com/images/about/office-outside.jpg'],
  },
  verification: {
    google: 'hRtodrpEj8LbN7UcPnPM-pJ6CfTQjeJ6D2TydJTZlSk',
  },
  icons: {
    icon: [
      { url: '/favicon.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png?v=2', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png?v=2', sizes: '192x192', type: 'image/png' },
    ],
  },
}

const businessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'RealEstateAgent',
      '@id': 'https://shreemarutinandanproperties.com/#organization',
      name: 'Shree Maruti Nandan Properties',
      alternateName: 'Shree Maruti Nandan Property Dealer Bulandshahr',
      url: 'https://shreemarutinandanproperties.com/',
      logo: 'https://shreemarutinandanproperties.com/images/shree-maruti-nandan-properties-logo.png',
      image: 'https://shreemarutinandanproperties.com/images/about/office-outside.jpg',
      description:
        'Trusted property dealer and real estate consultancy in Bulandshahr, Uttar Pradesh. Assisting buyers and sellers with residential houses, residential plots, commercial properties and agricultural land.',
      telephone: ['+919997837133', '+919548974761'],
      email: 'info@shreemarutinandanproperties.com',
      priceRange: 'INR',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No. 375, T.P. Nagar Gol Chakkar',
        addressLocality: 'Bulandshahr',
        addressRegion: 'Uttar Pradesh',
        postalCode: '203001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.4074,
        longitude: 77.8485,
      },
      founder: [
        {
          '@type': 'Person',
          name: 'Manoj Kumar Tyagi',
          jobTitle: 'Founder & Director',
        },
        {
          '@type': 'Person',
          name: 'Ashish Chaudhary',
          jobTitle: 'Founder & Director',
        },
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Bulandshahr' },
        { '@type': 'AdministrativeArea', name: 'Khurja' },
        { '@type': 'AdministrativeArea', name: 'Greater Noida' },
        { '@type': 'AdministrativeArea', name: 'Noida' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '09:00',
          closes: '20:00',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://shreemarutinandanproperties.com/#website',
      url: 'https://shreemarutinandanproperties.com/',
      name: 'Shree Maruti Nandan Properties',
      publisher: {
        '@id': 'https://shreemarutinandanproperties.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://shreemarutinandanproperties.com/properties?search={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: ['en-IN', 'hi'],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="hRtodrpEj8LbN7UcPnPM-pJ6CfTQjeJ6D2TydJTZlSk"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0B0B0E] text-[#E4E4E7] selection:bg-amber-400/25 selection:text-[#FFF0A8]">
        {children}
      </body>
    </html>
  )
}
