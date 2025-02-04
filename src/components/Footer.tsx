import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    CheckCircle,
    ChevronRight,
    Heart
} from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isHovered, setIsHovered] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubscribed(true);
        setEmail('');
    };

    const quickLinks = [
        { name: 'About', path: '/about' },
        { name: 'Parliament', path: '/parliament' },
        { name: 'Constituency', path: '/constituency' },
        { name: 'Initiatives', path: '/initiatives' },
        { name: 'Media', path: '/media' },
        { name: 'Contact', path: '/contact' }
    ];

    const constituencyOffices = [
        {
            name: 'Juaboso Main Office',
            address: 'Assembly Building, Juaboso',
            phone: '+233 XX XXX XXXX',
            hours: 'Mon-Fri: 8am - 5pm'
        },
        {
            name: 'Parliament Office',
            address: 'Parliament House, Accra',
            phone: '+233 XX XXX XXXX',
            hours: 'Mon-Fri: 9am - 4pm'
        }
    ];

    const socialMedia = [
        { icon: Facebook, link: '#', name: 'Facebook', color: '#1877f2' },
        { icon: Twitter, link: '#', name: 'Twitter', color: '#1da1f2' },
        { icon: Instagram, link: '#', name: 'Instagram', color: '#e4405f' },
        { icon: Youtube, link: '#', name: 'Youtube', color: '#ff0000' }
    ];

    return (
        <footer className="relative bg-gray-900 text-gray-300">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600 rounded-full blur-3xl" />
            </div>

            {/* Newsletter Section */}
            <div className="relative bg-gradient-to-r from-emerald-900 to-emerald-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-between gap-8"
                    >
                        <div className="max-w-xl">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Stay Connected with Your Representative
                            </h3>
                            <p className="text-emerald-100 text-lg">
                                Join our community to receive updates on constituency developments,
                                parliamentary activities, and ways to get involved.
                            </p>
                        </div>
                        <form onSubmit={handleSubscribe} className="w-full md:w-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-300" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="pl-12 pr-4 py-3 rounded-xl bg-emerald-900/50 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 min-w-[300px] backdrop-blur-sm"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-white text-emerald-800 rounded-xl font-semibold hover:bg-emerald-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Subscribe
                                </button>
                            </div>
                            {isSubscribed && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-emerald-200 mt-3"
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    Thank you for joining our community!
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            About Hon. K. M. Akandoh
                            <Heart className="w-4 h-4 text-emerald-500" />
                        </h4>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Member of Parliament for Juaboso Constituency and Minister-designate
                            for Health, dedicated to serving the people and advancing healthcare
                            in Ghana through innovative policies and community engagement.
                        </p>
                        <div className="flex space-x-4">
                            {socialMedia.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.link}
                                    className="p-2 rounded-lg hover:bg-gray-800 transition-all duration-300"
                                    onMouseEnter={() => setIsHovered(social.name)}
                                    onMouseLeave={() => setIsHovered('')}
                                    whileHover={{ scale: 1.1 }}
                                    aria-label={social.name}
                                >
                                    <social.icon
                                        className="w-5 h-5"
                                        style={{
                                            color: isHovered === social.name ? social.color : '#9ca3af'
                                        }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-xl font-semibold text-white mb-4">
                            Quick Links
                        </h4>
                        <nav className="space-y-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="group flex items-center text-gray-400 hover:text-emerald-500 transition-colors"
                                >
                                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Constituency Offices */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h4 className="text-xl font-semibold text-white mb-4">
                            Constituency Offices
                        </h4>
                        <div className="space-y-6">
                            {constituencyOffices.map((office) => (
                                <div key={office.name} className="group">
                                    <h5 className="font-medium text-white mb-2 group-hover:text-emerald-500 transition-colors">
                                        {office.name}
                                    </h5>
                                    <div className="space-y-1 text-sm">
                                        <p className="text-gray-400">{office.address}</p>
                                        <p className="text-gray-400">{office.phone}</p>
                                        <p className="text-gray-500">{office.hours}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h4 className="text-xl font-semibold text-white mb-4">
                            Contact Information
                        </h4>
                        <div className="space-y-4">
                            <a
                                href="mailto:contact@akandoh.gov.gh"
                                className="flex items-center gap-3 text-gray-400 hover:text-emerald-500 transition-colors group"
                            >
                                <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-emerald-500/20 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                contact@akandoh.gov.gh
                            </a>
                            <a
                                href="tel:+233XXXXXXXX"
                                className="flex items-center gap-3 text-gray-400 hover:text-emerald-500 transition-colors group"
                            >
                                <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-emerald-500/20 transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                +233 XX XXX XXXX
                            </a>
                            <div className="flex items-center gap-3 text-gray-400 group">
                                <div className="p-2 rounded-lg bg-gray-800">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                Parliament House, Accra
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Office of Hon. Kwabena Mintah Akandoh.
                            All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                                <Link
                                    key={item}
                                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-gray-400 hover:text-emerald-500 transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;