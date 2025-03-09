import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, Share2, Facebook, Twitter, Instagram, ArrowLeft, User } from 'lucide-react';

const BlogDetail: React.FC = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const post = state?.post;

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="text-2xl text-gray-600 mb-6">Post not found</div>
                <button
                    onClick={() => navigate('/blog')}
                    className="flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                </button>
            </div>
        );
    }

    // Function to format the content with proper paragraphs
    const formatContent = (content: string) => {
        if (!content) return null;

        return content
            .split('\n\n')
            .filter(paragraph => paragraph.trim().length > 0)
            .map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                    {paragraph}
                </p>
            ));
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-emerald-900 text-white py-24 overflow-hidden"
            >
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url(${post.image || 'https://3news.com/wp-content/uploads/2023/03/Akandoh-Mintah.png'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
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
                        <div className="flex flex-wrap items-center justify-center gap-6 text-emerald-100">
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 mr-2" />
                                {post.readTime || '5 min read'}
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                {new Date(post.date || post.dateAdded).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                            {post.author?.name && (
                                <div className="flex items-center">
                                    <User className="w-5 h-5 mr-2" />
                                    {post.author.name}
                                </div>
                            )}
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
                            {post.image && (
                                <div className="relative group">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            )}

                            <div className="p-8">
                                <article className="prose prose-emerald max-w-none">
                                    {formatContent(post.content)}
                                </article>
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
                                    src={post.author?.avatar || "/kma.jpg"}
                                    alt={post.author?.name || "Kwabena Mintah Akandoh"}
                                    className="w-16 h-16 rounded-full object-cover ring-2 ring-emerald-500"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{post.author?.name || "Kwabena Mintah Akandoh"}</h3>
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

                        {/* Related Posts */}
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <h3 className="font-semibold text-lg mb-4">Related Articles</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 pb-4 border-b">
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-900 hover:text-emerald-600 transition-colors">
                                            Health Sector Reforms Gain Momentum
                                        </h4>
                                        <p className="text-sm text-gray-500">May 15, 2024</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pb-4 border-b">
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-900 hover:text-emerald-600 transition-colors">
                                            Parliament Debates Healthcare Funding
                                        </h4>
                                        <p className="text-sm text-gray-500">April 28, 2024</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-900 hover:text-emerald-600 transition-colors">
                                            New Rural Healthcare Initiative Launched
                                        </h4>
                                        <p className="text-sm text-gray-500">April 12, 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;