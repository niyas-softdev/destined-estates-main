import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const SellingStepsSection = () => {
    const images = [
        "/static/Assets/promise2.jpg",
        "/static/Assets/promise1.jpg",
        "/static/Assets/promise3.jpg",
        "/static/Assets/promise.jpg"
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="container mx-auto px-4 lg:px-8 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
                className="flex flex-col justify-center space-y-6 lg:space-y-8"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h3 className="text-3xl md:text-5xl font-bold text-[#4ADE80]">
                    Steps to Sell Your Home
                </h3>
                <p className="text-md md:text-lg text-gray-200 leading-relaxed max-w-lg">
                    The best thing you can do to ensure a smooth and quick sale is to choose a trusted Destined Professional. Our agents offer cutting-edge technology, comprehensive marketing strategies, and expert guidance throughout the real estate process.
                </p>
                <p className="text-md md:text-lg text-gray-200 leading-relaxed max-w-lg">
                    We understand the market intricacies and will work with you to set a competitive and fair price for your home. From preparation to closing, we are with you every step of the way to ensure a seamless selling experience.
                </p>
                <ul className="list-disc space-y-3 text-gray-300 pl-5 max-w-md">
                    <li className="text-md lg:text-lg hover:text-teal-400 transition-colors duration-200">
                        <span className="font-semibold text-[#4ADE80]">Choose your Destined Agent</span>
                    </li>
                    <li className="text-md lg:text-lg hover:text-teal-400 transition-colors duration-200">
                        <span className="font-semibold text-[#4ADE80]">Prepare your home for sale</span>
                    </li>
                    <li className="text-md lg:text-lg hover:text-teal-400 transition-colors duration-200">
                        <span className="font-semibold text-[#4ADE80]">Determine your home&#39;s value</span>
                    </li>
                    <li className="text-md lg:text-lg hover:text-teal-400 transition-colors duration-200">
                        <span className="font-semibold text-[#4ADE80]">Accept the offer</span>
                    </li>
                    <li className="text-md lg:text-lg hover:text-teal-400 transition-colors duration-200">
                        <span className="font-semibold text-[#4ADE80]">Close on your home</span>
                    </li>
                </ul>
            </motion.div>

            <motion.div
                className="hidden lg:flex justify-center relative overflow-hidden rounded-lg shadow-xl w-full h-[500px]"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    key={images[currentImageIndex]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={images[currentImageIndex]}
                        alt="Steps to Sell a Home"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-2xl"
                    />
                    {/* Optional gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default SellingStepsSection;
