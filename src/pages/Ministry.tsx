import { AnimatePresence, motion } from 'framer-motion'
import {
    Heart,
    Trophy,
    Users,
    ChartBar,
    Calendar,
    MapPin,
    ArrowRight,
    Clock,
    Newspaper,
    Hospital,
    Baby,
    Brain,
    Stethoscope,
    HeartPulse,
    Pill,
    Search,
} from 'lucide-react'
import { useState } from 'react';

interface HealthInitiative {
    title: string;
    description: string;
    status: 'Completed' | 'Ongoing' | 'Planned';
    progress: number;
    category: string;
    icon: React.ElementType;
}

const Ministry = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    
    const missions = [
        {
            title: "Healthcare Access",
            description: "Expanded healthcare access to rural communities through mobile clinics",
            icon: Heart,
            stat: "500K+",
            subtext: "Citizens reached"
        },
        {
            title: "Medical Infrastructure",
            description: "New hospitals and health centers built across Ghana",
            icon: ChartBar,
            stat: "35+",
            subtext: "Facilities built"
        },
        {
            title: "Healthcare Workers",
            description: "Increased medical staff and healthcare professionals",
            icon: Users,
            stat: "10K+",
            subtext: "New positions"
        },
        {
            title: "Medical Programs",
            description: "Launched preventive healthcare initiatives",
            icon: Trophy,
            stat: "25+",
            subtext: "Programs launched"
        }
    ]

    const news = [
        {
            title: "Launch of National Healthcare Digitization Program",
            date: "February 10, 2025",
            category: "Healthcare Technology",
            link: "/blog/{slug}"
        },
        {
            title: "New Medical Training Centers Opened in Greater Accra",
            date: "February 8, 2025",
            category: "Education",
            link: "/blog/{slug}"
        },
        {
            title: "Successful Completion of Nationwide Vaccination Campaign",
            date: "February 5, 2025",
            category: "Public Health",
            link: "/blog/{slug}"
        }
    ]

    const upcomingEvents = [
        {
            title: "National Health Policy Summit",
            date: "March 15, 2025",
            location: "Accra International Conference Centre"
        },
        {
            title: "Rural Healthcare Initiative Launch",
            date: "March 20, 2025",
            location: "Kumasi"
        },
        {
            title: "Healthcare Workers Recognition Ceremony",
            date: "April 5, 2025",
            location: "National Theatre, Accra"
        }
    ]

    const categories = ['All', 'Primary Care', 'Maternal Health', 'Vaccination', 'Mental Health', 'Infrastructure'];

    const healthInitiatives: HealthInitiative[] = [
        {
            title: 'Mobile Health Clinics',
            description: 'Deploying mobile clinics to provide healthcare services in rural communities across Ghana.',
            status: 'Ongoing',
            progress: 75,
            category: 'Primary Care',
            icon: HeartPulse
        },
        {
            title: 'Maternal Care Program',
            description: 'Comprehensive prenatal and postnatal care services for expecting mothers.',
            status: 'Ongoing',
            progress: 80,
            category: 'Maternal Health',
            icon: Baby
        },
        {
            title: 'National Vaccination Drive',
            description: 'Nationwide immunization program targeting preventable diseases in children under 5.',
            status: 'Completed',
            progress: 100,
            category: 'Vaccination',
            icon: Hospital
        },
        {
            title: 'Mental Health Awareness',
            description: 'Expanding mental health services and reducing stigma through education and support programs.',
            status: 'Ongoing',
            progress: 60,
            category: 'Mental Health',
            icon: Brain
        },
        {
            title: 'Regional Hospital Upgrades',
            description: 'Modernizing medical equipment and facilities in regional hospitals.',
            status: 'Planned',
            progress: 30,
            category: 'Infrastructure',
            icon: Hospital
        },
        {
            title: 'Community Health Workers',
            description: 'Training and deploying community health workers to improve local healthcare access.',
            status: 'Ongoing',
            progress: 85,
            category: 'Primary Care',
            icon: Stethoscope
        },
        {
            title: 'Essential Medicines Program',
            description: 'Ensuring consistent supply of essential medicines to all healthcare facilities.',
            status: 'Ongoing',
            progress: 70,
            category: 'Infrastructure',
            icon: Pill
        },
        {
            title: 'Heart Disease Prevention',
            description: 'Comprehensive program for early detection and prevention of cardiovascular diseases.',
            status: 'Planned',
            progress: 25,
            category: 'Primary Care',
            icon: Heart
        }
    ];

    const filteredInitiatives = healthInitiatives.filter(initiative => {
        const matchesCategory = selectedCategory === 'All' || initiative.category === selectedCategory;
        const matchesSearch = initiative.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            initiative.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
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
                        The Health Ministry
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-emerald-100 max-w-3xl"
                    >
                        Committed to improving healthcare access and quality for all Ghanaians
                    </motion.p>
                </div>
            </motion.section>

            {/* mission Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">My Mission</h2>
                        <p className="text-xl text-gray-600">Transforming Ghana's healthcare system through strategic initiatives</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {missions.map((mission, index) => (
                            <motion.div
                                key={mission.title}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                            >
                                <mission.icon className="w-12 h-12 text-emerald-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{mission.title}</h3>
                                <p className="text-gray-600 mb-4">{mission.description}</p>
                                <div className="border-t pt-4">
                                    <p className="text-3xl font-bold text-emerald-600 mb-1">{mission.stat}</p>
                                    <p className="text-sm text-gray-500">{mission.subtext}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add health Initivities Section here */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center text-gray-800 mb-12"
                    >
                        Health Initiatives
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
                                    placeholder="Search health initiatives..."
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
            
            {/* News and Events Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Latest News */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                <Newspaper className="w-6 h-6 mr-2" />
                                Latest News
                            </h2>
                            <div className="space-y-6">
                                {news.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start space-x-4 border-b pb-6"
                                    >
                                        <div className="flex-1">
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {item.date}
                                                <span className="mx-2">•</span>
                                                {item.category}
                                            </div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-emerald-600" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Upcoming Events */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                <Clock className="w-6 h-6 mr-2" />
                                Upcoming Events
                            </h2>
                            <div className="space-y-6">
                                {upcomingEvents.map((event, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-gray-50 rounded-lg p-6"
                                    >
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">{event.title}</h3>
                                        <div className="flex items-center text-sm text-gray-500 mb-2">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            {event.location}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ministry