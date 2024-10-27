import React from 'react';
import Image from 'next/image';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import Wavify from "react-wavify";

const CompanyServices = () => {
    return (
        <div className="relative space-y-5 lg:space-y-20">

            {/* Hero Section for Buyer’s Guide with Parallax */}
            <Parallax
                bgImage="/static/Assets/client2.jpg"
                strength={400}
                bgImageStyle={{
                    opacity: 0.75, width: '100%',
                    height: '100%',
                    objectFit: 'cover',
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
                                Buyer&#39;s Guide
                            </motion.h2>
                            <motion.p
                                className="text-lg text-gray-200 max-w-2xl drop-shadow-md"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2 }}
                            >
                                From developing your budget and to signing your name on the dotted line, learn more
                                about the home buying process.
                            </motion.p>
                        </div>
                    </div>
                </section>
            </Parallax>

            {/* Content Split Section */}
            <section className="container mx-auto px-3 lg:px-6 py-7 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                    className="flex flex-col justify-center space-y-6 lg:space-y-8"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-800">
                        Steps to Buy Your Dream Home
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Buying a home is a major life event, whether it&#39;s your first or your fifth.
                        With the right guidance from our trusted Destined professionals, you can navigate
                        the process with confidence, making informed decisions every step of the way.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        From setting a budget to signing on the dotted line, our experts break down the
                        home-buying process into clear, actionable steps. We&#39;re with you all the way to make
                        your journey as smooth and enjoyable as possible.
                    </p>
                    <ul className="list-disc space-y-3 text-gray-700 pl-6">
                        <li className="text-lg">Define your goals</li>
                        <li className="text-lg">Pick a Destined agent</li>
                        <li className="text-lg">Determine your financial standing</li>
                        <li className="text-lg">Make an offer</li>
                        <li className="text-lg">Close the deal on your home</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="hidden lg:flex justify-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src="/static/Assets/home3.jpg"
                        alt="Steps to Buy a Home"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </motion.div>
            </section>


            {/* Seller’s Guide Section with Parallax */}
            <Parallax
                bgImage="/static/Assets/sold.jpg"
                strength={400}
                bgImageStyle={{
                    opacity: 0.75, width: '100%',
                    height: '100%',
                    objectFit: 'cover',
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

            {/* Content Split Section */}
            <section className="container mx-auto px-3 lg:px-6 py-7 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                    className="flex flex-col justify-center space-y-6 lg:space-y-8"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h3 className="text-2xl md:text-4xl  font-bold text-gray-800">
                        Steps to Sell Your Home
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        The best thing you can do to ensure a smooth and quick sale is to choose a
                        trusted Destined Professional. Our agents offer cutting-edge technology,
                        comprehensive marketing strategies, and expert guidance throughout the
                        real estate process.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We understand the market intricacies and will work with you to set a competitive
                        and fair price for your home. From preparation to closing, we are with you every
                        step of the way to ensure a seamless selling experience.
                    </p>
                    <ul className="list-disc space-y-3 text-gray-700 pl-6">
                        <li className="text-lg">Choose your Destined Agent</li>
                        <li className="text-lg">Prepare your home for sale</li>
                        <li className="text-lg">Determine your home&#39;s value</li>
                        <li className="text-lg">Accept the offer</li>
                        <li className="text-lg">Close on your home</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="hidden lg:flex justify-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src="/static/Assets/promise2.jpg"
                        alt="Steps to Sell a Home"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </motion.div>
            </section>


            {/* // Marketing Section */}
            <section className="relative space-y-5 md:space-y-10 !py-10">
                <motion.h2
                    className="w-full text-4xl md:text-5xl lg:text-6xl  text-left md:text-center px-2 font-extrabold text-black drop-shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Marketing Your Property
                </motion.h2>
                <div className="container mx-auto md:px-6 py-12 grid grid-cols-1 lg:grid-cols-3 flex-wrap gap-8 relative z-10"> {/* Added relative z-10 */}
                    <motion.div
                        className="text-center flex flex-col items-center justify-between h-[570px] md:p-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0 }}
                    >
                        <Image
                            src="/static/Assets/online-listing.jpg"
                            alt="Online Listing"
                            width={400}
                            height={300}
                            className="w-full h-[300px] md:h-[400px] md:rounded-lg md:shadow-lg hover:scale-105 transition-transform object-cover"
                        />
                        <h4 className="text-2xl font-semibold mt-4 w-full text-left md:text-center px-2">Online Listing</h4>
                        <p className="text-gray-700 mt-2 text-xl leading-relaxed px-2 text-left md:text-center">
                            Online listings feature information specific to each property and the surrounding area, as well as a property image. An invaluable marketing tool, the property images give potential buyers an instant preview, which saves time and visually sparks interest.
                        </p>
                    </motion.div>

                    <motion.div
                        className="text-center flex flex-col items-center justify-between h-[570px] md:p-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src="/static/Assets/mobile-presence.jpg"
                            alt="Mobile Presence"
                            width={400}
                            height={300}
                            className="w-full h-[300px] md:h-[400px] md:rounded-lg md:shadow-lg hover:scale-105 transition-transform object-cover"
                        />
                        <h4 className="text-2xl font-semibold mt-4 w-full text-left md:text-center px-2">Mobile Presence</h4>
                        <p className="text-gray-700 mt-2 text-xl leading-relaxed px-2 text-left md:text-center">
                            Prospective buyers will be able to access the same great search technology available on our website while on the go! Our website markets your property and our digital marketing campaign will ensure your property reaches to the elite buyers that you so desire.
                        </p>
                    </motion.div>

                    <motion.div
                        className="text-center flex flex-col items-center justify-between h-[600px] md:p-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Image
                            src="/static/Assets/for-sale.jpg"
                            alt="Advanced Marketing"
                            width={400}
                            height={300}
                            className="w-full h-[300px] md:h-[400px] md:rounded-lg md:shadow-lg hover:scale-105 transition-transform object-cover"
                        />
                        <h4 className="text-2xl font-semibold mt-4 w-full text-left md:text-center px-2">Advanced Marketing</h4>
                        <p className="text-gray-700 mt-2 text-xl leading-relaxed px-2 text-left md:text-center">
                            We have advanced marketing and digital strategies that can help drive more traffic to your listing. The Destined network of agents is one of the greatest in the country and can be a great resource for spreading the word about your property by word of mouth, online marketing, and other advertising opportunities.
                        </p>
                    </motion.div>
                </div>

                {/* Wave Below the Section */}
                <div className="absolute bottom-0 left-0 w-full z-0"> {/* Keep this as z-0 to ensure it's behind the content */}
                    <Wavify
                        // fill="#F3F4F6"
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


        </div>
    );
};

export default CompanyServices;
