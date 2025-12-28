import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { FiMenu, FiX, FiUser, FiLogOut, FiSettings, FiSearch, FiShoppingBag } from 'react-icons/fi'
import SearchModal from './SearchModal'

const Navbar = ({ onLogoClick: triggerWaveEffect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)
  const { isAuthenticated, user, logout } = useAuth()
  const location = useLocation()

  // Theme toggle (light / dark)
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial = stored ? stored === 'dark' : prefersDark
      setIsDark(initial)
      document.documentElement.classList.toggle('dark', initial)
    } catch (e) {
      // ignore in SSR or restricted environments
    }
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    try {
      document.documentElement.classList.toggle('dark', next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch (e) {}
  }

  // Handle wave effect on logo click
  const handleLogoClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    
    // Scroll to top (hero section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    // Trigger the main wave effect with origin coordinates
    if (triggerWaveEffect) {
      triggerWaveEffect({ x, y })
    }
    
    // Remove focus from the logo after click so the hover label doesn't stick
    // (keeps keyboard-focus behavior intact because we only blur on click)
    try {
      if (e && e.currentTarget && typeof e.currentTarget.blur === 'function') {
        // small timeout to allow link navigation/wave to start
        setTimeout(() => e.currentTarget.blur(), 80)
      }
    } catch (err) {
      // ignore
    }
  }

  const navigation = [
    { 
      name: 'Home', 
      href: '/', 
      current: location.pathname === '/',
      dropdown: {
        sections: [
          {
            title: 'Welcome',
            items: [
              { name: 'Welcome', href: '/welcome' },
              { name: 'About Me', href: '/about' },
              { name: 'My Story', href: '/story' },
              { name: 'Skills Overview', href: '/skills' },
              { name: 'Latest Updates', href: '/updates' }
            ]
          },
          {
            title: 'Quick Links',
            items: [
              { name: 'Portfolio Highlights', href: '/highlights' },
              { name: 'Recent Work', href: '/recent' },
              { name: 'Contact Info', href: '/contact-info' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Journey', 
      href: '/journey', 
      current: location.pathname === '/journey',
      dropdown: {
        sections: [
          {
            title: 'Career Path',
            items: [
              { name: 'Education', href: '/journey/education' },
              { name: 'Work Experience', href: '/journey/experience' },
              { name: 'Achievements', href: '/journey/achievements' },
              { name: 'Certifications', href: '/journey/certifications' }
            ]
          },
          {
            title: 'Learning',
            items: [
              { name: 'Tech Stack', href: '/journey/tech-stack' },
              { name: 'Courses', href: '/journey/courses' },
              { name: 'Workshops', href: '/journey/workshops' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Project', 
      href: '/project', 
      current: location.pathname === '/project',
      dropdown: {
        sections: [
          {
            title: 'Featured Projects',
            items: [
              { name: 'Web Applications', href: '/projects/web-apps' },
              { name: 'Mobile Apps', href: '/projects/mobile' },
              { name: 'Full Stack Projects', href: '/projects/full-stack' },
              { name: 'Open Source', href: '/projects/open-source' }
            ]
          },
          {
            title: 'Technologies',
            items: [
              { name: 'React Projects', href: '/projects/react' },
              { name: 'Node.js Projects', href: '/projects/nodejs' },
              { name: 'Python Projects', href: '/projects/python' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Work', 
      href: '/work', 
      current: location.pathname === '/work',
      dropdown: {
        sections: [
          {
            title: 'Professional Experience',
            items: [
              { name: 'Current Role', href: '/work/current' },
              { name: 'Previous Positions', href: '/work/previous' },
              { name: 'Freelance Work', href: '/work/freelance' },
              { name: 'Collaborations', href: '/work/collaborations' }
            ]
          },
          {
            title: 'Services',
            items: [
              { name: 'Web Development', href: '/work/web-dev' },
              { name: 'Consulting', href: '/work/consulting' },
              { name: 'Code Reviews', href: '/work/reviews' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Know Me', 
      href: '/know-me', 
      current: location.pathname === '/know-me',
      dropdown: {
        sections: [
          {
            title: 'Personal',
            items: [
              { name: 'About Vicky', href: '/know-me/about' },
              { name: 'Interests', href: '/know-me/interests' },
              { name: 'Hobbies', href: '/know-me/hobbies' },
              { name: 'Values', href: '/know-me/values' }
            ]
          },
          {
            title: 'Connect',
            items: [
              { name: 'Social Media', href: '/know-me/social' },
              { name: 'Blog', href: '/know-me/blog' },
              { name: 'Newsletter', href: '/know-me/newsletter' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Vic-Story', 
      href: '/vic-story', 
      current: location.pathname === '/vic-story',
      dropdown: {
        sections: [
          {
            title: 'My Journey',
            items: [
              { name: 'Origin Story', href: '/vic-story/origin' },
              { name: 'Milestones', href: '/vic-story/milestones' },
              { name: 'Challenges', href: '/vic-story/challenges' },
              { name: 'Growth', href: '/vic-story/growth' }
            ]
          },
          {
            title: 'Behind the Scenes',
            items: [
              { name: 'Daily Routine', href: '/vic-story/routine' },
              { name: 'Inspiration', href: '/vic-story/inspiration' },
              { name: 'Future Goals', href: '/vic-story/goals' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Research', 
      href: '/research', 
      current: location.pathname === '/research',
      dropdown: {
        sections: [
          {
            title: 'Research Areas',
            items: [
              { name: 'Machine Learning', href: '/research/machine-learning' },
              { name: 'Data Science', href: '/research/data-science' },
              { name: 'Web Technologies', href: '/research/web-tech' },
              { name: 'AI & Innovation', href: '/research/ai-innovation' }
            ]
          },
          {
            title: 'Publications',
            items: [
              { name: 'Research Papers', href: '/research/papers' },
              { name: 'Case Studies', href: '/research/case-studies' },
              { name: 'Technical Reports', href: '/research/reports' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Article', 
      href: '/article', 
      current: location.pathname === '/article',
      dropdown: {
        sections: [
          {
            title: 'Technical Articles',
            items: [
              { name: 'Programming Tutorials', href: '/article/tutorials' },
              { name: 'Tech Insights', href: '/article/insights' },
              { name: 'Best Practices', href: '/article/best-practices' },
              { name: 'Code Reviews', href: '/article/code-reviews' }
            ]
          },
          {
            title: 'Blog Posts',
            items: [
              { name: 'Latest Posts', href: '/article/latest' },
              { name: 'Popular Articles', href: '/article/popular' },
              { name: 'Tech News', href: '/article/news' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Resume', 
      href: '/resume', 
      current: location.pathname === '/resume',
      dropdown: {
        sections: [
          {
            title: 'Documents',
            items: [
              { name: 'View Resume', href: '/resume/view' },
              { name: 'Download PDF', href: '/resume/download' },
              { name: 'Print Version', href: '/resume/print' },
              { name: 'References', href: '/resume/references' }
            ]
          },
          {
            title: 'Details',
            items: [
              { name: 'Skills Summary', href: '/resume/skills' },
              { name: 'Work History', href: '/resume/work-history' },
              { name: 'Education', href: '/resume/education' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Connect', 
      href: '/connect', 
      current: location.pathname === '/connect',
      dropdown: {
        sections: [
          {
            title: 'Get In Touch',
            items: [
              { name: 'Contact Form', href: '/connect/contact' },
              { name: 'Email Me', href: '/connect/email' },
              { name: 'Schedule Meeting', href: '/connect/meeting' },
              { name: 'Collaboration', href: '/connect/collaboration' }
            ]
          },
          {
            title: 'Social & Professional',
            items: [
              { name: 'LinkedIn', href: '/connect/linkedin' },
              { name: 'GitHub', href: '/connect/github' },
              { name: 'Twitter', href: '/connect/twitter' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Persona', 
      href: '/persona', 
      current: location.pathname === '/persona',
      dropdown: {
        sections: [
          {
            title: 'Technical Roles',
            items: [
              { name: 'Data Analyst', href: '/persona/data-analyst' },
              { name: 'Data Engineer', href: '/persona/data-engineer' },
              { name: 'ML Engineer', href: '/persona/ml-engineer' },
              { name: 'AI Engineer', href: '/persona/ai-engineer' },
              { name: 'Full Stack Developer', href: '/persona/full-stack-developer' }
            ]
          },
          {
            title: 'Creative & Research',
            items: [
              { name: 'UI/UX Designer', href: '/persona/ui-ux-designer' },
              { name: 'Front End Developer', href: '/persona/front-end-developer' },
              { name: 'Research Analyst', href: '/persona/research-analyst' },
              { name: 'Explorer', href: '/persona/explorer' },
              { name: 'Others', href: '/persona/others' }
            ]
          }
        ]
      }
    }
  ]

  const handleLogout = () => {
    logout()
    setIsDropdownOpen(false)
  }

  const handleDropdownEnter = (itemName) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
    }
    setActiveDropdown(itemName)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay before closing
    setDropdownTimeout(timeout)
  }

  const handleMegaDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
    }
  }

  // Close dropdown when clicking outside and handle keyboard shortcuts
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false)
      }
      if (activeDropdown && !event.target.closest('.mega-dropdown')) {
        setActiveDropdown(null)
      }
    }

    const handleKeyDown = (event) => {
      // Open search with Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        setIsSearchOpen(true)
      }
      // Close search with Escape
      if (event.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
      // Clean up any pending timeout
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout)
      }
    }
  }, [isDropdownOpen, activeDropdown, isSearchOpen, dropdownTimeout])

  return (
    <>
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-11">
            {/* Custom Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                onClick={handleLogoClick}
                className="transition-all duration-200 transform hover:scale-110"
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-8 w-auto object-contain"
                />
                <span className="sr-only">Home</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="relative mega-dropdown"
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      to={item.href}
                      className="text-xs font-normal text-gray-800 hover:text-black transition-all duration-200 whitespace-nowrap py-2 relative group hover:scale-105"
                      style={{ fontSize: '12px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                    >
                      {item.name}
                      {/* Hover underline effect */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side icons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Icon */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-800 hover:text-black transition-all duration-200 relative group transform hover:scale-110"
                title="Search (⌘K)"
              >
                <FiSearch className="h-4 w-4" />
                {/* Keyboard shortcut hint */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  Press ⌘K to search
                </div>
              </button>

              {/* Auth Section */}
              {isAuthenticated ? (
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-1 text-gray-800 hover:text-black transition-colors duration-200"
                  >
                    <FiUser className="h-4 w-4" />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                      <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">
                        {user?.name}
                      </div>
                      <Link
                        to="/dashboard"
                        className="flex items-center space-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <FiSettings className="h-3 w-3" />
                        <span>Dashboard</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50"
                      >
                        <FiLogOut className="h-3 w-3" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-xs font-normal text-gray-800 hover:text-black transition-colors duration-200"
                  style={{ fontSize: '12px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                >
                  Admin Login
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-black p-1 transition-all duration-200 transform hover:scale-110 rounded-md hover:bg-gray-100"
              >
                {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-100 mt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-base font-normal text-gray-800 hover:text-black hover:bg-gray-50 rounded-md transition-all duration-200 transform hover:scale-105 hover:shadow-sm"
                    onClick={() => setIsOpen(false)}
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Search Button */}
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <button
                    onClick={() => {
                      setIsSearchOpen(true)
                      setIsOpen(false)
                    }}
                    className="flex items-center space-x-2 w-full px-3 py-2 text-base font-normal text-gray-800 hover:text-black hover:bg-gray-50 rounded-md transition-all duration-200 transform hover:scale-105"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                  >
                    <FiSearch className="h-4 w-4" />
                    <span>Search</span>
                  </button>
                </div>

                {/* Mobile Auth Section */}
                <div className="border-t border-gray-100 pt-3 mt-3">
                  {isAuthenticated ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-gray-500 text-sm">
                        Signed in as {user?.name}
                      </div>
                      <Link
                        to="/dashboard"
                        className="block px-3 py-2 text-base font-normal text-gray-800 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout()
                          setIsOpen(false)
                        }}
                        className="block w-full text-left px-3 py-2 text-base font-normal text-gray-800 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-200"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className="block px-3 py-2 text-base font-normal text-gray-800 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                    >
                      Admin Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div 
            className="fixed inset-x-0 top-11 bg-white/95 backdrop-blur-xl border-b border-gray-100 z-40 shadow-lg mega-dropdown"
            onMouseEnter={handleMegaDropdownEnter}
            onMouseLeave={handleDropdownLeave}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Custom layout for Home dropdown */}
              {activeDropdown === 'Home' ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ columnGap: '150px' }}>
                  {/* Left Side - Navigation Links (Welcome and Quick Links side by side) */}
                  <div className="flex gap-8" style={{ gap: '150px' }}>
                    {navigation.find(item => item.name === 'Home')?.dropdown.sections.map((section, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <motion.li 
                              key={itemIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: (index * 0.1) + (itemIndex * 0.05) }}
                            >
                              <Link
                                to={item.href}
                                className="block text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  {/* Right Side - Large Descriptive Text */}
                  <motion.div 
                    className="flex flex-col justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                      Building Tomorrow's{' '}
                      <span className="text-blue-600">Solutions</span>{' '}
                      Today
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      A passionate developer crafting intelligent systems, scalable applications, and transformative digital experiences that bridge technology and innovation.
                    </p>
                  </motion.div>
                </div>
              ) : (
                // Default grid layout for other dropdowns - same structure as Home
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ columnGap: '150px' }}>
                  {/* Left Side - Navigation Links (sections side by side) */}
                  <div className="flex gap-8" style={{ gap: '150px' }}>
                    {navigation.find(item => item.name === activeDropdown)?.dropdown.sections.map((section, index) => (
                      <motion.div 
                        key={index} 
                        className="space-y-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <h3 
                          className="text-xs font-semibold text-gray-500 uppercase tracking-wider"
                          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                        >
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <motion.li 
                              key={itemIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: (index * 0.1) + (itemIndex * 0.05) }}
                            >
                              <Link
                                to={item.href}
                                className="text-sm text-gray-700 hover:text-black transition-all duration-200 block hover:bg-gray-50 rounded-md px-2 py-1 -mx-2 transform hover:scale-105"
                                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  {/* Right Side - Large Descriptive Text */}
                  <motion.div 
                    className="flex flex-col justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                      {activeDropdown === 'Journey' && 'My Professional Journey'}
                      {activeDropdown === 'Project' && 'Innovative Projects'}
                      {activeDropdown === 'Work' && 'Professional Experience'}
                      {activeDropdown === 'Know Me' && 'Get to Know Me'}
                      {activeDropdown === 'Vic-Story' && 'The Story Behind Vicky'}
                      {activeDropdown === 'Research' && 'Research & Innovation'}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {activeDropdown === 'Journey' && 'From learning fundamentals to mastering technologies, explore my career path, achievements, and continuous learning journey in the world of software development.'}
                      {activeDropdown === 'Project' && 'Discover a portfolio of cutting-edge web applications, mobile solutions, and full-stack projects built with modern technologies and best practices.'}
                      {activeDropdown === 'Work' && 'Explore my professional journey including current roles, past positions, freelance projects, and the comprehensive services I offer to clients worldwide.'}
                      {activeDropdown === 'Know Me' && 'Beyond the code and projects, discover my personal interests, core values, hobbies, and the various ways you can connect with me across platforms.'}
                      {activeDropdown === 'Vic-Story' && 'Dive deep into my personal narrative - from where it all began to the milestones achieved, challenges overcome, and the vision for what lies ahead.'}
                      {activeDropdown === 'Research' && 'Explore my research initiatives spanning machine learning, data science, and emerging technologies. Read published papers and in-depth case studies.'}
                    </p>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar