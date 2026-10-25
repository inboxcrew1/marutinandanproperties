import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import AgencyIntro from '@/components/home/AgencyIntro'
import PropertyTypeGrid from '@/components/home/PropertyTypeGrid'
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
      {/* 2 & 3: Cinematic Hero & Property Search */}
      <HeroSection />

      {/* 4: Intro to Shree Maruti Nandan Properties ("Your Local Property Partner") */}
      <AgencyIntro />

      {/* 5: Property Categories */}
      <PropertyTypeGrid />

      {/* 6: Featured Properties (3 Genuine Bulandshahr Listings) */}
      <FeaturedProperties />

      {/* 7: Bulandshahr Micro-Markets & Agency Focus */}
      <BulandshahrFocus />

      {/* 8: Explore Bulandshahr Micro-Markets */}
      <ExploreByLocation />

      {/* 13: Why Choose Shree Maruti Nandan Properties */}
      <WhyUsSection />

      {/* 14: Property Buying/Selling Services */}
      <ServicesOverview />

      {/* 15: How It Works */}
      <HowItWorks />

      {/* 16: Local Expertise */}
      <LocalExpertise />

      {/* 17: Local FAQs & Schema Markup */}
      <HomeFAQ />

      {/* 18: Contact CTA */}
      <ContactCTASection />
    </div>
  )
}
