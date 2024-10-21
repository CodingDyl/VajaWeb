import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { Navbar } from '../../components/Navbar';
import Footer from '../../components/Footer';
import { client } from '../../lib/client';
import { Link } from 'react-router-dom';

const BlogCard = ({ post, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
    className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 transform transition-all duration-300 hover:shadow-xl"
  >
    <div className="flex flex-col sm:flex-row h-full">
      <div className="w-full sm:w-1/3 h-48 sm:h-auto">
        {post.mainImage && (
          <img 
            src={post.mainImage} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        )}
      </div>
      <div className="w-full sm:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-2 truncate">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-4">{post.excerpt}</p>
        </div>
        <div>
          <div className="flex justify-between items-center text-sm text-accent mb-4">
            <span>{post.publishedAt && new Date(post.publishedAt).toLocaleDateString()}</span>
            <span>{post.readingTime} min read</span>
          </div>
          <Link to={`/blog/${post.slug.current}`} className="inline-block">
            <button className="bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
   </motion.div>
);

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(3);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc) [0...${visiblePosts}] {
        title,
        slug,
        mainImage {
          asset->{
            url
          }
        },
        publishedAt,
        readingTime,
        excerpt
      }`;

      try {
        setIsLoading(true);
        const result = await client.fetch(query);
        console.log("Fetched blog posts:", result);
        const postsWithImageUrls = result.map(post => ({
          ...post,
          mainImage: post.mainImage?.asset?.url
        }));
        setBlogPosts(postsWithImageUrls);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError("Failed to fetch blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [visiblePosts]);

  const handleLoadMore = () => {
    setVisiblePosts(prevVisible => prevVisible + 3);
  };

  console.log("Current blogPosts state:", blogPosts); // Debugging line

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <div className="container mx-auto px-4 py-32">
        <motion.h1
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          initial="hidden"
          animate="show"
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

        {isLoading && <p className="text-center text-secondary">Loading blog posts...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        
        {!isLoading && !error && (
          <motion.div 
            variants={staggerContainer()}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            {blogPosts.length > 0 ? (
              blogPosts.map((post, index) => (
                <BlogCard
                  key={post.slug.current}
                  post={post}
                  index={index}
                />
              ))
            ) : (
              <p className="text-center text-secondary">No blog posts found.</p>
            )}
          </motion.div>
        )}

        <motion.div
          variants={fadeIn('up', 'spring', 0.5, 0.75)}
          className="mt-16 text-center"
        >
          {blogPosts.length >= visiblePosts && (
            <button 
              onClick={handleLoadMore}
              className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Load More Articles
            </button>
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
