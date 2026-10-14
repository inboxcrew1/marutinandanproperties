import type { Metadata } from 'next'
import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import PropertyCard from '@/components/property/PropertyCard'
import {
  Building2,
  Store,
  MapPin,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Property in Bulandshahr | Shops & Showroom Plots | Shree Maruti Nandan Properties',
  description:
    'Explore verified commercial properties in Bulandshahr with Shree Maruti Nandan Properties. Retail shops in Transport Nagar and showroom plots on NH-34 Bypass. Call +91 9997837133.',
  keywords: [
    'commercial property in bulandshahr',
    'commercial property dealer in bulandshahr',
    'shop for sale in bulandshahr',
    'commercial shop in bulandshahr',
    'commercial space for sale in bulandshahr',
    'office space in bulandshahr',
    'commercial land in bulandshahr',
    'commercial real estate in bulandshahr',
    'Transport Nagar Bulandshahr shop',
    'NH-34 commercial plot Bulandshahr',
  ],
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/commercial-property-in-bulandshahr',
  },
}

export default function CommercialPropertyInBulandshahrPage() {
  const commercialListings = properties.filter(
    (p) =>
      p.location.city.toLowerCase() === 'bulandshahr' &&
      p.category === 'commercial'
  )

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
        name: 'Commercial Property in Bulandshahr',
        item: 'https://shreemarutinandanproperties.com/commercial-property-in-bulandshahr',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#0B0B0E] pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Header */}
      <section className="relative bg-[#0E0E12] border-b border-white/10 text-white py-14 sm:py-20 mb-12">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
            alt="Commercial Property in Bulandshahr"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#F5C542] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#F5C542]">Commercial Property in Bulandshahr</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5C542]/15 border border-[#F5C542]/30 text-[#F5C542] text-xs font-bold uppercase tracking-wider mb-4">
              <Building2 size={13} />
              <span>Shops &bull; Showrooms &bull; Transport Nagar &bull; NH-34 Bypass</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              Commercial Property in Bulandshahr <br className="hidden sm:inline" />
              <span className="text-[#F5C542]">Shops &amp; High-Yield Commercial Spaces</span>
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-2xl">
              Expand your business or secure rental yield with verified retail shops, godowns, and highway showroom plots in Bulandshahr. 
              Our office at T.P. Nagar Gol Chakkar puts us at the pulse of commercial activity in Western Uttar Pradesh.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="tel:+919997837133"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] hover:brightness-105 text-zinc-950 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <Phone size={15} />
                <span>Call Commercial Team: +91 9997837133</span>
              </a>

              <a
                href="https://wa.me/919997837133?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20am%20looking%20for%20commercial%20property%20in%20Bulandshahr."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] rounded-xl text-xs sm:text-sm font-semibold border border-[#25D366]/30 transition-colors"
              >
                <MessageSquare size={15} />
                <span>WhatsApp Commercial Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Listings Grid */}
        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Available Commercial Listings in Bulandshahr
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Verified shops and showroom plots with high footfall and commercial potential.
              </p>
            </div>
            <Link
              href="/commercial"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#F5C542] text-xs font-semibold text-zinc-200 hover:text-[#F5C542] transition-colors"
            >
              <span>View All Commercial Properties</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialListings.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Commercial Corridors Spotlight */}
        <section className="bg-[#131317] rounded-3xl border border-white/10 p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Prime Commercial Hubs in Bulandshahr
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Where local entrepreneurs, retailers, and logistics operators invest:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#18181F] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#F5C542] flex items-center justify-center mb-3">
                <Store size={20} />
              </div>
              <h3 className="font-bold text-sm text-white mb-2">Transport Nagar (T.P. Nagar)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                The commercial heartbeat for automobile, spare parts, logistics, and heavy vehicle trading. High daily business turnover with stable rental tenants.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#18181F] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#F5C542] flex items-center justify-center mb-3">
                <TrendingUp size={20} />
              </div>
              <h3 className="font-bold text-sm text-white mb-2">NH-34 Bulandshahr Bypass</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                High-visibility corridor for automobile showrooms, banquet halls, restaurants, petrol pumps, and warehousing hubs connecting Delhi, Aligarh, and Meerut.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#18181F] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#F5C542] flex items-center justify-center mb-3">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-sm text-white mb-2">Bhoor Chauraha &amp; Civil Lines</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Prime retail shopping spaces, medical clinics, coaching centers, and banking branches with dense footfall and high visibility.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-400">
              Looking for a specific commercial size, frontage, or rental yield property?
            </p>
            <div className="flex items-center gap-3">
              <a
                href="tel:+919997837133"
                className="px-5 py-2.5 bg-[#F5C542] text-zinc-950 font-bold rounded-xl text-xs hover:brightness-110 transition-all"
              >
                Call: +91 9997837133
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-white/10 text-white font-semibold rounded-xl text-xs hover:bg-white/20 transition-colors"
              >
                Schedule Meeting
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
