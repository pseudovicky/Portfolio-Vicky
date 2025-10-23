import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Persona = () => {
  const personas = [
    {
      title: 'Data Analyst',
      description: 'Analyzing data patterns and creating insights for business decisions',
      path: '/persona/data-analyst',
      icon: '📊'
    },
    {
      title: 'Data Engineer',
      description: 'Building robust data pipelines and infrastructure',
      path: '/persona/data-engineer',
      icon: '🔧'
    },
    {
      title: 'ML Engineer',
      description: 'Developing and deploying machine learning models',
      path: '/persona/ml-engineer',
      icon: '🤖'
    },
    {
      title: 'AI Engineer',
      description: 'Creating intelligent systems and AI solutions',
      path: '/persona/ai-engineer',
      icon: '🧠'
    },
    {
      title: 'UI/UX Designer',
      description: 'Crafting beautiful and intuitive user experiences',
      path: '/persona/ui-ux-designer',
      icon: '🎨'
    },
    {
      title: 'Front End Developer',
      description: 'Building responsive and interactive web interfaces',
      path: '/persona/front-end-developer',
      icon: '💻'
    },
    {
      title: 'Full Stack Developer',
      description: 'End-to-end application development expertise',
      path: '/persona/full-stack-developer',
      icon: '⚡'
    },
    {
      title: 'Research Analyst',
      description: 'Conducting research and providing analytical insights',
      path: '/persona/research-analyst',
      icon: '🔬'
    },
    {
      title: 'Explorer',
      description: 'On the journey of searching, connecting dots, and learning',
      path: '/persona/explorer',
      icon: '🗺️'
    },
    {
      title: 'Others',
      description: 'Exploring other professional roles and capabilities',
      path: '/persona/others',
      icon: '🌟'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            My Professional Personas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my diverse skill set and expertise across multiple domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={persona.path}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-5xl mb-4">{persona.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {persona.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {persona.description}
                  </p>
                  <div className="mt-6 flex items-center text-blue-600 font-medium">
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Persona
