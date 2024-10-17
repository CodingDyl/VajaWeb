import React, { useRef } from 'react'
import { Button } from '@mantine/core';
import { motion, useInView } from 'framer-motion';
import { productImage, productImage2 } from '../assets';
import { slideIn } from '../utils/motion';

const ImageWithOverlay = ({ src, alt, title, direction }) => (
  <motion.div
    variants={slideIn(direction, "tween", 0.2, 1)}
    className="relative group"
  >
    <img src={src} alt={alt} width={750} height={750} className='rounded-lg w-full h-auto' />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
      <h2 className="text-secondary text-2xl font-bold mb-4">{title}</h2>
      <Button variant="filled" className='bg-accent text-white px-4 py-2 rounded-md'>Learn More</Button>
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
          <p className='text-lg md:text-xl lg:text-2xl mt-4'>
            We offer a wide range of products to meet your needs.
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <ImageWithOverlay src={productImage} alt='Product' title="Our Saunas" direction="right" />
        </div>
        <div className='flex justify-center items-center'>
          <ImageWithOverlay src={productImage2} alt='Product' title="Our Steam Rooms" direction="left" />
        </div>
        <div className='flex flex-col justify-center space-y-4'>
          <p className='text-lg md:text-2xl lg:text-3xl mt-4'><span className='text-secondary'>VAJA</span> offers quality products for every taste and budget.</p>
          <p className='text-lg'>South Africa's leading sauna and steam room manufacturers, VAJA was established in 1970 to cater for the domestic market.</p>
          <p className='text-lg'>Fifty-one years later and VAJA products can be found not only in South Africa, but all over the world.</p>
          <p className='text-lg'>Our production line extends from casual saunas, to modern customised sauna and steam rooms with individualised lighting and multiple wood choices to match any design style.</p>
          <p className='text-lg'>We supply quality NORDMANN Steam Generators and Harvia Sauna Heaters.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default InfoHome
