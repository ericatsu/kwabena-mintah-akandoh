import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Career = () => {
  const milestones = [
    {
      year: "2021",
      title: "Minister-designate for Health",
      description: "Nominated to serve as Minister for Health in Ghana's government."
    },
    {
      year: "2013-Present",
      title: "Member of Parliament",
      description: "Serving the Juaboso Constituency, focusing on healthcare and community development."
    },
    // Add more actual career milestones
  ];

  return (
    <section id="career" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Political Career
        </motion.h2>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row gap-4 items-start"
            >
              <div className="flex items-center gap-2 md:w-1/4">
                <Calendar className="text-green-600" />
                <span className="font-semibold text-green-700">{milestone.year}</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
