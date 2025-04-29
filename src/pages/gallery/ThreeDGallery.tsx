import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { ThreeDViewer } from '../../components/3DViewer';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';

interface ThreeDRender {
  id: string;
  title: string;
  embedUrl: string;
  description: string;
}

const threeDRenderings: ThreeDRender[] = [
  {
    id: 'hcNMs',
    title: 'Luxury Home Sauna in Cape Town',
    embedUrl: 'https://kuula.co/share/hcNMs?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30',
    description: 'A custom-built residential sauna featuring Nordic spruce and smart controls, designed for our client\'s modern beachfront property'
  },
  {
    id: 'hlrGD',
    title: 'Oakvale Sauna',
    embedUrl: 'https://kuula.co/share/hlrGD?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30',
    description: 'Custom commercial sauna installation for a luxury boutique hotel, accommodating up to 8 guests with premium cedar wood construction'
  },
  {
    id: 'hPRhY',
    title: 'Private Estate Wellness Center',
    embedUrl: 'https://kuula.co/share/hPRhY?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30',
    description: 'A bespoke dual-room sauna complex built for a private estate, combining traditional Finnish and infrared technologies'
  },
  {
    id: 'hY176',
    title: 'Urban Apartment Sauna Solution',
    embedUrl: 'https://kuula.co/share/hY176?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30',
    description: 'Compact yet luxurious sauna designed for our client\'s city apartment, maximizing space while delivering premium features'
  },
  {
    id: 'hY1cq',
    title: 'Eco-Resort Wellness Facility',
    embedUrl: 'https://kuula.co/share/hY1cq?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30',
    description: 'Large-scale commercial sauna project for an eco-resort, featuring sustainable materials and energy-efficient design'
  },
  {
    id: 'hXN4g',
    title: 'Smart Home Integration Sauna',
    embedUrl: 'https://kuula.co/share/hXN4g?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30',
    description: 'Residential sauna with full smart home integration, custom-built for a tech enthusiast client in Johannesburg'
  }
];

export function ThreeDGallery() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 pt-32 mb-16"
      >
        <motion.div
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Customer Sauna Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step inside our completed custom sauna installations. Each project represents a unique collaboration with our clients, bringing their wellness vision to life through bespoke design and expert craftsmanship.
          </p>
        </motion.div>

        {/* 3D Renderings Grid */}
        <div className="grid grid-cols-1 gap-16">
          {threeDRenderings.map((render, index) => (
            <motion.div
              key={render.id}
              variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-6"
            >
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-secondary">{render.title}</h2>
                <p className="text-gray-600">{render.description}</p>
              </div>
              
              <ThreeDViewer
                embedUrl={render.embedUrl}
                title={render.title}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default ThreeDGallery; 