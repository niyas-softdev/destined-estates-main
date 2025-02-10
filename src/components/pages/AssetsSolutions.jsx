import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const sections = [
  {
    id: "assets-solutions",
    title: "Let us get you the Destined service that you desire.",
    content: `Our full suite of real estate services will transform your buying & selling experience. We leverage our deep knowledge of property sites and processes, with advanced sales strategies, and streamlined workflows to provide a predictable and comprehensive experience, every time you work with us.`,
    images: [
      "/static/Assets&solution/img1.jpg",
      "/static/Assets&solution/img2.jpg",
      "/static/Assets&solution/img3.jpg",
    ],
  },
  {
    id: "buying-selling",
    title: "Buying and Selling of Assets",
    content: `We know your assets and the procedures better than anyone. Our client-oriented teams provide you with best-in-class service. We provide full site analysis and inspection, collaboration with application of various marketing strategies, and successful selling of the asset at market value, while assuring the buyer of the best return on investment.`,
    images: [
      "/static/Assets&solution/sellsAssets1.jpg",
      "/static/Assets&solution/sellsAssets2.jpg",
      "/static/Assets&solution/sellsAssets3.jpg",
    ],
  },
  {
    id: "navigating-challenges",
    title: "Navigating Complex Challenges and Increasing Sales Bandwidth",
    content: `It takes dedicated resources and specialized knowledge to accomplish a successful sale. Our team works tirelessly to integrate complex coordination along with navigating regulatory processes and obtaining precise market values for smooth property sales. Managing sale timelines, coordinating with investors, sellers, and landlords, and ensuring adherence to negotiation strategies requires a high level of oversight and resources.`,
    images: [
      "/static/Assets&solution/img4.jpg",
      "/static/Assets&solution/img5.jpg",
      "/static/Assets&solution/img6.jpg",
    ],
  },
];

const AssetSolutions = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Asset Solutions <span className="text-blue-600">Tailored</span> to Your Needs
        </h1>
        <p className="text-lg text-gray-500 mt-6 max-w-3xl mx-auto leading-relaxed">
          At Destined Estates, we combine industry expertise with innovative strategies to help you navigate the complexities of real estate transactions, offering results-driven solutions for buying and selling your assets.
        </p>
      </div>

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <Element name={section.id} key={section.id} className="mb-24">
          <motion.div
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-16`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Text Content */}
            <div className="lg:w-2/5 text-center lg:text-left">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">
                {section.title}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>

            {/* Image Carousel */}
            <ImageCarousel images={section.images} />
          </motion.div>
        </Element>
      ))}
    </div>
  );
};

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="w-full lg:w-3/5 h-[300px] sm:h-[400px] lg:h-[500px] relative overflow-hidden">
      {/* Previous Image */}
      {prevImageIndex !== null && (
        <motion.img
          key={images[prevImageIndex]}
          src={images[prevImageIndex]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}
      {/* Current Image */}
      <motion.img
        key={images[currentImageIndex]}
        src={images[currentImageIndex]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AssetSolutions;