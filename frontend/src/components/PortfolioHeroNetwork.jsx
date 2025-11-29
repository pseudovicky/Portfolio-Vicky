import { useRef, useEffect, useCallback } from 'react'

const PortfolioHeroNetwork = () => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: null, y: null, active: false, overText: false })
  const animationIdRef = useRef(null)

  // Initialize particles
  const initParticles = useCallback((width, height) => {
    const particles = []
    const particleCount = Math.min(80, Math.floor((width * height) / 15000))
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
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

    // Create motion trail effect with gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, 'rgba(238, 242, 255, 0.15)') // primary-50
    gradient.addColorStop(1, 'rgba(241, 245, 249, 0.15)') // secondary-50
    ctx.fillStyle = gradient
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
        const repulsionRadius = 120
        const repulsionRadiusSq = repulsionRadius * repulsionRadius

        if (distSq < repulsionRadiusSq && distSq > 0) {
          const dist = Math.sqrt(distSq)
          const force = (repulsionRadius - dist) / repulsionRadius * 0.12
          particle.vx += (dx / dist) * force
          particle.vy += (dy / dist) * force
        }
      }

      // Draw particle with glow - using primary color theme
      ctx.shadowColor = 'rgba(79, 70, 229, 0.6)' // primary-600
      ctx.shadowBlur = 4
      ctx.fillStyle = 'rgba(79, 70, 229, 0.7)' // primary-600
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, 2.5, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
    })

    // Draw connections between particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distSq = dx * dx + dy * dy
        const connectionDistance = 100
        const connectionDistanceSq = connectionDistance * connectionDistance

        if (distSq < connectionDistanceSq) {
          const dist = Math.sqrt(distSq)
          const opacity = (1 - dist / connectionDistance) * 0.5

          // Use primary color for connections
          ctx.strokeStyle = `rgba(79, 70, 229, ${opacity})` // primary-600
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
        const connectionDistance = 130
        const connectionDistanceSq = connectionDistance * connectionDistance

        if (distSq < connectionDistanceSq) {
          const dist = Math.sqrt(distSq)
          const opacity = (1 - dist / connectionDistance) * 0.7

          // Orange accent for mouse connections
          ctx.shadowColor = 'rgba(251, 146, 60, 0.6)'
          ctx.shadowBlur = 8
          ctx.strokeStyle = `rgba(251, 146, 60, ${opacity})`
          ctx.lineWidth = 1.5
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
                       target.tagName === 'H1' || 
                       target.tagName === 'H2' ||
                       target.tagName === 'P' ||
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
      style={{ 
        background: 'linear-gradient(135deg, #eef2ff 0%, #f1f5f9 100%)'
      }}
    />
  )
}

export default PortfolioHeroNetwork
