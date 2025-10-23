import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch, FiX } from 'react-icons/fi'

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const resultsRef = useRef(null)

  // Comprehensive search data including all navigation items and their sub-items
  const searchData = [
    // Main navigation
    { title: 'Home', href: '/', category: 'Pages', description: 'Main homepage and portfolio intro', keywords: 'home main index landing' },
    { title: 'About', href: '/about', category: 'Pages', description: 'About me, background, and experience', keywords: 'about biography bio info information background' },
    { title: 'Portfolio', href: '/portfolio', category: 'Pages', description: 'Project portfolio and work showcase', keywords: 'portfolio projects work showcase gallery' },
    { title: 'Contact', href: '/contact', category: 'Pages', description: 'Contact information and form', keywords: 'contact email reach connect message' },
    { title: 'Journey', href: '/journey', category: 'Pages', description: 'My professional journey and timeline', keywords: 'journey timeline career path story experience' },
    { title: 'Projects', href: '/project', category: 'Pages', description: 'Detailed project information', keywords: 'projects work portfolio case studies' },
    { title: 'Welcome', href: '/welcome', category: 'Pages', description: 'Welcome page', keywords: 'welcome intro introduction start' },
    
    // Auth section
    { title: 'Login', href: '/login', category: 'Auth', description: 'Sign in to your account', keywords: 'login signin sign in authenticate' },
    { title: 'Sign In', href: '/login', category: 'Auth', description: 'Sign in to your account', keywords: 'signin login sign in authenticate' },
    { title: 'Register', href: '/register', category: 'Auth', description: 'Create new account', keywords: 'register signup sign up create account' },
    { title: 'Sign Up', href: '/register', category: 'Auth', description: 'Create new account', keywords: 'signup register sign up create account' },
    { title: 'Dashboard', href: '/dashboard', category: 'Auth', description: 'User dashboard (requires login)', keywords: 'dashboard profile account user panel' },

    // Persona section - Main
    { title: 'Personas', href: '/persona', category: 'Personas', description: 'Explore different professional personas', keywords: 'persona roles careers explore' },
    { title: 'Career Paths', href: '/persona', category: 'Personas', description: 'Different career paths and roles', keywords: 'career paths roles personas explore' },
    
    // Data & Analytics Personas
    { title: 'Data Analyst', href: '/persona/data-analyst', category: 'Personas', description: 'Data analysis and visualization specialist', keywords: 'data analyst analytics analysis visualization insights statistics' },
    { title: 'Data Engineer', href: '/persona/data-engineer', category: 'Personas', description: 'Data pipeline and infrastructure expert', keywords: 'data engineer etl pipeline infrastructure database bigdata' },
    { title: 'Research Analyst', href: '/persona/research-analyst', category: 'Personas', description: 'Research and analytical specialist', keywords: 'research analyst researcher analysis study investigation' },
    
    // AI & Machine Learning Personas
    { title: 'ML Engineer', href: '/persona/ml-engineer', category: 'Personas', description: 'Machine learning engineer and model developer', keywords: 'ml machine learning engineer ai model training deployment' },
    { title: 'Machine Learning Engineer', href: '/persona/ml-engineer', category: 'Personas', description: 'Machine learning engineer', keywords: 'machine learning ml engineer ai model' },
    { title: 'AI Engineer', href: '/persona/ai-engineer', category: 'Personas', description: 'Artificial intelligence engineer', keywords: 'ai artificial intelligence engineer deep learning nlp computer vision' },
    { title: 'Artificial Intelligence', href: '/persona/ai-engineer', category: 'Personas', description: 'AI and deep learning specialist', keywords: 'artificial intelligence ai deep learning neural networks' },
    
    // Development Personas
    { title: 'Full Stack Developer', href: '/persona/full-stack-developer', category: 'Personas', description: 'Full stack web development expert', keywords: 'fullstack full stack developer web backend frontend react node' },
    { title: 'Front End Developer', href: '/persona/front-end-developer', category: 'Personas', description: 'Frontend development specialist', keywords: 'frontend front end developer ui web react javascript css' },
    { title: 'Frontend Developer', href: '/persona/front-end-developer', category: 'Personas', description: 'Frontend and UI development', keywords: 'frontend developer ui ux web react vue angular' },
    
    // Design Personas
    { title: 'UI/UX Designer', href: '/persona/ui-ux-designer', category: 'Personas', description: 'User interface and experience designer', keywords: 'ui ux designer design interface experience figma sketch' },
    { title: 'UX Designer', href: '/persona/ui-ux-designer', category: 'Personas', description: 'User experience designer', keywords: 'ux user experience designer ui design' },
    { title: 'UI Designer', href: '/persona/ui-ux-designer', category: 'Personas', description: 'User interface designer', keywords: 'ui user interface designer ux design' },
    
    // Other Personas
    { title: 'Explorer', href: '/persona/explorer', category: 'Personas', description: 'Exploring different tech domains', keywords: 'explorer explore learning curious generalist' },
    { title: 'Others', href: '/persona/others', category: 'Personas', description: 'Other professional roles', keywords: 'others miscellaneous different various roles' },
    
    // Additional searchable terms for common queries
    { title: 'Skills', href: '/about', category: 'Info', description: 'Technical skills and expertise', keywords: 'skills expertise technologies stack tools' },
    { title: 'Experience', href: '/about', category: 'Info', description: 'Work experience and background', keywords: 'experience work history background career' },
    { title: 'Technologies', href: '/portfolio', category: 'Info', description: 'Technologies and tools used', keywords: 'technologies tools tech stack frameworks libraries' },
    { title: 'Resume', href: '/about', category: 'Info', description: 'Resume and CV information', keywords: 'resume cv curriculum vitae experience education' },
    { title: 'Projects Gallery', href: '/portfolio', category: 'Info', description: 'Browse project gallery', keywords: 'projects gallery showcase portfolio work' },
  ]

  // Filter results based on query
  useEffect(() => {
    if (query.trim() === '') {
      setFilteredResults([])
      setSelectedIndex(0)
      return
    }

    const queryLower = query.toLowerCase()
    const searchTerms = queryLower.split(' ').filter(term => term.length > 0)

    const filtered = searchData.filter(item => {
      // Search in title, description, category, and keywords
      const titleMatch = searchTerms.every(term => 
        item.title.toLowerCase().includes(term)
      )
      const descriptionMatch = searchTerms.every(term => 
        item.description.toLowerCase().includes(term)
      )
      const categoryMatch = searchTerms.every(term => 
        item.category.toLowerCase().includes(term)
      )
      const keywordsMatch = item.keywords && searchTerms.some(term => 
        item.keywords.toLowerCase().includes(term)
      )
      
      return titleMatch || descriptionMatch || categoryMatch || keywordsMatch
    })

    // Sort by relevance
    filtered.sort((a, b) => {
      // Exact title match gets highest priority
      const aExactTitle = a.title.toLowerCase() === queryLower
      const bExactTitle = b.title.toLowerCase() === queryLower
      if (aExactTitle && !bExactTitle) return -1
      if (!aExactTitle && bExactTitle) return 1
      
      // Title starts with query gets second priority
      const aStartsWith = a.title.toLowerCase().startsWith(queryLower)
      const bStartsWith = b.title.toLowerCase().startsWith(queryLower)
      if (aStartsWith && !bStartsWith) return -1
      if (!aStartsWith && bStartsWith) return 1
      
      // Title contains query gets third priority
      const aTitleContains = a.title.toLowerCase().includes(queryLower)
      const bTitleContains = b.title.toLowerCase().includes(queryLower)
      if (aTitleContains && !bTitleContains) return -1
      if (!aTitleContains && bTitleContains) return 1
      
      // Shorter titles preferred for same relevance
      return a.title.length - b.title.length
    })

    setFilteredResults(filtered.slice(0, 8)) // Limit to 8 results
    setSelectedIndex(0)
  }, [query])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => 
            prev < filteredResults.length - 1 ? prev + 1 : prev
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => prev > 0 ? prev - 1 : prev)
          break
        case 'Enter':
          e.preventDefault()
          if (filteredResults[selectedIndex]) {
            handleResultClick(filteredResults[selectedIndex])
          }
          break
        case 'Escape':
          e.preventDefault()
          onClose()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredResults, selectedIndex, onClose])

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleResultClick = (result) => {
    navigate(result.href)
    onClose()
    setQuery('')
  }

  const handleClear = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-x-0 top-0">
        <div className="mx-auto max-w-2xl">
          <div className="bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200 rounded-lg mx-4 mt-16 overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center px-6 py-4 border-b border-gray-100">
              <FiSearch className="h-5 w-5 text-gray-400 mr-3" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for products, pages, or features..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 text-lg placeholder-gray-400 border-0 outline-none bg-transparent"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
              />
              {query && (
                <button
                  onClick={handleClear}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <FiX className="h-4 w-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto" ref={resultsRef}>
              {query.trim() === '' ? (
                <div className="px-6 py-8 text-center text-gray-500">
                  <FiSearch className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Start typing to search...</p>
                </div>
              ) : filteredResults.length === 0 ? (
                <div className="px-6 py-8 text-center text-gray-500">
                  <p className="text-sm">No results found for "{query}"</p>
                  <p className="text-xs text-gray-400 mt-1">Try a different search term</p>
                </div>
              ) : (
                <div className="py-2">
                  {filteredResults.map((result, index) => (
                    <button
                      key={`${result.href}-${index}`}
                      onClick={() => handleResultClick(result)}
                      className={`w-full px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 text-left ${
                        index === selectedIndex ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                      }`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <div>
                            <h3 
                              className="text-sm font-medium text-gray-900"
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                            >
                              {result.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">{result.description}</p>
                          </div>
                        </div>
                      </div>
                      <span 
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                      >
                        {result.category}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {filteredResults.length > 0 && (
              <div className="px-6 py-3 border-t border-gray-100 bg-gray-50/50">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Use ↑↓ to navigate, Enter to select, Esc to close</span>
                  <span>{filteredResults.length} results</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal
