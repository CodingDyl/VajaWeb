import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, slideIn } from '../../utils/motion';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Divider } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconCheck } from '@tabler/icons-react';
import { steam_product_1, steam_product_2, steam_product_3 } from '../../assets';
import { SEOHead } from '../../components/SEOHead';
import { getRouteSeo } from '../../lib/seo';

const SteamRooms = () => {
  const seoData = getRouteSeo('/steam-rooms');

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords="steam room, steam room near me, steam room for sale, steam room installers near me, steam room installation"
        canonicalUrl="/steam-rooms"
        type="website"
      />
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        className="container mx-auto px-4 pt-32"
      >
        {/* Navigation Tabs */}
        <motion.div 
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          className="flex justify-center gap-8 mb-12"
        >
          <Link 
            to="/products"
            className="text-xl font-semibold text-secondary hover:text-accent transition-all px-4 py-2 hover:scale-105"
          >
            Saunas
          </Link>
          <Link 
            to="/steam-rooms"
            className="text-xl font-semibold text-accent border-b-2 border-accent px-4 py-2 transition-all hover:scale-105"
          >
            Steam Rooms
          </Link>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          className="max-w-4xl mx-auto text-center space-y-8 mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-accent">
            Custom Steam Rooms in South Africa
          </h1>
          <p className="text-secondary text-lg">
            Vaja supplies and installs premium steam rooms for homes, spas, gyms, and hospitality spaces. We use Nordmann steam room generators to deliver consistent steam output, efficient performance, and dependable long-term operation.
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.4, 0.75)}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-semibold text-accent mb-4 text-center">
            Steam Room Installation with Nordmann Technology
          </h2>
          <p className="text-secondary text-center">
            Our custom steam room systems are designed around your room dimensions, usage profile, and finish requirements. From specification to commissioning, our team ensures each installation is efficient, serviceable, and built for daily wellness use.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.5, 0.75)}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Features Card */}
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className="bg-secondary/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-accent mb-6">Key Features</h3>
            <ul className="space-y-4">
              {[
                "Imported Nordmann Technology",
                "Powerful & Efficient Operation",
                "Easy Integration",
                "Low Maintenance Requirements",
                "High Performance Output"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                  className="flex items-center gap-3 text-secondary"
                >
                  <IconCheck className="text-accent" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="bg-secondary/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-accent mb-6">Health Benefits</h3>
            <ul className="space-y-4">
              {[
                "Detoxifies the body",
                "Hydrates & rejuvenates skin",
                "Relieves muscle tension & stress",
                "Supports respiratory health",
                "Improves circulation"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                  className="flex items-center gap-3 text-secondary"
                >
                  <IconCheck className="text-accent" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Product Showcase */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.6, 0.75)}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              image: steam_product_1,
              title: "Nordmann Steam Generator",
              description: "Professional-grade steam generator for commercial and residential applications"
            },
            {
              image: steam_product_2,
              title: "Steam Room Installation",
              description: "Custom-designed steam rooms with premium finishes and materials"
            },
            {
              image: steam_product_3,
              title: "Luxury Steam Experience",
              description: "Complete steam room solutions for the ultimate wellness experience"
            }
          ].map((product, index) => (
            <motion.div
              key={index}
              variants={slideIn('up', 'tween', 0.2 + index * 0.1, 1)}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-white/80">{product.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Divider className="my-16 bg-accent/20 w-1/2 mx-auto h-0.5" />

        {/* Contact Section */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.6, 0.75)}
          className="text-center mb-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-accent mb-4">Ready to Transform Your Space?</h3>
          <p className="text-secondary mb-8">
            Request a quote for a custom steam room in Johannesburg, Cape Town, Pretoria, and surrounding regions.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            >
              Contact Us Today
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default SteamRooms; 
