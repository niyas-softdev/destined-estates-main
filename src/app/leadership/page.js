'use client'
import React, { useEffect, useState } from 'react'
import Menu from '@/components/molecules/Menu'
import Footer from '@/components/molecules/Footer'
import Leadership from '@/components/pages/Leadership';

const page = () => {
    

    return (
        <div>
            <div className="relative">
                <Menu />
                {/* HeroBanner below Menu */}
                <div className="relative w-full h-[250px] overflow-hidden mb-1">
                    <div className="relative w-full flex transition-transform ease-in-out duration-1000">
                        <div className="w-full flex-shrink-0">
                            <img src="/static/Assets/leadership1.jpg" alt="who we are" className='object-center' style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                            {/* Dark overlay on top of the image */}
                            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                        </div>
                    </div>

                    {/* Static content over slides */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white w-full px-4 lg:px-0">
                        <h1 className="text-5xl lg:text-5xl font-bold pt-10 text-center font-playfair pb-3 z-20">Leadership</h1>
                    </div>
                </div>
            </div>

            <Leadership />

            <Footer />
        </div>
    );
};

export default page;
