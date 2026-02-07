import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      year: '2012 ~ 2013',
      degree: 'Master of Science in Information Technology',
      university: 'The Hong Kong Polytechnic University',
      specialization: 'Computer Graphics',
      gpa: 'GPA 3.6',
      description: 'Completed Master of Science in Information Technology with specialization in Computer Graphics. Achieved Academic Excellence with GPA 3.6.',
    },
    {
      year: '2007 ~ 2011',
      degree: 'Bachelor of Science in Computing',
      university: 'The Hong Kong Polytechnic University (PolyU)',
      specialization: 'Work-Integrated Education (WIE)',
      gpa: null,
      description: 'Completed Bachelor of Science in Computing. Completed a 6-month internship at MadHead, working on prototyping mobile games using Unity.',
    }
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 text-center">
          <span className="text-metal-gold text-metal-glow">EDUCATION</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-metal-silver/20 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start md:items-center"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-metal-gold border-2 border-black rounded-full transform md:-translate-x-1/2 z-10 animate-pulse-neon"></div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-black/40 border border-metal-gold p-6 rounded-lg backdrop-blur-sm hover:border-metal-silver transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-metal-gold/10 border border-metal-gold rounded-lg">
                        <FaGraduationCap className="text-metal-gold text-xl" />
                      </div>
                      <span className="text-metal-gold font-bold text-lg">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-metal-silver mb-2">{item.degree}</h3>
                    <p className="text-metal-gold/90 mb-2 font-semibold">{item.university}</p>
                    {item.specialization && (
                      <p className="text-metal-bronze/90 mb-1 text-sm font-medium">
                        Specialization: {item.specialization}
                      </p>
                    )}
                    {item.gpa && (
                      <p className="text-metal-copper/90 mb-2 text-sm font-medium">
                        Academic Excellence: {item.gpa}
                      </p>
                    )}
                    <p className="text-metal-silver/80 leading-relaxed">{item.description}</p>
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
