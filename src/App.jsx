import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Highlights from './components/Highlights'
import Menu from './components/Menu'
import Location from './components/Location'
import MapSection from './components/MapSection'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'
import './styles/App.css'

export default function App() {
  useScrollReveal()

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Highlights />
        <Menu />
        <Location />
        <MapSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
