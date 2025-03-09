import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Clock, Bold, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { transformToBlogPosts } from '@/utils/newsData';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: {
        name: string;
        avatar: string;
    };
    readTime: string;
    image: string;
    featured?: boolean;
    dateAdded: string;
}

const categories = [
    'News',
    'Politics',
    'Featured',
    'Coronavirus',
    'Health Policy',
    'Healthcare Systems',
    "Constituency",
    "Parliament",
];

// const categories = [
//     'Health Policy',
//     'Healthcare Systems',
//     "Constituency",
//     "Parliament",
//     'Disease Prevention',
//     'Medical Research',
//     'Mental Health',
//     'Public Health',
//     'COVID-19 Updates',
//     'Government Initiatives',
//     'Public Engagement',
//     'Legislative News'
// ];


const Blog: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Category');
    const [posts, setPosts] = useState<BlogPost[]>([]);

    
    useEffect(() => {
        // Load posts from the transformed news data
        setPosts(transformToBlogPosts());
    }, []);

    const filteredPosts = posts.filter(post => {
        return (selectedCategory === 'All Category' || post.category === selectedCategory) &&
            (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-emerald-900 text-white py-24 overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 opacity-90" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                            The Media
                        </h1>
                        <p className="text-xl text-emerald-100 max-w-3xl">
                            Blog of  Kwabena Mintah Akandoh
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 bg-emerald-800/50 rounded-full px-4 py-2">
                                <Bold size={20} />
                                <span>All Current</span>
                            </div>
                            <div className="flex items-center gap-2 bg-emerald-800/50 rounded-full px-4 py-2">
                                <Heart size={20} />
                                <span>Trusted</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h2 className="text-lg font-semibold mb-4">Label</h2>

                            {/* Search */}
                            <div className="relative mb-6">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search article..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Filter */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-4">Filter</h3>
                                <div className="relative">
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Filter article...</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                </div>
                            </div>

                            {/* Categories */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Browse By Categories</h3>
                                <ul className="space-y-2">
                                    {categories.map((category) => (
                                        <motion.li
                                            key={category}
                                            whileHover={{ x: 4 }}
                                            className={`cursor-pointer px-4 py-2 rounded-lg transition-colors ${selectedCategory === category
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-gray-600 hover:bg-gray-50'
                                                }`}
                                            onClick={() => setSelectedCategory(category)}
                                        >
                                            {category}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Featured Post */}
                        {filteredPosts.filter(post => post.featured).map(post => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-8"
                            >
                                <Link to={`/blog/${post.id}`} state={{ post }}>
                                    <div className="group relative rounded-2xl overflow-hidden">
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                                                Featured
                                            </span>
                                        </div>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-0 p-6 text-white">
                                            <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
                                            <p className="text-gray-200 mb-4">{post.excerpt}</p>
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={post.author.avatar}
                                                    alt={post.author.name}
                                                    className="w-8 h-8 rounded-full"
                                                />
                                                <span>{post.author.name}</span>
                                                <span>•</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}

                        {/* Regular Posts Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredPosts.filter(post => !post.featured).map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link to={`/blog/${post.id}`} state={{ post }}>
                                        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                                            />
                                            <div className="p-6">
                                                <span className="text-sm text-blue-600 font-medium">
                                                    {post.category}
                                                </span>
                                                <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                                                    {post.title}
                                                </h3>
                                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            src={post.author.avatar}
                                                            alt={post.author.name}
                                                            className="w-8 h-8 rounded-full"
                                                        />
                                                        <span className="text-sm text-gray-600">{post.author.name}</span>
                                                    </div>
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <Clock className="w-4 h-4 mr-1" />
                                                        {post.readTime}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;