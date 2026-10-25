import type { Metadata } from 'next'
import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import PropertyCard from '@/components/property/PropertyCard'
import {
  Layers,
  MapPin,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Compass,
  ArrowRight,
  Calculator,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Plots in Bulandshahr | Plots for Sale | Shree Maruti Nandan Properties',
  description:
    'Find verified residential plots for sale in Bulandshahr with Shree Maruti Nandan Properties. Plots in Transport Nagar and Ganga Nagar with clear road access. Call +91 9548974761.',
  keywords: [
    'residential plot in bulandshahr',
    'residential plots in bulandshahr',
    'plot for sale in bulandshahr',
    'plots for sale in bulandshahr',
    'buy plot in bulandshahr',
    'buy residential plot in bulandshahr',
    'land for sale in bulandshahr',
    'property plot dealer in bulandshahr',
    'best residential plot dealer in bulandshahr',
    'Shree maruti nandan properties bulandshahr',
    'Bulandshahr mein plot kharidna hai',
    'Bulandshahr mein zameen kharidni hai',
  ],
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/residential-plots-in-bulandshahr',
  },
}

export default function ResidentialPlotsInBulandshahrPage() {
  const plotListings = properties.filter(
    (p) =>
      p.location.city.toLowerCase() === 'bulandshahr' &&
      (p.subcategory === 'plot' || p.category === 'land')
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
        name: 'Residential Plots in Bulandshahr',
        item: 'https://shreemarutinandanproperties.com/residential-plots-in-bulandshahr',
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
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80"
            alt="Residential Plots in Bulandshahr"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#F5C542] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#F5C542]">Residential Plots in Bulandshahr</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5C542]/15 border border-[#F5C542]/30 text-[#F5C542] text-xs font-bold uppercase tracking-wider mb-4">
              <Layers size={13} />
              <span>Freehold Plots &bull; Clear Titles &bull; 100 to 500+ Gaj</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              Residential Plots in Bulandshahr <br className="hidden sm:inline" />
              <span className="text-[#F5C542]">Plots for Sale with Clear Registry</span>
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-2xl">
              Discover verified residential plots for sale across Bulandshahr prime sectors. 
              Whether you need 100 Gaj for a personal home or larger investment parcels near Bhoor Chauraha and NH-58, we ensure clear mutation, boundary demarcation, and legal safety.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="tel:+919548974761"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] hover:brightness-105 text-zinc-950 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <Phone size={15} />
                <span>Call Plot Specialist: +91 9548974761</span>
              </a>

              <a
                href="https://wa.me/919548974761?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20am%20interested%20in%20residential%20plots%20in%20Bulandshahr."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] rounded-xl text-xs sm:text-sm font-semibold border border-[#25D366]/30 transition-colors"
              >
                <MessageSquare size={15} />
                <span>WhatsApp Plot Details</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Plots Grid */}
        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Available Plots for Sale in Bulandshahr
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Corner plots, gated enclave plots, and investment land ready for immediate site visit.
              </p>
            </div>
            <Link
              href="/plots-land"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#F5C542] text-xs font-semibold text-zinc-200 hover:text-[#F5C542] transition-colors"
            >
              <span>View All Plots &amp; Land</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plotListings.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Plot Buying & Gaj Conversion Guide */}
        <section className="bg-[#131317] rounded-3xl border border-white/10 p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Bulandshahr Plot Buying &amp; Verification Guide
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Understanding land units, documentation, and demarcation rules in Uttar Pradesh:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#18181F] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#F5C542] flex items-center justify-center mb-3">
                <Calculator size={20} />
              </div>
              <h3 className="font-bold text-sm text-white mb-2">Gaj vs Sq. Ft Measurement</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                In Bulandshahr, plots are traditionally measured in &quot;Gaj&quot; (Square Yards). 1 Gaj = 9 Square Feet. A standard 100 Gaj plot equals 900 Sq. Ft, 150 Gaj = 1350 Sq. Ft, and 200 Gaj = 1800 Sq. Ft.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#18181F] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#F5C542] flex items-center justify-center mb-3">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-sm text-white mb-2">Section 143 Non-Agri Status</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                If the land was originally agricultural, ensure Section 143 (UP Zamindari Abolition / UP Revenue Code) non-agricultural order has been passed so you can construct a house legally.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#18181F] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#F5C542] flex items-center justify-center mb-3">
                <Compass size={20} />
              </div>
              <h3 className="font-bold text-sm text-white mb-2">Pillar Demarcation &amp; Frontage</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Always verify on-site pillar boundaries (Medh/Hadd-bandi), front road width (minimum 25-30 ft recommended), and clear approach road rights before making payments.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-400">
              Want a physical site visit to available plots near Bhoor Chauraha or NH-58?
            </p>
            <div className="flex items-center gap-3">
              <a
                href="tel:+919997837133"
                className="px-5 py-2.5 bg-[#F5C542] text-zinc-950 font-bold rounded-xl text-xs hover:brightness-110 transition-all"
              >
                Call: +91 9997837133
              </a>
              <a
                href="https://wa.me/919997837133?text=Please%20share%20Bulandshahr%20plot%20locations%20and%20rates."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-semibold rounded-xl text-xs hover:bg-[#25D366]/30 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
