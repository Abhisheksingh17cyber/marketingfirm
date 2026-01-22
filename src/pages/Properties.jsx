import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Search, SlidersHorizontal, MapPin, Bed, Bath, Square,
  Grid3X3, List, Heart, ArrowRight, X, ChevronDown
} from 'lucide-react'
import PropertyCard from '../components/PropertyCard'
import SectionHeading from '../components/SectionHeading'

const Properties = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    beds: 'all',
    location: 'all'
  })
  const [searchQuery, setSearchQuery] = useState('')

  const properties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      price: '$4,500,000',
      beds: 5,
      baths: 6,
      sqft: '6,500',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      type: 'sale',
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
      type: 'sale',
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
      type: 'sale',
      featured: true
    },
    {
      id: 4,
      title: 'Downtown Luxury Apartment',
      location: 'Los Angeles, CA',
      price: '$15,000/mo',
      beds: 2,
      baths: 2,
      sqft: '1,800',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      type: 'rent',
      featured: false
    },
    {
      id: 5,
      title: 'Hillside Modern Home',
      location: 'Hollywood Hills, CA',
      price: '$6,900,000',
      beds: 6,
      baths: 7,
      sqft: '8,200',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      type: 'sale',
      featured: false
    },
    {
      id: 6,
      title: 'Beachfront Condo',
      location: 'Santa Monica, CA',
      price: '$8,500/mo',
      beds: 3,
      baths: 3,
      sqft: '2,400',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      type: 'rent',
      featured: false
    },
    {
      id: 7,
      title: 'Mediterranean Villa',
      location: 'Pacific Palisades, CA',
      price: '$9,500,000',
      beds: 5,
      baths: 6,
      sqft: '7,800',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
      type: 'sale',
      featured: false
    },
    {
      id: 8,
      title: 'Urban Loft',
      location: 'Downtown LA, CA',
      price: '$12,000/mo',
      beds: 2,
      baths: 2,
      sqft: '2,200',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      type: 'rent',
      featured: false
    },
    {
      id: 9,
      title: 'Classic Colonial Estate',
      location: 'Pasadena, CA',
      price: '$5,200,000',
      beds: 6,
      baths: 5,
      sqft: '6,000',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
      type: 'sale',
      featured: false
    },
  ]

  const filterOptions = {
    type: ['all', 'sale', 'rent'],
    priceRange: ['all', '0-1M', '1M-5M', '5M-10M', '10M+'],
    beds: ['all', '1+', '2+', '3+', '4+', '5+'],
    location: ['all', 'Beverly Hills', 'Malibu', 'Bel Air', 'Los Angeles', 'Santa Monica', 'Hollywood Hills']
  }

  const filteredProperties = properties.filter(property => {
    if (filters.type !== 'all' && property.type !== filters.type) return false
    if (searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !property.location.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Properties"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/80 to-dark-950/95" />
        </div>

        <div className="container-custom px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="subheading">Our Portfolio</span>
            <h1 className="heading-xl text-white mt-4 mb-6">
              Exclusive <span className="text-gradient-gold">Properties</span>
            </h1>
            <p className="text-xl text-secondary-300 leading-relaxed">
              Discover our curated collection of luxury homes, premium rentals, 
              and exceptional properties in prime locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-dark-900/50 sticky top-20 z-30 backdrop-blur-xl border-b border-gold-400/10">
        <div className="container-custom px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={20} />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50 transition-colors"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              {/* Quick Filters */}
              <div className="hidden md:flex items-center gap-2">
                {filterOptions.type.map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilters({ ...filters, type })}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      filters.type === type
                        ? 'bg-gold-400 text-dark-950'
                        : 'bg-dark-900/50 text-secondary-300 border border-gold-400/20 hover:border-gold-400/40'
                    }`}
                  >
                    {type === 'all' ? 'All' : type === 'sale' ? 'For Sale' : 'For Rent'}
                  </button>
                ))}
              </div>

              {/* Advanced Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-dark-900/50 border border-gold-400/20 rounded-lg text-secondary-300 hover:border-gold-400/40 transition-colors"
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 bg-dark-900/50 border border-gold-400/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gold-400/20 text-gold-400' : 'text-secondary-400'}`}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-gold-400/20 text-gold-400' : 'text-secondary-400'}`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gold-400/10">
                  {Object.entries(filterOptions).map(([key, options]) => (
                    <div key={key}>
                      <label className="text-secondary-400 text-sm mb-2 block capitalize">{key}</label>
                      <div className="relative">
                        <select
                          value={filters[key]}
                          onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
                          className="w-full px-4 py-2 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white appearance-none focus:outline-none focus:border-gold-400/50"
                        >
                          {options.map((option) => (
                            <option key={option} value={option}>
                              {option === 'all' ? `All ${key}s` : option}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400" size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom px-4 lg:px-8">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-secondary-400">
              Showing <span className="text-gold-400 font-medium">{filteredProperties.length}</span> properties
            </p>
            <select className="px-4 py-2 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white appearance-none focus:outline-none">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          {/* Properties */}
          <motion.div
            layout
            className={viewMode === 'grid' 
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
            }
          >
            <AnimatePresence>
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {viewMode === 'grid' ? (
                    <PropertyCard {...property} />
                  ) : (
                    <ListPropertyCard {...property} />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More */}
          {filteredProperties.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Load More Properties
              </button>
            </div>
          )}

          {/* No Results */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-secondary-400 text-lg mb-4">No properties found matching your criteria.</p>
              <button
                onClick={() => {
                  setFilters({ type: 'all', priceRange: 'all', beds: 'all', location: 'all' })
                  setSearchQuery('')
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-gold opacity-10" />
        <div className="container-custom px-4 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="body-text max-w-2xl mx-auto mb-8">
              Let us know your requirements and our team will find the perfect property for you.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Our Team
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// List View Property Card
const ListPropertyCard = ({ id, title, location, price, beds, baths, sqft, image, type, featured }) => {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      className="card-premium flex flex-col md:flex-row overflow-hidden group"
    >
      <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-gold text-dark-950 text-xs font-heading font-semibold rounded-full">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 px-3 py-1 bg-dark-950/80 text-gold-400 text-xs font-medium rounded-full uppercase">
          {type === 'sale' ? 'For Sale' : 'For Rent'}
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-secondary-400 text-sm mb-2">
            <MapPin size={14} className="text-gold-400" />
            {location}
          </div>
          <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-6 text-secondary-400 text-sm">
            <span className="flex items-center gap-1"><Bed size={16} className="text-gold-400" /> {beds} Beds</span>
            <span className="flex items-center gap-1"><Bath size={16} className="text-gold-400" /> {baths} Baths</span>
            <span className="flex items-center gap-1"><Square size={16} className="text-gold-400" /> {sqft} sqft</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gold-400/10">
          <span className="text-gold-400 font-display font-bold text-xl">{price}</span>
          <Link 
            to={`/properties/${id}`}
            className="flex items-center gap-2 text-gold-400 font-medium text-sm group/link"
          >
            View Details
            <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Properties
