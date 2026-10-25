import type { Metadata } from 'next'
import { Suspense } from 'react'
import { properties } from '@/lib/data/properties'
import PropertySearchResults from '@/components/search/PropertySearchResults'

export const metadata: Metadata = {
  title: 'Plots & Properties for Sale in Bulandshahr | Shree Maruti Nandan Properties',
  description:
    'Browse verified residential plots in Transport Nagar and Ganga Nagar, Bulandshahr with confirmed dimensions and road access. Call +91 9548974761.',
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
          title="Verified Plots & Properties in Bulandshahr"
          subtitle="Explore genuine residential plot records in Transport Nagar and Ganga Nagar with verified dimensions and road widths."
        />
      </Suspense>
    </div>
  )
}
