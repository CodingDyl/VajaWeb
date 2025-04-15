import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

interface ThreeDViewerProps {
  embedUrl: string;
  title: string;
}

export function ThreeDViewer({ embedUrl, title }: ThreeDViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract the share ID from the Kuula URL
  const shareId = embedUrl.match(/share\/([^?]+)/)?.[1];

  useEffect(() => {
    // Load Kuula embed script
    const script = document.createElement('script');
    script.src = 'https://static.kuula.io/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.2, 0.75)}
      className="relative w-full max-w-[1400px] mx-auto aspect-[16/9] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl"
    >
      {!isExpanded ? (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="w-full h-full">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              scrolling="no"
              src={`https://kuula.co/share/${shareId}?logo=-1&info=0&fs=0&vr=0&initload=0&thumbs=1&margin=30`}
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(true)}
              className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2"
            >
              <span>View in 3D</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-[90vh]">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(false)}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>
          <div className="w-full h-full">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              scrolling="no"
              src={`https://kuula.co/share/${shareId}?logo=-1&info=0&fs=1&vr=1&initload=1&thumbs=1&margin=30`}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
} 