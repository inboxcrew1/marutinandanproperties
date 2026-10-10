'use client'

import { useState } from 'react'
import { MapPin, Navigation, Eye, Maximize2, ShieldAlert } from 'lucide-react'
import { PropertyLocation } from '@/types/property'

interface PropertyMapProps {
  location: PropertyLocation
  title: string
}

export default function PropertyMap({ location, title }: PropertyMapProps) {
  const [mapType, setMapType] = useState<'standard' | 'satellite'>('standard')
  const lat = location.latitude || 28.5355
  const lng = location.longitude || 77.3910
  const isApproximate = location.displayType === 'approximate'

  // OpenStreetMap embed URL
  const bboxDelta = 0.015
  const bbox = `${lng - bboxDelta},${lat - bboxDelta},${lng + bboxDelta},${lat + bboxDelta}`
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

  return (
    <div className="bg-[#131317] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F5C542] flex items-center gap-2">
            <span>Location &amp; Map</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 flex items-center gap-1.5">
            <MapPin size={14} className="text-[#F5C542] flex-shrink-0" />
            <span>
              {location.locality}, {location.city}, {location.state}
            </span>
          </p>
        </div>

        {/* Location Privacy Badge */}
        <div className="flex items-center gap-2">
          {isApproximate ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-medium">
              <Eye size={12} />
              Approximate Locality
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5C542]/10 text-[#F5C542] border border-[#F5C542]/20 rounded-full text-xs font-medium">
              <MapPin size={12} />
              Verified Location
            </span>
          )}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3.5 py-1 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] text-zinc-950 font-bold hover:brightness-105 transition-all rounded-full text-xs shadow-sm"
          >
            <Navigation size={12} />
            Directions
          </a>
        </div>
      </div>

      {/* Map Embed Container */}
      <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] border border-white/10 bg-zinc-900">
        <iframe
          title={`Map view for ${title}`}
          src={osmUrl}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />

        {/* Legal OpenStreetMap notice */}
        <div className="absolute bottom-1 right-2 bg-black/80 backdrop-blur-sm text-[10px] text-zinc-400 px-2 py-0.5 rounded shadow border border-white/10">
          &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer" className="underline hover:text-[#F5C542]">OpenStreetMap</a> contributors
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
        <span>Coordinates: {lat.toFixed(4)}° N, {lng.toFixed(4)}° E</span>
        <span className="text-zinc-500">
          {isApproximate
            ? 'Exact house number is shared upon scheduling a site visit.'
            : 'Exact verified property coordinates.'}
        </span>
      </div>
    </div>
  )
}
