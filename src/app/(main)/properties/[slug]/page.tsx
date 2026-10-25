import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { properties, getPropertyBySlug } from '@/lib/data/properties'
import { Property, PropertyStatus, VerificationStatus, Advertiser, PropertyMedia, PropertyAmenity } from '@/types/property'
import { formatPrice, formatArea } from '@/lib/utils/format'
import PropertyGallery from '@/components/property/PropertyGallery'
import PropertyOverview from '@/components/property/PropertyOverview'
import PropertyAmenities from '@/components/property/PropertyAmenities'
import PropertyMap from '@/components/property/PropertyMap'
import NearbyPlaces from '@/components/property/NearbyPlaces'
import EMICalculator from '@/components/property/EMICalculator'
import AdvertiserCard from '@/components/property/AdvertiserCard'
import SimilarProperties from '@/components/property/SimilarProperties'
import PropertyBreadcrumb from '@/components/property/PropertyBreadcrumb'
import PropertyStatusBadge from '@/components/property/PropertyStatusBadge'
import PropertyDetailActions from './PropertyDetailActions'
import { MapPin } from 'lucide-react'

interface PropertyPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }))
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) {
    return {
      title: 'Property Not Found | Shree Maruti Nandan Properties',
      description: 'The requested real estate property could not be found.',
    }
  }

  const priceStr = formatPrice(property.price.amount)
  const areaStr = formatArea(property.area.value, property.area.unit)
  const title = `${property.title} | Shree Maruti Nandan Properties`
  const locality = property.location.locality || property.location.city
  const description = `${property.title} located in ${locality}, ${property.location.city}. Area: ${areaStr}. ${priceStr}. Road access: ${property.roadDetails || 'Confirmed road'}. Contact Shree Maruti Nandan Properties for site visits.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://shreemarutinandanproperties.com/properties/${property.slug}`,
    },
    openGraph: {
      title,
      description,
      images: property.media?.[0]?.url ? [{ url: property.media[0].url }] : [],
    },
  }
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto text-2xl font-bold">
            !
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
            This property is no longer available.
          </h1>
          <p className="text-sm text-gray-500">
            The listing may have been sold, rented out, or removed by the advertiser. Explore other matching properties below.
          </p>
          <div className="pt-2">
            <Link
              href="/properties"
              className="inline-flex px-6 py-3 bg-emerald text-white rounded-xl text-sm font-semibold hover:bg-emerald-dark transition-colors"
            >
              Browse Active Marketplace
            </Link>
          </div>
        </div>
        <div className="mt-12 text-left">
          <SimilarProperties currentId="none" category="residential" city="Noida" />
        </div>
      </div>
    )
  }

  const isRent = property.listingType === 'rent'
  const displayPrice = isRent
    ? `${formatPrice(property.price.monthlyRent || property.price.amount)}/month`
    : formatPrice(property.price.amount)

  const advertiserFallback: Advertiser = property.advertiser || {
    name: 'Shree Maruti Nandan Properties',
    type: 'agency',
    phone: '9997837133',
    verificationStatus: 'verified',
  }

  const mediaList: PropertyMedia[] = property.media || [
    { id: 'm1', url: '/images/placeholder-property.svg', type: 'image', isCover: true, order: 0 },
  ]

  const amenitiesList: PropertyAmenity[] = property.amenities || []
  const locality = property.location.locality || property.location.city

  // JSON-LD RealEstateListing Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description,
    url: `https://shreemarutinandanproperties.com/properties/${property.slug}`,
    image: property.media?.map(m => m.url),
    offers: {
      '@type': 'Offer',
      price: property.price.amount,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: locality,
      addressRegion: property.location.city,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: property.location.latitude || property.location.lat,
      longitude: property.location.longitude || property.location.lng,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#0B0B0E] pb-24 lg:pb-16 pt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <PropertyBreadcrumb
            items={[
              { label: 'Properties', href: '/properties' },
              { label: property.location.state, href: `/properties?state=${encodeURIComponent(property.location.state)}` },
              { label: property.location.city, href: `/property-in/${encodeURIComponent(property.location.city.toLowerCase().replace(/\s+/g, '-'))}` },
              { label: property.title },
            ]}
          />

          {/* Title & Top Meta Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 py-4 mb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <PropertyStatusBadge status={(property.status || 'available') as PropertyStatus} />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-2.5 py-0.5 rounded-full">
                  {property.category} &bull; {property.subcategory.replace(/_/g, ' ')}
                </span>
                <span className="text-xs text-zinc-500">
                  ID: {property.id}
                </span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5C542] leading-tight">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mt-2">
                <MapPin size={15} className="text-[#F5C542] flex-shrink-0" />
                <span>{property.location.address ? `${property.location.address}, ` : ''}{locality}, {property.location.city}, {property.location.state}</span>
              </div>
            </div>

            {/* Price & Client Interactive Actions (Save, Share, Compare) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:text-right">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5C542] font-display tracking-tight">
                  {displayPrice}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {property.price.amount > 0 ? (
                    <span>{property.price.isNegotiable ? 'Price Negotiable' : 'Fixed Price'}</span>
                  ) : (
                    <span>Contact agency desk for price quotation</span>
                  )}
                </div>
              </div>

              {/* Client Action Buttons */}
              <PropertyDetailActions property={property} />
            </div>
          </div>

          {/* Main 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Media Gallery */}
              <PropertyGallery
                media={mediaList}
                title={property.title}
                status={(property.status || 'available') as PropertyStatus}
                verificationStatus={(property.verificationStatus || 'verified') as VerificationStatus}
                isFeatured={property.isFeatured}
                isPremium={property.isPremium}
                listingType={property.listingType}
              />

              {/* Overview Specs */}
              <PropertyOverview property={property} />

              {/* Description */}
              <div className="bg-[#131317] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F5C542] mb-4">
                  About this Property
                </h2>
                <div className="prose text-zinc-300 text-sm sm:text-base leading-relaxed whitespace-pre-line font-light">
                  {property.description || 'Verified property listing with Shree Maruti Nandan Properties. Contact our agency desk for complete inspection and accompanied site visits.'}
                </div>
              </div>

              {/* Amenities */}
              <PropertyAmenities amenities={amenitiesList} />

              {/* Interactive OpenStreetMap */}
              <PropertyMap location={property.location} title={property.title} />

              {/* What's Nearby */}
              <NearbyPlaces city={property.location.city} locality={locality} />

              {/* EMI Calculator (Only shown when verified price exists) */}
              {!isRent && property.price.amount > 0 && (
                <EMICalculator propertyPrice={property.price.amount} />
              )}
            </div>

            {/* Right Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <AdvertiserCard
                advertiser={advertiserFallback}
                propertyId={property.id}
                propertyTitle={property.title}
              />

              {/* Quick Affordability Summary */}
              <div className="bg-[#131317] rounded-2xl border border-white/10 p-6 shadow-xl text-xs space-y-3">
                <h3 className="font-semibold text-[#F5C542] text-sm uppercase tracking-wider">
                  Listing Quick Summary
                </h3>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-zinc-400">Transaction Type</span>
                  <span className="font-semibold text-white uppercase">For {property.listingType}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-zinc-400">Listed Area</span>
                  <span className="font-semibold text-white">{formatArea(property.area.value, property.area.unit)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-zinc-400">Legal Verification</span>
                  <span className="font-semibold text-[#F5C542] capitalize">{property.verificationStatus}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-zinc-400">Bank Home Loan</span>
                  <span className="font-semibold text-white">{property.loanAvailable !== false ? 'Available' : 'Check Eligibility'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Properties Section */}
          <SimilarProperties
            currentId={property.id}
            category={property.category}
            city={property.location.city}
          />
        </div>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0E]/95 backdrop-blur-md border-t border-white/10 p-3 sm:px-6 lg:hidden flex items-center justify-between gap-3 shadow-2xl">
        <div>
          <div className="text-xs text-zinc-400">Total Price</div>
          <div className="text-lg font-bold text-[#F5C542] font-display leading-tight">{displayPrice}</div>
        </div>
        <div className="flex items-center gap-2">
          {advertiserFallback.phone && (
            <a
              href={`tel:+91${advertiserFallback.phone.replace(/[^0-9]/g, '')}`}
              className="px-4 py-2.5 rounded-xl border border-white/20 text-white text-xs font-semibold hover:border-[#F5C542] hover:text-[#F5C542] transition-colors"
            >
              Call
            </a>
          )}
          <a
            href={`https://wa.me/91${(advertiserFallback.phone || '9997837133').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I am interested in ${property.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] text-zinc-950 font-bold text-xs hover:brightness-105 transition-colors shadow-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
