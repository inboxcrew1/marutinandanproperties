import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import PropertyCard from '@/components/property/PropertyCard'
import { MapPin, ArrowRight, Building2, Trees, Layers, Store } from 'lucide-react'

export default function BulandshahrFocus() {
  // Filter all Bulandshahr properties
  const bulandshahrProperties = properties
    .filter((p) => p.location.city.toLowerCase() === 'bulandshahr')
    .slice(0, 6)

  return (
    <section className="py-16 sm:py-24 bg-[#101014] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C542]/10 text-[#F5C542] border border-[#F5C542]/20 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin size={13} />
              <span>Primary Agency Market</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold shine-gold-text tracking-tight">
              Properties in Bulandshahr
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Explore residential plots, independent houses, commercial shops near Transport Nagar &amp; Bhoor Chauraha, and fertile agricultural land parcels.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <Link
              href="/property-dealer-in-bulandshahr"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-amber-500/20 transition-all"
            >
              <span>Bulandshahr Dealer Hub</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/property-in-bulandshahr"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs sm:text-sm font-semibold border border-white/15 transition-colors"
            >
              <span>All Listings</span>
            </Link>
          </div>
        </div>

        {/* Local Highlights Interactive Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <Link
            href="/residential-plots-in-bulandshahr"
            className="group flex items-center gap-3 p-3.5 bg-[#131317] hover:bg-[#18181F] rounded-xl border border-white/10 hover:border-amber-500/30 transition-all shadow-xs"
          >
            <div className="w-9 h-9 rounded-lg bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <Layers size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-100 group-hover:text-[#F5C542] transition-colors">Residential Plots</p>
              <p className="text-[11px] text-zinc-400">100 to 500+ Gaj</p>
            </div>
          </Link>

          <Link
            href="/houses-for-sale-in-bulandshahr"
            className="group flex items-center gap-3 p-3.5 bg-[#131317] hover:bg-[#18181F] rounded-xl border border-white/10 hover:border-amber-500/30 transition-all shadow-xs"
          >
            <div className="w-9 h-9 rounded-lg bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <Building2 size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-100 group-hover:text-[#F5C542] transition-colors">Houses &amp; Floors</p>
              <p className="text-[11px] text-zinc-400">Bhoor &amp; Civil Lines</p>
            </div>
          </Link>

          <Link
            href="/commercial-property-in-bulandshahr"
            className="group flex items-center gap-3 p-3.5 bg-[#131317] hover:bg-[#18181F] rounded-xl border border-white/10 hover:border-amber-500/30 transition-all shadow-xs"
          >
            <div className="w-9 h-9 rounded-lg bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <Store size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-100 group-hover:text-[#F5C542] transition-colors">Commercial Shops</p>
              <p className="text-[11px] text-zinc-400">Transport Nagar Hub</p>
            </div>
          </Link>

          <Link
            href="/property-dealer-in-bulandshahr"
            className="group flex items-center gap-3 p-3.5 bg-[#131317] hover:bg-[#18181F] rounded-xl border border-white/10 hover:border-amber-500/30 transition-all shadow-xs"
          >
            <div className="w-9 h-9 rounded-lg bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <Trees size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-100 group-hover:text-[#F5C542] transition-colors">Agricultural Land</p>
              <p className="text-[11px] text-zinc-400">Fertile Acre Parcels</p>
            </div>
          </Link>
        </div>



        {/* Bottom Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0B0B0E] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-amber-500/25">
          <div>
            <span className="text-[#F5C542] text-xs font-bold uppercase tracking-wider block mb-1">
              Looking for land or property in Bulandshahr?
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold shine-gold-text">
              Speak Directly with Shree Maruti Nandan Properties
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1">
              Visit our office at Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr or schedule an accompanied physical site visit.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+919548974761"
              className="px-5 py-3 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shadow-amber-500/20"
            >
              Call +91 9548974761
            </a>
            <Link
              href="/contact"
              className="px-5 py-3 border border-white/20 hover:border-amber-500/40 text-zinc-200 hover:text-[#F5C542] rounded-xl text-xs sm:text-sm font-bold transition-all"
            >
              Get Office Directions
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
