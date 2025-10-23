import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiYoutube, FiInstagram, FiFacebook } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
  const footerSections = [
    {
      title: 'PRODUCT',
      links: [
        { name: 'Design', href: '/portfolio' },
        { name: 'Development', href: '/about' },
        { name: 'Enterprise', href: '#' },
        { name: 'AI Features', href: '#' },
        { name: 'Visual Sitemap', href: '#' },
        { name: 'Business Solutions', href: '#' },
        { name: 'eCommerce', href: '#' },
        { name: 'CMS', href: '#' },
        { name: 'Management Tools', href: '#' },
        { name: 'SEO', href: '#' },
        { name: 'Marketing Integrations', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Reliability & Performance', href: '#' },
        { name: 'Top Features', href: '#' },
      ]
    },
    {
      title: 'RESOURCES',
      links: [
        { name: 'Academy', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'Forum', href: '#' },
        { name: 'Inspiration', href: '#' },
        { name: 'Marketing Resources', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Partner Program', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Brand Guidelines', href: '#' },
      ]
    },
    {
      title: 'MORE FROM VK',
      links: [
        { name: 'Website Builder', href: '/' },
        { name: 'Website Design', href: '#' },
        { name: 'Website Templates', href: '#' },
        { name: 'eCommerce Website', href: '#' },
        { name: 'Appointment Scheduling', href: '#' },
        { name: 'Portfolio Website', href: '/portfolio' },
        { name: 'Blog Website', href: '#' },
      ]
    },
    {
      title: 'COMPANY',
      links: [
        { name: 'About VK', href: '/about' },
        { name: 'About Portfolio', href: '#' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Press & Media', href: '#' },
        { name: 'Accessibility Statement', href: '#' },
        { name: 'Site Map', href: '#' },
        { name: 'Careers', href: '#' },
      ]
    },
  ]

  const socialLinks = [
    { name: 'YouTube', icon: FiYoutube, href: 'https://youtube.com' },
    { name: 'Twitter', icon: FiTwitter, href: 'https://twitter.com/vickykumar' },
    { name: 'Instagram', icon: FiInstagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: FiFacebook, href: 'https://facebook.com' },
    { name: 'TikTok', icon: FaTiktok, href: 'https://tiktok.com' },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-medium text-sm mb-4 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
