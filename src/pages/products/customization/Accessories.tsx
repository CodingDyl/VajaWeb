import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import { Navbar } from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Divider } from '@mantine/core';
import {
  thermometer,
  black_sandtimer,
  WRC_sandtimer,
  WRC,
  WRC2,
} from '../../../assets';

interface AccessoryItem {
  name: string;
  description: string;
  image: string;
}

const accessories: AccessoryItem[] = [
  {
    name: "Black Sand Timer",
    description: "A stylish 15-minute sand timer",
    image: black_sandtimer,
  },
  {
    name: "Western Red Cedar Sand Timer",
    description: "A stylish 15-minute sand timer crafted from solid Western Red Cedar timber",
    image: WRC_sandtimer,
  },
  {
    name: "Thermometer / Hydrometer",
    description: "Stylish combo measuring 0°C-120°C temperature and 0-100% RH humidity",
    image: thermometer,
  },
  {
    name: "Red Cedar Bucket",
    description: "3L Western Red Cedar bucket with plastic insert and matching ladle",
    image: WRC,
  },
  {
    name: "Western Red Cedar Spoon",
    description: "Western Red Cedar spoon",
    image: WRC2,
  },
];

const AccessoryCard: React.FC<{ item: AccessoryItem; index: number }> = ({ item, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
    className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
  >
    <div className="aspect-square relative overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-contain p-4 transform transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-secondary mb-2">{item.name}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
  </motion.div>
);

export function Accessories() {
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
            Sauna Accessories
          </h1>
          <p className="text-secondary max-w-2xl mx-auto">
            Enhance your sauna experience with our premium collection of accessories. 
            Each piece is carefully crafted from the finest materials to complement 
            your wellness journey.
          </p>
        </motion.div>

        <Divider className="my-12 bg-secondary w-1/2 mx-auto h-1" />

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {accessories.map((item, index) => (
            <AccessoryCard key={index} item={item} index={index} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          initial="hidden"
          animate="show"
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Looking for Something Special?
          </h3>
          <p className="text-gray-600 mb-8">
            Contact us to inquire about custom accessories or specific requirements 
            for your sauna setup.
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default Accessories; 