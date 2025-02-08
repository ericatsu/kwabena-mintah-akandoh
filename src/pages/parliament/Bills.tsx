import { motion } from 'framer-motion';
import { FileText, MessageCircle, Book, Download, ExternalLink, ThumbsUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Bills = () => {
    const bills = [
        {
            title: 'Healthcare Reform Act',
            status: 'In Progress',
            stage: 'Second Reading',
            introduced: '2024-01-15',
            summary: 'Comprehensive healthcare system reform',
            supporters: 145,
            documents: ['Draft Bill', 'Impact Assessment', 'Committee Report'],
            timeline: [
                { date: '2024-01-15', event: 'First Reading' },
                { date: '2024-02-01', event: 'Committee Stage' }
            ]
        },
        {
            title: 'Education Investment Bill',
            status: 'Passed',
            stage: 'Enacted',
            introduced: '2023-11-20',
            summary: 'Increasing education funding and infrastructure',
            supporters: 167,
            documents: ['Final Act', 'Implementation Guide', 'Financial Impact'],
            timeline: [
                { date: '2023-11-20', event: 'Introduction' },
                { date: '2024-01-30', event: 'Royal Assent' }
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
                        <h1 className="text-5xl font-bold">Bills & Motions</h1>
                        <p className="text-xl text-emerald-100 max-w-3xl">
                            Track legislative proposals, amendments, and voting records
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Bills List */}
                <div className="space-y-8">
                    {bills.map((bill, index) => (
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
                                            <h2 className="text-2xl font-bold text-gray-800">{bill.title}</h2>
                                            <div className="flex items-center gap-4 mt-2">
                                                <span className={`px-3 py-1 rounded-full text-sm ${bill.status === 'Passed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                                    }`}>
                                                    {bill.status}
                                                </span>
                                                <span className="text-gray-500">{bill.stage}</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-0">
                                            <div className="flex items-center gap-2">
                                                <ThumbsUp size={20} className="text-emerald-600" />
                                                <span className="text-lg font-semibold">{bill.supporters} Supporters</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-semibold text-gray-800 mb-2">Summary</h3>
                                            <p className="text-gray-600">{bill.summary}</p>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-gray-800 mb-4">Documents</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                {bill.documents.map((doc, docIndex) => (
                                                    <Button
                                                        key={docIndex}
                                                        variant="outline"
                                                        className="flex items-center justify-between w-full"
                                                    >
                                                        <span className="flex items-center gap-2">
                                                            <FileText size={20} />
                                                            {doc}
                                                        </span>
                                                        <Download size={16} />
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-gray-800 mb-4">Timeline</h3>
                                            <div className="relative">
                                                {bill.timeline.map((event, eventIndex) => (
                                                    <div
                                                        key={eventIndex}
                                                        className="flex items-start gap-4 pb-6 relative"
                                                    >
                                                        <div className="flex flex-col items-center">
                                                            <div className="w-3 h-3 bg-emerald-600 rounded-full" />
                                                            {eventIndex < bill.timeline.length - 1 && (
                                                                <div className="w-0.5 h-full bg-emerald-200 absolute top-3 left-1.5" />
                                                            )}
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-gray-800">{event.event}</p>
                                                            <p className="text-sm text-gray-500">
                                                                {new Date(event.date).toLocaleDateString('en-US', {
                                                                    year: 'numeric',
                                                                    month: 'long',
                                                                    day: 'numeric'
                                                                })}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-4 pt-4 border-t">
                                            <Button className="flex items-center gap-2">
                                                <ExternalLink size={20} />
                                                View Full Bill
                                            </Button>
                                            <Button variant="outline" className="flex items-center gap-2">
                                                <MessageCircle size={20} />
                                                Public Comments
                                            </Button>
                                            <Button variant="outline" className="flex items-center gap-2">
                                                <Book size={20} />
                                                Related Research
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Bill Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <Card>
                        <CardHeader>
                            <h2 className="text-2xl font-bold text-gray-800">Legislative Impact</h2>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                                    <h3 className="text-4xl font-bold text-emerald-600">12</h3>
                                    <p className="text-gray-600 mt-2">Bills Sponsored</p>
                                </div>
                                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                                    <h3 className="text-4xl font-bold text-emerald-600">89%</h3>
                                    <p className="text-gray-600 mt-2">Success Rate</p>
                                </div>
                                <div className="bg-emerald-50 p-6 rounded-lg text-center">
                                    <h3 className="text-4xl font-bold text-emerald-600">45K</h3>
                                    <p className="text-gray-600 mt-2">Citizens Impacted</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};