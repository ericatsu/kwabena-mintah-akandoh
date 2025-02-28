import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MapPin,
    Users,
    Heart,
    Theater,
    School,
    Leaf,
    Search,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

interface District {
    name: string;
    population: string;
    projects: number;
}

interface ProjectImage {
    url: string;
    caption: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    images: ProjectImage[];
}

interface Initiative {
    title: string;
    category: string;
    description: string;
    progress: number;
    icon: React.ElementType;
    status: 'Completed' | 'Ongoing' | 'New';
}

const Constituency = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const districts: District[] = [
        { name: 'Asempaneye', population: '45,000', projects: 12 },
        { name: 'Kofikrom-Proso', population: '35,000', projects: 8 },
        { name: 'Benchema-Nkatieso', population: '30,000', projects: 10 },
        { name: 'Boinzan', population: '20,000', projects: 10 }
    ];

    const constituencyProjects: Project[] = [
        {
            id: 1,
            title: 'Community Health Centers',
            description: 'Building modern health facilities to improve healthcare access',
            category: 'Healthcare',
            images: [
                { url: '/gallery/projects/1.jpg', caption: 'Main entrance of Asempaneye Health Center' },
                { url: '/gallery/projects/2.jpg', caption: 'Newly equipped medical laboratory' },
                { url: '/gallery/projects/3.jpg', caption: 'Patient consultation room' },
                { url: '/gallery/projects/4.jpg', caption: 'Staff quarters building' }
            ]
        },
        {
            id: 2,
            title: 'School Renovation Program',
            description: 'Modernizing school infrastructure across the constituency',
            category: 'Education',
            images: [
                { url: '/gallery/projects/5.jpg', caption: 'Renovated Kofikrom Primary School' },
                { url: '/gallery/projects/6.jpg', caption: 'New computer lab at Benchema School' },
                { url: '/gallery/projects/7.jpg', caption: 'Modern classroom facilities' },
                { url: '/gallery/projects/8.jpg', caption: 'School playground improvements' }
            ]
        },
        {
            id: 3,
            title: 'Road Network Expansion',
            description: 'Improving transportation infrastructure for better connectivity',
            category: 'Infrastructure',
            images: [
                { url: '/gallery/projects/9.jpg', caption: 'New asphalt road connecting Boinzan to Asempaneye' },
                { url: '/gallery/projects/10.jpg', caption: 'Bridge construction over River Tano' },
                { url: '/gallery/projects/11.jpg', caption: 'Road workers laying foundation' },
                { url: '/gallery/projects/12.jpg', caption: 'Completed stretch of highway with drainage' }
            ]
        },
        {
            id: 4,
            title: 'Youth Skills Program',
            description: 'Training initiatives for youth employment and entrepreneurship',
            category: 'Youth',
            images: [
                { url: '/gallery/projects/3.jpg', caption: 'ICT skills training session at Juaboso center' },
                { url: '/gallery/projects/6.jpg', caption: 'Youth agricultural program participants' },
                { url: '/gallery/projects/9.jpg', caption: 'Entrepreneurship workshop' },
                { url: '/gallery/projects/12.jpg', caption: 'Graduation ceremony for first cohort' }
            ]
        },
        {
            id: 5,
            title: 'Green Initiative',
            description: 'Environmental conservation and sustainable development projects',
            category: 'Environment',
            images: [
                { url: '/gallery/projects/1.jpg', caption: 'Tree planting activity at Kofikrom-Proso' },
                { url: '/gallery/projects/1.jpg', caption: 'Solar panel installation for community center' },
                { url: '/gallery/projects/1.jpg', caption: 'Waste management facility' },
                { url: '/gallery/projects/1.jpg', caption: 'Community cleanup campaign' }
            ]
        },
        {
            id: 6,
            title: 'Market Infrastructure',
            description: 'Improving trading facilities for local businesses',
            category: 'Infrastructure',
            images: [
                { url: '/gallery/projects/1.jpg', caption: 'New Juaboso Central Market structure' },
                { url: '/gallery/projects/1.jpg', caption: 'Market stalls under construction' },
                { url: '/gallery/projects/1.jpg', caption: 'Storage facilities for traders' },
                { url: '/gallery/projects/1.jpg', caption: 'Market day at the completed facility' }
            ]
        }
    ];

    const categories = ['All', 'Healthcare', 'Education', 'Infrastructure', 'Youth', 'Environment'];

    const initiatives: Initiative[] = [
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
    ];

    const filteredInitiatives = initiatives.filter(initiative => {
        const matchesCategory = selectedCategory === 'All' || initiative.category === selectedCategory;
        const matchesSearch = initiative.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            initiative.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const filteredProjects = constituencyProjects.filter(project => {
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const openProjectPreview = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeProjectPreview = () => {
        setSelectedProject(null);
    };

    const goToNextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const goToPrevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
            );
        }
    };

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
                        Constituency Overview
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                        Constituency Projects
                    </motion.h2>

                    {/* Filters */}
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
                                    placeholder="Search projects..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                                    onClick={() => openProjectPreview(project)}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={project.images[0].url}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform hover:scale-105"
                                        />
                                        <div className="absolute bottom-0 right-0 bg-emerald-600 text-white px-3 py-1 text-sm font-medium">
                                            {project.images.length} Photos
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            {project.title}
                                        </h3>
                                        <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full mb-3">
                                            {project.category}
                                        </span>
                                        <p className="text-gray-600">{project.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Image Preview Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
                        onClick={closeProjectPreview}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative max-w-2xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Main Image Container */}
                            <div className="relative h-64 md:h-96 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={`image-${currentImageIndex}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        src={selectedProject.images[currentImageIndex].url}
                                        alt={selectedProject.images[currentImageIndex].caption}
                                        className="w-full h-full object-cover"
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Image Information Bar */}
                            <div className="p-4 border-b border-gray-200 min-h-24">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`caption-${currentImageIndex}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {selectedProject.images[currentImageIndex].caption}
                                        </h3>
                                    </motion.div>
                                </AnimatePresence>
                                <div className="w-24 h-1 bg-gray-200 mt-3 mb-2 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-emerald-500"
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: `${((currentImageIndex + 1) / selectedProject.images.length) * 100}%`
                                        }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                </div>
                            </div>

                            {/* Navigation Area */}
                            <div className="flex items-center justify-between p-4">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        closeProjectPreview();
                                    }}
                                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors focus:outline-none"
                                >
                                    <ChevronLeft className="w-5 h-5 mr-1" />
                                    <span>Back</span>
                                </button>

                                {/* Navigation Buttons - Conditionally render only if there are multiple images */}
                                {selectedProject.images.length > 1 && (
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                goToPrevImage();
                                            }}
                                            className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
                                            aria-label="Previous image"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                                        </button>

                                        <motion.div
                                            key={`counter-${currentImageIndex}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-sm text-gray-500"
                                        >
                                            {currentImageIndex + 1} / {selectedProject.images.length}
                                        </motion.div>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                goToNextImage();
                                            }}
                                            className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
                                            aria-label="Next image"
                                        >
                                            <ChevronRight className="w-5 h-5 text-gray-700" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Thumbnail Navigation */}
                            {selectedProject.images.length > 1 && (
                                <div className="p-4 bg-gray-50 hidden md:block">
                                    <div className="flex items-center justify-center gap-2 overflow-x-auto">
                                        {selectedProject.images.map((image, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`relative w-16 h-16 cursor-pointer transition-all duration-200 ${idx === currentImageIndex
                                                        ? 'ring-2 ring-emerald-500 opacity-100'
                                                        : 'opacity-70 hover:opacity-100'
                                                    }`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(idx);
                                                }}
                                            >
                                                <img
                                                    src={image.url}
                                                    alt={`Thumbnail ${idx + 1}`}
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            {filteredInitiatives.map((initiative, index) => {
                                const InitiativeIcon = initiative.icon;
                                return (
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
                                                <InitiativeIcon size={24} />
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
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Constituency;