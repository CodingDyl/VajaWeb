'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { useEffect } from 'react'

export function Testimonials() {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script')
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="relative min-h-[600px] bg-primary py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          initial="hidden"
          whileInView="show"
          className="text-4xl font-bold text-accent text-center mb-16"
        >
          What Our Clients Say
        </motion.h2>

        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          initial="hidden"
          whileInView="show"
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl overflow-hidden relative"
        >
          {/* Decorative accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
          
          {/* Elfsight Reviews Widget */}
          <div 
            className="elfsight-app-226e6c36-cd82-4e20-b595-8e3f856350ee" 
            data-elfsight-app-lazy 
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials