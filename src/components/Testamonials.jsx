import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

export function Testimonials() {
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

          <iframe
            src="https://3e83f46f286d4ca4b8a5adf7f7307f14.elf.site"
            title="VAJA customer reviews"
            loading="lazy"
            className="relative z-10 h-[560px] w-full border-0 md:h-[620px] lg:h-[68vh] lg:min-h-[680px] lg:max-h-[820px]"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
