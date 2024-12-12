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
          Turning Insights into Action
        </h1>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#333"
          }}
        >
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
