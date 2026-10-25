import type { Metadata } from 'next'
import { Suspense } from 'react'
import { properties } from '@/lib/data/properties'
import PropertySearchResults from '@/components/search/PropertySearchResults'

export const metadata: Metadata = {
  title: 'Plots & Land for Sale | Residential & Agricultural | Shree Maruti Nandan Properties',
  description:
    'Search residential plots in Bulandshahr, agricultural farm land, and commercial plots with measurements in Gaj, Acres, and Sq Ft with Shree Maruti Nandan Properties.',
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/plots-land',
  },
}

export default function PlotsLandPage() {
  const landProperties = properties.filter(
    (p) => p.category === 'land' || p.category === 'industrial'
  )

  return (
    <div className="min-h-screen bg-[#0B0B0E] pt-20">
      <Suspense fallback={<div className="max-w-[1440px] mx-auto p-12 text-center text-sm text-zinc-400">Loading land &amp; plots...</div>}>
        <PropertySearchResults
          initialProperties={landProperties}
          title="Plots &amp; Land in Bulandshahr"
          subtitle="Explore verified residential plots in Transport Nagar and Ganga Nagar, Bulandshahr with confirmed dimensions and road access."
          defaultCategory="land"
        />
      </Suspense>
    </div>
  )
}
