import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Wavify from "react-wavify";
import Image from 'next/image';

const images = {
    onlineListing: [
        '/static/Assets/online-listing.jpg',
        '/static/Marketing/onlineListening1.png',
        '/static/Marketing/onlinelistening2.png'
    ],
    mobilePresence: [
        '/static/Assets/mobile-presence.jpg',
        '/static/Marketing/mobilePresence1.png',
        '/static/Marketing/mobilePresence2.png'
    ],
    advancedMarketing: [
        '/static/Marketing/advancemarketing1.png',
        '/static/Marketing/advancemarketing.png',
        '/static/Marketing/advancemarketing2.png'
    ]
};

function MarketingSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState({
        onlineListing: 0,
        mobilePresence: 0,
        advancedMarketing: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => ({
                onlineListing: (prevIndex.onlineListing + 1) % images.onlineListing.length,
                mobilePresence: (prevIndex.mobilePresence + 1) % images.mobilePresence.length,
                advancedMarketing: (prevIndex.advancedMarketing + 1) % images.advancedMarketing.length
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative space-y-5 md:space-y-10 py-10">
            <motion.h2
                className="w-full text-4xl md:text-5xl lg:text-6xl text-left md:text-center px-2 font-extrabold text-[#f1c5d0] drop-shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Marketing Your Property
            </motion.h2>

            <div className="container mx-auto md:px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                {/* Online Listing Card */}
                <motion.div
                    className="text-center flex flex-col items-center justify-between h-[600px] md:p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative w-full h-[250px] overflow-hidden md:rounded-lg md:shadow-lg">
                        <AnimatePresence>
                            <motion.div
                                key={images.onlineListing[currentImageIndex.onlineListing]}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={images.onlineListing[currentImageIndex.onlineListing]}
                                    alt="Online Listing"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <h4 className="text-2xl font-semibold mt-4 w-full text-left md:text-center px-2">Online Listing</h4>
                    <p className="text-gray-700 mt-2 text-xl leading-relaxed px-2 text-left md:text-center">
                        Online listings feature information specific to each property and the surrounding area, as well as a property image. An invaluable marketing tool, the property images give potential buyers an instant preview, which saves time and visually sparks interest.
                    </p>
                </motion.div>

                {/* Mobile Presence Card */}
                <motion.div
                    className="text-center flex flex-col items-center justify-between h-[600px] md:p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative w-full h-[250px] overflow-hidden md:rounded-lg md:shadow-lg">
                        <AnimatePresence>
                            <motion.div
                                key={images.mobilePresence[currentImageIndex.mobilePresence]}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={images.mobilePresence[currentImageIndex.mobilePresence]}
                                    alt="Mobile Presence"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <h4 className="text-2xl font-semibold mt-4 w-full text-left md:text-center px-2">Mobile Presence</h4>
                    <p className="text-gray-700 mt-2 text-xl leading-relaxed px-2 text-left md:text-center">
                        Prospective buyers will be able to access the same great search technology available on our website while on the go! Our website markets your property and our digital marketing campaign will ensure your property reaches elite buyers.
                    </p>
                </motion.div>

                {/* Advanced Marketing Card */}
                <motion.div
                    className="text-center flex flex-col items-center justify-between h-[600px] md:p-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="relative w-full h-[250px] overflow-hidden md:rounded-lg md:shadow-lg">
                        <AnimatePresence>
                            <motion.div
                                key={images.advancedMarketing[currentImageIndex.advancedMarketing]}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={images.advancedMarketing[currentImageIndex.advancedMarketing]}
                                    alt="Advanced Marketing"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <h4 className="text-2xl font-semibold mt-4 w-full text-left md:text-center px-2">Advanced Marketing</h4>
                    <p className="text-gray-700 mt-2 text-xl leading-relaxed px-2 text-left md:text-center">
                        We have advanced marketing and digital strategies that can help drive more traffic to your listing. The Destined network of agents is one of the greatest in the country and is a valuable resource for spreading the word about your property through various marketing channels.
                    </p>
                </motion.div>
            </div>

            {/* Wave Below the Section */}
            <div className="absolute bottom-0 left-0 w-full z-0">
                <Wavify
                    fill="#ddd"
                    paused={false}
                    options={{
                        height: 30,
                        amplitude: 100,
                        speed: 0.10,
                        points: 2,
                    }}
                    className="w-full"
                    style={{ height: '500px' }}
                />
            </div>
        </section>
    );
}

export default MarketingSection;
