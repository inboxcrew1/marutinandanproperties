import { PropertyAmenity } from '@/types/property'
import {
  Check,
  Shield,
  Zap,
  Car,
  Trees,
  Wifi,
  Dumbbell,
  Waves,
  Building,
  Sparkles,
  Droplets,
  Tv,
} from 'lucide-react'

interface PropertyAmenitiesProps {
  amenities: PropertyAmenity[]
}

const iconMap: Record<string, any> = {
  security: Shield,
  power: Zap,
  parking: Car,
  park: Trees,
  wifi: Wifi,
  gym: Dumbbell,
  pool: Waves,
  lift: Building,
  water: Droplets,
  tv: Tv,
}

export default function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  if (!amenities || amenities.length === 0) return null

  return (
    <div className="bg-[#131317] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F5C542]">
            Amenities &amp; Features
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Comforts, security, and facilities available with this property
          </p>
        </div>
        <span className="text-xs font-semibold text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3 py-1 rounded-full">
          {amenities.length} Features
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {amenities.map(amenity => {
          const categoryKey = amenity.category || 'basic'
          const Icon = iconMap[categoryKey] || Check
          return (
            <div
              key={amenity.id}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-[#18181F] hover:border-[#F5C542]/30 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center flex-shrink-0">
                <Icon size={16} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-zinc-200 truncate">
                {amenity.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
