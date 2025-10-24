import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiYoutube, FiInstagram, FiFacebook, FiMessageCircle, FiSend } from 'react-icons/fi'
import { FaTiktok, FaDiscord, FaTelegramPlane, FaPinterest, FaSnapchat, FaReddit, FaDribbble, FaMedium, FaSkype } from 'react-icons/fa'
import DynamicBondNetwork from './DynamicBondNetwork'

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
    { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/pseudovicky/' },
    { name: 'Twitter', icon: FiTwitter, href: 'https://x.com/gitviki' },
    { name: 'Facebook', icon: FiFacebook, href: 'https://www.facebook.com/gitviki/' },
    { name: 'Instagram', icon: FiInstagram, href: 'https://www.instagram.com/viking08_/' },
    { name: 'GitHub', icon: FiGithub, href: 'https://github.com/pseudovicky' },
    { name: 'Gmail', icon: FiMail, href: 'mailto:sudovicky@gmail.com' },
    { name: 'YouTube', icon: FiYoutube, href: 'https://youtube.com' },
    { name: 'Reddit', icon: FaReddit, href: 'https://www.reddit.com/user/git-viki/' },
    { name: 'Dribbble', icon: FaDribbble, href: '#' },
    { name: 'Medium', icon: FaMedium, href: '#' },
    { name: 'Skype', icon: FaSkype, href: '#' },
    { name: 'Discord', icon: FaDiscord, href: '#' },
    { name: 'Telegram', icon: FaTelegramPlane, href: '#' },
    { name: 'Pinterest', icon: FaPinterest, href: '#' },
    { name: 'Snapchat', icon: FaSnapchat, href: '#' },
  ]

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <DynamicBondNetwork />
      
      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 pb-8 pointer-events-none">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-medium text-sm mb-4 tracking-wide pointer-events-none">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name} className="pointer-events-none">
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-all duration-200 text-sm inline-block pointer-events-auto"
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
        <div className="flex flex-wrap gap-4 mb-8 pointer-events-none">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 hover:scale-110 transition-all duration-200 inline-block pointer-events-auto"
                aria-label={social.name}
                title={social.name}
              >
                <Icon className="w-6 h-6" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
