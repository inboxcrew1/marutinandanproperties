'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, MessageSquare, Search, Send, X, CheckCircle2 } from 'lucide-react'

export default function MobileActionToolbar() {
  const [showQuickModal, setShowQuickModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', query: 'Interested in properties in Bulandshahr' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('smnp_enquiries') || '[]')
        const newEnquiry = {
          id: `lead-${Date.now()}`,
          senderName: formData.name,
          senderPhone: formData.phone,
          message: formData.query,
          createdAt: new Date().toISOString(),
          status: 'new',
        }
        localStorage.setItem('smnp_enquiries', JSON.stringify([newEnquiry, ...stored]))
      } catch (err) {
        console.error(err)
      }
      setIsSubmitting(false)
      setSubmitted(true)
    }, 500)
  }

  return (
    <>
      {/* Sticky Bottom Action Bar for Mobile & Tablet */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#0E0E13]/95 backdrop-blur-xl border-t border-amber-500/20 px-2 py-2 shadow-[0_-6px_25px_rgba(0,0,0,0.7)] lg:hidden"
        aria-label="Mobile quick actions"
      >
        <div className="max-w-md mx-auto grid grid-cols-4 gap-1.5 items-center">
          {/* 1. Direct Call */}
          <a
            href="tel:+919997837133"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] text-zinc-950 font-extrabold text-[11px] shadow-sm active:scale-95 transition-transform min-h-[48px]"
            aria-label="Call Shree Maruti Nandan Properties"
          >
            <Phone size={18} className="text-zinc-950 fill-zinc-950/20 mb-0.5" />
            <span>Call Now</span>
          </a>

          {/* 2. Direct WhatsApp */}
          <a
            href="https://wa.me/919997837133?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20am%20interested%20in%20property%20in%20Bulandshahr."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform min-h-[48px]"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare size={18} className="fill-white/20 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          {/* 3. Quick Enquiry Modal Trigger */}
          <button
            type="button"
            onClick={() => setShowQuickModal(true)}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#1C1C24] hover:bg-[#252530] text-amber-300 border border-amber-500/25 font-semibold text-[11px] active:scale-95 transition-transform min-h-[48px]"
            aria-label="Open quick enquiry modal"
          >
            <Send size={17} className="mb-0.5" />
            <span>Enquire</span>
          </button>

          {/* 4. Browse Properties */}
          <Link
            href="/properties"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#16161D] hover:bg-[#202028] text-zinc-300 font-semibold text-[11px] border border-white/5 active:scale-95 transition-transform min-h-[48px]"
            aria-label="Browse all properties"
          >
            <Search size={17} className="mb-0.5 text-zinc-300" />
            <span>Properties</span>
          </Link>
        </div>
      </nav>

      {/* Quick Mobile Lead Generation Modal */}
      {showQuickModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#131317] rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl border border-amber-500/30 text-white">
            <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#18181F]">
              <div>
                <h3 className="font-display text-base font-bold text-[#F5C542]">
                  Quick Property Enquiry
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Shree Maruti Nandan Properties
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowQuickModal(false)
                  setSubmitted(false)
                }}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <div className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center mx-auto border border-[#F5C542]/20">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="font-display text-lg font-bold text-[#F5C542]">
                  Enquiry Received!
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our team will call you back shortly on <span className="text-white font-semibold">{formData.phone}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowQuickModal(false)
                    setSubmitted(false)
                    setFormData({ name: '', phone: '', query: 'Interested in properties in Bulandshahr' })
                  }}
                  className="mt-2 w-full py-2.5 bg-[#F5C542] text-zinc-950 font-bold text-xs rounded-xl hover:brightness-105"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 space-y-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 bg-[#0E0E12] border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#F5C542]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2 bg-[#0E0E12] border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#F5C542]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    What are you looking for?
                  </label>
                  <select
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0E0E12] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#F5C542]"
                  >
                    <option value="Residential Plot in Bulandshahr">Residential Plot in Bulandshahr</option>
                    <option value="Buy New House in Bulandshahr">Buy New House in Bulandshahr</option>
                    <option value="Commercial Shop in Bulandshahr">Commercial Shop in Bulandshahr</option>
                    <option value="Agricultural Land in Bulandshahr">Agricultural Land in Bulandshahr</option>
                    <option value="Property Valuation or Advice">General Consultation / Callback</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-gradient-to-r from-[#FFF0A8] via-[#F5C542] to-[#D4AF37] hover:brightness-105 text-zinc-950 font-bold text-xs rounded-xl shadow-md transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending Enquiry...' : 'Request Instant Callback'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
