import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Parliament', path: '/parliament' },
    { name: 'Constituency', path: '/constituency' },
    { name: 'Ministry', path: '/ministry' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `
    fixed w-full z-50 transition-all duration-300
    ${isScrolled
      ? 'bg-white/95 backdrop-blur-sm shadow-md'
      : 'bg-gradient-to-b from-white/90 to-white/0'}
  `;

  return (
    <header className={headerClasses}>
      <div className="max-w-8xl mx-auto">
        {/* Top bar */}
        <div className="hidden lg:flex justify-end items-center px-8 py-2 bg-emerald-900/90 text-white space-x-6">
          <div className="flex items-center space-x-2">
            <Globe size={16} />
            <select
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
              className="bg-transparent text-sm focus:outline-none"
            >
              <option value="English">English</option>
              <option value="Twi">Twi</option>
              <option value="Ewe">Ewe</option>
            </select>
          </div>
          <div className="h-4 w-px bg-white/30" />
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm hover:text-emerald-200">News</a>
            <a href="#" className="text-sm hover:text-emerald-200">Events</a>
            <a href="#" className="text-sm hover:text-emerald-200">Resources</a>
          </div>
        </div>

        {/* Main header */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Title */}
            <Link to="/">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-4"
              >
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-emerald-600">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Hon. K. M. Akandoh
                  </h1>
                  <div className="flex items-center space-x-2 text-sm text-emerald-700">
                    <span>MP, Juaboso Constituency</span>
                    <span className="h-1 w-1 rounded-full bg-emerald-700" />
                    <span>Minister for Health</span>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    className={`
                      py-2 px-1 text-gray-700 hover:text-emerald-700
                      transition-colors flex items-center space-x-1
                      ${location.pathname === item.path ? 'text-emerald-700' : ''}
                    `}
                  >
                    <span>{item.name}</span>
                   
                  </Link>

                  

                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-emerald-600"
                    />
                  )}
                </div>
              ))}

              <button className="p-2 hover:bg-emerald-50 rounded-full transition-colors">
                <Search size={20} className="text-gray-700" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden bg-white border-t"
              >
                {navItems.map((item) => (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      className={`
                        block py-3 px-4 text-gray-700 hover:bg-emerald-50
                        hover:text-emerald-700 transition-colors
                        ${location.pathname === item.path ? 'bg-emerald-50 text-emerald-700' : ''}
                      `}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}

                <div className="p-4 border-t">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Globe size={16} />
                    <select
                      value={currentLanguage}
                      onChange={(e) => setCurrentLanguage(e.target.value)}
                      className="bg-transparent text-sm focus:outline-none"
                    >
                      <option value="English">English</option>
                      <option value="Twi">Twi</option>
                      <option value="Ewe">Ewe</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;