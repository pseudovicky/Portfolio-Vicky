import React from 'react'
import { motion } from 'framer-motion'

const FrontEndDeveloper = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">💻</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Front End Developer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building responsive, performant, and interactive web applications
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-cyan-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Modern Frameworks</h3>
                <p className="text-gray-600">React, Vue.js, Next.js for dynamic web applications</p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Styling & Design</h3>
                <p className="text-gray-600">CSS3, Tailwind CSS, SASS, styled-components</p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">State Management</h3>
                <p className="text-gray-600">Redux, Context API, Zustand for complex state handling</p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                <p className="text-gray-600">Code splitting, lazy loading, and bundle optimization</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Portfolio Highlights</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">Progressive Web App</h3>
                <p className="text-gray-600">Built PWA with offline capabilities and push notifications</p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">Component Library</h3>
                <p className="text-gray-600">Created reusable React component library with Storybook</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-time Dashboard</h3>
                <p className="text-gray-600">Developed real-time analytics dashboard with WebSocket integration</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FrontEndDeveloper
