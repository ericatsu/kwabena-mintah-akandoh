//import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageCircle, Users, TrendingUp, Award, Calendar, Clock } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Parliament = () => {
    const activities = [
        {
            title: 'Bills Sponsored',
            count: 15,
            icon: FileText,
            items: ['Healthcare Reform Act', 'Education Investment Bill', 'Environmental Protection Bill'],
            trend: '+20% from last year'
        },
        {
            title: 'Committee Roles',
            count: 3,
            icon: Users,
            items: ['Chair - Health Committee', 'Member - Finance Committee', 'Member - Education Committee'],
            trend: 'Leading 2 major initiatives'
        },
        {
            title: 'Parliamentary Debates',
            count: 45,
            icon: MessageCircle,
            items: ['Healthcare Policy', 'Infrastructure Development', 'Education Reform'],
            trend: '92% attendance rate'
        }
    ];

    const recentActivities = [
        { date: '2024-02-01', title: 'Health Committee Meeting', type: 'Committee', duration: '2h 30m' },
        { date: '2024-01-28', title: 'Healthcare Bill Reading', type: 'Plenary', duration: '1h 45m' },
        { date: '2024-01-25', title: 'Budget Review Session', type: 'Committee', duration: '3h 15m' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-16">
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
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                            Parliamentary Service Record
                        </h1>
                        <p className="text-xl text-emerald-100 max-w-3xl">
                            Hon. Kwabena Mintah Akandoh, MP for Juaboso Constituency
                            Minister-designate for Health
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 bg-emerald-800/50 rounded-full px-4 py-2">
                                <Clock size={20} />
                                <span>Current Term: 2021-2025</span>
                            </div>
                            <div className="flex items-center gap-2 bg-emerald-800/50 rounded-full px-4 py-2">
                                <Award size={20} />
                                <span>Health Committee Chair</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                                            <activity.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">{activity.title}</h3>
                                            <div className="flex items-center gap-2">
                                                <span className="text-3xl font-bold text-emerald-600">{activity.count}</span>
                                                <span className="text-sm text-gray-500">{activity.trend}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {activity.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-center gap-2 text-gray-600">
                                                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Recent Activities */}
                <Card className="mb-12">
                    <CardHeader>
                        <h2 className="text-2xl font-bold text-gray-800">Recent Parliamentary Activities</h2>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentActivities.map((activity, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                    <Calendar className="text-emerald-600" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800">{activity.title}</h3>
                                        <p className="text-sm text-gray-500">
                                            {new Date(activity.date).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                                            {activity.type}
                                        </span>
                                        <span className="text-gray-500 text-sm">{activity.duration}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Performance Metrics */}
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-bold text-gray-800">Parliamentary Performance</h2>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="attendance" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="attendance">Attendance</TabsTrigger>
                                <TabsTrigger value="votes">Voting Record</TabsTrigger>
                                <TabsTrigger value="speeches">Speeches</TabsTrigger>
                            </TabsList>
                            <TabsContent value="attendance" className="p-4">
                                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Session Attendance Rate</h3>
                                        <p className="text-3xl font-bold text-emerald-600">92%</p>
                                    </div>
                                    <TrendingUp className="text-emerald-600" size={32} />
                                </div>
                            </TabsContent>
                            <TabsContent value="votes" className="p-4">
                                {/* Add voting record content */}
                            </TabsContent>
                            <TabsContent value="speeches" className="p-4">
                                {/* Add speeches content */}
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Parliament;