import type { Metadata } from 'next'
import Link from 'next/link'
import { properties } from '@/lib/data/properties'
import PropertyCard from '@/components/property/PropertyCard'
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  Home,
  Layers,
  Building2,
  Users,
  Compass,
  ArrowRight,
  HelpCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Property Dealer in Bulandshahr | Shree Maruti Nandan Properties',
  description:
    'Looking for the best property dealer in Bulandshahr? Shree Maruti Nandan Properties offers trusted guidance for buying new houses, residential plots, shops, and land. Call +91 9548974761.',
  keywords: [
    'best property dealer in bulandshahr',
    'property dealer in bulandshahr',
    'buy new house property dealer in bulandshahr',
    'properties dealer in bulandshahr',
    'Shree maruti nandan properties bulandshahr',
    'Property Dealer Bulandshahr',
    'Best Property Dealer Bulandshahr',
    'Top Property Dealer in Bulandshahr',
    'Trusted Property Dealer in Bulandshahr',
    'Real Estate Agent in Bulandshahr',
    'Real Estate Agency in Bulandshahr',
    'Property Consultant in Bulandshahr',
    'Property Dealer Near Me',
    'Bulandshahr mein property dealer',
  ],
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/property-dealer-in-bulandshahr',
  },
}

const localFaqs = [
  {
    q: 'Why is Shree Maruti Nandan Properties considered the best property dealer in Bulandshahr?',
    a: 'Shree Maruti Nandan Properties provides end-to-end transparency, verified land registry checks, physical site visits, and personalized assistance led directly by Manoj Kumar Tyagi and Ashish Chaudhary from our office at Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr.',
  },
  {
    q: 'Bulandshahr mein property dealer ke through ghar ya plot kharidne ka kya fayda hai?',
    a: 'Local property dealers know the exact legal status of land, registry nuances, circle rates, and future development master plans. At Shree Maruti Nandan Properties, we protect your hard-earned investment by verifying clear titles, chain of deeds, and revenue records (Khatauni/Khasra) before you advance any token money.',
  },
  {
    q: 'Which areas in Bulandshahr do you deal in?',
    a: 'We specialize in residential, commercial, and agricultural properties across Bhoor Chauraha, Civil Lines, NH-34 Bypass, Transport Nagar, DM Road, Yamuna Expressway link road, and the upcoming industrial corridors towards Khurja.',
  },
  {
    q: 'How can I schedule a consultation or site visit in Bulandshahr?',
    a: 'You can directly call our founders at +91 9997837133 or +91 9548974761, or send a WhatsApp message. We will arrange a convenient time for an office meeting and physical site visit.',
  },
]

