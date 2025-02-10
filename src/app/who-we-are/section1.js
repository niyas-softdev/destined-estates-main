import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";

const ParallaxCarousel = () => {
  const slides = [
    "/static/WhoWeAre/building1.jpg",
    "/static/Assets/local3.jpg",
    "/static/Assets/local7.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically cycle through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Parallax
      bgImage={slides[currentSlide]}
      strength={400}
      className="h-screen flex items-center justify-center"
      bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
    >
      <div
        className="bg-white/75 p-6 md:p-10 rounded-lg w-11/12 sm:w-3/4 lg:w-2/3 xl:w-1/2 text-left"
        style={{
          fontFamily: "sans-serif",
          backdropFilter: "blur(10px)"
        }}
      >
        <h1 className="text-indigo-800 text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Destined Estates
        </h1>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          Destined Estates is a leader in communications for Luxury Real Estate
          solutions that support connectivity throughout the Globe with a single
          intent to deliver your Destined Home in your Destined Hands.
          <br />
          <br />
          Destined Estates is a leading real estate firm in India specializing
          in Luxury residential & Commercial real estate. Our origin as
          operators of high‐end real estate business allows us to leverage
          unique operational expertise to merge luxury properties as per client
          satisfaction. We put our own professionalism to work alongside our
          clients in nearly every transaction ensuring strong alignment of
          interests.
        </p>
      </div>
    </Parallax>
  );
};

export default ParallaxCarousel;
