import { motion } from 'framer-motion'
import { Users, FileText, Award, Building } from 'lucide-react'

const stats = [
    {
        icon: Users,
        value: '100K+',
        label: 'Constituents Served',
        color: 'bg-blue-500'
    },
    {
        icon: FileText,
        value: '50+',
        label: 'Bills Sponsored',
        color: 'bg-emerald-500'
    },
    {
        icon: Award,
        value: '95%',
        label: 'Parliament Attendance',
        color: 'bg-purple-500'
    },
    {
        icon: Building,
        value: '20+',
        label: 'Development Projects',
        color: 'bg-orange-500'
    }
]

const StatsSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className={`w-16 h-16 mx-auto rounded-full ${stat.color} flex items-center justify-center text-white mb-4`}>
                                <stat.icon size={32} />
                            </div>
                            <div className="text-3xl font-bold text-gray-800 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatsSection