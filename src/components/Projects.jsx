import React, { useRef, useEffect, useState, useMemo } from 'react'
import { FaExternalLinkAlt, FaGamepad, FaServer, FaVideo, FaChevronLeft, FaChevronRight, FaTimes, FaPlay } from 'react-icons/fa'

const Projects = () => {
  const slideshowRefs = useRef({})
  const [slideshowVisible, setSlideshowVisible] = useState({})
  const [currentSlides, setCurrentSlides] = useState({})
  const [videoModal, setVideoModal] = useState({ open: false, project: null })
  const [activeField, setActiveField] = useState('All')

  const projects = useMemo(() => [
    {
      title: 'Military FPS',
      type: 'First-Person Shooter',
      description: 'An intense military first-person shooter game built with Unity, featuring realistic combat mechanics, tactical gameplay, and immersive battlefield environments. Experience authentic military action with advanced weapon systems and strategic combat.',
      link: 'https://drive.google.com/file/d/1oiGMjs5NNB3fu8tLhysb8QE56sKadOJW/view?usp=sharing',
      icon: <FaGamepad />,
      color: 'bronze',
      tags: ['Unity', 'FPS', 'Military', '3D'],
      hasSlideshow: true,
      slides: [
        '/fps/Screenshot 2026-02-07 124514.png',
        '/fps/Screenshot 2026-02-07 125143.png',
        '/fps/Screenshot 2026-02-07 130001.png'
      ],
      videoUrl: 'https://drive.google.com/file/d/1oiGMjs5NNB3fu8tLhysb8QE56sKadOJW/view?usp=sharing',
      fields: ['Game', 'Side-Project']
    },
    {
      title: 'Fellow-Moon',
      type: 'Turn-Based Game',
      description: 'Fellow Moon is an exploration and strategy game that incorporates RPG mechanics, offering exciting battles within a captivating storyline.',
      link: null,
      icon: <FaGamepad />,
      color: 'gold',
      tags: ['Unity', 'Turn-Based', 'Strategy'],
      hasSlideshow: true,
      slides: [
        '/fellow-moon/1.webp',
        '/fellow-moon/2.webp',
        '/fellow-moon/3.webp',
        '/fellow-moon/4.webp',
        '/fellow-moon/5.webp'
      ],
      videoUrl: null,
      fields: ['Game', 'Professional']
    },
    {
      title: 'Tianzhijin',
      type: 'Mobile Game',
      description: 'A full-featured mobile MMORPG with video documentation showcasing gameplay, character progression, and multiplayer features.',
      link: 'https://drive.google.com/file/d/1A6kkK1MPdfeGxyZIzHRCP5ZzLJpdQQYX/view?usp=drive_link',
      link2: 'https://drive.google.com/file/d/1A6kkK1MPdfeGxyZIzHRCP5ZzLJpdQQYX/preview?autoplay=1&mute=1&controls=1',
      icon: <FaVideo />,
      color: 'silver',
      tags: ['Mobile', 'MMORPG', 'Unity', 'Multiplayer'],
      hasSlideshow: true,
      slides: [
        '/login.png',
        '/character-selection.png',
        '/hall.png',
        '/battle.png'
      ],
      videoUrl: 'https://drive.google.com/file/d/1A6kkK1MPdfeGxyZIzHRCP5ZzLJpdQQYX/view?usp=drive_link',
      fields: ['Game', 'Outsourcing']
    },
    {
      title: 'Survival Project',
      type: 'Survival Game',
      description: 'An immersive survival game built with Unity, featuring first-person gameplay, dynamic environments, and challenging survival mechanics. Explore desolate landscapes, manage resources, and survive against the elements.',
      link: 'https://drive.google.com/file/d/1s8JlVIr7fWQpaOrZKwyMIVrGvbmKqKjH/view?usp=sharing',
      icon: <FaGamepad />,
      color: 'copper',
      tags: ['Unity', 'Survival', 'First-Person', '3D'],
      hasSlideshow: true,
      slides: [
        '/survival/Screenshot 2026-02-07 044225.png',
        '/survival/Screenshot 2026-02-07 044422.png',
        '/survival/Screenshot 2026-02-07 044616.png'
      ],
      videoUrl: 'https://drive.google.com/file/d/1s8JlVIr7fWQpaOrZKwyMIVrGvbmKqKjH/view?usp=sharing',
      fields: ['Game', 'Side-Project']
    },
    {
      title: 'Relics of Gods',
      type: 'Mobile MOBA',
      description: 'Relics of Gods is a 3v3 turn-based strategy MOBA for mobile, featuring Western high fantasy themes where players control three heroes to secure divine relics, combat Chaos, and battle other "Scions". The game, which released in 2015, focuses on team-based, timed, and fair-to-play competitive combat.',
      link: null,
      icon: <FaGamepad />,
      color: 'gold',
      tags: ['Unreal Engine', 'Mobile', 'MOBA', 'Turn-Based', 'Strategy'],
      hasSlideshow: true,
      slides: [
        '/relicofgods/1.jpg'
      ],
      videoUrl: null,
      fields: ['Game', 'Professional']
    },
    {
      title: 'Goddess of Genesis',
      type: 'Mobile RPG',
      description: 'Goddess of Genesis is a 3D turn-based mobile RPG featuring anime-style graphics and hero-collector mechanics. It focuses on summoning, upgrading legendary figures using tarot cards, and engaging in tactical combat.',
      link: 'https://www.zlongame.com/',
      icon: <FaGamepad />,
      color: 'bronze',
      tags: ['Unity', 'Mobile', 'RPG', 'Turn-Based', '3D'],
      hasSlideshow: true,
      slides: [
        '/goddess/1.jpg',
        '/goddess/2.jpg',
        '/goddess/3.jpg'
      ],
      videoUrl: null,
      fields: ['Game', 'Professional']
    }
  ], [])

  const fields = ['All', 'Game', 'Web3', 'AI', 'Professional', 'Side-Project', 'Outsourcing']
  
  const filteredProjects = useMemo(() => {
    if (activeField === 'All') {
      return projects
    }
    return projects.filter(project => project.fields && project.fields.includes(activeField))
  }, [projects, activeField])

  // Initialize slideshow states
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const projectIndex = entry.target.dataset.projectIndex
          if (entry.isIntersecting && !slideshowVisible[projectIndex]) {
            setSlideshowVisible((prev) => ({ ...prev, [projectIndex]: true }))
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    // Observe all slideshow refs
    Object.values(slideshowRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      Object.values(slideshowRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  // Auto-advance slideshows when visible
  useEffect(() => {
    const intervals = {}
    
    Object.keys(slideshowVisible).forEach((projectIndex) => {
      if (slideshowVisible[projectIndex] && !videoModal.open) {
        const project = projects.find((_, idx) => idx.toString() === projectIndex)
        if (project && project.hasSlideshow && project.slides) {
          intervals[projectIndex] = setInterval(() => {
            setCurrentSlides((prev) => {
              const current = prev[projectIndex] || 0
              return { ...prev, [projectIndex]: (current + 1) % project.slides.length }
            })
          }, 3000)
        }
      }
    })

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval))
    }
  }, [slideshowVisible, videoModal.open, projects])

  // Handle ESC key to close video modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && videoModal.open) {
        setVideoModal({ open: false, project: null })
      }
    }

    if (videoModal.open) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [videoModal.open])

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 text-center">
          <span className="text-metal-gold text-metal-glow">SHOWCASE</span>
          <span className="text-metal-silver text-metal-glow"> PROJECTS</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {fields.map((field) => (
            <button
              key={field}
              onClick={() => setActiveField(field)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeField === field
                  ? 'bg-metal-gold/20 border-2 border-metal-gold text-metal-gold'
                  : 'bg-black/40 border border-metal-silver/30 text-metal-silver/80 hover:border-metal-gold hover:text-metal-gold'
              }`}
            >
              {field}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
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
                    ref={(el) => {
                      if (el) slideshowRefs.current[index] = el
                    }}
                    data-project-index={index}
                    className={`mb-4 -mx-6 -mt-6 overflow-hidden relative bg-black/50 group/slideshow ${project.videoUrl ? 'cursor-pointer' : ''}`}
                    style={{ height: '300px' }}
                    onClick={() => project.videoUrl && setVideoModal({ open: true, project })}
                  >
                    {slideshowVisible[index] && project.slides ? (
                      <>
                        <div className="relative w-full h-full">
                          {project.slides.map((slide, slideIndex) => (
                            <img
                              key={slideIndex}
                              src={slide}
                              alt={`${project.title} - Slide ${slideIndex + 1}`}
                              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                slideIndex === (currentSlides[index] || 0) ? 'opacity-100' : 'opacity-0'
                              }`}
                              onError={(e) => {
                                e.target.style.display = 'none'
                              }}
                            />
                          ))}
                        </div>
                        {/* Play button overlay - only show if videoUrl exists */}
                        {project.videoUrl && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/slideshow:bg-black/30 transition-all duration-300 z-20">
                            <div className="opacity-0 group-hover/slideshow:opacity-100 transition-opacity duration-300">
                              <div className={`${colors.bg} ${colors.border} border-2 rounded-full p-4 hover:opacity-100 opacity-80`}>
                                <FaPlay className={`text-2xl ${colors.text} ml-1`} />
                              </div>
                              <p className={`${colors.text} text-sm mt-2 text-center font-semibold`}>Click to watch video</p>
                            </div>
                          </div>
                        )}
                        {/* Slide indicators */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-10" onClick={(e) => e.stopPropagation()}>
                          {project.slides.map((_, slideIndex) => {
                            const isActive = slideIndex === (currentSlides[index] || 0)
                            return (
                              <button
                                key={slideIndex}
                                onClick={() => setCurrentSlides((prev) => ({ ...prev, [index]: slideIndex }))}
                                className={`rounded-full transition-all duration-300 ${
                                  isActive
                                    ? `${colors.bg} ${colors.border} border w-6 h-2` 
                                    : `${colors.bg} opacity-40 hover:opacity-60 w-2 h-2`
                                }`}
                                aria-label={`Go to slide ${slideIndex + 1}`}
                              />
                            )
                          })}
                        </div>
                        {/* Navigation arrows */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentSlides((prev) => {
                              const current = prev[index] || 0
                              return { ...prev, [index]: (current - 1 + project.slides.length) % project.slides.length }
                            })
                          }}
                          className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 ${colors.text} p-2 rounded-full transition-all duration-300 z-10`}
                          aria-label="Previous slide"
                        >
                          <FaChevronLeft />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentSlides((prev) => {
                              const current = prev[index] || 0
                              return { ...prev, [index]: (current + 1) % project.slides.length }
                            })
                          }}
                          className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 ${colors.text} p-2 rounded-full transition-all duration-300 z-10`}
                          aria-label="Next slide"
                        >
                          <FaChevronRight />
                        </button>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className={`${colors.text} text-center`}>
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
                  <h3 className={`text-2xl font-bold ${colors.text} mb-3 text-metal-glow`}>
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-metal-silver/80 mb-4 leading-relaxed">
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
        {videoModal.open && videoModal.project && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setVideoModal({ open: false, project: null })}
          >
            <div 
              className={`relative w-full max-w-5xl mx-4 bg-black/95 border-2 ${getColorClasses(videoModal.project.color).border} rounded-lg p-4 md:p-6`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoModal({ open: false, project: null })}
                className={`absolute top-4 right-4 ${getColorClasses(videoModal.project.color).text} hover:opacity-70 transition-opacity z-10`}
              >
                <FaTimes size={24} />
              </button>
              
              <div className="pt-8">
                <h3 className={`text-2xl font-bold ${getColorClasses(videoModal.project.color).text} mb-4 text-center`}>
                  {videoModal.project.title} - Gameplay Video
                </h3>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-lg border ${getColorClasses(videoModal.project.color).border} p-8`}>
                    <FaVideo className={`text-6xl ${getColorClasses(videoModal.project.color).text} mb-4 opacity-50`} />
                    <p className={`${getColorClasses(videoModal.project.color).text} text-lg mb-4 text-center`}>
                      Google Drive videos cannot be embedded due to security restrictions
                    </p>
                    <a
                      href={videoModal.project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 ${getColorClasses(videoModal.project.color).bg} border-2 ${getColorClasses(videoModal.project.color).border} ${getColorClasses(videoModal.project.color).text} rounded-lg hover:opacity-80 transition-all duration-300 font-semibold flex items-center gap-2`}
                    >
                      <FaExternalLinkAlt />
                      Watch Video on Google Drive
                    </a>
                  </div>
                </div>
                <p className={`${getColorClasses(videoModal.project.color).text}/80 text-sm mt-4 text-center`}>
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
