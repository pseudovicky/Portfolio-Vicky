import React from 'react'
import { motion } from 'framer-motion'

const MLEngineer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🤖</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Machine Learning Engineer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Developing and deploying cutting-edge machine learning models for real-world applications
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
                <p className="text-gray-600">TensorFlow, PyTorch, Keras for neural network development</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Model Deployment</h3>
                <p className="text-gray-600">MLOps, Docker, Kubernetes for production ML systems</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
                <p className="text-gray-600">Image classification, object detection, and segmentation</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">NLP</h3>
                <p className="text-gray-600">Natural Language Processing and text analytics</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">Recommendation System</h3>
                <p className="text-gray-600">Built a collaborative filtering system increasing user engagement by 40%</p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">Predictive Maintenance</h3>
                <p className="text-gray-600">Developed ML model to predict equipment failures with 95% accuracy</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sentiment Analysis Platform</h3>
                <p className="text-gray-600">Created NLP-based sentiment analysis for social media monitoring</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MLEngineer
