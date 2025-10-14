import React from 'react'
import { motion } from 'framer-motion'

const AIEngineer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🧠</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              AI Engineer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating intelligent systems and AI-powered solutions for complex challenges
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Generative AI</h3>
                <p className="text-gray-600">GPT, DALL-E, Stable Diffusion for content generation</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Reinforcement Learning</h3>
                <p className="text-gray-600">Building autonomous agents and decision-making systems</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">AI Ethics</h3>
                <p className="text-gray-600">Responsible AI development and bias mitigation</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Neural Architecture</h3>
                <p className="text-gray-600">Designing and optimizing complex neural networks</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notable Work</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">AI Chatbot Platform</h3>
                <p className="text-gray-600">Developed conversational AI handling 100K+ daily interactions</p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">Intelligent Automation</h3>
                <p className="text-gray-600">Created AI agents automating complex business workflows</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Analytics</h3>
                <p className="text-gray-600">Built predictive analytics system with self-learning capabilities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AIEngineer
