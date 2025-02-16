import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { galleryItems } from '../../constants/galleryImages';

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

const Gallery = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Gallery;
