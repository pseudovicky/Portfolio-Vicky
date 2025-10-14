import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const DataAnalyst = () => {
  const [isVisible, setIsVisible] = useState({})
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-section')
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight * 0.8
        setIsVisible(prev => ({ ...prev, [index]: isInView }))
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tools = [
    { name: 'Excel', icon: '📊', level: 95 },
    { name: 'Google Sheets', icon: '📈', level: 92 },
    { name: 'Tableau', icon: '📉', level: 88 },
    { name: 'Power BI', icon: '💹', level: 90 },
    { name: 'Python', icon: '🐍', level: 87 },
    { name: 'SQL', icon: '🗄️', level: 93 },
    { name: 'R Studio', icon: '📐', level: 85 },
    { name: 'Big Data Tools', icon: '🔧', level: 82 }
  ]

  const expertise = [
    {
      title: 'Advanced Excel & Spreadsheet Mastery',
      icon: '📊',
      skills: [
        'Complex formulas (VLOOKUP, INDEX-MATCH, Array Formulas)',
        'Pivot Tables & Advanced Charts',
        'Data validation & conditional formatting',
        'Macros & VBA automation',
        'Google Sheets integration & collaborative workflows'
      ]
    },
    {
      title: 'Big Data Analytics',
      icon: '🔥',
      skills: [
        'Hadoop ecosystem (HDFS, MapReduce)',
        'Apache Spark for large-scale processing',
        'Hive & Pig for data querying',
        'NoSQL databases (MongoDB, Cassandra)',
        'Real-time data streaming with Kafka'
      ]
    },
    {
      title: 'Data Visualization & BI',
      icon: '📈',
      skills: [
        'Interactive dashboards in Tableau & Power BI',
        'D3.js for custom visualizations',
        'Storytelling with data',
        'KPI tracking & metrics design',
        'Report automation & distribution'
      ]
    },
    {
      title: 'Statistical Analysis',
      icon: '📐',
      skills: [
        'Hypothesis testing & A/B testing',
        'Regression analysis & predictive modeling',
        'Time series forecasting',
        'Cohort analysis & segmentation',
        'Statistical programming in R & Python'
      ]
    }
  ]

  const projects = [
    {
      title: 'Revenue Growth Analytics Dashboard',
      description: 'Built an executive dashboard tracking $50M+ in revenue with real-time KPIs, reducing reporting time by 80%',
      technologies: ['Tableau', 'SQL', 'Python'],
      impact: '80% faster reporting',
      color: 'blue'
    },
    {
      title: 'Customer Churn Prediction Model',
      description: 'Developed predictive model analyzing 100K+ customer records, identifying at-risk customers with 89% accuracy',
      technologies: ['Python', 'scikit-learn', 'Excel'],
      impact: '25% retention improvement',
      color: 'purple'
    },
    {
      title: 'Big Data Sales Analysis',
      description: 'Processed 10TB+ of sales data using Spark, uncovering patterns that led to $2M cost savings',
      technologies: ['Spark', 'Hadoop', 'Power BI'],
      impact: '$2M cost savings',
      color: 'green'
    },
    {
      title: 'Marketing Campaign Optimization',
      description: 'Analyzed multi-channel marketing data to optimize campaigns, increasing ROI by 45%',
      technologies: ['Google Sheets', 'SQL', 'Tableau'],
      impact: '45% ROI increase',
      color: 'orange'
    }
  ]

  return (
    <div className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section - 100vh */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>

        {/* Floating Data Visualization Elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400/20 text-4xl"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight 
              }}
              animate={{ 
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
              }}
              transition={{ 
                duration: 10 + Math.random() * 20, 
                repeat: Infinity, 
                repeatType: 'reverse' 
              }}
            >
              {['📊', '📈', '💹', '📉', '🔍'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="text-8xl md:text-9xl mb-6 filter drop-shadow-2xl">📊</div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            >
              Data Analyst
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4 mb-8"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed">
                Transforming Complex Data into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold">
                  Actionable Insights
                </span>
              </p>
              <p className="text-lg md:text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
                With expertise in Excel, Big Data technologies, and advanced analytics, I turn numbers into narratives that drive strategic decision-making
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <span className="px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 font-semibold">
                Excel Expert
              </span>
              <span className="px-6 py-3 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-200 font-semibold">
                Big Data Specialist
              </span>
              <span className="px-6 py-3 bg-pink-500/20 backdrop-blur-sm border border-pink-400/30 rounded-full text-pink-200 font-semibold">
                BI Master
              </span>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white text-4xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Tools & Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Technical Proficiency
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-3 text-center">{tool.icon}</div>
                <h3 className="text-white text-center font-semibold mb-3">{tool.name}</h3>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  />
                </div>
                <p className="text-blue-300 text-center text-sm mt-2">{tool.level}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
          >
            Core Expertise
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-4">{area.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                </div>
                <ul className="space-y-3">
                  {area.skills.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start text-gray-300"
                    >
                      <span className="text-blue-400 mr-3 mt-1">▹</span>
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 border-${project.color}-500/30 hover:border-${project.color}-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-${project.color}-500/20`}
              >
                <div className={`inline-block px-4 py-2 bg-${project.color}-500/20 rounded-full text-${project.color}-300 text-sm font-semibold mb-4`}>
                  {project.impact}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-700/50 rounded-full text-blue-300 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Let's Turn Your Data into Insights</h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to unlock the power of your data? Let's collaborate and create data-driven solutions.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-110 shadow-lg">
            Get In Touch
          </button>
        </motion.div>
      </section>
    </div>
  )
}

export default DataAnalyst
