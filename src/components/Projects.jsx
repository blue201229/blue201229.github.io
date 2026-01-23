import React, { useState, useEffect } from 'react'
import { FaExternalLinkAlt, FaGamepad, FaServer, FaVideo, FaTimes, FaPlay } from 'react-icons/fa'

const Projects = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoEmbedUrl = 'https://drive.google.com/file/d/1A6kkK1MPdfeGxyZIzHRCP5ZzLJpdQQYX/preview'

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isVideoOpen) {
        setIsVideoOpen(false)
      }
    }

    if (isVideoOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isVideoOpen])

  const projects = [
    {
      title: 'Fortzone Battle Royale',
      type: 'WebGL MMO',
      description: 'A high-stakes survival shooter battle royale game built with Unity WebGL. Features massive battlegrounds, real-time multiplayer combat, and cross-platform browser support.',
      link: 'https://www.crazygames.com/game/fortzone-battle-royale-xkd',
      icon: <FaGamepad />,
      color: 'pink',
      tags: ['Unity', 'WebGL', 'MMO', 'Battle Royale'],
      hasVideo: false,
      image: 'https://img.crazygames.com/games/fortzone-battle-royale-xkd/cover-175x175.png'
    },
    {
      title: 'Mobile MMORPG',
      type: 'Mobile Game',
      description: 'A full-featured mobile MMORPG with video documentation showcasing gameplay, character progression, and multiplayer features.',
      link: 'https://drive.google.com/file/d/1A6kkK1MPdfeGxyZIzHRCP5ZzLJpdQQYX/view?usp=drive_link',
      icon: <FaVideo />,
      color: 'cyan',
      tags: ['Mobile', 'MMORPG', 'Unity', 'Multiplayer'],
      hasVideo: true
    },
    {
      title: 'InfinityMU Private Server',
      type: 'Game Server',
      description: 'Participated in operating and customizing a private game server, managing server infrastructure, gameplay mechanics, and player experience.',
      link: 'https://www.infinitymu.net/',
      icon: <FaServer />,
      color: 'purple',
      tags: ['Server Management', 'Game Customization', 'Operations']
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
      }
    }
    return colors[color] || colors.cyan
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 text-center">
          <span className="text-cyber-purple text-cyber-glow">SHOWCASE</span>
          <span className="text-cyber-cyan text-cyber-glow"> PROJECTS</span>
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color)
            const Component = project.hasVideo ? 'div' : 'a'
            const props = project.hasVideo 
              ? { onClick: () => setIsVideoOpen(true), className: 'cursor-pointer' }
              : { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
            
            return (
              <Component
                key={index}
                {...props}
                className={`group bg-black/40 border ${colors.border} p-6 rounded-lg backdrop-blur-sm transition-all duration-300 ${colors.hover} block overflow-hidden`}
              >
                {/* Project Image/Portrait */}
                {project.image && (
                  <div className="mb-4 -mx-6 -mt-6 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                )}
                
                <div className="mb-4">
                  <div className={`inline-block ${colors.bg} ${colors.border} border p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className={`${colors.text} text-2xl`}>{project.icon}</span>
                  </div>
                  <div className={`text-xs font-bold ${colors.text} mb-2 uppercase tracking-wider`}>
                    {project.type}
                  </div>
                  <h3 className={`text-2xl font-bold ${colors.text} mb-3 text-cyber-glow`}>
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-cyber-cyan/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-xs px-2 py-1 ${colors.bg} ${colors.border} border rounded`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.hasVideo ? (
                  <div className={`flex items-center ${colors.text} font-semibold group-hover:translate-x-2 transition-transform duration-300`}>
                    <FaPlay className="mr-2" />
                    <span>Watch Video</span>
                  </div>
                ) : (
                  <div className={`flex items-center ${colors.text} font-semibold group-hover:translate-x-2 transition-transform duration-300`}>
                    <span className="mr-2">View Project</span>
                    <FaExternalLinkAlt />
                  </div>
                )}
              </Component>
            )
          })}
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <div 
              className="relative w-full max-w-5xl mx-4 bg-black/95 border-2 border-cyber-cyan rounded-lg p-4 md:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 text-cyber-cyan hover:text-cyber-pink transition-colors z-10"
              >
                <FaTimes size={24} />
              </button>
              
              <div className="pt-8">
                <h3 className="text-2xl font-bold text-cyber-cyan mb-4 text-center">
                  Mobile MMORPG - Gameplay Video
                </h3>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={videoEmbedUrl}
                    className="absolute top-0 left-0 w-full h-full rounded-lg border border-cyber-cyan"
                    allow="autoplay"
                    allowFullScreen
                    title="Mobile MMORPG Gameplay Video"
                  />
                </div>
                <p className="text-cyber-cyan/80 text-sm mt-4 text-center">
                  Click outside the video or press ESC to close
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
