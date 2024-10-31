import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../../../utils/motion';
import { Navbar } from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { aromaImage } from '../../../assets';
import { Divider } from '@mantine/core';

const fragrances = [
  'Pine Needle',
  'Eucalyptus',
  'Sandalwood',
  'Peppermint',
  'Green Apple',
  'Blood Orange',
  'Rose'
];

const AuromaConcentrates = () => {
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
            Aroma Concentrates
          </h1>
          <p className="text-secondary max-w-2xl mx-auto">
            Enhance your sauna or steam room experience with our wide variety of fragrant essential oils, 
            carefully selected to create the perfect atmosphere for relaxation and rejuvenation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={aromaImage}
                alt="Aroma Concentrates"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-accent/10 rounded-2xl" />
          </motion.div>

          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            initial="hidden"
            animate="show"
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-secondary mb-6">Our Fragrance Collection</h2>
            <div className="grid grid-cols-2 gap-4">
              {fragrances.map((fragrance, index) => (
                <motion.div
                  key={fragrance}
                  variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-secondary">{fragrance}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <Divider className="my-16 bg-secondary w-1/2 mx-auto h-1" />

        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Ready to Transform Your Wellness Experience?
          </h3>
          <p className="text-gray-600 mb-8">
            Contact us to learn more about our aroma concentrates and how they can enhance your sauna or steam room experience.
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Get in Touch
          </button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AuromaConcentrates;