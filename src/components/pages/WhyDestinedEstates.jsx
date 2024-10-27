"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ParallaxProvider,
  Parallax as ScrollParallax
} from "react-scroll-parallax";
import { Parallax } from "react-parallax";
import Slider from "react-slick";
import OurValues from "../molecules/ourValues";

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
      <div className="w-full h-full overflow-hidden bg-gradient-to-r from-purple-50 via-violet-100 to-indigo-50">
        {/* Two Section Template with Carousel */}
        <section className="relative py-20">
          <div className="container mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* First Section Content */}
            <div className="w-full order-3 lg:order-1 lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-left text-blue-600">
                Our Experience
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
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
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Experience the difference"
                            className="text-blue-600 text-lg sm:text-xl md:text-3xl font-semibold"
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
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Explore Our Journey"
                            className="text-blue-600 text-lg sm:text-xl md:text-3xl font-semibold"
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-left text-amber-700">
                Our Professionals
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
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
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Meet Our Team"
                            className="text-amber-700 text-lg sm:text-xl md:text-3xl font-semibold"
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
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Our Expertise"
                            className="text-amber-700 text-lg sm:text-xl md:text-3xl font-semibold"
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

        {/* Our Promise Section with Light Theme */}
        <section className="relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
          {/* Background Gradient and Blurred Effect */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl">
              <div
                style={{
                  clipPath:
                    "polygon(50% 0%, 75% 25%, 100% 50%, 75% 75%, 50% 100%, 25% 75%, 0% 50%, 25% 25%)",
                  animation: "pulse 10s ease-in-out infinite"
                }}
                className="aspect-[1097/1023] w-[70rem] bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 opacity-30"
              />
            </div>
          </div>

          <style jsx>{`
            @keyframes pulse {
              0%,
              100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.1);
              }
            }
          `}</style>

          <div className="relative container mx-auto max-w-7xl flex flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            {/* Image Section */}
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                  alt="Our Promise"
                  src="/static/Assets/promise3.jpg"
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <h3 className="text-lg font-semibold leading-7 text-indigo-500 mb-4">
                Our Promise To You
              </h3>
              <figure className="relative isolate pt-6 sm:pt-12">
                <svg
                  fill="none"
                  viewBox="0 0 162 128"
                  aria-hidden="true"
                  className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                >
                  <path
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                  />
                  <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
                </svg>
                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    Destined Estates ensures that your property gets
                    unparalleled visibility and promotion. We employ
                    sophisticated advertising strategies that generate interest,
                    leading to bigger offers and quicker transactions.
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base">
                  <div className="font-semibold text-white">
                    at Destined Estates
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* our values */}

        <div>
          <OurValues />
        </div>

        {/* Global Section with Modern Clean Look */}
        <div className="relative px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt="Global Reach"
              src="/static/Assets/luxury-house.jpg"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Semi-transparent Gradient Overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"
          />

          {/* Content Section */}
          <div className="relative mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                The World We Serve
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
                Destined Estates stands taller than ever in its original markets
                of Chennai and the whole of Tamil Nadu. Our reputation continues
                to grow, thanks to our dedicated team serving exceptional urban,
                suburban, and resort destinations across the state.
              </p>
            </div>

            {/* Image Content */}
            <div className="relative">
              <img
                alt="Luxury House"
                src="/static/Assets/global2.jpg"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-4xl">
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Sell Your Home With Destined Estates
              </h1>
              <p className="mt-6 text-balance text-xl leading-8 text-gray-700">
                Whether you&apos;re ready to sell or just looking for answers,
                one of Destined Estates&apos; experienced neighborhood real
                estate experts can help.
              </p>
            </div>

            {/* Updated Content Section */}
            <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
              <div className="lg:pr-8">
                <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">
                  Streetwise and Market Smart
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  In your neighborhood and across the city, nobody understands
                  the residential real estate scene like Destined Estates.
                  Whether you're buying, renting, or selling, when you connect
                  with a Destined Estates professional, you're working with the
                  best in the business.
                </p>
                <h2 className="mt-12 text-pretty text-2xl font-semibold tracking-tight text-gray-900">
                  Our Name is a Name that Opens Doors
                </h2>
                <p className="mt-6 text-base text-gray-600">
                  Discover our international standards luxury real estate
                  company and get to know one of the industry's most recognized
                  and respected brand names. Our professionals specialize in
                  market intelligence and client satisfaction.
                </p>
              </div>

              {/* Image Gallery Section */}
              <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                  <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                      className="block size-full object-cover"
                    />
                  </div>
                  <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                    <img
                      alt=""
                      src="/static/Assets/professionals.png"
                      className="block size-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                    <img
                      alt=""
                      src="/static/Assets/women1.jpg"
                      className="block size-full object-cover"
                    />
                  </div>
                  <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                    <img
                      alt=""
                      src="/static/Assets/client2.jpg"
                      className="block size-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}
