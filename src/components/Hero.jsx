import React from 'react'
import { FaGithub, FaDiscord, FaTelegram } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle game-themed background elements (very low-key) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-metal-silver opacity-5"></div>
        <div className="absolute top-40 right-10 w-24 h-24 border border-metal-gold opacity-5"></div>
        <div className="absolute bottom-20 left-1/2 w-28 h-28 border border-metal-deepblue opacity-5"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
            <span className="block text-metal-bronze text-metal-glow">RAINER</span>
            <span className="block text-metal-silver text-metal-glow">MOLTABO</span>
          </h1>
        </div>
        
        <div className="mb-8">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-metal-bronze font-black mb-3">
            GAME DEVELOPER
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-metal-silver font-bold mb-3">
            Rustacean • AI-Powered Workflow
          </p>
          <p className="text-base sm:text-lg text-metal-copper">
            10+ Years of Experience
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <span className="px-4 py-2 bg-black/60 border border-metal-bronze text-metal-bronze rounded-lg font-medium text-sm sm:text-base">
              🎮 Game Developer
            </span>
            <span className="px-4 py-2 bg-black/60 border border-metal-silver text-metal-silver rounded-lg font-medium text-sm sm:text-base">
              🦀 Rustacean
            </span>
            <span className="px-4 py-2 bg-black/60 border border-metal-gold text-metal-gold rounded-lg font-medium text-sm sm:text-base">
              🤖 AI-Enhanced
            </span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-metal-silver/80 max-w-3xl mx-auto leading-relaxed">
            Specializing in game development with Rust expertise and leveraging AI to accelerate productivity and innovation
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-black/40 border border-metal-gold/50 rounded-lg px-4 py-3">
            <p className="text-2xl sm:text-3xl font-extrabold text-metal-gold">10+</p>
            <p className="text-xs sm:text-sm text-slate-300/80 uppercase tracking-wide mt-1">
              Years in Game Development
            </p>
          </div>
          <div className="bg-black/40 border border-metal-gold/30 rounded-lg px-4 py-3">
            <p className="text-2xl sm:text-3xl font-extrabold text-metal-gold">3</p>
            <p className="text-xs sm:text-sm text-slate-300/80 uppercase tracking-wide mt-1">
              Major MMO / Server Projects
            </p>
          </div>
          <div className="bg-black/40 border border-metal-gold/30 rounded-lg px-4 py-3">
            <p className="text-2xl sm:text-3xl font-extrabold text-metal-gold">4+</p>
            <p className="text-xs sm:text-sm text-slate-300/80 uppercase tracking-wide mt-1">
              Engines & Web3 Stacks
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://github.com/blue201229"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="relative bg-black border border-metal-bronze/70 rounded-full p-3 hover:bg-metal-bronze/10 transition-colors duration-200">
              <FaGithub className="text-metal-bronze text-2xl" />
            </div>
          </a>
          
          <a
            href="https://discord.com/users/blue_201229"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="relative bg-black border border-metal-silver/70 rounded-full p-3 hover:bg-metal-silver/10 transition-colors duration-200">
              <FaDiscord className="text-metal-silver text-2xl" />
            </div>
          </a>
          
          <a
            href="https://t.me/fan_1229"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="relative bg-black border border-metal-gold/70 rounded-full p-3 hover:bg-metal-gold/10 transition-colors duration-200">
              <FaTelegram className="text-metal-gold text-2xl" />
            </div>
          </a>
        </div>

        <div className="mt-12">
          <a href="#about" className="text-metal-silver hover:text-metal-bronze transition-colors">
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
