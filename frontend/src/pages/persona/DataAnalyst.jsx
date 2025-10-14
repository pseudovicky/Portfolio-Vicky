import React from 'react'
import { motion } from 'framer-motion'

const DataAnalyst = () => {

  const skills = [
    {
      category: 'Data Analysis & Visualization',
      tools: [
        { name: 'Microsoft Excel', level: 95, description: 'Advanced formulas, Pivot Tables, Macros & VBA' },
        { name: 'Google Sheets', level: 92, description: 'Collaboration, Integration & Automation' },
        { name: 'Tableau', level: 88, description: 'Interactive dashboards & visual storytelling' },
        { name: 'Power BI', level: 90, description: 'Business Intelligence & reporting' },
      ]
    },
    {
      category: 'Programming & Databases',
      tools: [
        { name: 'SQL', level: 93, description: 'Complex queries, optimization & database design' },
        { name: 'Python', level: 87, description: 'Pandas, NumPy, data manipulation & analysis' },
        { name: 'R', level: 85, description: 'Statistical analysis & data visualization' },
      ]
    },
    {
      category: 'Big Data Technologies',
      tools: [
        { name: 'Apache Spark', level: 82, description: 'Large-scale data processing' },
        { name: 'Hadoop', level: 80, description: 'Distributed storage & computing' },
        { name: 'Apache Kafka', level: 78, description: 'Real-time data streaming' },
      ]
    }
  ]

  const projects = [
    {
      title: 'Revenue Analytics Dashboard',
      description: 'Designed and implemented a comprehensive executive dashboard tracking $50M+ in revenue streams across multiple business units. Integrated real-time KPIs with automated reporting, reducing manual reporting time by 80% and enabling data-driven decision making at the executive level.',
      technologies: ['Tableau', 'SQL', 'Python'],
      metrics: [
        { label: 'Revenue Tracked', value: '$50M+' },
        { label: 'Time Saved', value: '80%' },
        { label: 'Reports Generated', value: '100+' }
      ],
      impact: 'Enabled executive team to make faster, data-driven decisions'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Developed a machine learning model analyzing 100,000+ customer records to identify at-risk customers with 89% accuracy. Implemented predictive scoring system that helped retention team proactively engage customers, improving retention rates by 25%.',
      technologies: ['Python', 'scikit-learn', 'Excel', 'SQL'],
      metrics: [
        { label: 'Accuracy', value: '89%' },
        { label: 'Retention Improvement', value: '25%' },
        { label: 'Customers Analyzed', value: '100K+' }
      ],
      impact: 'Increased customer lifetime value and reduced churn'
    },
    {
      title: 'Big Data Sales Analysis',
      description: 'Processed and analyzed 10TB+ of historical sales data using Apache Spark and Hadoop. Identified key patterns in customer purchasing behavior, seasonal trends, and product performance that led to strategic inventory optimization and $2M in cost savings.',
      technologies: ['Apache Spark', 'Hadoop', 'Power BI', 'SQL'],
      metrics: [
        { label: 'Data Processed', value: '10TB+' },
        { label: 'Cost Savings', value: '$2M' },
        { label: 'Analysis Time', value: '60% Faster' }
      ],
      impact: 'Optimized inventory management and reduced operational costs'
    },
    {
      title: 'Marketing ROI Optimization',
      description: 'Analyzed multi-channel marketing campaign data across email, social media, and paid advertising. Created attribution model to measure campaign effectiveness and optimize marketing spend allocation, resulting in 45% improvement in overall ROI.',
      technologies: ['Google Sheets', 'SQL', 'Tableau', 'Python'],
      metrics: [
        { label: 'ROI Increase', value: '45%' },
        { label: 'Channels Analyzed', value: '8+' },
        { label: 'Campaign Tracking', value: '50+' }
      ],
      impact: 'Maximized marketing efficiency and budget allocation'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section - Modern Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-cyan-300 rounded-full text-sm font-semibold border border-cyan-400/30">
                Professional Data Analyst
              </span>
            </motion.div> */}
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-regular text-white mb-10 leading-tight tracking-tight"
            >
              Transforming Data into Actionable Insights
              {/* <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', display: 'inline-block' }}>
                
              </span> */}
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed tracking-tight"
            >
              Specialized in advanced analytics, data visualization, and big data technologies.
              Turning complex datasets into strategic business intelligence that drives measurable results.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-cyan-400 mb-2 tracking-tight">10TB+</div>
                <div className="text-sm text-gray-400 tracking-tight">Data Processed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2 tracking-tight">$50M+</div>
                <div className="text-sm text-gray-400 tracking-tight">Revenue Analyzed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-purple-400 mb-2 tracking-tight">100+</div>
                <div className="text-sm text-gray-400 tracking-tight">Reports Created</div>
              </div>
            </motion.div>
            
            {/* Tech Stack Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {['Excel Mastery', 'SQL Expert', 'Big Data Analytics', 'BI Dashboards'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  className="px-6 py-2.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-gray-300 font-medium hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 tracking-tight"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-gray-400 text-sm mb-2 tracking-tight">Scroll to explore</span>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div> */}
      </section>

      {/* About Section - Redesigned */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-tight">
                What I Do
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Bridging Data & Decisions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-tight">
              Transforming complex datasets into strategic insights that drive business growth and innovation
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Side - Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                  From Numbers to Narratives
                </h3>
                <p className="text-gray-600 leading-relaxed tracking-tight mb-4">
                  With over 5 years of experience in data analytics, I've mastered the art of extracting meaningful insights from complex datasets. My journey spans from traditional spreadsheet analysis to cutting-edge big data technologies.
                </p>
                <p className="text-gray-600 leading-relaxed tracking-tight">
                  I specialize in building data-driven solutions that don't just present numbers, but tell compelling stories that empower stakeholders to make confident, strategic decisions.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 tracking-tight">Data-Driven Impact</h4>
                    <p className="text-sm text-gray-600 tracking-tight">Delivered $2M+ in cost savings through strategic data analysis and optimization</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 tracking-tight">Performance Excellence</h4>
                    <p className="text-sm text-gray-600 tracking-tight">Improved operational efficiency by 80% through automated reporting systems</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 tracking-tight">Cross-Functional Collaboration</h4>
                    <p className="text-sm text-gray-600 tracking-tight">Partner with teams across finance, marketing, and operations for holistic insights</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Expertise Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Data Visualization</h3>
                      <p className="text-gray-600 text-sm leading-relaxed tracking-tight">
                        Crafting intuitive dashboards and interactive visualizations that transform raw data into actionable insights using Tableau and Power BI.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full tracking-tight">Tableau</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full tracking-tight">Power BI</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full tracking-tight">D3.js</span>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Big Data Processing</h3>
                      <p className="text-gray-600 text-sm leading-relaxed tracking-tight">
                        Handling terabytes of data with Apache Spark and Hadoop, turning massive datasets into strategic business intelligence.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded-full tracking-tight">Spark</span>
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded-full tracking-tight">Hadoop</span>
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded-full tracking-tight">Kafka</span>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Predictive Analytics</h3>
                      <p className="text-gray-600 text-sm leading-relaxed tracking-tight">
                        Building ML models and statistical algorithms to forecast trends and enable data-driven decision making.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full tracking-tight">Python</span>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full tracking-tight">scikit-learn</span>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full tracking-tight">R</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 tracking-tight">
                5+
              </div>
              <div className="text-sm text-gray-600 tracking-tight">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2 tracking-tight">
                50+
              </div>
              <div className="text-sm text-gray-600 tracking-tight">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 tracking-tight">
                10TB+
              </div>
              <div className="text-sm text-gray-600 tracking-tight">Data Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 tracking-tight">
                98%
              </div>
              <div className="text-sm text-gray-600 tracking-tight">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto tracking-tight">
              Comprehensive expertise across industry-leading tools and technologies
            </p>
          </motion.div>

          <div className="space-y-12">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">{skillGroup.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillGroup.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: toolIndex * 0.05 }}
                      className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-gray-900 tracking-tight">{tool.name}</h4>
                        <span className="text-sm font-bold text-blue-600 tracking-tight">{tool.level}%</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 tracking-tight">{tool.description}</p>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tool.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto tracking-tight">
              Real-world impact through data-driven solutions and strategic analytics
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 tracking-tight">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 tracking-tight"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="inline-flex items-center text-blue-600 font-medium tracking-tight">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {project.impact}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center space-y-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-white p-4 rounded-xl border border-gray-200">
                        <div className="text-2xl font-bold text-blue-600 mb-1 tracking-tight">{metric.value}</div>
                        <div className="text-sm text-gray-600 tracking-tight">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Turn Your Data into Insights?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed tracking-tight">
              Let's collaborate to unlock the full potential of your data and drive strategic business outcomes.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg tracking-tight">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DataAnalyst
