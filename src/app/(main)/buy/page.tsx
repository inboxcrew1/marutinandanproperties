import type { Metadata } from 'next'
import { Suspense } from 'react'
import { properties } from '@/lib/data/properties'
import PropertySearchResults from '@/components/search/PropertySearchResults'

export const metadata: Metadata = {
  title: 'Properties for Sale in Bulandshahr & NCR | Buy Houses & Plots | Shree Maruti Nandan Properties',
  description:
    'Browse verified properties for sale. Buy residential plots, houses, independent kothis, and commercial real estate in Bulandshahr and NCR with Shree Maruti Nandan Properties.',
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/buy',
  },
}

export default function BuyPage() {
  const saleProperties = properties.filter((p) => p.listingType === 'sale')

  return (
    <div className="min-h-screen bg-[#0B0B0E] pt-20">
      <Suspense fallback={<div className="max-w-[1440px] mx-auto p-12 text-center text-sm text-zinc-400">Loading properties for sale...</div>}>
        <PropertySearchResults
          initialProperties={saleProperties}
          title="Properties for Sale"
          subtitle="Discover verified freehold plots, luxury apartments, and independent homes with clear legal titles."
          defaultListingType="sale"
        />
      </Suspense>
    </div>
  )
}
