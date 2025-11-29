import { useState } from 'react'
import { useQuery } from 'react-query'
import { motion } from 'framer-motion'
import { portfolioService } from '../services'
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi'
import PortfolioHeroNetwork from '../components/PortfolioHeroNetwork'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState([])

  const { data: projects = [], isLoading, error } = useQuery(
    ['portfolio', selectedCategory],
    () => portfolioService.getPortfolioItems(
      selectedCategory === 'all' ? {} : { category: selectedCategory }
    ),
    {
      onSuccess: (data) => {
        setFilteredProjects(data)
      }
    }
  )

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'research', label: 'Research' },
    { value: 'ml', label: 'Machine Learning' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'web', label: 'Web Apps' },
    { value: 'desktop', label: 'Desktop Apps' },
    { value: 'other', label: 'Other' },
  ]

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  // Mock data for display when API is not available
  const mockProjects = [
    {
      _id: '1',
      title: 'The Relationship Between Data and Information - Correlation, Transformation and Discovery through Data Science',
      description: 'Examined supermarket datasets and survey responses to analyze how raw data transforms into meaningful information through correlation analysis, data integrity checks, and variable-interaction patterns. Applied Association Rule Mining (Apriori/FP-Growth) to uncover hidden relationships and extract latent behavioral and operational insights from complex datasets.',
      technologies: ['Data Science', 'Association Rule Mining', 'Apriori', 'FP-Growth', 'Statistical Analysis'],
      githubUrl: '',
      liveUrl: '',
      image: '',
      category: 'research',
      type: 'research',
      projectDate: 'Nov 2025',
      featured: true,
      highlights: [
        'Correlation analysis and data integrity checks',
        'Association Rule Mining using Apriori/FP-Growth',
        'Uncovered hidden behavioral and operational insights'
      ]
    },
    {
      _id: '2',
      title: 'Old Car Price Prediction',
      description: 'Scraped real-world car data from Quikr.com and combined it with open-source datasets from Kaggle to create a comprehensive dataset. Performed data cleaning, anomaly detection, and feature engineering using Adjusted R². Built a Linear Regression model boosted with AdaBoost, achieving R² ≈ 0.92. Deployed as a MERN-based web app on Vercel.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'AdaBoost', 'MERN Stack', 'Web Scraping', 'Vercel'],
      githubUrl: '',
      liveUrl: '',
      image: '',
      category: 'ml',
      type: 'project',
      projectDate: 'Aug 2025',
      featured: true,
      metrics: {
        'R²': '0.92',
        'Model': 'Linear Regression + AdaBoost'
      },
      highlights: [
        'Web scraping from Quikr.com combined with Kaggle datasets',
        'Feature engineering with Adjusted R²',
        'R² ≈ 0.92 with AdaBoost',
        'Deployed on Vercel with interactive analytics'
      ]
    },
    {
      _id: '3',
      title: 'Sorting Algorithm Visualizer',
      description: 'Developed an interactive web application to visualize multiple sorting algorithms in real time, improving conceptual understanding of algorithmic behavior. Implemented nine sorting algorithms with step-by-step visualization. Built client-server architecture using Node.js, Express.js, and Socket.IO.',
      technologies: ['Node.js', 'Express.js', 'Socket.IO', 'JavaScript', 'HTML5', 'CSS3'],
      githubUrl: '',
      liveUrl: 'https://vercel.com',
      image: '',
      category: 'web',
      type: 'project',
      projectDate: 'May 2025',
      featured: true,
      highlights: [
        'Nine sorting algorithms with real-time visualization',
        'Bubble Sort, Quick Sort, Merge Sort, Heap Sort, Radix Sort',
        'Customizable controls for array size and speed',
        'Socket.IO for streaming execution steps'
      ]
    },
    {
      _id: '4',
      title: 'House Price Prediction',
      description: 'Collected and integrated housing datasets from Kaggle and other sources. Performed EDA, data cleaning, anomaly detection, feature engineering, and dimensionality reduction. Built Linear Regression model achieving R² ≈ 0.89, improved with AdaBoost. Deployed on Django-based web platform with visual analytics.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Django', 'MongoDB', 'Kaggle', 'AdaBoost'],
      githubUrl: '',
      liveUrl: '',
      image: '',
      category: 'ml',
      type: 'project',
      projectDate: 'Jan 2025',
      featured: false,
      metrics: {
        'R²': '0.89',
        'Model': 'Linear Regression + AdaBoost',
        'Metrics': 'RMSE, MAE'
      },
      highlights: [
        'Comprehensive EDA and feature engineering',
        'R² ≈ 0.89 with AdaBoost enhancement',
        'Django web platform with visual analytics',
        'Stochastic error analysis for insights'
      ]
    },
    {
      _id: '5',
      title: 'Excelify',
      description: 'Developed a full-stack MERN application for automated Excel data processing, enabling secure uploads and efficient server-side handling of large datasets. Built scalable RESTful API with JWT-based authentication, Multer for file management, and SheetJS for data parsing. Created responsive frontend with drag-and-drop uploader.',
      technologies: ['MongoDB', 'Express.js', 'React 19', 'Node.js', 'JWT', 'Multer', 'SheetJS', 'Tailwind CSS'],
      githubUrl: '',
      liveUrl: '',
      image: '',
      category: 'web',
      type: 'project',
      projectDate: 'Dec 2024',
      featured: false,
      highlights: [
        'Full-stack MERN application',
        'JWT-based authentication',
        'Automated Excel processing with SheetJS',
        'Drag-and-drop uploader with real-time previews'
      ]
    },
    {
      _id: '6',
      title: 'CheckInn - Hotel Management System',
      description: 'Built a full-stack hotel booking and management system using MySQL, Node.js, and JavaScript. Designed optimized relational schemas, high-performance SQL queries, and secure booking workflows. Delivered dynamic stored procedures, triggers, and analytical SQL modules.',
      technologies: ['MySQL', 'Node.js', 'Express.js', 'JavaScript', 'React', 'SQL'],
      githubUrl: 'https://github.com',
      liveUrl: '',
      image: '',
      category: 'web',
      type: 'project',
      projectDate: 'Aug 2024',
      featured: false,
      reportUrl: '',
      highlights: [
        'Optimized relational database design',
        'High-performance SQL queries',
        'Stored procedures and triggers',
        'Real-time booking workflows'
      ]
    },
    {
      _id: '7',
      title: 'Online Weather Application',
      description: 'Designed and developed an online weather application using Java, AWT, Swing, and MySQL (JDBC) to provide users with real-time weather updates and location-based forecasts. Built intuitive UI using Java Swing with MySQL database for efficient storage and retrieval.',
      technologies: ['Java', 'AWT', 'Swing', 'MySQL', 'JDBC'],
      githubUrl: '',
      liveUrl: '',
      image: '',
      category: 'desktop',
      type: 'project',
      projectDate: 'Oct 2024',
      featured: false,
      highlights: [
        'Real-time weather updates',
        'Location-based forecasts',
        'Responsive Java Swing UI',
        'Optimized MySQL queries'
      ]
    },
    {
      _id: '8',
      title: 'AI Therapist Application',
      description: 'Built during Code-A-Haunt Hackathon at LPU. Developed an AI-powered therapy chatbot using Python, Django, and Google AI Studio. Integrated trained AI model into backend through API-based communication for personalized mental health support.',
      technologies: ['Python', 'Django', 'Google AI Studio', 'REST API', 'Machine Learning'],
      githubUrl: '',
      liveUrl: '',
      image: '',
      category: 'ml',
      type: 'project',
      projectDate: '2024',
      featured: false,
      highlights: [
        'AI-powered therapy chatbot',
        'Google AI Studio integration',
        'API-based model communication',
        'Mental health support platform'
      ]
    },
    {
      _id: '9',
      title: 'AlumniConnect Application',
      description: 'Developed during Code Strome 36-Hour Hackathon. Real-time mentorship platform enabling students and alumni to connect through live chat, appointment scheduling, and role-based dashboards. Built with MERN stack and Socket.io.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'REST API'],
      githubUrl: '',
      liveUrl: '',
      image: '',
      category: 'web',
      type: 'project',
      projectDate: '2024',
      featured: true,
      highlights: [
        'Built during Code Strome 36-Hour Hackathon',
        'Real-time chat with Socket.io',
        'Appointment scheduling system',
        'Role-based dashboards for students and alumni'
      ]
    }
  ]

  const displayProjects = projects.length > 0 ? projects : mockProjects
  const currentProjects = selectedCategory === 'all' 
    ? displayProjects 
    : displayProjects.filter(project => project.category === selectedCategory)

  if (error) {
    console.error('Error loading portfolio:', error)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Animated Background */}
        <PortfolioHeroNetwork />
        
        {/* Content */}
        <div className="relative z-10 container-max-width section-padding">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              My Portfolio
            </h1>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              A showcase of my recent projects and the technologies I work with
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-secondary-200">
        <div className="container-max-width section-padding">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-secondary-600">
              <FiFilter className="h-5 w-5" />
              <span className="font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container-max-width section-padding">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="loading-spinner"></div>
              <span className="ml-3 text-secondary-600">Loading projects...</span>
            </div>
          ) : currentProjects.length === 0 ? (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                No projects found
              </h3>
              <p className="text-secondary-600">
                {selectedCategory === 'all' 
                  ? 'No projects available at the moment.' 
                  : `No projects found in the ${selectedCategory} category.`
                }
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  className="card overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 relative">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-secondary-400">
                        <span className="text-4xl font-bold">{project.title.charAt(0)}</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.featured && (
                        <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                      {project.type === 'research' && (
                        <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Research
                        </span>
                      )}
                    </div>
                    {project.projectDate && (
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-secondary-700 px-2 py-1 rounded text-xs font-medium">
                          {project.projectDate}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-secondary-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    {project.metrics && Object.keys(project.metrics).length > 0 && (
                      <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex flex-wrap gap-3">
                          {Object.entries(project.metrics).map(([key, value], idx) => (
                            <div key={idx} className="text-sm">
                              <span className="font-semibold text-green-700">{key}:</span>{' '}
                              <span className="text-green-900">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-4">
                        <ul className="text-sm text-secondary-600 space-y-1">
                          {project.highlights.slice(0, 3).map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary-600 mr-2">•</span>
                              <span className="line-clamp-1">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-secondary-500 text-sm">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                        >
                          <FiExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-secondary-600 hover:text-secondary-700 transition-colors duration-200"
                        >
                          <FiGithub className="h-4 w-4" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.reportUrl && (
                        <a
                          href={project.reportUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors duration-200"
                        >
                          <FiExternalLink className="h-4 w-4" />
                          <span>Report</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Portfolio
