import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialCard = ({ name, role, content, rating, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card-premium p-8 relative"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote size={60} className="text-gold-400" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={index < rating ? 'text-gold-400 fill-gold-400' : 'text-secondary-600'}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-secondary-300 leading-relaxed mb-8 relative z-10">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400/30">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-heading font-semibold text-white">{name}</h4>
          <p className="text-gold-400 text-sm">{role}</p>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
    </motion.div>
  )
}

export default TestimonialCard
