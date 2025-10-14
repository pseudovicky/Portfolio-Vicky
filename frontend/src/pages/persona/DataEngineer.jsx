import React from 'react'
import { motion } from 'framer-motion'

const DataEngineer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🔧</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Data Engineer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building scalable data pipelines and infrastructure for enterprise solutions
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Big Data Technologies</h3>
                <p className="text-gray-600">Hadoop, Spark, Kafka for large-scale data processing</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Cloud Platforms</h3>
                <p className="text-gray-600">AWS, Azure, GCP for cloud-based data solutions</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">ETL/ELT Pipelines</h3>
                <p className="text-gray-600">Airflow, Luigi for workflow orchestration</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold mb-2">Databases</h3>
                <p className="text-gray-600">PostgreSQL, MongoDB, Redis, Snowflake</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Achievements</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">Real-time Data Pipeline</h3>
                <p className="text-gray-600">Built a real-time streaming pipeline processing 1M+ events per second</p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-2">Data Warehouse Optimization</h3>
                <p className="text-gray-600">Optimized data warehouse queries, reducing processing time by 60%</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Infrastructure Automation</h3>
                <p className="text-gray-600">Automated infrastructure deployment using Terraform and Docker</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DataEngineer
