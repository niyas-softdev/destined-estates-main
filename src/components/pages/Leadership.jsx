import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  // Animation variants for text reveal with scale
  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-12">
      {/* Title with Image Section */}
      <div id="title-with-image" className="pb-10 pt-10 lg:w-1/3">
        <div className="w-full flex flex-col items-center sticky top-36">
          {/* Image */}
          <div className="relative w-48 h-[50%] md:w-64 md:h-[60%] lg:w-72 lg:h-[70%] mb-4 overflow-hidden shadow-lg border-2 border-gray-300 rounded-lg hover:shadow-xl transition-shadow duration-300">
  <img
    src="/static/Assets/ownerpic/pic1.jpg"
    alt="Rufus"
    className="w-full h-full object-cover object-center"
  />
  {/* Optional Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>


          {/* Name */}
          <h2 className="text-2xl md:text-3xl font-bold text-center">Rufus Tenola Vinoth</h2>
          {/* Position */}
          <p className="text-lg text-gray-500 text-center">Founder &#38; President</p>
        </div>
      </div>

      {/* Scrollable Content Section */}
      <div id="scrollable" className="w-full lg:w-2/3 flex flex-col items-center justify-center text-lg my-8 md:my-5">
        <div className="max-w-4xl space-y-6 px-5">
          {/* Paragraph 1 */}
          <motion.div
            className="scroll-div"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              As the founder of Destined Estates (OPC) Private Limited, Rufus is a dominant force within
              the Chennai Luxury real estate community. Having done his college education in
              Switzerland and following it up with an employment in a multi&#8211;million&#8211;dollar golf club in
              New York, United States of America, Rufus has built his expertise in business from a
              western point of view working alongside Americans and people from all around the world,
              quickly mastering the art of buying, selling, and investing real estate.
            </p>
          </motion.div>

          {/* Paragraph 2 */}
          <motion.div
            className="scroll-div"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Recognized as one of the most dynamic, high-performing agents in the luxury home real
              estate market, Rufus Tenola Vinoth has over 12+ years of experience in the elite real estate
              sector. Having sold properties worth millions of rupees over a career spanning more than
              a decade puts him in a league of his own.
            </p>
          </motion.div>

          {/* Paragraph 3 */}
          <motion.div
            className="scroll-div"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Rufus specializes in selling and marketing some of the finest and most iconic residential
              properties to his connections and network of high&#8211;net&#8211;worth individuals. His
              uncompromising professionalism and tenacious drive have yielded his unheard&#8211;of rapid
              rise in the luxury real estate industry.
            </p>
          </motion.div>

          {/* Paragraph 4 */}
          <motion.div
            className="scroll-div"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Rufus has implemented top-notch professionalism in the luxury real estate field to develop
              his own team of seasoned professionals. In 2023, Rufus expanded his more than a
              decade+ years of experience into an elite real estate firm named Destined Estates (OPC)
              Private Limited. Today Destined Estates exists to serve elite clientele from all around
              the world, catering to their luxury property needs and wants. Rufus&#39;s passion for teaching
              others how to achieve success is realized through his team of highly coveted agents.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