export default function PropertyDealerInBulandshahrPage() {
  const bulandshahrListings = properties.filter(
    (p) => p.location.city.toLowerCase() === 'bulandshahr'
  )

  const dealerSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Shree Maruti Nandan Properties - Property Dealer in Bulandshahr',
    image: 'https://shreemarutinandanproperties.com/images/about/office-outside.jpg',
    url: 'https://shreemarutinandanproperties.com/property-dealer-in-bulandshahr',
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
    founder: [
      { '@type': 'Person', name: 'Manoj Kumar Tyagi' },
      { '@type': 'Person', name: 'Ashish Chaudhary' },
    ],
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
    ],
  }

  return (
    <div className="min-h-screen bg-[#0B0B0E] pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dealerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-[#0E0E12] border-b border-white/10 text-white py-12 sm:py-16 lg:py-20 mb-12 overflow-hidden">
        {/* Background Image: Bulandshahr Landmarks with subtle gradient overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/bulandshahr-landmarks.jpg"
            alt="Bulandshahr Landmarks Background"
            className="w-full h-full object-cover object-center scale-105 filter blur-[1px] opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E] via-[#0B0B0E]/90 to-[#0B0B0E]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-4" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#F5C542] transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#F5C542]">Property Dealer in Bulandshahr</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5C542]/15 border border-[#F5C542]/30 text-[#F5C542] text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin size={13} />
                <span>Bulandshahr, Uttar Pradesh &bull; T.P. Nagar &amp; Bhoor Chauraha</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
                Best Property Dealer in Bulandshahr <br className="hidden sm:inline" />
                <span className="text-[#F5C542]">Shree Maruti Nandan Properties</span>
              </h1>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-2xl">
                Are you searching for a reliable, professional, and trusted property dealer in Bulandshahr? 
                Shree Maruti Nandan Properties helps families and investors buy new houses, residential plots, commercial shops, and agricultural land with transparent paperwork and zero guesswork.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                <a
                  href="tel:+919548974761"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] hover:brightness-105 text-zinc-950 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
                >
                  <Phone size={15} />
                  <span>Call Dealer: +91 9548974761</span>
                </a>

                <a
                  href="https://wa.me/919548974761?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20am%20looking%20for%20a%20property%20dealer%20in%20Bulandshahr."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] rounded-xl text-xs sm:text-sm font-semibold border border-[#25D366]/30 transition-colors"
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#F5C542]" />
                  <span>100% Registry Verified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#F5C542]" />
                  <span>T.P. Nagar Office</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#F5C542]" />
                  <span>Direct Owner Deals</span>
                </div>
              </div>
            </div>

            {/* Right Column: Prominent Bulandshahr Landmarks Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F5C542]/30 via-amber-500/20 to-[#D4AF37]/30 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-[#F5C542]/40 bg-[#141419] shadow-2xl">
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-black/40">
                    <img
                      src="/images/bulandshahr-landmarks.jpg"
                      alt="Bulandshahr Landmarks - Clock Tower, Chandrakala Devi Temple, Narora Dam, Railway Station, DM Road, Awas Vikas, Ganga Nagar"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="font-semibold text-white drop-shadow">Bulandshahr Key Hubs &amp; Landmarks</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#F5C542] text-zinc-950 font-bold text-[10px] uppercase tracking-wider">Local Heritage</span>
                    </div>
                  </div>
                  <div className="p-3 bg-[#121217] border-t border-white/5 text-[11px] text-zinc-400 flex items-center justify-between">
                    <span>Clock Tower &bull; DM Road &bull; Bhoor &bull; Awas Vikas</span>
                    <span className="text-[#F5C542] font-semibold">T.P. Nagar Gol Chakkar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Core Services Spotlight */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Comprehensive Real Estate Services in Bulandshahr
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              From finding your dream family home to securing high-appreciation commercial land, we handle your property journey from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#131317] border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-[#F5C542] flex items-center justify-center mb-4">
                <Home size={24} />
              </div>
              <h3 className="font-bold text-base text-white mb-2">Buy New House</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Independent houses, kothis, and modern residential floors in prime colonies including Civil Lines and Bhoor Chauraha.
              </p>
              <Link href="/houses-for-sale-in-bulandshahr" className="inline-flex items-center gap-1 text-xs text-[#F5C542] font-semibold mt-4 hover:underline">
                Explore Houses <ArrowRight size={13} />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#131317] border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-[#F5C542] flex items-center justify-center mb-4">
                <Layers size={24} />
              </div>
              <h3 className="font-bold text-base text-white mb-2">Residential Plots</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Clear-title freehold residential plots in 100, 150, 200, and 300 Gaj dimensions with wide road access and electricity.
              </p>
              <Link href="/residential-plots-in-bulandshahr" className="inline-flex items-center gap-1 text-xs text-[#F5C542] font-semibold mt-4 hover:underline">
                Explore Plots <ArrowRight size={13} />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#131317] border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-[#F5C542] flex items-center justify-center mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="font-bold text-base text-white mb-2">Commercial Properties</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Retail shops, godowns, and commercial showroom plots in Transport Nagar and along the NH-34 Bulandshahr Bypass.
              </p>
              <Link href="/commercial-property-in-bulandshahr" className="inline-flex items-center gap-1 text-xs text-[#F5C542] font-semibold mt-4 hover:underline">
                Explore Commercial <ArrowRight size={13} />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#131317] border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-[#F5C542] flex items-center justify-center mb-4">
                <Compass size={24} />
              </div>
              <h3 className="font-bold text-base text-white mb-2">Agricultural Land</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Fertile farmland parcels and long-term agricultural investments across the Bulandshahr rural belt with clear revenue records.
              </p>
              <Link href="/plots-land" className="inline-flex items-center gap-1 text-xs text-[#F5C542] font-semibold mt-4 hover:underline">
                Explore Land <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* Current Verified Listings in Bulandshahr */}
        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Available Properties in Bulandshahr
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Verified listings currently available for inspection and direct purchase.
              </p>
            </div>
            <Link
              href="/properties?city=Bulandshahr"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#F5C542] text-xs font-semibold text-zinc-200 hover:text-[#F5C542] transition-colors"
            >
              <span>View All Bulandshahr Listings</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bulandshahrListings.slice(0, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* Primary Neighbourhood Hubs */}
        <section className="bg-[#101014] rounded-3xl border border-white/10 p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3 py-1 rounded-full">
              Local Micro-Markets
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-3 mb-2">
              Explore Top Neighbourhoods &amp; Corridors in Bulandshahr
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Shree Maruti Nandan Properties specializes in verified property transactions across these prominent localities:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            <Link
              href="/property-dealer-in-transport-nagar-bulandshahr"
              className="group p-5 bg-[#131317] hover:bg-[#18181F] rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#F5C542]">Agency Head Office</span>
                <ArrowRight size={15} className="text-zinc-500 group-hover:text-[#F5C542] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-display text-lg font-bold text-white group-hover:text-[#F5C542] transition-colors mb-2">
                Transport Nagar (T.P. Nagar)
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Bulandshahr central commercial, logistics, and automobile trading hub on NH-34. Prime commercial shops, showrooms, and warehouse spaces.
              </p>
            </Link>

            <Link
              href="/property-dealer-in-bhoor-bulandshahr"
              className="group p-5 bg-[#131317] hover:bg-[#18181F] rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#F5C542]">Prime Junction</span>
                <ArrowRight size={15} className="text-zinc-500 group-hover:text-[#F5C542] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-display text-lg font-bold text-white group-hover:text-[#F5C542] transition-colors mb-2">
                Bhoor &amp; Bhoor Chauraha
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                The city most prominent residential and connectivity node connecting to Delhi Road. Independent kothis, houses, and freehold 100-300 Gaj plots.
              </p>
            </Link>

            <Link
              href="/property-dealer-in-civil-lines-bulandshahr"
              className="group p-5 bg-[#131317] hover:bg-[#18181F] rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#F5C542]">Upscale Residential</span>
                <ArrowRight size={15} className="text-zinc-500 group-hover:text-[#F5C542] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-display text-lg font-bold text-white group-hover:text-[#F5C542] transition-colors mb-2">
                Civil Lines
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Bulandshahr most prestigious colonial enclave near government courts and leading institutions. High-end modern builder floors and houses.
              </p>
            </Link>

            <Link
              href="/property-dealer-in-dm-road-bulandshahr"
              className="group p-5 bg-[#131317] hover:bg-[#18181F] rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#F5C542]">Administrative Arterial</span>
                <ArrowRight size={15} className="text-zinc-500 group-hover:text-[#F5C542] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-display text-lg font-bold text-white group-hover:text-[#F5C542] transition-colors mb-2">
                DM Road &amp; Yamunapuram
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Broad arterial avenue housing hospitals, banks, and planned colonies like Yamunapuram. Excellent for commercial offices and gated homes.
              </p>
            </Link>

            <Link
              href="/property-dealer-in-ganga-nagar-bulandshahr"
              className="group p-5 bg-[#131317] hover:bg-[#18181F] rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#F5C542]">Planned Colony</span>
                <ArrowRight size={15} className="text-zinc-500 group-hover:text-[#F5C542] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-display text-lg font-bold text-white group-hover:text-[#F5C542] transition-colors mb-2">
                Ganga Nagar &amp; Awas Vikas
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Established family communities with serene residential lanes, parks, and schools. Freehold plots and ready-to-move builder floors.
              </p>
            </Link>

            <div className="p-5 bg-[#131317] rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#F5C542]">Highway Corridors</span>
                <h3 className="font-display text-lg font-bold text-white mt-1 mb-2">
                  NH-34 Bypass &amp; Radial Roads
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Fast-developing commercial corridors along Delhi Road, Khurja Road, Siyana Road, and Shikarpur Road with high appreciation potential.
                </p>
              </div>
              <div className="pt-3">
                <a
                  href="tel:+919548974761"
                  className="inline-flex items-center gap-1.5 text-xs text-[#F5C542] font-semibold hover:underline"
                >
                  <Phone size={13} />
                  <span>Call Us for Highway Land Inquiries</span>
                </a>
              </div>
            </div>
          </div>

          {/* Micro-market index table */}
          <div className="p-5 bg-[#131317] rounded-2xl border border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
              Prominent Colonies &amp; Arterial Road Corridors in Bulandshahr
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-[11px] text-zinc-400">
              <span className="p-2 bg-[#18181F] rounded-lg">Kala Aam Chowk</span>
              <span className="p-2 bg-[#18181F] rounded-lg">Ansari Road Market</span>
              <span className="p-2 bg-[#18181F] rounded-lg">Railway Road Belt</span>
              <span className="p-2 bg-[#18181F] rounded-lg">Delhi Road NH-34</span>
              <span className="p-2 bg-[#18181F] rounded-lg">Khurja Road Corridor</span>
              <span className="p-2 bg-[#18181F] rounded-lg">Shikarpur Road</span>
              <span className="p-2 bg-[#18181F] rounded-lg">Siyana Road Corridor</span>
              <span className="p-2 bg-[#18181F] rounded-lg">Agra Road Junction</span>
              <span className="p-2 bg-[#18181F] rounded-lg">Awas Vikas Colony</span>
              <span className="p-2 bg-[#18181F] rounded-lg">Shivpuri &amp; Laxmi Nagar</span>
              <span className="p-2 bg-[#18181F] rounded-lg">Radha Nagar &amp; Shastri Nagar</span>
              <span className="p-2 bg-[#18181F] rounded-lg">Devipura &amp; Moti Bagh</span>
            </div>
          </div>
        </section>

        {/* Bulandshahr Landmark Showcase */}
        <section className="bg-[#101014] rounded-3xl border border-white/10 p-6 sm:p-10">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3 py-1 rounded-full">
              Heritage &amp; Infrastructure
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-3 mb-2">
              Bulandshahr: History, Culture &amp; Growth
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              From the historic Clock Tower and Chandrakala Devi Temple to modern corridors along DM Road, Delhi Road, and Awas Vikas Colony, Bulandshahr is evolving rapidly with prime real estate potential.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/images/bulandshahr-landmarks.jpg"
              alt="Bulandshahr Landmarks - Clock Tower, DM Road, Awas Vikas, Chandrakala Devi Temple, Railway Station"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Why Choose Us & Hindi Buyer Guidance */}
        <section className="bg-[#131317] rounded-3xl border border-white/10 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Bulandshahr Mein Sahi Property Dealer Kaise Chune?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                Bulandshahr mein naya makaan, residential plot ya zameen khareedna ek bada faisla hai. Ek achha property dealer chunne se aapke paise aur samay dono bachte hain:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <span><strong>Asli Registry aur Title Check:</strong> Property ki registry, Khasra-Khatauni aur purane bainame ki puri jaanch.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Buyer-Seller Meeting:</strong> Beech ka koi fake mark-up nahi. Direct aamne-saamne baithkar rate negotiation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <span><strong>Site Par Mauka Inspection:</strong> Plot ka front, road ki chaudai, bijli aur paani ki suvidha ka physical survey.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <span><strong>Sub-Registrar Office Assistance:</strong> Bulandshahr registry office mein dastavej taiyar karne aur stamp duty ki guidance.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#18181F] rounded-2xl border border-amber-500/20 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542]">Our Office Location</span>
                <h3 className="font-display text-xl font-bold text-white mt-1 mb-3">
                  Shree Maruti Nandan Properties
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mb-4 leading-relaxed">
                  Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr, Uttar Pradesh - 203001
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-zinc-300 mb-6">
                  <div><strong>Founders:</strong> Manoj Kumar Tyagi &amp; Ashish Chaudhary</div>
                  <div><strong>Phone:</strong> +91 9997837133 / +91 9548974761</div>
                  <div><strong>Timing:</strong> Monday to Sunday, 9:00 AM - 8:00 PM</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <a
                  href="tel:+919548974761"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F5C542] hover:brightness-110 text-zinc-950 font-bold rounded-xl text-xs transition-all text-center"
                >
                  <Phone size={14} />
                  <span>Call Us Directly</span>
                </a>
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs transition-all text-center"
                >
                  <span>Visit Contact Page</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Local FAQs */}
        <section>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Questions About Property Dealers in Bulandshahr
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Clear answers to help you navigate property transactions with confidence.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {localFaqs.map((faq, idx) => (
              <div key={idx} className="bg-[#131317] rounded-2xl border border-white/10 p-5 sm:p-6">
                <h3 className="font-semibold text-sm sm:text-base text-zinc-100 mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
