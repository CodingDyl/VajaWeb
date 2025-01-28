'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn, slideIn } from '../utils/motion'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Wellness Center Owner",
    company: "Tranquil Space",
    content: "VAJA's saunas have transformed our wellness center. The quality and craftsmanship are unmatched, and our clients consistently praise the experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Hotel Manager",
    company: "Luxury Suites International",
    content: "Installing VAJA steam rooms was one of our best investments. The attention to detail and customer support have been exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Lisa van der Berg",
    role: "Homeowner",
    company: "Private Client",
    content: "The personal sauna from VAJA has become my daily sanctuary. The installation was seamless, and the quality is outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2088&auto=format&fit=crop"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

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

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto"
            >
              <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[400px]"
              >
                <div className="absolute inset-4 rounded-2xl overflow-hidden">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-accent rounded-2xl transform rotate-6" />
              </motion.div>

              <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="w-full md:w-1/2 bg-white rounded-2xl p-8 shadow-xl relative"
              >
                <FaQuoteLeft className="text-4xl text-accent/20 absolute top-4 left-4" />
                <div className="mt-8">
                  <p className="text-secondary text-lg mb-6">
                    {testimonials[currentIndex].content}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-accent" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-accent">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-secondary/60">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent/90 transition-colors"
            >
              <FaChevronLeft className="text-xl" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent/90 transition-colors"
            >
              <FaChevronRight className="text-xl" />
            </motion.button>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-accent' : 'bg-accent/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials