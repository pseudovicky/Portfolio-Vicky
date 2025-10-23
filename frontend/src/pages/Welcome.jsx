import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion"
import { FiTerminal, FiCode, FiCoffee, FiHeart, FiZap, FiCpu, FiGithub, FiDatabase, FiLayers, FiTrendingUp, FiAward, FiTarget } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

export default function Welcome() {
  const navigate = useNavigate()
  const [terminalText, setTerminalText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [showOptions, setShowOptions] = useState(false)
  
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  const terminalLines = [
    "$ initializing connection...",
    "$ loading creative_portfolio.exe",
    "$ welcome fellow developer! 👨‍💻",
    "$ scanning interests... [████████] 100%",
    "$ passion for code detected ✓",
    "$ ready to explore amazing projects!"
  ]

  // Typing animation effect
  useEffect(() => {
    if (currentStep < terminalLines.length) {
      const currentLine = terminalLines[currentStep]
      let index = 0
      
      const typingInterval = setInterval(() => {
        if (index <= currentLine.length) {
          setTerminalText(currentLine.substring(0, index))
          index++
        } else {
          clearInterval(typingInterval)
          setTimeout(() => {
            setCurrentStep(prev => prev + 1)
            setTerminalText("")
          }, 800)
        }
      }, 50)

      return () => clearInterval(typingInterval)
    } else {
      setShowOptions(true)
    }
  }, [currentStep])

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const codeSnippets = [
    { lang: "JavaScript", code: "const passion = 'coding';" },
    { lang: "Python", code: "def innovate(): return True" },
    { lang: "React", code: "<Dream component='reality' />" },
    { lang: "CSS", code: ".creativity { display: flex; }" }
  ]

  const interests = [
    { icon: FiCode, text: "Clean Code", color: "text-blue-500" },
    { icon: FiCpu, text: "System Design", color: "text-green-500" },
    { icon: FiZap, text: "Performance", color: "text-yellow-500" },
    { icon: FiCoffee, text: "Late Night Coding", color: "text-orange-500" }
  ]

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        style={{ opacity, scale }}
        className="min-h-screen relative"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating Code Snippets */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {codeSnippets.map((snippet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                y: [-20, -80],
                x: [0, Math.random() * 100 - 50]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 1.5
              }}
              className={`absolute text-xs font-mono text-cyan-400 opacity-20`}
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 15}%`
              }}
            >
              <span className="text-purple-400">{snippet.lang}</span> {snippet.code}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-3xl mb-8"
          >
            <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-700 px-4 py-2 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-sm text-gray-400 font-mono">
                  vicky@portfolio:~
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm min-h-[300px]">
                {terminalLines.slice(0, currentStep).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-2 text-green-400"
                  >
                    {line}
                  </motion.div>
                ))}
                <div className="text-green-400">
                  {terminalText}
                  {!showOptions && <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>▊</span>}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Welcome Message */}
          <AnimatePresence>
            {showOptions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-6"
              >
                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Hey Fellow Developer! 👋
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-2">
                    Welcome to my digital playground
                  </p>
                  <p className="text-md text-gray-400 font-mono">
                    // Where <span className="text-cyan-400">code</span> meets <span className="text-purple-400">creativity</span>
                  </p>
                </motion.div>

                {/* Interests Grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 max-w-2xl mx-auto"
                >
                  {interests.map((interest, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col items-center space-y-2 hover:border-cyan-500 transition-all cursor-pointer"
                    >
                      <interest.icon className={`text-2xl ${interest.color}`} />
                      <span className="text-sm text-gray-300">{interest.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/portfolio')}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center space-x-2"
                  >
                    <FiCode />
                    <span>Explore My Work</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/about')}
                    className="px-8 py-4 bg-gray-800 border-2 border-gray-600 rounded-lg font-semibold text-white hover:border-cyan-500 transition-all flex items-center space-x-2"
                  >
                    <FiTerminal />
                    <span>About Me</span>
                  </motion.button>
                </motion.div>

                {/* Fun Quote */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-8 text-gray-500 text-sm font-mono italic"
                >
                  "First, solve the problem. Then, write the code." - John Johnson
                </motion.div>

                {/* Easter Egg */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex items-center justify-center space-x-2 text-pink-500 mt-4"
                >
                  <FiHeart className="animate-pulse" />
                  <span className="text-xs">Made with passion and lots of coffee</span>
                  <FiCoffee className="animate-bounce" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Background gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </motion.div>

      {/* Scroll Sections */}
      <ScrollSection
        title="Build with Modern Technologies"
        subtitle="Leveraging the latest tech stack for exceptional results"
        features={[
          { icon: FiCode, title: "Full Stack Development", desc: "React, Node.js, MongoDB - building end-to-end solutions" },
          { icon: FiDatabase, title: "Data Engineering", desc: "Scalable pipelines and efficient data architecture" },
          { icon: FiLayers, title: "Clean Architecture", desc: "Maintainable, testable, and scalable code patterns" }
        ]}
      />

      <ScrollSection
        title="Focus on Innovation & Performance"
        subtitle="Creating solutions that scale and deliver value"
        features={[
          { icon: FiZap, title: "Optimized Performance", desc: "Lightning-fast applications with best practices" },
          { icon: FiTrendingUp, title: "Continuous Learning", desc: "Always exploring new technologies and methodologies" },
          { icon: FiTarget, title: "Result-Driven", desc: "Focused on delivering measurable business outcomes" }
        ]}
        reverse
      />

      <ScrollSection
        title="Collaborate & Communicate"
        subtitle="Working together to bring ideas to life"
        features={[
          { icon: FiGithub, title: "Version Control", desc: "Git workflows for seamless team collaboration" },
          { icon: FiAward, title: "Best Practices", desc: "Following industry standards and clean code principles" },
          { icon: FiCpu, title: "Problem Solving", desc: "Analytical approach to complex technical challenges" }
        ]}
      />

      {/* Final CTA Section */}
      <FinalCTA navigate={navigate} />
    </div>
  )
}

// Reusable Scroll Section Component
const ScrollSection = ({ title, subtitle, features, reverse = false }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-gray-400">{subtitle}</p>
        </motion.div>

        <div className={`grid md:grid-cols-3 gap-8 ${reverse ? 'md:flex-row-reverse' : ''}`}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 hover:border-cyan-500 transition-all group"
            >
              <feature.icon className="text-5xl text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors" />
              <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA Component
const FinalCTA = ({ navigate }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 max-w-4xl"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-8"
        >
          <FiCpu className="text-8xl text-cyan-400" />
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Ready to Build Something Amazing?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's collaborate and turn your ideas into powerful, scalable solutions
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/portfolio')}
            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-xl text-white shadow-2xl hover:shadow-cyan-500/50 transition-all"
          >
            View My Projects
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="px-10 py-5 bg-transparent border-2 border-cyan-500 rounded-xl font-bold text-xl text-cyan-400 hover:bg-cyan-500/10 transition-all"
          >
            Get In Touch
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-gray-500 font-mono text-sm"
        >
          // Let's write the future, one line of code at a time
        </motion.p>
      </motion.div>
    </section>
  )
}

<style jsx>{`
  .bg-grid-pattern {
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
  }
`}</style>
