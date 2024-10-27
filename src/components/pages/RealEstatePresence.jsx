import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useTransition, animated } from '@react-spring/web';
import { motion, AnimatePresence } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
};

const transition = {
    duration: 0.8,
    ease: [0.5, 0.1, 0.5, 1],
};

const useSmallScreen = () => {
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);
    React.useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 600); // Customize breakpoint as needed
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return isSmallScreen;
};


export default function RealEstatePresence() {
    const isSmallScreen = useSmallScreen();

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(4);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1); // Set direction for motion
            setIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);




    const images1 = ['/static/Assets/local4.jpg', '/static/Assets/local2.jpg', '/static/Assets/local6.jpg'];
    const images2 = ['/static/Assets/ideas.jpg', '/static/Assets/ideas2.jpg', '/static/Assets/ideas4.jpg'];
    const images3 = ['/static/Assets/community1.jpg', '/static/Assets/community2.jpg', '/static/Assets/community3.jpg'];


    return (
        <>
            {isSmallScreen ? (
                <div className="bg-[#4c0018]">
                    {/* Local Insights Section */}
                    <motion.div
                        className="relative min-h-screen flex flex-col md:flex-row justify-center items-center bg-[#4c0018] md:bg-white my-1"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                    >
                        <div className="max-w-5xl w-full grid grid-cols-12 overflow-hidden z-10">
                            {/* Image Section */}
                            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                                <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
                                    <AnimatePresence initial={false} custom={direction}>
                                        <motion.img
                                            key={index}
                                            src={images1[index]}
                                            initial={{ x: direction === 1 ? '100%' : '-100%' }}
                                            animate={{ x: 0 }}
                                            exit={{ x: direction === 1 ? '-100%' : '100%' }}
                                            transition={{ duration: 1 }} // Adjust duration for smoother transitions
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                            alt={`Slide ${index}`}
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="col-span-12 md:col-span-6 p-4 lg:p-8 flex flex-col justify-center">
                                <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
                                    Local Insights
                                </h1>
                                <div className="border-b-2 border-white w-24 mb-6"></div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    Our on&#8211;the&#8211;ground presence in key locations around the city gives us knowledge of
                                    local market conditions and trends, as well as access to proprietary deal flow.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Strategic Flexibility Section */}
                    <motion.div
                        className="relative min-h-screen flex flex-col md:flex-row justify-center items-center bg-[#4c0018] md:bg-white"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                    >
                        <div className="max-w-5xl w-full grid grid-cols-12 overflow-hidden z-10">
                            {/* Image Section */}
                            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                                <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
                                    <AnimatePresence initial={false} custom={direction}>
                                        <motion.img
                                            key={index}
                                            src={images2[index]}
                                            initial={{ x: direction === 1 ? '100%' : '-100%' }}
                                            animate={{ x: 0 }}
                                            exit={{ x: direction === 1 ? '-100%' : '100%' }}
                                            transition={{ duration: 1 }} // Adjust duration for smoother transitions
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                            alt={`Slide ${index}`}
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="col-span-12 md:col-span-6 p-4 lg:p-8 flex flex-col justify-center">
                                <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
                                    Strategic <br />Flexibility
                                </h1>
                                <div className="border-b-2 border-white w-24 mb-6"></div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    Quickly scaling up to put our Real estate ideas into action, allows us to allocate
                                    luxury properties where it is otherwise scarce, acquire intellectual assets for
                                    effective deal closures and leverage our operating expertise, enhancing the value of
                                    our services.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contributing to the Local Communities Section */}
                    <motion.div
                        className="relative min-h-screen flex flex-col md:flex-row justify-center items-center bg-[#4c0018] md:bg-white my-1"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                    >
                        <div className="max-w-5xl w-full grid grid-cols-12 overflow-hidden z-10">
                            {/* Image Section */}
                            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                                <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
                                    <AnimatePresence initial={false} custom={direction}>
                                        <motion.img
                                            key={index}
                                            src={images3[index]}
                                            initial={{ x: direction === 1 ? '100%' : '-100%' }}
                                            animate={{ x: 0 }}
                                            exit={{ x: direction === 1 ? '-100%' : '100%' }}
                                            transition={{ duration: 1 }} // Adjust duration for smoother transitions
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                            alt={`Slide ${index}`}
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="col-span-12 md:col-span-6 p-4 lg:p-8 flex flex-col justify-center">
                                <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
                                    Contributing <br />to the <br />local communities
                                </h1>
                                <div className="border-b-2 border-white w-24 mb-6"></div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    We are actively involved in the communities in which we operate&#8211;creating jobs,
                                    contributing to local talents by ensuring white collar jobs.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            ) : (
                <div>
                    {/* Local Insights Section */}
                    <motion.div
                        className="relative min-h-screen flex justify-center items-center py-12 my-10"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                    >
                        <div className="max-w-7xl w-full grid grid-cols-12 overflow-hidden z-10">
                            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                                {/* <img
                                    src="/static/Assets/local3.jpg"
                                    alt="Living Room"
                                    className="shadow-md"
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                /> */}
                                <div style={{ position: 'relative', width: '100%', height: '900px', overflow: 'hidden' }}>
                                    <AnimatePresence initial={false} custom={direction}>
                                        <motion.img
                                            key={index}
                                            src={images1[index]}
                                            initial={{ x: direction === 1 ? '100%' : '-100%' }}
                                            animate={{ x: 0 }}
                                            exit={{ x: direction === 1 ? '-100%' : '100%' }}
                                            transition={{ duration: 1 }} // Adjust duration for smoother transitions
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                            alt={`Slide ${index}`}
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="col-span-12 md:col-span-6 p-4 lg:p-8 flex flex-col justify-center ">
                                <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                                    Local Insights
                                </h1>
                                <div className="border-b-2 border-white w-24 mb-6"></div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    Our on&#8211;the&#8211;ground presence in key locations around the city gives us knowledge of
                                    local market conditions and trends, as well as access to proprietary deal flow.
                                </p>
                            </div>
                        </div>

                        {/* Dual Color Background */}

                        <div className="absolute inset-0 grid grid-rows-[80%_30%] grid-cols-[35%_65%] w-full h-full">
                            {/* First Row - Two Columns */}
                            <div className="bg-white"></div>
                            <div className="bg-[#4c0018]"></div>

                            {/* Second Row - Single Column Spanning Two Columns */}
                            <div className="bg-white col-span-2"></div>
                        </div>
                    </motion.div>

                    {/* Strategic Flexibility Section */}
                    <motion.div
                        className="relative min-h-screen flex justify-center items-center py-12 "
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                    >
                        <div className="max-w-7xl w-full grid grid-cols-12 overflow-hidden z-10">
                            <div className="col-span-12 md:col-span-6 p-4 lg:p-8 flex flex-col justify-center ">
                                <h1 className="text-white text-7xl font-bold mb-6 leading-tight">
                                    Strategic <br />Flexibility
                                </h1>
                                <div className="border-b-2 border-white w-24 mb-6"></div>
                                <p className="text-white text-lg mb-6 leading-relaxed">
                                    Quickly scaling up to put our Real estate ideas into action, allows us to allocate
                                    luxury properties where it is otherwise scarce, acquire intellectual assets for
                                    effective deal closures and leverage our operating expertise, enhancing the value of
                                    our services.
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                                <div style={{ position: 'relative', width: '100%', height: '900px', overflow: 'hidden' }}>
                                    <AnimatePresence initial={false} custom={direction}>
                                        <motion.img
                                            key={index}
                                            src={images2[index]}
                                            initial={{ x: direction === 1 ? '100%' : '-100%' }}
                                            animate={{ x: 0 }}
                                            exit={{ x: direction === 1 ? '-100%' : '100%' }}
                                            transition={{ duration: 1 }} // Adjust duration for smoother transitions
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                            alt={`Slide ${index}`}
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        {/* Dual Color Background */}

                        <div className="w-full h-full absolute inset-0 grid grid-rows-[80%_30%] grid-cols-[65%_35%]">
                            {/* First Row - Two Columns */}
                            <div className="bg-[#4c0018]"></div>
                            <div className="bg-white"></div>

                            {/* Second Row - Single Column Spanning Two Columns */}
                            <div className="bg-white col-span-2"></div>
                        </div>
                    </motion.div>

                    {/* Contributing to the Local Communities Section */}
                    <motion.div
                        className="relative min-h-screen flex justify-center items-center py-12  my-10"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                    >
                        <div className="max-w-7xl w-full grid grid-cols-12 overflow-hidden z-10">
                            <div className="col-span-12 md:col-span-6 flex justify-center items-center">
                                <div style={{ position: 'relative', width: '100%', height: '900px', overflow: 'hidden' }}>
                                    <AnimatePresence initial={false} custom={direction}>
                                        <motion.img
                                            key={index}
                                            src={images3[index]}
                                            initial={{ x: direction === 1 ? '100%' : '-100%' }}
                                            animate={{ x: 0 }}
                                            exit={{ x: direction === 1 ? '-100%' : '100%' }}
                                            transition={{ duration: 1 }} // Adjust duration for smoother transitions
                                            style={{
                                                position: 'absolute',
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                            alt={`Slide ${index}`}
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="col-span-12 md:col-span-6 p-4 lg:p-8 flex flex-col justify-center">
                                <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                                    Contributing <br />to the <br />local communities
                                </h1>
                                <div className="border-b-2 border-white w-24 mb-6"></div>
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    We are actively involved in the communities in which we operate&#8211;creating jobs,
                                    contributing to local talents by ensuring white collar jobs.
                                </p>
                            </div>
                        </div>

                        {/* Dual Color Background */}

                        <div className="absolute inset-0 grid grid-rows-[80%_25%] grid-cols-[35%_65%] ">
                            {/* First Row - Two Columns */}
                            <div className="bg-white"></div>
                            <div className="bg-[#4c0018]"></div>

                            {/* Second Row - Single Column Spanning Two Columns */}
                            <div className="bg-white col-span-2"></div>
                        </div>
                    </motion.div>
                </div>

            )}
        </>
    );
}
