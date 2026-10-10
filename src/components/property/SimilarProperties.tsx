import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PropertyCard from './PropertyCard'
import { properties } from '@/lib/data/properties'

interface SimilarPropertiesProps {
  currentId: string
  category: string
  city: string
}

export default function SimilarProperties({ currentId, category, city }: SimilarPropertiesProps) {
  // Filter similar properties (same category or same city, excluding current)
  const similar = properties
    .filter(p => p.id !== currentId && (p.category === category || p.location.city.toLowerCase() === city.toLowerCase()))
    .slice(0, 3)

  if (similar.length === 0) return null

  return (
    <section className="mt-12 pt-10 border-t border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl font-semibold text-[#F5C542]">
            Similar Properties You May Like
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Handpicked matching properties in {city} and surrounding localities
          </p>
        </div>
        <Link
          href={`/properties?city=${encodeURIComponent(city.toLowerCase())}`}
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5C542] hover:text-[#FFF0A8] transition-colors"
        >
          <span>View All in {city}</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {similar.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
