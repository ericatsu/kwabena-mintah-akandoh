import { motion } from 'framer-motion'
import { MapPin, Home, Building2, Users } from 'lucide-react'

const Constituency = () => {
    const districts = [
        { name: 'Juaboso Central', population: '45,000', projects: 12 },
        { name: 'Bonsu Nkwanta', population: '35,000', projects: 8 },
        { name: 'Benchema', population: '30,000', projects: 10 }
    ]

    const developments = [
        {
            title: 'Healthcare Facilities',
            completed: 8,
            ongoing: 3,
            icon: Building2
        },
        {
            title: 'Educational Institutions',
            completed: 12,
            ongoing: 5,
            icon: Home
        },
        {
            title: 'Community Centers',
            completed: 6,
            ongoing: 4,
            icon: Users
        }
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-emerald-800 text-white py-20"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-transparent" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Juaboso Constituency
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-emerald-100 max-w-3xl"
                    >
                        A vibrant community in the Western North Region of Ghana
                    </motion.p>
                </div>
            </motion.section>

            {/* Districts Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center text-gray-800 mb-12"
                    >
                        Districts Overview
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {districts.map((district, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                            >
                                <MapPin className="w-8 h-8 text-emerald-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {district.name}
                                </h3>
                                <div className="space-y-2 text-gray-600">
                                    <p>Population: {district.population}</p>
                                    <p>Ongoing Projects: {district.projects}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Projects */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center text-gray-800 mb-12"
                    >
                        Development Projects
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {developments.map((dev, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg p-6"
                            >
                                <dev.icon className="w-8 h-8 text-emerald-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    {dev.title}
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Completed</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(dev.completed / (dev.completed + dev.ongoing)) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1 }}
                                                className="h-full rounded-full bg-emerald-500"
                                            />
                                        </div>
                                        <p className="text-right text-sm text-gray-600 mt-1">
                                            {dev.completed} projects
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Ongoing</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(dev.ongoing / (dev.completed + dev.ongoing)) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1 }}
                                                className="h-full rounded-full bg-emerald-300"
                                            />
                                        </div>
                                        <p className="text-right text-sm text-gray-600 mt-1">
                                            {dev.ongoing} projects
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Constituency