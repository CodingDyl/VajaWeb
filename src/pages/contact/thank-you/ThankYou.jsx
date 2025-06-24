import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Navbar } from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { SEOHead } from '../../../components/SEOHead';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import {
  sun, sabi, bhp, fair, shera, inter, legacy, woodland, earth, cloud9,
  planetFit, vodacom, royalSax, idc, wildCoast, virgin, maldives
} from '../../../assets';

const customers = [
  sun, sabi, bhp, fair, shera, inter, legacy, woodland, earth, cloud9,
  planetFit, vodacom, royalSax, idc, wildCoast, virgin, maldives
];

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <SEOHead
        title="Thank You for Contacting Us | Vaja"
        description="We've received your inquiry and will be in touch shortly. In the meantime, feel free to explore our gallery of bespoke saunas and steam rooms."
        type="website"
      />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
          className="bg-white rounded-lg shadow-xl p-8 md:p-12 w-full max-w-3xl"
        >
          <motion.div variants={fadeIn('down', 'spring', 0.2, 0.75)}>
            <FaCheckCircle className="text-green-500 mx-auto text-5xl md:text-6xl mb-6" />
          </motion.div>
          <motion.h1
            variants={fadeIn('down', 'spring', 0.3, 0.75)}
            className="text-3xl md:text-4xl font-bold text-accent mb-4"
          >
            Thank You!
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 'spring', 0.4, 0.75)}
            className="text-secondary text-lg mb-8"
          >
            Your message has been sent successfully. We appreciate you reaching out and will get back to you within 24 hours.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 'spring', 0.5, 0.75)}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
              >
                Back to Home
              </motion.button>
            </Link>
            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center"
              >
                Explore Gallery <FaArrowRight className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full mt-16 md:mt-24"
          variants={fadeIn('up', 'spring', 0.7, 1)}
          initial="hidden"
          animate="show"
        >
          <h2 className="text-2xl font-bold text-secondary mb-8">
            Trusted by Industry Leaders
          </h2>
          <div className="relative w-full overflow-hidden bg-white py-8 shadow-inner">
            <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <motion.div
              className="flex"
              animate={{
                x: ['0%', '-100%'],
                transition: {
                  ease: 'linear',
                  duration: 30,
                  repeat: Infinity,
                },
              }}
            >
              {[...customers, ...customers].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-48 mx-8 flex items-center justify-center">
                  <img src={logo} alt={`customer-logo-${index}`} className="max-h-16 w-auto" />
                </div>
              ))}
            </motion.div>
            <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;