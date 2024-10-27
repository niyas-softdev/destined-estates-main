import React, { useState } from 'react';

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      title: 'Slide 1',
      description: 'This is the first slide',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      title: 'Slide 2',
      description: 'This is the second slide',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      title: 'Slide 3',
      description: 'This is the third slide',
      image: 'https://via.placeholder.com/800x400',
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-5">
              <h5 className="text-sm uppercase">Featured</h5>
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg mb-6">{slide.description}</p>
              <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-700 hover:text-white transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
      >
        &#8592;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
      >
        &#8594;
      </button>
    </div>
  );
};

export default HeroBanner;
