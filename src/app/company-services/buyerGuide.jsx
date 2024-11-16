import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
    "/static/Assets/client2.jpg",
    "/static/Assets/client.jpg",
    "/static/Assets/client1.jpg",
    "/static/Assets/business-to-client.jpg"
];

function ImageTransitionSection() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Smooth transition background image */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${images[currentImage]})`,
                    filter: 'brightness(0.7)',
                    transition: 'background-image 1.5s ease-in-out'
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
            />

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl text-center space-y-6 p-4">
                <motion.h2
                    className="text-6xl font-extrabold text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Buyer&#39;s Guide
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-200 max-w-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    From developing your budget to signing your name on the dotted line, learn more
                    about the home buying process.
                </motion.p>
            </div>
        </section>
    );
}

export default ImageTransitionSection;
