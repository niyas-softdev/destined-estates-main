import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";

const ParallaxCarousel = () => {
  const slides = [
    "/static/WhoWeAre/building-drone-shot1.jpg",
    "/static/Assets/building1.jpg",
    "/static/Assets/local.jpg"
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
      className="h-screen flex items-center justify-end"
      bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
    >
      <div
        className="bg-white/75 p-6 md:p-10 rounded-lg w-11/12 sm:w-3/4 lg:w-2/3 xl:w-1/2 text-left"
        style={{
          backdropFilter: "blur(10px)", // Adds a subtle blur effect for better readability
          marginLeft: "auto", // Pushes content to the right
          marginRight: "2rem", // Adds spacing from the right edge
          alignSelf: "flex-start" // Aligns the box towards the top-right corner
        }}
      >
        <h1 className="text-indigo-800 text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
          Leveraging the Destined Estates Property Ecosystem
        </h1>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          One of the keys to our success is the Destined Estates Property
          ecosystem. Our network of sales professionals, field agents, and
          operating employees in our businesses around the spectrum provide us
          valuable information and insights into the shape-shifting world of
          luxury real estate, on where the world is going and how it&#39;s
          changing. This helps inform our clients on the current market
          standards and adds value to the business we own.
        </p>
      </div>
    </Parallax>
  );
};

export default ParallaxCarousel;
