import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';

const galleryItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1717356495389-6ab1e5ff9d84?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Luxurious wooden sauna', title: 'Classic Wooden Sauna' },
  { id: 2, src: 'https://plus.unsplash.com/premium_photo-1683141182191-6c3dc91f9536?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Modern steam room', title: 'Contemporary Steam Room' },
  { id: 3, src: 'https://images.unsplash.com/photo-1712659604528-b179a3634560?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Outdoor sauna with view', title: 'Scenic Outdoor Sauna' },
  { id: 4, src: 'https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Mosaic-tiled steam room', title: 'Mosaic Wellness Oasis' },
  { id: 5, src: 'https://images.unsplash.com/photo-1712659606957-b7395ba9ebb2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Infrared sauna cabin', title: 'High-Tech Infrared Sauna' },
  { id: 6, src: 'https://images.unsplash.com/photo-1713270176394-3f9f91f43905?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Aromatherapy steam room', title: 'Aromatherapy Haven' },
];

const GalleryItem = ({ item, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
    className="relative overflow-hidden rounded-lg shadow-lg"
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
);

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
