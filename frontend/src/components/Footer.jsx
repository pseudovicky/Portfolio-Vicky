import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiMapPin } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Personas',
      links: [
        { name: 'Data Analyst', href: '/persona/data-analyst' },
        { name: 'Data Engineer', href: '/persona/data-engineer' },
        { name: 'ML Engineer', href: '/persona/ml-engineer' },
        { name: 'Full Stack Developer', href: '/persona/full-stack-developer' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Projects', href: '/portfolio' },
        { name: 'Blog', href: '#' },
        { name: 'Resume', href: '#' },
        { name: 'Documentation', href: '#' },
      ]
    },
  ]

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: FiGithub, 
      href: 'https://github.com/pseudovicky',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    { 
      name: 'LinkedIn', 
      icon: FiLinkedin, 
      href: 'https://linkedin.com/in/vickykumar',
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Twitter', 
      icon: FiTwitter, 
      href: 'https://twitter.com/vickykumar',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Email', 
      icon: FiMail, 
      href: 'mailto:vicky@example.com',
      color: 'hover:text-red-500'
    },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 tracking-tight">
              Vicky Kumar
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed tracking-tight">
              Full Stack Developer & Data Analyst passionate about building innovative solutions and turning data into insights.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <FiMapPin className="mr-2" />
              <span className="tracking-tight">India</span>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 tracking-tight"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </motion.div>

          {/* Copyright & Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-500"
          >
            <p className="tracking-tight">
              © {currentYear} Vicky Kumar. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="/legal/privacy" className="hover:text-gray-900 transition-colors duration-200 tracking-tight">
                Privacy
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/legal/terms" className="hover:text-gray-900 transition-colors duration-200 tracking-tight">
                Terms
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/sitemap" className="hover:text-gray-900 transition-colors duration-200 tracking-tight">
                Sitemap
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Optional: Tech Stack Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-gray-400 tracking-tight">
            Built with React, Node.js, MongoDB & ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
