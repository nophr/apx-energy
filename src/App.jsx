import { useRef } from 'react'
import { useScrollAnimations } from './lib/useScrollAnimations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SanheStats from './components/SanheStats'
import BusinessPillars from './components/BusinessPillars'
import EPC from './components/EPC'
import Projects from './components/Projects'
import Solutions from './components/Solutions'
import WhyAPX from './components/WhyAPX'
import Markets from './components/Markets'
import Clients from './components/Clients'
import Contact from './components/Contact'

export default function App() {
  const root = useRef(null)
  useScrollAnimations(root)

  return (
    <div className="min-h-screen" ref={root}>
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SanheStats />
        <BusinessPillars />
        <EPC />
        <Projects />
        <Solutions />
        <WhyAPX />
        <Markets />
        <Clients />
        <Contact />
      </main>
    </div>
  )
}
