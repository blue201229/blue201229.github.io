import React from 'react'
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa'

const WorkHistory = () => {
  const workHistory = [
    {
      period: '2024 - Present',
      title: 'Independent Game Architect & Consultant',
      company: 'Self-Employed',
      icon: <FaLaptopCode />,
      description: (
        <>
          <span className="text-metal-bronze font-bold">Rust-Powered Systems:</span> Engineering high-performance game backends using Rust, focusing on memory safety and concurrency for Web3 and Metaverse infrastructures.<br/><br/>
          <span className="text-metal-gold font-bold">AI-Driven Pipelines:</span> Architecting proprietary workflows using Generative AI (LLMs/Stable Diffusion) to reduce asset production cycles by 40% and accelerate rapid prototyping in Unity and Unreal Engine 5.<br/><br/>
          <span className="text-metal-silver font-bold">Web3 Integration:</span> Designing decentralized gaming economies and smart contract interactions for next-generation virtual environments.
        </>
      ),
      color: 'cyan',
      technologies: ['Game Development', 'Rust', 'Unity', 'Unreal Engine 5', 'AI Tools', 'Web3', 'LLMs']
    },
    {
      period: '2021 ~ 2023',
      title: 'Game Developer',
      company: 'Zhuxin Network (China)',
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
      period: '2013 ~ 2015',
      title: 'Game Developer',
      company: 'SeaSun Games',
      icon: <FaBriefcase />,
      description: (
        <>
          <span className="text-metal-gold font-bold">Full-Cycle Development:</span> Contributed to the end-to-end development lifecycle of the title "Relics of Gods," participating from initial concept through to final release.<br/><br/>
          <span className="text-metal-bronze font-bold">Engine Integration:</span> Developed core gameplay features using a proprietary in-house engine, ensuring performance optimization and technical stability.<br/><br/>
          <span className="text-metal-silver font-bold">Rapid Prototyping:</span> Spearheaded cross-platform prototyping initiatives using Unity and Unreal Engine to evaluate gameplay mechanics and technical feasibility.<br/><br/>
          <span className="text-metal-copper font-bold">Engine Migration:</span> Played a key role in the technical transition and conversion of the project to Unreal Engine, maintaining feature parity and enhancing visual fidelity.
        </>
      ),
      color: 'purple',
      technologies: ['Game Development', 'Unreal Engine', 'Unity', 'C++', 'Proprietary Engine', 'Engine Migration']
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
