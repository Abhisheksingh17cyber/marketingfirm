import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card-premium p-8 group relative overflow-hidden"
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center group-hover:border-gold-400/40 transition-colors duration-500">
          <Icon className="w-8 h-8 text-gold-400" />
        </div>
        {/* Decorative Element */}
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full border border-gold-400/10 group-hover:border-gold-400/30 transition-colors duration-500" />
      </div>

      {/* Content */}
      <h3 className="relative font-display text-2xl font-semibold text-white mb-4 group-hover:text-gold-400 transition-colors">
        {title}
      </h3>

      <p className="relative text-secondary-400 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Link */}
      <Link 
        to={link} 
        className="relative inline-flex items-center gap-2 text-gold-400 font-medium group/link"
      >
        Learn More
        <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
      </Link>

      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  )
}

export default ServiceCard
