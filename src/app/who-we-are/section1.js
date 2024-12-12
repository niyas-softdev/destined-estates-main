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
          Destined Estates
        </h1>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#333"
          }}
        >
          Destined Estates is a leader in communications for Luxury Real Estate
          solutions that support connectivity throughout the Globe with a single
          intent to deliver your Destined Home in your Destined Hands.
          <br />
          <br />
          Destined estates is a leading real estate firm in India specializing
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
