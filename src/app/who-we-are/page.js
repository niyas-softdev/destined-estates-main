'use client'
import WhoWeAre from '@/components/pages/WhoWeAre';
import Menu from '@/components/molecules/Menu';
import Footer from '@/components/molecules/Footer';

const page = () => {
    return (
        <>
            <div className="relative">
                <Menu />
                {/* HeroBanner below Menu */}
                <div className="relative w-full h-[250px] overflow-hidden mb-1">
                    <div className="relative w-full flex transition-transform ease-in-out duration-1000">
                        <div className="w-full flex-shrink-0">
                            <img src="/static/Herobanner/home2.jpg" alt="who we are" className="w-full h-[300px] object-cover" />
                            {/* Dark overlay on top of the image */}
                            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                        </div>
                    </div>

                    {/* Static content over slides */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white w-full px-4 lg:px-0">
                        <h1 className="text-5xl lg:text-5xl font-bold pt-10 text-center font-playfair pb-3 z-20">Who We Are</h1>
                    </div>
                </div>
                <WhoWeAre />

                <Footer />
            </div>

        </>
    );
};

export default page;
