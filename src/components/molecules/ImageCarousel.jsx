// components/ImageCarousel.jsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ImageCarousel = ({ images, alt, clipPath }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000); // 5000ms = 5s
    return () => clearInterval(interval);
  }, [length]);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-full" style={{ clipPath: clipPath }}>
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-xl"
          />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 text-black p-2 rounded-lg shadow-lg">
        <p>{alt}</p>
      </div>

      {/* Navigation Controls */}
      {length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={prevImage}
            className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
            aria-label="Previous Image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
            aria-label="Next Image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
