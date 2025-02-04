// src/components/Footer.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    ArrowRight,
    CheckCircle
} from 'lucide-react'

const Footer = () => {
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle subscription logic here
        setIsSubscribed(true)
        setEmail('')
    }

    const quickLinks = [
        { name: 'About', path: '/about' },
        { name: 'Parliament', path: '/parliament' },
        { name: 'Constituency', path: '/constituency' },
        { name: 'Initiatives', path: '/initiatives' },
        { name: 'Media', path: '/media' },
        { name: 'Contact', path: '/contact' }
    ]

    const constituencyOffices = [
        {
            name: 'Juaboso Main Office',
            address: 'Assembly Building, Juaboso',
            phone: '+233 XX XXX XXXX'
        },
        {
            name: 'Parliament Office',
            address: 'Parliament House, Accra',
            phone: '+233 XX XXX XXXX'
        }
    ]

    const socialMedia = [
        { icon: Facebook, link: '#', name: 'Facebook' },
        { icon: Twitter, link: '#', name: 'Twitter' },
        { icon: Instagram, link: '#', name: 'Instagram' },
        { icon: Youtube, link: '#', name: 'Youtube' }
    ]

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Newsletter Section */}
            <div className="bg-emerald-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Stay Updated
                            </h3>
                            <p className="text-emerald-100">
                                Subscribe to our newsletter for updates on constituency developments,
                                parliamentary activities, and upcoming events.
                            </p>
                        </div>
                        <form onSubmit={handleSubscribe} className="w-full md:w-auto">
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="px-4 py-2 rounded-lg bg-emerald-900/50 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 min-w-[250px]"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-white text-emerald-800 rounded-lg font-semibold hover:bg-emerald-100 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </div>
                            {isSubscribed && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-emerald-200 mt-2"
                                >
                                    <CheckCircle className="w-4 h-4" />
                                    Thanks for subscribing!
                                </motion.p>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">
                            About Hon. K. M. Akandoh
                        </h4>
                        <p className="text-gray-400 mb-4">
                            Member of Parliament for Juaboso Constituency and Minister-designate
                            for Health, committed to serving the people and improving healthcare
                            in Ghana.
                        </p>
                        <div className="flex space-x-4">
                            {socialMedia.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    className="text-gray-400 hover:text-emerald-500 transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h4>
                        <nav className="space-y-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block text-gray-400 hover:text-emerald-500 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Constituency Offices */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Constituency Offices
                        </h4>
                        <div className="space-y-4">
                            {constituencyOffices.map((office) => (
                                <div key={office.name}>
                                    <h5 className="font-medium text-white">{office.name}</h5>
                                    <p className="text-gray-400 text-sm">{office.address}</p>
                                    <p className="text-gray-400 text-sm">{office.phone}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Contact Information
                        </h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:contact@akandoh.gov.gh"
                                className="flex items-center gap-3 text-gray-400 hover:text-emerald-500 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                contact@akandoh.gov.gh
                            </a>
                            <a
                                href="tel:+233XXXXXXXX"
                                className="flex items-center gap-3 text-gray-400 hover:text-emerald-500 transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                +233 XX XXX XXXX
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5" />
                                Parliament House, Accra
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Office of Hon. Kwabena Mintah Akandoh.
                            All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link to="/privacy" className="text-gray-400 hover:text-emerald-500 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-emerald-500 transition-colors">
                                Terms of Service
                            </Link>
                            <Link to="/sitemap" className="text-gray-400 hover:text-emerald-500 transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer