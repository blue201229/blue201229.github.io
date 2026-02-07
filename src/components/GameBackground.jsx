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

    // Create softer, more understated particles
    const particleCount = 40
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 4 + 2, // Smaller, subtler particles
      opacity: Math.random() * 0.3 + 0.2, // Softer: 0.2-0.5
      glow: Math.random() * 0.15 + 0.1, // Reduced glow effect
    }))

    // Create 3D wireframe cubes and game objects (reduced count for calmer feel)
    const cubeCount = 6
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
      size: 30 + Math.random() * 40,
      type: Math.random() > 0.5 ? 'cube' : Math.random() > 0.5 ? 'sphere' : 'pyramid',
      brightness: Math.random() * 0.25 + 0.15,
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

      ctx.strokeStyle = `rgba(192, 192, 192, ${cube.brightness * (1 - cube.z / 1000)})` // Silver
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

        // Draw particle with a soft glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        )
        gradient.addColorStop(0, `rgba(192, 192, 192, ${particle.opacity * 0.9})`) // Silver
        gradient.addColorStop(0.5, `rgba(212, 175, 55, ${particle.opacity * 0.4})`) // Gold
        gradient.addColorStop(1, `rgba(192, 192, 192, 0)`) // Silver
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Core particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 134, 128, ${particle.opacity})` // Stone
        ctx.fill()
      })

      // Draw subtle connections between particles
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(113, 121, 126, ${0.15 * (1 - distance / 120)})` // Iron
            ctx.lineWidth = 1
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
          style={{ zIndex: 0, opacity: 0.35 }}
        />
      {/* Enhanced 3D Grid Effect */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 opacity-10">
          <div className="grid-pattern"></div>
        </div>
      </div>
      {/* Game Character Elements & 3D Objects (subtle, low-opacity) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Larger 3D geometric shapes (toned down) */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute border border-metal-silver opacity-15 animate-float"
            style={{
              width: `${26 + i * 6}px`,
              height: `${26 + i * 6}px`,
              left: `${15 + i * 10}%`,
              top: `${25 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${14 + i * 3}s`,
              transform: `rotate(${i * 30}deg)`,
              boxShadow: '0 0 10px rgba(58, 58, 58, 0.7)', // Dark stone
            }}
          />
        ))}
        
        {/* Game-themed symbols (very subtle) */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`symbol-${i}`}
            className="absolute border border-metal-gold opacity-15 animate-rotate-3d"
            style={{
              width: `${22 + i * 5}px`,
              height: `${22 + i * 5}px`,
              left: `${60 + i * 7}%`,
              top: `${20 + i * 12}%`,
              animationDelay: `${i * 1.5}s`,
              clipPath: i % 2 === 0 
                ? 'polygon(50% 0%, 0% 100%, 100% 100%)' 
                : 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
              boxShadow: '0 0 8px rgba(58, 58, 58, 0.7)', // Dark stone
            }}
          />
        ))}
      </div>
    </>
  )
}

export default GameBackground
