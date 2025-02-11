import React, { useRef } from 'react'
import { Button } from '@mantine/core';
import { motion, useInView } from 'framer-motion';
import { productImage, productImage2 } from '../assets';
import { slideIn } from '../utils/motion';
import { Link } from 'react-router-dom';
const ImageWithOverlay = ({ src, alt, title, direction }) => (
  <motion.div
    variants={slideIn(direction, "tween", 0.2, 1)}
    className="relative group"
  >
    <img src={src} alt={alt} width={750} height={750} className='rounded-lg w-full h-auto' />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
      <h2 className="text-secondary text-2xl font-bold mb-4">{title}</h2>
      <Link to="/products"><Button variant="filled" className='bg-accent text-white px-4 py-2 rounded-md'>Learn More</Button></Link>
    </div>
  </motion.div>
);

const InfoHome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className='bg-accent text-white py-10 px-4 md:px-10'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Our Products</h1>
          <p className='text-lg mt-5'><strong>Transform your space into a luxury wellness retreat – explore VAJA’s expertly crafted saunas today.</strong></p>
        </div>
        <div className='flex justify-center items-center'>
          <ImageWithOverlay src={productImage} alt='Product' title="Our Saunas" direction="right" />
        </div>
        <div className='flex justify-center items-center'>
          <ImageWithOverlay src={productImage2} alt='Product' title="Our Steam Rooms" direction="left" />
        </div>
        <div className='flex flex-col justify-center space-y-4'>
          <p className='text-lg md:text-2xl lg:text-3xl mt-4'><span className='text-secondary'>Luxury Saunas & Steam Rooms</span> Crafted for the Ultimate Wellness Experience.</p>
          <p className='text-lg'>As South Africa’s leading sauna and steam room manufacturer, VAJA has been designing and delivering premium, luxury saunas since 1970. Originally catering to the domestic market, our craftsmanship now extends nation wide, bringing spa-quality relaxation to homes, gyms, and wellness centres across the globe.</p>
          <p className='text-lg'>From classic home saunas to custom-built saunas tailored to your exact specifications, VAJA combines superior craftsmanship with high-end materials, customizable lighting, and a choice of premium wood finishes to match any interior aesthetic.</p>
          <p className='text-lg'>We proudly supply NORDMANN Steam Generators and Harvia Sauna Heaters, ensuring unmatched quality, efficiency, and durability.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default InfoHome
