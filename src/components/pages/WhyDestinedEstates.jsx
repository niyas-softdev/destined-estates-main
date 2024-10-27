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

// Numbers Section with Counting Effect
const NumbersSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to check if the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Number values with counting effect
  const raisedCount = useCountUp(0, 150, 2000, isVisible); // $0 to $150M in 2 seconds
  const companiesCount = useCountUp(0, 30, 2000, isVisible); // 0 to 30K in 2 seconds
  const dealsCount = useCountUp(0, 1.5, 2000, isVisible); // 0 to 1.5M in 2 seconds
  const leadsCount = useCountUp(0, 200, 2000, isVisible); // 0 to 200M in 2 seconds

  return (
    <div ref={sectionRef} className="max-lg:mt-16 lg:col-span-1">
      <p className="text-base font-semibold leading-7 text-gray-500">
        The numbers
      </p>
      <hr className="mt-6 border-t border-gray-200" />
      <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
          <dt className="text-sm/6 text-gray-600">Raised</dt>
          <dd className="order-first text-6xl font-semibold tracking-tight">
            ${raisedCount}M
          </dd>
        </div>
        <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
          <dt className="text-sm/6 text-gray-600">Companies</dt>
          <dd className="order-first text-6xl font-semibold tracking-tight">
            {companiesCount}K
          </dd>
        </div>
        <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
          <dt className="text-sm/6 text-gray-600">Deals Closed</dt>
          <dd className="order-first text-6xl font-semibold tracking-tight">
            {dealsCount}M
          </dd>
        </div>
        <div className="flex flex-col gap-y-2">
          <dt className="text-sm/6 text-gray-600">Leads Generated</dt>
          <dd className="order-first text-6xl font-semibold tracking-tight">
            {leadsCount}M
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default function WhyDestinedEstates() {
  return (
    <ParallaxProvider>
      <div className="w-full h-full overflow-hidden bg-gradient-to-r from-purple-50 via-violet-100 to-indigo-50">
        {/* Two Section Template with Carousel */}
        <section className="relative py-20 ">
          <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
            {/* First Section Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-left text-blue-600">
                Our Experience
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                Back in 2012, a young entrepreneur named Rufus Tenola Vinoth
                founded his namesake residential real estate brokerage with a
                small investment in a tiny office on the north side of Chennai.
                The rest is history. Destined Estates has been helping buyers
                and sellers realize their dreams ever since.
              </p>
            </div>
            <div className="lg:w-1/2 overflow-hidden">
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
                      <div className="relative h-64 md:h-96">
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Experience the difference"
                            className="text-blue-600 text-xl md:text-3xl font-semibold"
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
                      <div className="relative h-64 md:h-96">
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Explore Our Journey"
                            className="text-blue-600 text-xl md:text-3xl font-semibold"
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

        <section className="relative py-20 ">
          <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
            {/* Second Section Content */}
            <div className="lg:w-1/2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6 text-left text-amber-700">
                Our Professionals
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                We know a real estate brokerage is only as good as its agents,
                and Destined Estates has the industry's best and brightest,
                carrying the flag of exceptionalism in our markets and across
                the country. Wherever you've set your sights, we're there.
              </p>
            </div>
            <div className="lg:w-1/2 overflow-hidden">
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
                      <div className="relative h-64 md:h-96">
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Meet Our Team"
                            className="text-amber-700 text-xl md:text-3xl font-semibold"
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
                      <div className="relative h-64 md:h-96">
                        <div className="absolute bottom-0 left-0 w-full h-16 bg-white bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
                          <TypewriterH3
                            text="Our Expertise"
                            className="text-amber-700 text-xl md:text-3xl font-semibold"
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
        <section className="relative py-24 sm:py-32 bg-cover bg-center">
          {/* Light Overlay with Gradient for a professional look */}
          <div className="absolute inset-0 opacity-70" />

          <div className="relative container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl lg:max-w-none lg:grid-cols-2 items-center gap-y-16 lg:gap-x-10">
              {/* Left Content Box */}
              <div className="lg:pr-8">
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl px-6 pb-8 pt-64 sm:px-12 lg:px-8">
                  <img
                    alt="Our Promise"
                    src="/static/Assets/promise1.jpg"
                    className="absolute inset-0 h-full w-full object-cover brightness-105"
                  />
                  <div className="absolute inset-0 bg-white/80 mix-blend-multiply" />

                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-2xl"
                  >
                    <div
                      style={{
                        clipPath:
                          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                      }}
                      className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-blue-300 to-indigo-400 opacity-40"
                    />
                  </div>

                  <figure className="relative isolate">
                    <blockquote className="mt-6 text-xl font-semibold leading-8 text-gray-800">
                      <p>
                        “Destined estate agents are backed by one of the real
                        estate industry's most experienced and effective
                        marketing teams, whose innovative campaigns and
                        sophisticated advertising programs ensure the broadest
                        exposure for our clients' homes.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 text-sm leading-6 text-gray-600">
                      <strong className="font-semibold text-gray-800">
                        Rufus Vinoth,
                      </strong>{" "}
                      CEO at Destined Estates
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Right Content Section */}
              <div>
                <div className="text-base leading-7 text-gray-600 lg:max-w-lg">
                  <h3 className="text-lg font-semibold leading-7 text-indigo-500">
                    Our Promise To You
                  </h3>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Innovative Marketing. Broadest Exposure. Faster Closings.
                  </h1>
                  <p className="mt-8">
                    Destined Estates ensures that your property gets
                    unparalleled visibility and promotion. We employ
                    sophisticated advertising strategies that generate interest,
                    leading to bigger offers and quicker transactions.
                  </p>
                  <p className="mt-8">
                    Trust our experienced team to create tailored marketing
                    campaigns that meet your needs and maximize your home's
                    potential.
                  </p>
                </div>
               
              </div>
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
