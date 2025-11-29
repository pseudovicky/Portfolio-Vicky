import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi'

const projects = [
  {
    _id: '2',
    name: 'Old Car Price Prediction',
    description: 'Scraped real-world car data from Quikr.com and combined it with open-source datasets from Kaggle to create a comprehensive dataset. Performed data cleaning, anomaly detection, and feature engineering using Adjusted R². Built a Linear Regression model boosted with AdaBoost, improving accuracy and achieving an overall R² ≈ 0.92 with detailed error analysis. Deployed the complete ML pipeline as a MERN-based web app on Vercel.',
    url: '',
    github: 'https://github.com/pseudovicky',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'AdaBoost', 'MERN Stack', 'Web Scraping'],
    category: 'ml',
    type: 'project',
    projectDate: 'Aug 2025',
    stats: { users: 'R² ≈ 0.92', rating: 'ML' },
    highlights: [
      'Web scraping from Quikr.com combined with Kaggle datasets',
      'Feature engineering with Adjusted R²',
      'Deployed on Vercel with interactive analytics'
    ]
  },
  {
    _id: '3',
    name: 'Sorting Algorithm Visualizer',
    description: 'Developed an interactive web application to visualize multiple sorting algorithms in real time, improving conceptual understanding of algorithmic behavior. Implemented nine sorting algorithms with step-by-step visualization including Bubble Sort, Quick Sort, Merge Sort, Heap Sort, and Radix Sort. Built client-server architecture using Node.js, Express.js, and Socket.IO.',
    url: 'https://sort-visualiser-chi.vercel.app',
    github: 'https://github.com/pseudovicky/SortVisualiser',
    image: '/project-sort-visualizer.png',
    tags: ['Node.js', 'Express.js', 'Socket.IO', 'JavaScript', 'Algorithms'],
    category: 'web',
    type: 'project',
    projectDate: 'May 2025',
    stats: { users: '1K+', rating: '4.8' },
    highlights: [
      'Nine sorting algorithms with real-time visualization',
      'Customizable controls for array size and speed',
      'Socket.IO for streaming execution steps'
    ]
  },
  {
    _id: '4',
    name: 'House Price Prediction',
    description: 'Collected and integrated housing datasets from Kaggle and other sources. Performed EDA, data cleaning, anomaly detection, feature engineering, and dimensionality reduction. Built Linear Regression model achieving R² ≈ 0.89, improved with AdaBoost. Deployed on Django-based web platform with visual analytics and stochastic error analysis.',
    url: '',
    github: 'https://github.com/pseudovicky',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Django', 'MongoDB', 'AdaBoost'],
    category: 'ml',
    type: 'project',
    projectDate: 'Jan 2025',
    stats: { users: 'R² ≈ 0.89', rating: 'ML' },
    highlights: [
      'Comprehensive EDA and feature engineering',
      'Django web platform with visual analytics',
      'Stochastic error analysis for insights'
    ]
  },
  {
    _id: '5',
    name: 'Excelify',
    description: 'Developed a full-stack MERN application for automated Excel data processing, enabling secure uploads and efficient server-side handling of large datasets. Built scalable RESTful API with JWT-based authentication, Multer for file management, and SheetJS for data parsing. Created responsive frontend with drag-and-drop uploader and real-time data previews.',
    url: '',
    github: 'https://github.com/pseudovicky',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['MongoDB', 'Express.js', 'React 19', 'Node.js', 'JWT', 'Multer', 'SheetJS'],
    category: 'web',
    type: 'project',
    projectDate: 'Dec 2024',
    stats: { users: '2K+', rating: '4.9' },
    highlights: [
      'Full-stack MERN application',
      'JWT-based authentication',
      'Drag-and-drop uploader with real-time previews'
    ]
  },
  {
    _id: '6',
    name: 'CheckInn - Hotel Management System',
    description: 'Built a full-stack hotel booking and management system using MySQL, Node.js, and JavaScript. Designed optimized relational schemas, high-performance SQL queries, and secure booking workflows. Delivered dynamic stored procedures, triggers, and analytical SQL modules powering real-time operations and reporting.',
    url: '',
    github: 'https://github.com/pseudovicky',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    tags: ['MySQL', 'Node.js', 'Express.js', 'JavaScript', 'React', 'SQL'],
    category: 'web',
    type: 'project',
    projectDate: 'Aug 2024',
    stats: { users: '3K+', rating: '4.8' },
    highlights: [
      'Optimized relational database design',
      'High-performance SQL queries',
      'Stored procedures and triggers'
    ]
  },
  {
    _id: '7',
    name: 'Online Weather Application',
    description: 'Designed and developed an online weather application using Java, AWT, Swing, and MySQL (JDBC) to provide users with real-time weather updates and location-based forecasts. Built intuitive UI using Java Swing with MySQL database for efficient storage and retrieval with optimized query performance.',
    url: '',
    github: 'https://github.com/pseudovicky',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    tags: ['Java', 'AWT', 'Swing', 'MySQL', 'JDBC'],
    category: 'desktop',
    type: 'project',
    projectDate: 'Oct 2024',
    stats: { users: '500+', rating: '4.6' },
    highlights: [
      'Real-time weather updates',
      'Location-based forecasts',
      'Optimized MySQL queries'
    ]
  },
  {
    _id: '8',
    name: 'AI Therapist Application',
    description: 'Built during Code-A-Haunt Hackathon at LPU. Developed an AI-powered therapy chatbot using Python, Django, and Google AI Studio. Integrated trained AI model into backend through API-based communication for personalized mental health support.',
    url: '',
    github: 'https://github.com/pseudovicky',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    tags: ['Python', 'Django', 'Google AI Studio', 'REST API', 'Machine Learning'],
    category: 'ml',
    type: 'project',
    projectDate: '2024',
    stats: { users: 'Hackathon', rating: 'AI' },
    highlights: [
      'AI-powered therapy chatbot',
      'Google AI Studio integration',
      'Mental health support platform'
    ]
  },
  {
    _id: '9',
    name: 'AlumniConnect Application',
    description: 'Developed during Code Strome 36-Hour Hackathon. Real-time mentorship platform enabling students and alumni to connect through live chat, appointment scheduling, and role-based dashboards. Built with MERN stack and Socket.io for seamless real-time communication.',
    url: '',
    github: 'https://github.com/pseudovicky',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'REST API'],
    category: 'web',
    type: 'project',
    projectDate: '2024',
    stats: { users: 'Hackathon', rating: '36hr' },
    highlights: [
      'Built during Code Strome 36-Hour Hackathon',
      'Real-time chat with Socket.io',
      'Role-based dashboards for students and alumni'
    ]
  }
];

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'ml', label: 'Machine Learning' },
  { value: 'web', label: 'Web Apps' },
  { value: 'desktop', label: 'Desktop Apps' },
]

