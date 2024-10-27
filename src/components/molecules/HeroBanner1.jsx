import React, { useState, useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const HeroBanner1 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            id: 1,
            image: '/static/Herobanner/building1.jpg',
        },
        {
            id: 2,
            image: '/static/Herobanner/building2.jpg',
        },
        {
            id: 3,
            image: '/static/Herobanner/building3.jpg',
        },
    ];

    // Auto-slide functionality with constant speed
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Slide interval: 5 seconds
        return () => clearTimeout(timeout);
    }, [currentSlide, slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full h-[700px] overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                ))}
            </div>

            {/* Static content over slides */}
            <div className="absolute top-30 lg:left-52 inset-0 flex flex-col justify-center items-center lg:items-start text-white w-full px-4 lg:px-0">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left font-playfair pb-3">
                    YOUR DESTINED HOME &#8208; IN OUR DESTINED HANDS
                </h1>
                <h5 className="text-base lg:text-lg text-center lg:text-left font-opensans">
                    The place where Destiny is fulfilled
                </h5>
                <a href="/about-us/who-we-are.html" className="mt-4 px-6 py-2 bg-transparent text-white relative overflow-hidden group border border-white font-opensans">
                    <div className="flex items-center">
                        <span className="relative z-0 mr-5">Destined Estate Overview</span>
                        <FaArrowRightLong />
                    </div>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 group-hover:bg-opacity-50 transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></div>
                </a>
            </div>

            {/* Indicators (hidden on small screens) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2 hidden md:flex">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-700' : 'bg-gray-300'}`}
                    ></button>
                ))}
            </div>

            {/* Previous & Next Buttons */}
            <button
                onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white z-20 hidden sm:block"
            >
                <MdArrowBackIos size={50} />
            </button>
            <button
                onClick={() => goToSlide((currentSlide + 1) % slides.length)}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 text-white z-20 hidden sm:block"
            >
                <MdArrowForwardIos size={50} />
            </button>


        </div>
    );
};

export default HeroBanner1;
