import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import { Navbar } from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { SEOHead } from '../../../components/SEOHead';
import { galleryCategories } from '../../../constants/galleryImages';
import { getGalleryCategorySeo } from '../../../lib/seo';

const CategoryGallery = () => {
  const { slug } = useParams();

  // Find the matching category
  const category = galleryCategories.find(cat => cat.route === `category/${slug}`);

  if (!category) {
    return (
      <div className="min-h-screen bg-primary">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-accent mb-4">Category Not Found</h1>
          <Link to="/gallery" className="text-accent hover:text-accent/80">
            ← Back to Gallery
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const seoData = getGalleryCategorySeo(category);

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        canonicalUrl={`/gallery/${category.route}`}
      />
      <Navbar />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 py-32"
      >
        <Link to="/gallery">
          <motion.div
            variants={fadeIn('right', 'spring', 0.2, 0.75)}
            className="mb-8 text-accent hover:text-accent/80"
          >
            ← Back to Gallery
          </motion.div>
        </Link>

        <motion.h1
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          className="text-4xl font-bold text-accent mb-8"
        >
          {category.title}
        </motion.h1>

        <motion.p
          variants={fadeIn('down', 'spring', 0.3, 0.75)}
          className="text-secondary mb-12"
        >
          {category.description}
        </motion.p>

        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {category.images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default CategoryGallery; 
