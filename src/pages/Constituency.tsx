import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    MapPin,
    Home,
    Building2,
    Users,
    Heart,
    Theater,
    School,
    Leaf,
    Search
} from 'lucide-react'

const Constituency = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchTerm, setSearchTerm] = useState('')

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

    const categories = ['All', 'Healthcare', 'Education', 'Infrastructure', 'Youth', 'Environment']

    const initiatives = [
        {
            title: 'Community Health Centers',
            category: 'Healthcare',
            description: 'Building and equipping health centers across the constituency',
            progress: 75,
            icon: Heart,
            status: 'Ongoing'
        },
        {
            title: 'School Renovation Program',
            category: 'Education',
            description: 'Renovating and modernizing existing school buildings',
            progress: 85,
            icon: School,
            status: 'Ongoing'
        },
        {
            title: 'Road Network Expansion',
            category: 'Infrastructure',
            description: 'Improving accessibility through road construction',
            progress: 60,
            icon: Theater,
            status: 'Ongoing'
        },
        {
            title: 'Youth Skills Program',
            category: 'Youth',
            description: 'Training programs for youth employment',
            progress: 90,
            icon: Users,
            status: 'Completed'
        },
        {
            title: 'Green Initiative',
            category: 'Environment',
            description: 'Environmental conservation and sustainability projects',
            progress: 40,
            icon: Leaf,
            status: 'New'
        }
    ]

    const filteredInitiatives = initiatives.filter(initiative => {
        const matchesCategory = selectedCategory === 'All' || initiative.category === selectedCategory
        const matchesSearch = initiative.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            initiative.description.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

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

            {/* Initiatives Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center text-gray-800 mb-12"
                    >
                        Our Initiatives
                    </motion.h2>

                    {/* Filters and Search */}
                    <div className="mb-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                                            ${selectedCategory === category
                                                ? 'bg-emerald-600 text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search initiatives..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Initiatives Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredInitiatives.map((initiative, index) => (
                                <motion.div
                                    key={initiative.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                                            <initiative.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">
                                                {initiative.title}
                                            </h3>
                                            <span className={`text-sm px-2 py-1 rounded-full ${initiative.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                    initiative.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {initiative.status}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">{initiative.description}</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Progress</span>
                                            <span>{initiative.progress}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${initiative.progress}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1 }}
                                                className="h-full rounded-full bg-emerald-500"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Constituency