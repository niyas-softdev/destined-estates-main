import { motion } from "framer-motion";


export default function Career() {
 
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Career At Destined Estates
        </motion.h1>

        <motion.p
          className="text-purple-950 text-lg md:text-xl lg:text-2xl text-center font-playfair font-semibold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          

            It starts with our seasoned professionals

        </motion.p>

        {/* Interactive Image */}
        <div className="flex justify-center mb-12">
          <motion.img
            src="/static/Assets/home5.jpg" // Replace with a relevant image URL
            alt="Real Estate"
            className="w-full md:w-3/4 lg:w-3/5  h-auto object-cover rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>


        <div className="px-4 lg:px-24">
          <motion.li
            className="my-5 md:text-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Destined Estates is the home to the dreamers, the doers, and the entrepreneurs. For those
            dreamers who know Luxury real estate is a calling and if you can dream it, you can build it.
          </motion.li>
          <motion.li
            className="my-5 md:text-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Our work culture is based on integrity, decency, decorum, accountability, hard work, top
            notch professionalism, and collaboration. You can rely on your coworkers, as they will rely
            on you.
          </motion.li>
          <motion.li
            className="my-5 md:text-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Our reputation is the bedrock of our business, and we have developed it not just through
            the quality of our property inventory, but through the integrity of our professional team. Our
            vision is possible because of our top talent and people- first culture.
          </motion.li>
          <motion.li
            className="my-5 md:text-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Working for Destined Estates means having the opportunity to learn and develop with
            collaborative professionals. We believe in sharing knowledge and insights, allowing
            individuals to work across challenging deals, functions, projects and roles.
          </motion.li>
          <motion.li
            className="my-5 md:text-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            We at Destined Estates take carrier development seriously, strive to provide you with a
            wide range of Oppurtunites, and encourage expansion of capabilities and exploration of a
            variety of carrier paths. This allows you the possibility of professional carrier growth, and a
            high level of ownership over your work, and the satisfaction of being able to make a
            difference.
          </motion.li>
        </div>



      </div>
    </div>
  );
}
