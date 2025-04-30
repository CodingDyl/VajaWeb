import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { ThreeDViewer } from '../../components/3DViewer';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';

interface ThreeDRender {
  id: string;
  embedUrl: string;
}

const threeDRenderings: ThreeDRender[] = [
  {
    id: 'hcNMs',
    embedUrl: 'https://kuula.co/share/hcNMs?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30'
  },
  {
    id: 'hlrGD',
    embedUrl: 'https://kuula.co/share/hlrGD?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30'
  },
  {
    id: 'hPRhY',
    embedUrl: 'https://kuula.co/share/hPRhY?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30'
  },
  {
    id: 'hY1cq',
    embedUrl: 'https://kuula.co/share/hY1cq?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30'
  },
  {
    id: 'hXN4g',
    embedUrl: 'https://kuula.co/share/hXN4g?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30'
  }
];

export function ThreeDGallery() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 pt-32 mb-16"
      >
        <motion.div
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Customer Sauna Projects
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {threeDRenderings.map((render, index) => (
            <motion.div
              key={render.id}
              variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <ThreeDViewer
                embedUrl={render.embedUrl}
                title=""
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default ThreeDGallery; 