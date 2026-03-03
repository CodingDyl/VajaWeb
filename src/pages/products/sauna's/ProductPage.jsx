import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import { Navbar } from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Tabs } from '@mantine/core';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ThreeDViewer } from '../../../components/3DViewer';
import { IconCheckbox, IconPhoto, IconTools, IconInfoCircle, IconDownload, IconMapPin } from '@tabler/icons-react';
import { productInfo } from '../../../constants/productInfo';
import { productIcons } from '../../../constants/productIcons';
import { aurora_plan, elysium_plan, loyly_plan, kaelis_plan } from '../../../../public';
import { aurora_plan_img, elysium_plan_img, loyly_plan_img, kaelis_plan_img } from '../../../assets';
import { SEOHead } from '../../../components/SEOHead';

const productSeoMap = {
  aurora: {
    title: 'Aurora Modern Glass Sauna South Africa | Vaja',
    description: 'The Aurora sauna features a striking black glass exterior, oak interior and LED ambient lighting. Request a quote in Johannesburg, Cape Town or Pretoria.',
  },
  elysium: {
    title: 'Elysium Outdoor Sauna with Shower | Vaja',
    description: 'Luxury sauna and shower combo in Black Pine and Obeche timber. Designed for outdoor spaces. Available in Johannesburg, Cape Town, and Pretoria. Get a quote.',
  },
  loyly: {
    title: 'Loyly Wood Fired Sauna with Wood Burning Sauna Stove | Vaja',
    description: 'The Loyly sauna with rustic black pine exterior, wood burning heater and large feature window. A bold, minimalist design available across South Africa.',
  },
  kaelis: {
    title: 'Kaelis Custom Outdoor Sauna in South Africa | Vaja',
    description: 'The Kaelis bespoke sauna with thermo pine exterior, obeche wood seating and modern design built for everyday luxury. Available across South Africa today.',
  },
  vakio: {
    title: 'Vakio DIY Sauna Kit South Africa | Vaja',
    description: 'The Vakio standard sauna kit offers easy installation, clean design and premium materials for homes or small spaces. Fully upgradeable and available in SA.',
  },
};

const ProductPage = ({ products }) => {
  const { productSlug } = useParams();
  const product = products[productSlug];
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    setIsLoading(true);
    setLoadedImages({});
    
    // Preload all product images
    if (product?.images) {
      product.images.forEach((img, index) => {
        const image = new Image();
        image.src = img;
        image.onload = () => {
          setLoadedImages(prev => ({ ...prev, [index]: true }));
          if (index === 0) setIsLoading(false);
        };
      });
    }
  }, [productSlug, product?.images]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const locations = [
    { name: 'Johannesburg', region: 'Gauteng' },
    { name: 'Cape Town', region: 'Western Cape' },
    { name: 'Pretoria', region: 'Gauteng' }
  ];
  const seoData = productSeoMap[productSlug] || {
    title: `${product.name} | Vaja`,
    description: `Premium ${product.name} sauna by Vaja. ${product.description}`,
  };

  const ImageSkeleton = () => (
    <div className="animate-pulse">
      <div className="aspect-square bg-gray-200 rounded-2xl" />
      <div className="grid grid-cols-4 gap-4 mt-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-200 rounded-lg" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={`${product.name.toLowerCase()} sauna, bespoke home saunas, custom built sauna, sauna for sale`}
        canonicalUrl={`/products/${product.slug}`}
        image={product.images[0]}
        type="product"
        productData={{
          brand: "Vaja",
          availability: "InStock"
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
            {isLoading ? (
              <ImageSkeleton />
            ) : (
              <>
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img 
                    src={product?.images[activeImage]}
                    alt={product?.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="eager"
                    decoding="async"
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
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
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
              
              {/* Location Information */}
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                  <IconMapPin className="w-5 h-5 text-accent" />
                  Available in South Africa
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {locations.map((location, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      <span className="font-medium text-secondary">{location.name}</span>
                      <span className="block text-gray-500">{location.region}</span>
                    </div>
                  ))}
                </div>
              </div>
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
              { id: 'gallery', label: 'Gallery', icon: IconPhoto },
              { id: 'info', label: 'Product Info', icon: IconInfoCircle },
              ...(product?.name !== 'Standard' ? [{ id: 'plans', label: 'Plans', icon: IconDownload }] : [])
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
                  {product?.name === 'Vakio' ? (
                    <>
                      <h3 className="text-2xl font-bold text-secondary mb-4">Available Kits</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {product?.kits.map((kit, index) => (
                          <motion.div
                            key={kit.id}
                            variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                            className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300"
                          >
                            <h4 className="text-xl font-semibold text-accent mb-4">{kit.name}</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-secondary">Width:</span>
                                <span className="text-accent">{kit.dimensions.width}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-secondary">Depth:</span>
                                <span className="text-accent">{kit.dimensions.depth}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold text-secondary mb-4">Dimensions</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Object.entries(productInfo[product?.name]?.dimensions || {}).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                            className="text-center p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300"
                          >
                            <h3 className="text-lg font-semibold capitalize mb-2 text-secondary">{key}</h3>
                            <p className="text-2xl text-accent">{value}mm</p>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <motion.div
                  variants={fadeIn('up', 'spring', 0.3, 0.75)}
                  className="mt-8 p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-secondary mb-3">Material Disclaimer</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to make material changes if the prices or availability of raw materials significantly change during the validity period. We strive to maintain material quality at least at the original level, regardless of any material substitutions.
                  </p>
                </motion.div>
              </motion.div>
            </Tabs.Panel>

            {product?.name !== 'Vakio' && (
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
                        <div className="mb-6">
                          <img 
                            src={aurora_plan_img} 
                            alt="Aurora Plan Preview" 
                            className="w-full h-auto rounded-lg shadow-lg"
                          />
                        </div>
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
                        <div className="mb-6">
                          <img 
                            src={elysium_plan_img} 
                            alt="Elysium Plan Preview" 
                            className="w-full h-auto rounded-lg shadow-lg"
                          />
                        </div>
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
                    {product?.name === 'Loyly' && (
                      <motion.div
                        variants={fadeIn('up', 'spring', 0.1, 0.75)}
                        className="p-8 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 text-center"
                      >
                        <h3 className="text-2xl font-semibold text-secondary mb-6">Loyly Plans</h3>
                        <div className="mb-6">
                          <img 
                            src={loyly_plan_img} 
                            alt="Loyly Plan Preview" 
                            className="w-full h-auto rounded-lg shadow-lg"
                          />
                        </div>
                        <a
                          href={loyly_plan}
                          download="loyly_plan.pdf"
                          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-colors"
                        >
                          <IconDownload className="w-5 h-5" />
                          Download Plans
                        </a>
                      </motion.div>
                    )}
                    {product?.name === 'Kaelis' && (
                      <motion.div
                        variants={fadeIn('up', 'spring', 0.1, 0.75)}
                        className="p-8 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 text-center"
                      > 
                        <h3 className="text-2xl font-semibold text-secondary mb-6">Kaelis Plans</h3>
                        <div className="mb-6">
                          <img 
                            src={kaelis_plan_img} 
                            alt="Kaelis Plan Preview" 
                            className="w-full h-auto rounded-lg shadow-lg"
                          />
                        </div>
                        <a
                          href={kaelis_plan}
                          download="kaelis_plan.pdf"
                          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-colors"
                        >
                          <IconDownload className="w-5 h-5" />
                          Download Plans
                        </a>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </Tabs.Panel>
            )}
          </motion.div>
        </Tabs>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ProductPage;
