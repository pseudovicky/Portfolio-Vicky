import React from 'react'
import { motion } from 'framer-motion'

const ResearchAnalyst = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🔬</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Research Analyst
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conducting in-depth research and providing data-driven insights
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Quantitative Analysis</h3>
                <p className="text-gray-600">Statistical modeling and hypothesis testing</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Qualitative Research</h3>
                <p className="text-gray-600">Interviews, focus groups, and ethnographic studies</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Literature Review</h3>
                <p className="text-gray-600">Comprehensive academic and industry research synthesis</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Report Writing</h3>
                <p className="text-gray-600">Technical documentation and research publications</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Contributions</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">Market Analysis Report</h3>
                <p className="text-gray-600">Published comprehensive market research for emerging technologies</p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">User Behavior Study</h3>
                <p className="text-gray-600">Conducted large-scale study on digital consumer behavior</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Industry Trend Analysis</h3>
                <p className="text-gray-600">Analyzed and forecasted tech industry trends with 90% accuracy</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ResearchAnalyst
