import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const clipPathVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 0)" // Fully closed
  },
  animate: {
    clipPath: "polygon(200% 0, 0 0, 0 200%)", // Fully open
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
      {prevImageIndex !== null && (
        <motion.img
          key={images[prevImageIndex]}
          src={images[prevImageIndex]}
          alt="Real estate"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}

      <motion.img
        key={images[currentImageIndex]}
        src={images[currentImageIndex]}
        alt="Real estate"
        className="absolute inset-0 w-full h-full object-cover"
        initial="initial"
        animate="animate"
        variants={clipPathVariants}
      />
    </div>
  );
};

// Our Promise Section with ImageCarousel
const OurPromiseSection = () => {
  const images = [
    "/static/Assets/promise1.jpg",
    "/static/Assets/promise2.jpg",
    "/static/Assets/promise3.jpg"
  ];

  return (
    <section className="relative z-10 mt-32 bg-gradient-to-r from-navy-900 via-gray-800 to-emerald-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl">
          <div
            style={{
              clipPath:
                "polygon(50% 0%, 75% 25%, 100% 50%, 75% 75%, 50% 100%, 25% 75%, 0% 50%, 25% 25%)",
              animation: "pulse 10s ease-in-out infinite"
            }}
            className="aspect-[1097/1023] w-[70rem] bg-gradient-to-r from-indigo-900 via-emerald-700 to-gold-800 opacity-25"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>

      <div className="relative container mx-auto max-w-7xl flex flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
        {/* Image Section with Carousel */}
        <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
          <ImageCarousel images={images} />
        </div>

        {/* Content Section */}
        <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
          <h3 className="text-lg font-semibold leading-7 text-emerald-400 mb-4">
            Our Promise To You
          </h3>
          <blockquote className="text-xl font-semibold leading-8 text-gray-200 sm:text-2xl sm:leading-9">
            <p>
              Destined Estates ensures that your property gets unparalleled
              visibility and promotion. We employ sophisticated advertising
              strategies that generate interest, leading to bigger offers and
              quicker transactions.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default OurPromiseSection;
