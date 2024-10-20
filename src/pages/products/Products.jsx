import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../../utils/motion';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaTree, FaShower, FaFire, FaLeaf } from 'react-icons/fa';
import { Divider } from '@mantine/core';
import { aromaImage, clearPine, western, thermo, obeche } from '../../assets';
const productCategories = [
  {
    title: 'Saunas',
    icon: FaFire,
    description: 'Experience the ultimate relaxation with our premium saunas, designed for both residential and commercial use.',
    products: [
      { name: 'Clear Pine', image: clearPine },
      { name: 'Western Red Cedar', image: western },
      { name: 'Thermo Treated Poplar', image: thermo },
      { name: 'Obeché Slats', image: obeche },
    ]
  },
  {
    title: 'Steam Rooms',
    icon: FaShower,
    description: 'Transform your space with our state-of-the-art steam rooms, perfect for home spas or commercial wellness centers.',
    products: [
      { name: 'Nordmann AT4D Steam Generator', image: 'https://plus.unsplash.com/premium_photo-1683141182191-6c3dc91f9536?q=80&w=1770&auto=format&fit=crop' },
      { name: 'Nordmann Omega Steam System', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1770&auto=format&fit=crop' },
    ]
  },
  {
    title: 'Accessories',
    icon: FaTree,
    description: 'Enhance your sauna or steam room experience with our carefully curated selection of accessories.',
    products: [
      { name: 'Western Red Cedar Sand Timer', image: 'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=1770&auto=format&fit=crop' },
      { name: 'Cedar Bucket & Ladle', image: 'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=1770&auto=format&fit=crop' },
      { name: 'Thermometer / Hygrometer', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1770&auto=format&fit=crop' },
    ]
  },
];

const ProductCard = ({ product, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
  >
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-secondary mb-2">{product.name}</h3>
    </div>
  </motion.div>
);

const CategorySection = ({ category, index }) => (
  <motion.section
    variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
    className="mb-16"
  >
    <div className="flex items-center mb-6">
      <motion.div
        variants={zoomIn(0.2, 0.75)}
        className="bg-accent text-white p-3 rounded-full mr-4"
      >
        <category.icon size={24} />
      </motion.div>
      <h2 className="text-3xl font-bold text-secondary">{category.title}</h2>
    </div>
    <p className="text-gray-600 mb-8">{category.description}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {category.products.map((product, productIndex) => (
        <ProductCard key={productIndex} product={product} index={productIndex} />
      ))}
    </div>
  </motion.section>
);

const diyKits = [
  { name: 'Sauna Kit 0', capacity: '0 – 1 Person', dimensions: '1400mm Wide x 1400mm Deep' },
  { name: 'Sauna Kit 1', capacity: '1 - 2 Person', dimensions: '1850mm Wide x 1350mm Deep' },
  { name: 'Sauna Kit 2', capacity: '3 - 4 Person', dimensions: '2100mm Wide x 1950mm Deep' },
  { name: 'Sauna Kit 3', capacity: '5 - 6 Person', dimensions: '2600mm Wide x 2100mm Deep' },
];

const DIYSaunaKits = () => (
  <motion.section
    variants={fadeIn('up', 'spring', 0.3, 0.75)}
    className="mb-16"
  >
    <h2 className="text-3xl font-bold text-secondary mb-6">DIY SAUNA KITS</h2>
    <p className="text-gray-600 mb-6">VAJA PRODUCTS manufactures 3 Standard DIY Sauna kits which are easy to assemble.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {diyKits.map((kit, index) => (
        <motion.div
          key={index}
          variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
          className="bg-white rounded-lg shadow-md p-4"
        >
          <h3 className="text-lg font-semibold text-secondary mb-2">{kit.name}</h3>
          <p className="text-gray-600">{kit.capacity}</p>
          <p className="text-gray-600">{kit.dimensions}</p>
        </motion.div>
      ))}
    </div>

    <h3 className="text-xl font-semibold text-secondary mb-4">What's in our kits:</h3>
    <p className="text-gray-600 mb-4">All Kits come complete with pre manufactured interlocking walls and roof, upper and lower bench seats and lock floor.</p>
    <p className="text-gray-600 mb-6">We also manufacture custom size kits to suit your requirements. All we need is your preferred sizes and our experienced design team will design your dream Sauna.</p>

    <p className="text-gray-600 font-semibold mb-4">VAJA proudly exports DIY Sauna units across the 54 African countries. Please contact us for quoting and delivery details.</p>
  </motion.section>
);

const aromaConcentrates = [
  'Pine Needle', 'Eucalyptus', 'Sandalwood', 'Peppermint',
  'Green Apple', 'Blood Orange', 'Rose'
];

const AromaConcentrates = () => (
  <motion.section
    variants={fadeIn('up', 'spring', 0.3, 0.75)}
    className="mb-16"
  >
    <div className="flex items-center mb-6">
      <motion.div
        variants={zoomIn(0.2, 0.75)}
        className="bg-accent text-white p-3 rounded-full mr-4"
      >
        <FaLeaf size={24} />
      </motion.div>
      <h2 className="text-3xl font-bold text-secondary">AROMA CONCENTRATES</h2>
    </div>
    <div className="flex flex-col md:flex-row items-center mb-8">
      <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
        <p className="text-gray-600 mb-4">
          Vaja offers a wide variety of fragrant essential oils to enhance the relaxation of your sauna or steam room. Our carefully curated selection of aromas is designed to elevate your sauna experience, promoting relaxation and well-being.
        </p>
        <h3 className="text-xl font-semibold text-secondary mb-4">Our current fragrance range includes:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {aromaConcentrates.map((aroma, index) => (
            <motion.li
              key={index}
              variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
              className="mb-2"
            >
              {aroma}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2">
        <motion.img
          variants={zoomIn(0.3, 0.75)}
          src={aromaImage}
          alt="Aroma concentrates for sauna"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    <p className="text-gray-600">
      Each of these aromatic concentrates is carefully formulated to withstand the high temperatures of your sauna or steam room, releasing their beneficial properties and delightful scents throughout your session. Whether you're looking to energize, relax, or simply enhance your sauna experience, our range of aroma concentrates offers something for every preference.
    </p>
  </motion.section>
);

const Products = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="container mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold text-accent mb-12 text-center">
          Our Premium Products
        </h1>

        <p className="text-secondary text-center mb-16 max-w-2xl mx-auto">
          Discover our range of high-quality saunas, steam rooms, and accessories. Each product is crafted with care to provide you with the ultimate relaxation experience.
        </p>

        {productCategories.map((category, index) => (
          <CategorySection key={index} category={category} index={index} />
        ))}

        <Divider className='my-12 bg-secondary w-1/2 mx-auto h-2' />

        <DIYSaunaKits />

        <Divider className='my-12 bg-secondary w-1/2 mx-auto h-2' />

        <AromaConcentrates />

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
