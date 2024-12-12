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
          Gathering Operational Intelligence
        </h1>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#333"
          }}
        >
          Our operations in strategic locations around the city of Chennai,
          provide us with data and insights into trends and changes in the
          market. You can count on our client centric teams to deliver an
          efficient and predictable experience. Our in&#8208;house teams of
          sales managers and rental specialists support your journey with us
          from start to finish.
        </p>
      </div>
    </Parallax>
  );
};

export default ParallaxCarousel;
