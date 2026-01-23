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
    <div className="min-h-screen bg-black text-cyber-cyan relative">
      <GameBackground />
      {/* Floating 3D/2D Game Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {/* Floating 3D Wireframe Cubes */}
        <div className="absolute top-20 left-10 w-8 h-8 border border-cyber-cyan opacity-30 animate-cube-float" style={{ animationDelay: '0s' }}>
          <div className="absolute inset-0 border border-cyber-cyan opacity-50" style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}></div>
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 border border-cyber-purple opacity-25 animate-cube-float" style={{ animationDelay: '2s' }}>
          <div className="absolute inset-0 border border-cyber-purple opacity-50" style={{ transform: 'rotateX(60deg) rotateY(30deg)' }}></div>
        </div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 border border-cyber-blue opacity-30 animate-cube-float" style={{ animationDelay: '4s' }}>
          <div className="absolute inset-0 border border-cyber-blue opacity-50" style={{ transform: 'rotateX(30deg) rotateY(60deg)' }}></div>
        </div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 border border-cyber-cyan opacity-35 animate-cube-float" style={{ animationDelay: '1s' }}>
          <div className="absolute inset-0 border border-cyber-cyan opacity-50" style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}></div>
        </div>
        <div className="absolute top-2/3 left-2/3 w-14 h-14 border border-cyber-purple opacity-20 animate-rotate-3d" style={{ animationDelay: '3s' }}>
          <div className="absolute inset-0 border border-cyber-purple opacity-40" style={{ transform: 'rotateX(45deg)' }}></div>
          <div className="absolute inset-0 border border-cyber-cyan opacity-30" style={{ transform: 'rotateY(45deg)' }}></div>
        </div>
        
        {/* 2D Sprite-like Elements */}
        <div className="absolute top-1/2 left-1/5 w-16 h-16 border-2 border-cyber-green opacity-15 animate-float" style={{ 
          animationDelay: '2.5s',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          transform: 'rotate(45deg)'
        }}></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12 border-2 border-cyber-pink opacity-20 animate-float" style={{ 
          animationDelay: '1.5s',
          transform: 'rotate(30deg)'
        }}></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-cyber-cyan opacity-10 animate-rotate-3d" style={{ 
          animationDelay: '4.5s',
          borderRadius: '50%'
        }}></div>
      </div>
      
      <div className="relative" style={{ zIndex: 10 }}>
        <Navigation />
        <Hero />
        <About />
        <Education />
        <WorkHistory />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
