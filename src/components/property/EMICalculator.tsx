'use client'

import { useState } from 'react'
import { calculateEMI, formatPrice } from '@/lib/utils/format'
import { Calculator, AlertCircle, Sparkles } from 'lucide-react'

interface EMICalculatorProps {
  propertyPrice?: number
  className?: string
}

export default function EMICalculator({ propertyPrice = 7500000, className = '' }: EMICalculatorProps) {
  const [price, setPrice] = useState<number>(propertyPrice)
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20)
  const [annualRate, setAnnualRate] = useState<number>(8.5)
  const [tenureYears, setTenureYears] = useState<number>(20)

  const downPaymentAmount = Math.round((price * downPaymentPercent) / 100)
  const loanAmount = Math.max(0, price - downPaymentAmount)
  const tenureMonths = tenureYears * 12

  const { emi, totalPayable, totalInterest } = calculateEMI(loanAmount, annualRate, tenureMonths)

  return (
    <div className={`bg-[#131317] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center">
          <Calculator size={20} />
        </div>
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#F5C542]">
            Home Loan EMI Calculator
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Estimate your monthly repayment schedule and interest outlay
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls Column */}
        <div className="space-y-5">
          {/* Property Price */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-zinc-200 mb-2">
              <span>Property Price</span>
              <span className="text-[#F5C542] font-bold">{formatPrice(price)}</span>
            </div>
            <input
              type="range"
              min={500000}
              max={100000000}
              step={100000}
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              className="w-full accent-[#F5C542] cursor-pointer"
            />
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-zinc-200 mb-2">
              <span>Down Payment ({downPaymentPercent}%)</span>
              <span className="text-[#F5C542] font-bold">{formatPrice(downPaymentAmount)}</span>
            </div>
            <input
              type="range"
              min={10}
              max={50}
              step={5}
              value={downPaymentPercent}
              onChange={e => setDownPaymentPercent(Number(e.target.value))}
              className="w-full accent-[#F5C542] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-zinc-500 mt-1">
              <span>10% (Min)</span>
              <span>Loan: {formatPrice(loanAmount)}</span>
              <span>50%</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-zinc-200 mb-2">
              <span>Annual Interest Rate</span>
              <span className="text-[#F5C542] font-bold">{annualRate}% p.a.</span>
            </div>
            <input
              type="range"
              min={6.5}
              max={15.0}
              step={0.1}
              value={annualRate}
              onChange={e => setAnnualRate(Number(e.target.value))}
              className="w-full accent-[#F5C542] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-zinc-500 mt-1">
              <span>6.5%</span>
              <span>Typical: 8.5% - 9.0%</span>
              <span>15.0%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-zinc-200 mb-2">
              <span>Loan Tenure</span>
              <span className="text-[#F5C542] font-bold">{tenureYears} Years</span>
            </div>
            <input
              type="range"
              min={5}
              max={30}
              step={5}
              value={tenureYears}
              onChange={e => setTenureYears(Number(e.target.value))}
              className="w-full accent-[#F5C542] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-zinc-500 mt-1">
              <span>5 Years</span>
              <span>20 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results Card Column */}
        <div className="bg-[#18181F] rounded-2xl border border-[#F5C542]/20 p-6 flex flex-col justify-between shadow-lg">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#F5C542]">
              Estimated Monthly Outlay
            </span>
            <div className="mt-2 mb-1 flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-bold text-[#F5C542] font-display">
                {formatPrice(emi)}
              </span>
              <span className="text-xs text-zinc-400 font-medium">/ month</span>
            </div>
            <p className="text-xs text-zinc-400 mb-6 font-light">
              Calculated on a loan amount of {formatPrice(loanAmount)} for {tenureYears} years.
            </p>

            {/* Breakdown List */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5C542] inline-block" />
                  Principal Loan Amount
                </span>
                <span className="font-semibold text-white">{formatPrice(loanAmount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] inline-block" />
                  Total Interest Payable
                </span>
                <span className="font-semibold text-white">{formatPrice(totalInterest)}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/10 font-semibold text-sm">
                <span className="text-zinc-300">Total Repayment</span>
                <span className="text-[#F5C542] font-display">{formatPrice(totalPayable)}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-start gap-2 text-[11px] text-zinc-500">
            <AlertCircle size={14} className="flex-shrink-0 mt-0.5 text-zinc-500" />
            <span>
              Disclaimer: This is an indicative calculation for informational planning. Actual interest rates, processing fees, and loan eligibility depend upon bank appraisal and credit score.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
