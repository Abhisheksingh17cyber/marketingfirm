import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Phone, Mail, MapPin, 
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  ArrowUp, Send
} from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      toast.success('Thank you for subscribing!')
      setEmail('')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about#team' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
    ],
    services: [
      { name: 'Construction', path: '/services#construction' },
      { name: 'Home Finding', path: '/services#home-finding' },
      { name: 'Rentals', path: '/services#rentals' },
      { name: 'Property Management', path: '/services#management' },
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Testimonials', path: '/testimonials' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="relative bg-dark-950 pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c49a47' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Top Gold Line */}
      <div className="gold-line" />

      <div className="container-custom px-4 lg:px-8 relative">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gold-400/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-secondary-400">
                Stay updated with our latest properties and construction projects
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-6 py-4 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50 transition-colors"
                required
              />
              <button type="submit" className="btn-primary flex items-center gap-2">
                <Send size={18} />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <svg width="50" height="50" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="footerGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4b76e" />
                    <stop offset="50%" stopColor="#c49a47" />
                    <stop offset="100%" stopColor="#b07d3a" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="95" fill="#0a0a0a" stroke="url(#footerGold)" strokeWidth="3"/>
                <g fill="url(#footerGold)">
                  <rect x="70" y="60" width="60" height="80" rx="2"/>
                  <rect x="78" y="70" width="12" height="12" fill="#0a0a0a" rx="1"/>
                  <rect x="110" y="70" width="12" height="12" fill="#0a0a0a" rx="1"/>
                  <rect x="78" y="90" width="12" height="12" fill="#0a0a0a" rx="1"/>
                  <rect x="110" y="90" width="12" height="12" fill="#0a0a0a" rx="1"/>
                  <rect x="92" y="118" width="16" height="22" fill="#0a0a0a" rx="1"/>
                  <polygon points="60,60 100,35 140,60"/>
                  <rect x="40" y="90" width="30" height="50" rx="2"/>
                  <rect x="130" y="90" width="30" height="50" rx="2"/>
                </g>
              </svg>
              <div>
                <span className="font-display text-xl font-bold tracking-wider">
                  <span className="text-gradient-gold">LUXE</span>
                  <span className="text-white ml-1">ESTATES</span>
                </span>
              </div>
            </Link>
            <p className="text-secondary-400 mb-6 max-w-sm leading-relaxed">
              Building dreams, finding homes, and creating lasting legacies. 
              Your trusted partner in premium real estate and construction services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-secondary-400 hover:text-gold-400 transition-colors">
                <Phone size={18} className="text-gold-400" />
                +1 (234) 567-890
              </a>
              <a href="mailto:info@luxeestates.com" className="flex items-center gap-3 text-secondary-400 hover:text-gold-400 transition-colors">
                <Mail size={18} className="text-gold-400" />
                info@luxeestates.com
              </a>
              <div className="flex items-start gap-3 text-secondary-400">
                <MapPin size={18} className="text-gold-400 mt-1 flex-shrink-0" />
                123 Luxury Avenue, Beverly Hills, CA 90210
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-dark-900/50 border border-gold-400/20 flex items-center justify-center text-secondary-400 hover:text-gold-400 hover:border-gold-400/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-secondary-400 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-secondary-400 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-secondary-400 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gold-400/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-500 text-sm">
            © {new Date().getFullYear()} Luxe Estates. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-500">
            <Link to="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-gold-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-dark-950 shadow-lg shadow-gold-400/20 hover:shadow-gold-400/40 transition-shadow z-40"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}

export default Footer
