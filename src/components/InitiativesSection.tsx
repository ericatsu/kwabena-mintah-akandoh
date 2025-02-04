import { motion } from 'framer-motion'
import { BookOpen, Heart, School, Theater } from 'lucide-react'

const initiatives = [
    {
        icon: Heart,
        title: 'Healthcare Access',
        description: 'Expanding medical facilities and improving healthcare access across Juaboso constituency.',
        progress: 75
    },
    {
        icon: School,
        title: 'Education',
        description: 'Supporting schools and providing educational resources to students.',
        progress: 85
    },
    {
        icon: Theater,
        title: 'Infrastructure',
        description: 'Developing road networks and community facilities.',
        progress: 60
    },
    {
        icon: BookOpen,
        title: 'Youth Development',
        description: 'Creating opportunities for youth empowerment and skill development.',
        progress: 70
    }
]

const InitiativesSection = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Initiatives</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Driving positive change through focused initiatives in healthcare, education,
                        infrastructure, and community development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {initiatives.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                        >
                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.progress}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full rounded-full bg-emerald-500"
                                />
                            </div>
                            <p className="text-sm text-gray-500 mt-2">{item.progress}% completed</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default InitiativesSection