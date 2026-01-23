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
            <div className="bg-black/40 border border-cyber-cyan p-6 rounded-lg backdrop-blur-sm hover:border-cyber-pink transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyber-pink mb-4">Experience</h3>
              <p className="text-cyber-cyan/80 leading-relaxed">
                With over <span className="text-cyber-green font-bold">10+ years</span> of experience in software engineering, 
                I've specialized in game development and have transitioned into the Web3 era, building immersive metaverse experiences 
                and integrating blockchain technologies into gaming projects.
              </p>
            </div>

            <div className="bg-black/40 border border-cyber-purple p-6 rounded-lg backdrop-blur-sm hover:border-cyber-cyan transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyber-purple mb-4">Game Development</h3>
              <p className="text-cyber-cyan/80 leading-relaxed mb-3">
                Extensive experience with major game engines including <span className="text-cyber-green">Unity</span>, 
                <span className="text-cyber-green"> Unreal Engine</span>, <span className="text-cyber-green">Ogre3D</span>, 
                and <span className="text-cyber-green">Godot</span>. From indie projects to large-scale MMO games, 
                I've built engaging gameplay experiences across multiple platforms.
              </p>
              <p className="text-cyber-green font-semibold">
                Strong expertise in <span className="text-cyber-cyan">3D</span> and <span className="text-cyber-cyan">2D</span> game development, 
                including 3D modeling, rendering, physics, animation systems, and 2D sprite-based gameplay.
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

            <div className="bg-black/40 border border-cyber-cyan p-6 rounded-lg backdrop-blur-sm hover:border-cyber-purple transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyber-cyan mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['C++', 'C#', 'Rust', 'Python', 'JavaScript'].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-black/60 border border-cyber-cyan text-cyber-cyan rounded-lg hover:border-cyber-pink hover:text-cyber-pink transition-all duration-300"
                  >
                    {lang}
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
