import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, slideIn, zoomIn } from '../../utils/motion';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaSteam } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { products } from '../../data/products';
import { locations } from '../../data/locations';

const InputField = ({ label, type, name, value, onChange, placeholder }) => (
  <motion.div
    className="mb-6 relative"
    variants={fadeIn('up', 'spring', 0.3, 0.75)}
  >
    <label htmlFor={name} className="block text-secondary font-semibold mb-2">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:border-accent transition-colors duration-300"
    />
    <motion.div
      className="absolute right-3 top-10 text-accent"
      initial={{ scale: 0 }}
      animate={{ scale: value ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <FaSteam />
    </motion.div>
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    mobile: '',
    selectedProducts: [],
    locations: [],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init("X2fstaygJ1stzvuEF");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleProductChange = (productName) => {
    setFormData(prevState => {
      const currentProducts = [...prevState.selectedProducts];
      const index = currentProducts.indexOf(productName);
      
      if (index === -1) {
        if (currentProducts.length < 2) {
          currentProducts.push(productName);
        }
      } else {
        currentProducts.splice(index, 1);
      }
      
      return { ...prevState, selectedProducts: currentProducts };
    });
  };

  const handleLocationChange = (locationName) => {
    setFormData(prevState => {
      const currentLocations = prevState.locations || [];
      const index = currentLocations.indexOf(locationName);
      
      if (index === -1) {
        currentLocations.push(locationName);
      } else {
        currentLocations.splice(index, 1);
      }
      
      return { ...prevState, locations: currentLocations };
    });
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '', mobile: '', selectedProducts: [], locations: [] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!formData.locations || formData.locations.length === 0) {
      setError('Please select at least one location');
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        "service_da22vjp",
        "template_nxq94qv",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          mobile: formData.mobile,
          products: formData.selectedProducts.join(', '),
          location: formData.locations.join(', '),
        }
      );
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      resetForm();
    } catch (error) {
      console.error('Email send failed:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <div className="container mx-auto px-4 py-32">
        <motion.h1
          className="text-4xl font-bold text-accent mb-12 text-center"
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          initial="hidden"
          animate="show"
        >
          Get in Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 relative overflow-hidden"
            variants={slideIn('left', 'tween', 0.2, 1)}
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <h2 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <InputField
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
              <InputField
                label="Mobile Number"
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+27 12 345 6789"
              />
              <motion.div
                className="mb-6"
                variants={fadeIn('up', 'spring', 0.4, 0.75)}
              >
                <label className="block text-secondary font-semibold mb-3">
                  Interested in our Saunas
                  <span className="text-sm text-gray-500 ml-2">(Select up to 2)</span>
                </label>
                <div className="space-y-2 block md:flex md:justify-between ">
                  {Object.values(products).map((product) => (
                    <motion.div
                      key={product.slug}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * Object.values(products).indexOf(product) }}
                    >
                      <input
                        type="checkbox"
                        id={product.slug}
                        checked={formData.selectedProducts.includes(product.name)}
                        onChange={() => handleProductChange(product.name)}
                        className="w-4 h-4 text-accent border-secondary rounded focus:ring-accent focus:ring-offset-0"
                      />
                      <label
                        htmlFor={product.slug}
                        className="text-secondary cursor-pointer hover:text-accent transition-colors duration-200"
                      >
                        {product.name}
                      </label>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="mb-6"
                variants={fadeIn('up', 'spring', 0.4, 0.75)}
              >
                <label className="block text-secondary font-semibold mb-3">
                  Let Us Know Where You Are
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="space-y-2 block md:flex md:justify-between ">
                  {Object.values(locations).map((location) => (
                    <motion.div
                      key={location.slug}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * Object.values(locations).indexOf(location) }}
                    >
                      <input
                        type="checkbox"
                        id={location.slug}
                        checked={formData.locations?.includes(location.name)}
                        onChange={() => handleLocationChange(location.name)}
                        className="w-4 h-4 text-accent border-secondary rounded focus:ring-accent focus:ring-offset-0"
                      />
                      <label
                        className="text-secondary"
                      >
                        {location.name}
                      </label>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="mb-6 relative"
                variants={fadeIn('up', 'spring', 0.5, 0.75)}
              >
                <label htmlFor="message" className="block text-secondary font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:border-accent transition-colors duration-300"
                ></textarea>
                <motion.div
                  className="absolute right-3 bottom-3 text-accent"
                  initial={{ scale: 0 }}
                  animate={{ scale: formData.message ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaSteam />
                </motion.div>
              </motion.div>
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
              {error && (
                <motion.p
                  className="mt-4 text-red-500 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.p>
              )}
            </form>
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-accent bg-opacity-90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="text-white text-2xl font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    Message Sent!
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="relative">
            <motion.div
              className="bg-secondary rounded-lg shadow-xl p-8 text-white relative overflow-hidden"
              variants={slideIn('right', 'tween', 0.2, 1)}
              initial="hidden"
              animate="show"
            >
              <motion.div
                className="absolute top-0 right-0 w-1 h-full bg-accent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: FaEnvelope, text: "sandy@vaja.co.za" },
                  { icon: FaPhone, text: "+27 11 794 2090" },
                  { icon: FaMapMarkerAlt, text: "53 Zeiss Rd, Laser Park, Johannesburg, South Africa" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    variants={zoomIn(0.2 + index * 0.1, 0.6)}
                  >
                    <item.icon className="text-accent mr-4 text-2xl" />
                    <p>{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-accent rounded-lg shadow-xl p-8 text-white relative overflow-hidden mt-6 md:mt-[-2rem] md:ml-6"
              variants={slideIn('right', 'tween', 0.3, 1)}
              initial="hidden"
              animate="show"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-secondary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <h3 className="text-xl font-semibold mb-4">Our Hours</h3>
              <ul className="space-y-2">
                {[
                  "Monday - Friday: 7:30 AM - 5:00 PM",
                  "Saturday: Appointment Only",
                  "Sunday: Closed"
                ].map((day, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {day}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
