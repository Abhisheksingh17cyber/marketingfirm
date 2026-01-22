import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye,
  Building2, MapPin, Bed, Bath, Square, X, Upload, Image
} from 'lucide-react'

const AdminProperties = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState(null)

  const [properties, setProperties] = useState([
    {
      id: 1,
      title: 'Skyline Penthouse',
      location: 'Manhattan, NY',
      price: 4500000,
      type: 'Penthouse',
      beds: 4,
      baths: 3,
      sqft: 3200,
      status: 'active',
      views: 1250,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400'
    },
    {
      id: 2,
      title: 'The Grand Estate',
      location: 'Beverly Hills, CA',
      price: 8900000,
      type: 'Estate',
      beds: 6,
      baths: 5,
      sqft: 7500,
      status: 'active',
      views: 980,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400'
    },
    {
      id: 3,
      title: 'Coastal Retreat',
      location: 'Malibu, CA',
      price: 5200000,
      type: 'Villa',
      beds: 5,
      baths: 4,
      sqft: 4800,
      status: 'pending',
      views: 856,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400'
    },
    {
      id: 4,
      title: 'Mountain View Villa',
      location: 'Aspen, CO',
      price: 6800000,
      type: 'Villa',
      beds: 5,
      baths: 4,
      sqft: 5200,
      status: 'sold',
      views: 720,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400'
    },
  ])

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === 'all' || property.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusStyle = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400'
      case 'pending':
        return 'bg-orange-500/20 text-orange-400'
      case 'sold':
        return 'bg-blue-500/20 text-blue-400'
      default:
        return 'bg-secondary-500/20 text-secondary-400'
    }
  }

  const handleDelete = (property) => {
    setSelectedProperty(property)
    setShowDeleteModal(true)
  }

  const confirmDelete = () => {
    setProperties(properties.filter(p => p.id !== selectedProperty.id))
    setShowDeleteModal(false)
    setSelectedProperty(null)
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">Properties</h1>
          <p className="text-secondary-400 mt-1">Manage your property listings</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="btn-primary text-sm inline-flex items-center gap-2"
        >
          <Plus size={18} />
          Add Property
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={20} />
          <input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'active', 'pending', 'sold'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filterStatus === status
                  ? 'bg-gold-400 text-dark-950'
                  : 'bg-dark-900/50 text-secondary-300 border border-gold-400/20 hover:border-gold-400/40'
              }`}
            >
              {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Properties Table */}
      <div className="bg-dark-900/50 border border-gold-400/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold-400/10">
                <th className="text-left px-6 py-4 text-secondary-400 text-sm font-medium">Property</th>
                <th className="text-left px-6 py-4 text-secondary-400 text-sm font-medium">Type</th>
                <th className="text-left px-6 py-4 text-secondary-400 text-sm font-medium">Price</th>
                <th className="text-left px-6 py-4 text-secondary-400 text-sm font-medium">Details</th>
                <th className="text-left px-6 py-4 text-secondary-400 text-sm font-medium">Status</th>
                <th className="text-left px-6 py-4 text-secondary-400 text-sm font-medium">Views</th>
                <th className="text-right px-6 py-4 text-secondary-400 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProperties.map((property) => (
                <motion.tr
                  key={property.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-gold-400/10 hover:bg-dark-800/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-12 rounded-lg overflow-hidden bg-dark-800">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium">{property.title}</p>
                        <p className="text-secondary-400 text-sm flex items-center gap-1">
                          <MapPin size={12} />
                          {property.location}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-secondary-300">{property.type}</td>
                  <td className="px-6 py-4 text-gold-400 font-semibold">
                    ${property.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 text-secondary-400 text-sm">
                      <span className="flex items-center gap-1">
                        <Bed size={14} />
                        {property.beds}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath size={14} />
                        {property.baths}
                      </span>
                      <span className="flex items-center gap-1">
                        <Square size={14} />
                        {property.sqft.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(property.status)}`}>
                      {property.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-secondary-300">
                      <Eye size={14} />
                      {property.views.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-secondary-400 hover:text-white hover:bg-dark-800 rounded-lg transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-secondary-400 hover:text-gold-400 hover:bg-dark-800 rounded-lg transition-colors">
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(property)}
                        className="p-2 text-secondary-400 hover:text-red-400 hover:bg-dark-800 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <Building2 size={48} className="text-gold-400/30 mx-auto mb-4" />
            <p className="text-secondary-400">No properties found</p>
          </div>
        )}
      </div>

      {/* Add Property Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-950/90 flex items-center justify-center z-50 p-4"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-dark-900 border border-gold-400/20 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gold-400/10">
                <h2 className="text-xl font-semibold text-white">Add New Property</h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-secondary-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <form className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Property Title</label>
                    <input
                      type="text"
                      placeholder="Enter property title"
                      className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Property Type</label>
                    <select className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50">
                      <option>Villa</option>
                      <option>Penthouse</option>
                      <option>Estate</option>
                      <option>Apartment</option>
                      <option>Townhouse</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Enter property location"
                    className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Price</label>
                    <input
                      type="number"
                      placeholder="Enter price"
                      className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Status</label>
                    <select className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50">
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="sold">Sold</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Bedrooms</label>
                    <input
                      type="number"
                      placeholder="Beds"
                      className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Bathrooms</label>
                    <input
                      type="number"
                      placeholder="Baths"
                      className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Square Feet</label>
                    <input
                      type="number"
                      placeholder="Sq Ft"
                      className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Description</label>
                  <textarea
                    rows={4}
                    placeholder="Enter property description"
                    className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Property Images</label>
                  <div className="border-2 border-dashed border-gold-400/20 rounded-lg p-8 text-center hover:border-gold-400/40 transition-colors cursor-pointer">
                    <Upload size={32} className="text-gold-400/50 mx-auto mb-3" />
                    <p className="text-secondary-400">Drag and drop images here, or click to browse</p>
                    <p className="text-secondary-500 text-sm mt-1">PNG, JPG up to 10MB</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary flex-1">
                    Add Property
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-950/90 flex items-center justify-center z-50 p-4"
            onClick={() => setShowDeleteModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-dark-900 border border-gold-400/20 rounded-xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                  <Trash2 size={32} className="text-red-400" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">Delete Property</h2>
                <p className="text-secondary-400 mb-6">
                  Are you sure you want to delete "{selectedProperty.title}"? This action cannot be undone.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="flex-1 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AdminProperties
