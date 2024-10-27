import React from 'react';
import { motion } from 'framer-motion';

const ClientRelations = () => {
    return (
        <div className="bg-gray-100 py-10 px-6 lg:px-24">
            {/* Section 1: Client Relations Overview */}
            <motion.div
                className="flex justify-center font-semibold text-purple-950 font-playfair text-lg md:text-xl lg:text-2xl  mb-10 lg:mb-24"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                {/* <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Client Relations</h2> */}
                <p className="text-center w-full md:4/5 xl:w-3/4">
                    At Destined Estates we work to bring about Premium Luxury properties tailor made for our
                    clients, via a diverse range of complex real estate strategies, from our leading
                    professionals. Our prudent management maintains a wide range of ultra-premium
                    property portfolio with which we indulge our clients.
                </p>
            </motion.div>

            {/* Section 2: Interactive Image with Animation */}
            <motion.div
                className="relative flex justify-center mb-10 lg:mb-24"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                {/* Interactive image */}
                <motion.img
                    src="/static/Assets/client2.jpg" // Replace with your image URL
                    alt="Luxury Property"
                    className="w-full md:w-3/4 lg:w-3/5  h-auto rounded-lg shadow-xl"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                />
            </motion.div>

            {/* Section 3: Core Strength */}
            <motion.div
                className="mb-10 lg:mb-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <h3 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">Core Strength in Client Relations</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Our core strength in client relations comes from an unwavering operating team of
                    employees, who build value in business by their unshakable bond with our clients, through
                    consistent cycles of white-collar professionalism, and leveraging their deep bench of
                    knowledge and on-the-ground insights. Executing sale transactions of a size that few
                    others can match, through our access to magnanimous luxury properties.
                </p>
            </motion.div>

            {/* Section 4: For Buyers & Renters */}
            <motion.div
                className="mb-10 lg:mb-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <h3 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">For Buyers & Renters</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                    In addition to our extensive and exclusive database, we will use our multiple listings systems to provide you access
                    to every available property in the city of Chennai. Our vibrant markets change daily. New information and ideas become
                    available and are at our fingertips. We will update you and inform you on the latest market trends, reports, property micro-data,
                    and newly available properties and neighborhoods as they become available so that you can make the absolute best and most informed decision for your investment or future home.

                    We will accompany you through every step of the process, advising you from defining searches and options to deciding on the perfect home;
                    from negotiating the best value to the final closing.
                </p>
            </motion.div>

            {/* Section 5: For Sellers */}
            <motion.div
                className="mb-10 lg:mb-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <h3 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">For Sellers</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Destined Estates is first and foremost your marketing agent as much as it is your sales agent. In order to achieve the highest price
                    possible in the shortest amount of time, we will source all available comparable current, past, and future data to price the property accurately and intelligently.

                    We will advise on positioning, staging, and showcasing your property. High-quality photos, floor plans, collateral materials, videos,
                    and mailers will be provided. We will embark on advertising and marketing campaigns through media, industry trades, and real estate portals to ensure maximum exposure.

                    Additionally, we will qualify potential buyers, negotiate in your best interest, and guide you through every step of the transaction,
                    coordinating with all professionals involved.
                </p>
            </motion.div>
        </div>
    );
};

export default ClientRelations;
