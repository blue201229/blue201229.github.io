import React from 'react'
import { FaGithub, FaDiscord, FaTelegram } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle game-themed background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyber-cyan opacity-5 animate-rotate-3d"></div>
        <div className="absolute top-40 right-10 w-24 h-24 border border-cyber-purple opacity-5 animate-cube-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-28 h-28 border border-cyber-blue opacity-5 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4">
            <span className="block text-cyber-pink text-cyber-glow animate-glow">RAINER</span>
            <span className="block text-cyber-cyan text-cyber-glow animate-glow" style={{ animationDelay: '0.5s' }}>MOLTABO</span>
          </h1>
        </div>
        
        <div className="mb-8">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyber-pink font-black mb-3 text-cyber-glow">
            GAME DEVELOPER
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-cyber-cyan font-bold mb-3">
            Rustacean • AI-Powered Workflow
          </p>
          <p className="text-base sm:text-lg text-cyber-green">
            10+ Years of Experience
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <span className="px-4 py-2 bg-black/60 border-2 border-cyber-pink text-cyber-pink rounded-lg font-bold text-sm sm:text-base">
              🎮 Game Developer
            </span>
            <span className="px-4 py-2 bg-black/60 border-2 border-cyber-cyan text-cyber-cyan rounded-lg font-bold text-sm sm:text-base">
              🦀 Rustacean
            </span>
            <span className="px-4 py-2 bg-black/60 border-2 border-cyber-purple text-cyber-purple rounded-lg font-bold text-sm sm:text-base">
              🤖 AI-Enhanced
            </span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-cyber-cyan/80 max-w-3xl mx-auto leading-relaxed">
            Specializing in game development with Rust expertise and leveraging AI to accelerate productivity and innovation
          </p>
          <p className="text-sm sm:text-base text-cyber-pink/80 mt-2">
            Denver, Colorado
          </p>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://github.com/blue201229"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-cyber-pink rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black border border-cyber-pink rounded-full p-4 hover:scale-110 transition-transform duration-300">
              <FaGithub className="text-cyber-pink text-2xl" />
            </div>
          </a>
          
          <a
            href="https://discord.com/users/blue_201229"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-cyber-cyan rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black border border-cyber-cyan rounded-full p-4 hover:scale-110 transition-transform duration-300">
              <FaDiscord className="text-cyber-cyan text-2xl" />
            </div>
          </a>
          
          <a
            href="https://t.me/fan_1229"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-cyber-purple rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black border border-cyber-purple rounded-full p-4 hover:scale-110 transition-transform duration-300">
              <FaTelegram className="text-cyber-purple text-2xl" />
            </div>
          </a>
        </div>

        <div className="mt-12 animate-bounce">
          <a href="#about" className="text-cyber-cyan hover:text-cyber-pink transition-colors">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll Down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
