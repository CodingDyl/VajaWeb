import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import { Navbar } from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import {  Tabs } from '@mantine/core';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ThreeDViewer } from '../../../components/3DViewer';
import { IconCheckbox, IconRuler, IconPhoto, IconTools, IconInfoCircle, IconDownload } from '@tabler/icons-react';
import { productInfo } from '../../../constants/productInfo';
import { productIcons } from '../../../constants/productIcons';
import { aurora_plan, elysium_plan } from '../../../../public';

const ProductPage = ({ products }) => {
  const { productSlug } = useParams();
  const product = products[productSlug];
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="min-h-screen bg-primary">
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
              <p className="text-gray-700">{product?.productDescription}</p>
            </div>

            <Link 
              to="/contact" 
              className="inline-flex w-fit bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Request Quote
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 3D Viewer Section */}
      {product?.embed && (
        <motion.section
          variants={fadeIn('up', 'spring', 0.4, 0.75)}
          initial="hidden"
          whileInView="show"
          className="container mx-auto px-4 py-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Explore in 3D</h2>
            <ThreeDViewer 
              embedUrl={product.embed} 
              title={product.name}
            />
          </div>
        </motion.section>
      )}

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
              { id: 'materials', label: 'Materials', icon: IconTools },
              { id: 'dimensions', label: 'Dimensions', icon: IconRuler },
              { id: 'gallery', label: 'Gallery', icon: IconPhoto },
              { id: 'info', label: 'Product Info', icon: IconInfoCircle },
              { id: 'plans', label: 'Plans', icon: IconDownload }
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
                {productInfo[product?.name]?.features.map((feature, index) => {
                  const Icon = productIcons[feature.icon];
                  return (
                    <motion.div
                      key={index}
                      variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-secondary">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </Tabs.Panel>

            <Tabs.Panel value="materials" pt="xl">
              <motion.div 
                variants={fadeIn('up', 'spring', 0.2, 0.75)}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {product?.materials.map((material, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                    className="space-y-4 p-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                      <img
                        src={material.image}
                        alt={material.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-center text-secondary">{material.title}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </Tabs.Panel>

            <Tabs.Panel value="dimensions" pt="xl">
              <motion.div 
                variants={fadeIn('up', 'spring', 0.2, 0.75)}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {Object.entries(product?.dimensions || {}).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                    className="text-center p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold capitalize mb-2 text-secondary">{key}</h3>
                    <p className="text-2xl text-accent">{value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </Tabs.Panel>

            <Tabs.Panel value="gallery" pt="xl">
              <motion.div 
                variants={fadeIn('up', 'spring', 0.2, 0.75)}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {product?.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                    className="aspect-video relative rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </Tabs.Panel>

            <Tabs.Panel value="info" pt="xl">
              <motion.div 
                variants={fadeIn('up', 'spring', 0.2, 0.75)}
                className="space-y-8"
              >
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Product Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {productInfo[product?.name]?.description}
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Dimensions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(product?.dimensions || {}).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                        className="text-center p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300"
                      >
                        <h3 className="text-lg font-semibold capitalize mb-2 text-secondary">{key}</h3>
                        <p className="text-2xl text-accent">{value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Tabs.Panel>

            <Tabs.Panel value="plans" pt="xl">
              <motion.div 
                variants={fadeIn('up', 'spring', 0.2, 0.75)}
                className="flex flex-col items-center justify-center min-h-[400px]"
              >
                <div className="max-w-2xl w-full">
                  {product?.name === 'Aurora' && (
                    <motion.div
                      variants={fadeIn('up', 'spring', 0.1, 0.75)}
                      className="p-8 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      <h3 className="text-2xl font-semibold text-secondary mb-6">Aurora Plans</h3>
                      <a
                        href={aurora_plan}
                        download="aurora_plan.pdf"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-colors"
                      >
                        <IconDownload className="w-5 h-5" />
                        Download Plans
                      </a>
                    </motion.div>
                  )}
                  {product?.name === 'Elysium' && (
                    <motion.div
                      variants={fadeIn('up', 'spring', 0.1, 0.75)}
                      className="p-8 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      <h3 className="text-2xl font-semibold text-secondary mb-6">Elysium Plans</h3>
                      <a
                        href={elysium_plan}
                        download="elysium_plan.pdf"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-colors"
                      >
                        <IconDownload className="w-5 h-5" />
                        Download Plans
                      </a>
                    </motion.div>
                  )}
                  {product?.name !== 'Aurora' && product?.name !== 'Elysium' && (
                    <motion.div
                      variants={fadeIn('up', 'spring', 0.1, 0.75)}
                      className="p-8 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      <h3 className="text-2xl font-semibold text-secondary mb-6">Plans</h3>
                      <p className="text-gray-600 mb-6">Currently, there are no plans available for download for this product.</p>
                      <p className="text-gray-500 text-sm">Please check back later or contact us for more information.</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </Tabs.Panel>
          </motion.div>
        </Tabs>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ProductPage;
