import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FiMenu, FiX, FiUser, FiLogOut, FiSettings, FiSearch, FiShoppingBag } from 'react-icons/fi'
import SearchModal from './SearchModal'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const location = useLocation()

  const navigation = [
    { 
      name: 'Store', 
      href: '/store', 
      current: location.pathname === '/store',
      dropdown: {
        sections: [
          {
            title: 'Shop',
            items: [
              { name: 'Shop the Latest', href: '/store/latest' },
              { name: 'Mac', href: '/store/mac' },
              { name: 'iPad', href: '/store/ipad' },
              { name: 'iPhone', href: '/store/iphone' },
              { name: 'Apple Watch', href: '/store/watch' },
              { name: 'Accessories', href: '/store/accessories' }
            ]
          },
          {
            title: 'Quick Links',
            items: [
              { name: 'Find a Store', href: '/store/locations' },
              { name: 'Order Status', href: '/store/order-status' },
              { name: 'Ways to Buy', href: '/store/ways-to-buy' },
              { name: 'Personal Setup', href: '/store/personal-setup' },
              { name: 'College Student Offer', href: '/store/education' }
            ]
          },
          {
            title: 'Shop Special Stores',
            items: [
              { name: 'Education', href: '/store/education' },
              { name: 'Business', href: '/store/business' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Mac', 
      href: '/mac', 
      current: location.pathname === '/mac',
      dropdown: {
        sections: [
          {
            title: 'Explore Mac',
            items: [
              { name: 'Explore All Mac', href: '/mac' },
              { name: 'MacBook Air', href: '/mac/macbook-air' },
              { name: 'MacBook Pro', href: '/mac/macbook-pro' },
              { name: 'iMac', href: '/mac/imac' },
              { name: 'Mac mini', href: '/mac/mac-mini' },
              { name: 'Mac Studio', href: '/mac/mac-studio' },
              { name: 'Mac Pro', href: '/mac/mac-pro' }
            ]
          },
          {
            title: 'Shop Mac',
            items: [
              { name: 'Shop Mac', href: '/mac/shop' },
              { name: 'Mac Accessories', href: '/mac/accessories' },
              { name: 'Trade In', href: '/mac/trade-in' },
              { name: 'Financing', href: '/mac/financing' }
            ]
          },
          {
            title: 'More from Mac',
            items: [
              { name: 'Mac Support', href: '/mac/support' },
              { name: 'macOS Sequoia', href: '/mac/macos' },
              { name: 'Apps by Apple', href: '/mac/apps' },
              { name: 'Continuity', href: '/mac/continuity' }
            ]
          }
        ]
      }
    },
    { 
      name: 'iPad', 
      href: '/ipad', 
      current: location.pathname === '/ipad',
      dropdown: {
        sections: [
          {
            title: 'Explore iPad',
            items: [
              { name: 'Explore All iPad', href: '/ipad' },
              { name: 'iPad Pro', href: '/ipad/ipad-pro' },
              { name: 'iPad Air', href: '/ipad/ipad-air' },
              { name: 'iPad', href: '/ipad/ipad' },
              { name: 'iPad mini', href: '/ipad/ipad-mini' },
              { name: 'Apple Pencil', href: '/ipad/apple-pencil' },
              { name: 'Keyboards', href: '/ipad/keyboards' }
            ]
          },
          {
            title: 'Shop iPad',
            items: [
              { name: 'Shop iPad', href: '/ipad/shop' },
              { name: 'iPad Accessories', href: '/ipad/accessories' },
              { name: 'Trade In', href: '/ipad/trade-in' },
              { name: 'Financing', href: '/ipad/financing' }
            ]
          },
          {
            title: 'More from iPad',
            items: [
              { name: 'iPad Support', href: '/ipad/support' },
              { name: 'iPadOS', href: '/ipad/ipados' },
              { name: 'Apps by Apple', href: '/ipad/apps' },
              { name: 'iCloud', href: '/ipad/icloud' }
            ]
          }
        ]
      }
    },
    { 
      name: 'iPhone', 
      href: '/iphone', 
      current: location.pathname === '/iphone',
      dropdown: {
        sections: [
          {
            title: 'Explore iPhone',
            items: [
              { name: 'Explore All iPhone', href: '/iphone' },
              { name: 'iPhone 16 Pro', href: '/iphone/iphone-16-pro' },
              { name: 'iPhone 16', href: '/iphone/iphone-16' },
              { name: 'iPhone 15', href: '/iphone/iphone-15' },
              { name: 'iPhone 14', href: '/iphone/iphone-14' },
              { name: 'iPhone SE', href: '/iphone/iphone-se' }
            ]
          },
          {
            title: 'Shop iPhone',
            items: [
              { name: 'Shop iPhone', href: '/iphone/shop' },
              { name: 'iPhone Accessories', href: '/iphone/accessories' },
              { name: 'Apple Trade In', href: '/iphone/trade-in' },
              { name: 'Carrier Deals', href: '/iphone/carriers' },
              { name: 'Financing', href: '/iphone/financing' }
            ]
          },
          {
            title: 'More from iPhone',
            items: [
              { name: 'iPhone Support', href: '/iphone/support' },
              { name: 'iOS 18', href: '/iphone/ios' },
              { name: 'Apps by Apple', href: '/iphone/apps' },
              { name: 'iPhone Privacy', href: '/iphone/privacy' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Watch', 
      href: '/watch', 
      current: location.pathname === '/watch',
      dropdown: {
        sections: [
          {
            title: 'Explore Watch',
            items: [
              { name: 'Explore All Apple Watch', href: '/watch' },
              { name: 'Apple Watch Series 10', href: '/watch/series-10' },
              { name: 'Apple Watch Ultra 2', href: '/watch/ultra' },
              { name: 'Apple Watch SE', href: '/watch/se' },
              { name: 'Apple Watch Nike', href: '/watch/nike' },
              { name: 'Apple Watch Hermès', href: '/watch/hermes' }
            ]
          },
          {
            title: 'Shop Watch',
            items: [
              { name: 'Shop Apple Watch', href: '/watch/shop' },
              { name: 'Apple Watch Studio', href: '/watch/studio' },
              { name: 'Apple Watch Bands', href: '/watch/bands' },
              { name: 'Apple Watch Accessories', href: '/watch/accessories' },
              { name: 'Trade In', href: '/watch/trade-in' }
            ]
          },
          {
            title: 'More from Watch',
            items: [
              { name: 'Apple Watch Support', href: '/watch/support' },
              { name: 'watchOS', href: '/watch/watchos' },
              { name: 'Apps by Apple', href: '/watch/apps' }
            ]
          }
        ]
      }
    },
    { 
      name: 'AirPods', 
      href: '/airpods', 
      current: location.pathname === '/airpods',
      dropdown: {
        sections: [
          {
            title: 'Explore AirPods',
            items: [
              { name: 'Explore All AirPods', href: '/airpods' },
              { name: 'AirPods 4', href: '/airpods/airpods-4' },
              { name: 'AirPods Pro 2', href: '/airpods/airpods-pro' },
              { name: 'AirPods Max', href: '/airpods/airpods-max' },
              { name: 'AirPods 3', href: '/airpods/airpods-3' }
            ]
          },
          {
            title: 'Shop AirPods',
            items: [
              { name: 'Shop AirPods', href: '/airpods/shop' },
              { name: 'AirPods Accessories', href: '/airpods/accessories' }
            ]
          },
          {
            title: 'More from AirPods',
            items: [
              { name: 'AirPods Support', href: '/airpods/support' },
              { name: 'Hearing Health', href: '/airpods/hearing-health' },
              { name: 'Apple Music', href: '/airpods/apple-music' }
            ]
          }
        ]
      }
    },
    { 
      name: 'TV & Home', 
      href: '/tv-home', 
      current: location.pathname === '/tv-home',
      dropdown: {
        sections: [
          {
            title: 'Explore TV & Home',
            items: [
              { name: 'Explore TV & Home', href: '/tv-home' },
              { name: 'Apple TV 4K', href: '/tv-home/apple-tv-4k' },
              { name: 'HomePod', href: '/tv-home/homepod' },
              { name: 'HomePod mini', href: '/tv-home/homepod-mini' }
            ]
          },
          {
            title: 'Shop TV & Home',
            items: [
              { name: 'Shop TV & Home', href: '/tv-home/shop' },
              { name: 'TV & Home Accessories', href: '/tv-home/accessories' }
            ]
          },
          {
            title: 'More from TV & Home',
            items: [
              { name: 'Apple TV Support', href: '/tv-home/support' },
              { name: 'HomePod Support', href: '/tv-home/homepod-support' },
              { name: 'Apple TV app', href: '/tv-home/tv-app' },
              { name: 'Apple TV+', href: '/tv-home/tv-plus' },
              { name: 'Home app', href: '/tv-home/home-app' },
              { name: 'Apple Music', href: '/tv-home/apple-music' },
              { name: 'Siri', href: '/tv-home/siri' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Entertainment', 
      href: '/entertainment', 
      current: location.pathname === '/entertainment',
      dropdown: {
        sections: [
          {
            title: 'Explore Entertainment',
            items: [
              { name: 'Explore Entertainment', href: '/entertainment' },
              { name: 'Apple One', href: '/entertainment/apple-one' },
              { name: 'Apple TV+', href: '/entertainment/tv-plus' },
              { name: 'Apple Music', href: '/entertainment/apple-music' },
              { name: 'Apple Arcade', href: '/entertainment/apple-arcade' },
              { name: 'Apple Fitness+', href: '/entertainment/fitness-plus' },
              { name: 'Apple News+', href: '/entertainment/news-plus' },
              { name: 'Apple Podcasts', href: '/entertainment/podcasts' },
              { name: 'Apple Books', href: '/entertainment/books' }
            ]
          },
          {
            title: 'Support',
            items: [
              { name: 'Apple TV+ Support', href: '/entertainment/tv-plus-support' },
              { name: 'Apple Music Support', href: '/entertainment/music-support' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Accessories', 
      href: '/accessories', 
      current: location.pathname === '/accessories',
      dropdown: {
        sections: [
          {
            title: 'Shop Accessories',
            items: [
              { name: 'Shop All Accessories', href: '/accessories' },
              { name: 'Mac Accessories', href: '/accessories/mac' },
              { name: 'iPad Accessories', href: '/accessories/ipad' },
              { name: 'iPhone Accessories', href: '/accessories/iphone' },
              { name: 'Apple Watch Accessories', href: '/accessories/watch' },
              { name: 'AirPods Accessories', href: '/accessories/airpods' },
              { name: 'TV & Home Accessories', href: '/accessories/tv-home' }
            ]
          },
          {
            title: 'Explore Accessories',
            items: [
              { name: 'Made by Apple', href: '/accessories/made-by-apple' },
              { name: 'Beats by Dr. Dre', href: '/accessories/beats' },
              { name: 'AirTag', href: '/accessories/airtag' }
            ]
          }
        ]
      }
    },
    { 
      name: 'Support', 
      href: '/support', 
      current: location.pathname === '/support',
      dropdown: {
        sections: [
          {
            title: 'Explore Support',
            items: [
              { name: 'iPhone', href: '/support/iphone' },
              { name: 'Mac', href: '/support/mac' },
              { name: 'iPad', href: '/support/ipad' },
              { name: 'Apple Watch', href: '/support/watch' },
              { name: 'AirPods', href: '/support/airpods' },
              { name: 'Music', href: '/support/music' },
              { name: 'TV', href: '/support/tv' }
            ]
          },
          {
            title: 'Get Help',
            items: [
              { name: 'Community', href: '/support/community' },
              { name: 'Check Coverage', href: '/support/coverage' },
              { name: 'Repair', href: '/support/repair' },
              { name: 'Contact Us', href: '/support/contact' }
            ]
          },
          {
            title: 'Helpful Topics',
            items: [
              { name: 'Get Help Online', href: '/support/help-online' },
              { name: 'Billing & Subscriptions', href: '/support/billing' },
              { name: 'Find My', href: '/support/find-my' },
              { name: 'Accessibility', href: '/support/accessibility' }
            ]
          }
        ]
      }
    },
  ]

  const handleLogout = () => {
    logout()
    setIsDropdownOpen(false)
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
    }
  }, [isDropdownOpen, activeDropdown, isSearchOpen])

  return (
    <>
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-11">
            {/* Apple Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.88C10.15 6.86 11.35 7.75 12.1 7.75C12.83 7.75 14.28 6.68 15.85 6.84C16.48 6.87 18.28 7.12 19.44 8.93C19.36 8.99 17.96 9.85 17.97 11.83C17.99 14.21 19.93 14.99 20 15.01C19.99 15.07 19.67 16.16 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="relative mega-dropdown"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className="text-xs font-normal text-gray-800 hover:text-black transition-colors duration-200 whitespace-nowrap py-2"
                      style={{ fontSize: '12px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                    >
                      {item.name}
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
                className="text-gray-800 hover:text-black transition-colors duration-200 relative group"
                title="Search (⌘K)"
              >
                <FiSearch className="h-4 w-4" />
                {/* Keyboard shortcut hint */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  Press ⌘K to search
                </div>
              </button>
              
              {/* Shopping Bag */}
              <button className="text-gray-800 hover:text-black transition-colors duration-200">
                <FiShoppingBag className="h-4 w-4" />
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
                  Sign In
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-black p-1"
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
                    className="block px-3 py-2 text-base font-normal text-gray-800 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-200"
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
                    className="flex items-center space-x-2 w-full px-3 py-2 text-base font-normal text-gray-800 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-200"
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
                      Sign In
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mega Menu Dropdown */}
      {activeDropdown && (
        <div className="fixed inset-x-0 top-11 bg-white/95 backdrop-blur-xl border-b border-gray-100 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {navigation.find(item => item.name === activeDropdown)?.dropdown.sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h3 
                    className="text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                  >
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          to={item.href}
                          className="text-sm text-gray-700 hover:text-black transition-colors duration-200 block"
                          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar