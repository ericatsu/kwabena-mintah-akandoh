import { motion } from 'framer-motion';
import { ArrowRight, Award, CheckCircle, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Health Ministry",
      description: "Leading transformative healthcare programs and reforms",
      items: [
        "Led major healthcare reforms in Juaboso",
        "Implemented community health programs",
        "Advocated for improved medical facilities"
      ],
      icon: Award,
      color: "emerald"
    },
    {
      title: "Parliamentary Oversight",
      description: "Driving policy and regulation for sustainable development",
      items: [
        "Led major land reform initiatives",
        "Implemented sustainable resource management",
        "Advocated for environmental protection"
      ],
      icon: Award,
      color: "emerald"
    },
    {
      title: "Constituency Development",
      description: "Driving sustainable community growth and improvement",
      items: [
        "Infrastructure development projects",
        "Educational support programs",
        "Community engagement initiatives"
      ],
      icon: TrendingUp,
      color: "blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Impact & Results
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Achievements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering meaningful results and positive change through dedicated leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-emerald-50/30 rounded-2xl transform -rotate-1 transition-transform group-hover:rotate-0" />
              <div className="relative bg-white rounded-xl shadow-lg p-8 transform transition-transform group-hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <category.icon className="w-10 h-10 text-emerald-600 mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + itemIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-6 flex items-center text-emerald-600 font-medium"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
