import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";

const ParallaxCarousel = () => {
  const slides = [
    "/static/Assets/business-to-client.jpg",
    "/static/Assets/professionals.jpg",
    "/static/Assets/professionals2.jpg"
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
          backdropFilter: "blur(10px)" // Subtle blur effect for readability
        }}
      >
        <h1 className="text-indigo-800 text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
          Gathering Operational Intelligence
        </h1>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          Our operations in strategic locations around the city of Chennai,
          provide us with data and insights into trends and changes in the
          market. You can count on our client-centric teams to deliver an
          efficient and predictable experience. Our in-house teams of sales
          managers and rental specialists support your journey with us from
          start to finish.
        </p>
      </div>
    </Parallax>
  );
};

export default ParallaxCarousel;
