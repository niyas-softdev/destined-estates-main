import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const clipPathVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 0)",
    opacity: 0
  },
  animate: {
    clipPath: "polygon(200% 0, 0 0, 0 200%)",
    opacity: 1,
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
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
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
        initial="initial"
        animate="animate"
        variants={clipPathVariants}
      />
    </div>
  );
};

const AboutUsSection = () => {
  return (
    <div className="overflow-hidden py-20 sm:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-6">
        <div className="max-w-4xl text-center lg:text-left mb-10 lg:mb-14">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-teal-300">
            Sell Your Home With Destined Estates
          </h1>
          <p className="mt-4 text-xl leading-8 text-gray-300">
            Whether you're ready to sell or just looking for answers, one of Destined Estates' experienced neighborhood real estate experts can help.
          </p>
        </div>

        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-14">
          <div className="lg:pr-8">
            <h2 className="text-2xl font-semibold tracking-tight text-amber-400 mb-4">
              Streetwise and Market Smart
            </h2>
            <p className="mt-4 text-base text-gray-300">
              In your neighborhood and across the city, nobody understands the residential real estate scene like Destined Estates. Whether you're buying, renting, or selling, when you connect with a Destined Estates professional, you're working with the best in the business.
            </p>
            <h2 className="mt-10 text-2xl font-semibold tracking-tight text-amber-400 mb-4">
              Our Name is a Name that Opens Doors
            </h2>
            <p className="mt-4 text-base text-gray-300">
              Discover our international standards luxury real estate company and get to know one of the industry's most recognized and respected brand names. Our professionals specialize in market intelligence and client satisfaction.
            </p>
          </div>

          <div className="pt-12 lg:pt-0 lg:row-span-2 lg:-mr-12 xl:mr-auto">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2 lg:gap-6 xl:gap-8">
              <div className="relative overflow-hidden rounded-xl shadow-xl outline outline-1 outline-black/10 aspect-square sm:aspect-[4/5] lg:aspect-[3/4] h-[250px] sm:h-[300px] lg:h-[350px]">
                <ImageCarousel
                  images={[
                    "/static/Assets/professionals.png",
                    "/static/Assets/professionals1.jpg",
                    "/static/Assets/professionals2.jpg"
                  ]}
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-xl outline outline-1 outline-black/10 aspect-square sm:aspect-[4/5] lg:aspect-[3/4] h-[250px] sm:h-[300px] lg:h-[350px] -mt-6 lg:-mt-24">
                <ImageCarousel
                  images={[
                    "/static/Assets/sell.jpg",
                    "/static/Assets/women1.jpg",
                    "/static/Assets/insights.jpg"
                  ]}
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-xl outline outline-1 outline-black/10 aspect-square sm:aspect-[4/5] lg:aspect-[3/4] h-[250px] sm:h-[300px] lg:h-[350px]">
                <ImageCarousel
                  images={[
                    "/static/solution1.jpg",
                    "/static/solution2.jpg",
                    "/static/Highlights/image3.png"
                  ]}
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-xl outline outline-1 outline-black/10 aspect-square sm:aspect-[4/5] lg:aspect-[3/4] h-[250px] sm:h-[300px] lg:h-[350px] -mt-6 lg:-mt-24">
                <ImageCarousel
                  images={[
                    "/static/Assets/client.jpg",
                    "/static/Assets/client1.jpg",
                    "/static/Assets/client2.jpg"
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsSection;
