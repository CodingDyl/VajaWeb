import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, zoomIn } from '../../utils/motion'
import { Navbar } from '../../components/Navbar'
import { FaHistory, FaTools, FaGlobeAfrica } from 'react-icons/fa'
import Footer from '../../components/Footer'
import { aboutImage } from '../../assets'
import { Divider } from '@mantine/core'
import { Link } from 'react-router-dom'

const AboutSection = ({ title, icon, children }) => (
  <div className="mb-12">
    <h2 className="flex items-center text-2xl font-bold mb-4 text-secondary">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    <div className="text-gray-700">{children}</div>
  </div>
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
    <>
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <div className='container mx-auto px-4 py-32'>
        
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 my-auto text-left">
          <div>
            <h1 className='text-4xl font-bold text-accent mb-12 text-left'>About VAJA</h1>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to VAJA, South Africa's premier destination for quality saunas and steam rooms. Since our founding in 1970, we have dedicated ourselves to providing an unparalleled selection of sauna and steam solutions to fit every taste and budget.
            </p>
            <p className="text-lg text-gray-700">
              With over half a century of expertise, VAJA has become synonymous with excellence in the design, manufacture, and supply of luxury sauna and steam products both in South Africa and across the globe.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={aboutImage} 
              alt="Luxurious sauna interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <AboutSection title="Our Journey" icon={<FaHistory className="text-secondary" />}>
          <p>
            Founded with the vision to cater to the domestic market's need for high-quality saunas, VAJA has evolved significantly over the past 51 years. Our journey began with a simple yet passionate commitment to excellence, which remains at the heart of everything we do. Today, our products grace homes and commercial spaces worldwide, showcasing our commitment to quality, innovation, and design.
          </p>
        </AboutSection>

        <AboutSection title="Service & Maintenance" icon={<FaTools className="text-secondary" />}>
          <p>
            At VAJA, we understand the importance of reliable service and maintenance. Our commitment to our clients extends beyond the sale, with efficient and prompt service solutions to ensure your sauna or steam unit remains in optimal condition. We maintain an extensive inventory of spare parts in-house to minimise downtime, ensuring a quick turnaround for all service needs.
          </p>
          <p className="mt-4">
            Our mobile service and maintenance teams are always prepared to assist with a smile, embodying our dedication to customer satisfaction and support. Whether you're seeking routine maintenance or require urgent repairs, VAJA is here to ensure your experience is seamless and satisfying.
          </p>
        </AboutSection>

        <AboutSection title="Global Reach, Local Touch" icon={<FaGlobeAfrica className="text-secondary" />}>
          <p>
            While VAJA has grown to have a global presence, our roots remain firmly planted in South Africa. We take pride in our heritage and the trust our clients place in us, from local households to international venues. Our global reach allows us to bring the best of the world to your doorstep, while our local touch ensures personalised service and attention to detail.
          </p>
        </AboutSection>

        <Divider className='my-12 bg-secondary w-1/2 mx-auto h-2' />

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-accent mb-4">Join Our Legacy</h2>
          <p className="text-lg text-gray-700">
            Choosing VAJA means more than just purchasing a sauna or steam room; it's an investment in quality, luxury, and a lifestyle supported by unparalleled service. We invite you to explore our range and join the thousands of satisfied clients who have made VAJA a part of their wellness journey.
          </p>
        </div>

        <AnimatedButton />
      </div>

      <Footer />
    </div>
    </>
  )
}

export default About
