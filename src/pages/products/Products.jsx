import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Divider } from '@mantine/core';
import { saunaRooms } from '../../constants';
import SaunaCard from '../../components/SaunaCard';



const Products = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold text-accent mb-12 text-center">
          Our Premium Sauna Rooms
        </h1>

        <motion.p
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          initial="hidden"
          animate="show"
          className="text-secondary text-center mb-16 max-w-2xl mx-auto"
        >
          Discover our exquisite range of sauna rooms, crafted to provide the ultimate relaxation experience. Each room is designed with premium materials and innovative features to enhance your wellness journey.
        </motion.p>

        <div className="space-y-16">
          {saunaRooms.map((sauna, index) => (
            <SaunaCard key={index} sauna={sauna} index={index} />
          ))}
        </div>

        <Divider className='my-12 bg-secondary w-1/2 mx-auto h-2' />

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-secondary mb-4">Need a custom solution?</h3>
          <p className="text-gray-600 mb-8">We offer custom-sized sauna kits tailored to your specific requirements. Contact our experienced design team to create your dream sauna.</p>
          <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Get a Custom Quote
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
