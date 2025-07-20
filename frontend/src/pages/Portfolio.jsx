import { useState } from 'react'
import { useQuery } from 'react-query'
import { motion } from 'framer-motion'
import { portfolioService } from '../services'
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi'

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
    { value: 'web', label: 'Web Apps' },
    { value: 'mobile', label: 'Mobile Apps' },
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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '',
      category: 'web',
      featured: true,
    },
    {
      _id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '',
      category: 'web',
      featured: false,
    },
    {
      _id: '3',
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts, weather maps, and detailed weather information.',
      technologies: ['React Native', 'OpenWeather API'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '',
      category: 'mobile',
      featured: false,
    },
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
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container-max-width section-padding">
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
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
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
                    <div className="flex space-x-4">
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
