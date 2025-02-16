import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, Share2, Facebook, Twitter, Instagram } from 'lucide-react';

const BlogDetail: React.FC = () => {
    const { state } = useLocation();
    const post = state?.post;

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-2xl text-gray-600">Post not found</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-emerald-900 text-white py-24 overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 opacity-90" />
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="space-y-6"
                    >
                        <span className="inline-block px-4 py-1 bg-emerald-800/50 rounded-full text-emerald-100 text-sm">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center space-x-6 text-emerald-100">
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 mr-2" />
                                {post.readTime}
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                {new Date(post.dateAdded).toLocaleDateString()}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="lg:flex gap-12">
                    {/* Article Content */}
                    <motion.div
                        className="lg:w-2/3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                            <div className="relative group">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>

                            <div className="p-8">
                                <div className="prose max-w-none">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                        className="leading-relaxed text-gray-700 text-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        className="lg:w-1/3 mt-8 lg:mt-0 space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Author Card */}
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="w-16 h-16 rounded-full object-cover ring-2 ring-emerald-500"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{post.author.name}</h3>
                                    <p className="text-emerald-600">{post.category}</p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Member of Parliament for Juaboso and Ranking Member on the Health Committee
                            </p>
                        </div>

                        {/* Share Card */}
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Share2 className="w-5 h-5 text-emerald-600" />
                                <h3 className="font-semibold text-lg">Share this article</h3>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center justify-center gap-2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                                >
                                    <Facebook className="w-5 h-5" />
                                    <span>Share</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center justify-center gap-2 p-2 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors"
                                >
                                    <Twitter className="w-5 h-5" />
                                    <span>Tweet</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center justify-center gap-2 p-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition-colors"
                                >
                                    <Instagram className="w-5 h-5" />
                                    <span>Share</span>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;