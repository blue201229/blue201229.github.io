import React, { useEffect, useRef } from 'react'

const GameBackground = () => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const cubesRef = useRef([])
  const animationFrameRef = useRef(null)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create larger, brighter particles
    const particleCount = 60
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      size: Math.random() * 8 + 4, // Larger particles: 4-12px
      opacity: Math.random() * 0.5 + 0.5, // Brighter: 0.5-1.0
      glow: Math.random() * 0.3 + 0.2, // Glow effect
    }))

    // Create 3D wireframe cubes and game objects
    const cubeCount = 12
    cubesRef.current = Array.from({ length: cubeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 500 + 200,
      rotationX: Math.random() * Math.PI * 2,
      rotationY: Math.random() * Math.PI * 2,
      rotationZ: Math.random() * Math.PI * 2,
      rotationSpeedX: (Math.random() - 0.5) * 0.03,
      rotationSpeedY: (Math.random() - 0.5) * 0.03,
      rotationSpeedZ: (Math.random() - 0.5) * 0.03,
      size: 40 + Math.random() * 60, // Larger cubes
      type: Math.random() > 0.5 ? 'cube' : Math.random() > 0.5 ? 'sphere' : 'pyramid',
      brightness: Math.random() * 0.4 + 0.4, // Brighter
    }))

    // 3D projection helper
    const project3D = (x, y, z) => {
      const scale = 400 / (400 + z)
      return {
        x: x * scale + canvas.width / 2,
        y: y * scale + canvas.height / 2,
        scale: scale
      }
    }

    // Rotate point around axis
    const rotateX = (x, y, z, angle) => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return {
        x: x,
        y: y * cos - z * sin,
        z: y * sin + z * cos
      }
    }

    const rotateY = (x, y, z, angle) => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return {
        x: x * cos + z * sin,
        y: y,
        z: -x * sin + z * cos
      }
    }

    const rotateZ = (x, y, z, angle) => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return {
        x: x * cos - y * sin,
        y: x * sin + y * cos,
        z: z
      }
    }

    // Draw 3D wireframe shapes (cube, sphere, pyramid)
    const drawCube = (cube) => {
      const size = cube.size
      let vertices = []
      
      if (cube.type === 'cube') {
        vertices = [
          [-size, -size, -size],
          [size, -size, -size],
          [size, size, -size],
          [-size, size, -size],
          [-size, -size, size],
          [size, -size, size],
          [size, size, size],
          [-size, size, size]
        ]
      } else if (cube.type === 'pyramid') {
        vertices = [
          [0, -size, 0], // Top
          [-size, size, -size], // Base corner 1
          [size, size, -size], // Base corner 2
          [size, size, size], // Base corner 3
          [-size, size, size] // Base corner 4
        ]
      } else { // sphere approximation with octahedron
        vertices = [
          [0, -size, 0], // Top
          [size, 0, 0], // Right
          [0, 0, size], // Front
          [-size, 0, 0], // Left
          [0, 0, -size], // Back
          [0, size, 0] // Bottom
        ]
      }

      // Rotate vertices
      const rotatedVertices = vertices.map(([x, y, z]) => {
        let rotated = rotateX(x, y, z, cube.rotationX)
        rotated = rotateY(rotated.x, rotated.y, rotated.z, cube.rotationY)
        rotated = rotateZ(rotated.x, rotated.y, rotated.z, cube.rotationZ)
        return project3D(
          rotated.x + cube.x - canvas.width / 2,
          rotated.y + cube.y - canvas.height / 2,
          rotated.z + cube.z
        )
      })

      // Draw edges based on shape type
      let edges = []
      if (cube.type === 'cube') {
        edges = [
          [0, 1], [1, 2], [2, 3], [3, 0], // front face
          [4, 5], [5, 6], [6, 7], [7, 4], // back face
          [0, 4], [1, 5], [2, 6], [3, 7] // connecting edges
        ]
      } else if (cube.type === 'pyramid') {
        edges = [
          [0, 1], [0, 2], [0, 3], [0, 4], // Top to base
          [1, 2], [2, 3], [3, 4], [4, 1] // Base square
        ]
      } else { // sphere/octahedron
        edges = [
          [0, 1], [0, 2], [0, 3], [0, 4], // Top to middle
          [5, 1], [5, 2], [5, 3], [5, 4], // Bottom to middle
          [1, 2], [2, 3], [3, 4], [4, 1] // Middle ring
        ]
      }

      ctx.strokeStyle = `rgba(74, 158, 255, ${cube.brightness * (1 - cube.z / 1000)})`
      ctx.lineWidth = 2

      edges.forEach(([start, end]) => {
        const v1 = rotatedVertices[start]
        const v2 = rotatedVertices[end]
        if (v1 && v2) {
          ctx.beginPath()
          ctx.moveTo(v1.x, v1.y)
          ctx.lineTo(v2.x, v2.y)
          ctx.stroke()
        }
      })
    }

    const animate = () => {
      timeRef.current += 0.016
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        )
        gradient.addColorStop(0, `rgba(74, 158, 255, ${particle.opacity})`)
        gradient.addColorStop(0.5, `rgba(124, 58, 237, ${particle.opacity * 0.6})`)
        gradient.addColorStop(1, `rgba(74, 158, 255, 0)`)
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Core particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(74, 158, 255, ${particle.opacity})`
        ctx.fill()
      })

      // Draw brighter connections between particles
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(74, 158, 255, ${0.3 * (1 - distance / 150)})`
            ctx.lineWidth = 1.5
            ctx.stroke()
          }
        })
      })

      // Update and draw 3D cubes
      cubesRef.current.forEach((cube) => {
        cube.rotationX += cube.rotationSpeedX
        cube.rotationY += cube.rotationSpeedY
        cube.rotationZ += cube.rotationSpeedZ

        // Move cubes slightly
        cube.x += Math.sin(timeRef.current + cube.rotationX) * 0.5
        cube.y += Math.cos(timeRef.current + cube.rotationY) * 0.5

        // Wrap cubes
        if (cube.x < -200) cube.x = canvas.width + 200
        if (cube.x > canvas.width + 200) cube.x = -200
        if (cube.y < -200) cube.y = canvas.height + 200
        if (cube.y > canvas.height + 200) cube.y = -200

        drawCube(cube)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0, opacity: 0.8 }}
      />
      {/* Enhanced 3D Grid Effect */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 opacity-20">
          <div className="grid-pattern"></div>
        </div>
      </div>
      {/* Game Character Elements & 3D Objects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Game character emojis/symbols */}
        {['🎮', '🦀', '⚔️', '🛡️', '🎯', '💎', '🔥', '⚡'].map((emoji, i) => (
          <div
            key={`char-${i}`}
            className="absolute text-4xl md:text-5xl animate-float opacity-40"
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${10 + i * 2}s`,
              filter: 'drop-shadow(0 0 10px rgba(74, 158, 255, 0.5))',
            }}
          >
            {emoji}
          </div>
        ))}
        
        {/* Larger 3D geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute border-2 border-cyber-cyan opacity-30 animate-float"
            style={{
              width: `${30 + i * 8}px`,
              height: `${30 + i * 8}px`,
              left: `${15 + i * 10}%`,
              top: `${25 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${12 + i * 3}s`,
              transform: `rotate(${i * 30}deg)`,
              boxShadow: '0 0 20px rgba(74, 158, 255, 0.4)',
            }}
          />
        ))}
        
        {/* Game-themed symbols */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`symbol-${i}`}
            className="absolute border-2 border-cyber-purple opacity-25 animate-rotate-3d"
            style={{
              width: `${25 + i * 6}px`,
              height: `${25 + i * 6}px`,
              left: `${60 + i * 7}%`,
              top: `${20 + i * 12}%`,
              animationDelay: `${i * 1.5}s`,
              clipPath: i % 2 === 0 
                ? 'polygon(50% 0%, 0% 100%, 100% 100%)' 
                : 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
              boxShadow: '0 0 15px rgba(124, 58, 237, 0.3)',
            }}
          />
        ))}
      </div>
    </>
  )
}

export default GameBackground
