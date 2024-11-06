import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};

const transition = {
  duration: 0.8,
  ease: [0.5, 0.1, 0.5, 1]
};

const useSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return isSmallScreen;
};

export default function RealEstatePresence() {
  const isSmallScreen = useSmallScreen();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    "/static/Assets/values.jpg",
    "/static/Assets/leadership.jpg",
    "/static/Assets/leadership1.jpg"
  ];

  return (
    <section className="py-12 md:py-24 relative text-white bg-gradient-to-br from-gray-900 via-gray-800 to-blue-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={transition}
        >
          {/* Content Column */}
          <div className="w-full md:w-5/12 lg:w-1/2 mb-8 md:mb-0">
            <div className="pr-0 md:pr-10">
              <div className="pb-6">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-px bg-gradient-to-r from-teal-400 to-blue-500"></div>
                  <h3 className="text-xl text-teal-400 font-medium uppercase tracking-wider">
                    Our Values
                  </h3>
                </div>

                {/* Headline with Enhanced Styling */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
                  <span className="relative">
                    {/* Decorative Accent Line */}
                    <span className="absolute inset-0 -bottom-1 h-2 bg-gradient-to-r from-blue-500 via-blue-400 to-teal-400 opacity-40 blur-md"></span>
                    We Lead in Real Estate
                  </span>
                  <br />
                  <span className="text-teal-400">Expertise & Trust</span>
                </h2>
              </div>
              <p className="text-gray-300 text-base sm:text-lg leading-7 mb-6 md:mb-10">
                From starting the conversation to sealing the deal, your
                Destined estates agent is committed to earning and keeping your
                trust forever. We&apos;re part of anywhere, a true leader in
                residential luxury real estate.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-7/12 lg:w-1/2 relative">
            <div className="relative overflow-hidden h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={images[index]}
                    layout="fill"
                    objectFit="cover"
                    alt={`Slide ${index}`}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
