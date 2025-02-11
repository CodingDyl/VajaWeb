import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, zoomIn, staggerContainer } from '../../utils/motion'
import { Navbar } from '../../components/Navbar'
import { FaHistory, FaTools, FaGlobeAfrica } from 'react-icons/fa'
import Footer from '../../components/Footer'
import { aboutImage } from '../../assets'
import { Divider } from '@mantine/core'
import { Link } from 'react-router-dom'
import { IconCheck } from '@tabler/icons-react'

const AboutSection = ({ title, icon, children, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
    className="mb-12 transform transition-all duration-300"
  >
    <h2 className="flex items-center text-2xl font-bold mb-4 text-secondary">
      <span className="bg-accent text-white p-2 rounded-full mr-3">{icon}</span>
      <span>{title}</span>
    </h2>
    <div className="text-secondary">{children}</div>
  </motion.div>
)

const AnimatedButton = () => (
  <Link to="/contact">
    <motion.div
      className="flex justify-center mt-12 mb-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.button
        className="px-8 py-3 bg-accent text-white rounded-full font-semibold text-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300"
        variants={zoomIn(0.2, 0.5)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Us
      </motion.button>
    </motion.div>
  </Link>
)

const About = () => {
  return (
    <div className='min-h-screen bg-primary'>
      <Navbar />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='container mx-auto px-4 py-32'
      >
        <motion.h1
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          className="text-4xl font-bold text-accent mb-12 text-center"
        >
          About VAJA
        </motion.h1>

        <motion.h4 
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          className="text-2xl font-bold text-accent mb-12 text-center"
        >
          Crafting Luxury Wellness Experiences Since 1970
        </motion.h4>

        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          className="grid md:grid-cols-2 gap-8 mb-12 items-center text-left"
        >
          <div>
            <motion.p
              variants={fadeIn('up', 'spring', 0.4, 0.75)}
              className="text-lg text-secondary mb-4 leading-10"
            >
              Welcome to VAJA, South Africa's premier provider of luxury saunas and steam rooms. For over half a century, we've been at the forefront of sauna innovation, delivering custom-crafted wellness solutions that blend elegance, functionality, and superior craftsmanship. From home spa retreats to world-class wellness centres, our expertise extends across South Africa and beyond.
            </motion.p>
          </div>
          <motion.div
            variants={zoomIn(0.5, 1)}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={aboutImage} 
              alt="Luxurious sauna interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <AboutSection title="A Legacy of Excellence" icon={<FaHistory />} index={0}>
          <p>
          What began in 1970 as a vision to provide high-quality saunas for the domestic market has evolved into a globally recognized brand. With an unwavering commitment to innovation and design, VAJA's bespoke sauna and steam solutions now enhance luxury homes, resorts, and commercial spaces worldwide.
          </p>
        </AboutSection>

        <AboutSection title="Unmatched Service & Maintenance" icon={<FaTools />} index={1}>
          <p>
          We believe that luxury extends beyond design—it's about longevity and reliability. Our dedicated service teams ensure your sauna or steam unit remains in peak condition with:
          <ul className='my-5'>
            <li><div className='flex items-center gap-2'><IconCheck /> Fast, efficient maintenance</div></li> 
            <li><div className='flex items-center gap-2'><IconCheck /> In-house spare parts for quick repairs</div></li> 
            <li><div className='flex items-center gap-2'><IconCheck /> Mobile service teams ready to assist</div></li>
          </ul>
          Whether you need routine check-ups or urgent repairs, VAJA guarantees a seamless, stress-free experience.
          </p>
          <p className="mt-4">
            Our mobile service and maintenance teams are always prepared to assist with a smile, embodying our dedication to customer satisfaction and support. Whether you're seeking routine maintenance or require urgent repairs, VAJA is here to ensure your experience is seamless and satisfying.
          </p>
        </AboutSection>

        <AboutSection title="Global Reach, Local Expertise" icon={<FaGlobeAfrica />} index={2}>
          <p>
          While our reputation spans the globe, our South African roots keep us grounded. We take pride in delivering world-class sauna technology with a personalized touch, ensuring every client receives the highest level of care and attention to detail.
          </p>
        </AboutSection>

        <motion.div
          variants={fadeIn('up', 'spring', 0.6, 0.75)}
        >
          <Divider className='my-12 bg-secondary w-1/2 mx-auto h-2' />
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.7, 0.75)}
          className="text-center mt-12"
        >
          <h2 className="text-3xl font-bold text-accent mb-4">Join the VAJA Experience</h2>
          <p className="text-lg text-secondary">
          Choosing VAJA is more than just buying a sauna—it's an investment in luxury, wellness, and exceptional service. Explore our range and join the thousands who trust VAJA to bring relaxation and rejuvenation into their lives.
          </p>
        </motion.div>

        <AnimatedButton />
      </motion.div>

      <Footer />
    </div>
  )
}

export default About
