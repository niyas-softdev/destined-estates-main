import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const leadershipTimeline = [
  {
    title: "Early Life & Education",
    year: "2000s",
    description:
      "Rufus completed his college education in Switzerland before gaining business experience in the U.S., working alongside elite professionals in luxury real estate.",
    img: "/static/Assets/ownerpic/pic1.jpg",
  },
  {
    title: "Career in Real Estate",
    year: "2010s",
    description:
      "Recognized as a dynamic and high-performing agent, Rufus built his expertise and network among high-net-worth individuals in the global real estate market.",
    img: "/static/Assets/ownerpic/pic2.jpg",
  },
  {
    title: "Destined Estates Established",
    year: "2023",
    description:
      "With over 12+ years of experience, Rufus founded Destined Estates (OPC) Private Limited, an elite real estate firm catering to luxury property clients worldwide.",
    img: "/static/Assets/ownerpic/pic1.jpg",
  },
  {
    title: "Present & Future",
    year: "2024",
    description:
      "Rufus continues to lead a team of seasoned professionals, offering exclusive luxury real estate solutions to elite clients globally.",
    img: "/static/Assets/ownerpic/pic3.jpg",
  },
];

const Leadership = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".timeline-item");
      const windowTop = window.scrollY + window.innerHeight / 2;

      items.forEach((item, index) => {
        const offsetTop = item.offsetTop;
        const offsetBottom = offsetTop + item.clientHeight;

        if (windowTop >= offsetTop && windowTop <= offsetBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${leadershipTimeline[activeIndex]?.img})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 py-16">
        <h2 className="text-5xl font-bold text-center text-white mb-12">
          Leadership Journey
        </h2>

        {/* Timeline Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Profile Section */}
          <motion.div
            id="profile"
            className="lg:w-1/3 sticky top-24 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-xl border-4 border-gray-200">
              <Image
                src="/static/Assets/ownerpic/pic1.jpg"
                alt="Rufus Tenola Vinoth"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-white mt-4">
              Rufus Tenola Vinoth
            </h2>
            <p className="text-lg text-gray-300">Founder & President</p>
          </motion.div>

          {/* Timeline Section */}
          <div className="w-full lg:w-2/3">
            <div className="relative border-l-4 border-gray-700 pl-6">
              {leadershipTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item relative py-10 transition-all duration-500 $ {
                    activeIndex === index ? "opacity-100 scale-105" : "opacity-50 scale-95"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div className="absolute -left-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#ff8200] text-white text-lg font-bold shadow-lg">
                    {item.year}
                  </motion.div>
                  <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Sections */}
      <section className="w-full bg-gray-800 py-16 z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Our Vision</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We aim to redefine luxury real estate by offering unparalleled service and elite property experiences.
        </p>
      </section>

      <section className="w-full bg-gray-900 py-16 z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          With over a decade of experience, we've facilitated luxury real estate transactions worldwide.
        </p>
      </section>

      <section className="w-full bg-gray-800 py-16 z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Join Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-2xl font-bold text-white">Full-time Designer</h3>
            <p className="text-gray-300 mt-2">Design innovative user experiences for our global clientele.</p>
            <p className="text-gray-400 mt-4">Salary: $75,000 USD</p>
            <p className="text-gray-400">Location: Remote</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-2xl font-bold text-white">Laravel Developer</h3>
            <p className="text-gray-300 mt-2">Develop scalable backend systems using modern tools and techniques.</p>
            <p className="text-gray-400 mt-4">Salary: $125,000 USD</p>
            <p className="text-gray-400">Location: San Francisco, CA</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-2xl font-bold text-white">React Native Developer</h3>
            <p className="text-gray-300 mt-2">Create mobile-first experiences for a luxury-focused audience.</p>
            <p className="text-gray-400 mt-4">Salary: $105,000 USD</p>
            <p className="text-gray-400">Location: New York, NY</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-900 py-16 z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-300">"An exceptional experience with a truly professional team. They exceeded all expectations!"</p>
            <p className="text-gray-400 mt-4">- Client A</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-300">"The most seamless real estate transaction I've ever experienced. Highly recommend!"</p>
            <p className="text-gray-400 mt-4">- Client B</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;