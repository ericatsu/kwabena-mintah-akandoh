import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Heart,
    BookOpen,
    Theater,
    School,
    Users,
    Building,
    Leaf,
    Search
} from 'lucide-react'

const Initiatives = () => {
    const categories = ['All', 'Healthcare', 'Education', 'Infrastructure', 'Youth', 'Environment']
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchTerm, setSearchTerm] = useState('')

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
                className="bg-emerald-800 text-white py-20"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Our Initiatives
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-emerald-100 max-w-3xl"
                    >
                        Transforming lives through sustainable development projects
                    </motion.p>
                </div>
            </motion.section>

            {/* Filters and Search */}
            <section className="py-8 bg-white shadow-sm sticky top-16 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            </section>

            {/* Initiatives Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

export default Initiatives