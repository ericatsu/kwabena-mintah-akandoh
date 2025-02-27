import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Phone, Mail, Building, ChevronRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const contactMethods = [
        {
            icon: Building,
            title: 'Constituency Office',
            details: ['Juaboso District', 'Western North Region, Ghana'],
            action: 'Get Directions',
            link: '#'
        },
        {
            icon: Phone,
            title: 'Phone',
            details: ['+233 XX XXX XXXX', 'Monday to Friday, 9am - 5pm'],
            action: 'Call Now',
            link: 'tel:+233XXXXXXXX'
        },
        {
            icon: Mail,
            title: 'Email',
            details: ['office@kwabena-akandoh.gh', 'Response within 24 hours'],
            action: 'Send Email',
            link: 'mailto:office@kwabena-akandoh.gh'
        }
    ];

    const officeHours = [
        { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
        { day: 'Sunday', hours: 'Closed' }
    ];

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Contact Us</h1>
                        <p className="text-xl text-emerald-100 max-w-3xl">
                            Get in touch with  Kwabena Mintah Akandoh's office for constituency services and inquiries
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Contact Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full">
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                                            <method.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{method.title}</h3>
                                        {method.details.map((detail, i) => (
                                            <p key={i} className="text-gray-600">{detail}</p>
                                        ))}
                                        <a
                                            href={method.link}
                                            className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors"
                                        >
                                            {method.action}
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Card className="h-full">
                            <CardHeader>
                                <h2 className="text-2xl font-bold text-gray-800">Send a Message</h2>
                                <p className="text-gray-600">Fill out the form below and we'll get back to you soon.</p>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Office Hours & Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        {/* Office Hours */}
                        <Card>
                            <CardHeader>
                                <h2 className="text-2xl font-bold text-gray-800">Office Hours</h2>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {officeHours.map((schedule, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between py-2 border-b last:border-0"
                                        >
                                            <span className="font-medium text-gray-700">{schedule.day}</span>
                                            <span className="text-gray-600">{schedule.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Additional Information */}
                        <Card>
                            <CardHeader>
                                <h2 className="text-2xl font-bold text-gray-800">Constituency Services</h2>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-2 text-gray-600">
                                        <ChevronRight className="text-emerald-600" size={20} />
                                        Constituent Support and Advocacy
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-600">
                                        <ChevronRight className="text-emerald-600" size={20} />
                                        Community Development Projects
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-600">
                                        <ChevronRight className="text-emerald-600" size={20} />
                                        Healthcare Initiatives
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-600">
                                        <ChevronRight className="text-emerald-600" size={20} />
                                        Educational Support Programs
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <section className="py-20 bg-emerald-900 text-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-12"
                            >
                                <h2 className="text-3xl font-bold mb-4">Contact the Ministry</h2>
                                <p className="text-emerald-100">Get in touch with our office for inquiries and assistance</p>
                            </motion.div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center justify-center"
                                >
                                    <Mail className="w-6 h-6 mr-3" />
                                    <span>health.ministry@ghana.gov.gh</span>
                                </motion.div>
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="flex items-center justify-center"
                                >
                                    <Phone className="w-6 h-6 mr-3" />
                                    <span>+233 (0) 302 665651</span>
                                </motion.div>
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-center justify-center"
                                >
                                    <MapPin className="w-6 h-6 mr-3" />
                                    <span>Ministry of Health, Accra, Ghana</span>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Contact;