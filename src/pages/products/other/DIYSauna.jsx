import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../../../utils/motion';
import { Navbar } from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Carousel } from '@mantine/carousel';
import { Divider } from '@mantine/core';
import { productImage, sauna_hero } from '../../../assets';

const saunaKits = [
  {
    id: 'kit-0',
    name: 'Sauna Kit 0',
    capacity: '0-1 Person',
    dimensions: '1400mm Wide x 1400mm Deep',
    image: productImage,
  },
  {
    id: 'kit-1',
    name: 'Sauna Kit 1',
    capacity: '1-2 Person',
    dimensions: '1850mm Wide x 1350mm Deep',
    image: sauna_hero,
  },
  {
    id: 'kit-2',
    name: 'Sauna Kit 2',
    capacity: '3-4 Person',
    dimensions: '2100mm Wide x 1950mm Deep',
    image: productImage,
  },
  {
    id: 'kit-3',
    name: 'Sauna Kit 3',
    capacity: '5-6 Person',
    dimensions: '2600mm Wide x 2100mm Deep',
    image: sauna_hero,
  },
];

const kitIncludes = [
  'Pre-manufactured interlocking walls',
  'Roof structure',
  'Upper and lower bench seats',
  'Lock floor system',
  'Complete assembly instructions',
];

const DIYSauna = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <motion.div
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-accent mb-6">
            DIY Sauna Kits
          </h1>
          <p className="text-secondary max-w-2xl mx-auto">
            Transform your space with our easy-to-assemble DIY sauna kits. 
            Perfect for both residential and commercial installations, each kit is 
            designed for straightforward assembly while maintaining premium quality.
          </p>
        </motion.div>

        <motion.div
          variants={slideIn('up', 'tween', 0.2, 1)}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <Carousel
            withIndicators
            height={400}
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
            ]}
            className="rounded-xl"
          >
            {saunaKits.map((kit) => (
              <Carousel.Slide key={kit.id}>
                <div className="h-full p-4">
                  <div className="bg-white rounded-lg shadow-xl h-full overflow-hidden">
                    <div className="h-48 relative">
                      <img
                        src={kit.image}
                        alt={kit.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-secondary mb-2">{kit.name}</h3>
                      <p className="text-accent mb-2">Capacity: {kit.capacity}</p>
                      <p className="text-gray-600 text-sm">{kit.dimensions}</p>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          initial="hidden"
          animate="show"
          className="bg-white rounded-lg shadow-xl p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-secondary mb-6">What's Included in Our Kits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {kitIncludes.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-secondary">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Divider className="my-16 bg-secondary w-1/2 mx-auto h-1" />

        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Need a Custom Size?
          </h3>
          <p className="text-gray-600 mb-8">
            We manufacture custom size kits to suit your specific requirements. 
            Contact our experienced design team to create your perfect sauna solution.
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Request Custom Quote
          </button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default DIYSauna;