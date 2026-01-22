import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Plus, Search, MoreHorizontal, Edit, Trash2, Eye,
  FolderKanban, MapPin, Calendar, X, Upload
} from 'lucide-react'

const AdminProjects = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'The Residence at Central Park',
      category: 'Residential',
      location: 'New York, NY',
      status: 'completed',
      progress: 100,
      startDate: '2022-03-15',
      endDate: '2024-01-20',
      value: '$45M',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400'
    },
    {
      id: 2,
      title: 'Azure Corporate Tower',
      category: 'Commercial',
      location: 'San Francisco, CA',
      status: 'in-progress',
      progress: 75,
      startDate: '2023-06-01',
      endDate: '2025-12-01',
      value: '$120M',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400'
    },
    {
      id: 3,
      title: 'Seaside Luxury Villas',
      category: 'Residential',
      location: 'Miami, FL',
      status: 'in-progress',
      progress: 45,
      startDate: '2023-11-15',
      endDate: '2025-06-30',
      value: '$28M',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400'
    },
    {
      id: 4,
      title: 'Heritage Hotel Restoration',
      category: 'Renovation',
      location: 'Boston, MA',
      status: 'planning',
      progress: 15,
      startDate: '2024-03-01',
      endDate: '2026-03-01',
      value: '$65M',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400'
    },
  ])

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusStyle = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400'
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-400'
      case 'planning':
        return 'bg-orange-500/20 text-orange-400'
      case 'on-hold':
        return 'bg-red-500/20 text-red-400'
      default:
        return 'bg-secondary-500/20 text-secondary-400'
    }
  }

  const getProgressColor = (progress) => {
    if (progress >= 75) return 'bg-green-400'
    if (progress >= 50) return 'bg-blue-400'
    if (progress >= 25) return 'bg-gold-400'
    return 'bg-orange-400'
  }

  const handleDelete = (project) => {
    setSelectedProject(project)
    setShowDeleteModal(true)
  }

  const confirmDelete = () => {
    setProjects(projects.filter(p => p.id !== selectedProject.id))
    setShowDeleteModal(false)
    setSelectedProject(null)
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">Projects</h1>
          <p className="text-secondary-400 mt-1">Manage your construction projects</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="btn-primary text-sm inline-flex items-center gap-2"
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={20} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {['all', 'in-progress', 'completed', 'planning', 'on-hold'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                filterStatus === status
                  ? 'bg-gold-400 text-dark-950'
                  : 'bg-dark-900/50 text-secondary-300 border border-gold-400/20 hover:border-gold-400/40'
              }`}
            >
              {status === 'all' ? 'All' : status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-dark-900/50 border border-gold-400/10 rounded-xl overflow-hidden hover:border-gold-400/20 transition-colors group"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(project.status)}`}>
                  {project.status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </span>
              </div>
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-dark-900/80 backdrop-blur-sm rounded-lg text-white hover:bg-gold-400 hover:text-dark-950 transition-colors">
                  <Eye size={16} />
                </button>
                <button className="p-2 bg-dark-900/80 backdrop-blur-sm rounded-lg text-white hover:bg-gold-400 hover:text-dark-950 transition-colors">
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(project)}
                  className="p-2 bg-dark-900/80 backdrop-blur-sm rounded-lg text-white hover:bg-red-500 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 text-gold-400 text-sm mb-2">
                <FolderKanban size={14} />
                {project.category}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-secondary-400 text-sm flex items-center gap-1 mb-4">
                <MapPin size={14} />
                {project.location}
              </p>

              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-secondary-400">Progress</span>
                <span className="text-white font-medium">{project.progress}%</span>
              </div>
              <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${getProgressColor(project.progress)}`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gold-400/10">
                <div className="text-sm">
                  <p className="text-secondary-500">Project Value</p>
                  <p className="text-gold-400 font-semibold">{project.value}</p>
                </div>
                <div className="text-sm text-right">
                  <p className="text-secondary-500">End Date</p>
                  <p className="text-white">{new Date(project.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="bg-dark-900/50 border border-gold-400/10 rounded-xl p-12 text-center">
          <FolderKanban size={48} className="text-gold-400/30 mx-auto mb-4" />
          <p className="text-secondary-400">No projects found</p>
        </div>
      )}

      {/* Add Project Modal */}
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
                <h2 className="text-xl font-semibold text-white">Add New Project</h2>
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
                    <label className="block text-white text-sm font-medium mb-2">Project Title</label>
                    <input
                      type="text"
                      placeholder="Enter project title"
                      className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Category</label>
                    <select className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Renovation</option>
                      <option>Mixed-Use</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Enter project location"
                    className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Project Value</label>
                    <input
                      type="text"
                      placeholder="e.g., $45M"
                      className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Status</label>
                    <select className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50">
                      <option value="planning">Planning</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="on-hold">On Hold</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Start Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">End Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Progress (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    placeholder="0"
                    className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Description</label>
                  <textarea
                    rows={4}
                    placeholder="Enter project description"
                    className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Project Images</label>
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
                    Add Project
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && selectedProject && (
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
                <h2 className="text-xl font-semibold text-white mb-2">Delete Project</h2>
                <p className="text-secondary-400 mb-6">
                  Are you sure you want to delete "{selectedProject.title}"? This action cannot be undone.
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

export default AdminProjects
