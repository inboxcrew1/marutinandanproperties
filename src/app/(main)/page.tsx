import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import AgencyIntro from '@/components/home/AgencyIntro'
import FeaturedProperties from '@/components/home/FeaturedProperties'
import BulandshahrFocus from '@/components/home/BulandshahrFocus'
import ExploreByLocation from '@/components/home/ExploreByLocation'
import WhyUsSection from '@/components/home/WhyUsSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import HowItWorks from '@/components/home/HowItWorks'
import LocalExpertise from '@/components/home/LocalExpertise'
import HomeFAQ from '@/components/home/HomeFAQ'
import ContactCTASection from '@/components/home/ContactCTASection'

export const metadata: Metadata = {
  title: {
    absolute: 'Property Dealer in Bulandshahr | Shree Maruti Nandan Properties',
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
    'Property Dealers in Bulandshahr',
    'Top Property Dealer in Bulandshahr',
    'Trusted Property Dealer in Bulandshahr',
    'Real Estate Agent in Bulandshahr',
    'Property Consultant in Bulandshahr',
    'Plots for sale in Bulandshahr',
    'Houses for sale in Bulandshahr',
    'Buy New House in Bulandshahr',
    'Residential Plot in Bulandshahr',
    'Commercial Property in Bulandshahr',
    'Bhoor Chauraha Bulandshahr property',
    'Transport Nagar Bulandshahr',
  ],
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/',
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1: Hero & Property Search */}
      <HeroSection />

      {/* 2: About the Agency: Shree Maruti Nandan Properties */}
      <AgencyIntro />

      {/* 3: Featured Properties in Bulandshahr (3 Genuine Listings) */}
      <FeaturedProperties />

      {/* 4: Bulandshahr Micro-Markets & Agency Focus */}
      <BulandshahrFocus />

      {/* 5: Explore Bulandshahr Micro-Markets */}
      <ExploreByLocation />

      {/* 6: Why Choose Shree Maruti Nandan Properties */}
      <WhyUsSection />

      {/* 7: Property Buying/Selling Services */}
      <ServicesOverview />

      {/* 8: How It Works */}
      <HowItWorks />

      {/* 9: Local Expertise */}
      <LocalExpertise />

      {/* 10: Local FAQs & Schema Markup */}
      <HomeFAQ />

      {/* 11: Contact CTA */}
      <ContactCTASection />
    </div>
  )
}
