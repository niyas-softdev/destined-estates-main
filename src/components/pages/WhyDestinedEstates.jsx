"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ParallaxProvider,
  Parallax as ScrollParallax
} from "react-scroll-parallax";
import { Parallax } from "react-parallax";
import Slider from "react-slick";
import OurValues from "../../app/why-destined-estates/ourValues";
import OurPromiseSection from "../../app/why-destined-estates/OurPromiseSection";
import AboutUsSection from "@/app/why-destined-estates/aboutusSection";
import GlobalSection from "@/app/why-destined-estates/globalSection";

// Typewriter Effect Component
const TypewriterH3 = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const typingSpeed = 50;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    let timeout;
    if (isVisible && displayedText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [isVisible, displayedText, text, typingSpeed]);

  return (
    <h3 ref={ref} className={`${className} text-center`}>
      {displayedText}
      {isVisible && displayedText.length < text.length && (
        <span className="blinking-cursor">|</span>
      )}
    </h3>
  );
};

// Helper function to animate the counting
const useCountUp = (start, end, duration, isVisible) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount((progress * (end - start) + start).toFixed(1));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, start, end, duration]);

  return count;
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: "linear"
};

export default function WhyDestinedEstates() {
  return (
    <ParallaxProvider>
      <div className="w-full h-full overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black">
        {/* Two Section Template with Carousel */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* First Section Content */}
            <div className="w-full order-3 lg:order-1 lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-left text-teal-300">
                Our Experience
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300">
                Back in 2012, a young entrepreneur named Rufus Tenola Vinoth
                founded his namesake residential real estate brokerage with a
                small investment in a tiny office on the north side of Chennai.
                The rest is history. Destined Estates has been helping buyers
                and sellers realize their dreams ever since.
              </p>
            </div>

            <div className="w-full order-2 lg:order-3 lg:w-1/2 overflow-hidden">
              <ScrollParallax speed={0}>
                {/* Carousel for the first section */}
                <Slider {...sliderSettings}>
                  <div>
                    <Parallax
                      bgImage="/static/Assets/home4.jpg"
                      strength={200}
                      bgImageStyle={{
                        objectFit: "cover",
                        width: "100%",
                        height: "130%"
                      }}
                    >
                      <div className="relative h-56 sm:h-64 md:h-80 lg:h-96">
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Experience the difference"
                            className="text-teal-300 text-lg sm:text-xl md:text-3xl font-semibold"
                          />
                        </div>
                      </div>
                    </Parallax>
                  </div>
                  <div>
                    <Parallax
                      bgImage="/static/Assets/home2.jpg"
                      strength={200}
                      bgImageStyle={{
                        objectFit: "cover",
                        width: "100%",
                        height: "130%"
                      }}
                    >
                      <div className="relative h-56 sm:h-64 md:h-80 lg:h-96">
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Explore Our Journey"
                            className="text-teal-300 text-lg sm:text-xl md:text-3xl font-semibold"
                          />
                        </div>
                      </div>
                    </Parallax>
                  </div>
                  <div>
                    <Parallax
                      bgImage="/static/Assets/home3.jpg"
                      strength={200}
                      bgImageStyle={{
                        objectFit: "cover",
                        width: "100%",
                        height: "130%"
                      }}
                    >
                      <div className="relative h-56 sm:h-64 md:h-80 lg:h-96">
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Explore Our Journey"
                            className="text-teal-300 text-lg sm:text-xl md:text-3xl font-semibold"
                          />
                        </div>
                      </div>
                    </Parallax>
                  </div>
                  <div>
                    <Parallax
                      bgImage="/static/Assets/home5.jpg"
                      strength={200}
                      bgImageStyle={{
                        objectFit: "cover",
                        width: "100%",
                        height: "130%"
                      }}
                    >
                      <div className="relative h-56 sm:h-64 md:h-80 lg:h-96">
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Explore Our Journey"
                            className="text-teal-300 text-lg sm:text-xl md:text-3xl font-semibold"
                          />
                        </div>
                      </div>
                    </Parallax>
                  </div>
                </Slider>
              </ScrollParallax>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* Second Section Content */}
            <div className="w-full order-3 lg:order-4 lg:w-1/2 lg:order-1 mt-8 lg:mt-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-left text-amber-400">
                Our Professionals
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300">
                We know a real estate brokerage is only as good as its agents,
                and Destined Estates has the industry's best and brightest,
                carrying the flag of exceptionalism in our markets and across
                the country. Wherever you've set your sights, we're there.
              </p>
            </div>

            <div className="w-full order-1 lg:order-3 lg:w-1/2 overflow-hidden">
              <ScrollParallax speed={0}>
                {/* Carousel for the second section */}
                <Slider {...sliderSettings}>
                  <div>
                    <Parallax
                      bgImage="/static/Assets/professionals2.jpg"
                      strength={200}
                      bgImageStyle={{
                        objectFit: "cover",
                        width: "100%",
                        height: "130%"
                      }}
                    >
                      <div className="relative h-56 sm:h-64 md:h-80 lg:h-96">
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Meet Our Team"
                            className="text-amber-400 text-lg sm:text-xl md:text-3xl font-semibold"
                          />
                        </div>
                      </div>
                    </Parallax>
                  </div>
                  <div>
                    <Parallax
                      bgImage="/static/Assets/professionals1.jpg"
                      strength={200}
                      bgImageStyle={{
                        objectFit: "cover",
                        width: "100%",
                        height: "130%"
                      }}
                    >
                      <div className="relative h-56 sm:h-64 md:h-80 lg:h-96">
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Our Expertise"
                            className="text-amber-400 text-lg sm:text-xl md:text-3xl font-semibold"
                          />
                        </div>
                      </div>
                    </Parallax>
                  </div>
                  <div>
                    <Parallax
                      bgImage="/static/Assets/ideas3.jpg"
                      strength={200}
                      bgImageStyle={{
                        objectFit: "cover",
                        width: "100%",
                        height: "130%"
                      }}
                    >
                      <div className="relative h-56 sm:h-64 md:h-80 lg:h-96">
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Our Expertise"
                            className="text-amber-400 text-lg sm:text-xl md:text-3xl font-semibold"
                          />
                        </div>
                      </div>
                    </Parallax>
                  </div>
                  <div>
                    <Parallax
                      bgImage="/static/Assets/ideas2.jpg"
                      strength={200}
                      bgImageStyle={{
                        objectFit: "cover",
                        width: "100%",
                        height: "130%"
                      }}
                    >
                      <div className="relative h-56 sm:h-64 md:h-80 lg:h-96">
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Our Expertise"
                            className="text-amber-400 text-lg sm:text-xl md:text-3xl font-semibold"
                          />
                        </div>
                      </div>
                    </Parallax>
                  </div>
                </Slider>
              </ScrollParallax>
            </div>
          </div>
        </section>

        {/* Our Promise Section with Dark Theme */}
        <div>
          <OurPromiseSection />
        </div>

        {/* our values */}

        <div>
          <OurValues />
        </div>

       {/* Global Section with Modern Clean Look */}
       <GlobalSection/>


        {/* About Us Section */}
       < AboutUsSection/>
      </div>
    </ParallaxProvider>
  );
}
