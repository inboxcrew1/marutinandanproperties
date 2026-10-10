'use client'

import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Building2,
  CheckCircle2,
  Clock,
  Send,
  Users,
} from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Residential Plot',
    preferredTime: 'Morning (9 AM - 12 PM)',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0B0B0E] pt-24 pb-20 text-zinc-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3.5 py-1.5 rounded-full mb-4">
            <Building2 size={13} />
            <span>Get In Touch</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold shine-gold-text leading-tight">
            Contact Shree Maruti Nandan Properties
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
            We are here to assist with all your residential, commercial and agricultural property inquiries in Bulandshahr, Greater Noida, Khurja and NCR.
          </p>
        </div>

        {/* Quick Contact Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {/* Call Us */}
          <a
            href="tel:+919997837133"
            className="flex items-center gap-4 p-5 bg-[#131317] rounded-2xl border border-white/10 shadow-sm hover:border-[#F5C542]/50 hover:shadow-card-hover transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F5C542]/10 text-[#F5C542] group-hover:bg-[#F5C542] group-hover:text-black transition-colors flex items-center justify-center flex-shrink-0">
              <Phone size={22} />
            </div>
            <div>
              <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Direct Call</p>
              <p className="text-sm sm:text-base font-bold text-white mt-0.5 group-hover:text-[#F5C542] transition-colors">+91 9997837133</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919997837133?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20would%20like%20to%20enquire%20about%20properties."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-[#131317] rounded-2xl border border-white/10 shadow-sm hover:border-[#F5C542]/50 hover:shadow-card-hover transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F5C542]/10 text-[#F5C542] group-hover:bg-[#F5C542] group-hover:text-black transition-colors flex items-center justify-center flex-shrink-0">
              <MessageSquare size={22} />
            </div>
            <div>
              <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">WhatsApp Chat</p>
              <p className="text-sm sm:text-base font-bold text-[#F5C542] mt-0.5">Chat on WhatsApp</p>
            </div>
          </a>

          {/* Office Location */}
          <div className="flex items-center gap-4 p-5 bg-[#131317] rounded-2xl border border-white/10 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center flex-shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Office Location</p>
              <p className="text-xs sm:text-sm font-bold text-white mt-0.5 leading-snug">
                Shop 375, T.P. Nagar Gol Chakkar, Bulandshahr
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto mb-16">
          {/* Agency Details Card */}
          <div className="lg:col-span-5 bg-[#131317] text-white rounded-3xl p-8 flex flex-col justify-between shadow-2xl border border-amber-500/20">
            <div>
              <div className="mb-4">
                <img
                  src="/images/shree-maruti-nandan-properties-white.png?v=2"
                  alt="Shree Maruti Nandan Properties"
                  className="h-9 sm:h-10 w-auto max-h-10 object-contain"
                />
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed mb-6 font-light">
                Professional real estate agency and property consultancy assisting clients across Bulandshahr, Greater Noida, Khurja and NCR.
              </p>

              <div className="space-y-4 text-xs text-zinc-300">
                <div className="flex items-start gap-3">
                  <Users size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Agency Leadership:</p>
                    <p className="text-zinc-300 font-medium">Manoj Kumar Tyagi &bull; Ashish Chaudhary</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Office Address:</p>
                    <p className="text-zinc-300">Shop No. 375, T.P. Nagar Gol Chakkar</p>
                    <p className="text-zinc-400 text-[11px]">Bulandshahr, Uttar Pradesh, India</p>
                    <p className="text-[#F5C542] text-[11px] font-medium">(Deals In: Bulandshahr, Greater Noida, Khurja)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#F5C542] flex-shrink-0" />
                  <div>
                    <span className="text-zinc-400">Direct Contact: </span>
                    <a href="tel:+919997837133" className="text-white font-medium hover:text-[#F5C542]">
                      +91 9997837133
                    </a>
                    <span className="text-zinc-500"> / </span>
                    <a href="tel:+919548974761" className="text-white font-medium hover:text-[#F5C542]">
                      9548974761
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare size={16} className="text-[#F5C542] flex-shrink-0" />
                  <div>
                    <span className="text-zinc-400">WhatsApp: </span>
                    <a
                      href="https://wa.me/919997837133"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F5C542] font-medium hover:underline"
                    >
                      +91 9997837133
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock size={16} className="text-[#F5C542] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Consultation Hours:</p>
                    <p className="text-zinc-400">Monday &ndash; Sunday: 9:00 AM &ndash; 7:30 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-[11px] text-zinc-400">
              Accompanied site visits are arranged with prior appointment.
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-[#131317] rounded-3xl border border-white/10 p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center mx-auto border border-amber-500/20">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold shine-gold-text">
                  Enquiry Received
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Shree Maruti Nandan Properties. A property consultant will call you at{' '}
                  <strong className="text-[#F5C542]">{formData.phone || 'your number'}</strong> to discuss your requirement.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-zinc-200 border border-white/10 rounded-xl text-xs font-semibold transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display font-bold text-xl text-[#F5C542] mb-4">
                  Send a Consultation Enquiry
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#18181F] text-zinc-100 text-xs sm:text-sm focus:outline-none focus:border-[#F5C542]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#18181F] text-zinc-100 text-xs sm:text-sm focus:outline-none focus:border-[#F5C542]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#18181F] text-zinc-100 text-xs sm:text-sm focus:outline-none focus:border-[#F5C542]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Property Category
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#18181F] text-zinc-100 text-xs sm:text-sm focus:outline-none focus:border-[#F5C542] cursor-pointer"
                    >
                      <option value="Residential Plot" className="bg-[#18181F] text-zinc-100">Residential Plot</option>
                      <option value="Independent House" className="bg-[#18181F] text-zinc-100">Independent House</option>
                      <option value="Flat / Apartment" className="bg-[#18181F] text-zinc-100">Flat / Apartment</option>
                      <option value="Commercial Shop" className="bg-[#18181F] text-zinc-100">Commercial Shop</option>
                      <option value="Commercial Showroom" className="bg-[#18181F] text-zinc-100">Commercial Showroom</option>
                      <option value="Agricultural Land" className="bg-[#18181F] text-zinc-100">Agricultural Land</option>
                      <option value="Rental Property" className="bg-[#18181F] text-zinc-100">Rental Property</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Preferred Contact Time
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#18181F] text-zinc-100 text-xs sm:text-sm focus:outline-none focus:border-[#F5C542] cursor-pointer"
                    >
                      <option value="Morning (9 AM - 12 PM)" className="bg-[#18181F] text-zinc-100">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)" className="bg-[#18181F] text-zinc-100">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 7:30 PM)" className="bg-[#18181F] text-zinc-100">Evening (4 PM - 7:30 PM)</option>
                      <option value="Anytime" className="bg-[#18181F] text-zinc-100">Anytime</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Requirement Details / Location
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your property requirement, preferred budget, or locality..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#18181F] text-zinc-100 text-xs sm:text-sm focus:outline-none focus:border-[#F5C542]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#FFF6C7] via-[#F5C542] to-[#D4AF37] hover:brightness-110 text-black rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} />
                  <span>Submit Consultation Request</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Section 30 & 39: Find Us On Map */}
        <div className="bg-[#131317] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5C542] bg-[#F5C542]/10 border border-[#F5C542]/20 px-3 py-1 rounded-full">
                Interactive Map
              </span>
              <h3 className="font-display font-bold text-2xl shine-gold-text mt-2">
                Find Shree Maruti Nandan Properties
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr, Uttar Pradesh
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=T.P.+Nagar+Gol+Chakkar+Bulandshahr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-xl text-xs font-semibold text-zinc-200 hover:border-[#F5C542] hover:text-[#F5C542] transition-colors"
            >
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* OpenStreetMap iframe */}
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="Shree Maruti Nandan Properties Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.838%2C28.395%2C77.868%2C28.418&amp;layer=mapnik&amp;marker=28.405%2C77.852"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
