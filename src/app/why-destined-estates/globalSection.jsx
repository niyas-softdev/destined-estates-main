import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BackgroundCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {prevImageIndex !== null && (
        <motion.img
          key={images[prevImageIndex]}
          src={images[prevImageIndex]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}
      <motion.img
        key={images[currentImageIndex]}
        src={images[currentImageIndex]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

const GlobalSection = () => {
  const images = [
    "/static/Assets/global1.jpg",
    "/static/Assets/luxury-house.jpg",
    "/static/Assets/global2.jpg"
  ];

  return (
    <div className="relative px-6 py-32 sm:px-12 sm:py-40 lg:px-16 bg-gray-900">
      {/* Background Carousel */}
      <BackgroundCarousel images={images} />

      {/* Semi-transparent Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-transparent to-black opacity-70"
      />

      {/* Content Section */}
      <div className="relative mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left p-10 bg-white bg-opacity-80 rounded-lg shadow-xl backdrop-blur-sm">
        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            The World We Serve
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-800 leading-relaxed">
            Destined Estates is a leader in Chennai and across Tamil Nadu. Our
            dedicated team serves exceptional urban, suburban, and resort
            destinations, offering unparalleled expertise and commitment.
          </p>
        </div>

        {/* Image Content */}
        <div className="relative">
          <img
            alt="Luxury House"
            src="/static/Assets/luxury-house.jpg"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalSection;
