'use client'

import { useState } from 'react'
import { Phone, MessageSquare, ShieldCheck, Mail, Clock, Building2, User, CheckCircle } from 'lucide-react'
import { Advertiser } from '@/types/property'
import EnquiryModal from './EnquiryModal'
import ScheduleVisitModal from './ScheduleVisitModal'

interface AdvertiserCardProps {
  advertiser: Advertiser
  propertyId: string
  propertyTitle: string
}

export default function AdvertiserCard({ advertiser, propertyId, propertyTitle }: AdvertiserCardProps) {
  const [showEnquiry, setShowEnquiry] = useState(false)
  const [showSchedule, setShowSchedule] = useState(false)
  const [phoneRevealed, setPhoneRevealed] = useState(false)

  const isVerified = advertiser.verificationStatus === 'verified'
  const cleanPhone = advertiser.phone ? advertiser.phone.replace(/[^0-9]/g, '') : '9997837133'
  const whatsappUrl = `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(
    `Hello, I saw your listing for "${propertyTitle}" (ID: ${propertyId}) with Shree Maruti Nandan Properties and would like to consult.`
  )}`

  return (
    <>
      <div className="bg-[#131317] rounded-2xl border border-white/10 p-6 shadow-xl sticky top-24 text-zinc-100">
        {/* Header / Avatar */}
        <div className="flex items-center gap-4 pb-5 border-b border-white/10">
          <div className="w-14 h-14 rounded-2xl bg-[#F5C542]/10 border border-[#F5C542]/30 text-[#F5C542] flex items-center justify-center font-bold text-xl flex-shrink-0">
            {advertiser.name ? advertiser.name.charAt(0) : 'A'}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 mb-0.5">
              <h3 className="font-semibold text-white text-base truncate">
                {advertiser.name}
              </h3>
              {isVerified && (
                <ShieldCheck size={16} className="text-[#F5C542] flex-shrink-0" />
              )}
            </div>
            <p className="text-xs text-zinc-400 capitalize">
              {advertiser.type} &bull; {advertiser.agencyName || 'Independent Listing'}
            </p>
            {isVerified && (
              <span className="inline-flex items-center text-[10px] text-[#F5C542] font-medium mt-1">
                <CheckCircle size={10} className="mr-1" /> Identity Verified
              </span>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-3 py-4 text-xs border-b border-white/10">
          <div className="p-2.5 bg-[#18181F] rounded-xl border border-white/5">
            <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Active Listings</span>
            <span className="font-semibold text-white text-sm">{advertiser.totalListings || '12'} Properties</span>
          </div>
          <div className="p-2.5 bg-[#18181F] rounded-xl border border-white/5">
            <span className="text-zinc-500 block text-[10px] uppercase font-semibold">Avg. Response</span>
            <span className="font-semibold text-[#F5C542] text-sm">{advertiser.responseTime || 'Under 1 Hour'}</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="space-y-3 mt-5">
          {/* Main Enquiry CTA */}
          <button
            onClick={() => setShowEnquiry(true)}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] hover:brightness-105 text-zinc-950 rounded-xl font-bold text-sm transition-all shadow-md"
          >
            <MessageSquare size={17} />
            <span>Send Direct Enquiry</span>
          </button>

          {/* Schedule Visit */}
          <button
            onClick={() => setShowSchedule(true)}
            className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/15 hover:border-[#F5C542]/60 text-zinc-200 hover:text-[#F5C542] rounded-xl font-semibold text-sm transition-all"
          >
            <Clock size={16} />
            <span>Schedule Physical Visit</span>
          </button>

          {/* WhatsApp & Call row */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 rounded-xl text-xs font-semibold transition-colors"
            >
              <span>Chat WhatsApp</span>
            </a>

            {phoneRevealed ? (
              <a
                href={`tel:+91${cleanPhone}`}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-[#1F1F26] text-white border border-white/15 rounded-xl text-xs font-semibold hover:border-[#F5C542]/50 transition-colors"
              >
                <Phone size={13} />
                <span>+91 {cleanPhone}</span>
              </a>
            ) : (
              <button
                onClick={() => setPhoneRevealed(true)}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-[#1F1F26] text-white border border-white/15 rounded-xl text-xs font-semibold hover:border-[#F5C542]/50 transition-colors"
              >
                <Phone size={13} />
                <span>View Phone</span>
              </button>
            )}
          </div>
        </div>

        {/* Safety Note */}
        <p className="text-[11px] text-zinc-500 text-center mt-5 leading-normal">
          Shree Maruti Nandan Properties advises verifying all physical registry documentation prior to making property transactions.
        </p>
      </div>

      {/* Modals */}
      {showEnquiry && (
        <EnquiryModal
          propertyId={propertyId}
          propertyTitle={propertyTitle}
          advertiserName={advertiser.name}
          onClose={() => setShowEnquiry(false)}
        />
      )}

      {showSchedule && (
        <ScheduleVisitModal
          propertyId={propertyId}
          propertyTitle={propertyTitle}
          advertiserName={advertiser.name}
          onClose={() => setShowSchedule(false)}
        />
      )}
    </>
  )
}
