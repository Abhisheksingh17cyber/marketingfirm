import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    submenu: [
      { name: 'Construction', path: '/services#construction' },
      { name: 'Home Finding', path: '/services#home-finding' },
      { name: 'Rentals', path: '/services#rentals' },
    ]
  },
  { name: 'Properties', path: '/properties' },
  { name: 'Projects', path: '/projects' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="bg-dark-900/80 backdrop-blur-sm border-b border-gold-400/10">
          <div className="container-custom py-2 px-8 flex justify-between items-center text-sm">
            <div className="flex items-center gap-6 text-secondary-400">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone size={14} />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@luxeestates.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Mail size={14} />
                <span>info@luxeestates.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-secondary-400">
              <MapPin size={14} className="text-gold-400" />
              <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'top-0 bg-dark-950/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-gold-400/10' 
            : 'top-10 lg:top-12 bg-transparent'
        }`}
      >
        <div className="container-custom px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.svg
                whileHover={{ scale: 1.05 }}
                width="50"
                height="50"
                viewBox="0 0 200 200"
                className="transition-transform duration-300"
              >
                <defs>
                  <linearGradient id="navGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4b76e" />
                    <stop offset="50%" stopColor="#c49a47" />
                    <stop offset="100%" stopColor="#b07d3a" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="95" fill="#0a0a0a" stroke="url(#navGold)" strokeWidth="3"/>
                <g fill="url(#navGold)">
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
              </motion.svg>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-wider">
                  <span className="text-gradient-gold">LUXE</span>
                  <span className="text-white ml-1">ESTATES</span>
                </span>
                <span className="text-[10px] text-secondary-500 tracking-[0.2em] uppercase">Premium Real Estate</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-heading font-medium tracking-wide transition-all duration-300 flex items-center gap-1 ${
                      location.pathname === link.path
                        ? 'text-gold-400'
                        : 'text-secondary-300 hover:text-gold-400'
                    }`}
                  >
                    {link.name}
                    {link.submenu && <ChevronDown size={14} />}
                  </Link>

                  {/* Submenu */}
                  <AnimatePresence>
                    {link.submenu && activeSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-dark-900/95 backdrop-blur-xl border border-gold-400/20 rounded-lg overflow-hidden shadow-xl"
                      >
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            className="block px-4 py-3 text-sm text-secondary-300 hover:text-gold-400 hover:bg-gold-400/5 transition-colors"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Active Indicator */}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-4 right-4 h-[2px] bg-gradient-gold rounded-full"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact" className="btn-primary text-xs">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-dark-950/98 backdrop-blur-xl">
              <div className="flex flex-col items-center justify-center h-full pt-20">
                {/* Logo in Mobile Menu */}
                <div className="mb-8">
                  <svg width="80" height="80" viewBox="0 0 200 200">
                    <defs>
                      <linearGradient id="mobileGold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d4b76e" />
                        <stop offset="50%" stopColor="#c49a47" />
                        <stop offset="100%" stopColor="#b07d3a" />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="95" fill="#0a0a0a" stroke="url(#mobileGold)" strokeWidth="3"/>
                    <g fill="url(#mobileGold)">
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
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col items-center gap-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`text-2xl font-display font-medium tracking-wide transition-colors ${
                          location.pathname === link.path
                            ? 'text-gold-400'
                            : 'text-white hover:text-gold-400'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8"
                >
                  <Link to="/contact" className="btn-primary">
                    Get Started
                  </Link>
                </motion.div>

                {/* Mobile Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-12 flex flex-col items-center gap-3 text-secondary-400 text-sm"
                >
                  <a href="tel:+1234567890" className="flex items-center gap-2">
                    <Phone size={16} className="text-gold-400" />
                    +1 (234) 567-890
                  </a>
                  <a href="mailto:info@luxeestates.com" className="flex items-center gap-2">
                    <Mail size={16} className="text-gold-400" />
                    info@luxeestates.com
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
