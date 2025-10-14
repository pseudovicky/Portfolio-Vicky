import React from 'react'
import { motion } from 'framer-motion'

const FullStackDeveloper = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">⚡</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Full Stack Developer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end application development from database to user interface
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Full Stack Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Frontend Technologies</h3>
                <p className="text-gray-600">React, Vue, Angular with modern UI frameworks</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                <p className="text-gray-600">Node.js, Python, Java for robust server-side applications</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Database Management</h3>
                <p className="text-gray-600">SQL, NoSQL, database design and optimization</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">DevOps & Deployment</h3>
                <p className="text-gray-600">Docker, CI/CD, AWS, Azure for production deployment</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Full Stack Projects</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">SaaS Platform</h3>
                <p className="text-gray-600">Built complete SaaS application serving 10K+ users</p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Solution</h3>
                <p className="text-gray-600">Developed full-featured online store with payment integration</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Social Media App</h3>
                <p className="text-gray-600">Created social networking platform with real-time features</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FullStackDeveloper
