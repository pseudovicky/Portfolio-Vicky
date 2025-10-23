import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const About = () => {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const { scrollYProgress: textScrollProgress } = useScroll({
    target: textRef,
    offset: ["start center", "end end"]
  })

  // Smooth spring animation for scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Letter animation component
  const AnimatedText = ({ text, scrollProgress }) => {
    const words = text.split(' ')
    const totalChars = text.replace(/ /g, '').length
    let charIndex = 0

    return (
      <span>
        {words.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-block">
            {word.split('').map((char, charIdx) => {
              const currentCharIndex = charIndex++
              const progress = currentCharIndex / totalChars
              const color = useTransform(
                scrollProgress,
                [0, progress * 0.5, progress],
                ['rgb(100, 100, 100)', 'rgb(180, 180, 180)', 'rgb(255, 255, 255)']
              )
              
              return (
                <motion.span
                  key={charIdx}
                  style={{ color }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              )
            })}
            {wordIdx < words.length - 1 && ' '}
          </span>
        ))}
      </span>
    )
  }

  // Journey Section Component
  const JourneySection = () => {
    const journeyRef = useRef(null)
    const { scrollYProgress: journeyProgress } = useScroll({
      target: journeyRef,
      offset: ["start center", "end end"]
    })

    return (
      <section ref={journeyRef} className="min-h-[120vh] flex items-center justify-center px-6 py-16">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-16 text-white">
            My Journey
          </h3>
          <div className="space-y-12 text-lg md:text-xl leading-relaxed">
            <p>
              <AnimatedText 
                text="My journey into the world of programming began with a simple curiosity about how websites work. That curiosity evolved into a deep passion for creating digital experiences that make a difference in people's lives."
                scrollProgress={journeyProgress}
              />
            </p>
            <p>
              <AnimatedText 
                text="Over the years, I've had the privilege of working on diverse projects—from building responsive web applications with React and Node.js to architecting scalable data pipelines and implementing machine learning models. Each project taught me something new and pushed me to grow as a developer."
                scrollProgress={journeyProgress}
              />
            </p>
            <p>
              <AnimatedText 
                text="What drives me isn't just writing code—it's solving real problems, optimizing performance, and creating solutions that users love. I believe in the power of clean, maintainable code and the importance of staying curious in this ever-evolving tech landscape."
                scrollProgress={journeyProgress}
              />
            </p>
          </div>
        </motion.div>
      </section>
    )
  }

  // Image positions - initial stacked, then circular
  const images = [
    { 
      id: 1, 
      src: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=1000&fit=crop',
      alt: 'Coding workspace'
    },
    { 
      id: 2, 
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=1000&fit=crop',
      alt: 'Developer at work'
    },
    { 
      id: 3, 
      src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=1000&fit=crop',
      alt: 'Code on screen'
    },
    { 
      id: 4, 
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=1000&fit=crop',
      alt: 'Developer lifestyle'
    }
  ]

  // Calculate circular positions for each image
  const getCircularPosition = (index, total, progress) => {
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2
    const radius = progress * 350 // Increased radius for more spacing (was 250)
    const centerOffset = progress * 100 // Move images to center
    
    return {
      x: Math.cos(angle) * radius - centerOffset,
      y: Math.sin(angle) * radius,
      rotate: progress * 360,
      scale: 0.7 + progress * 0.3,
      opacity: 0.4 + progress * 0.6
    }
  }

  return (
    <div className="bg-black text-white">
      {/* Hero Image Section with Scroll Effect */}
      <div ref={containerRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Background gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"
            style={{
              opacity: useTransform(smoothProgress, [0, 0.5, 1], [1, 0.5, 0])
            }}
          />

          {/* Images Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {images.map((image, index) => {
              // Transform for each image based on scroll
              const circularPos = useTransform(
                smoothProgress,
                [0, 0.5],
                [
                  { x: 0, y: index * 20, rotate: 0, scale: 1 - index * 0.1, opacity: index === 0 ? 1 : 0 },
                  getCircularPosition(index, images.length, 1)
                ]
              )

              const imageX = useTransform(smoothProgress, [0, 0.6], [0, Math.cos((index / images.length) * Math.PI * 2 - Math.PI / 2) * 280])
              const imageY = useTransform(smoothProgress, [0, 0.6], [index * 8, Math.sin((index / images.length) * Math.PI * 2 - Math.PI / 2) * 280])
              const imageRotate = useTransform(smoothProgress, [0, 0.6], [0, index * 90])
              const imageScale = useTransform(smoothProgress, [0, 0.6], [1 - index * 0.05, 0.85])
              const imageOpacity = useTransform(smoothProgress, [0, 0.4, 0.6], [index === 0 ? 1 : 0, 0.8, 1])

              return (
                <motion.div
                  key={image.id}
                  className="absolute"
                  style={{
                    x: imageX,
                    y: imageY,
                    rotate: imageRotate,
                    scale: imageScale,
                    opacity: imageOpacity,
                    zIndex: images.length - index
                  }}
                >
                  <motion.div 
                    className="relative w-80 h-48 md:w-96 md:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
                    whileHover={{ scale: 1.05, zIndex: 100 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Title Overlay - "About" on left, "Me" on right */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-between pointer-events-none px-8 md:px-16"
            style={{
              opacity: useTransform(smoothProgress, [0, 0.3], [1, 0])
            }}
          >
            <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tight">
              About
            </h1>
            <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tight">
              Me
            </h1>
          </motion.div>

          {/* Circular Formation Title */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              opacity: useTransform(smoothProgress, [0.3, 0.5], [0, 1])
            }}
          >
            <div className="text-center">
              <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                Programmer
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Main Introduction */}
        <section ref={textRef} className="min-h-[120vh] flex items-center justify-center px-6 py-16">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
              <AnimatedText 
                text="I craft digital experiences that inspire & innovate" 
                scrollProgress={textScrollProgress}
              />
            </h2>
            <motion.p 
              className="text-xl md:text-2xl leading-relaxed max-w-3xl mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <AnimatedText 
                text="A passionate full-stack developer with over 3 years of experience in building scalable web applications. I transform complex problems into elegant, intuitive solutions through clean code and creative thinking."
                scrollProgress={textScrollProgress}
              />
            </motion.p>
          </motion.div>
        </section>

        {/* Journey Section */}
        <JourneySection />

        {/* Philosophy Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-16">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-4xl md:text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Philosophy & Values
            </h3>
            <div className="grid md:grid-cols-2 gap-16">
              {[
                {
                  title: 'Simplicity in Complexity',
                  desc: 'I believe the best solutions are often the simplest ones. Elegant code that solves complex problems is an art form.'
                },
                {
                  title: 'User-Centric Design',
                  desc: 'Every line of code I write is with the end user in mind. Beautiful interfaces mean nothing without great user experience.'
                },
                {
                  title: 'Continuous Evolution',
                  desc: 'Technology never stops evolving, and neither should I. Learning new frameworks, languages, and methodologies is part of my DNA.'
                },
                {
                  title: 'Collaborative Spirit',
                  desc: 'Great products are built by great teams. I thrive in environments where ideas are shared and collaboration is encouraged.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-2xl md:text-3xl font-bold mb-6 text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Highlight */}
        <section className="min-h-screen flex items-center justify-center px-6 py-16">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-4xl md:text-6xl font-bold mb-16 text-white">
              What I Bring to the Table
            </h3>
            <div className="space-y-8">
              {[
                'Full-stack development with React, Node.js, and modern frameworks',
                'Data engineering and pipeline architecture with Python and MongoDB',
                'Machine learning implementation and model deployment',
                'Clean, scalable, and maintainable code architecture',
                'Performance optimization and best practices',
                'Agile development and collaborative team workflows'
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 text-xl md:text-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-cyan-400">→</span>
                  <span className="text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Closing Statement */}
        <section className="min-h-screen flex items-center justify-center px-6 py-16">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-5xl md:text-7xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-xl md:text-2xl text-gray-400 mb-16 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or enjoying a good cup of coffee while reading about the latest trends in web development.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default About
