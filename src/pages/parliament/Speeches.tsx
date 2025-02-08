import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Filter, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Speeches = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const speeches = [
        {
            date: '2024-02-01',
            title: 'Healthcare Reform Address',
            topic: 'Healthcare',
            duration: '45 minutes',
            engagement: 125,
            videoUrl: '#',
            transcript: 'Lorem ipsum...',
            impact: 'Led to policy revision'
        },
        {
            date: '2024-01-15',
            title: 'Education Budget Debate',
            topic: 'Education',
            duration: '30 minutes',
            engagement: 98,
            videoUrl: '#',
            transcript: 'Lorem ipsum...',
            impact: 'Increased education funding'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-16">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative bg-emerald-900 text-white py-24"
            >
                <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 opacity-90" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl font-bold">Parliamentary Speeches</h1>
                        <p className="text-xl text-emerald-100 max-w-3xl">
                            Archive of parliamentary addresses, debates, and interventions
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Search and Filter */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <Input
                                placeholder="Search speeches..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Filter size={20} />
                            Filter
                        </Button>
                    </div>
                </div>

                {/* Speeches List */}
                <div className="space-y-6">
                    {speeches.map((speech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 text-emerald-600 mb-2">
                                                <MessageCircle size={20} />
                                                <span className="font-medium">{speech.topic}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">{speech.title}</h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span>{new Date(speech.date).toLocaleDateString()}</span>
                                                <span>{speech.duration}</span>
                                                <span>{speech.engagement} engagements</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline" className="flex items-center gap-2">
                                                <Download size={20} />
                                                Transcript
                                            </Button>
                                            <Button className="flex items-center gap-2">
                                                <ExternalLink size={20} />
                                                Watch
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                                        <p className="text-gray-600">Impact: {speech.impact}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};