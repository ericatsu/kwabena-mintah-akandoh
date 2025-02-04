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

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/parliament" element={<Parliament />} />
            <Route path="/constituency" element={<Constituency />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </AnimatePresence>
    </Router>
  )
}

export default App