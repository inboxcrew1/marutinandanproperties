import type { Metadata } from 'next'
import { Suspense } from 'react'
import { properties } from '@/lib/data/properties'
import PropertySearchResults from '@/components/search/PropertySearchResults'

export const metadata: Metadata = {
  title: 'Rental Properties in Bulandshahr & NCR | Rent Flats, Offices | Shree Maruti Nandan Properties',
  description:
    'Search verified apartments for rent, independent floors, and commercial leases with Shree Maruti Nandan Properties in Bulandshahr and NCR.',
  alternates: {
    canonical: 'https://shreemarutinandanproperties.com/rent',
  },
}

export default function RentPage() {
  const rentalProperties = properties.filter(
    (p) => p.listingType === 'rent' || p.listingType === 'lease'
  )

  return (
    <div className="min-h-screen bg-[#0B0B0E] pt-20">
      <Suspense fallback={<div className="max-w-[1440px] mx-auto p-12 text-center text-sm text-zinc-400">Loading rentals...</div>}>
        <PropertySearchResults
          initialProperties={rentalProperties}
          title="Properties for Rent &amp; Lease"
          subtitle="Discover verified furnished and semi-furnished rental residences, IT offices, and commercial spaces."
          defaultListingType="rent"
        />
      </Suspense>
    </div>
  )
}
