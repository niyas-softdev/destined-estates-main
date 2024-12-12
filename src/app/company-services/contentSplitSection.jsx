import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "/static/WhoWeAre/agents.jpg",
    "/static/WhoWeAre/agents1.jpg",
    "/static/WhoWeAre/agents3.jpg"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto px-4 lg:px-8 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div
        className="flex flex-col justify-center lg:pl-6 space-y-6 lg:space-y-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-3xl md:text-5xl font-extrabold text-[#FFD700]">
          Steps to Buy Your Dream Home
        </h3>

        <p className="text-md md:text-lg text-gray-200 leading-relaxed max-w-lg">
          Buying a home is a significant milestone. With guidance from our
          seasoned experts, you’ll navigate every step confidently, from
          budgeting to the final signature.
        </p>
        <p className="text-md md:text-lg text-gray-200 leading-relaxed max-w-lg">
          Our team breaks down each step in the home-buying journey with clear,
          actionable advice, ensuring you have the best experience possible.
        </p>

        <ul className="list-disc space-y-3 text-gray-300 pl-5 max-w-md">
          <li className="text-md lg:text-lg hover:text-yellow-400 transition-colors duration-200">
            <span className="font-semibold text-[#FFD700]">
              Define your goals
            </span>
          </li>
          <li className="text-md lg:text-lg hover:text-yellow-400 transition-colors duration-200">
            <span className="font-semibold text-[#FFD700]">
              Pick a Destined agent
            </span>
          </li>
          <li className="text-md lg:text-lg hover:text-yellow-400 transition-colors duration-200">
            <span className="font-semibold text-[#FFD700]">
              Determine your financial standing
            </span>
          </li>
          <li className="text-md lg:text-lg hover:text-yellow-400 transition-colors duration-200">
            <span className="font-semibold text-[#FFD700]">Make an offer</span>
          </li>
          <li className="text-md lg:text-lg hover:text-yellow-400 transition-colors duration-200">
            <span className="font-semibold text-[#FFD700]">
              Close the deal on your home
            </span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="hidden lg:flex justify-center relative overflow-hidden rounded-xl shadow-2xl w-full h-[500px]"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AnimatePresence>
          {images.map((image, index) =>
            index === currentImageIndex ? (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={image}
                  alt="Steps to Buy a Home"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default HeroSection;
