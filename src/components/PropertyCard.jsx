import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bed, Bath, Square, MapPin, Heart, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const PropertyCard = ({ id, title, location, price, beds, baths, sqft, image, featured }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card-premium group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'img-loaded' : 'img-loading'
          }`}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-gold text-dark-950 text-xs font-heading font-semibold rounded-full">
            Featured
          </div>
        )}

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isLiked 
              ? 'bg-red-500 text-white' 
              : 'bg-dark-950/50 backdrop-blur-sm text-white hover:bg-gold-400/20 hover:text-gold-400'
          }`}
        >
          <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
        </button>

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4 px-4 py-2 bg-dark-950/80 backdrop-blur-sm rounded-lg border border-gold-400/20">
          <span className="text-gold-400 font-display font-bold text-xl">{price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-secondary-400 text-sm mb-2">
          <MapPin size={14} className="text-gold-400" />
          {location}
        </div>

        <h3 className="font-display text-xl font-semibold text-white mb-4 group-hover:text-gold-400 transition-colors">
          {title}
        </h3>

        {/* Property Details */}
        <div className="flex items-center gap-4 py-4 border-t border-gold-400/10">
          <div className="flex items-center gap-2 text-secondary-400 text-sm">
            <Bed size={16} className="text-gold-400" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 text-secondary-400 text-sm">
            <Bath size={16} className="text-gold-400" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 text-secondary-400 text-sm">
            <Square size={16} className="text-gold-400" />
            <span>{sqft} sqft</span>
          </div>
        </div>

        {/* View Details Link */}
        <Link 
          to={`/properties/${id}`} 
          className="flex items-center gap-2 text-gold-400 font-medium text-sm mt-4 group/link"
        >
          View Details
          <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

export default PropertyCard
