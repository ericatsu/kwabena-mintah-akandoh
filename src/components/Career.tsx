import { motion } from 'framer-motion';
import { Calendar, Briefcase, TrendingUp } from 'lucide-react';


const Career = () => {
  const milestones = [
    {
      year: "2025-Present",
      title: "Minister for Health",
      description: "Nominated to serve as Minister for Health in Ghana's government, leading national healthcare policy and implementation.",
      icon: Briefcase
    },
    {
      year: "2013-Present",
      title: "Member of Parliament",
      description: "Serving the Juaboso Constituency with a focus on healthcare reform, infrastructure development, and community empowerment initiatives.",
      icon: TrendingUp
    },
    {
      year: "2013-Present",
      title: "Member of Parliament",
      description: "Serving the Juaboso Constituency with a focus on healthcare reform, infrastructure development, and community empowerment initiatives.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-14 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 w-72 h-72 bg-emerald-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute right-0 bottom-1/3 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Journey of Service
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Political Career</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A timeline of dedicated public service and leadership in Ghana's political landscape
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-emerald-200 transform -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center gap-8`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-emerald-100 border-4 border-emerald-500 rounded-full transform -translate-x-1/2" />

                  {/* Content */}
                  <div className={`md:w-1/2 ${isEven ? 'md:text-right' : ''}`}>
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <Calendar className="w-5 h-5 text-emerald-600" />
                      <span className="font-semibold text-emerald-700">{milestone.year}</span>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-transform duration-300">
                      <milestone.icon className="w-8 h-8 text-emerald-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
