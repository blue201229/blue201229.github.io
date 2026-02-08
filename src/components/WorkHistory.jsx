import React from 'react'
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa'

const WorkHistory = () => {
  const workHistory = [
    {
      period: '2025 - Present',
      title: 'AI & Systems Developer',
      company: 'Self-Employed',
      icon: <FaLaptopCode />,
      description: (
        <>
          <span className="text-metal-gold font-bold">AI & Systems Developer:</span> Pioneered the development of high-performance tools using Rust to ensure memory safety and computational efficiency in AI applications.<br/><br/>
          <span className="text-metal-bronze font-bold">Multimodal Research:</span> Spearheaded research into Multimodal Computing Platforms, integrating text, 3D assets, and real-time data to create immersive, intelligent environments.<br/><br/>
          <span className="text-metal-silver font-bold">LLM Optimization:</span> Implemented advanced Language Model Compression techniques to deploy sophisticated NLP models on resource-constrained Web3 and 3D platforms.<br/><br/>
          <span className="text-metal-copper font-bold">Tech Integration:</span> Architected cross-stack solutions combining Web3 protocols with Unity/Unreal Engine to build decentralized, AI-driven visual experiences.<br/><br/>
          <span className="text-metal-gold font-bold">Workflow Innovation:</span> Engineered a proprietary AI-Powered Workflow, utilizing autonomous agents and LLM-assisted coding to increase development velocity.
        </>
      ),
      color: 'cyan',
      technologies: ['AI Development', 'Rust', 'LLMs', 'NLP', 'Model Compression', 'Multimodal Computing', 'Web3', 'Unity', 'Unreal Engine', 'Autonomous Agents']
    },
    {
      period: '2021 ~ 2025',
      title: 'Freelance Web3 Developer',
      company: 'Self-Employed',
      icon: <FaLaptopCode />,
      description: (
        <>
          <span className="text-metal-gold font-bold">Blockchain Integration & Ecosystem Design:</span> Specialized in blockchain integration and ecosystem design during the Web3 expansion, delivering high-performance decentralized solutions across the <span className="text-metal-copper">Solana</span>, <span className="text-metal-copper">Ethereum</span>, and <span className="text-metal-copper">BSC</span> networks. Developed secure smart contracts and bridged the gap between traditional gaming mechanics and blockchain-enabled economies.<br/><br/>
          <span className="text-metal-bronze font-bold">Key Projects:</span> Integrated Web3 elements into Decimated (Unreal Engine survival RPG); contributed to Portals browser-based metaverse builder; developed core mechanics for CyberGalZ cyberpunk metaverse with NFT functionalities; built interoperable 2D metaverse infrastructure on Solana for SOVANA; developed YYSniper high-speed Telegram trading bot with PancakeSwap integration.<br/><br/>
          <span className="text-metal-silver font-bold">Technical Expertise:</span> Smart Contract Development (Solidity, Rust), Tokenomics Design, SDK Integration, Web3 Game Development, DEX optimization.
        </>
      ),
      color: 'cyan',
      technologies: ['Web3', 'Solidity', 'Rust', 'Smart Contracts', 'Blockchain', 'Solana', 'Ethereum', 'BSC', 'Unreal Engine', 'Metaverse', 'NFT', 'DEX']
    },
    {
      period: '2021 ~ 2023',
      title: 'Game Developer',
      company: 'Zhuxin Network (China) - Contract, Part-Time, Full Remote',
      icon: <FaBriefcase />,
      description: (
        <>
          <span className="text-metal-gold font-bold">Project: Fellow Moon (Unity):</span> Spearheaded the implementation of core gameplay mechanics and optimized C# scripts for complex combat systems in a high-fidelity stylized environment.<br/><br/>
          <span className="text-metal-bronze font-bold">Technical Problem Solving:</span> Resolved critical performance bottlenecks during the 2022-2023 development phase, ensuring stable frame rates across mid-to-high-range mobile devices.<br/><br/>
          <span className="text-metal-silver font-bold">Cross-Functional Collaboration:</span> Partnered with artists and designers to bridge technical constraints with creative vision using custom Unity Editor tools.
        </>
      ),
      color: 'purple',
      technologies: ['Game Development', 'Unity', 'C#', 'Performance Optimization', 'Unity Editor Tools']
    },
    {
      period: '2017 ~ 2021',
      title: 'Unity Game Developer',
      company: 'Zlongame (China)',
      icon: <FaBriefcase />,
      description: (
        <>
          <span className="text-metal-gold font-bold">Project: Goddess of Genesis (Unity):</span> Key developer for this top-grossing mobile RPG; engineered robust skill systems and turn-based combat logic.<br/><br/>
          <span className="text-metal-bronze font-bold">Live-Ops Excellence:</span> Maintained and scaled technical solutions during the game's peak global rollout, contributing to its success across East Asian and SEA markets.<br/><br/>
          <span className="text-metal-silver font-bold">Architecture:</span> Developed modular UI frameworks and data-driven character systems to support rapid content updates and localized releases.
        </>
      ),
      color: 'purple',
      technologies: ['Game Development', 'Unity', 'Mobile', 'RPG', 'C#', 'Live-Ops', 'UI Frameworks']
    },
    {
      period: '2015 ~ 2017',
      title: 'Unity Game Developer',
      company: 'Element Cell Game Limited',
      icon: <FaBriefcase />,
      description: (
        <>
          <span className="text-metal-gold font-bold">Finger-Endurance Engineering:</span> Masterminded the development of "Tap Clash of Heavens," a title dedicated to testing the structural integrity of player smartphone screens through high-intensity idle-clicker mechanics.<br/><br/>
          <span className="text-metal-bronze font-bold">The Architect of "The Click":</span> Leveraged Unity and C# to transform simple finger spasms into epic celestial combat, ensuring every tap felt punchy, rewarding, and borderline addictive.<br/><br/>
          <span className="text-metal-silver font-bold">Optimizing Total Chaos:</span> Finely tuned game performance so that even when the screen was drowning in thousands of gold coins and damage numbers, the frame rate stayed as smooth as a freshly swiped credit card.<br/><br/>
          <span className="text-metal-copper font-bold">Asset Wrangling:</span> Collaborated with designers to ensure our visual effects were flashy enough to distract players from their developing carpal tunnel syndrome.
        </>
      ),
      color: 'purple',
      technologies: ['Game Development', 'Unity', 'Mobile', 'Idle-Clicker', 'C#', 'Performance Optimization', 'Visual Effects']
    },
    {
      period: '2013 ~ 2015',
      title: 'Game Developer',
      company: 'SeaSun Games',
      icon: <FaBriefcase />,
      description: (
        <>
          <span className="text-metal-gold font-bold">Full-Cycle Development - Relics of Gods:</span> Led end-to-end development from initial concept and pre-production through prototyping, production, testing, and final release. Actively participated in every phase of the game's lifecycle, from early design discussions to post-launch support, ensuring seamless integration of gameplay systems, art assets, and technical infrastructure.<br/><br/>
          <span className="text-metal-bronze font-bold">Engine Integration:</span> Developed core gameplay features using a proprietary in-house engine, ensuring performance optimization and technical stability.<br/><br/>
          <span className="text-metal-silver font-bold">Rapid Prototyping:</span> Spearheaded cross-platform prototyping initiatives using Unity and Unreal Engine to evaluate gameplay mechanics and technical feasibility.<br/><br/>
          <span className="text-metal-copper font-bold">Engine Migration:</span> Played a key role in the technical transition and conversion of the project to Unreal Engine, maintaining feature parity and enhancing visual fidelity.
        </>
      ),
      color: 'purple',
      technologies: ['Game Development', 'Unreal Engine', 'Unity', 'C++', 'Proprietary Engine', 'Engine Migration', 'Full-Cycle Development']
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        border: 'border-metal-silver',
        text: 'text-metal-silver',
        bg: 'bg-metal-silver/5',
        iconBg: 'bg-metal-silver/10',
      },
      purple: {
        border: 'border-metal-gold',
        text: 'text-metal-gold',
        bg: 'bg-metal-gold/5',
        iconBg: 'bg-metal-gold/10',
      }
    }
    return colors[color] || colors.cyan
  }

  return (
    <section id="work-history" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 text-center">
          <span className="text-metal-silver text-metal-glow">WORK</span>
          <span className="text-metal-bronze text-metal-glow"> HISTORY</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-metal-silver/20 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {workHistory.map((item, index) => {
              const colors = getColorClasses(item.color)
              return (
                <div
                  key={index}
                  className="relative flex items-start md:items-center"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 ${colors.bg} ${colors.border} border-2 border-black rounded-full transform md:-translate-x-1/2 z-10 animate-pulse-neon`}></div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
                    <div className={`bg-black/40 border ${colors.border} p-6 rounded-lg backdrop-blur-sm hover:border-metal-bronze transition-all duration-300`}>
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className={`p-2 ${colors.iconBg} border ${colors.border} rounded-lg`}>
                          <span className={colors.text}>{item.icon}</span>
                        </div>
                        <span className={`${colors.text} font-bold text-sm`}>{item.period}</span>
                      </div>
                      <h3 className={`text-2xl font-bold ${colors.text} mb-1`}>{item.title}</h3>
                      <p className="text-metal-bronze/80 mb-3 font-semibold">{item.company}</p>
                      <p className="text-metal-silver/80 leading-relaxed mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`text-xs px-3 py-1 ${colors.bg} border ${colors.border} rounded-full`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkHistory
