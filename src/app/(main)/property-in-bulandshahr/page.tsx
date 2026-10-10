import type { Metadata } from 'next'
import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import PropertyCard from '@/components/property/PropertyCard'
import {
  MapPin,
  Building2,
  Trees,
  Layers,
  Store,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Property in Bulandshahr | Plots, Houses, Commercial & Agricultural Land',
  description:
    'Explore verified properties in Bulandshahr with Shree Maruti Nandan Properties. Residential plots near Bhoor Chauraha, commercial shops in Transport Nagar, houses, and fertile agricultural land.',
  keywords: [
    'Property in Bulandshahr',
    'Plots in Bulandshahr',
    'Bhoor Chauraha Bulandshahr property',
    'Transport Nagar Bulandshahr',
    'Houses for sale in Bulandshahr',
    'Agricultural land Bulandshahr',
    'Shree Maruti Nandan Properties',
  ],
}

export default function BulandshahrPropertyPage() {
  const bulandshahrProperties = properties.filter(
    (p) => p.location.city.toLowerCase() === 'bulandshahr'
  )

  const plots = bulandshahrProperties.filter((p) => p.subcategory === 'plot')
  const houses = bulandshahrProperties.filter((p) => p.category === 'residential')
  const commercial = bulandshahrProperties.filter((p) => p.category === 'commercial')
  const agricultural = bulandshahrProperties.filter(
    (p) => p.subcategory === 'agricultural' || p.subcategory === 'farmland'
  )

  return (
    <div className="min-h-screen bg-[#0B0B0E] pt-24 pb-20">
      {/* City Hero */}
      <div className="relative bg-[#0E0E12] border-b border-white/10 text-white py-16 sm:py-20 mb-12">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80"
            alt="Bulandshahr Real Estate"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C542]/15 border border-[#F5C542]/30 text-[#F5C542] text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin size={13} />
              <span>Shree Maruti Nandan Properties Head Office Market</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4 text-[#F5C542]">
              Property in Bulandshahr
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8">
              Explore residential plots, independent houses, retail shops, commercial showrooms, and fertile 
              agricultural land in Bulandshahr with personal guidance from our local consultancy.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+919997837133"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] hover:brightness-105 text-zinc-950 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <Phone size={15} />
                <span>Call Agency: +91 9997837133</span>
              </a>

              <a
                href="https://wa.me/919997837133?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20am%20interested%20in%20Bulandshahr%20properties."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] rounded-xl text-xs sm:text-sm font-semibold border border-[#25D366]/30 transition-colors"
              >
                <MessageSquare size={15} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Local Market Hubs */}
        <div className="bg-[#131317] rounded-3xl border border-white/10 p-6 sm:p-8 mb-12 shadow-xl">
          <h3 className="font-display font-bold text-lg text-[#F5C542] mb-4">
            Key Localities &amp; Hubs in Bulandshahr
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'Bhoor Chauraha', type: 'Central Hub' },
              { name: 'Transport Nagar', type: 'Commercial' },
              { name: 'Sector 65', type: 'Plotted Township' },
              { name: 'Civil Lines', type: 'Residential' },
              { name: 'NH-34 Bypass', type: 'Highways & Showrooms' },
              { name: 'Syana Road Belt', type: 'Agricultural' },
            ].map((loc) => (
              <div key={loc.name} className="p-3 bg-[#18181F] rounded-xl border border-white/5 text-center">
                <p className="text-xs font-bold text-white">{loc.name}</p>
                <p className="text-[10px] text-zinc-400 mt-0.5">{loc.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Bulandshahr Listings */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F5C542]">
                Available Inventory in Bulandshahr
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Showing {bulandshahrProperties.length} active residential, commercial, and agricultural properties.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {bulandshahrProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        {/* Local Agency Advisory Box */}
        <div className="bg-[#131317] rounded-3xl border border-white/10 p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3 py-1 rounded-full">
              Local Guidance
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5C542]">
              Looking for a Specific Plot or Property in Bulandshahr?
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed font-light">
              Not all available local land parcels or properties are listed publicly due to owner privacy. 
              Contact Shree Maruti Nandan Properties directly or visit our office at Shop No. 375, T.P. Nagar Gol Chakkar to discuss custom requirements with founders Manoj Kumar Tyagi &amp; Ashish Chaudhary.
            </p>
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#F5C542]" />
                <span>Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr, Uttar Pradesh - 203001</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#F5C542]" />
                <span>Direct phone consultation at +91 9997837133 / 9548974761</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
            <a
              href="tel:+919997837133"
              className="px-6 py-3 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] hover:brightness-105 text-zinc-950 rounded-xl text-center text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white/20 text-zinc-200 hover:border-[#F5C542] hover:text-[#F5C542] rounded-xl text-center text-xs sm:text-sm font-semibold transition-colors"
            >
              Contact Agency
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
