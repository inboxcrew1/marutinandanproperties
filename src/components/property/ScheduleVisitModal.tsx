'use client'

import { useState } from 'react'
import { X, Calendar, Clock, CheckCircle2, User } from 'lucide-react'

interface ScheduleVisitModalProps {
  propertyId: string
  propertyTitle: string
  advertiserName: string
  onClose: () => void
}

export default function ScheduleVisitModal({
  propertyId,
  propertyTitle,
  advertiserName,
  onClose,
}: ScheduleVisitModalProps) {
  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('11:00 AM - 1:00 PM')
  const [visitorName, setVisitorName] = useState('')
  const [visitorPhone, setVisitorPhone] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  // Get tomorrow's date string YYYY-MM-DD as minimum
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault()
    setConfirmed(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#131317] rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-white/10 animate-fade-up text-white">
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#18181F]">
          <div>
            <h3 className="font-display text-lg font-semibold text-[#F5C542]">
              Schedule Site Visit
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5 truncate max-w-xs">
              {propertyTitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {confirmed ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center mx-auto border border-[#F5C542]/20">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="font-display text-xl font-bold text-[#F5C542]">
              Site Visit Requested!
            </h4>
            <p className="text-xs text-zinc-300">
              Your appointment request for <strong className="text-white">{date} ({slot})</strong> has been received by <span className="font-medium text-[#F5C542]">{advertiserName}</span>. They will confirm the exact meeting point with you via phone.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] text-zinc-950 rounded-xl text-sm font-bold hover:brightness-105 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSchedule} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Select Preferred Date *
              </label>
              <input
                type="date"
                required
                min={minDate}
                value={date}
                onChange={e => setDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#18181F] text-white text-sm focus:outline-none focus:border-[#F5C542]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Preferred Time Slot *
              </label>
              <select
                value={slot}
                onChange={e => setSlot(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#18181F] text-white text-sm focus:outline-none focus:border-[#F5C542]"
              >
                <option value="10:00 AM - 12:00 PM">Morning: 10:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 02:00 PM">Noon: 12:00 PM - 02:00 PM</option>
                <option value="02:00 PM - 04:00 PM">Afternoon: 02:00 PM - 04:00 PM</option>
                <option value="04:00 PM - 06:00 PM">Late Afternoon: 04:00 PM - 06:00 PM</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={visitorName}
                onChange={e => setVisitorName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#18181F] text-white text-sm focus:outline-none focus:border-[#F5C542]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Phone Number *
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-white/10 bg-[#1C1C24] text-xs font-medium text-zinc-400">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit number"
                  value={visitorPhone}
                  onChange={e => setVisitorPhone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-r-xl border border-white/10 bg-[#18181F] text-white text-sm focus:outline-none focus:border-[#F5C542]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] hover:brightness-105 text-zinc-950 rounded-xl font-bold text-sm transition-all shadow-md"
              >
                <Calendar size={16} />
                <span>Confirm Visit Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
