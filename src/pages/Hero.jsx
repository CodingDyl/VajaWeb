import React from 'react'
import { Divider, Image } from '@mantine/core'
import { sauna_hero } from '../assets'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Link } from 'react-router-dom'
import { SEOHead } from '../components/SEOHead'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      <SEOHead
        title="Saunas and Steam Rooms Suppliers in South Africa | Vaja"
        description="South Africa's leading sauna and steam room supplier since 1970. Custom saunas for home and commercial use with expert installation. Get a free quote."
        keywords="sauna suppliers, sauna manufacturers, steam room manufacturers, sauna installations, steam room installation, home sauna installation"
        canonicalUrl="/"
        image={sauna_hero}
        type="website"
      />
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2">
            Luxury Saunas & Steam Rooms
          </h1>
          <Divider className='w-1/2 bg-accent h-2 my-8' />
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-secondary mb-6">
            Crafted for the Ultimate Wellness Experience
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <Link to="/products">
              <button className="w-full md:w-auto bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                Discover Our Sauna's
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full md:w-auto bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-colors">
                Contact Us Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute right-[-10%] bottom-[-15%] w-1/2 lg:w-7/12">
        <div className="relative h-full w-full hidden md:block">
          <Image
            src={sauna_hero}
            alt="Luxury sauna interior with premium finishes and modern design"
            fill
            className="object-cover rounded-l-[120px] border-4 border-accent"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority="true"
          />
        </div>
      </div>
      <div className="absolute bottom-10 md:hidden w-full flex justify-center items-center">
        <a href={`#about`}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-accent flex justify-center items-start p-2">
            <motion.div animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-accent mb-1"/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
