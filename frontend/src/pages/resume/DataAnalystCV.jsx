import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const DataAnalystCV = () => {
  const [isDownloading, setIsDownloading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const resumeRef = useRef(null)

  const handleDownloadPDF = () => {
    setIsDownloading(true)
    setShowDropdown(false)
    
    try {
      // Create a temporary link element
      const link = document.createElement('a')
      link.href = '/VickyResume_DataAnalyst.pdf'
      link.download = 'VickyResume_DataAnalyst.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading PDF:', error)
    } finally {
      setTimeout(() => setIsDownloading(false), 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Download Button */}
      <div className="max-w-[210mm] mx-auto mb-6 flex justify-end relative">
        <div className="relative">
          <motion.button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isDownloading}
          >
            <FiDownload className="w-5 h-5" />
            {isDownloading ? 'Generating PDF...' : 'Download Resume'}
          </motion.button>

          {/* Dropdown */}
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-10"
            >
              <a
                href="/VickyResume_DataAnalyst.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors flex items-center gap-2 block text-gray-800"
                onClick={() => setShowDropdown(false)}
              >
                <FiDownload className="w-4 h-4" />
                <span>View PDF</span>
              </a>
              <button
                onClick={handleDownloadPDF}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors flex items-center gap-2 text-gray-800 border-t border-gray-200"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Resume Container - A4 Size */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-2xl" ref={resumeRef} style={{ minHeight: '297mm' }}>
        <div className="p-12">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>Vicky Kumar</h1>
            <div className="flex justify-center items-center gap-4 text-sm flex-wrap">
              <a href="https://github.com/pseudovicky" className="flex items-center gap-1 text-blue-700 hover:underline">
                <FiGithub className="w-4 h-4" /> pseudovicky
              </a>
              <span className="text-gray-400">|</span>
              <a href="https://www.linkedin.com/in/pseudovicky" className="flex items-center gap-1 text-blue-700 hover:underline">
                <FiLinkedin className="w-4 h-4" /> pseudovicky
              </a>
              <span className="text-gray-400">|</span>
              <a href="mailto:sudovicky@gmail.com" className="flex items-center gap-1 text-blue-700 hover:underline">
                <FiMail className="w-4 h-4" /> sudovicky@gmail.com
              </a>
              <span className="text-gray-400">|</span>
              <a href="tel:+917295818429" className="flex items-center gap-1 text-blue-700 hover:underline">
                <FiPhone className="w-4 h-4" /> +91 7295818429
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 border-b-2 border-black pb-1" style={{ fontFamily: 'Georgia, serif' }}>SKILLS</h2>
            
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="font-bold w-32 flex-shrink-0">Languages</span>
                <span className="text-gray-800">Python, C/C++, HTML, CSS, JavaScript, MySQL</span>
              </div>
              <div className="flex">
                <span className="font-bold w-32 flex-shrink-0">Frameworks</span>
                <span className="text-gray-800">React.js, Tailwind CSS, Bootstrap, Node.js, Express.js</span>
              </div>
              <div className="flex">
                <span className="font-bold w-32 flex-shrink-0">Libraries</span>
                <span className="text-gray-800">NumPy, Pandas, scikit-learn, Folium, Keras, Turtle, TensorFlow, NLTK</span>
              </div>
              <div className="flex">
                <span className="font-bold w-32 flex-shrink-0">Tools/Platforms</span>
                <span className="text-gray-800">MongoDB, MS SQL Server, IBM Cognos, Selenium</span>
              </div>
              <div className="flex">
                <span className="font-bold w-32 flex-shrink-0">Soft Skills</span>
                <span className="text-gray-800">Problem-Solving, Team Player, Teamwork & Collaboration, Strategic Planning, Flexibility</span>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 border-b-2 border-black pb-1" style={{ fontFamily: 'Georgia, serif' }}>PROJECTS</h2>
            
            {/* Old Car Price Prediction */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base">Old Car Price Prediction | Python, ML, MERN, Web Scraping</h3>
                <span className="text-sm text-gray-600">Aug'25</span>
              </div>
              <ul className="list-disc ml-5 text-sm space-y-1 text-gray-800">
                <li>Scraped and processed used car data from Quikr.com, achieving anomaly detection & feature engineering.</li>
                <li>Built a Linear Regression model (R² ≈ 0.85) with dimensionality reduction, deployed in a MERN web app.</li>
                <li>Added visual analytics (year, mileage, fuel type) to provide resale insights and fair price estimates.</li>
              </ul>
            </div>

            {/* Excelify */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base">Excelify | Full-Stack (MERN), RESTful API, Data Processing</h3>
                <span className="text-sm text-gray-600">Jul'25</span>
              </div>
              <ul className="list-disc ml-5 text-sm space-y-1 text-gray-800">
                <li>Forged a full-stack MERN platform to streamline Excel data analysis, featuring secure file uploads and intelligent server-side processing for complex datasets.</li>
                <li>Engineered a robust RESTful API with Node.js and Express, incorporating JWT for secure authentication, Multer for file handling, and Busboy for parsing Excel data into MongoDB.</li>
                <li>Crafted a responsive front-end with React 19 and Tailwind CSS, featuring an intuitive drag-and-drop uploader and dynamic data previews to deliver a seamless user experience.</li>
              </ul>
            </div>

            {/* House Price Prediction */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base">House Price Prediction | Python (Pandas, Scikit-learn), Django, Kaggle, MongoDB</h3>
                <span className="text-sm text-gray-600">Jan'25</span>
              </div>
              <ul className="list-disc ml-5 text-sm space-y-1 text-gray-800">
                <li>Collected & integrated housing datasets from Kaggle and additional sources, creating a unified dataset, followed by EDA, data cleaning, anomaly handling, duplicate removal, feature engineering, and dimensionality reduction to ensure robust model efficiency.</li>
                <li>Built & trained a Linear Regression model (R² ≈ 0.89) and enhanced it with AdaBoost, evaluating performance metrics like RMSE, and MAE for reliable predictions on unseen data.</li>
                <li>Deployed the solution on a Django-based web platform with input forms for property details, integrated visual analytics (historical trends, yearly variations, profit margins), and performed stochastic error analysis to provide actionable insights for stakeholders.</li>
              </ul>
            </div>
          </section>

          {/* Certifications & Achievements */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 border-b-2 border-black pb-1" style={{ fontFamily: 'Georgia, serif' }}>CERTIFICATIONS & ACHIEVEMENTS</h2>
            
            <div className="mb-3">
              <h3 className="font-bold text-base mb-2">Certifications</h3>
              <ul className="list-disc ml-5 text-sm space-y-1 text-gray-800">
                <li>Machine Learning Certification (IBM - Data Visualization)</li>
                <li>Responsive Web Design (freeCodeCamp)</li>
                <li>MERN Stack (Apna College)</li>
                <li>Data Science Masters (PW Skills)</li>
                <li>Data Science Certificate (Saylor.org)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2">Achievements</h3>
              <ul className="list-disc ml-5 text-sm space-y-1 text-gray-800">
                <li>Hackathon Participation: Code Strome 36-Hour Hackathon, MLSA Hackathon</li>
                <li>Code-A-Haunt Hackathon (Coding Blocks LPU).</li>
                <li>Responsive CSS Challenge | 21 Days Bootcamp: Completed 21 mini-projects in 21 days, gaining expertise in responsive design, media queries, and SEO-friendly CSS practices. Built modern, accessible, and scalable CSS layouts for real-world web applications.</li>
                <li>AlumniConnect Application | MERN, socket.io, APIs, Hackathon Project: Built in a 36-hour hackathon as a group project, this platform connects students with alumni for mentorship through chat, appointments, and role-based profiles.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-bold mb-3 border-b-2 border-black pb-1" style={{ fontFamily: 'Georgia, serif' }}>EDUCATION</h2>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">Lovely Professional University</p>
                  <p className="text-gray-800">Master of Computer Application Hons. in AI/ML; CGPA: 8.0</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Phagwara, Punjab</p>
                  <p className="text-gray-600">Aug 2024 – Present</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-bold">Indira Gandhi National Open University</p>
                  <p className="text-gray-800">Bachelor of Computer Application; Percentage: 62%</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Patna, Bihar</p>
                  <p className="text-gray-600">Jan 2020 – Dec 2023</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-bold">BSEB Board</p>
                  <p className="text-gray-800">Intermediate; Percentage: 70% PCM</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Patna, Bihar</p>
                  <p className="text-gray-600">Mar 2016 – Mar 2017</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-bold">BSEB Board</p>
                  <p className="text-gray-800">Matriculation; Percentage: 75%</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Patna, Bihar</p>
                  <p className="text-gray-600">(2016-2017)</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Close dropdown when clicking outside */}
      {showDropdown && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setShowDropdown(false)}
        />
      )}
    </div>
  )
}

export default DataAnalystCV
