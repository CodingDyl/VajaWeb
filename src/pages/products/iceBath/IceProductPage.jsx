import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import { Navbar } from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Tabs } from '@mantine/core';
import { useParams, Navigate, Link } from 'react-router-dom';
import { IconCheckbox, IconRuler, IconTools, IconInfoCircle, IconVideo } from '@tabler/icons-react';
import { iceBaths } from '../../../constants';
import { SEOHead } from '../../../components/SEOHead';

const IceProductPage = () => {
  const { productSlug } = useParams();
  const slugAliases = {
    premiumicebath: 'premium-ice-bath',
  };
  const normalizedSlug = slugAliases[productSlug] || productSlug;
  const product = iceBaths.find(p => p.slug === normalizedSlug);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead
        title="Premium Ice Bath & Cold Plunge Tub | Vaja"
        description="Recover faster with a professional-grade ice bath from Vaja. Premium cold plunge tubs for athletes and wellness enthusiasts. Delivery across South Africa."
        keywords="ice baths for sale, ice tubs for sale, cold plunge tub for sale, cold tub for sale"
        canonicalUrl="/products/icebath/premiumicebath"
        type="product"
        productData={{
          brand: 'Vaja',
          availability: 'InStock',
        }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 pt-32 mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div 
            variants={fadeIn('right', 'spring', 0.2, 0.75)}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img 
                src={product?.images[activeImage]}
                alt={product?.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {product?.images.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                    activeImage === index ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product?.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            variants={fadeIn('left', 'spring', 0.3, 0.75)}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-secondary mb-2">{product?.name}</h1>
              <h2 className="text-2xl text-accent mb-2">{product?.productTitle}</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-600">{product?.description}</p>
              <p className="text-gray-700">
                This professional cold plunge tub is designed for athletes, high-performance recovery facilities, and home wellness users who need stable temperature control and hygienic filtration.
              </p>
            </div>

            <Link 
              to="/contact" 
              className="inline-flex w-fit bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Request Quote
            </Link>
            <Link
              to="/products/equipment"
              className="inline-flex w-fit text-accent underline underline-offset-4 font-medium"
            >
              Explore sauna heaters and equipment
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Details Tabs Section */}
      <motion.section 
        variants={fadeIn('up', 'spring', 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 py-16"
      >
        <Tabs 
          defaultValue="features" 
          color="teal"
          className="bg-white rounded-xl p-8 shadow-xl"
        >
          <Tabs.List className="flex gap-8 justify-center items-center border-b border-secondary/20 pb-4 mb-8">
            {[
              { id: 'features', label: 'Features', icon: IconCheckbox },
              { id: 'technical', label: 'Technical', icon: IconTools },
              { id: 'maintenance', label: 'Maintenance', icon: IconVideo },
              { id: 'considerations', label: 'Considerations', icon: IconInfoCircle }
            ].map((tab) => (
              <motion.div
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Tabs.Tab
                  value={tab.id}
                  className={`
                    relative text-lg capitalize transition-all duration-300
                    text-secondary/70 hover:text-accent
                    [&[data-active]]:text-accent [&[data-active]]:font-semibold
                    [&[data-active]]:scale-110
                    after:content-['']
                    after:absolute after:bottom-[-1rem]
                    after:left-0 after:right-0 after:h-0.5
                    after:bg-accent after:scale-x-0 after:transition-transform
                    [&[data-active]]:after:scale-x-100
                  `}
                >
                  <div className="flex items-center gap-2">
                    <tab.icon className="w-5 h-5 md:hidden" />
                    <span className="hidden md:inline">{tab.label}</span>
                  </div>
                </Tabs.Tab>
              </motion.div>
            ))}
          </Tabs.List>

          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <Tabs.Panel value="features" pt="xl">
              <motion.div 
                variants={fadeIn('up', 'spring', 0.2, 0.75)}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {product?.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                    className="flex items-start space-x-4 p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Tabs.Panel>

            <Tabs.Panel value="technical" pt="xl">
              <motion.div 
                variants={fadeIn('up', 'spring', 0.2, 0.75)}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {Object.entries(product?.technical || {}).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                    className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold capitalize mb-2 text-secondary">{key}</h3>
                    <p className="text-2xl text-accent">{value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </Tabs.Panel>

            <Tabs.Panel value="maintenance" pt="xl">
              <motion.div 
                variants={fadeIn('up', 'spring', 0.2, 0.75)}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {product?.maintenance.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                    className="flex items-start space-x-4 p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Tabs.Panel>

            <Tabs.Panel value="considerations" pt="xl">
              <motion.div 
                variants={fadeIn('up', 'spring', 0.2, 0.75)}
                className="space-y-8"
              >
                {product?.considerations.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                    className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-secondary mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </Tabs.Panel>
          </motion.div>
        </Tabs>
      </motion.section>

      <Footer />
    </div>
  );
};

export default IceProductPage;
