import { motion } from 'framer-motion'
import { FiExternalLink, FiFileText, FiCalendar, FiTag } from 'react-icons/fi'

const researchPapers = [
  {
    _id: '1',
    title: 'The Relationship Between Data and Information - Correlation, Transformation and Discovery through Data Science',
    abstract: 'This research examines supermarket datasets and survey responses to analyze how raw data transforms into meaningful information through correlation analysis, data integrity checks, and variable-interaction patterns. The study applies Association Rule Mining techniques including Apriori and FP-Growth algorithms to uncover hidden relationships and extract latent behavioral and operational insights from complex datasets.',
    authors: ['Vicky Kumar'],
    publishedDate: 'Nov 2025',
    category: 'Data Science',
    tags: ['Data Science', 'Association Rule Mining', 'Apriori', 'FP-Growth', 'Statistical Analysis', 'Correlation Analysis'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    paperUrl: '',
    highlights: [
      'Examined supermarket datasets and survey responses for data transformation analysis',
      'Applied correlation analysis and data integrity checks to ensure data quality',
      'Utilized Association Rule Mining (Apriori/FP-Growth) for pattern discovery',
      'Uncovered hidden behavioral and operational insights from complex datasets',
      'Demonstrated the transformation journey from raw data to actionable information'
    ],
    methodology: [
      'Data Collection & Preprocessing',
      'Exploratory Data Analysis (EDA)',
      'Correlation Analysis',
      'Association Rule Mining',
      'Pattern Interpretation & Insights'
    ]
  }
]

export default function Research() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
            Research & Publications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring the intersection of data science, machine learning, and innovative technologies through academic research and publications.
          </p>
        </motion.div>

        {/* Research Papers */}
        <div className="space-y-12">
          {researchPapers.map((paper, idx) => (
            <motion.div
              key={paper._id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <div className="relative h-80 lg:h-full min-h-[400px]">
                      <img
                        src={paper.image}
                        alt={paper.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                      
                      {/* Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="px-4 py-2 bg-purple-600 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                          <FiFileText className="w-4 h-4" />
                          RESEARCH PAPER
                        </div>
                      </div>
                      
                      {/* Date */}
                      <div className="absolute bottom-6 left-6">
                        <div className="flex items-center gap-2 text-white">
                          <FiCalendar className="w-5 h-5" />
                          <span className="font-semibold">{paper.publishedDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    {/* Category */}
                    <div className="flex items-center gap-2 text-purple-600 mb-4">
                      <FiTag className="w-4 h-4" />
                      <span className="text-sm font-semibold uppercase tracking-wide">{paper.category}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {paper.title}
                    </h2>

                    {/* Authors */}
                    <p className="text-gray-500 mb-4">
                      By: <span className="font-semibold text-gray-700">{paper.authors.join(', ')}</span>
                    </p>

                    {/* Abstract */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {paper.abstract}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h3>
                      <ul className="space-y-2">
                        {paper.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <span className="text-purple-600 mr-3 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Methodology */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Methodology</h3>
                      <div className="flex flex-wrap gap-2">
                        {paper.methodology.map((method, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-full border border-purple-200"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Keywords</h3>
                      <div className="flex flex-wrap gap-2">
                        {paper.tags.map((tag, idx) => (
                          <motion.span
                            key={idx}
                            className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200 rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all cursor-default"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {paper.paperUrl && (
                      <div className="flex flex-wrap gap-4">
                        <motion.a
                          href={paper.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white text-sm font-bold rounded-xl hover:bg-purple-700 transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink className="w-5 h-5" />
                          <span>Read Full Paper</span>
                        </motion.a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-2 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Coming Soon */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-12 border-2 border-purple-200 rounded-3xl bg-purple-50/50">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              More Research Coming Soon
            </h2>
            <p className="text-gray-600 mb-6 text-lg max-w-xl mx-auto">
              I'm currently working on new research projects in machine learning, data science, and AI. Stay tuned for more publications!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
