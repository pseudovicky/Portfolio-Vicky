import React from 'react'
import { motion } from 'framer-motion'

const UIUXDesigner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🎨</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              UI/UX Designer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Crafting beautiful, intuitive, and user-centered digital experiences
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Design Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">User Research</h3>
                <p className="text-gray-600">Conducting user interviews, surveys, and usability testing</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Wireframing & Prototyping</h3>
                <p className="text-gray-600">Figma, Adobe XD, Sketch for design mockups</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Visual Design</h3>
                <p className="text-gray-600">Creating cohesive design systems and brand identities</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Interaction Design</h3>
                <p className="text-gray-600">Designing smooth animations and micro-interactions</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Design Projects</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Redesign</h3>
                <p className="text-gray-600">Redesigned shopping experience increasing conversion by 35%</p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">Mobile App Design</h3>
                <p className="text-gray-600">Created intuitive mobile interface with 4.8★ app store rating</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Design System</h3>
                <p className="text-gray-600">Built comprehensive design system used across 20+ products</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default UIUXDesigner