export default function Project() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of innovative solutions, research papers, and cutting-edge applications
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center space-x-2 text-gray-600">
            <FiFilter className="h-5 w-5" />
            <span className="font-medium">Filter:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              {/* Card Container - Horizontal Layout */}
              <div className="relative bg-white border-2 border-black rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section - Left Side */}
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <div className="relative h-80 lg:h-full">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Stats Overlay (appears on hover) */}
                      <motion.div
                        className="absolute inset-0 bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      >
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-12">
                            <div>
                              <p className="text-4xl font-bold text-black">{project.stats.users}</p>
                              <p className="text-sm text-gray-600 uppercase tracking-wide mt-2">
                                {project.type === 'research' ? 'Type' : 'Users'}
                              </p>
                            </div>
                            <div>
                              <p className="text-4xl font-bold text-black">{project.stats.rating}</p>
                              <p className="text-sm text-gray-600 uppercase tracking-wide mt-2">
                                {project.type === 'research' ? 'Category' : 'Rating'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {project.type === 'research' && (
                          <div className="px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
                            RESEARCH
                          </div>
                        )}
                        {project.type !== 'research' && (
                          <div className="px-4 py-2 bg-black text-white text-xs font-bold rounded-full shadow-lg">
                            FEATURED
                          </div>
                        )}
                      </div>
                      
                      {/* Date Badge */}
                      {project.projectDate && (
                        <div className="absolute bottom-4 left-4">
                          <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold rounded-full shadow">
                            {project.projectDate}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Section - Right Side */}
                  <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-between">
                    {/* Project Name */}
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 group-hover:text-gray-700 transition-all">
                        {project.name}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div className="mb-6">
                          <ul className="text-sm text-gray-600 space-y-1">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-green-500 mr-2 font-bold">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.tags.map((tag, i) => (
                          <motion.span
                            key={i}
                            className="px-4 py-2 text-sm font-semibold bg-gray-100 text-black border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      {project.url && (
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                      
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black text-sm font-bold rounded-xl hover:bg-black hover:text-white transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub className="w-5 h-5" />
                          <span>View Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-2 ${project.type === 'research' ? 'bg-purple-600' : 'bg-black'}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-12 border-2 border-black rounded-3xl bg-white">
            <h2 className="text-3xl font-bold text-black mb-4">
              Want to see more projects?
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Visit my GitHub for more innovative solutions
            </p>
            <motion.a
              href="https://github.com/pseudovicky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-lg font-bold rounded-full hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="w-6 h-6" />
              Visit My GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
