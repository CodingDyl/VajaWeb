import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'The Health Benefits of Regular Sauna Use',
    excerpt: 'Discover how incorporating sauna sessions into your routine can improve your overall well-being. From stress reduction to improved cardiovascular health, saunas offer a multitude of benefits that can enhance your quality of life.',
    image: 'https://images.unsplash.com/photo-1712659606957-b7395ba9ebb2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'May 15, 2023',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Mindfulness and Meditation in the Sauna',
    excerpt: 'Learn techniques to enhance your sauna experience through mindfulness and meditation practices. Explore how the warmth of the sauna can deepen your meditation and help you achieve a state of profound relaxation and mental clarity.',
    image: 'https://images.unsplash.com/photo-1713270176394-3f9f91f43905?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'June 2, 2023',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'The History of Saunas: From Finland to the World',
    excerpt: "Explore the rich cultural history of saunas and how they've evolved over centuries. From ancient Finnish traditions to modern wellness practices, discover the journey of saunas and their impact on various cultures around the globe.",
    image: 'https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=1770&auto=format&fit=crop',
    date: 'July 10, 2023',
    readTime: '6 min read',
  },
  // Add more blog posts as needed
];

const BlogCard = ({ post, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
    className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 transform transition-all duration-300 hover:shadow-xl"
  >
    <div className="flex flex-col sm:flex-row h-full">
      <div className="w-full sm:w-1/3 h-48 sm:h-full">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>
      <div className="w-full sm:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-2 truncate">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-4">{post.excerpt}</p>
        </div>
        <div>
          <div className="flex justify-between items-center text-sm text-accent mb-4">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <button className="bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const Blog = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 py-32"
      >
        <motion.h1
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          className="text-4xl font-bold text-accent mb-12 text-center"
        >
          Sauna Insights
        </motion.h1>

        <motion.p
          variants={fadeIn('up', 'spring', 0.3, 0.75)}
          className="text-secondary text-center mb-16 max-w-2xl mx-auto"
        >
          Dive into our collection of articles exploring the world of saunas, wellness, and relaxation. Let our words soothe your mind as you discover new ways to enhance your sauna experience.
        </motion.p>

        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.5, 0.75)}
          className="mt-16 text-center"
        >
          <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Load More Articles
          </button>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Blog;
