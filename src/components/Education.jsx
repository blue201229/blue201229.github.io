import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      year: '2012',
      degree: 'University Graduate',
      description: 'Completed degree program, laying the foundation for a career in software engineering and game development.',
    }
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 text-center">
          <span className="text-cyber-purple text-cyber-glow">EDUCATION</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyber-cyan/20 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start md:items-center"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyber-purple border-2 border-black rounded-full transform md:-translate-x-1/2 z-10 animate-pulse-neon"></div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-black/40 border border-cyber-purple p-6 rounded-lg backdrop-blur-sm hover:border-cyber-cyan transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-cyber-purple/10 border border-cyber-purple rounded-lg">
                        <FaGraduationCap className="text-cyber-purple text-xl" />
                      </div>
                      <span className="text-cyber-purple font-bold text-lg">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-cyber-cyan mb-2">{item.degree}</h3>
                    <p className="text-cyber-cyan/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
