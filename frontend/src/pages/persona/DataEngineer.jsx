import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion'

const DataEngineer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const heroOpacity = useTransform(smoothScrollProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(smoothScrollProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const databases = [
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-blue-700" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
    { name: "Redis", icon: "⚡", color: "from-red-500 to-red-700" },
    { name: "Cassandra", icon: "💎", color: "from-purple-500 to-purple-700" },
    { name: "Snowflake", icon: "❄️", color: "from-cyan-500 to-cyan-700" },
    { name: "BigQuery", icon: "📊", color: "from-yellow-500 to-yellow-700" },
  ]

  const technologies = [
    { name: "Apache Spark", desc: "Distributed data processing" },
    { name: "Apache Kafka", desc: "Real-time streaming" },
    { name: "Airflow", desc: "Workflow orchestration" },
    { name: "dbt", desc: "Data transformation" },
    { name: "Docker", desc: "Containerization" },
    { name: "Kubernetes", desc: "Container orchestration" },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-slate-900 to-slate-900 opacity-50"></div>
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="relative">
            {/* Border Frame */}
            <div className="absolute inset-0 border-4 border-white/20 rounded-3xl backdrop-blur-sm"></div>
            
            <div className="relative p-8 sm:p-12 lg:p-20">
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="flex items-center gap-2 text-blue-300 text-sm sm:text-base font-medium">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  ELITE PROFESSIONAL
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <p className="text-blue-300 text-lg sm:text-xl mb-4 tracking-wide">
                  Data Architecture Expert
                </p>
                <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-white leading-none tracking-tight">
                  DATA
                </h1>
                <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-white leading-none tracking-tight">
                  ENGINEER
                </h1>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.9)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                <span>EXPLORE PORTFOLIO</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              {/* Bottom Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 pt-8 border-t border-white/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-blue-300 text-sm uppercase tracking-wide mb-2">Experience Since</p>
                    <p className="text-white text-3xl font-bold">2020</p>
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm uppercase tracking-wide mb-2">Specialization</p>
                    <p className="text-white text-xl">Building scalable data pipelines and infrastructure for enterprise-level data solutions across cloud platforms</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-blue-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Cloud-Native Architecture • Global Scale</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Database Portfolio Section with Scroll Effects */}
      <AnimatedTextSection scrollProgress={smoothScrollProgress} />

      {/* Database Cards Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white text-center mb-16"
          >
            Database Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {databases.map((db, index) => (
              <DatabaseCard key={db.name} db={db} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white text-center mb-16"
          >
            Technology Stack
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
    </div>
  )
}

// Animated Text Section Component
const AnimatedTextSection = ({ scrollProgress }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const x = useTransform(scrollProgress, [0.2, 0.4], [0, -100])
  const x2 = useTransform(scrollProgress, [0.2, 0.4], [0, 100])
  const opacity = useTransform(scrollProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0])

  const portfolioText = [
    "Building robust data pipelines that process millions of events per second",
    "Architecting cloud-native data lakes on AWS, Azure, and GCP platforms",
    "Designing scalable ETL workflows with Apache Airflow and Spark",
    "Implementing real-time streaming solutions using Kafka and Flink",
    "Optimizing database performance and query execution times",
    "Creating data warehouses with Snowflake and BigQuery",
  ]

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-7xl font-bold text-white mb-6">
            Database Portfolio
          </h2>
          <p className="text-2xl text-blue-300 max-w-4xl mx-auto">
            Transforming raw data into actionable insights through innovative data engineering solutions
          </p>
        </motion.div>

        <div className="space-y-6">
          {portfolioText.map((text, index) => (
            <ScrollingTextLine 
              key={index} 
              text={text} 
              index={index}
              direction={index % 2 === 0 ? 1 : -1}
            />
          ))}
        </div>

        {/* Animated Data Flow Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative h-32"
        >
          <div className="absolute inset-0 flex items-center justify-center gap-8">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl"
            >
              📊
            </motion.div>
            <motion.div
              animate={{ x: [-20, 20, -20] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl"
            >
              ➡️
            </motion.div>
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-4xl"
            >
              ⚙️
            </motion.div>
            <motion.div
              animate={{ x: [-20, 20, -20] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl"
            >
              ➡️
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="text-4xl"
            >
              💾
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

// Scrolling Text Line Component
const ScrollingTextLine = ({ text, index, direction }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: direction * 100 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        x: direction * 10,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      <motion.div
        whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
        className="p-6 rounded-2xl backdrop-blur-sm border border-white/10 cursor-pointer transition-all"
      >
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-3xl"
          >
            🔄
          </motion.div>
          <p className="text-xl sm:text-2xl text-white/90 group-hover:text-white transition-colors">
            {text}
          </p>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="ml-auto text-blue-400"
          >
            →
          </motion.div>
        </div>
        
        {/* Hover effect line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          className="h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mt-4 origin-left"
        />
      </motion.div>
    </motion.div>
  )
}

// Database Card Component
const DatabaseCard = ({ db, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10, 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${db.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
      <div className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/30 transition-all">
        <motion.div
          animate={{ 
            rotateY: [0, 360],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="text-6xl mb-4"
        >
          {db.icon}
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">{db.name}</h3>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          className={`h-1 bg-gradient-to-r ${db.color} rounded-full`}
        />
      </div>
    </motion.div>
  )
}

// Technology Card Component
const TechnologyCard = ({ tech, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group"
    >
      <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all cursor-pointer">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {tech.name}
        </h3>
        <p className="text-blue-300/70 group-hover:text-blue-300 transition-colors">
          {tech.desc}
        </p>
      </div>
    </motion.div>
  )
}

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { value: "10M+", label: "Events Processed/Second" },
    { value: "99.9%", label: "System Uptime" },
    { value: "50+", label: "Data Pipelines Built" },
    { value: "5PB+", label: "Data Managed" },
  ]

  return (
    <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-md border border-white/10 rounded-3xl p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Stat Card Component
const StatCard = ({ stat, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const target = parseInt(stat.value.replace(/[^0-9]/g, ''))
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, stat.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={isInView ? { y: 0 } : { y: 20 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        className="text-4xl lg:text-5xl font-bold text-white mb-2"
      >
        {stat.value}
      </motion.div>
      <p className="text-blue-300 text-sm lg:text-base">{stat.label}</p>
    </motion.div>
  )
}

export default DataEngineer
