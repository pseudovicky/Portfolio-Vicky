import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiFileText, 
  FiDatabase, 
  FiBarChart2, 
  FiCpu, 
  FiCode, 
  FiLayers,
  FiServer,
  FiLayout,
  FiPenTool,
  FiSearch,
  FiEdit3
} from 'react-icons/fi'
import { 
  FaBrain, 
  FaRobot, 
  FaPython, 
  FaReact,
  FaNodeJs 
} from 'react-icons/fa'
import { SiDjango, SiMongodb } from 'react-icons/si'

const Resume = () => {
  const resumeTypes = [
    {
      id: 'general',
      title: 'General Resume',
      description: 'Comprehensive resume showcasing all skills and experiences',
      icon: FiFileText,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      path: '/resume/general'
    },
    {
      id: 'data-engineer',
      title: 'Data Engineer',
      description: 'ETL pipelines, data warehousing, and big data technologies',
      icon: FiDatabase,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      path: '/resume/data-engineer'
    },
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      description: 'Data visualization, statistical analysis, and business insights',
      icon: FiBarChart2,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      hoverColor: 'hover:bg-green-500/20',
      path: '/resume/data-analyst/CV'
    },
    {
      id: 'ml-engineer',
      title: 'Machine Learning Engineer',
      description: 'ML model development, training, and deployment',
      icon: FaBrain,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      hoverColor: 'hover:bg-orange-500/20',
      path: '/resume/ml-engineer'
    },
    {
      id: 'ai-engineer',
      title: 'AI Engineer',
      description: 'Artificial intelligence, deep learning, and neural networks',
      icon: FaRobot,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      hoverColor: 'hover:bg-indigo-500/20',
      path: '/resume/ai-engineer'
    },
    {
      id: 'full-stack-mern',
      title: 'Full Stack Developer (MERN)',
      description: 'MongoDB, Express.js, React, Node.js stack expertise',
      icon: FaReact,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      path: '/resume/full-stack-mern'
    },
    {
      id: 'django-developer',
      title: 'Django Developer',
      description: 'Python Django framework and backend development',
      icon: SiDjango,
      color: 'from-green-600 to-teal-600',
      bgColor: 'bg-green-600/10',
      hoverColor: 'hover:bg-green-600/20',
      path: '/resume/django-developer'
    },
    {
      id: 'python-developer',
      title: 'Python Developer',
      description: 'Python programming, scripting, and application development',
      icon: FaPython,
      color: 'from-yellow-500 to-blue-500',
      bgColor: 'bg-yellow-500/10',
      hoverColor: 'hover:bg-yellow-500/20',
      path: '/resume/python-developer'
    },
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      description: 'React, Vue, Angular, and modern frontend technologies',
      icon: FiLayout,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      path: '/resume/frontend-developer'
    },
    {
      id: 'backend-developer',
      title: 'Backend Developer',
      description: 'Server-side development, APIs, and database management',
      icon: FiServer,
      color: 'from-slate-500 to-gray-600',
      bgColor: 'bg-slate-500/10',
      hoverColor: 'hover:bg-slate-500/20',
      path: '/resume/backend-developer'
    },
    {
      id: 'api-developer',
      title: 'API Developer',
      description: 'RESTful APIs, GraphQL, and microservices architecture',
      icon: FiLayers,
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-500/10',
      hoverColor: 'hover:bg-violet-500/20',
      path: '/resume/api-developer'
    },
    {
      id: 'ui-ux-developer',
      title: 'UI/UX Developer',
      description: 'User interface design, user experience, and prototyping',
      icon: FiPenTool,
      color: 'from-fuchsia-500 to-pink-500',
      bgColor: 'bg-fuchsia-500/10',
      hoverColor: 'hover:bg-fuchsia-500/20',
      path: '/resume/ui-ux-developer'
    },
    {
      id: 'research-analyst',
      title: 'Research Analyst',
      description: 'Market research, data collection, and analytical reporting',
      icon: FiSearch,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500/10',
      hoverColor: 'hover:bg-amber-500/20',
      path: '/resume/research-analyst'
    },
    {
      id: 'content-writer',
      title: 'Content Writer',
      description: 'Technical writing, documentation, and content creation',
      icon: FiEdit3,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500/10',
      hoverColor: 'hover:bg-teal-500/20',
      path: '/resume/content-writer'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Choose Your Resume
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Select a specialized resume tailored to your target role. Each version highlights relevant skills and experiences.
            </p>
          </motion.div>

          {/* Resume Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeTypes.map((resume, index) => {
              const Icon = resume.icon
              return (
                <motion.div
                  key={resume.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link to={resume.path}>
                    <motion.div
                      className={`relative group p-6 rounded-2xl border border-gray-800 ${resume.bgColor} ${resume.hoverColor} transition-all duration-300`}
                      whileHover={{ scale: 1.03, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Icon */}
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${resume.color} mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all">
                        {resume.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {resume.description}
                      </p>

                      {/* Arrow indicator */}
                      <div className="flex items-center text-sm font-semibold text-cyan-400 group-hover:text-purple-400 transition-colors">
                        <span>View Resume</span>
                        <svg 
                          className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      {/* Hover gradient overlay */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${resume.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Download All Section */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Need All Versions?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl">
                Download a complete package with all specialized resumes in PDF format
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-white shadow-lg shadow-cyan-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download All Resumes
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Resume
