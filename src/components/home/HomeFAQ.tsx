'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react'

const faqs = [
  {
    q: 'Why choose Shree Maruti Nandan Properties as your property dealer in Bulandshahr?',
    a: 'Shree Maruti Nandan Properties is managed by local real estate experts Manoj Kumar Tyagi and Ashish Chaudhary, located at Shop No. 375, T.P. Nagar Gol Chakkar, Bulandshahr. We offer verified property listings, physical site visits, transparent legal document checks, and direct negotiations between buyers and sellers with zero hidden charges.',
  },
  {
    q: 'Bulandshahr mein property kharidne ke liye kaunse zaroori documents verify karne chahiye?',
    a: 'Bulandshahr mein ghar ya plot khareedte waqt registered sale deed (bainama), current Khatauni/Khasra records, mutation (dakhil-kharij), non-encumbrance certificate (bar-mukti praman patra), and Section 143 non-agricultural conversion certificate (if buying farmland for residential purpose) check karna anivarya hai. Our consultancy assists buyers through each stage of this verification.',
  },
  {
    q: 'Which are the most popular areas to buy a house or plot in Bulandshahr?',
    a: 'Top high-demand residential and commercial corridors in Bulandshahr include Bhoor Chauraha, Civil Lines, Transport Nagar (T.P. Nagar), NH-34 Bypass, DM Road, and the upcoming connectivity corridors towards Khurja and the Jewar International Airport link.',
  },
  {
    q: 'How can I buy a new house or residential plot through your consultancy?',
    a: 'You can explore our verified online listings, filter by budget and locality, or call our team directly at +91 9997837133. We understand your exact requirement, arrange accompanied site inspections, verify ownership titles, and guide you through the registry process at the Bulandshahr sub-registrar office.',
  },
  {
    q: 'Do you charge any upfront inspection fees for visiting properties?',
    a: 'No, we do not charge upfront visit fees. We believe in providing transparent, professional property guidance to help families and investors discover their ideal homes, commercial shops, and agricultural land in Bulandshahr.',
  },
]

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }

  return (
    <section className="py-16 sm:py-24 bg-[#0E0E12] border-t border-white/10" id="faqs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5C542]/10 border border-[#F5C542]/20 text-[#F5C542] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle size={14} />
            <span>Local Real Estate Insights &amp; FAQs</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about buying, selling, and verifying property in Bulandshahr with Shree Maruti Nandan Properties.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#131317] border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C542]"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-zinc-100 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#F5C542] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Quick Contact Banner */}
        <div className="max-w-3xl mx-auto mt-10 p-6 rounded-2xl bg-[#18181F] border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-sm sm:text-base text-white">Have a specific property question?</h4>
            <p className="text-xs text-zinc-400 mt-1">Speak directly with Manoj Kumar Tyagi or Ashish Chaudhary.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919997837133"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F5C542] hover:brightness-110 text-zinc-950 font-bold text-xs transition-all shadow-md"
            >
              <Phone size={14} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919997837133?text=Hello%20Shree%20Maruti%20Nandan%20Properties,%20I%20have%20a%20question%20about%20Bulandshahr%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
            >
              <MessageSquare size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
