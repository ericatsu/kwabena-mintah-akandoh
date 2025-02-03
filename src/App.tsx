import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Career from './components/Career'
import Achievements from './components/Achievements'
import News from './components/News'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Career />
        <Achievements />
        <News />
        <Gallery />
        <Contact />
      </main>
      <footer className="bg-green-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p>Parliament House, Accra</p>
              <p>contact@akandoh.gov.gh</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-300">Twitter</a>
                <a href="#" className="hover:text-green-300">Facebook</a>
                <a href="#" className="hover:text-green-300">Instagram</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-green-300">About</a></li>
                <li><a href="#news" className="hover:text-green-300">News</a></li>
                <li><a href="#contact" className="hover:text-green-300">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-green-700">
            <p>&copy; {new Date().getFullYear()} Hon. Kwabena Mintah Akandoh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
