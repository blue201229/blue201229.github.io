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

    // Create particles
    const particleCount = 80
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.2,
    }))

    // Create 3D wireframe cubes
    const cubeCount = 8
    cubesRef.current = Array.from({ length: cubeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 500 + 200,
      rotationX: Math.random() * Math.PI * 2,
      rotationY: Math.random() * Math.PI * 2,
      rotationZ: Math.random() * Math.PI * 2,
      rotationSpeedX: (Math.random() - 0.5) * 0.02,
      rotationSpeedY: (Math.random() - 0.5) * 0.02,
      rotationSpeedZ: (Math.random() - 0.5) * 0.02,
      size: 30 + Math.random() * 40,
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

    // Draw 3D wireframe cube
    const drawCube = (cube) => {
      const size = cube.size
      const vertices = [
        [-size, -size, -size],
        [size, -size, -size],
        [size, size, -size],
        [-size, size, -size],
        [-size, -size, size],
        [size, -size, size],
        [size, size, size],
        [-size, size, size]
      ]

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

      // Draw edges
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0], // front face
        [4, 5], [5, 6], [6, 7], [7, 4], // back face
        [0, 4], [1, 5], [2, 6], [3, 7] // connecting edges
      ]

      ctx.strokeStyle = `rgba(74, 158, 255, ${0.3 * (1 - cube.z / 1000)})`
      ctx.lineWidth = 1

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

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(74, 158, 255, ${particle.opacity})`
        ctx.fill()
      })

      // Draw connections between particles
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(74, 158, 255, ${0.15 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
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
        style={{ zIndex: 0, opacity: 0.6 }}
      />
      {/* Enhanced 3D Grid Effect */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 opacity-20">
          <div className="grid-pattern"></div>
        </div>
      </div>
      {/* 2D Sprite-like floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-cyber-purple opacity-15 animate-float"
            style={{
              width: `${20 + i * 5}px`,
              height: `${20 + i * 5}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i * 2}s`,
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={`poly-${i}`}
            className="absolute border border-cyber-cyan opacity-10 animate-rotate-3d"
            style={{
              width: `${15 + i * 8}px`,
              height: `${15 + i * 8}px`,
              left: `${70 + i * 8}%`,
              top: `${30 + i * 15}%`,
              animationDelay: `${i * 1.2}s`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }}
          />
        ))}
      </div>
    </>
  )
}

export default GameBackground
