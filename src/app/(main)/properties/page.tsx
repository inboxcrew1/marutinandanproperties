import type { Metadata } from 'next'
import { Suspense } from 'react'
import { properties } from '@/lib/data/properties'
import PropertySearchResults from '@/components/search/PropertySearchResults'

export const metadata: Metadata = {
  title: 'Property Listings in Bulandshahr & NCR | Shree Maruti Nandan Properties',
  description:
    'Browse verified property listings including residential houses, plots, agricultural land, and commercial spaces in Bulandshahr and NCR with Shree Maruti Nandan Properties.',
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/properties',
  },
}

export default function PropertiesSearchPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0E] pt-20">
      <Suspense fallback={<div className="max-w-[1440px] mx-auto p-12 text-center text-sm text-zinc-400">Loading properties...</div>}>
        <PropertySearchResults
          initialProperties={properties}
          title="All Property Listings"
          subtitle="Discover verified plots, apartments, independent houses, land parcels, and commercial spaces."
        />
      </Suspense>
    </div>
  )
}
