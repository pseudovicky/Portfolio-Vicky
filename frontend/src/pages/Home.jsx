import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

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
      {/* Hero Section - Apple MacBook Style */}
      <section className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Code Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-green-500 font-mono text-xs">
            const developer = "Vicky Kumar";
          </div>
          <div className="absolute top-20 right-20 text-green-500 font-mono text-xs">
            function createAwesome() {"{"}
          </div>
          <div className="absolute bottom-20 left-20 text-green-500 font-mono text-xs">
            return innovation;
          </div>
          <div className="absolute bottom-10 right-10 text-green-500 font-mono text-xs">
            {"}"}
          </div>
        </div>

        {/* Main Content Container with Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 relative z-10 gap-12">
          {/* Left Side - MacBook */}
          <motion.div 
            className="flex-1 max-w-3xl w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* MacBook Base - Responsive width */}
            <div className="relative w-full">
              {/* MacBook Screen */}
              <div className="bg-gray-800 rounded-t-lg p-4 shadow-2xl border-8 border-gray-200 w-full">
                {/* Screen Header with Tabs */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  
                  {/* Tabs */}
                  <div className="flex ml-4 space-x-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-3 py-1 rounded text-xs font-medium transition-all duration-200 flex items-center space-x-1 ${
                          activeTab === tab.id 
                            ? 'bg-gray-600 text-white' 
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-650'
                        }`}
                      >
                        <span>{tab.icon}</span>
                        <span>{tab.name}</span>
                        {activeTab === tab.id && (
                          <span 
                            className="ml-1 text-gray-400 hover:text-white cursor-pointer text-xs"
                            onClick={(e) => {
                              e.stopPropagation()
                              // Close tab functionality could go here
                            }}
                          >
                            ×
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Code Content */}
                <div className="bg-gray-900 rounded p-6 font-mono text-sm leading-relaxed h-64 md:h-80 overflow-hidden">
                  <motion.div 
                    className="space-y-1"
                    key={activeTab} // Re-animate when tab changes
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
                    className="inline-block w-2 h-5 bg-green-400 ml-1 mt-2"
                    animate={{ opacity: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  ></motion.div>
                </div>
              </div>
              
              {/* MacBook Keyboard/Base */}
              <div className="bg-gray-200 h-8 rounded-b-lg shadow-2xl relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-lg"></div>
                {/* Trackpad */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-400 rounded opacity-50"></div>
              </div>
              
              {/* MacBook Reflection */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-300 opacity-20 rounded-lg transform translate-y-2 blur-sm scale-y-[-1]"></div>
            </div>
          </motion.div>

          {/* Right Side - Typing Text */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Typing Effect for Name */}
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <TypingText text="I'm Vicky Kumar" speed={150} pauseDuration={3000} />
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              On the way of learning, connecting the dots.
            </motion.p>

            {/* Built for Developer Intelligence style tagline */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <p className="text-base lg:text-lg text-gray-600">
                Built for <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold">Developer Intelligence</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container-max-width section-padding">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              I work with modern technologies to build scalable and efficient applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'React', 'Node.js', 'MongoDB', 'Express',
              'JavaScript', 'TypeScript', 'Python', 'PostgreSQL',
              'Tailwind CSS', 'Docker', 'AWS', 'Git'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-secondary-900">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-max-width section-padding">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Here are some of my recent projects that I'm proud to showcase
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example project cards - these would be dynamic from API */}
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-secondary-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Project {project}
                </h3>
                <p className="text-secondary-600 mb-4">
                  Description of the project and technologies used to build it.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary-600 hover:text-primary-700">
                    View Live
                  </a>
                  <a href="#" className="text-secondary-600 hover:text-secondary-700">
                    View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/portfolio" className="btn-primary inline-flex items-center space-x-2">
              <span>View All Projects</span>
              <FiArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
