import React from 'react';
import {
    LayoutDashboard,
    Settings,
    LogOut,
    PersonStanding,
    HeartHandshake,
    Newspaper,
    Image,
    Share,
    Dna
} from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('adminAuth');
        navigate('/admin');
    };

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
        { icon: PersonStanding, label: 'About', path: '/admin/about' },
        { icon: HeartHandshake, label: 'Ministry', path: '/admin/ministry' },
        { icon: Newspaper, label: 'Blog', path: '/admin/blog' },
        { icon: Image, label: 'Gallery', path: '/admin/gallery' },
        { icon: Share, label: 'News Letter', path: '/admin/newsletter' },
        { icon: Dna, label: 'Upcoming Events', path: '/admin/events' },
        { icon: Settings, label: 'Settings', path: '/admin/settings' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="fixed inset-y-0 left-0 w-64 bg-white border-r">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-emerald-600">Admin Panel</h2>
                </div>
                <nav className="mt-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 ${location.pathname === item.path ? 'bg-emerald-50 text-emerald-600' : ''
                                }`}
                        >
                            <item.icon className="h-5 w-5 mr-3" />
                            {item.label}
                        </Link>
                    ))}
                    <button
                        onClick={handleLogout}
                        className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 w-full mt-4"
                    >
                        <LogOut className="h-5 w-5 mr-3" />
                        Logout
                    </button>
                </nav>
            </div>
            <div className="ml-64 p-8">
                {children}
            </div>
        </div>
    );
};