import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 text-center">
          <span className="text-cyber-pink text-cyber-glow">ABOUT</span>
          <span className="text-cyber-cyan text-cyber-glow"> ME</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-black/40 border-2 border-cyber-pink p-6 rounded-lg backdrop-blur-sm hover:border-cyber-cyan transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-cyber-pink">Game Developer</h3>
                <span className="px-3 py-1 bg-cyber-pink/20 border border-cyber-pink text-cyber-pink rounded text-sm font-bold">PRIMARY ROLE</span>
              </div>
              <p className="text-cyber-cyan/80 leading-relaxed mb-3">
                With over <span className="text-cyber-green font-bold">10+ years</span> of experience, 
                <span className="text-cyber-pink font-bold"> game development is my core passion and primary expertise</span>. 
                I've built everything from indie games to large-scale MMO projects, specializing in both 
                <span className="text-cyber-green"> 3D</span> and <span className="text-cyber-green"> 2D</span> game development.
              </p>
              <p className="text-cyber-cyan/80 leading-relaxed">
                Extensive experience with <span className="text-cyber-green">Unity</span>, 
                <span className="text-cyber-green"> Unreal Engine</span>, <span className="text-cyber-green">Ogre3D</span>, 
                and <span className="text-cyber-green">Godot</span>. From gameplay mechanics to rendering pipelines, 
                I bring games to life across multiple platforms.
              </p>
            </div>

            <div className="bg-black/40 border-2 border-cyber-cyan p-6 rounded-lg backdrop-blur-sm hover:border-cyber-purple transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-cyber-cyan">🦀 Rustacean</h3>
                <span className="px-3 py-1 bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan rounded text-sm font-bold">RUST EXPERT</span>
              </div>
              <p className="text-cyber-cyan/80 leading-relaxed mb-3">
                <span className="text-cyber-cyan font-bold">Rust is my language of choice</span> for systems programming, 
                game engines, and high-performance applications. I leverage Rust's memory safety, zero-cost abstractions, 
                and concurrency features to build robust and efficient game systems.
              </p>
              <p className="text-cyber-green font-semibold">
                Building game servers, engine components, and performance-critical systems with Rust's powerful type system 
                and fearless concurrency.
              </p>
            </div>

            <div className="bg-black/40 border border-cyber-green p-6 rounded-lg backdrop-blur-sm hover:border-cyber-pink transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyber-green mb-4">Web3 & Metaverse</h3>
              <p className="text-cyber-cyan/80 leading-relaxed">
                Pioneering the integration of blockchain technologies in gaming. I've worked with 
                <span className="text-cyber-green"> Ethereum</span>, <span className="text-cyber-green">Solana</span>, 
                <span className="text-cyber-green"> Binance Smart Chain</span>, and 
                <span className="text-cyber-green"> Polygon</span> to create decentralized gaming experiences 
                and metaverse platforms.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black/40 border border-cyber-pink p-6 rounded-lg backdrop-blur-sm hover:border-cyber-cyan transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyber-pink mb-4">Open to Various Roles</h3>
              <ul className="text-cyber-cyan/80 space-y-2 list-disc list-inside">
                <li>Game Developer</li>
                <li>Game Server Developer</li>
                <li>Web3 Developer</li>
                <li>Telegram/Discord Bot Developer</li>
              </ul>
              <p className="text-cyber-green mt-4 font-semibold">
                Strong ability to learn new skills quickly
              </p>
            </div>

            <div className="bg-black/40 border-2 border-cyber-purple p-6 rounded-lg backdrop-blur-sm hover:border-cyber-pink transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-cyber-purple">🤖 AI-Powered Workflow</h3>
                <span className="px-3 py-1 bg-cyber-purple/20 border border-cyber-purple text-cyber-purple rounded text-sm font-bold">AI EXPERT</span>
              </div>
              <p className="text-cyber-cyan/80 leading-relaxed mb-3">
                <span className="text-cyber-purple font-bold">I leverage AI tools effectively</span> to boost productivity, 
                accelerate development, and solve complex problems. From code generation and refactoring to game design 
                assistance and debugging, AI is an integral part of my workflow.
              </p>
              <p className="text-cyber-green font-semibold">
                Using AI to enhance game development, automate repetitive tasks, generate creative solutions, 
                and maintain high code quality while delivering faster results.
              </p>
            </div>

            <div className="bg-black/40 border border-cyber-cyan p-6 rounded-lg backdrop-blur-sm hover:border-cyber-purple transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyber-cyan mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['C++', 'C#', 'Rust', 'Python', 'JavaScript'].map((lang) => (
                  <span
                    key={lang}
                    className={`px-4 py-2 bg-black/60 border-2 rounded-lg transition-all duration-300 ${
                      lang === 'Rust' 
                        ? 'border-cyber-cyan text-cyber-cyan font-bold hover:border-cyber-pink hover:text-cyber-pink scale-110' 
                        : 'border-cyber-cyan text-cyber-cyan hover:border-cyber-pink hover:text-cyber-pink'
                    }`}
                  >
                    {lang === 'Rust' ? '🦀 Rust' : lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-black/40 border border-cyber-yellow p-6 rounded-lg backdrop-blur-sm hover:border-cyber-green transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyber-yellow mb-4">Location</h3>
              <p className="text-cyber-cyan/80 text-lg">
                <span className="text-cyber-green font-bold">Denver, Colorado</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
