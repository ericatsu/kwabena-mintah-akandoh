import { ReactNode } from 'react'
import Header from './Header'
import { motion } from 'framer-motion'
import Footer from './Footer'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
            <Header />
            <motion.main
                className="flex-grow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    )
}

export default Layout