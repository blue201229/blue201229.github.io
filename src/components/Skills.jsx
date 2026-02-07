import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Game Engines',
      color: 'bronze',
      skills: ['Unity', 'Unreal Engine', 'Pixi.js']
    },
    {
      title: 'Blockchain Networks',
      color: 'silver',
      skills: ['Ethereum', 'Solana', 'Binance Smart Chain', 'Polygon']
    },
    {
      title: 'Languages',
      color: 'gold',
      skills: ['🦀 Rust (Expert)', 'C++', 'C#', 'Python', 'JavaScript', 'TypeScript']
    },
    {
      title: 'AI & Productivity',
      color: 'silver',
      skills: ['AI-Assisted Development', 'Code Generation', 'Automation', 'AI Tools Integration']
    },
    {
      title: 'Specializations',
      color: 'copper',
      skills: ['MMO Development', 'WebGL', 'Metaverse', 'Game Servers', 'Bot Development']
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      bronze: {
        border: 'border-metal-bronze',
        text: 'text-metal-bronze',
        bg: 'bg-metal-bronze/10',
        hover: 'hover:border-metal-bronze'
      },
      silver: {
        border: 'border-metal-silver',
        text: 'text-metal-silver',
        bg: 'bg-metal-silver/5',
        hover: 'hover:border-metal-silver'
      },
      gold: {
        border: 'border-metal-gold',
        text: 'text-metal-gold',
        bg: 'bg-metal-gold/5',
        hover: 'hover:border-metal-gold'
      },
      copper: {
        border: 'border-metal-copper',
        text: 'text-metal-copper',
        bg: 'bg-metal-copper/5',
        hover: 'hover:border-metal-copper'
      }
    }
    return colors[color] || colors.silver
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 text-center">
          <span className="text-metal-gold text-metal-glow">SKILLS</span>
          <span className="text-slate-300"> & TECH</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color)
            return (
              <div
                key={index}
                className={`bg-black/40 border ${colors.border} p-6 rounded-lg backdrop-blur-sm transition-all duration-300 ${colors.hover}`}
              >
                <h3 className={`text-2xl font-bold ${colors.text} mb-6 text-metal-glow`}>
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`${colors.bg} border ${colors.border} p-3 rounded-lg text-center transition-all duration-300 hover:scale-105`}
                    >
                      <span className={`${colors.text} font-semibold`}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
