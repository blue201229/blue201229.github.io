import React, { useRef, useEffect, useState } from 'react'
import { FaExternalLinkAlt, FaGamepad, FaServer, FaVideo, FaChevronLeft, FaChevronRight, FaTimes, FaPlay } from 'react-icons/fa'

const Projects = () => {
  const slideshowRef = useRef(null)
  const [isSlideshowVisible, setIsSlideshowVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isSlideshowVisible) {
            setIsSlideshowVisible(true)
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (slideshowRef.current) {
      observer.observe(slideshowRef.current)
    }

    return () => {
      if (slideshowRef.current) {
        observer.unobserve(slideshowRef.current)
      }
    }
  }, [isSlideshowVisible])

  // Auto-advance slideshow when visible
  useEffect(() => {
    if (!isSlideshowVisible || isVideoModalOpen) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [isSlideshowVisible, isVideoModalOpen])

  // Handle ESC key to close video modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isVideoModalOpen) {
        setIsVideoModalOpen(false)
      }
    }

    if (isVideoModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isVideoModalOpen])

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
      link2: 'https://drive.google.com/file/d/1A6kkK1MPdfeGxyZIzHRCP5ZzLJpdQQYX/preview?autoplay=1&mute=1&controls=1',
      icon: <FaVideo />,
      color: 'cyan',
      tags: ['Mobile', 'MMORPG', 'Unity', 'Multiplayer'],
      hasSlideshow: true,
      slides: [
        '/login.png',
        '/character-selection.png',
        '/hall.png',
        '/battle.png'
      ],
      videoUrl: 'https://drive.google.com/file/d/1A6kkK1MPdfeGxyZIzHRCP5ZzLJpdQQYX/preview'
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
            const Component = project.hasSlideshow ? 'div' : 'a'
            const props = project.hasSlideshow 
              ? {}
              : { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
            
            return (
              <Component
                key={index}
                {...props}
                className={`group bg-black/40 border ${colors.border} p-6 rounded-lg backdrop-blur-sm transition-all duration-300 ${colors.hover} block overflow-hidden`}
              >
                {/* Slideshow or Image */}
                {project.hasSlideshow ? (
                  <div 
                    ref={slideshowRef}
                    className="mb-4 -mx-6 -mt-6 overflow-hidden relative bg-black/50 cursor-pointer group/slideshow"
                    style={{ height: '300px' }}
                    onClick={() => setIsVideoModalOpen(true)}
                  >
                    {isSlideshowVisible && project.slides ? (
                      <>
                        <div className="relative w-full h-full">
                          {project.slides.map((slide, slideIndex) => (
                            <img
                              key={slideIndex}
                              src={slide}
                              alt={`${project.title} - Slide ${slideIndex + 1}`}
                              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                slideIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                              }`}
                              onError={(e) => {
                                e.target.style.display = 'none'
                              }}
                            />
                          ))}
                        </div>
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/slideshow:bg-black/30 transition-all duration-300 z-20">
                          <div className="opacity-0 group-hover/slideshow:opacity-100 transition-opacity duration-300">
                            <div className="bg-cyber-cyan/80 hover:bg-cyber-cyan rounded-full p-4 border-2 border-cyber-cyan">
                              <FaPlay className="text-2xl text-black ml-1" />
                            </div>
                            <p className="text-cyber-cyan text-sm mt-2 text-center font-semibold">Click to watch video</p>
                          </div>
                        </div>
                        {/* Slide indicators */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-10" onClick={(e) => e.stopPropagation()}>
                          {project.slides.map((_, slideIndex) => (
                            <button
                              key={slideIndex}
                              onClick={() => setCurrentSlide(slideIndex)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                slideIndex === currentSlide 
                                  ? 'bg-cyber-cyan w-6' 
                                  : 'bg-cyber-cyan/40 hover:bg-cyber-cyan/60'
                              }`}
                              aria-label={`Go to slide ${slideIndex + 1}`}
                            />
                          ))}
                        </div>
                        {/* Navigation arrows */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentSlide((prev) => (prev - 1 + project.slides.length) % project.slides.length)
                          }}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-cyber-cyan p-2 rounded-full transition-all duration-300 z-10"
                          aria-label="Previous slide"
                        >
                          <FaChevronLeft />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentSlide((prev) => (prev + 1) % project.slides.length)
                          }}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-cyber-cyan p-2 rounded-full transition-all duration-300 z-10"
                          aria-label="Next slide"
                        >
                          <FaChevronRight />
                        </button>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="text-cyber-cyan text-center">
                          <FaVideo className="text-4xl mb-2 mx-auto opacity-50 animate-pulse" />
                          <p className="text-sm opacity-70">Loading slideshow...</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : project.image ? (
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
                ) : null}
                
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

                {!project.hasSlideshow && (
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
        {isVideoModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <div 
              className="relative w-full max-w-5xl mx-4 bg-black/95 border-2 border-cyber-cyan rounded-lg p-4 md:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 text-cyber-cyan hover:text-cyber-pink transition-colors z-10"
              >
                <FaTimes size={24} />
              </button>
              
              <div className="pt-8">
                <h3 className="text-2xl font-bold text-cyber-cyan mb-4 text-center">
                  Mobile MMORPG - Gameplay Video
                </h3>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-lg border border-cyber-cyan p-8">
                    <FaVideo className="text-6xl text-cyber-cyan mb-4 opacity-50" />
                    <p className="text-cyber-cyan text-lg mb-4 text-center">
                      Google Drive videos cannot be embedded due to security restrictions
                    </p>
                    <a
                      href="https://drive.google.com/file/d/1A6kkK1MPdfeGxyZIzHRCP5ZzLJpdQQYX/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-cyber-cyan/20 border-2 border-cyber-cyan text-cyber-cyan rounded-lg hover:bg-cyber-cyan/30 transition-all duration-300 font-semibold flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      Watch Video on Google Drive
                    </a>
                  </div>
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
