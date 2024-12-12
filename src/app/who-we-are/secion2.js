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
      className="h-screen flex items-center justify-center"
      bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.75)",
          padding: "2.5rem",
          margin: "1rem",
          borderRadius: "8px",
          width: "50%",
          textAlign: "left",
          fontFamily: "sans-serif",
          alignSelf: "flex-start", // Aligns to the top-right corner
          marginLeft: "auto", // Pushes the content to the right
          marginRight: "2rem" // Adds some space from the right edge
        }}
      >
        <h1
          style={{
            color: "#4B0082",
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1rem"
          }}
        >
          Leveraging the Destined Estates Property Ecosystem
        </h1>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#333"
          }}
        >
          One of the keys to our success is the Destined Estates Property
          ecosystem. Our network of sales professionals, field agents, and
          operating employees in our businesses around the spectrum provide us
          valuable information and insights into the shape shifting world of
          luxury Real estate, on where the world is going and how it&#39;s
          changing. This helps inform our clients on the current market
          standards and add value to the business we own.
        </p>
      </div>
    </Parallax>
  );
};

export default ParallaxCarousel;
