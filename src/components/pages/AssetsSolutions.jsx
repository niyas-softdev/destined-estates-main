import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const sections = [
  {
    id: "assets-solutions",
    title: "Let us get you the Destined service that you desire.",
    content: `Our full suite of real estate services will transform your buying & selling experience. We Leverage our deep knowledge of the property sites and processes, with advanced sales strategies, and streamlined workflows to provide a predictable and comprehensive experience, every time you work with us.`,
    images: [
      "/static/Assets&solution/img1.jpg",
      "/static/Assets&solution/img2.jpg",
      "/static/Assets&solution/img3.jpg"
    ]
  },
  {
    id: "buying-selling",
    title: "Buying and selling of Assests",
    content: `We know your assets and the procedures better than anyone. Our client-oriented teams
provide you with best-in-class service. We provide full site analysis and inspection,
collocation with application of various marketing strategies in successfully selling the
asset as per market value, in the same time assuring the buyer for the best return on
Invesment.`,
    images: [
      "/static/Assets&solution/sellsAssets1.jpg",
      "/static/Assets&solution/sellsAssets2.jpg",
      "/static/Assets&solution/sellsAssets3.jpg"
    ]
  },
  {
    id: "navigating-challenges",
    title: "Navigating Complex challenges and increasing sales bandwidth",
    content: `It takes dedicated resources and specialized knowledge to accomplish a successful sale.
To which our team works tirelessly integrating complex coordination along with navigating
regulatory processes and obtaining precise market value for each and every property for a
smooth transition of sale. Even with resources in place, managing sale timelines,
coordinating with investors, sellers, landlords, and monitoring quality control of services
offered and adherence to ensuring masterful negotiation strategies requires a high level of
oversight and takes resources from our core business.`,
    images: [
      "/static/Assets&solution/img4.jpg",
      "/static/Assets&solution/img5.jpg",
      "/static/Assets&solution/img6.jpg"
    ]
  }
];

const clipPathVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 0)" // Fully closed
  },
  animate: {
    clipPath: "polygon(200% 0, 0 0, 0 200%)", // Fully open, revealing the entire image
    transition: {
      duration: 1.5, // Adjust the duration to control the speed of the transition
      ease: "easeInOut" // Smooth easing
    }
  }
};

const AssetSolutions = () => {
  return (
    <div className="container mx-auto px-6 py-20 font-tiempos">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Asset Solutions <span className="text-blue-600">Tailored</span> to
          Your Needs
        </h1>
        <p className="text-lg text-gray-500 mt-6 max-w-3xl mx-auto leading-relaxed tracking-wide">
          At Destined Estates, we combine industry expertise with innovative
          strategies to help you navigate the complexities of real estate
          transactions, offering results-driven solutions for buying and selling
          your assets.
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
              <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">
                {section.title}
              </h2>
              <p className="text-base md:text-lg lg:text-xl font-light text-gray-600 leading-relaxed tracking-wider">
                {section.content}
              </p>
            </div>

            {/* Image with Animation and Carousel */}
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
      setPrevImageIndex(currentImageIndex); // Keep track of the previous image index
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentImageIndex, images.length]);

  return (
    <div className="lg:w-3/5 h-[500px] relative overflow-hidden">
      {/* Previous Image */}
      {prevImageIndex !== null && (
        <motion.img
          key={images[prevImageIndex]}
          src={images[prevImageIndex]}
          alt="Real estate"
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
        alt="Real estate"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 0)" }} // Fully hidden and clipped initially
        animate={{ opacity: 1, clipPath: "polygon(200% 0, 0 0, 0 200%)" }} // Fully visible with clipPath
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AssetSolutions;
