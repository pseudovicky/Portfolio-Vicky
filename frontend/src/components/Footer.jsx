import { Link } from 'react-router-dom'

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop and Learn',
      links: [
        { name: 'Store', href: '/store' },
        { name: 'Mac', href: '/mac' },
        { name: 'iPad', href: '/ipad' },
        { name: 'iPhone', href: '/iphone' },
        { name: 'Watch', href: '/watch' },
        { name: 'AirPods', href: '/airpods' },
        { name: 'TV & Home', href: '/tv-home' },
        { name: 'AirTag', href: '/accessories/airtag' },
        { name: 'Accessories', href: '/accessories' },
        { name: 'Gift Cards', href: '/store/gift-cards' }
      ]
    },
    {
      title: 'Apple Wallet',
      links: [
        { name: 'Wallet', href: '/wallet' }
      ]
    },
    {
      title: 'Account',
      links: [
        { name: 'Manage Your Apple Account', href: '/account' },
        { name: 'Apple Store Account', href: '/store/account' },
        { name: 'iCloud.com', href: 'https://icloud.com' }
      ]
    },
    {
      title: 'Entertainment',
      links: [
        { name: 'Apple One', href: '/entertainment/apple-one' },
        { name: 'Apple TV+', href: '/entertainment/tv-plus' },
        { name: 'Apple Music', href: '/entertainment/apple-music' },
        { name: 'Apple Arcade', href: '/entertainment/apple-arcade' },
        { name: 'Apple Podcasts', href: '/entertainment/podcasts' },
        { name: 'Apple Books', href: '/entertainment/books' },
        { name: 'App Store', href: '/app-store' }
      ]
    },
    {
      title: 'Apple Store',
      links: [
        { name: 'Find a Store', href: '/store/locations' },
        { name: 'Genius Bar', href: '/store/genius-bar' },
        { name: 'Today at Apple', href: '/store/today-at-apple' },
        { name: 'Group Reservations', href: '/store/group-reservations' },
        { name: 'Apple Camp', href: '/store/apple-camp' },
        { name: 'Apple Trade In', href: '/store/trade-in' },
        { name: 'Ways to Buy', href: '/store/ways-to-buy' },
        { name: 'Recycling Programme', href: '/store/recycling' },
        { name: 'Order Status', href: '/store/order-status' },
        { name: 'Shopping Help', href: '/store/help' }
      ]
    },
    {
      title: 'For Business',
      links: [
        { name: 'Apple and Business', href: '/business' },
        { name: 'Shop for Business', href: '/business/shop' }
      ]
    },
    {
      title: 'For Education',
      links: [
        { name: 'Apple and Education', href: '/education' },
        { name: 'Shop for Education', href: '/education/shop' },
        { name: 'Shop for University', href: '/education/university' }
      ]
    },
    {
      title: 'For Healthcare',
      links: [
        { name: 'Apple in Healthcare', href: '/healthcare' },
        { name: 'Mac in Healthcare', href: '/healthcare/mac' },
        { name: 'Health on Apple Watch', href: '/healthcare/watch' }
      ]
    },
    {
      title: 'Apple Values',
      links: [
        { name: 'Accessibility', href: '/accessibility' },
        { name: 'Education', href: '/values/education' },
        { name: 'Environment', href: '/environment' },
        { name: 'Privacy', href: '/privacy' },
        { name: 'Supply Chain Innovation', href: '/supplier-responsibility' }
      ]
    },
    {
      title: 'About Apple',
      links: [
        { name: 'Newsroom', href: '/newsroom' },
        { name: 'Apple Leadership', href: '/leadership' },
        { name: 'Career Opportunities', href: '/careers' },
        { name: 'Investors', href: '/investor' },
        { name: 'Ethics & Compliance', href: '/compliance' },
        { name: 'Events', href: '/events' },
        { name: 'Contact Apple', href: '/contact' }
      ]
    }
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Disclaimer Text */}
        <div className="py-4 text-xs text-gray-600 border-b border-gray-200">
          <p className="mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
            A subscription is required for Apple TV+.
          </p>
          <p style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
            Features are subject to change. Some features, applications and services may not be available in all regions or all languages.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h3 
                  className="text-xs font-semibold text-gray-900 uppercase tracking-wider"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.href.startsWith('http') ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-gray-600 hover:text-gray-900 transition-colors duration-200"
                          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-xs text-gray-600 hover:text-gray-900 transition-colors duration-200"
                          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Store Locator */}
        <div className="py-4 border-t border-gray-200">
          <p className="text-xs text-gray-600 mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
            More ways to shop:{' '}
            <Link to="/store/locations" className="text-blue-600 hover:underline">
              Find an Apple Store
            </Link>
            {' '}or{' '}
            <a href="#" className="text-blue-600 hover:underline">
              other retailer
            </a>
            {' '}near you. Or call{' '}
            <a href="tel:0008004019600" className="text-blue-600 hover:underline">
              000800 040 1966
            </a>
            .
          </p>
        </div>

        {/* Copyright and Legal Links */}
        <div className="py-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-xs text-gray-600" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
              Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center space-x-1 sm:space-x-4 text-xs text-gray-600">
              <Link to="/legal/privacy" className="hover:text-gray-900 transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/legal/terms" className="hover:text-gray-900 transition-colors duration-200">
                Terms of Use
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/legal/sales-policy" className="hover:text-gray-900 transition-colors duration-200">
                Sales Policy
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/legal" className="hover:text-gray-900 transition-colors duration-200">
                Legal
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/sitemap" className="hover:text-gray-900 transition-colors duration-200">
                Site Map
              </Link>
            </div>
          </div>
          <div className="text-xs text-gray-600" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
            India
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
