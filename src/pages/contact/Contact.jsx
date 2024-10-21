import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, slideIn, zoomIn } from '../../utils/motion';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaSteam } from 'react-icons/fa';

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
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
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
                className="w-full bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
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
                  { icon: FaEnvelope, text: "info@vaja.com" },
                  { icon: FaPhone, text: "+27 11 794 2090" },
                  { icon: FaMapMarkerAlt, text: "58 Zeiss Rd, Roodeport, South Africa" }
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
                  "Monday - Friday: 9:00 AM - 6:00 PM",
                  "Saturday: Closed",
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
