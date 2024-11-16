import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = () => {
    const images = [
        "/static/Assets/sold.jpg",
        "/static/Assets/sell.jpg",
        "/static/Assets/sales.jpg",
        "/static/Assets/sell1.jpg"
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change background image every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Parallax
            bgImage={images[currentImageIndex]}
            strength={400}
            bgImageStyle={{
                opacity: 0.85,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 1.5s ease-in-out, filter 1.5s ease-in-out', // Smooth transitions for blur and opacity
                filter: 'blur(5px)' // Apply blur effect
            }}
        >
            <section className="relative h-screen flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <div className='flex flex-col items-center justify-center max-w-5xl space-y-10 text-center'>
                        <motion.h2
                            className="text-6xl font-extrabold text-white drop-shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Seller&#39;s Guide
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-200 max-w-2xl drop-shadow-md"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            From determining your home&#39;s value to closing day, learn more about the home
                            selling process.
                        </motion.p>
                    </div>
                </div>
            </section>
        </Parallax>
    );
};

export default HeroSection;
