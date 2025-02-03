import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <img
              src="https://example.com/placeholder-image.jpg" // Replace with actual image
              alt="Hon. Kwabena Mintah Akandoh"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hon. Kwabena Mintah Akandoh
            </h1>
            <h2 className="text-xl md:text-2xl text-green-700 mb-6">
              Member of Parliament - Juaboso Constituency
              <br />
              Minister-designate for Health
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Dedicated public servant committed to improving healthcare and 
              developing the Juaboso Constituency. With a strong focus on 
              community development and healthcare reform, working tirelessly 
              to create positive change in Ghana.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
