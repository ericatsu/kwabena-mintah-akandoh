import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Parliament from './pages/Parliament'
import './index.css'
import Constituency from './pages/Constituency'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { SignIn } from './components/auth/SignIn'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { AdminLayout } from './components/dashboard/AdminLayout'
import { Dashboard } from './pages/admin/Dashboard'
import { AboutAdmin } from './pages/admin/AboutAdmin'
import ActivitiesAdmin from './pages/admin/ActivitiesAdmin'
import Ministry from './pages/Ministry'
import BlogDetail from './pages/BlogDetail'
import GalleryAdmin from './pages/admin/GalleryAdmin'
import NewsletterAdmin from './pages/admin/NewsLettterAdmin'
import UpcomingEventAdmin from './pages/admin/UpcomingEventAdmin'

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/parliament" element={<Layout><Parliament /></Layout>} />
            <Route path="/constituency" element={<Layout><Constituency /></Layout>} />
            <Route path="/ministry" element={<Layout><Ministry /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/blog/:id" element={<Layout><BlogDetail /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />

            <Route path="/admin" element={<SignIn />} />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/about" element={<AboutAdmin />} />
                      <Route path="/activities" element={<ActivitiesAdmin />} />
                      <Route path="/gallery" element={<GalleryAdmin />} />
                      <Route path="/newsletter" element={<NewsletterAdmin />} />
                      <Route path="/events" element={<UpcomingEventAdmin />} />
                      {/* Add more admin routes as needed */}
                    </Routes>
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
          </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default App