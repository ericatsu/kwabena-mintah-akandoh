import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Parliament from './pages/Parliament'
import './index.css'
import Constituency from './pages/Constituency'
import Initiatives from './pages/Initiatives'
import Media from './pages/Media'
import Contact from './pages/Contact'
import { Work } from './pages/parliament/Work'
import { Speeches } from './pages/parliament/Speeches'
import { Bills } from './pages/parliament/Bills'
import { SignIn } from './components/auth/SignIn'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { AdminLayout } from './components/dashboard/AdminLayout'
import { Dashboard } from './pages/admin/Dashboard'
import { AboutAdmin } from './pages/admin/AboutAdmin'

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/parliament" element={<Layout><Parliament /></Layout>} />
            <Route path="/parliament/work" element={<Layout><Work /></Layout>} />
            <Route path="/parliament/speeches" element={<Layout><Speeches /></Layout>} />
            <Route path="/parliament/bills" element={<Layout><Bills /></Layout>} />
            <Route path="/constituency" element={<Layout><Constituency /></Layout>} />
            <Route path="/initiatives" element={<Layout><Initiatives /></Layout>} />
            <Route path="/media" element={<Layout><Media /></Layout>} />
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