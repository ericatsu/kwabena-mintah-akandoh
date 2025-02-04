import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Heart, School, Theater } from 'lucide-react'

const InitiativesSection = () => {
    const initiatives = [
        {
            icon: Heart,
            title: 'Healthcare Access',
            description: 'Expanding medical facilities and improving healthcare access across Juaboso constituency.',
            progress: 75,
            color: 'from-red-500 to-red-600',
            metrics: ['12 New Clinics', '5000+ Patients Served', '24/7 Emergency Care']
        },
        {
            icon: School,
            title: 'Education',
            description: 'Supporting schools and providing educational resources to students.',
            progress: 85,
            color: 'from-blue-500 to-blue-600',
            metrics: ['20 Schools Supported', '1000+ Scholarships', '95% Completion Rate']
        },
        {
            icon: Theater,
            title: 'Infrastructure',
            description: 'Developing road networks and community facilities.',
            progress: 60,
            color: 'from-emerald-500 to-emerald-600',
            metrics: ['15km Roads Built', '8 Community Centers', '4 Markets Renovated']
        },
        {
            icon: BookOpen,
            title: 'Youth Development',
            description: 'Creating opportunities for youth empowerment and skill development.',
            progress: 70,
            color: 'from-purple-500 to-purple-600',
            metrics: ['500+ Trained Youth', '10 Training Centers', '80% Employment Rate']
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
                        Ongoing Projects
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Initiatives</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Transformative projects driving sustainable development and community growth
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {initiatives.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                                {/* Background gradient */}
                                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${item.color} opacity-5 rounded-full transform translate-x-20 -translate-y-20`} />

                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                            <item.icon size={28} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>

                                {/* Progress section */}
                                <div className="mb-6">
                                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                                        <span>Progress</span>
                                        <span className="font-medium">{item.progress}%</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.progress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                                        />
                                    </div>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {item.metrics.map((metric, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="text-sm font-medium text-gray-900">{metric}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Action button */}
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="flex items-center text-emerald-600 font-medium group"
                                >
                                    Learn more
                                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InitiativesSection