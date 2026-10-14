import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Building2,
  MapPin,
  Phone,
  MessageSquare,
  ShieldCheck,
  Compass,
  CheckCircle2,
  Layers,
  Trees,
  Briefcase,
  ArrowRight,
  Users,
  Award,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Shree Maruti Nandan Properties | Bulandshahr',
  description:
    'Learn about Shree Maruti Nandan Properties, managed by Manoj Kumar Tyagi and Ashish Chaudhary at Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr. Trusted property dealer for houses, plots, and commercial land.',
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0E] pt-24 pb-20 text-zinc-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3.5 py-1.5 rounded-full mb-4">
            <Building2 size={13} />
            <span>Real Estate Agency &amp; Property Consultant</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold shine-gold-text leading-tight">
            About Shree Maruti Nandan Properties
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
            A professional real estate consultancy helping clients navigate residential, commercial, 
            and agricultural property decisions with local expertise, transparency, and personal attention.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5 font-medium text-zinc-200">
              <MapPin size={14} className="text-[#F5C542]" />
              Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr (U.P.)
            </span>
            <span className="text-zinc-600">&bull;</span>
            <span className="flex items-center gap-1.5 font-medium text-zinc-200">
              <Phone size={14} className="text-[#F5C542]" />
              +91 9997837133 / 9548974761
            </span>
          </div>
        </div>

        {/* Real Office & Founder Showcase (User Photos Only Used Here) */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3 py-1 rounded-full">
              Authentic Presence
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold shine-gold-text mt-2">
              Our Leadership &amp; Physical Office
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Visit our established physical office in Bulandshahr for direct, one-on-one property discussions with the founders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* 1. Owners Picture */}
            <div className="bg-[#131317] rounded-3xl overflow-hidden border border-white/10 shadow-xl flex flex-col">
              <div className="relative h-[360px] sm:h-[420px] w-full bg-zinc-900 overflow-hidden">
                <Image
                  src="/images/about/owners.jpg"
                  alt="Manoj Kumar Tyagi and Ashish Chaudhary - Founders & Leadership of Shree Maruti Nandan Properties"
                  fill
                  className="object-cover object-center hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="p-6 bg-[#131317] border-t border-white/10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#F5C542] mb-1">
                    <Users size={12} />
                    <span>Agency Leadership</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Manoj Kumar Tyagi &amp; Ashish Chaudhary
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed font-light">
                    As the founders and directors of <strong>Shree Maruti Nandan Properties</strong>, 
                    <strong> Manoj Kumar Tyagi</strong> and <strong>Ashish Chaudhary</strong> offer transparent, 
                    client-first real estate advisory. Every inquiry receives direct partner involvement, from site selection 
                    to document verification and price negotiation.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <span>Contact: +91 9997837133 / 9548974761</span>
                  <a href="tel:+919997837133" className="font-semibold text-[#F5C542] hover:underline">
                    Direct Call &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Outside Office Picture */}
            <div className="bg-[#131317] rounded-3xl overflow-hidden border border-white/10 shadow-xl flex flex-col">
              <div className="relative h-[360px] sm:h-[420px] w-full bg-zinc-900 overflow-hidden">
                <Image
                  src="/images/about/office-outside.jpg"
                  alt="Shree Maruti Nandan Properties Exterior & Storefront at Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr"
                  fill
                  className="object-cover object-center hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="p-6 bg-[#131317] border-t border-white/10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#F5C542] mb-1">
                    <MapPin size={12} />
                    <span>Physical Storefront &amp; Landmark</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Office Storefront &amp; Location
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed font-light">
                    Conveniently located at <strong>Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr</strong>. 
                    Strategically positioned for convenient site tours across Bulandshahr city, the highway bypass, 
                    Greater Noida expressway, and Khurja industrial belt.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <span>Location: Bulandshahr (U.P.)</span>
                  <a
                    href="https://maps.google.com/?q=T.P.+Nagar+Gol+Chakkar+Bulandshahr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#F5C542] hover:underline"
                  >
                    View on Map &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Consultation Meeting Picture */}
            <div className="bg-[#131317] rounded-3xl overflow-hidden border border-white/10 shadow-xl flex flex-col">
              <div className="relative h-[320px] sm:h-[380px] w-full bg-zinc-900 overflow-hidden">
                <Image
                  src="/images/about/consultation-meeting.jpg"
                  alt="Active Property Consultation Meeting with Clients at Shree Maruti Nandan Properties"
                  fill
                  className="object-cover object-center hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-[#131317] border-t border-white/10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#F5C542] mb-1">
                    <ShieldCheck size={12} />
                    <span>Client Consultations</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Personalized Property Advisory
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed font-light">
                    We host detailed, one-on-one sessions analyzing master plans, circle rates, registry procedures, 
                    and valuation metrics to protect your capital and ensure clear title transactions.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <span>In-Person Discussions</span>
                  <Link href="/contact" className="font-semibold text-[#F5C542] hover:underline">
                    Schedule Visit &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. Inside Office Picture */}
            <div className="bg-[#131317] rounded-3xl overflow-hidden border border-white/10 shadow-xl flex flex-col">
              <div className="relative h-[320px] sm:h-[380px] w-full bg-zinc-900 overflow-hidden">
                <Image
                  src="/images/about/office-inside.jpg"
                  alt="Shree Maruti Nandan Properties Office Reception & Interior View"
                  fill
                  className="object-cover object-center hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-[#131317] border-t border-white/10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#F5C542] mb-1">
                    <Building2 size={12} />
                    <span>Office Interior</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Office Reception &amp; Welcome Desk
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed font-light">
                    A welcoming environment equipped with property documentation archives, maps, and private meeting zones 
                    where buyers, sellers, and investors can discuss opportunities in total confidence.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <span>Deals In: Bulandshahr, Greater Noida, Khurja</span>
                  <a href="tel:+919997837133" className="font-semibold text-[#F5C542] hover:underline">
                    Call Office &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Introduction & Scope */}
        <div id="agency" className="bg-[#131317] rounded-3xl border border-white/10 p-8 sm:p-14 shadow-xl mb-20">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3 py-1 rounded-full">
              Agency Overview
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold shine-gold-text mt-3 mb-6">
              Professional Real Estate Assistance Across Sectors
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                <strong>Shree Maruti Nandan Properties</strong> is a Bulandshahr-based real estate agency 
                and property consultancy helping clients explore residential, commercial, and agricultural properties.
              </p>
              <p>
                Our role is to provide property consultation and assistance throughout the property discovery and transaction 
                process. We help clients evaluate suitable locations, arrange physical inspections, understand on-ground 
                infrastructure such as road width, water and electricity connectivity, and communicate directly with property 
                owners and sellers.
              </p>
              <p>
                Whether you are seeking a residential plot to construct a home in Bulandshahr, looking for fertile agricultural 
                land parcels, or exploring commercial shops, showrooms, or modern apartments in Greater Noida and Khurja, 
                our agency offers straightforward, responsive, and trustworthy support.
              </p>
            </div>
          </div>

          {/* Core Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/10">
            <div className="p-5 bg-[#0E0E12] rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center mb-3">
                <Compass size={20} />
              </div>
              <h4 className="font-display font-bold text-base text-white mb-1">
                Property Discovery
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Discovering properties matched to your budget, desired dimensions (Gaj, sq ft, Acres), and locality preferences.
              </p>
            </div>

            <div className="p-5 bg-[#0E0E12] rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center mb-3">
                <Layers size={20} />
              </div>
              <h4 className="font-display font-bold text-base text-white mb-1">
                Residential &amp; Commercial
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Comprehensive support for independent houses, builder floors, flats, retail shops, showrooms, and office spaces.
              </p>
            </div>

            <div className="p-5 bg-[#0E0E12] rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center mb-3">
                <Trees size={20} />
              </div>
              <h4 className="font-display font-bold text-base text-white mb-1">
                Plots &amp; Agricultural Land
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Careful verification of plot dimensions, corner status, approach roads, irrigation, and revenue registry documentation.
              </p>
            </div>
          </div>
        </div>

        {/* Agency Contact & Consultation CTA */}
        <div className="bg-gradient-to-br from-[#101014] via-[#14141A] to-[#0A0A0D] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[#F5C542] text-xs font-bold uppercase tracking-wider block mb-1">
              Connect With Us Today
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold shine-gold-text">
              Ready to Discuss Your Property Plans?
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-xl font-light">
              Visit our office at Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr or reach out directly to Manoj Kumar Tyagi &amp; Ashish Chaudhary for immediate guidance.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <span><strong>Phone:</strong> +91 9997837133 / +91 9548974761</span>
              <span>&bull;</span>
              <span><strong>Location:</strong> Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr (U.P.)</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <a
              href="tel:+919997837133"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shadow-amber-500/20"
            >
              <Phone size={15} />
              <span>Call +91 9997837133</span>
            </a>

            <a
              href="https://wa.me/919997837133?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20would%20like%20to%20request%20a%20property%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl text-xs sm:text-sm font-semibold border border-white/20 transition-colors"
            >
              <MessageSquare size={15} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
