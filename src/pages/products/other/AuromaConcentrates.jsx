import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../../../utils/motion';
import { Navbar } from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { aromaImage } from '../../../assets';
import { Divider } from '@mantine/core';
import { SEOHead } from '../../../components/SEOHead';
import { Link } from 'react-router-dom';

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
      <SEOHead
        title="Steam Room and Sauna Aroma Concentrates | Vaja"
        description="Enhance your sauna and steam room sessions with professional aroma concentrates. Choose from eucalyptus, pine needle, peppermint, and more."
        keywords="steam room accessories, sauna accessories, aroma concentrates, eucalyptus sauna oil"
        canonicalUrl="/products/auroma-concentrates"
        type="website"
      />
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
            Our aroma concentrates are formulated for sauna and steam room use, helping you create a consistent wellness atmosphere with high-quality fragrance profiles.
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
            Contact us for recommended fragrance selections, usage guidance, and compatibility with your sauna or steam room setup.
          </p>
          <Link to="/contact" className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-block">
            Get in Touch
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default AuromaConcentrates;
