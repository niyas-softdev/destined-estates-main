'use client';
import React from 'react';
import Menu from '@/components/molecules/Menu';
import Footer from '@/components/molecules/Footer';
import CompanyServices from '@/components/pages/CompanyServices';

const Page = () => {
    return (
        <div>
            <div className="relative">
                <Menu />
                {/* HeroBanner below Menu */}
                <div className="relative w-full h-[300px] overflow-hidden">
                    <div className="relative w-full flex transition-transform ease-in-out duration-1000">
                        <div className="w-full flex-shrink-0">
                            <img
                                src="/static/Herobanner/home4.jpg"
                                alt="Who We Are"
                                className="w-full h-[300px] object-cover"
                            />
                            {/* Dark overlay with blur effect */}
                            <div className="absolute inset-0 bg-black/20 z-10"></div>
                        </div>
                    </div>

                    {/* Static content over slides */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white w-full px-4 lg:px-0">
                        <h1 className="text-5xl lg:text-5xl font-bold pt-10 text-center font-playfair pb-3 z-20">
                            Service By The Company
                        </h1>
                    </div>
                </div>
            </div>

            <CompanyServices />

            <Footer />
        </div>
    );
};

export default Page;
