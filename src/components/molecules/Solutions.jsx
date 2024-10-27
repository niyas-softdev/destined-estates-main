import React, { useState } from 'react';
import { FaArrowDownLong } from "react-icons/fa6";

const Solutions = () => {
    // State to track which section is open
    const [activeSection, setActiveSection] = useState(null);

    // Toggle function to switch active section and apply opacity
    const toggleSection = (section) => {
        setActiveSection(prevSection => (prevSection === section ? null : section));
    };

    return (

        <>
            <div className='mx-auto max-w-7xl px-4 sm:px-9 xl:max-w-7xl xl:px-0'>
                <div className='max-w-5xl space-y-10 p-5 mt-20'>
                    <p>
                        Destined Estates brings together the finest luxury real estate- with unsurpassed local knowledge bound tightly with a rare talent to sell and rent effectively in the international domain. We at Destined estates understand buyers and sellers gravitate to professionals who know and understand the unique dynamics of their area, their community, and their neighborhood.
                    </p>
                    <p>
                        Sophistication. Elegance. Class. The Destined Estates collection offers all this and much more to affluent home buyers and sellers. The Destined Estates home marketing campaign provides exclusive advertising for our client properties, specialized training and distinctive marketing tools for our professionals so they can better serve discerning clients like you. When you work with a destined estates agent, you’ll receive unparalleled service and an unforgettable experience.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-5">

                    <div>
                        {/* Asset Management Block */}
                        <div
                            className={`group relative bg-gray-200 shadow-md ${activeSection && activeSection !== 'asset' ? 'opacity-50' : 'opacity-100'} `}
                        >
                            <img
                                src="/static/solution1.jpg"
                                className="w-full h- object-cover"
                                alt="Asset Management"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300 ease-in-out">
                                {/* Content block that moves upward on hover */}
                                <div className="transform transition-all duration-300 ease-in-out group-hover:translate-y-[-20px]">
                                    <h2 className="text-xl font-semibold mt-2 text-white">Destined Estates Asset Management</h2>
                                    <p className="text-gray-300">
                                    We invest on behalf of institutions around the world across renewable power and
                                    transition, infrastructure, private equity, real estate, and credit.
                                    </p>
                                </div>

                                {/* Button that appears and moves upward */}
                                <div className='flex justify-start'>
                                    <button
                                        onClick={() => toggleSection('asset')}
                                        className="mt-2 transform translate-y-8 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 flex items-center gap-2" 
                                    >
                                        <span className='text-blue-400'>More</span>
                                         <FaArrowDownLong className='text-blue-400' />
                                    </button>
                                    
                                </div>
                            </div>
                        </div>




                        {/* <div>
                            {activeSection === 'asset' && (
                                <div className="mt-2">
                                    <p>Details about Asset Management businesses...</p>
                                    <button
                                        onClick={() => toggleSection('asset')}
                                        className="text-blue-500 underline mt-2 transform translate-y-8 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        More
                                    </button>

                                </div>
                            )}
                        </div> */}
                    </div>

                    <div>
                        {/* Wealth Solutions Block */}
                        <div
                            className={`group relative bg-gray-200 shadow-md ${activeSection && activeSection !== 'asset' ? 'opacity-50' : 'opacity-100'} `}
                        >
                            <img
                                src="/static/solution2.jpg"
                                className="w-full h- object-cover"
                                alt="Asset Management"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300 ease-in-out">
                                {/* Content block that moves upward on hover */}
                                <div className="transform transition-all duration-300 ease-in-out group-hover:translate-y-[-20px]">
                                    <h2 className="text-xl font-semibold mt-2 text-white">Destined Estates Asset Management Businesses</h2>
                                    <p className="text-gray-300">
                                        We invest on behalf of institutions around the world across renewable power and transition, infrastructure, private equity, real estate, and credit.
                                    </p>
                                </div>

                                {/* Button that appears and moves upward */}
                                <div className='flex justify-start'>
                                    <button
                                        onClick={() => toggleSection('asset')}
                                        className=" mt-2 transform translate-y-8 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 flex items-center gap-2" 
                                    >
                                        <span className='text-blue-400'>More</span>
                                        <FaArrowDownLong className='text-blue-400' />
                                    </button>
                                    
                                </div>
                            </div>
                        </div>


                        {/* <div>
                            {activeSection === 'wealth' && (
                                <div className="mt-2">
                                    <p>More details about Wealth Solutions...</p>
                                    <button
                                        onClick={() => toggleSection('wealth')}
                                        aria-label="Close"
                                        className="text-red-500 underline"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div> */}
                    </div>
                </div>
            </div>

        </>

    );
};

export default Solutions;
