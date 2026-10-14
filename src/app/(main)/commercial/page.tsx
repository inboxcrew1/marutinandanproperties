import type { Metadata } from 'next'
import { Suspense } from 'react'
import { properties } from '@/lib/data/properties'
import PropertySearchResults from '@/components/search/PropertySearchResults'

export const metadata: Metadata = {
  title: 'Commercial Properties for Sale & Rent | Shops & Offices | Shree Maruti Nandan Properties',
  description:
    'Discover commercial retail shops, highway showrooms, office spaces, and warehouse plots in Bulandshahr and NCR with Shree Maruti Nandan Properties.',
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/commercial',
  },
}

export default function CommercialPage() {
  const commercialProperties = properties.filter((p) => p.category === 'commercial')

  return (
    <div className="min-h-screen bg-[#0B0B0E] pt-20">
      <Suspense fallback={<div className="max-w-[1440px] mx-auto p-12 text-center text-sm text-zinc-400">Loading commercial properties...</div>}>
        <PropertySearchResults
          initialProperties={commercialProperties}
          title="Commercial Real Estate"
          subtitle="Explore high-footfall retail shops, Grade-A corporate towers, showrooms, and logistics warehouses."
          defaultCategory="commercial"
        />
      </Suspense>
    </div>
  )
}
