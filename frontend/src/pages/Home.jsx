import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import TypewriterEffectSmoothDemo from '../components/typewriter-effect-demo-1.jsx'
import ScrollingTextReveal from '../components/ScrollingTextReveal.jsx'
import IntroCard from '../components/IntroCard.jsx'
import SkillsSection from '../components/SkillsSection.jsx'
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
  const [activeTab, setActiveTab] = useState('script.js')
  
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

  const tabs = [
    { 
      id: 'script.js', 
      name: 'script.js', 
      icon: '⚡',
      content: {
        language: 'javascript',
        code: [
          { text: '// Portfolio Interactive Features', color: 'text-gray-500' },
          { text: 'const developer = "Vicky Kumar";', color: 'text-white' },
          { text: '', color: 'text-white' },
          { text: 'class PortfolioApp {', color: 'text-yellow-300' },
          { text: '  constructor() {', color: 'text-blue-400' },
          { text: '    this.skills = [', color: 'text-purple-400' },
          { text: '      "React", "Node.js", "MongoDB",', color: 'text-green-400' },
          { text: '      "Express", "JavaScript", "Python"', color: 'text-green-400' },
          { text: '    ];', color: 'text-white' },
          { text: '    this.init();', color: 'text-white' },
          { text: '  }', color: 'text-white' },
          { text: '', color: 'text-white' },
          { text: '  init() {', color: 'text-blue-400' },
          { text: '    console.log(`Welcome ${developer}!`);', color: 'text-white' },
          { text: '    this.loadProjects();', color: 'text-white' },
          { text: '  }', color: 'text-white' },
          { text: '', color: 'text-white' },
          { text: '  async loadProjects() {', color: 'text-blue-400' },
          { text: '    return this.skills.map(skill => ({', color: 'text-purple-400' },
          { text: '      name: skill, level: "Expert"', color: 'text-green-400' },
          { text: '    }));', color: 'text-white' },
          { text: '  }', color: 'text-white' },
          { text: '}', color: 'text-white' },
          { text: '', color: 'text-white' },
          { text: 'new PortfolioApp();', color: 'text-yellow-300' }
        ]
      }
    },
    { 
      id: 'index.html', 
      name: 'index.html', 
      icon: '🌐',
      content: {
        language: 'html',
        code: [
          { text: '<!DOCTYPE html>', color: 'text-gray-500' },
          { text: '<html lang="en">', color: 'text-red-400' },
          { text: '<head>', color: 'text-red-400' },
          { text: '  <meta charset="UTF-8">', color: 'text-blue-400' },
          { text: '  <title>Vicky Kumar - Portfolio</title>', color: 'text-blue-400' },
          { text: '  <link rel="stylesheet" href="style.css">', color: 'text-blue-400' },
          { text: '</head>', color: 'text-red-400' },
          { text: '<body>', color: 'text-red-400' },
          { text: '  <div class="container">', color: 'text-blue-400' },
          { text: '    <h1>', color: 'text-red-400' },
          { text: '      Welcome to My Portfolio', color: 'text-green-400' },
          { text: '    </h1>', color: 'text-red-400' },
          { text: '    <p class="intro">', color: 'text-blue-400' },
          { text: '      Full Stack Developer', color: 'text-green-400' },
          { text: '    </p>', color: 'text-blue-400' },
          { text: '  </div>', color: 'text-blue-400' },
          { text: '</body>', color: 'text-red-400' },
          { text: '</html>', color: 'text-red-400' }
        ]
      }
    },
    { 
      id: 'style.css', 
      name: 'style.css', 
      icon: '🎨',
      content: {
        language: 'css',
        code: [
          { text: '/* Vicky Kumar - Portfolio Styles */', color: 'text-gray-500' },
          { text: ':root {', color: 'text-yellow-300' },
          { text: '  --primary-color: #3b82f6;', color: 'text-blue-400' },
          { text: '  --secondary-color: #1f2937;', color: 'text-blue-400' },
          { text: '  --accent-color: #10b981;', color: 'text-blue-400' },
          { text: '  --text-color: #374151;', color: 'text-blue-400' },
          { text: '}', color: 'text-yellow-300' },
          { text: '', color: 'text-white' },
          { text: '* {', color: 'text-yellow-300' },
          { text: '  margin: 0;', color: 'text-blue-400' },
          { text: '  padding: 0;', color: 'text-blue-400' },
          { text: '  box-sizing: border-box;', color: 'text-blue-400' },
          { text: '}', color: 'text-yellow-300' },
          { text: '', color: 'text-white' },
          { text: 'body {', color: 'text-yellow-300' },
          { text: '  font-family: "SF Pro Display", sans-serif;', color: 'text-green-400' },
          { text: '  line-height: 1.6;', color: 'text-blue-400' },
          { text: '  color: var(--text-color);', color: 'text-blue-400' },
          { text: '  background: linear-gradient(135deg, #f8fafc, #e2e8f0);', color: 'text-green-400' },
          { text: '}', color: 'text-yellow-300' },
          { text: '', color: 'text-white' },
          { text: '.container {', color: 'text-yellow-300' },
          { text: '  max-width: 1200px;', color: 'text-blue-400' },
          { text: '  margin: 0 auto;', color: 'text-blue-400' },
          { text: '  padding: 0 2rem;', color: 'text-blue-400' },
          { text: '}', color: 'text-yellow-300' },
          { text: '', color: 'text-white' },
          { text: '.hero-section {', color: 'text-yellow-300' },
          { text: '  min-height: 100vh;', color: 'text-blue-400' },
          { text: '  display: flex;', color: 'text-blue-400' },
          { text: '  align-items: center;', color: 'text-blue-400' },
          { text: '  justify-content: center;', color: 'text-blue-400' },
          { text: '  background: var(--primary-color);', color: 'text-blue-400' },
          { text: '}', color: 'text-yellow-300' },
          { text: '', color: 'text-white' },
          { text: '.btn-primary {', color: 'text-yellow-300' },
          { text: '  background: var(--accent-color);', color: 'text-blue-400' },
          { text: '  color: white;', color: 'text-blue-400' },
          { text: '  padding: 12px 24px;', color: 'text-blue-400' },
          { text: '  border-radius: 8px;', color: 'text-blue-400' },
          { text: '  transition: transform 0.2s ease;', color: 'text-purple-400' },
          { text: '}', color: 'text-yellow-300' }
        ]
      }
    }
  ]

  const getTabContent = () => {
    return tabs.find(tab => tab.id === activeTab)?.content || tabs[0].content
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

      {/* Code Editor Section - Full Screen */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white">
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* MacBook with Code - Full Width */}
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* MacBook Base - Full width */}
            <div className="relative w-full">
              {/* MacBook Screen */}
              <div className="bg-gray-800 rounded-t-2xl p-6 shadow-2xl border-[12px] border-gray-200 w-full">
                {/* Screen Header with Tabs */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  
                  {/* Tabs */}
                  <div className="flex ml-6 space-x-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                          activeTab === tab.id 
                            ? 'bg-gray-600 text-white' 
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-650'
                        }`}
                      >
                        <span>{tab.icon}</span>
                        <span>{tab.name}</span>
                        {activeTab === tab.id && (
                          <span 
                            className="ml-2 text-gray-400 hover:text-white cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation()
                            }}
                          >
                            ×
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Code Content - Larger */}
                <div className="bg-gray-900 rounded-xl p-8 font-mono text-base md:text-lg leading-loose h-[400px] md:h-[500px] overflow-hidden">
                  <motion.div 
                    className="space-y-2"
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {getTabContent().code.map((line, index) => (
                      <motion.div
                        key={index}
                        className={line.color}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        {line.text}
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Blinking cursor */}
                  <motion.div 
                    className="inline-block w-3 h-6 bg-green-400 ml-1 mt-4"
                    animate={{ opacity: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  ></motion.div>
                </div>
              </div>
              
              {/* MacBook Keyboard/Base */}
              <div className="bg-gray-200 h-10 rounded-b-2xl shadow-2xl relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-2xl"></div>
                {/* Trackpad */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-400 rounded opacity-50"></div>
              </div>
              
              {/* MacBook Reflection */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-300 opacity-20 rounded-2xl transform translate-y-2 blur-sm scale-y-[-1]"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Typing Effect Section - Full 100vh */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gray-50">
        <motion.div 
          className="text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TypewriterEffectSmoothDemo />
        </motion.div>
      </section>

      {/* Scrolling Text Reveal Section */}
  <ScrollingTextReveal />

  {/* Intro Card Section */}
      <IntroCard />

      {/* Skills Section */}
      <SkillsSection />
    </div>
  )
}

export default Home
