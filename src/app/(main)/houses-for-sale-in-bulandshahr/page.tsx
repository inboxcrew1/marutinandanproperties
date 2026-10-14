import type { Metadata } from 'next'
import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import PropertyCard from '@/components/property/PropertyCard'
import {
  Home,
  MapPin,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Compass,
  ArrowRight,
  FileCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Houses for Sale in Bulandshahr | Buy New House | Shree Maruti Nandan Properties',
  description:
    'Looking to buy a house in Bulandshahr? Explore verified independent houses, kothis, and residential floors for sale near Bhoor Chauraha and Civil Lines. Call +91 9997837133.',
  keywords: [
    'buy new house property dealer in bulandshahr',
    'houses for sale in bulandshahr',
    'house for sale in bulandshahr',
    'buy house in bulandshahr',
    'independent house for sale in bulandshahr',
    'residential house in bulandshahr',
    'ready to move house in bulandshahr',
    'new house for sale in bulandshahr',
    'best property dealer in bulandshahr',
    'Shree maruti nandan properties bulandshahr',
    'Bulandshahr mein ghar kharidna hai',
    'Bulandshahr mein makan kharidna hai',
  ],
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/houses-for-sale-in-bulandshahr',
  },
}

export default function HousesForSaleInBulandshahrPage() {
  const houseListings = properties.filter(
    (p) =>
      p.location.city.toLowerCase() === 'bulandshahr' &&
      p.category === 'residential'
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
        name: 'Houses for Sale in Bulandshahr',
        item: 'https://shreemarutinandanproperties.com/houses-for-sale-in-bulandshahr',
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
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
            alt="Houses for Sale in Bulandshahr"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#F5C542] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#F5C542]">Houses for Sale in Bulandshahr</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5C542]/15 border border-[#F5C542]/30 text-[#F5C542] text-xs font-bold uppercase tracking-wider mb-4">
              <Home size={13} />
              <span>Residential Houses &bull; Independent Kothis &bull; Floors</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              Houses for Sale in Bulandshahr <br className="hidden sm:inline" />
              <span className="text-[#F5C542]">Buy New House with Confidence</span>
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-2xl">
              Find verified independent houses, modern builder floors, and ready to move family homes across Bulandshahr. 
              Our founders personally inspect every home, verify ownership papers, and ensure smooth sub-registrar registry assistance.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="tel:+919997837133"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] hover:brightness-105 text-zinc-950 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <Phone size={15} />
                <span>Call for House Visits: +91 9997837133</span>
              </a>

              <a
                href="https://wa.me/919997837133?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20want%20to%20buy%20a%20house%20in%20Bulandshahr."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] rounded-xl text-xs sm:text-sm font-semibold border border-[#25D366]/30 transition-colors"
              >
                <MessageSquare size={15} />
                <span>WhatsApp House Enquiry</span>
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
                Featured Residential Houses in Bulandshahr
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Verified residential houses and floors ready for inspection.
              </p>
            </div>
            <Link
              href="/properties?city=Bulandshahr&category=residential"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#F5C542] text-xs font-semibold text-zinc-200 hover:text-[#F5C542] transition-colors"
            >
              <span>View All Residential Properties</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {houseListings.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* House Buyer Checklist */}
        <section className="bg-[#131317] rounded-3xl border border-white/10 p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Essential Checklist Before Buying a House in Bulandshahr
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Bulandshahr mein ghar kharidne se pehle in zaroori baaton ka dhyan zaroor rakhein:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#18181F] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#F5C542] flex items-center justify-center mb-3">
                <FileCheck size={20} />
              </div>
              <h3 className="font-bold text-sm text-white mb-2">1. Title Deed &amp; Chain of Documents</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Check whether the seller has the original registered sale deed (Bainama) and previous 30-year chain of title without disputes or legal encumbrances.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#18181F] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#F5C542] flex items-center justify-center mb-3">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-sm text-white mb-2">2. Mutation &amp; Nagar Palika Records</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Verify that the house is duly recorded in local municipality (Nagar Palika Parishad Bulandshahr) tax assessments and house tax receipts are clear.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#18181F] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#F5C542] flex items-center justify-center mb-3">
                <Compass size={20} />
              </div>
              <h3 className="font-bold text-sm text-white mb-2">3. Physical Access &amp; Utilities</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Inspect road width (minimum 20-30 feet for family vehicles), electricity transformer load, borewell/water connection, and local neighborhood safety.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-400">
              Need assistance checking house papers or shortlisting family homes in Bulandshahr?
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
                Enquire Online
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
