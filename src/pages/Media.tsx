import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Video, Image as ImageIcon, Newspaper, Play, Calendar, Share2, Download } from 'lucide-react';

const Media = () => {
    const [selectedYear, setSelectedYear] = useState('2024');

    const newsItems = [
        {
            title: "Healthcare Reform Bill Presentation",
            date: "January 15, 2024",
            source: "Ghana Parliamentary Press",
            image: "https://cdn.ghanaweb.com/imagelib/pics/736/73681680.295.jpg",
            excerpt: "Hon. Kwabena Mintah Akandoh presents comprehensive healthcare reform bill..."
        },
        {
            title: "Address on Medical Infrastructure",
            date: "February 1, 2024",
            source: "Ghana Health News",
            image: "https://cdn.ghanaweb.com/imagelib/pics/736/73681680.295.jpg",
            excerpt: "Minister-designate outlines plans for medical infrastructure development..."
        }
    ];

    const speeches = [
        {
            title: "Healthcare Policy Address",
            date: "February 4, 2024",
            duration: "25:30",
            thumbnail: "https://cdn.ghanaweb.com/imagelib/pics/736/73681680.295.jpg",
            views: "1.2K"
        },
        {
            title: "Budget Debate Contribution",
            date: "January 28, 2024",
            duration: "18:45",
            thumbnail: "https://cdn.ghanaweb.com/imagelib/pics/736/73681680.295.jpg",
            views: "956"
        }
    ];

    const pressReleases = [
        {
            title: "Statement on Rural Healthcare Initiative",
            date: "February 2, 2024",
            type: "Press Release",
            downloadUrl: "#"
        },
        {
            title: "Response to Health Infrastructure Queries",
            date: "January 25, 2024",
            type: "Official Statement",
            downloadUrl: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
            {/* Hero Section */}
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
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Media Center</h1>
                        <p className="text-xl text-emerald-100 max-w-3xl">
                            Latest news, speeches, and press releases from Hon. Kwabena Mintah Akandoh
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Tabs defaultValue="news" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                        <TabsTrigger value="news">News & Articles</TabsTrigger>
                        <TabsTrigger value="speeches">Speeches & Videos</TabsTrigger>
                        <TabsTrigger value="press">Press Releases</TabsTrigger>
                    </TabsList>

                    <TabsContent value="news">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {newsItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                                        <CardContent className="p-6">
                                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                                <Calendar size={16} />
                                                {item.date}
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 mb-4">{item.excerpt}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-500">{item.source}</span>
                                                <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
                                                    <Share2 size={16} />
                                                    Share
                                                </button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="speeches">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {speeches.map((speech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card>
                                        <div className="relative">
                                            <img src={speech.thumbnail} alt={speech.title} className="w-full h-48 object-cover" />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                                    <Play className="text-emerald-600 w-6 h-6" />
                                                </button>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{speech.title}</h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={16} />
                                                    {speech.date}
                                                </span>
                                                <span>{speech.duration}</span>
                                                <span>{speech.views} views</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="press">
                        <div className="space-y-6">
                            {pressReleases.map((release, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{release.title}</h3>
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar size={16} />
                                                            {release.date}
                                                        </span>
                                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                                                            {release.type}
                                                        </span>
                                                    </div>
                                                </div>
                                                <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
                                                    <Download size={16} />
                                                    Download
                                                </button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Media;