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
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  React.useEffect(() => {
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
    <section className="py-24 relative text-black">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-wrap items-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={transition}
        >
          {/* Content Column */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="pr-10">
              <div className="pb-10">
                <div className="text-gray-700 font-bold text-lg uppercase mb-4 relative inline-block">
                  Our Values
                  <span className="absolute right-0 bottom-1 w-10 h-px bg-gray-300"></span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold leading-snug mb-6 bg-gradient-to-r from-blue-600 via-blue-400 to-teal-400 text-transparent bg-clip-text">
                  We Lead in Real Estate <br /> Expertise & Trust
                </h2>
              </div>
              <p className="text-gray-600 text-base md:text-lg leading-7 mb-10">
                From starting the conversation to sealing the deal, your
                Destined estates agent is committed to earning and keeping your
                trust forever. We&apos;re part of anywhere, a true leader in
                residential Luxury real estate.
              </p>
              <div className="text-gray-700 font-bold text-lg">
                Request Quote:{" "}
                <span className="text-blue-600">Destined Estates</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 relative">
            <div className="relative pl-10 ml-12">
              <div className="relative overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
