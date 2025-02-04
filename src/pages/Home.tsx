import Achievements from '../components/Achievements'
import Career from '../components/Career'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import News from '../components/News'
import StatsSection from '../components/StatsSection'
import Contact from '../components/Contact'
import InitiativesSection from '../components/InitiativesSection'

function App() {
    return (
        <div className="pt-16">
            <Hero />
            <Career />
            <Achievements />
            <StatsSection />
            <InitiativesSection />
            <News />
            <Gallery />
            <Contact />
        </div>
    )
}

export default App
