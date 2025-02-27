import { motion } from 'framer-motion';
import { FileText, MessageCircle, Users, TrendingUp, Award, Calendar, Clock, CheckCircle, XCircle, ThumbsUp, ThumbsDown, Mic, ChevronRight, BarChart2 } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

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

    const votingRecord = [
        {
            bill: 'Healthcare Reform Act',
            date: '2024-01-15',
            vote: 'For',
            outcome: 'Passed',
            majority: '68%'
        },
        {
            bill: 'Budget Allocation Bill',
            date: '2023-12-10',
            vote: 'For',
            outcome: 'Passed',
            majority: '55%'
        },
        {
            bill: 'Infrastructure Development Plan',
            date: '2023-11-22',
            vote: 'Against',
            outcome: 'Failed',
            majority: '42%'
        },
        {
            bill: 'Education Investment Bill',
            date: '2023-10-08',
            vote: 'For',
            outcome: 'Passed',
            majority: '72%'
        }
    ];

    const speeches = [
        {
            title: 'Healthcare System Improvement',
            date: '2024-01-18',
            duration: '22 min',
            topics: ['Public health', 'Medical funding', 'Rural healthcare'],
            impact: 'High',
            engagement: 85
        },
        {
            title: 'Education Reform Debate',
            date: '2023-12-05',
            duration: '18 min',
            topics: ['Teacher training', 'School infrastructure', 'Curriculum development'],
            impact: 'Medium',
            engagement: 72
        },
        {
            title: 'Budget Analysis Speech',
            date: '2023-11-14',
            duration: '35 min',
            topics: ['Healthcare budget', 'Ministry allocations', 'Fiscal responsibility'],
            impact: 'Very High',
            engagement: 93
        }
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
                            Kwabena Mintah Akandoh, MP for Juaboso Constituency
                            Minister for Health
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-emerald-800/50 rounded-full px-4 py-2">
                                <Clock size={20} />
                                <span>Current Term: 2021-2025</span>
                            </div>
                            <div className="flex items-center gap-2 bg-emerald-800/50 rounded-full px-4 py-2">
                                <Award size={20} />
                                <span>Health Committee Chair</span>
                            </div>
                            <div className="flex items-center gap-2 bg-emerald-800/50 rounded-full px-4 py-2">
                                <BarChart2 size={20} />
                                <span>97% Bills Effectiveness</span>
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
                            <Card className="hover:shadow-md transition-shadow duration-300">
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
                <Card className="mb-12 hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-800">Recent Parliamentary Activities</h2>
                        <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center">
                            View all <ChevronRight size={16} />
                        </button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentActivities.map((activity, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
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
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Parliamentary Performance */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Card className="hover:shadow-md transition-shadow duration-300">
                        <CardHeader className="border-b border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800">Parliamentary Performance</h2>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Tabs defaultValue="attendance" className="w-full">
                                <TabsList className="w-full grid grid-cols-3 rounded-none border-b">
                                    <TabsTrigger value="attendance" className="py-4 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle size={18} />
                                            <span>Attendance</span>
                                        </div>
                                    </TabsTrigger>
                                    <TabsTrigger value="votes" className="py-4 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700">
                                        <div className="flex items-center gap-2">
                                            <ThumbsUp size={18} />
                                            <span>Voting Record</span>
                                        </div>
                                    </TabsTrigger>
                                    <TabsTrigger value="speeches" className="py-4 data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700">
                                        <div className="flex items-center gap-2">
                                            <Mic size={18} />
                                            <span>Speeches</span>
                                        </div>
                                    </TabsTrigger>
                                </TabsList>

                                {/* Attendance Tab */}
                                <TabsContent value="attendance" className="p-6 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="bg-emerald-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Plenary Sessions</h3>
                                            <p className="text-4xl font-bold text-emerald-600 mb-2">92%</p>
                                            <div className="w-full">
                                                <Progress value={92} className="h-3 bg-emerald-200" />
                                            </div>
                                            <p className="text-sm text-gray-500 mt-2">Attended 46 of 50 sessions</p>
                                        </div>

                                        <div className="bg-emerald-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Committee Meetings</h3>
                                            <p className="text-4xl font-bold text-emerald-600 mb-2">96%</p>
                                            <div className="w-full">
                                                <Progress value={96} className="h-3 bg-emerald-200" />
                                            </div>
                                            <p className="text-sm text-gray-500 mt-2">Attended 24 of 25 meetings</p>
                                        </div>

                                        <div className="bg-emerald-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Special Sessions</h3>
                                            <p className="text-4xl font-bold text-emerald-600 mb-2">88%</p>
                                            <div className="w-full">
                                                <Progress value={88} className="h-3 bg-emerald-200" />
                                            </div>
                                            <p className="text-sm text-gray-500 mt-2">Attended 7 of 8 sessions</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-emerald-100 rounded-lg">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Overall Attendance Score</h3>
                                            <p className="text-sm text-gray-600">Top 10% among all MPs</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <TrendingUp className="text-emerald-600" size={32} />
                                            <span className="text-3xl font-bold text-emerald-700">94%</span>
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* Voting Record Tab */}
                                <TabsContent value="votes" className="p-6 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                        <div className="bg-emerald-50 rounded-lg p-5 text-center hover:shadow-md transition-shadow duration-300">
                                            <div className="flex justify-center mb-2">
                                                <ThumbsUp className="text-emerald-600" size={32} />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-800">Bills Supported</h3>
                                            <p className="text-3xl font-bold text-emerald-600 mt-1">78%</p>
                                        </div>

                                        <div className="bg-emerald-50 rounded-lg p-5 text-center hover:shadow-md transition-shadow duration-300">
                                            <div className="flex justify-center mb-2">
                                                <ThumbsDown className="text-emerald-600" size={32} />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-800">Bills Opposed</h3>
                                            <p className="text-3xl font-bold text-emerald-600 mt-1">22%</p>
                                        </div>

                                        <div className="bg-emerald-50 rounded-lg p-5 text-center hover:shadow-md transition-shadow duration-300">
                                            <div className="flex justify-center mb-2">
                                                <Award className="text-emerald-600" size={32} />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-800">Voting Effectiveness</h3>
                                            <p className="text-3xl font-bold text-emerald-600 mt-1">87%</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                        <div className="bg-emerald-100 p-4">
                                            <h3 className="font-semibold text-gray-800">Recent Voting History</h3>
                                        </div>
                                        <div className="divide-y divide-gray-100">
                                            {votingRecord.map((record, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="p-4 flex items-center hover:bg-gray-50"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.1 * index }}
                                                >
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-gray-800">{record.bill}</h4>
                                                        <p className="text-sm text-gray-500">{new Date(record.date).toLocaleDateString()}</p>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${record.vote === 'For'
                                                                ? 'bg-emerald-100 text-emerald-700'
                                                                : 'bg-red-100 text-red-700'
                                                            }`}>
                                                            {record.vote}
                                                        </span>
                                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${record.outcome === 'Passed'
                                                                ? 'bg-blue-100 text-blue-700'
                                                                : 'bg-orange-100 text-orange-700'
                                                            }`}>
                                                            {record.outcome} ({record.majority})
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="p-3 bg-gray-50 text-center">
                                            <button className="text-emerald-600 hover:text-emerald-800 text-sm font-medium">
                                                View Full Voting Record
                                            </button>
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* Speeches Tab */}
                                <TabsContent value="speeches" className="p-6 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                        <div className="bg-emerald-50 rounded-lg p-5 text-center hover:shadow-md transition-shadow duration-300">
                                            <div className="flex justify-center mb-2">
                                                <Mic className="text-emerald-600" size={30} />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-800">Total Speeches</h3>
                                            <p className="text-3xl font-bold text-emerald-600 mt-1">32</p>
                                            <p className="text-xs text-gray-500 mt-1">This parliamentary session</p>
                                        </div>

                                        <div className="bg-emerald-50 rounded-lg p-5 text-center hover:shadow-md transition-shadow duration-300">
                                            <div className="flex justify-center mb-2">
                                                <MessageCircle className="text-emerald-600" size={30} />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-800">Avg. Duration</h3>
                                            <p className="text-3xl font-bold text-emerald-600 mt-1">24 min</p>
                                            <p className="text-xs text-gray-500 mt-1">+3 min from previous session</p>
                                        </div>

                                        <div className="bg-emerald-50 rounded-lg p-5 text-center hover:shadow-md transition-shadow duration-300">
                                            <div className="flex justify-center mb-2">
                                                <BarChart2 className="text-emerald-600" size={30} />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-800">Engagement Score</h3>
                                            <p className="text-3xl font-bold text-emerald-600 mt-1">87/100</p>
                                            <p className="text-xs text-gray-500 mt-1">Top 15% among all MPs</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                        <div className="bg-emerald-100 p-4">
                                            <h3 className="font-semibold text-gray-800">Notable Speeches & Interventions</h3>
                                        </div>
                                        <div className="divide-y divide-gray-100">
                                            {speeches.map((speech, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="p-5 hover:bg-gray-50"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.1 * index }}
                                                >
                                                    <div className="flex justify-between items-start mb-3">
                                                        <h4 className="font-medium text-gray-800 text-lg">{speech.title}</h4>
                                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${speech.impact === 'High' || speech.impact === 'Very High'
                                                                ? 'bg-emerald-100 text-emerald-700'
                                                                : 'bg-blue-100 text-blue-700'
                                                            }`}>
                                                            {speech.impact} Impact
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                                        <span>{new Date(speech.date).toLocaleDateString()}</span>
                                                        <span>•</span>
                                                        <span>{speech.duration}</span>
                                                        <span>•</span>
                                                        <span>Engagement: {speech.engagement}%</span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {speech.topics.map((topic, topicIndex) => (
                                                            <span key={topicIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                                                                {topic}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="p-3 bg-gray-50 text-center">
                                            <button className="text-emerald-600 hover:text-emerald-800 text-sm font-medium">
                                                View All Speeches & Interventions
                                            </button>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default Parliament;