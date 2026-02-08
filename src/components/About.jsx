import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 text-center">
          <span className="text-metal-gold text-metal-glow">ABOUT</span>
          <span className="text-slate-300"> ME</span>
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-black/40 border-2 border-metal-gold p-8 rounded-lg backdrop-blur-sm">
            <p className="text-metal-silver/90 leading-relaxed text-lg">
              A dynamic software engineer with a career defined by high-impact pivots—beginning in the immersive world of <span className="text-metal-bronze font-bold">Game Development</span>, evolving through the <span className="text-metal-copper font-bold">Web3 revolution</span>, and now specializing in the frontier of <span className="text-metal-gold font-bold">Artificial Intelligence</span>. I bring a unique perspective that blends the user-centric design of gaming with the technical rigor of decentralized systems, currently dedicated to architecting intelligent, AI-driven solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-black/40 border-2 border-metal-bronze p-6 rounded-lg backdrop-blur-sm hover:border-metal-silver transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-metal-bronze">Game Development</h3>
                <span className="px-3 py-1 bg-metal-bronze/20 border border-metal-bronze text-metal-bronze rounded text-sm font-bold">PRIMARY ROLE</span>
              </div>
              <p className="text-metal-silver/80 leading-relaxed">
                Dedicated to creating engaging, high-performance environments and perfecting the "feel" of digital products through <span className="text-metal-copper font-bold">Unity</span> and <span className="text-metal-copper font-bold">Unreal Engine</span>.
              </p>
            </div>

            <div className="bg-black/40 border-2 border-metal-silver p-6 rounded-lg backdrop-blur-sm hover:border-metal-gold transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-metal-silver">🦀 Rustacean</h3>
                <span className="px-3 py-1 bg-metal-silver/20 border border-metal-silver text-metal-silver rounded text-sm font-bold">RUST EXPERT</span>
              </div>
              <p className="text-metal-silver/80 leading-relaxed mb-3">
                <span className="text-metal-silver font-bold">Rust is my language of choice</span> for systems programming, 
                game engines, and high-performance applications. I leverage Rust's memory safety, zero-cost abstractions, 
                and concurrency features to build robust and efficient game systems.
              </p>
              <p className="text-metal-copper font-semibold">
                Building game servers, engine components, and performance-critical systems with Rust's powerful type system 
                and fearless concurrency.
              </p>
            </div>

            <div className="bg-black/40 border-2 border-metal-copper p-6 rounded-lg backdrop-blur-sm hover:border-metal-bronze transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-metal-copper">Web3 Developer</h3>
                <span className="px-3 py-1 bg-metal-copper/20 border border-metal-copper text-metal-copper rounded text-sm font-bold">WEB3 EXPERT</span>
              </div>
              <p className="text-metal-silver/80 leading-relaxed">
                Web3 Engineer specializing in the evolution of gaming from off-chain to on-chain. Proficient in <span className="text-metal-copper font-bold">Solidity</span> and <span className="text-metal-copper font-bold">Rust</span>, I bridge the gap between traditional 3D development and the Metaverse, creating seamless integrations for digital assets and decentralized economies.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black/40 border border-metal-bronze p-6 rounded-lg backdrop-blur-sm hover:border-metal-silver transition-all duration-300">
              <h3 className="text-2xl font-bold text-metal-bronze mb-4">Open to Various Roles</h3>
              <ul className="text-metal-silver/80 space-y-2 list-disc list-inside">
                <li>Game Developer</li>
                <li>Rust Developer</li>
                <li>Web3 Developer</li>
                <li>Blockchain Builder</li>
                <li>AI Engineer (with understanding and vision about LLM, LCM, MCP)</li>
              </ul>
              <p className="text-metal-copper mt-4 font-semibold">
                Strong ability to learn new skills quickly
              </p>
            </div>

            <div className="bg-black/40 border-2 border-metal-gold p-6 rounded-lg backdrop-blur-sm hover:border-metal-bronze transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-metal-gold">🤖 AI-Powered Workflow</h3>
                <span className="px-3 py-1 bg-metal-gold/20 border border-metal-gold text-metal-gold rounded text-sm font-bold">AI EXPERT</span>
              </div>
              <p className="text-metal-silver/80 leading-relaxed mb-3">
                <span className="text-metal-gold font-bold">I leverage AI tools effectively</span> to boost productivity, 
                accelerate development, and solve complex problems. From code generation and refactoring to game design 
                assistance and debugging, AI is an integral part of my workflow.
              </p>
              <p className="text-metal-copper font-semibold">
                Using AI to enhance game development, automate repetitive tasks, generate creative solutions, 
                and maintain high code quality while delivering faster results.
              </p>
            </div>

            <div className="bg-black/40 border border-metal-silver p-6 rounded-lg backdrop-blur-sm hover:border-metal-gold transition-all duration-300">
              <h3 className="text-2xl font-bold text-metal-silver mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['C++', 'C#', 'Rust', 'Python', 'JavaScript', 'TypeScript'].map((lang) => (
                  <span
                    key={lang}
                    className={`px-4 py-2 bg-black/60 border-2 rounded-lg transition-all duration-300 ${
                      lang === 'Rust' 
                        ? 'border-metal-silver text-metal-silver font-bold hover:border-metal-bronze hover:text-metal-bronze scale-110' 
                        : 'border-metal-silver text-metal-silver hover:border-metal-bronze hover:text-metal-bronze'
                    }`}
                  >
                    {lang === 'Rust' ? '🦀 Rust' : lang}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
