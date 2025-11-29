import { useRef, useEffect } from 'react'

export default function HomeHeroNetwork() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    // Set canvas size - 100vh height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse position tracking
    let mouse = { x: null, y: null, radius: 200 }
    
    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    
    const handleMouseOut = () => {
      mouse.x = null
      mouse.y = null
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseOut)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.baseX = this.x
        this.baseY = this.y
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.8
        this.speedY = (Math.random() - 0.5) * 0.8
        this.density = (Math.random() * 30) + 1
      }
      
      update() {
        // Mouse attraction (particles are attracted to mouse)
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x
          let dy = mouse.y - this.y
          let distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < mouse.radius) {
            // Attraction force - particles move toward mouse
            let forceDirectionX = dx / distance
            let forceDirectionY = dy / distance
            let force = (mouse.radius - distance) / mouse.radius
            let attractionStrength = force * this.density * 0.03
            
            this.x += forceDirectionX * attractionStrength
            this.y += forceDirectionY * attractionStrength
          }
        }
        
        // Regular movement
        this.x += this.speedX
        this.y += this.speedY
        
        // Boundary check
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }
      
      draw() {
        // Maroon particles
        ctx.fillStyle = '#800000'
        ctx.shadowColor = '#A52A2A'
        ctx.shadowBlur = 6
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Create particles - 150 particles for more density
    const particles = []
    const numParticles = 150
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      // Pure white background
      ctx.fillStyle = '#FFFFFF'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(128, 0, 0, ${0.5 - distance / 300})`
            ctx.lineWidth = 0.8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw connections from mouse to nearby particles with maroon
      if (mouse.x != null && mouse.y != null) {
        particles.forEach(particle => {
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < mouse.radius) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(165, 42, 42, ${0.7 - distance / 400})`
            ctx.lineWidth = 1.5
            ctx.moveTo(mouse.x, mouse.y)
            ctx.lineTo(particle.x, particle.y)
            ctx.stroke()
          }
        })
      }

      animationFrameId = requestAnimationFrame(animate)
    }
    
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'auto', background: '#FFFFFF' }}
    />
  )
}
