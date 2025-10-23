import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiLayers } from 'react-icons/fi'

const projects = [
  {
    name: "Sort Visualizer",
    description:
      "A beautiful and interactive visualization tool for all major sorting algorithms. Built using modern data structures and algorithms, this project helps you understand how sorting works step by step.",
    url: "https://sort-visualiser-chi.vercel.app",
    github: "https://github.com/pseudovicky/SortVisualiser",
    image: "/project-sort-visualizer.png",
    tags: ["React", "Algorithms", "Data Structures", "Visualization", "Sorting"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    name: "Old Car Price Prediction",
    description:
      "ML-powered web application for predicting used car prices. Features web scraping, anomaly detection, and interactive visualizations with a MERN stack deployment.",
    url: "#",
    github: "https://github.com/pseudovicky",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    tags: ["Python", "Machine Learning", "MERN", "Web Scraping", "Linear Regression"],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    name: "Excelify",
    description:
      "Full-stack MERN platform for Excel data analysis with secure file uploads, RESTful API, JWT authentication, and responsive drag-and-drop interface.",
    url: "#",
    github: "https://github.com/pseudovicky",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["MERN", "RESTful API", "JWT", "MongoDB", "React", "Tailwind CSS"],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    name: "House Price Prediction",
    description:
      "Django-based ML platform for real estate price prediction using Kaggle datasets, featuring EDA, data cleaning, and AdaBoost-enhanced Linear Regression models.",
    url: "#",
    github: "https://github.com/pseudovicky",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Python", "Django", "Scikit-learn", "Pandas", "MongoDB", "AdaBoost"],
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10"
  },
  {
    name: "AlumniConnect Application",
    description:
      "Real-time communication platform built in 36-hour hackathon. Connects students with alumni through chat, video calls, appointments, and role-based profiles using Socket.io.",
    url: "#",
    github: "https://github.com/pseudovicky",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    tags: ["MERN", "Socket.io", "WebRTC", "Real-time", "APIs", "Hackathon"],
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/10 to-purple-500/10"
  },
  {
    name: "Portfolio Website",
    description:
      "Modern portfolio website with dynamic animations, dark mode, responsive design, and interactive persona-based navigation showcasing projects and skills.",
    url: "#",
    github: "https://github.com/pseudovicky/Portfolio-Vicky",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Vite", "Responsive"],
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/10 to-blue-500/10"
  },
];

export default function Project() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of innovative solutions and cutting-edge applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="w-full"
            >
              <div className={`relative group rounded-3xl overflow-hidden border border-gray-800 bg-gradient-to-br ${project.bgGradient} hover:border-gray-700 transition-all duration-500`}>
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                
                <div className="relative flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <div className="relative h-64 lg:h-full">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500`} />
                      
                      {/* Floating Badge */}
                      <motion.div
                        className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white font-semibold text-sm shadow-xl`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <FiLayers className="inline mr-2" />
                        Featured
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
                    {/* Title & Description */}
                    <div>
                      <motion.h2 
                        className={`text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                        whileHover={{ scale: 1.02 }}
                      >
                        {project.name}
                      </motion.h2>
                      
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.tags.map((tag, i) => (
                          <motion.span
                            key={i}
                            className="px-4 py-2 rounded-full bg-white/5 border border-gray-700 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-gray-600 transition-all"
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
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold shadow-lg hover:shadow-2xl transition-all`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                      
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-700 text-gray-300 font-semibold hover:bg-white/5 hover:border-gray-600 transition-all"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub className="w-5 h-5" />
                          View Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Animated border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
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
          <p className="text-2xl text-gray-400 mb-6">
            Want to see more projects?
          </p>
          <motion.a
            href="https://github.com/pseudovicky"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="w-6 h-6" />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
