import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../utils/motion';
import { Navbar } from './Navbar';
import Footer from './Footer';
import { client } from '../lib/client';
import BlockContent from '@sanity/block-content-to-react';
import { FaCalendar, FaClock, FaArrowLeft } from 'react-icons/fa';
import { SEOHead } from './SEOHead';

const blogSeoBySlug = {
  'family-sauna-time-tips-for-safe-use-with-kids': {
    title: 'Sauna Safety for Families and Kids at Home | Vaja',
    description: 'Is it safe for kids to use a sauna? Tips for family sauna time, the right temperature for children, and how to enjoy saunas safely at home with family.',
  },
  'how-saunas-can-aid-in-muscle-recovery-for-athletes': {
    title: 'How Saunas Help Muscle Recovery for Athletes | Vaja',
    description: 'How saunas can help with muscle recovery after training. Learn how sauna heat boosts blood flow, reduces soreness, and speeds up recovery for athletes.',
  },
  'how-to-incorporate-sauna-sessions-into-your-self-care-routine': {
    title: 'How to Add Sauna Sessions to Your Self-Care | Vaja',
    description: 'How to add sauna sessions to your self-care routine for better relaxation and wellness. Tips on sauna frequency, duration, and how to get the most benefit.',
  },
  'the-benefits-of-sauna-use-for-chronic-pain-relief': {
    title: 'Sauna Benefits for Chronic Pain and Joint Relief | Vaja',
    description: 'Can saunas help with chronic pain? Explore how regular sauna use may reduce joint pain, ease muscle tension, and support long-term pain management goals.',
  },
  'steam-rooms-vs-traditional-saunas-in-cape-town': {
    title: 'Steam Rooms vs Saunas Which Is Right for You? | Vaja',
    description: 'Steam rooms vs saunas - what is the difference? Compare the benefits of steam rooms and traditional saunas and find the right fit for your Cape Town home.',
  },
  'the-impact-of-saunas-on-longevity-and-aging': {
    title: 'Can Saunas Help You Live Longer and Age Better? | Vaja',
    description: 'Can regular sauna use help you live longer? Explore the research on how saunas may support longevity, improve heart health, and slow the effects of aging.',
  },
  'the-role-of-saunas-in-weight-loss-and-metabolism-boosting': {
    title: 'Can Saunas Help with Weight Loss and Metabolism? | Vaja',
    description: 'Can saunas help with weight loss? Learn how sauna sessions may boost metabolism, support calorie burning, and complement a healthy fitness and diet plan.',
  },
};

const BlogPage = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const seoData = blogSeoBySlug[slug] || {
    title: post?.title ? `${post.title} | Vaja` : 'Blog Article | Vaja',
    description: 'Read the latest sauna and steam room insights from Vaja South Africa.',
  };

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
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        canonicalUrl={`/blog/${slug}`}
        type="website"
      />
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
