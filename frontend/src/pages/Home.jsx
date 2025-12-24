import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import IntroCard from '../components/IntroCard.jsx'
import HomeHeroNetwork from '../components/HomeHeroNetwork.jsx'

// Typing Text Component
const TypingText = ({ text, speed = 100, pauseDuration = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let index = 0
    let isDeleting = false
    
    const typeWriter = () => {
      if (!isDeleting && index <= text.length) {
        // Typing forward
        setDisplayedText(text.slice(0, index))
        index++
        setTimeout(typeWriter, speed)
      } else if (!isDeleting && index > text.length) {
        // Pause before deleting
        setTimeout(() => {
          isDeleting = true
          typeWriter()
        }, pauseDuration)
      } else if (isDeleting && index > 0) {
        // Deleting backward
        setDisplayedText(text.slice(0, index - 1))
        index--
        setTimeout(typeWriter, speed / 2) // Delete faster
      } else if (isDeleting && index === 0) {
        // Start typing again
        isDeleting = false
        setTimeout(typeWriter, speed)
      }
    }

    typeWriter()
  }, [text, speed, pauseDuration])

  return (
    <span>
      {displayedText}
      <motion.span
        className="inline-block w-1 h-16 bg-gray-900 ml-2"
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
    </span>
  )
}

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Intro Section - First 100vh */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white">
        {/* Animated Particle Network Background */}
        <div className="absolute inset-0" style={{ height: '100vh' }}>
          <HomeHeroNetwork />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          {/* Greeting */}
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-6 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi! I'm Vicky Kumar
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            & Aspiring Data Scientist
          </motion.h2>

          {/* Location Row with Image */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Profile Image */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 border-gray-300 shadow-lg">
              <img
                src="/IMG-20250405-WA0026.jpg"
                alt="Vicky Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Based in text */}
            <span className="text-3xl md:text-5xl font-light italic text-gray-700">
              based in
            </span>
            
            {/* Location Badge */}
            <span className="text-2xl md:text-4xl font-bold bg-black text-white px-6 py-2 rounded-lg">
              India.
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A <span className="font-bold text-black">Data Science student</span> with expertise in 
            <span className="font-bold text-black"> Python</span>, <span className="font-bold text-black">Machine Learning</span>, and 
            <span className="font-bold text-black"> Artificial Intelligence</span>. I build intelligent systems and 
            scalable web applications that transform ideas into impactful solutions.
          </motion.p>
        </div>
      </section>

      {/* 10px spacer between hero and gradient */}
      <div className="h-[10px] bg-white" />

      {/* Heading above the card - Apple style */}
      <section className="bg-white pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 w-full">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900"
            style={{ lineHeight: '1.2' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            A Journey Through Code, Creativity,<br />
            and Innovation.
          </motion.h2>
        </div>
      </section>

      {/* Apple-style Holiday Gradient Banner - Behind the card */}
      <section className="bg-white relative z-0">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 w-full">
          <motion.div 
            className="w-full h-[80px] md:h-[100px] overflow-hidden relative rounded-t-[40px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Main gradient layer - Simple Blue to Orange */}
            <motion.div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, #93c5fd 0%, #bfdbfe 25%, #fef3c7 50%, #fdba74 75%, #fb923c 100%)',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                ease: 'linear',
                repeat: Infinity,
              }}
            />
            
            {/* Top fade to white */}
            <div 
              className="absolute inset-x-0 top-0 h-12 md:h-16"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, transparent 100%)',
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Intro Card Section - Over the gradient */}
      <section className="relative z-10 -mt-8 bg-transparent">
        <IntroCard />
      </section>

      {/* Learning Philosophy Section - Simple Editorial */}
      <section className="pt-24 pb-28 md:pt-32 md:pb-36 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 w-full">
          <h2 className="text-left text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-gray-900">
            From what
            <br />
            I have learned so far.
          </h2>
          <p className="mt-10 md:mt-12 text-left text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed text-gray-500 max-w-4xl">
            My way of learning is connecting the dots, finding meaning between ideas that seem unrelated.
          </p>
        </div>
      </section>

      {/* Black Section with LinkedIn Connect - 230vh */}
      <section className="relative bg-black rounded-b-[120px]" style={{ height: '230vh' }}>
        {/* Content positioned 30vh from top */}
        <div className="absolute top-[30vh] left-0 right-0">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white mb-16">
                Let's{' '}
                <span className="inline-flex items-center">
                  <span className="relative inline-block px-6 py-3 mx-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full">
                    <svg 
                      className="inline-block w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mr-2" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                    >
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                    <span className="text-green-900 font-bold">connect</span>
                  </span>
                </span>{' '}
                with me on
                <br />
                <a 
                  href="https://www.linkedin.com/in/pseudovicky/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 mt-4 transition-transform duration-300 hover:scale-105"
                >
                  <span className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">Linked</span>
                  <span className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">in</span>
                </a>

                {/* "and" text centered */}
                <div className="text-center my-12 md:my-16">
                  <span className="text-white text-4xl md:text-5xl lg:text-6xl font-light">and</span>
                </div>

                {/* GitHub collaboration text */}
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white">
                    <span className="inline-flex items-center">
                      <span className="relative inline-block px-6 py-3 mx-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full">
                        <svg 
                          className="inline-block w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mr-2" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2.5"
                        >
                          <path d="M9 11l3 3L22 4" />
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                        </svg>
                        <span className="text-green-900 font-bold">collaborate</span>
                      </span>
                    </span>{' '}
                    with
                    <br />
                    <span className="inline-block mt-4 md:mt-6">me on</span>
                    <br />
                    <a 
                      href="https://github.com/pseudovicky" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 mt-6 md:mt-8 transition-transform duration-300 hover:scale-105"
                    >
                      <svg 
                        className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 text-white" 
                        viewBox="0 0 16 16" 
                        fill="currentColor"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      <span className="bg-black text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg">GitHub</span>
                    </a>
                  </h3>

                  {/* Closing message */}
                  <div className="text-center mt-12 md:mt-16">
                    <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                      So we can build something{' '}
                      <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                        amazing
                      </span>{' '}
                      together.
                    </p>
                  </div>
                </div>
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* White Section with Scrolling Text Animation */}
      <section className="relative bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-orange-500 uppercase tracking-tight"
              initial={{ opacity: 0, rotateX: 90, y: 100 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.46, 0.45, 0.94],
                opacity: { duration: 0.8 },
                rotateX: { duration: 1.2 },
                y: { duration: 1.2 }
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              Know more about my work
            </motion.h2>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
