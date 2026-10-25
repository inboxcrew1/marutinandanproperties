import type { Metadata } from 'next'
import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import PropertyCard from '@/components/property/PropertyCard'
import {
  MapPin,
  Home,
  Layers,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Compass,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property Dealer in Bhoor, Bulandshahr | Shree Maruti Nandan Properties',
  description:
    'Find verified residential houses, independent kothis and plots near Bhoor Chauraha, Bulandshahr. Contact Shree Maruti Nandan Properties for site visits and legal registry checks. Call +91 9997837133.',
  keywords: [
    'Best property dealer in Bhoor Bulandshahr',
    'property dealer in bhoor bulandshahr',
    'Bhoor Chauraha Bulandshahr property dealer',
    'plots in bhoor bulandshahr',
    'house for sale in bhoor bulandshahr',
    'Shree Maruti Nandan Properties Bhoor',
    'property dealer in bulandshahr',
  ],
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/property-dealer-in-bhoor-bulandshahr',
  },
}

export default function BhoorBulandshahrPage() {
  const bhoorListings = properties.filter(
    (p) =>
      p.location.city.toLowerCase() === 'bulandshahr' &&
      (((p.location.locality || '').toLowerCase().includes('bhoor')) ||
        p.title.toLowerCase().includes('bhoor') ||
        p.category === 'residential' ||
        p.category === 'land')
  )

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Shree Maruti Nandan Properties - Bhoor Bulandshahr',
    image: 'https://shreemarutinandanproperties.com/images/about/office-outside.jpg',
    url: 'https://shreemarutinandanproperties.com/property-dealer-in-bhoor-bulandshahr',
    telephone: ['+919997837133', '+919548974761'],
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
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://shreemarutinandanproperties.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Property Dealer in Bulandshahr',
        item: 'https://shreemarutinandanproperties.com/property-dealer-in-bulandshahr',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Bhoor Bulandshahr',
        item: 'https://shreemarutinandanproperties.com/property-dealer-in-bhoor-bulandshahr',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#0B0B0E] pt-24 pb-20 text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-[#0E0E12] border-b border-white/10 text-white py-14 sm:py-20 mb-12">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
            alt="Bhoor Bulandshahr Residential Properties"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#F5C542] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/property-dealer-in-bulandshahr" className="hover:text-[#F5C542] transition-colors">Property Dealer in Bulandshahr</Link>
              <span>/</span>
              <span className="text-[#F5C542]">Bhoor Bulandshahr</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5C542]/15 border border-[#F5C542]/30 text-[#F5C542] text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin size={13} />
              <span>Bhoor Chauraha Hub &bull; Prime Residential &amp; Connecting Corridor</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              Property Dealer in Bhoor, Bulandshahr <br className="hidden sm:inline" />
              <span className="text-[#F5C542]">Shree Maruti Nandan Properties</span>
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-2xl">
              Bhoor and Bhoor Chauraha represent one of Bulandshahr most sought-after residential and mixed-use areas, connecting towards Delhi Road and the city center. 
              Shree Maruti Nandan Properties assists families in acquiring verified independent kothis, ready-to-move houses, and corner residential plots with clear title verification.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="tel:+919997837133"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] hover:brightness-105 text-zinc-950 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <Phone size={15} />
                <span>Call Consultant: +91 9997837133</span>
              </a>

              <a
                href="https://wa.me/919997837133?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20am%20looking%20for%20property%20near%20Bhoor%20Bulandshahr."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] rounded-xl text-xs sm:text-sm font-semibold border border-[#25D366]/30 transition-colors"
              >
                <MessageSquare size={15} />
                <span>WhatsApp Bhoor Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Locality Insights */}
        <section className="bg-[#131317] rounded-3xl border border-white/10 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542]">Residential Advantages</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 mb-4">
                Why Families Prefer Living Near Bhoor Chauraha
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                Bhoor is a thriving hub with quick access to schools, markets, medical facilities, and rapid highway connections to Delhi and Noida. 
                Whether you want to build an independent house or buy a ready kothi, Bhoor remains a steady capital appreciation zone.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <span><strong>Prime Connectivity:</strong> Minutes away from Delhi Road highway entry and central Bulandshahr.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <span><strong>Established Colonies:</strong> Peaceful residential neighborhoods with dependable water and electricity infrastructure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <span><strong>Verified Boundaries:</strong> We personally survey the boundary pillars and road frontage for all plot offerings.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#18181F] rounded-2xl border border-amber-500/20 p-6">
              <h3 className="font-display text-lg font-bold text-[#F5C542] mb-3">
                Schedule a Bhoor Site Visit
              </h3>
              <p className="text-xs text-zinc-400 mb-4">
                Our founders Manoj Kumar Tyagi and Ashish Chaudhary personally accompany you for physical site inspections in the Bhoor belt.
              </p>
              <div className="space-y-2 text-xs text-zinc-300 mb-6">
                <div><strong>Office:</strong> Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr</div>
                <div><strong>Phone:</strong> +91 9997837133 / +91 9548974761</div>
                <div><strong>Available:</strong> 7 Days a week (9:00 AM - 8:00 PM)</div>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/houses-for-sale-in-bulandshahr"
                  className="flex-1 py-2.5 bg-[#F5C542] text-zinc-950 font-bold text-center rounded-xl text-xs hover:brightness-110 transition-all"
                >
                  Houses in Bulandshahr
                </Link>
                <Link
                  href="/residential-plots-in-bulandshahr"
                  className="flex-1 py-2.5 bg-white/10 text-white font-semibold text-center rounded-xl text-xs hover:bg-white/20 transition-all"
                >
                  Residential Plots
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Listings Section */}
        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Available Properties in &amp; around Bhoor
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Verified independent houses, residential plots, and investment opportunities.
              </p>
            </div>
            <Link
              href="/properties?city=Bulandshahr"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#F5C542] text-xs font-semibold text-zinc-200 hover:text-[#F5C542] transition-colors"
            >
              <span>View All Listings</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bhoorListings.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Internal Hub Navigation */}
        <section className="bg-[#101014] rounded-2xl border border-white/5 p-6 sm:p-8">
          <h3 className="font-display text-lg font-bold text-white mb-4">
            Explore Other Bulandshahr Locations &amp; Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <Link href="/property-dealer-in-bulandshahr" className="p-3 bg-[#131317] rounded-xl border border-white/10 hover:border-amber-500/30 text-zinc-300 hover:text-[#F5C542] transition-colors">
              Bulandshahr Main Hub
            </Link>
            <Link href="/property-dealer-in-transport-nagar-bulandshahr" className="p-3 bg-[#131317] rounded-xl border border-white/10 hover:border-amber-500/30 text-zinc-300 hover:text-[#F5C542] transition-colors">
              Transport Nagar Hub
            </Link>
            <Link href="/property-dealer-in-civil-lines-bulandshahr" className="p-3 bg-[#131317] rounded-xl border border-white/10 hover:border-amber-500/30 text-zinc-300 hover:text-[#F5C542] transition-colors">
              Civil Lines Hub
            </Link>
            <Link href="/residential-plots-in-bulandshahr" className="p-3 bg-[#131317] rounded-xl border border-white/10 hover:border-amber-500/30 text-zinc-300 hover:text-[#F5C542] transition-colors">
              Residential Plots
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
