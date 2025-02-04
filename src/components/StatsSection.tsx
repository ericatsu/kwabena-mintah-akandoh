import { motion } from 'framer-motion'
import { Users, FileText, Award, Building } from 'lucide-react'

const stats = [
    {
        icon: Users,
        value: '100K+',
        label: 'Constituents Served',
        description: 'Direct impact on community members',
        color: 'from-blue-500 to-blue-600'
    },
    {
        icon: FileText,
        value: '50+',
        label: 'Bills Sponsored',
        description: 'Legislative initiatives proposed',
        color: 'from-emerald-500 to-emerald-600'
    },
    {
        icon: Award,
        value: '95%',
        label: 'Parliament Attendance',
        description: 'Commitment to representation',
        color: 'from-purple-500 to-purple-600'
    },
    {
        icon: Building,
        value: '20+',
        label: 'Development Projects',
        description: 'Community improvement initiatives',
        color: 'from-orange-500 to-orange-600'
    }
];

const StatsSection = () => {
    return (
    <section className="py-24 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-emerald-50/30" />
        <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
                    Impact Metrics
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Making a Difference</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Quantifiable results that demonstrate our commitment to progress and development
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl transform rotate-1 group-hover:rotate-0 transition-transform" />
                        <div className="relative bg-white rounded-2xl shadow-lg p-8 transform -rotate-1 group-hover:rotate-0 transition-transform">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform`}>
                                <stat.icon size={32} />
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-lg font-semibold text-gray-800">
                                    {stat.label}
                                </div>
                                <div className="text-sm text-gray-600">
                                    {stat.description}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
};


export default StatsSection