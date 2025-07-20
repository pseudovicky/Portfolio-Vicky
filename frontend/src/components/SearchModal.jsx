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
    { title: 'Home', href: '/', category: 'Pages', description: 'Main homepage' },
    { title: 'About', href: '/about', category: 'Pages', description: 'About us page' },
    { title: 'Portfolio', href: '/portfolio', category: 'Pages', description: 'Portfolio showcase' },
    { title: 'Contact', href: '/contact', category: 'Pages', description: 'Contact information' },
    { title: 'Dashboard', href: '/dashboard', category: 'Pages', description: 'User dashboard' },
    { title: 'Login', href: '/login', category: 'Auth', description: 'Sign in to your account' },
    { title: 'Register', href: '/register', category: 'Auth', description: 'Create new account' },
    { title: 'Sign In', href: '/login', category: 'Auth', description: 'Sign in to your account' },
    
    // Store section
    { title: 'Store', href: '/store', category: 'Store', description: 'Main store page' },
    { title: 'Shop the Latest', href: '/store/latest', category: 'Store', description: 'Latest products' },
    { title: 'Mac Store', href: '/store/mac', category: 'Store', description: 'Mac products' },
    { title: 'iPad Store', href: '/store/ipad', category: 'Store', description: 'iPad products' },
    { title: 'iPhone Store', href: '/store/iphone', category: 'Store', description: 'iPhone products' },
    { title: 'Apple Watch Store', href: '/store/watch', category: 'Store', description: 'Apple Watch products' },
    { title: 'Accessories Store', href: '/store/accessories', category: 'Store', description: 'Accessories' },
    { title: 'Find a Store', href: '/store/locations', category: 'Store', description: 'Store locations' },
    { title: 'Order Status', href: '/store/order-status', category: 'Store', description: 'Check order status' },
    { title: 'Education Store', href: '/store/education', category: 'Store', description: 'Education pricing' },
    { title: 'Business Store', href: '/store/business', category: 'Store', description: 'Business solutions' },

    // Mac section
    { title: 'Mac', href: '/mac', category: 'Mac', description: 'All Mac products' },
    { title: 'MacBook Air', href: '/mac/macbook-air', category: 'Mac', description: 'MacBook Air laptops' },
    { title: 'MacBook Pro', href: '/mac/macbook-pro', category: 'Mac', description: 'MacBook Pro laptops' },
    { title: 'iMac', href: '/mac/imac', category: 'Mac', description: 'iMac desktops' },
    { title: 'Mac mini', href: '/mac/mac-mini', category: 'Mac', description: 'Mac mini computers' },
    { title: 'Mac Studio', href: '/mac/mac-studio', category: 'Mac', description: 'Mac Studio workstations' },
    { title: 'Mac Pro', href: '/mac/mac-pro', category: 'Mac', description: 'Mac Pro workstations' },
    { title: 'macOS', href: '/mac/macos', category: 'Mac', description: 'Mac operating system' },
    { title: 'macOS Sequoia', href: '/mac/macos', category: 'Mac', description: 'Latest macOS version' },

    // iPad section
    { title: 'iPad', href: '/ipad', category: 'iPad', description: 'All iPad products' },
    { title: 'iPad Pro', href: '/ipad/ipad-pro', category: 'iPad', description: 'iPad Pro tablets' },
    { title: 'iPad Air', href: '/ipad/ipad-air', category: 'iPad', description: 'iPad Air tablets' },
    { title: 'iPad mini', href: '/ipad/ipad-mini', category: 'iPad', description: 'iPad mini tablets' },
    { title: 'Apple Pencil', href: '/ipad/apple-pencil', category: 'iPad', description: 'Apple Pencil stylus' },
    { title: 'iPad Keyboards', href: '/ipad/keyboards', category: 'iPad', description: 'iPad keyboards' },
    { title: 'iPadOS', href: '/ipad/ipados', category: 'iPad', description: 'iPad operating system' },

    // iPhone section
    { title: 'iPhone', href: '/iphone', category: 'iPhone', description: 'All iPhone products' },
    { title: 'iPhone 16 Pro', href: '/iphone/iphone-16-pro', category: 'iPhone', description: 'iPhone 16 Pro' },
    { title: 'iPhone 16', href: '/iphone/iphone-16', category: 'iPhone', description: 'iPhone 16' },
    { title: 'iPhone 15', href: '/iphone/iphone-15', category: 'iPhone', description: 'iPhone 15' },
    { title: 'iPhone 14', href: '/iphone/iphone-14', category: 'iPhone', description: 'iPhone 14' },
    { title: 'iPhone SE', href: '/iphone/iphone-se', category: 'iPhone', description: 'iPhone SE' },
    { title: 'iOS', href: '/iphone/ios', category: 'iPhone', description: 'iPhone operating system' },
    { title: 'iOS 18', href: '/iphone/ios', category: 'iPhone', description: 'Latest iOS version' },

    // Apple Watch section
    { title: 'Apple Watch', href: '/watch', category: 'Watch', description: 'All Apple Watch products' },
    { title: 'Apple Watch Series 10', href: '/watch/series-10', category: 'Watch', description: 'Latest Apple Watch' },
    { title: 'Apple Watch Ultra', href: '/watch/ultra', category: 'Watch', description: 'Apple Watch Ultra' },
    { title: 'Apple Watch SE', href: '/watch/se', category: 'Watch', description: 'Apple Watch SE' },
    { title: 'Apple Watch Nike', href: '/watch/nike', category: 'Watch', description: 'Nike Apple Watch' },
    { title: 'Apple Watch Bands', href: '/watch/bands', category: 'Watch', description: 'Watch bands' },
    { title: 'watchOS', href: '/watch/watchos', category: 'Watch', description: 'Apple Watch OS' },

    // AirPods section
    { title: 'AirPods', href: '/airpods', category: 'AirPods', description: 'All AirPods products' },
    { title: 'AirPods Pro', href: '/airpods/airpods-pro', category: 'AirPods', description: 'AirPods Pro' },
    { title: 'AirPods Max', href: '/airpods/airpods-max', category: 'AirPods', description: 'AirPods Max' },
    { title: 'AirPods 4', href: '/airpods/airpods-4', category: 'AirPods', description: 'AirPods 4' },
    { title: 'AirPods 3', href: '/airpods/airpods-3', category: 'AirPods', description: 'AirPods 3' },

    // TV & Home section
    { title: 'Apple TV', href: '/tv-home/apple-tv-4k', category: 'TV & Home', description: 'Apple TV 4K' },
    { title: 'Apple TV 4K', href: '/tv-home/apple-tv-4k', category: 'TV & Home', description: 'Apple TV streaming device' },
    { title: 'HomePod', href: '/tv-home/homepod', category: 'TV & Home', description: 'HomePod smart speaker' },
    { title: 'HomePod mini', href: '/tv-home/homepod-mini', category: 'TV & Home', description: 'Compact smart speaker' },
    { title: 'Apple TV+', href: '/tv-home/tv-plus', category: 'TV & Home', description: 'Streaming service' },

    // Entertainment section
    { title: 'Apple One', href: '/entertainment/apple-one', category: 'Entertainment', description: 'Bundle subscription' },
    { title: 'Apple Music', href: '/entertainment/apple-music', category: 'Entertainment', description: 'Music streaming' },
    { title: 'Apple Arcade', href: '/entertainment/apple-arcade', category: 'Entertainment', description: 'Gaming service' },
    { title: 'Apple Fitness+', href: '/entertainment/fitness-plus', category: 'Entertainment', description: 'Fitness service' },
    { title: 'Apple News+', href: '/entertainment/news-plus', category: 'Entertainment', description: 'News service' },
    { title: 'Apple Podcasts', href: '/entertainment/podcasts', category: 'Entertainment', description: 'Podcast platform' },
    { title: 'Apple Books', href: '/entertainment/books', category: 'Entertainment', description: 'E-book platform' },

    // Support section
    { title: 'Support', href: '/support', category: 'Support', description: 'Get help and support' },
    { title: 'iPhone Support', href: '/support/iphone', category: 'Support', description: 'iPhone help' },
    { title: 'Mac Support', href: '/support/mac', category: 'Support', description: 'Mac help' },
    { title: 'iPad Support', href: '/support/ipad', category: 'Support', description: 'iPad help' },
    { title: 'Apple Watch Support', href: '/support/watch', category: 'Support', description: 'Apple Watch help' },
    { title: 'Community', href: '/support/community', category: 'Support', description: 'Community forums' },
    { title: 'Contact Support', href: '/support/contact', category: 'Support', description: 'Contact us' },

    // Accessories
    { title: 'Accessories', href: '/accessories', category: 'Accessories', description: 'All accessories' },
    { title: 'Mac Accessories', href: '/accessories/mac', category: 'Accessories', description: 'Mac accessories' },
    { title: 'iPad Accessories', href: '/accessories/ipad', category: 'Accessories', description: 'iPad accessories' },
    { title: 'iPhone Accessories', href: '/accessories/iphone', category: 'Accessories', description: 'iPhone accessories' },
    { title: 'Beats', href: '/accessories/beats', category: 'Accessories', description: 'Beats headphones' },
    { title: 'AirTag', href: '/accessories/airtag', category: 'Accessories', description: 'Item tracker' }
  ]

  // Filter results based on query
  useEffect(() => {
    if (query.trim() === '') {
      setFilteredResults([])
      setSelectedIndex(0)
      return
    }

    const filtered = searchData.filter(item => {
      const searchTerms = query.toLowerCase().split(' ')
      const titleMatch = searchTerms.every(term => 
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
      )
      return titleMatch
    })

    // Sort by relevance (exact matches first, then partial matches)
    filtered.sort((a, b) => {
      const aExact = a.title.toLowerCase().includes(query.toLowerCase())
      const bExact = b.title.toLowerCase().includes(query.toLowerCase())
      if (aExact && !bExact) return -1
      if (!aExact && bExact) return 1
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
