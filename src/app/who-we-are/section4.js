import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";

const ParallaxCarousel = () => {
  const slides = [
    "/static/Assets/home3.jpg",
    "/static/Assets/home7.jpg",
    "/static/Assets/home1.jpg"
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
      <div className="bg-white bg-opacity-75 p-6 md:p-10 rounded-lg max-w-lg md:max-w-2xl lg:max-w-3xl text-left font-sans self-start ml-auto mr-8 md:mr-16">
        <h1 className="text-indigo-800 text-2xl md:text-3xl font-bold mb-4">
          Turning Insights into Action
        </h1>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          We leverage this intelligence to source, execute, manage and realize
          Properties for the benefit of our clients and partners. With seasoned
          professionals on our side, we have the expertise and scale to support
          even the most ambitious Customer goals.
        </p>
      </div>
    </Parallax>
  );
};

export default ParallaxCarousel;