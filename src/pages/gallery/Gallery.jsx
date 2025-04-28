import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../../utils/motion';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { galleryItems } from '../../constants/galleryImages';
import {
  gal_1, gal_2, gal_3, gal_4, gal_5, gal_6, gal_7, gal_8, gal_9, gal_10,
  gal_11, gal_12, gal_13, gal_14, gal_15, gal_16, gal_17, gal_18, gal_19, gal_20,
} from '../../assets';

const GalleryItem = ({ item, index }) => {
  const slug = item.title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={`/gallery/${item.route}`}>
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
        role="img"
        aria-label={item.alt}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <h3 className="text-white text-lg font-semibold">{item.title}</h3>
        </div>
      </motion.div>
    </Link>
  );
};

const StandaloneGalleryImage = ({ src, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
    className="relative overflow-hidden rounded-lg shadow-lg"
  >
    <img
      src={src}
      alt={`Gallery image ${index + 1}`}
      loading="lazy"
      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
    />
  </motion.div>
);

const AnimatedButton = () => (
  <Link to="/contact">
    <motion.div
      className="flex justify-center mt-12 mb-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.button
        className="px-8 py-3 bg-accent text-white rounded-full font-semibold text-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300"
        variants={zoomIn(0.2, 0.5)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Transform Your Space with a Custom Sauna
      </motion.button>
    </motion.div>
  </Link>
);

const Gallery = () => {
  const standaloneImages = [
    gal_1, gal_2, gal_3, gal_4, gal_5, gal_6, gal_7, gal_8, gal_9, gal_10,
    gal_11, gal_12, gal_13, gal_14, gal_15, gal_16, gal_17, gal_18, gal_19, gal_20,
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 py-32"
      >
        <motion.h1
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          className="text-4xl font-bold text-accent mb-12 text-center"
        >
          Our Gallery
        </motion.h1>

        <motion.p
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          className="text-secondary text-center mb-12 max-w-2xl mx-auto"
        >
          Immerse yourself in the tranquil beauty of our saunas and steam rooms. Each space is designed to provide the ultimate relaxation experience, blending natural elements with modern comfort.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <motion.h2
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          className="text-3xl font-bold text-accent mb-8 text-center"
        >
          More Inspirational Spaces
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {standaloneImages.map((src, index) => (
            <StandaloneGalleryImage key={index} src={src} index={index} />
          ))}
        </div>

        <AnimatedButton />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Gallery;
