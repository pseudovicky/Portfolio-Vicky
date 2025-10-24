import { useRef, useEffect, useCallback } from 'react'

const DynamicBondNetwork = () => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: null, y: null, active: false, overText: false })
  const animationIdRef = useRef(null)

  // Initialize particles
  const initParticles = useCallback((width, height) => {
    const particles = []
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      })
    }
    return particles
  }, [])

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const width = canvas.width
    const height = canvas.height
    const particles = particlesRef.current
    const mouse = mouseRef.current

    // Create motion trail effect (semi-transparent background)
    ctx.fillStyle = 'rgba(42, 42, 53, 0.15)'
    ctx.fillRect(0, 0, width, height)

    // Update and draw particles
    particles.forEach((particle) => {
      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Bounce off walls
      if (particle.x <= 0 || particle.x >= width) {
        particle.vx = -particle.vx
        particle.x = Math.max(0, Math.min(width, particle.x))
      }
      if (particle.y <= 0 || particle.y >= height) {
        particle.vy = -particle.vy
        particle.y = Math.max(0, Math.min(height, particle.y))
      }

      // Mouse repulsion effect (only when not over text)
      if (mouse.active && mouse.x !== null && mouse.y !== null && !mouse.overText) {
        const dx = particle.x - mouse.x
        const dy = particle.y - mouse.y
        const distSq = dx * dx + dy * dy
        const repulsionRadius = 150
        const repulsionRadiusSq = repulsionRadius * repulsionRadius

        if (distSq < repulsionRadiusSq && distSq > 0) {
          const dist = Math.sqrt(distSq)
          const force = (repulsionRadius - dist) / repulsionRadius * 0.15
          particle.vx += (dx / dist) * force
          particle.vy += (dy / dist) * force
        }
      }

      // Draw particle with glow
      ctx.shadowColor = 'rgba(255, 255, 255, 1)'
      ctx.shadowBlur = 5
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
    })

    // Draw connections between particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distSq = dx * dx + dy * dy
        const connectionDistance = 120
        const connectionDistanceSq = connectionDistance * connectionDistance

        if (distSq < connectionDistanceSq) {
          const dist = Math.sqrt(distSq)
          const opacity = (1 - dist / connectionDistance) * 0.8

          ctx.strokeStyle = `rgba(251, 146, 60, ${opacity})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }

    // Draw connections from mouse to nearby particles (only when not over text)
    if (mouse.active && mouse.x !== null && mouse.y !== null && !mouse.overText) {
      particles.forEach((particle) => {
        const dx = particle.x - mouse.x
        const dy = particle.y - mouse.y
        const distSq = dx * dx + dy * dy
        const connectionDistance = 150
        const connectionDistanceSq = connectionDistance * connectionDistance

        if (distSq < connectionDistanceSq) {
          const dist = Math.sqrt(distSq)
          const opacity = (1 - dist / connectionDistance) * 0.9

          ctx.shadowColor = 'rgba(251, 146, 60, 0.8)'
          ctx.shadowBlur = 10
          ctx.strokeStyle = `rgba(251, 146, 60, ${opacity})`
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(particle.x, particle.y)
          ctx.stroke()
          ctx.shadowBlur = 0
        }
      })
    }

    animationIdRef.current = requestAnimationFrame(animate)
  }, [])

  // Handle canvas resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const container = canvas.parentElement
    const dpr = window.devicePixelRatio || 1
    const rect = container.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)

    // Re-initialize particles for new dimensions
    particlesRef.current = initParticles(rect.width, rect.height)
  }, [initParticles])

  // Handle mouse move
  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    
    // Check if mouse is over interactive elements
    const target = e.target
    const isOverText = target.tagName === 'A' || 
                       target.tagName === 'H3' || 
                       target.tagName === 'BUTTON' ||
                       target.closest('a') !== null ||
                       target.closest('button') !== null
    
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
      overText: isOverText
    }
  }, [])

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: null, y: null, active: false, overText: false }
  }, [])

  // Setup and cleanup
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    handleResize()
    animate()

    window.addEventListener('resize', handleResize)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [handleResize, animate, handleMouseMove, handleMouseLeave])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'rgba(42, 42, 53, 1)' }}
    />
  )
}

export default DynamicBondNetwork
