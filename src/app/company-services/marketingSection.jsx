import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wavify from "react-wavify";
import Image from "next/image";

const images = {
  onlineListing: [
    "/static/Assets/online-listing.jpg",
    "/static/Marketing/onlineListening1.png",
    "/static/Marketing/onlinelistening2.png"
  ],
  mobilePresence: [
    "/static/Assets/mobile-presence.jpg",
    "/static/Marketing/mobilePresence1.png",
    "/static/Marketing/mobilePresence2.png"
  ],
  advancedMarketing: [
    "/static/Marketing/advancemarketing1.png",
    "/static/Marketing/advancemarketing.png",
    "/static/Marketing/advancemarketing2.png"
  ]
};

function MarketingSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState({
    onlineListing: 0,
    mobilePresence: 0,
    advancedMarketing: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => ({
        onlineListing:
          (prevIndex.onlineListing + 1) % images.onlineListing.length,
        mobilePresence:
          (prevIndex.mobilePresence + 1) % images.mobilePresence.length,
        advancedMarketing:
          (prevIndex.advancedMarketing + 1) % images.advancedMarketing.length
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative space-y-5 md:space-y-10 py-10 px-4 sm:px-6 text-white">
      <motion.h2
        className="w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#e7a3a8] drop-shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Marketing Your Property
      </motion.h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {Object.keys(images).map((category, index) => (
          <motion.div
            key={category}
            className="text-center flex flex-col items-center justify-between h-auto md:h-[500px] lg:h-[600px] p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-lg shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[category][currentImageIndex[category]]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[category][currentImageIndex[category]]}
                    alt={category.replace(/([A-Z])/g, " $1")}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <h4 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-[#e7a3a8] capitalize">
              {category.replace(/([A-Z])/g, " $1")}
            </h4>
            <p className="text-gray-300 text-sm sm:text-md md:text-lg leading-relaxed mt-2 px-2 text-center">
              {category === "onlineListing" &&
                "Online listings feature information specific to each property and the surrounding area, as well as a property image. An invaluable marketing tool, the property images give potential buyers an instant preview, which saves time and visually sparks interest."}
              {category === "mobilePresence" &&
                "Prospective buyers will be able to access the same great search technology available on our website while on the go! Our website markets your property and our digital marketing campaign will ensure your property reaches elite buyers."}
              {category === "advancedMarketing" &&
                "We have advanced marketing and digital strategies that can help drive more traffic to your listing. The Destined network of agents is one of the greatest in the country and is a valuable resource for spreading the word about your property through various marketing channels."}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Wave Below the Section */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <Wavify
          fill="#4a1e2c"
          paused={false}
          options={{
            height: 20,
            amplitude: 60,
            speed: 0.15,
            points: 3
          }}
          className="w-full"
          style={{ height: "200px" }}
        />
      </div>
    </section>
  );
}

export default MarketingSection;
