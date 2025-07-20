import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container-max-width section-padding">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6"
              variants={fadeIn}
            >
              Hi, I'm{' '}
              <span className="text-primary-600">Vicky Kumar</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              Full-Stack Developer passionate about creating beautiful and functional web applications
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={fadeIn}
            >
              <Link 
                to="/portfolio" 
                className="btn-primary text-lg px-8 py-3 inline-flex items-center space-x-2"
              >
                <span>View My Work</span>
                <FiArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="btn-secondary text-lg px-8 py-3"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div 
              className="flex justify-center space-x-6"
              variants={fadeIn}
            >
              <a
                href="#"
                className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                aria-label="GitHub"
              >
                <FiGithub className="h-8 w-8" />
              </a>
              <a
                href="#"
                className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-8 w-8" />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                aria-label="Email"
              >
                <FiMail className="h-8 w-8" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container-max-width section-padding">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              I work with modern technologies to build scalable and efficient applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'React', 'Node.js', 'MongoDB', 'Express',
              'JavaScript', 'TypeScript', 'Python', 'PostgreSQL',
              'Tailwind CSS', 'Docker', 'AWS', 'Git'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-secondary-900">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-max-width section-padding">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Here are some of my recent projects that I'm proud to showcase
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example project cards - these would be dynamic from API */}
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-secondary-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Project {project}
                </h3>
                <p className="text-secondary-600 mb-4">
                  Description of the project and technologies used to build it.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary-600 hover:text-primary-700">
                    View Live
                  </a>
                  <a href="#" className="text-secondary-600 hover:text-secondary-700">
                    View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/portfolio" className="btn-primary inline-flex items-center space-x-2">
              <span>View All Projects</span>
              <FiArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
