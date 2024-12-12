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
      className="h-screen flex items-center justify-center"
      bgImageStyle={{ objectFit: "cover", width: "100%", height: "100%" }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.75)",
          padding: "2.5rem",
          margin: "1rem",
          borderRadius: "8px",
          width: "60%",
          textAlign: "left",
          fontFamily: "sans-serif"
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
          Connecting with Confidence
        </h1>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#333"
          }}
        >
          The Destined Estates Ecosystem drives competitive advantages in
          sourcing, executing, managing, and realizing Properties. With a focus
          of maximizing efficiency and streamlining processes, we are committed
          to leveraging technology, such as online real estate portals, digital
          marketing platforms, our site locater online makes up for reliable
          real estate site information, so the clients can make informed
          decisions about their investments, monetary coverage and capacity
          goals.
        </p>
      </div>
    </Parallax>
  );
};

export default ParallaxCarousel;
