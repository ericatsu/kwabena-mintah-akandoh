import { motion } from 'framer-motion'
import { FileText, MessageCircle, Users, Activity } from 'lucide-react'

const Parliament = () => {
    const activities = [
        {
            title: 'Bills Sponsored',
            count: 15,
            icon: FileText,
            items: ['Healthcare Reform Act', 'Education Investment Bill']
        },
        {
            title: 'Committee Roles',
            count: 3,
            icon: Users,
            items: ['Health Committee', 'Finance Committee']
        },
        {
            title: 'Parliamentary Debates',
            count: 45,
            icon: MessageCircle,
            items: ['Healthcare Policy', 'Infrastructure Development']
        }
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-900 text-white py-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Parliamentary Activities
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-3xl"
                    >
                        Track record of legislative achievements and parliamentary contributions
                    </motion.p>
                </div>
            </motion.section>

            {/* Activities Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {activities.map((activity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg p-6"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                                        <activity.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">{activity.title}</h3>
                                        <p className="text-3xl font-bold text-emerald-600">{activity.count}</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {activity.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-center gap-2 text-gray-600">
                                            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center text-gray-800 mb-12"
                    >
                        Parliamentary Performance
                    </motion.h2>
                    {/* Add performance charts and metrics here */}
                </div>
            </section>
        </div>
    )
}

export default Parliament