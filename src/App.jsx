import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import WorkHistory from './components/WorkHistory'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import GameBackground from './components/GameBackground'

function App() {
  return (
    <div className="min-h-screen bg-metal-dark text-slate-200 relative">
      <GameBackground />
      {/* Additional floating elements removed for a cleaner, more professional look */}
      
          <div className="relative" style={{ zIndex: 10 }}>
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <WorkHistory />
            <Education />
            <Contact />
          </div>
    </div>
  )
}

export default App
