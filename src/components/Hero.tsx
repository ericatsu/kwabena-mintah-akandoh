import { motion } from 'framer-motion';
import { ArrowRight, Award, Building, Users } from 'lucide-react';


const Hero = () => {
  const stats = [
    {
      icon: <Building className="w-6 h-6" />,
      label: 'Years in Parliament',
      value: '12+'
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: 'Bills Sponsored',
      value: '45+'
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: 'Constituents Served',
      value: '120K+'
    }
  ];

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-yellow-100/30 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <img
                  src="/kma.jpg"
                  alt="Hon. Kwabena Mintah Akandoh"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 z-20"
              >
                <p className="font-semibold text-emerald-800">Juaboso Constituency</p>
                <p className="text-sm text-gray-600">Western North Region</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="space-y-8">
              {/* Title and Subtitle */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                    Hon. Kwabena Mintah Akandoh
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex flex-col space-y-2">
                    <h2 className="text-2xl text-emerald-700 font-semibold">
                      Member of Parliament
                    </h2>
                    <h3 className="text-xl text-emerald-600">
                      Minister for Health
                    </h3>
                  </div>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                A dedicated public servant with an unwavering commitment to improving healthcare
                and fostering development in the Juaboso Constituency. Through strategic
                leadership and community-focused initiatives, working tirelessly to create
                lasting positive change in Ghana's healthcare system and beyond.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-3 gap-6 pt-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 mb-3">
                      {stat.icon}
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pt-4"
              >
                <a
                  href="#initiatives"
                  className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 
                    text-white rounded-lg font-medium transition-colors group"
                >
                  View Initiatives
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
