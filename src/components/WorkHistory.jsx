import React from 'react'
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa'

const WorkHistory = () => {
  const workHistory = [
    {
      period: '2022 - Present',
      title: 'Game Developer (Freelancer)',
      company: 'Independent',
      icon: <FaLaptopCode />,
      description: (
        <>
          Working as a freelance <span className="text-cyber-pink font-bold">Game Developer</span>, specializing in game development with <span className="text-cyber-cyan font-bold">Rust</span> expertise and <span className="text-cyber-purple font-bold">AI-powered workflows</span>. Building innovative gaming experiences, Web3 integration, and metaverse projects. Leveraging AI tools to accelerate development and deliver high-quality games faster.
        </>
      ),
      color: 'cyan',
      technologies: ['Game Development', 'Rust', 'Unity', 'Unreal', 'AI Tools', 'Web3']
    },
    {
      period: 'Before 2022',
      title: 'Game Developer',
      company: 'Indie Game Company',
      icon: <FaBriefcase />,
      description: (
        <>
          Developed games at an indie game company, working on various <span className="text-cyber-green font-bold">2D and 3D game projects</span>. Contributed to game design, programming, and technical implementation using multiple game engines. Built core gameplay systems and engine components.
        </>
      ),
      color: 'purple',
      technologies: ['Game Development', 'Unity', 'Unreal Engine', 'C++', 'C#', 'Game Design']
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        border: 'border-cyber-cyan',
        text: 'text-cyber-cyan',
        bg: 'bg-cyber-cyan/5',
        iconBg: 'bg-cyber-cyan/10',
      },
      purple: {
        border: 'border-cyber-purple',
        text: 'text-cyber-purple',
        bg: 'bg-cyber-purple/5',
        iconBg: 'bg-cyber-purple/10',
      }
    }
    return colors[color] || colors.cyan
  }

  return (
    <section id="work-history" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 text-center">
          <span className="text-cyber-cyan text-cyber-glow">WORK</span>
          <span className="text-cyber-pink text-cyber-glow"> HISTORY</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyber-cyan/20 transform md:-translate-x-1/2"></div>

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
                    <div className={`bg-black/40 border ${colors.border} p-6 rounded-lg backdrop-blur-sm hover:border-cyber-pink transition-all duration-300`}>
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className={`p-2 ${colors.iconBg} border ${colors.border} rounded-lg`}>
                          <span className={colors.text}>{item.icon}</span>
                        </div>
                        <span className={`${colors.text} font-bold text-sm`}>{item.period}</span>
                      </div>
                      <h3 className={`text-2xl font-bold ${colors.text} mb-1`}>{item.title}</h3>
                      <p className="text-cyber-pink/80 mb-3 font-semibold">{item.company}</p>
                      <p className="text-cyber-cyan/80 leading-relaxed mb-4">{item.description}</p>
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
