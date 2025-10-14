import React from 'react'
import { motion } from 'framer-motion'

const Others = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🌟</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Other Professional Roles
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exploring diverse skills and capabilities across multiple domains
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Project Management</h3>
                <p className="text-gray-600">Agile, Scrum, and project coordination skills</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Technical Writing</h3>
                <p className="text-gray-600">Documentation, tutorials, and technical content creation</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">DevOps Engineering</h3>
                <p className="text-gray-600">Infrastructure automation and CI/CD pipelines</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">QA & Testing</h3>
                <p className="text-gray-600">Automated testing and quality assurance</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Product Management</h3>
                <p className="text-gray-600">Product strategy and roadmap planning</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Blockchain Development</h3>
                <p className="text-gray-600">Smart contracts and decentralized applications</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Versatile Contributions</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">Cross-functional Leadership</h3>
                <p className="text-gray-600">Led diverse teams across multiple technical domains</p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">Innovation & Strategy</h3>
                <p className="text-gray-600">Developed innovative solutions combining multiple skill sets</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-gray-600">Constantly exploring new technologies and methodologies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Others
