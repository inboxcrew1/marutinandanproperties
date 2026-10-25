'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, MessageSquare, ArrowRight, Layers, CheckCircle2, Send, ShieldAlert, Sparkles, Filter } from 'lucide-react'
import { Property } from '@/types/property'
import PropertyCard from '@/components/property/PropertyCard'

interface BulandshahrHubListingsProps {
  properties: Property[]
}

export default function BulandshahrHubListings({ properties }: BulandshahrHubListingsProps) {
  const [selectedLocality, setSelectedLocality] = useState<'all' | 'Transport Nagar' | 'Ganga Nagar'>('all')
  const [selectedArea, setSelectedArea] = useState<string>('all')

  // Form State
  const [formName, setFormName] = useState('')
  const [formPhone, setFormPhone] = useState('')
  const [formPlot, setFormPlot] = useState(properties[0]?.id || 'SMNP-001')
  const [formMessage, setFormMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Filter listings
  const filteredListings = properties.filter((p) => {
    const matchLocality =
      selectedLocality === 'all' ||
      (p.location.locality || '').toLowerCase().includes(selectedLocality.toLowerCase())
    const matchArea =
      selectedArea === 'all' || p.area.value.toString() === selectedArea
    return matchLocality && matchArea
  })

  const transportNagarPlots = properties.filter((p) =>
    (p.location.locality || '').toLowerCase().includes('transport nagar')
  )

  const gangaNagarPlots = properties.filter((p) =>
    (p.location.locality || '').toLowerCase().includes('ganga nagar')
  )

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formPhone.trim()) return

    const selectedPlotObj = properties.find((p) => p.id === formPlot)
    const plotTitle = selectedPlotObj ? `${selectedPlotObj.title} (${selectedPlotObj.listingNumber || selectedPlotObj.id})` : formPlot
    const text = `Hello Shree Maruti Nandan Properties,%0A%0AMy Name: ${encodeURIComponent(formName || 'Prospective Buyer')}%0APhone: ${encodeURIComponent(formPhone)}%0AEnquiring About Plot: ${encodeURIComponent(plotTitle)}%0AMessage: ${encodeURIComponent(formMessage || 'Please share price quotation and arrange a site visit.')}`

    window.open(`https://wa.me/919548974761?text=${text}`, '_blank')
    setFormSubmitted(true)
  }

  return (
    <div className="space-y-16">
      {/* Header and Filter Controls */}
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5C542]/10 border border-[#F5C542]/20 text-[#F5C542] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={12} />
              <span>Verified Agency Inventory &bull; 7 Genuine Plots</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Available Plots in Bulandshahr
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-2xl font-light">
              Explore 7 genuine residential plot records across Transport Nagar and Ganga Nagar. All plot areas are documented in square metres with confirmed dimensions and road access.
            </p>
          </div>

          {/* Quick Locality Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => { setSelectedLocality('all'); setSelectedArea('all'); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedLocality === 'all'
                  ? 'bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] text-zinc-950 shadow-md'
                  : 'bg-[#18181F] text-zinc-300 hover:text-white border border-white/10'
              }`}
            >
              All Bulandshahr ({properties.length})
            </button>
            <button
              onClick={() => setSelectedLocality('Transport Nagar')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedLocality === 'Transport Nagar'
                  ? 'bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] text-zinc-950 shadow-md'
                  : 'bg-[#18181F] text-zinc-300 hover:text-white border border-white/10'
              }`}
            >
              Transport Nagar (5)
            </button>
            <button
              onClick={() => setSelectedLocality('Ganga Nagar')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedLocality === 'Ganga Nagar'
                  ? 'bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] text-zinc-950 shadow-md'
                  : 'bg-[#18181F] text-zinc-300 hover:text-white border border-white/10'
              }`}
            >
              Ganga Nagar (2)
            </button>
          </div>
        </div>

        {/* Secondary Filter by Plot Area */}
        <div className="p-4 bg-[#131317] rounded-2xl border border-white/10 flex flex-wrap items-center gap-3 text-xs mb-8">
          <div className="flex items-center gap-1.5 text-zinc-400 font-semibold mr-2">
            <Filter size={13} className="text-[#F5C542]" />
            <span>Filter by Plot Size:</span>
          </div>
          {['all', '54', '72', '200', '375'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedArea(size)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                selectedArea === size
                  ? 'bg-[#F5C542] text-zinc-950'
                  : 'bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {size === 'all' ? 'All Sizes' : `${size} m²`}
            </button>
          ))}
          {(selectedLocality !== 'all' || selectedArea !== 'all') && (
            <button
              onClick={() => { setSelectedLocality('all'); setSelectedArea('all'); }}
              className="ml-auto text-xs text-[#F5C542] hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Active Grid of Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredListings.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Organized Sections: Transport Nagar Section */}
      {selectedLocality === 'all' && (
        <div className="space-y-12">
          {/* Transport Nagar Spotlight */}
          <div className="p-6 sm:p-8 bg-[#101014] rounded-3xl border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F5C542] mb-1">
                  <MapPin size={13} />
                  <span>Agency Office Hub Location</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Transport Nagar Plots (5 Confirmed Records)
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                  Located near T.P. Nagar Gol Chakkar with road widths up to 24 metres and prime Divider Road connectivity.
                </p>
              </div>

              <Link
                href="/property-dealer-in-transport-nagar-bulandshahr"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#F5C542] border border-[#F5C542]/30 rounded-xl transition-colors self-start sm:self-auto"
              >
                <span>Explore Transport Nagar Micro-Market</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {transportNagarPlots.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>

          {/* Ganga Nagar Spotlight */}
          <div className="p-6 sm:p-8 bg-[#101014] rounded-3xl border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F5C542] mb-1">
                  <MapPin size={13} />
                  <span>Residential Colony Corridor</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Ganga Nagar Plots (2 Confirmed Records)
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                  Peaceful established residential colony on 9-metre wide roads with 72 m² and 200 m² plot sizes.
                </p>
              </div>

              <Link
                href="/property-dealer-in-ganga-nagar-bulandshahr"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#F5C542] border border-[#F5C542]/30 rounded-xl transition-colors self-start sm:self-auto"
              >
                <span>Explore Ganga Nagar Micro-Market</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {gangaNagarPlots.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Direct Plot Enquiry Form */}
      <section className="bg-gradient-to-br from-[#141419] to-[#0E0E12] p-6 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3 py-1 rounded-full">
              Transparent Dealings
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-3 mb-2">
              Enquire About Bulandshahr Plots
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-6">
              Connect directly with founders Manoj Kumar Tyagi and Ashish Chaudhary at Shree Maruti Nandan Properties. We verify registry status, road access, and physical possession before advancing discussions.
            </p>

            <div className="space-y-3 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#F5C542]" />
                <span>Head Office: Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#F5C542]" />
                <span>Direct Contact: +91 9548974761 / +91 9997837133</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#F5C542]" />
                <span>No Artificial Prices or Speculative Markups</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="tel:+919548974761"
                className="px-5 py-2.5 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] hover:brightness-105 text-zinc-950 rounded-xl text-xs font-bold transition-all shadow-md"
              >
                Call: +91 9548974761
              </a>
              <a
                href="https://wa.me/919548974761?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20want%20to%20enquire%20about%20plots%20in%20Bulandshahr."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] rounded-xl text-xs font-bold border border-[#25D366]/40 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#101014] p-6 sm:p-8 rounded-2xl border border-white/10">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="font-display text-xl font-bold text-white">Enquiry Initiated!</h4>
                <p className="text-xs text-zinc-300 max-w-md mx-auto">
                  Your enquiry has been dispatched directly to our WhatsApp desk. Our founders will respond with verified details and arrange a physical site visit.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-white/10 text-xs font-semibold text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#18181F] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#F5C542]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 95489XXXXX"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#18181F] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#F5C542]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Select Plot of Interest
                  </label>
                  <select
                    value={formPlot}
                    onChange={(e) => setFormPlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#18181F] border border-white/10 text-white text-xs focus:outline-none focus:border-[#F5C542]"
                  >
                    {properties.map((p) => (
                      <option key={p.id} value={p.id} className="bg-[#18181F] text-white">
                        {p.listingNumber || p.id} &bull; {p.title} ({p.area.value} m²)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Message / Preferred Visit Time
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Interested in inspecting this plot this Sunday. Please share current quotation and registry status."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#18181F] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#F5C542]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] hover:brightness-105 text-zinc-950 font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>Submit Direct Plot Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Internal SEO Locality Links */}
      <div className="pt-8 border-t border-white/10">
        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
          Related Bulandshahr Property Portals &amp; Micro-Markets:
        </h4>
        <div className="flex flex-wrap gap-2 text-xs">
          <Link
            href="/residential-plots-in-bulandshahr"
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-[#F5C542] border border-white/5 transition-colors"
          >
            Residential Plots in Bulandshahr
          </Link>
          <Link
            href="/property-dealer-in-transport-nagar-bulandshahr"
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-[#F5C542] border border-white/5 transition-colors"
          >
            Transport Nagar Property Dealer
          </Link>
          <Link
            href="/property-dealer-in-ganga-nagar-bulandshahr"
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-[#F5C542] border border-white/5 transition-colors"
          >
            Ganga Nagar Property Dealer
          </Link>
          <Link
            href="/property-dealer-in-bhoor-bulandshahr"
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-[#F5C542] border border-white/5 transition-colors"
          >
            Bhoor Chauraha Property Dealer
          </Link>
          <Link
            href="/property-dealer-in-civil-lines-bulandshahr"
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-[#F5C542] border border-white/5 transition-colors"
          >
            Civil Lines Bulandshahr Properties
          </Link>
          <Link
            href="/property-dealer-in-dm-road-bulandshahr"
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-[#F5C542] border border-white/5 transition-colors"
          >
            DM Road Bulandshahr Properties
          </Link>
          <Link
            href="/houses-for-sale-in-bulandshahr"
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-[#F5C542] border border-white/5 transition-colors"
          >
            Houses for Sale in Bulandshahr
          </Link>
          <Link
            href="/commercial-property-in-bulandshahr"
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-[#F5C542] border border-white/5 transition-colors"
          >
            Commercial Property in Bulandshahr
          </Link>
        </div>
      </div>
    </div>
  )
}
