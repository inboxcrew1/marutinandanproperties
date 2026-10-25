'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, MapPin, BedDouble, Bath, Car, ShieldCheck, Star, Eye, Calendar, Sparkles } from 'lucide-react'
import { Property } from '@/types/property'
import { formatPrice, formatArea, formatDate } from '@/lib/utils/format'

interface PropertyCardProps {
  property: Property
  variant?: 'default' | 'large' | 'compact' | 'list'
  showSaveButton?: boolean
}

export default function PropertyCard({ property, variant = 'default', showSaveButton = true }: PropertyCardProps) {
  const [isSaved, setIsSaved] = useState(false)
  const [imageError, setImageError] = useState(false)

  const coverImage = property.media?.find(m => m.isCover && m.type === 'image') || property.media?.[0]
  const imageUrl = imageError || !coverImage?.url
    ? '/images/placeholder-property.svg'
    : coverImage.url

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsSaved(!isSaved)
  }

  const subcategoryDisplay = (property.subcategory || '').replace(/_/g, ' ')
  const isRent = property.listingType === 'rent'
  const displayPrice = isRent
    ? `${formatPrice(property.price?.monthlyRent || property.price?.amount || 0)}/month`
    : formatPrice(property.price?.amount || 0)

  if (variant === 'list') {
    return (
      <Link href={`/properties/${property.slug}`} className="group block">
        <div className="flex flex-col sm:flex-row gap-4 bg-[#131317] rounded-xl border border-white/10 hover:border-[#F5C542]/50 hover:shadow-card-hover transition-all duration-250 overflow-hidden">
          {/* Image */}
          <div className="w-full sm:w-64 h-52 sm:h-auto flex-shrink-0 relative overflow-hidden bg-zinc-900">
            <img
              src={imageUrl}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
              loading="lazy"
            />
            {/* Badges */}
            <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
              {property.listingNumber && (
                <span className="px-2 py-0.5 bg-[#F5C542] text-zinc-950 text-[10px] font-bold rounded-md shadow-sm">
                  {property.listingNumber}
                </span>
              )}
              <span className="px-2 py-0.5 bg-black/85 text-[#F5C542] border border-[#F5C542]/30 text-[10px] font-semibold rounded-md shadow-sm">
                Illustrative Diagram
              </span>
            </div>
            {/* Top Right Save */}
            {showSaveButton && (
              <button
                onClick={handleSave}
                aria-label={isSaved ? 'Remove from saved' : 'Save property'}
                className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-[#18181F]/90 backdrop-blur-sm flex items-center justify-center hover:bg-[#252530] text-zinc-300 hover:text-red-500 border border-white/10 transition-colors shadow-sm z-10"
              >
                <Heart size={16} className={isSaved ? 'fill-red-500 text-red-500' : ''} />
              </button>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-semibold text-[#F5C542] uppercase tracking-wider">
                  {subcategoryDisplay}
                </span>
                {property.verificationStatus === 'verified' && (
                  <span className="flex items-center gap-1 text-[11px] text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-2 py-0.5 rounded-full font-medium">
                    <ShieldCheck size={12} /> Verified
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-zinc-100 text-lg group-hover:text-[#F5C542] transition-colors line-clamp-1 mb-1">
                {property.title}
              </h3>

              <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-3">
                <MapPin size={13} className="text-[#F5C542] flex-shrink-0" />
                <span className="line-clamp-1">{property.location?.locality}, {property.location?.city}</span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-[#F5C542] font-display tracking-tight">
                  {displayPrice}
                </span>
                {property.price?.isNegotiable && (
                  <span className="text-xs text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-2 py-0.5 rounded">Negotiable</span>
                )}
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-4 text-xs text-zinc-300 pt-3 border-t border-white/10">
              {property.bedrooms !== undefined && (
                <span className="flex items-center gap-1">
                  <BedDouble size={14} className="text-[#F5C542]" />
                  <strong className="text-white">{property.bedrooms}</strong> Beds
                </span>
              )}
              {property.bathrooms !== undefined && (
                <span className="flex items-center gap-1">
                  <Bath size={14} className="text-[#F5C542]" />
                  <strong className="text-white">{property.bathrooms}</strong> Baths
                </span>
              )}
              {property.parking !== undefined && property.parking > 0 && (
                <span className="flex items-center gap-1">
                  <Car size={14} className="text-[#F5C542]" />
                  <strong className="text-white">{property.parking}</strong> Parking
                </span>
              )}
              <span className="ml-auto font-medium text-[#F5C542] bg-[#F5C542]/10 px-2.5 py-1 rounded-md border border-[#F5C542]/20">
                {property.area?.value ? formatArea(property.area.value, property.area.unit) : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <article className={`bg-[#131317] rounded-xl border border-white/10 overflow-hidden hover:border-[#F5C542]/50 hover:shadow-card-hover transition-all duration-250 flex flex-col h-full ${
      variant === 'large' ? 'shadow-card' : ''
    }`}>
      {/* Image Container */}
      <Link href={`/properties/${property.slug}`} className={`relative block overflow-hidden bg-zinc-900 group ${variant === 'large' ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <img
          src={imageUrl}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setImageError(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {property.listingNumber && (
            <span className="px-2.5 py-0.5 bg-[#F5C542] text-zinc-950 font-bold text-[11px] rounded-md shadow-sm">
              {property.listingNumber}
            </span>
          )}
          <span className="px-2 py-0.5 bg-black/85 text-[#F5C542] border border-[#F5C542]/30 text-[10px] font-semibold rounded-md shadow-sm backdrop-blur-sm">
            Illustrative Diagram
          </span>
          {property.isFeatured && (
            <span className="px-2 py-0.5 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] text-black text-[10px] font-bold rounded-md shadow-sm">
              Featured
            </span>
          )}
        </div>

        {/* Save Button */}
        {showSaveButton && (
          <button
            onClick={handleSave}
            aria-label={isSaved ? 'Remove from saved' : 'Save property'}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#18181F]/90 backdrop-blur-sm flex items-center justify-center hover:bg-[#252530] text-zinc-300 hover:text-red-500 border border-white/10 transition-all duration-200 shadow-sm z-10"
          >
            <Heart size={16} className={`transition-all duration-200 ${isSaved ? 'fill-red-500 text-red-500 scale-110' : ''}`} />
          </button>
        )}
      </Link>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Locality */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs font-semibold text-[#F5C542] uppercase tracking-wider">
              {property.location?.locality || 'Bulandshahr'} &bull; {subcategoryDisplay}
            </span>
            <span className="text-[11px] text-zinc-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full font-medium">
              Residential Plot
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-zinc-100 text-base leading-snug line-clamp-2 hover:text-[#F5C542] transition-colors duration-200 mb-2">
            <Link href={`/properties/${property.slug}`}>
              {property.title}
            </Link>
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-3 font-medium">
            <MapPin size={13} className="text-[#F5C542] flex-shrink-0" />
            <span className="line-clamp-1">{property.location?.locality}, {property.location?.city}, {property.location?.state}</span>
          </div>

          {/* Price (Price on Request) */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl sm:text-2xl font-bold text-[#F5C542] font-display tracking-tight">
              {displayPrice}
            </span>
          </div>
        </div>

        {/* Details & Specs (Area, Dimensions, Road Width) */}
        <div>
          <div className="py-3 border-t border-white/10 text-xs space-y-1.5 bg-[#17171D] p-3 rounded-xl mb-3">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Plot Area:</span>
              <span className="font-bold text-[#F5C542]">
                {property.area?.value ? `${property.area.value} sq m` : 'N/A'}
              </span>
            </div>
            {property.dimensions && (
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Plot Dimensions:</span>
                <span className="font-semibold text-white">{property.dimensions}</span>
              </div>
            )}
            {property.roadDetails && (
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Road Width / Type:</span>
                <span className="font-semibold text-white">{property.roadDetails}</span>
              </div>
            )}
          </div>

          {/* Actions: View Details, Call, WhatsApp */}
          <div className="grid grid-cols-3 gap-2 pt-1 text-center text-xs">
            <Link
              href={`/properties/${property.slug}`}
              className="py-2.5 px-2 bg-white/10 hover:bg-white/15 text-zinc-100 rounded-lg font-semibold border border-white/10 transition-colors flex items-center justify-center"
            >
              View Details
            </Link>
            <a
              href="tel:+919548974761"
              className="py-2.5 px-2 bg-white/10 hover:bg-white/15 text-[#F5C542] rounded-lg font-semibold border border-white/10 transition-colors flex items-center justify-center"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/919548974761?text=${encodeURIComponent(`Hello Shree Maruti Nandan Properties, I am interested in ${property.title} (${property.listingNumber || property.id}). Please share more details.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] rounded-lg font-bold border border-[#25D366]/40 transition-colors flex items-center justify-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
