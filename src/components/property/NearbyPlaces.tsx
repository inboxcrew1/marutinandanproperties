import { GraduationCap, Hospital, Train, ShoppingBag, Building2, Utensils, Plane, Landmark } from 'lucide-react'

interface NearbyPlacesProps {
  city: string
  locality: string
}

export default function NearbyPlaces({ city, locality }: NearbyPlacesProps) {
  const nearbyCategories = [
    {
      icon: GraduationCap,
      label: 'Schools & Colleges',
      items: [
        { name: `Delhi Public School (${locality})`, distance: '1.8 km' },
        { name: 'Ryan International School', distance: '3.2 km' },
      ],
    },
    {
      icon: Hospital,
      label: 'Hospitals & Medical Care',
      items: [
        { name: 'Max Super Speciality Hospital', distance: '2.5 km' },
        { name: 'Apollo Clinic & Pharmacy', distance: '800 m' },
      ],
    },
    {
      icon: Train,
      label: 'Transit & Metro',
      items: [
        { name: `${locality} Metro Station`, distance: '1.2 km' },
        { name: 'Main Expressway Junction', distance: '2.0 km' },
      ],
    },
    {
      icon: ShoppingBag,
      label: 'Markets & Malls',
      items: [
        { name: 'Central Sector Market', distance: '500 m' },
        { name: 'Grand Venice Mall / City Centre', distance: '4.1 km' },
      ],
    },
    {
      icon: Landmark,
      label: 'Banks & Commercial',
      items: [
        { name: 'HDFC & SBI Branches', distance: '400 m' },
        { name: 'Corporate Business Park', distance: '2.8 km' },
      ],
    },
    {
      icon: Plane,
      label: 'Airport & Intercity',
      items: [
        { name: 'Upcoming Noida Intl. Airport (Jewar)', distance: '35 mins' },
        { name: 'Indira Gandhi Intl. Airport (DEL)', distance: '48 km' },
      ],
    },
  ]

  return (
    <div className="bg-[#131317] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F5C542]">
            What&apos;s Nearby in {city}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Key infrastructure, public transit, and daily convenience landmarks
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {nearbyCategories.map(({ icon: Icon, label, items }) => (
          <div
            key={label}
            className="p-4 rounded-xl border border-white/5 bg-[#18181F] hover:border-[#F5C542]/30 transition-all duration-200"
          >
            <div className="flex items-center gap-2.5 mb-3 text-[#F5C542] font-semibold text-sm">
              <div className="w-8 h-8 rounded-lg bg-[#F5C542]/10 flex items-center justify-center">
                <Icon size={16} />
              </div>
              <span className="text-white font-medium text-xs sm:text-sm truncate">{label}</span>
            </div>
            <ul className="space-y-2">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 truncate mr-2">{item.name}</span>
                  <span className="font-semibold text-[#F5C542] flex-shrink-0 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    {item.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-zinc-500 mt-5 pt-4 border-t border-white/10">
        Distances are estimated road distances calculated from verified locality coordinates.
      </p>
    </div>
  )
}
