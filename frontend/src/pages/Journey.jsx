import React from 'react'
import { motion } from 'framer-motion'

const Journey = () => {
  const journeyData = [
    {
      year: '2026',
      title: 'Master of Computer Application (MCA)',
      institution: 'Lovely Professional University',
      description: 'Completed Post-Graduate program with Honors in Artificial Intelligence and Machine Learning',
      type: 'education',
      icon: '🎓',
      achievements: [
        'Specialized in AI/ML',
        'Advanced Algorithm Design',
        'Deep Learning Projects'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2023',
      title: 'Full Stack Development Certification',
      institution: 'Industry Expert Program',
      description: 'Comprehensive training in MERN Stack, DevOps, and Cloud Technologies',
      type: 'certification',
      icon: '🏆',
      achievements: [
        'React & Node.js Mastery',
        'AWS Cloud Practitioner',
        'Docker & Kubernetes'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2023',
      title: 'Bachelor of Computer Application (BCA)',
      institution: 'Indira Gandhi National Open University',
      description: 'Completed undergraduate program with focus on Computer Science fundamentals and Software Development',
      type: 'education',
      icon: '🎓',
      achievements: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Web Development'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      year: '2022-2024',
      title: 'Software Development Experience',
      institution: 'Tech Industry',
      description: 'Gained hands-on experience building scalable web applications and working with modern tech stacks',
      type: 'experience',
      icon: '💼',
      achievements: [
        'Built 20+ Production Apps',
        'Led Development Teams',
        'Agile & Scrum Methodology'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2021',
      title: 'Data Science & Machine Learning',
      institution: 'Online Learning Platforms',
      description: 'Completed intensive courses in Data Science, ML, and Python programming',
      type: 'certification',
      icon: '🏆',
      achievements: [
        'Python for Data Science',
        'Machine Learning Algorithms',
        'Data Visualization'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  // Doodle SVG components
  const DoodleCircles = () => (
    <svg className="absolute -top-10 -left-10 w-32 h-32 text-blue-200 opacity-30" viewBox="0 0 100 100">
      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
      <circle cx="75" cy="75" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
    </svg>
  )

  const DoodleStars = () => (
    <svg className="absolute -top-8 -right-8 w-24 h-24 text-yellow-300 opacity-40" viewBox="0 0 100 100">
      <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" fill="currentColor" />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <circle cx="80" cy="15" r="2" fill="currentColor" />
    </svg>
  )

  const DoodleArrows = () => (
    <svg className="absolute top-1/2 -right-12 w-20 h-20 text-purple-300 opacity-30" viewBox="0 0 100 100">
      <path d="M20 50 Q50 20 80 50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
      <path d="M80 50 L70 45 L75 55 Z" fill="currentColor" />
    </svg>
  )

  const DoodleWaves = () => (
    <svg className="absolute -bottom-10 -left-10 w-32 h-32 text-cyan-200 opacity-30" viewBox="0 0 100 100">
      <path d="M10 50 Q25 30 40 50 T70 50 T100 50" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10 65 Q25 45 40 65 T70 65 T100 65" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Doodles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-6xl opacity-10">📚</div>
          <div className="absolute top-40 right-20 text-5xl opacity-10">✨</div>
          <div className="absolute bottom-20 left-20 text-7xl opacity-10">🚀</div>
          <div className="absolute top-60 right-40 text-4xl opacity-10">💡</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-tight">
                My Journey
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              The Road to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto tracking-tight">
              Every step, every challenge, every achievement - here's my story of continuous learning and growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Wavy connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5 hidden lg:block">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M 0 0 Q 20 100 0 200 T 0 400 T 0 600 T 0 800 T 0 1000 T 0 1200 T 0 1400 L 0 1600"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeDasharray="10,5"
              />
            </svg>
          </div>

          {journeyData.map((item, index) => {
            const isLeft = index % 2 === 0
            const doodleComponents = [DoodleCircles, DoodleStars, DoodleArrows, DoodleWaves]
            const RandomDoodle = doodleComponents[index % doodleComponents.length]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-20 lg:mb-32 ${isLeft ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'} lg:w-1/2`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-8 ${isLeft ? 'lg:right-0 lg:left-auto' : 'lg:left-0'} left-0 lg:-ml-6 w-12 h-12 hidden lg:flex items-center justify-center`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center text-2xl transform ${isLeft ? 'translate-x-6' : '-translate-x-6'}`}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`relative ${isLeft ? 'lg:mr-16' : 'lg:ml-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, translateY: -5 }}
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden"
                  >
                    {/* Doodles */}
                    <RandomDoodle />

                    {/* Year Badge */}
                    <div className="absolute top-6 right-6">
                      <span className={`px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-full text-sm font-bold shadow-lg`}>
                        {item.year}
                      </span>
                    </div>

                    {/* Mobile Icon */}
                    <div className="lg:hidden text-4xl mb-4">{item.icon}</div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                          {item.title}
                        </h3>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent tracking-tight`}>
                          {item.institution}
                        </p>
                      </div>

                      <p className="text-gray-600 leading-relaxed tracking-tight">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 tracking-tight">Key Highlights:</h4>
                        <div className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}></div>
                              <span className="text-sm text-gray-600 tracking-tight">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Type Badge */}
                      <div className="flex items-center gap-2 pt-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${item.color} bg-opacity-10 rounded-full text-xs font-semibold tracking-tight capitalize`}>
                          {item.type}
                        </span>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${item.color} opacity-5 rounded-tl-full`}></div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        {/* Background Doodles */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 left-20 text-6xl">🎯</div>
          <div className="absolute bottom-10 right-20 text-7xl">🌟</div>
          <div className="absolute top-1/2 left-1/4 text-5xl">💪</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              The Journey Continues...
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed tracking-tight">
              Every day is a new opportunity to learn, grow, and make an impact. Let's build something amazing together!
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg tracking-tight">
              Let's Connect
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Journey
