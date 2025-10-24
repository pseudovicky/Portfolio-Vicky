import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    name: "Sort Visualizer",
    description: "A beautiful and interactive visualization tool for all major sorting algorithms. Built using modern data structures and algorithms, this project helps you understand how sorting works step by step.",
    url: "https://sort-visualiser-chi.vercel.app",
    github: "https://github.com/pseudovicky/SortVisualiser",
    image: "/project-sort-visualizer.png",
    tags: ["React", "Algorithms", "Data Structures", "Visualization"],
    stats: { users: "1K+", rating: "4.8" }
  },
  {
    name: "Old Car Price Prediction",
    description: "ML-powered web application for predicting used car prices. Features web scraping, anomaly detection, and interactive visualizations with a MERN stack deployment.",
    url: "#",
    github: "https://github.com/pseudovicky",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    tags: ["Python", "Machine Learning", "MERN", "Web Scraping"],
    stats: { users: "500+", rating: "4.7" }
  },
  {
    name: "Excelify",
    description: "Full-stack MERN platform for Excel data analysis with secure file uploads, RESTful API, JWT authentication, and responsive drag-and-drop interface.",
    url: "#",
    github: "https://github.com/pseudovicky",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["MERN", "RESTful API", "JWT", "MongoDB"],
    stats: { users: "2K+", rating: "4.9" }
  },
  {
    name: "House Price Prediction",
    description: "Django-based ML platform for real estate price prediction using Kaggle datasets, featuring EDA, data cleaning, and AdaBoost-enhanced Linear Regression models.",
    url: "#",
    github: "https://github.com/pseudovicky",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Python", "Django", "Scikit-learn", "AdaBoost"],
    stats: { users: "750+", rating: "4.6" }
  },
  {
    name: "AlumniConnect Application",
    description: "Real-time communication platform built in 36-hour hackathon. Connects students with alumni through chat, video calls, appointments, and role-based profiles using Socket.io.",
    url: "#",
    github: "https://github.com/pseudovicky",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    tags: ["MERN", "Socket.io", "WebRTC", "Real-time"],
    stats: { users: "3K+", rating: "4.8" }
  },
  {
    name: "Portfolio Website",
    description: "Modern portfolio website with dynamic animations, dark mode, responsive design, and interactive persona-based navigation showcasing projects and skills.",
    url: "#",
    github: "https://github.com/pseudovicky/Portfolio-Vicky",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    stats: { users: "1.5K+", rating: "4.9" }
  },
];

export default function Project() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of innovative solutions and cutting-edge applications
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
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
                              <p className="text-sm text-gray-600 uppercase tracking-wide mt-2">Users</p>
                            </div>
                            <div>
                              <p className="text-4xl font-bold text-black">{project.stats.rating}</p>
                              <p className="text-sm text-gray-600 uppercase tracking-wide mt-2">Rating</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="px-4 py-2 bg-black text-white text-xs font-bold rounded-full shadow-lg">
                          FEATURED
                        </div>
                      </div>
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
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

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
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-black" />
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
