import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, slideIn } from '../../utils/motion';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Divider } from '@mantine/core';
import { saunaRooms } from '../../constants';
import SaunaCard from '../../components/SaunaCard';
import { Link } from 'react-router-dom';
import { IconCheck } from '@tabler/icons-react';

const Products = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 pt-32"
      >
        {/* Navigation Tabs */}
        <motion.div 
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          className="flex justify-center gap-8 mb-12"
        >
          <Link 
            to="/products"
            className="text-xl font-semibold text-accent border-b-2 border-accent px-4 py-2 transition-all hover:scale-105"
          >
            Saunas
          </Link>
          <Link 
            to="/steam-rooms"
            className="text-xl font-semibold text-secondary hover:text-accent transition-all px-4 py-2 hover:scale-105"
          >
            Steam Rooms
          </Link>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          className="max-w-4xl mx-auto text-center space-y-8 mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-accent">
            Experience Luxury & Wellness with VAJA Saunas
          </h1>
          <p className="text-secondary text-lg">
            At VAJA, we design and manufacture premium saunas that bring the essence of relaxation and wellness into your home or business. Crafted with exceptional materials and cutting-edge technology, our saunas offer an elegant, rejuvenating escape tailored to your lifestyle.
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.4, 0.75)}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-semibold text-accent mb-4 text-center">
            The VAJA Sauna Collection: Crafted for Comfort & Style
          </h2>
          <p className="text-secondary text-center">
            Our luxury saunas combine time-honored traditions with modern innovation, delivering an immersive wellness experience. From traditional Finnish saunas to custom-designed contemporary spaces, each VAJA sauna is built to enhance both aesthetic appeal and therapeutic benefits.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.5, 0.75)}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Premium Craftsmanship Card */}
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className="bg-secondary/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-accent mb-6">Premium Craftsmanship</h3>
            <ul className="space-y-4">
              {[
                "Thermo Pine – Durable and dimensionally stable",
                "Pine – Classic and versatile",
                "Obeche – Smooth and lightweight",
                "Western Red Cedar – Naturally aromatic",
                "Lunawood – Thermally modified",
                "Oak Sauna Board – Natural and durable"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                  className="flex items-center gap-3 text-secondary"
                >
                  <IconCheck className="text-accent" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Health Benefits Card */}
          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="bg-secondary/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-accent mb-6">Health & Wellness Benefits</h3>
            <ul className="space-y-4">
              {[
                "Detoxify the body through deep sweating",
                "Improve circulation and promote heart health",
                "Relieve stress & muscle tension",
                "Enhance sleep quality"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                  className="flex items-center gap-3 text-secondary"
                >
                  <IconCheck className="text-accent" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Product Cards */}
        <motion.div 
          variants={staggerContainer()}
          className="space-y-16"
        >
          {saunaRooms.map((sauna, index) => (
            <SaunaCard key={index} sauna={sauna} index={index} />
          ))}
        </motion.div>

        <Divider className="my-16 bg-accent/20 w-1/2 mx-auto h-0.5" />

        {/* Custom Quote Section */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.6, 0.75)}
          className="text-center mb-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-accent mb-4">Need a custom solution?</h3>
          <p className="text-secondary mb-8">
            We offer custom-sized sauna kits tailored to your specific requirements. Contact our experienced design team to create your dream sauna.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
          >
            Get a Custom Quote
          </motion.button>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Products;
