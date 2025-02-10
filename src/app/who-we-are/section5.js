import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";

const ParallaxCarousel = () => {
  const slides = [
    "/static/WhoWeAre/confidence.jpeg",
    "/static/Assets/insights.jpg",
    "/static/Assets/promise.jpg"
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
      className="h-screen flex items-center justify-start"
      bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
    >
      <div className="bg-white bg-opacity-75 p-6 md:p-10 rounded-lg max-w-lg md:max-w-2xl lg:max-w-3xl text-left font-sans self-start ml-auto mr-8 md:mr-16 sm:self-center sm:mx-auto">
        <h1 className="text-indigo-800 text-2xl md:text-3xl font-bold mb-4">
          Connecting with Confidence
        </h1>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          The Destined Estates Ecosystem drives competitive advantages in
          sourcing, executing, managing, and realizing Properties. With a focus
          on maximizing efficiency and streamlining processes, we are committed
          to leveraging technology, such as online real estate portals, digital
          marketing platforms, and our site locator online, which provides reliable
          real estate site information. This enables clients to make informed
          decisions about their investments, monetary coverage, and capacity
          goals.
        </p>
      </div>
    </Parallax>
  );
};

export default ParallaxCarousel;
