import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Game Engines',
      color: 'pink',
      skills: ['Unity', 'Unreal Engine', 'Ogre3D', 'Godot']
    },
    {
      title: 'Blockchain Networks',
      color: 'cyan',
      skills: ['Ethereum', 'Solana', 'Binance Smart Chain', 'Polygon']
    },
    {
      title: 'Languages',
      color: 'purple',
      skills: ['C++', 'C#', 'Rust', 'Python', 'JavaScript']
    },
    {
      title: 'Specializations',
      color: 'green',
      skills: ['MMO Development', 'WebGL', 'Metaverse', 'Game Servers', 'Bot Development']
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      pink: {
        border: 'border-cyber-pink',
        text: 'text-cyber-pink',
        bg: 'bg-cyber-pink/10',
        hover: 'hover:border-cyber-pink'
      },
      cyan: {
        border: 'border-cyber-cyan',
        text: 'text-cyber-cyan',
        bg: 'bg-cyber-cyan/5',
        hover: 'hover:border-cyber-cyan'
      },
      purple: {
        border: 'border-cyber-purple',
        text: 'text-cyber-purple',
        bg: 'bg-cyber-purple/5',
        hover: 'hover:border-cyber-purple'
      },
      green: {
        border: 'border-cyber-green',
        text: 'text-cyber-green',
        bg: 'bg-cyber-green/5',
        hover: 'hover:border-cyber-green'
      }
    }
    return colors[color] || colors.cyan
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 text-center">
          <span className="text-cyber-cyan text-cyber-glow">SKILLS</span>
          <span className="text-cyber-pink text-cyber-glow"> & TECH</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color)
            return (
              <div
                key={index}
                className={`bg-black/40 border ${colors.border} p-6 rounded-lg backdrop-blur-sm transition-all duration-300 ${colors.hover}`}
              >
                <h3 className={`text-2xl font-bold ${colors.text} mb-6 text-cyber-glow`}>
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
