'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn, slideIn } from '../utils/motion'
import { FaCheckCircle } from 'react-icons/fa'

interface ReferralOption {
  id: string
  label: string
  icon: string
}

const referralOptions: ReferralOption[] = [
  { id: 'google', label: 'Google Search', icon: '🔍' },
  { id: 'facebook', label: 'Facebook', icon: '📱' },
  { id: 'instagram', label: 'Instagram', icon: '📸' },
  { id: 'friend', label: 'Friend/Family', icon: '👥' },
  { id: 'linkedin', label: 'LinkedIn', icon: '💼' },
  { id: 'other', label: 'Other', icon: '✨' },
]

interface ReferralFormProps {
  onSubmit: () => void
}

export function ReferralForm({ onSubmit }: ReferralFormProps) {
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // TODO: Implement Firebase storage
    console.log('Referral source:', selectedOption)
    
    setIsSubmitted(true)
    onSubmit() // Call the passed onSubmit function
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 relative overflow-hidden max-w-md mx-auto">
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

      <h2 className="text-2xl font-bold text-secondary mb-6">
        How Did You Find Us?
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {referralOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelectedOption(option.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-2
                ${selectedOption === option.id 
                  ? 'border-accent bg-accent/10 text-accent' 
                  : 'border-secondary/30 hover:border-accent/50'}`}
            >
              <span className="text-2xl">{option.icon}</span>
              <span className="text-sm font-medium">{option.label}</span>
            </button>
          ))}
        </div>

        <button
          type="submit"
          disabled={!selectedOption}
          className={`w-full py-3 rounded-full font-semibold transition-all duration-300
            ${selectedOption 
              ? 'bg-accent text-white hover:bg-opacity-90' 
              : 'bg-secondary/20 text-secondary/50 cursor-not-allowed'}`}
        >
          Submit
        </button>
      </form>

      {isSubmitted && (
        <div className="absolute inset-0 flex items-center justify-center bg-accent bg-opacity-95">
          <div className="text-white flex flex-col items-center gap-3">
            <FaCheckCircle className="text-4xl" />
            <p className="text-xl font-bold">Thank you for your feedback!</p>
          </div>
        </div>
      )}
    </div>
  )
} 