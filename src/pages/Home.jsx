import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { 
  Building2, Home as HomeIcon, Key, ArrowRight, 
  Award, Users, CheckCircle2, Star,
  PlayCircle, ChevronDown
} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

// Components
import SectionHeading from '../components/SectionHeading'
import PropertyCard from '../components/PropertyCard'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'

// Animated Building Construction Component - Unique SVG Animation
const BuildingConstruction = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  // Building blocks that animate building up from ground
  const buildingBlocks = [
    // Ground/Foundation
    { x: 0, y: 280, width: 350, height: 20, delay: 0, color: '#5a4d3d' },
    
    // Main Building - Floor 1
    { x: 50, y: 250, width: 220, height: 30, delay: 0.3, color: '#1a1a1a' },
    { x: 58, y: 255, width: 35, height: 20, delay: 0.5, color: '#c49a47', isWindow: true },
    { x: 103, y: 255, width: 35, height: 20, delay: 0.6, color: '#c49a47', isWindow: true },
    { x: 148, y: 255, width: 35, height: 20, delay: 0.7, color: '#c49a47', isWindow: true },
    { x: 193, y: 255, width: 35, height: 20, delay: 0.8, color: '#c49a47', isWindow: true },
    { x: 238, y: 255, width: 25, height: 25, delay: 0.9, color: '#8B7355', isDoor: true },
    
    // Floor 2
    { x: 50, y: 220, width: 220, height: 30, delay: 1.0, color: '#1a1a1a' },
    { x: 58, y: 225, width: 35, height: 20, delay: 1.2, color: '#c49a47', isWindow: true },
    { x: 103, y: 225, width: 35, height: 20, delay: 1.3, color: '#c49a47', isWindow: true },
    { x: 148, y: 225, width: 35, height: 20, delay: 1.4, color: '#c49a47', isWindow: true },
    { x: 193, y: 225, width: 35, height: 20, delay: 1.5, color: '#c49a47', isWindow: true },
    
    // Floor 3
    { x: 50, y: 190, width: 220, height: 30, delay: 1.6, color: '#1a1a1a' },
    { x: 58, y: 195, width: 35, height: 20, delay: 1.8, color: '#c49a47', isWindow: true },
    { x: 103, y: 195, width: 35, height: 20, delay: 1.9, color: '#c49a47', isWindow: true },
    { x: 148, y: 195, width: 35, height: 20, delay: 2.0, color: '#c49a47', isWindow: true },
    { x: 193, y: 195, width: 35, height: 20, delay: 2.1, color: '#c49a47', isWindow: true },
    
    // Floor 4
    { x: 50, y: 160, width: 220, height: 30, delay: 2.2, color: '#1a1a1a' },
    { x: 58, y: 165, width: 35, height: 20, delay: 2.4, color: '#c49a47', isWindow: true },
    { x: 103, y: 165, width: 35, height: 20, delay: 2.5, color: '#c49a47', isWindow: true },
    { x: 148, y: 165, width: 35, height: 20, delay: 2.6, color: '#c49a47', isWindow: true },
    { x: 193, y: 165, width: 35, height: 20, delay: 2.7, color: '#c49a47', isWindow: true },
    
    // Floor 5
    { x: 50, y: 130, width: 220, height: 30, delay: 2.8, color: '#1a1a1a' },
    { x: 58, y: 135, width: 35, height: 20, delay: 3.0, color: '#c49a47', isWindow: true },
    { x: 103, y: 135, width: 35, height: 20, delay: 3.1, color: '#c49a47', isWindow: true },
    { x: 148, y: 135, width: 35, height: 20, delay: 3.2, color: '#c49a47', isWindow: true },
    { x: 193, y: 135, width: 35, height: 20, delay: 3.3, color: '#c49a47', isWindow: true },
    
    // Roof
    { x: 45, y: 115, width: 230, height: 15, delay: 3.4, color: '#c49a47' },
    
    // Penthouse
    { x: 100, y: 75, width: 120, height: 40, delay: 3.6, color: '#1a1a1a' },
    { x: 110, y: 85, width: 40, height: 25, delay: 3.8, color: '#c49a47', isWindow: true },
    { x: 170, y: 85, width: 40, height: 25, delay: 3.9, color: '#c49a47', isWindow: true },
    
    // Penthouse Roof
    { x: 95, y: 65, width: 130, height: 10, delay: 4.0, color: '#c49a47' },
    
    // Antenna/Spire
    { x: 157, y: 20, width: 6, height: 45, delay: 4.2, color: '#c49a47' },
    { x: 150, y: 15, width: 20, height: 5, delay: 4.4, color: '#c49a47' },
    { x: 157, y: 10, width: 6, height: 10, delay: 4.5, color: '#fff', isLight: true },
  ]

  // Floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: 30 + Math.random() * 280,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 2,
    size: 1 + Math.random() * 2
  }))

  return (
    <div className="absolute right-0 bottom-0 w-[420px] h-[360px] opacity-20 md:opacity-40 pointer-events-none overflow-hidden">
      <svg viewBox="0 0 420 360" className="w-full h-full">
        <defs>
          {/* Gold gradient for windows */}
          <linearGradient id="windowGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c49a47" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8B6914" stopOpacity="0.6" />
          </linearGradient>
          
          {/* Building shadow */}
          <filter id="buildingShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
          </filter>
          
          {/* Glow effect for lights */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Animated Construction Crane */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 8, -5, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: '340px 280px' }}
        >
          {/* Crane Base */}
          <rect x="330" y="280" width="25" height="80" fill="#3d3d3d" />
          <rect x="325" y="280" width="35" height="10" fill="#4a4a4a" />
          
          {/* Crane Tower */}
          <rect x="337" y="80" width="12" height="200" fill="#4a4a4a" />
          
          {/* Crane Arm */}
          <rect x="280" y="75" width="80" height="12" fill="#c49a47" />
          <rect x="345" y="75" width="50" height="12" fill="#8B6914" />
          
          {/* Counterweight */}
          <rect x="375" y="75" width="20" height="20" fill="#5a5a5a" />
          
          {/* Crane Cable */}
          <motion.line
            x1="300"
            y1="87"
            x2="300"
            y2="180"
            stroke="#c49a47"
            strokeWidth="2"
            initial={{ y2: 140 }}
            animate={{ y2: [140, 200, 140] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Crane Hook with Block */}
          <motion.g
            initial={{ y: 0 }}
            animate={{ y: [0, 60, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="290" y="180" width="20" height="15" fill="#c49a47" rx="2" />
            <rect x="285" y="195" width="30" height="20" fill="#2a2a2a" stroke="#c49a47" strokeWidth="1" />
          </motion.g>
        </motion.g>

        {/* Building Blocks with staggered animation */}
        <g filter="url(#buildingShadow)">
          {buildingBlocks.map((block, index) => (
            <motion.rect
              key={index}
              x={block.x}
              y={block.y}
              width={block.width}
              height={block.height}
              fill={block.isWindow ? "url(#windowGlow)" : block.color}
              filter={block.isLight ? "url(#glow)" : "none"}
              initial={{ 
                opacity: 0, 
                y: block.y + 80, 
                scaleY: 0,
                scaleX: 0.8
              }}
              animate={isVisible ? { 
                opacity: block.isWindow ? 0.85 : 1, 
                y: block.y, 
                scaleY: 1,
                scaleX: 1
              } : {}}
              transition={{ 
                duration: 0.6, 
                delay: block.delay,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{ transformOrigin: `${block.x + block.width/2}px ${block.y + block.height}px` }}
              rx={block.isWindow ? 1 : block.isDoor ? 3 : 0}
            />
          ))}
        </g>

        {/* Animated window lights flickering */}
        {buildingBlocks.filter(b => b.isWindow).map((block, i) => (
          <motion.rect
            key={`light-${i}`}
            x={block.x + 2}
            y={block.y + 2}
            width={block.width - 4}
            height={block.height - 4}
            fill="#fff"
            initial={{ opacity: 0 }}
            animate={isVisible ? { 
              opacity: [0, 0.3, 0.1, 0.4, 0.2]
            } : {}}
            transition={{ 
              duration: 3,
              delay: block.delay + 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}

        {/* Floating Construction Particles */}
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            r={particle.size}
            fill="#c49a47"
            initial={{ cy: 0, opacity: 0 }}
            animate={{ 
              cy: [0, 360],
              opacity: [0, 0.7, 0]
            }}
            transition={{ 
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Ground with animated drawing */}
        <motion.line
          x1="0"
          y1="300"
          x2="420"
          y2="300"
          stroke="#c49a47"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        
        {/* Ground texture lines */}
        {[...Array(21)].map((_, i) => (
          <motion.line
            key={i}
            x1={i * 20}
            y1="300"
            x2={i * 20 + 12}
            y2="315"
            stroke="#5a4d3d"
            strokeWidth="1.5"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.4 + i * 0.03 }}
          />
        ))}

        {/* Small decorative trees/bushes */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 4.5, duration: 0.5 }}
        >
          <ellipse cx="20" cy="290" rx="15" ry="10" fill="#2d5a3d" />
          <ellipse cx="320" cy="290" rx="12" ry="8" fill="#2d5a3d" />
        </motion.g>
      </svg>
    </div>
  )
}

const Home = () => {
  const videoRef = useRef(null)
  const heroRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const heroTextY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [propertiesRef, propertiesInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video autoplay failed:', err))
    }
  }, [])

  const stats = [
    { number: 500, suffix: '+', label: 'Projects Completed' },
    { number: 1200, suffix: '+', label: 'Happy Clients' },
    { number: 25, suffix: '+', label: 'Years Experience' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' },
  ]

  const services = [
    {
      icon: Building2,
      title: 'Construction',
      description: 'Premium construction services for residential and commercial properties with cutting-edge technology and craftsmanship.',
      link: '/services#construction'
    },
    {
      icon: HomeIcon,
      title: 'Home Finding',
      description: 'Discover your dream home with our extensive portfolio of luxury properties in prime locations.',
      link: '/services#home-finding'
    },
    {
      icon: Key,
      title: 'Rental Properties',
      description: 'Find the perfect rental property that matches your lifestyle and budget with our curated selection.',
      link: '/services#rentals'
    },
  ]

  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      price: '$4,500,000',
      beds: 5,
      baths: 6,
      sqft: '6,500',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Oceanfront Penthouse',
      location: 'Malibu, CA',
      price: '$8,200,000',
      beds: 4,
      baths: 5,
      sqft: '4,800',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      featured: true
    },
    {
      id: 3,
      title: 'Contemporary Estate',
      location: 'Bel Air, CA',
      price: '$12,000,000',
      beds: 7,
      baths: 9,
      sqft: '12,000',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      featured: true
    },
  ]

  const testimonials = [
    {
      name: 'Michael Reynolds',
      role: 'CEO, Tech Innovations',
      content: 'Luxe Estates exceeded all our expectations. Their attention to detail in constructing our corporate headquarters was impeccable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      content: 'Finding our dream home seemed impossible until we worked with Luxe Estates. They understood exactly what we wanted.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
    },
    {
      name: 'David Chen',
      role: 'Real Estate Investor',
      content: 'The professionalism and market knowledge of the Luxe Estates team is unmatched. Highly recommend their services.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
  ]

  return (
    <>
      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
          >
            <source 
              src="https://player.vimeo.com/external/459863803.hd.mp4?s=4ad2af35c91307a5db5098df0c8c2f2e40bf2ecd&profile_id=175" 
              type="video/mp4" 
            />
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 video-overlay" />
          <div className="absolute inset-0 noise-overlay" />
        </motion.div>

        {/* Unique Animated Building Construction */}
        <BuildingConstruction />

        {/* Hero Content */}
        <motion.div 
          style={{ y: heroTextY }}
          className="relative h-full flex items-center"
        >
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-4xl">
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/30 mb-6"
              >
                <Award className="w-4 h-4 text-gold-400" />
                <span className="text-gold-400 text-sm font-medium tracking-wide">Award-Winning Excellence</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="heading-xl text-white mb-6"
              >
                Building
                <span className="text-gradient-gold block">Dreams Into Reality</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-secondary-300 mb-8 max-w-2xl leading-relaxed"
              >
                Premium construction, exclusive properties, and exceptional living spaces. 
                Your journey to extraordinary living begins here.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/properties" className="btn-primary flex items-center gap-2">
                  Explore Properties
                  <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-secondary flex items-center gap-2">
                  <PlayCircle size={18} />
                  Our Services
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-12 flex flex-wrap items-center gap-6 md:gap-8"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-gold-400" size={20} />
                  <span className="text-secondary-300 text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-gold-400" size={20} />
                  <span className="text-secondary-300 text-sm">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-gold-400" size={20} />
                  <span className="text-secondary-300 text-sm">1200+ Happy Clients</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-secondary-400 text-sm tracking-wider">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="text-gold-400" size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-dark-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-gold opacity-5" />
        <div className="container-custom px-4 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gold-400 mb-2">
                  {statsInView && (
                    <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-secondary-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding bg-dark-950">
        <div className="container-custom px-4 lg:px-8">
          <SectionHeading
            subtitle="What We Do"
            title="Premium Services for Extraordinary Living"
            description="From concept to completion, we deliver excellence in every project."
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section ref={propertiesRef} className="section-padding bg-dark-900/30">
        <div className="container-custom px-4 lg:px-8">
          <SectionHeading
            subtitle="Featured Properties"
            title="Discover Extraordinary Homes"
            description="Handpicked selection of our finest luxury properties."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                animate={propertiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <PropertyCard {...property} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/properties" className="btn-primary inline-flex items-center gap-2">
              View All Properties
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-dark-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-dark-950" />
        </div>

        <div className="container-custom px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                subtitle="Why Choose Us"
                title="Excellence in Every Detail"
                description="With over 25 years of experience, we've built a reputation for delivering exceptional quality and service."
                align="left"
              />
              
              <div className="space-y-6 mt-8">
                {[
                  { title: 'Unmatched Quality', desc: 'Premium materials and expert craftsmanship in every project.' },
                  { title: 'Transparent Process', desc: 'Clear communication and updates throughout your journey.' },
                  { title: 'On-Time Delivery', desc: 'We respect your time and meet our commitments.' },
                  { title: 'After-Sales Support', desc: 'Continued support even after project completion.' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center">
                      <CheckCircle2 className="text-gold-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-secondary-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
                  alt="Luxury Property"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold-400 text-dark-950 p-6 rounded-xl shadow-2xl">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-dark-900/30">
        <div className="container-custom px-4 lg:px-8">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Real stories from satisfied clients who trusted us with their dreams."
          />
          
          <div className="mt-16">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="testimonials-swiper !pb-14"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920"
            alt="Luxury Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/90" />
          <div className="absolute inset-0 bg-gradient-gold opacity-10" />
        </div>

        <div className="container-custom px-4 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="subheading">Start Your Journey</span>
            <h2 className="heading-lg text-white mt-4 mb-6">
              Ready to Build Your <span className="text-gradient-gold">Dream?</span>
            </h2>
            <p className="body-text max-w-2xl mx-auto mb-8">
              Whether you're looking to build, buy, or rent, our team of experts is here 
              to guide you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get Started Today
              </Link>
              <Link to="/projects" className="btn-secondary">
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
