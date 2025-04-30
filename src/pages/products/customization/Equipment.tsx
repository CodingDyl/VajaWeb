import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils/motion';
import { Navbar } from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { 
  cilindro,
  globe,
  m3,
  modulo,
  harvia,
  harviae,
  modulo_m,
  virta,
  harvia_cilindro,
  harvia_concept,
  harvia_m3,
  harvia_sauna_set,
  harvia_heater,
  harvia_cube,
  harvia_the_wall_e,
} from '../../../assets';

interface HeaterInfo {
  id: string;
  name: string;
  image: string;
  description: string;
}

const heaters: HeaterInfo[] = [
  {
    id: 'harvia-heater',
    name: 'Harvia The Wall',
    image: harvia_heater,
    description: 'Harvia The Wall Black Steel electric heater for medium-sized sauna rooms combines minimalistic Scandinavian design and user-friendly operation with top quality.',
  },
  {
    id: 'harvia-wall-45e',
    name: 'Harvia The Wall 45e',
    image: harvia_the_wall_e,
    description: 'Harvia The Wall 45e is a modern electric sauna heater that offers a sleek design and a compact size.',
  },
  {
    id: 'harvia-concept',
    name: 'Harvia Concept',
    image: harvia_concept,
    description: 'Harvia Concept is a modern electric sauna heater that offers a sleek design and a compact size.',
  },
  {
    id: 'harvia-cube',
    name: 'Harvia Cube',
    image: harvia_cube,
    description: 'Harvia Cube is a modern electric sauna heater that offers a sleek design and a compact size.',
  },
  {
    id: 'harvia-cilindro',
    name: 'Harvia Cilindro',
    image: harvia_cilindro,
    description: 'The Harvia Cilindro Black Steel pillar heaters are stylish electric heaters ideal for many needs.',
  },
  {
    id: 'harvia-m3',
    name: 'Harvia M3',
    image: harvia_m3,
    description: 'Traditional wood burning sauna heater',
  },
];

const Equipment = () => {
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
            Harvia's Heaters
          </h1>
          <p className="text-secondary max-w-2xl mx-auto">
            Discover our premium range of Harvia sauna heaters, designed to provide the perfect heat for your sauna experience. From traditional wood-burning to modern electric solutions, we have the ideal heater for your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heaters.map((heater, index) => (
            <motion.div
              key={heater.id}
              variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
              initial="hidden"
              animate="show"
              className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="h-80 relative p-4">
                <img
                  src={heater.image}
                  alt={heater.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {heater.name}
                </h3>
                <p className="text-gray-600">
                  {heater.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          initial="hidden"
          animate="show"
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            View Full Range
          </h3>
          <p className="text-gray-600 mb-8">
            Explore Harvia's complete collection of sauna heaters and accessories.
          </p>
          <a 
            href="https://www.harvia.com/fi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Visit Harvia Website
          </a>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Equipment;