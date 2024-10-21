import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../utils/motion';
import { Navbar } from './Navbar';
import Footer from './Footer';
import { client } from '../lib/client';
import BlockContent from '@sanity/block-content-to-react';
import { FaCalendar, FaClock, FaArrowLeft } from 'react-icons/fa';

const BlogPage = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        title,
        slug,
        body,
        mainImage,
        publishedAt,
        readingTime
      }`,
      { slug }
    ).then((data) => {
      setPost(data);
    }).catch(console.error);
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <motion.div
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-32"
      >
        <Link to="/blog" className="inline-block mb-8">
          <motion.button
            variants={fadeIn('right', 'spring', 0.2, 0.75)}
            className="flex items-center text-accent hover:text-secondary transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blog
          </motion.button>
        </Link>

        <motion.div
          variants={slideIn('up', 'tween', 0.3, 1)}
          className="bg-white rounded-lg shadow-xl overflow-hidden mb-12"
        >
          <div className="relative">
            {post.mainImage && (
              <img
                src={client.urlFor(post.mainImage).url()}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center">
              <h1 className="text-4xl font-bold text-primary text-center px-4">
                {post.title}
              </h1>
            </div>
          </div>
          <div className="p-8">
            <div className="flex justify-between items-center text-secondary mb-6">
              <div className="flex items-center">
                <FaCalendar className="mr-2" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
            <motion.div
              variants={fadeIn('up', 'spring', 0.5, 0.75)}
              className="prose prose-lg max-w-none"
            >
              <BlockContent
                blocks={post.body}
                projectId={client.config().projectId}
                dataset={client.config().dataset}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default BlogPage;
