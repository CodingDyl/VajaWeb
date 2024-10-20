import React from 'react'
import { Divider, Image } from '@mantine/core'
import { sauna_hero } from '../assets'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Link } from 'react-router-dom'


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
    <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-2">
            Escape the Stress
          </h1>
          <Divider className='w-1/2 bg-accent h-2 my-8' />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary mb-6">
            Find Inner Calm and Rejuvenate Your Mind.
          </h1>
          <div className="space-x-4 space-y-4 md:space-y-0">
            <button className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Discover Our Sauna
            </button>
            <Link to="/contact">
            <button className="bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-colors">
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
            alt="Sauna interior"
            fill
            className="object-cover rounded-l-[120px] border-4 border-accent"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
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
