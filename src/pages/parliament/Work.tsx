import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export const Work = () => {

    const committees = [
        {
            name: 'Health Committee',
            role: 'Chairman',
            meetings: 45,
            initiatives: 12,
            impact: 'Led healthcare reform initiatives',
            recentWork: [
                { date: '2024-02-01', title: 'Healthcare Infrastructure Review' },
                { date: '2024-01-28', title: 'Medical Education Standards Meeting' }
            ]
        },
        {
            name: 'Finance Committee',
            role: 'Member',
            meetings: 38,
            initiatives: 8,
            impact: 'Contributed to budget analysis',
            recentWork: [
                { date: '2024-02-03', title: 'Annual Budget Review' },
                { date: '2024-01-25', title: 'Economic Policy Discussion' }
            ]
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
                        <h1 className="text-5xl font-bold">Parliamentary Work</h1>
                        <p className="text-xl text-emerald-100 max-w-3xl">
                            Track committee work, legislative initiatives, and parliamentary contributions
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Committee Work */}
                <div className="space-y-8">
                    {committees.map((committee, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card>
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800">{committee.name}</h2>
                                            <p className="text-emerald-600 font-medium">{committee.role}</p>
                                        </div>
                                        <div className="flex gap-4 mt-4 md:mt-0">
                                            <div className="text-center">
                                                <p className="text-sm text-gray-500">Meetings</p>
                                                <p className="text-2xl font-bold text-emerald-600">{committee.meetings}</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-sm text-gray-500">Initiatives</p>
                                                <p className="text-2xl font-bold text-emerald-600">{committee.initiatives}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        <div className="bg-emerald-50 p-4 rounded-lg">
                                            <h3 className="font-semibold text-gray-800">Impact</h3>
                                            <p className="text-gray-600 mt-2">{committee.impact}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 mb-4">Recent Work</h3>
                                            <div className="space-y-3">
                                                {committee.recentWork.map((work, workIndex) => (
                                                    <div key={workIndex} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                                                        <Calendar className="text-emerald-600" size={20} />
                                                        <div>
                                                            <p className="font-medium text-gray-800">{work.title}</p>
                                                            <p className="text-sm text-gray-500">{new Date(work.date).toLocaleDateString()}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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
