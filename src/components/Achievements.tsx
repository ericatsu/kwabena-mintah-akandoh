import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Healthcare Initiatives",
      items: [
        "Led major healthcare reforms in Juaboso",
        "Implemented community health programs",
        "Advocated for improved medical facilities"
      ]
    },
    {
      title: "Constituency Development",
      items: [
        "Infrastructure development projects",
        "Educational support programs",
        "Community engagement initiatives"
      ]
    }
  ];

  return (
    <section id="achievements" className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800">Key Achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
