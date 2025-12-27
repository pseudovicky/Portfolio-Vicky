import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiArrowRight, FiChevronRight, FiCpu, FiCode, FiDatabase, FiGithub, FiLayers, FiLinkedin, FiMail } from 'react-icons/fi'
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
            {/* 3D Rotating Cube Profile */}
            <div className="profile-cube-container" style={{ perspective: '1000px' }}>
              <div className="profile-cube">
                <div className="cube-face front">
                  <img src="/IMG-20250405-WA0026.jpg" alt="Vicky" className="w-full h-full object-cover" />
                </div>
                <div className="cube-face back">
                  <img src="/IMG-20250405-WA0026.jpg" alt="Vicky" className="w-full h-full object-cover" />
                </div>
                <div className="cube-face right">
                  <img src="/IMG-20250405-WA0026.jpg" alt="Vicky" className="w-full h-full object-cover" />
                </div>
                <div className="cube-face left">
                  <img src="/IMG-20250405-WA0026.jpg" alt="Vicky" className="w-full h-full object-cover" />
                </div>
                <div className="cube-face top">
                  <img src="/IMG-20250405-WA0026.jpg" alt="Vicky" className="w-full h-full object-cover" />
                </div>
                <div className="cube-face bottom">
                  <img src="/IMG-20250405-WA0026.jpg" alt="Vicky" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            <style jsx>{`
              .profile-cube-container {
                width: 64px;
                height: 64px;
                display: flex;
                justify-content: center;
                align-items: center;
                transform-style: preserve-3d;
              }
              
              @media (min-width: 768px) {
                .profile-cube-container {
                  width: 80px;
                  height: 80px;
                }
              }
              
              .profile-cube {
                width: 100%;
                height: 100%;
                position: relative;
                transform-style: preserve-3d;
                transition: transform 1s ease;
                cursor: pointer;
              }
              
              .profile-cube:hover {
                animation: rotate3d 8s infinite linear;
              }
              
              .cube-face {
                position: absolute;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                backface-visibility: visible;
                border-radius: 12px;
                background: white;
                transition: all 0.3s ease;
                overflow: hidden;
              }
              
              .cube-face::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
                top: -100%;
                left: -100%;
                transition: all 0.5s ease;
              }
              
              .cube-face::after {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);
                opacity: 0;
                transition: opacity 0.3s ease;
              }
              
              .cube-face:hover::before {
                top: 100%;
                left: 100%;
              }
              
              .cube-face:hover::after {
                opacity: 1;
              }
              
              .front {
                transform: translateZ(32px);
              }
              
              .back {
                transform: translateZ(-32px) rotateY(180deg);
              }
              
              .right {
                transform: translateX(32px) rotateY(90deg);
              }
              
              .left {
                transform: translateX(-32px) rotateY(-90deg);
              }
              
              .top {
                transform: translateY(-32px) rotateX(90deg);
              }
              
              .bottom {
                transform: translateY(32px) rotateX(-90deg);
              }
              
              @media (min-width: 768px) {
                .front { transform: translateZ(40px); }
                .back { transform: translateZ(-40px) rotateY(180deg); }
                .right { transform: translateX(40px) rotateY(90deg); }
                .left { transform: translateX(-40px) rotateY(-90deg); }
                .top { transform: translateY(-40px) rotateX(90deg); }
                .bottom { transform: translateY(40px) rotateX(-90deg); }
              }
              
              @keyframes rotate3d {
                0% { transform: rotateX(0) rotateY(0); }
                25% { transform: rotateX(90deg) rotateY(90deg); }
                50% { transform: rotateX(180deg) rotateY(180deg); }
                75% { transform: rotateX(270deg) rotateY(270deg); }
                100% { transform: rotateX(360deg) rotateY(360deg); }
              }
            `}</style>
            
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

      {/* Skills Cards Section */}
      <section className="relative bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-left text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              I am good.{" "}In.
            </h2>
          </motion.div>

          <div className="mt-12 md:mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: 'Python programming.',
                description:
                  'Clean, reliable Python for automation, data workflows, and production-ready APIs.',
                icon: FiCode,
              },
              {
                title: 'Data engineering.',
                description:
                  'Pipelines, modeling, and tooling to move, transform, and validate data end-to-end.',
                icon: FiDatabase,
              },
              {
                title: 'Full stack web development.',
                description:
                  'Building complete features across UI, APIs, and integrations with solid fundamentals.',
                icon: FiLayers,
              },
              {
                title: 'Machine learning & AI.',
                description:
                  'Practical ML experiments and AI-powered experiences focused on outcomes and clarity.',
                icon: FiCpu,
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                className="rounded-[36px] bg-gray-50 border border-gray-200 p-8 md:p-10 min-h-[240px] md:min-h-[260px]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.05 * index,
                }}
              >
                <div className="text-blue-600">
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600 max-w-md">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Writing Section */}
      <section className="relative bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-right text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-gray-900">
              I write research papers and technical articles.
            </h2>
            <p className="mt-10 md:mt-12 text-right text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed text-gray-600 max-w-5xl ml-auto">
              to explore ideas deeply and share what I have learned.
            </p>
            <div className="mt-10 md:mt-12 flex justify-end">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white text-base md:text-lg font-semibold"
              >
                Explore my research
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research & Articles Cards */}
      <section className="relative bg-white pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              className="rounded-[36px] bg-gray-50 overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-10 md:p-12 text-center">
                <div className="text-base md:text-lg font-semibold text-gray-900">
                  Research Work
                </div>
                <h3 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                  Research papers focused on real problems.
                </h3>
                <p className="mt-4 text-base md:text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                  Add your topic areas, a one-line thesis, tools/methods, and key outcomes (metrics, insights, or impact).
                </p>
                <div className="mt-8">
                  <Link to="/research" className="text-blue-600 font-semibold">
                    Learn more &gt;
                  </Link>
                </div>
              </div>
              <div className="h-72 md:h-80 bg-gray-200" />
            </motion.div>

            <motion.div
              className="rounded-[36px] bg-gray-50 overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
            >
              <div className="p-10 md:p-12 text-center">
                <div className="text-base md:text-lg font-semibold text-gray-900">
                  Technical Articles
                </div>
                <h3 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                  Clear write-ups that teach and document.
                </h3>
                <p className="mt-4 text-base md:text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                  Add your platform link, categories (Python, ML, Data), and highlight what readers will learn in 3–5 bullets.
                </p>
                <div className="mt-8">
                  <a href="#" className="text-blue-600 font-semibold" onClick={(e) => e.preventDefault()}>
                    Learn more &gt;
                  </a>
                </div>
              </div>
              <div className="h-72 md:h-80 bg-gray-200" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section - Horizontal Scroll */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-left text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              What real world problems{' '}
              <span className="text-gray-500">
                I solved through technology?
              </span>
            </h2>
          </motion.div>

          {/* Horizontal Scrolling Container */}
          <div className="mt-12 relative">
            <div className="overflow-x-auto hide-scrollbar" id="projects-scroll">
              <div className="flex gap-6 pb-4">
              {[
                {
                  title: 'Old Car Price Predictor',
                  tag: 'Machine Learning',
                  description:
                    'Scraped real-world car data from Quikr.com and combined it with Kaggle datasets. Built a Linear Regression model boosted with AdaBoost, achieving R² ≈ 0.92. Deployed as a MERN-based web app on Vercel.',
                  image: '/project-car-predictor.jpg',
                  url: '',
                },
                {
                  title: 'Sorting Algorithm Visualizer',
                  tag: 'Web Application',
                  description:
                    'Interactive web app visualizing 9 sorting algorithms in real-time including Bubble Sort, Quick Sort, Merge Sort, and Heap Sort. Built with Node.js, Express.js, and Socket.IO.',
                  image: '/project-sort-visualizer.jpg',
                  url: 'https://sort-visualiser-chi.vercel.app/',
                },
                {
                  title: 'AlumniConnect Application',
                  tag: 'Full Stack Web App',
                  description:
                    'Built during 36-Hour Hackathon. Real-time mentorship platform with live chat, appointment scheduling, and role-based dashboards using MERN stack and Socket.io.',
                  image: '/project-alumni-connect.png',
                  url: 'https://houseofspirits.github.io/alumniconnect/',
                },
                {
                  title: 'House Price Prediction',
                  tag: 'Machine Learning',
                  description:
                    'Collected housing datasets from Kaggle. Performed EDA, feature engineering, and dimensionality reduction. Built Linear Regression model achieving R² ≈ 0.89 with AdaBoost on Django platform.',
                  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
                  url: '',
                },
                {
                  title: 'Excelify',
                  tag: 'Full Stack Web App',
                  description:
                    'Full-stack MERN application for automated Excel data processing with secure uploads, JWT authentication, drag-and-drop uploader, and real-time data previews.',
                  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
                  url: '',
                },
                {
                  title: 'CheckInn - Hotel Management',
                  tag: 'Full Stack Web App',
                  description:
                    'Full-stack hotel booking system using MySQL, Node.js, and React. Optimized relational schemas, high-performance SQL queries, stored procedures, and triggers for real-time operations.',
                  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
                  url: '',
                },
                {
                  title: 'AI Therapist Application',
                  tag: 'AI / Machine Learning',
                  description:
                    'Built during Code-A-Haunt Hackathon. AI-powered therapy chatbot using Python, Django, and Google AI Studio for personalized mental health support.',
                  image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
                  url: '',
                },
                {
                  title: 'Online Weather Application',
                  tag: 'Desktop Application',
                  description:
                    'Weather application using Java, AWT, Swing, and MySQL providing real-time weather updates and location-based forecasts with optimized query performance.',
                  image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
                  url: '',
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="flex-shrink-0 w-[400px] md:w-[480px] rounded-[36px] bg-white overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.05 * index,
                  }}
                  onClick={() => project.url && window.open(project.url, '_blank')}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {project.tag}
                      </div>
                      {project.url && (
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          Live Demo
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="h-64 md:h-80 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            </div>
            
            {/* Scroll Indicator Arrow Button */}
            <motion.button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all z-10"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => {
                const scrollContainer = document.getElementById('projects-scroll');
                scrollContainer?.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              aria-label="Scroll right to see more projects"
            >
              <FiChevronRight className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>

          {/* Explore Projects Button */}
          <motion.div
            className="mt-12 flex justify-end"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <Link
              to="/project"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-white text-base md:text-lg font-semibold hover:bg-gray-800 transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              Explore projects
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Hide scrollbar styles */}
        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
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
