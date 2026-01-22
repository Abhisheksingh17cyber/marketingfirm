import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, Mail, Phone, Calendar, Clock, MessageSquare,
  CheckCircle, AlertCircle, Eye, Trash2, Reply, X,
  Building2, User, ChevronDown, Filter
} from 'lucide-react'

const AdminInquiries = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedInquiry, setSelectedInquiry] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [inquiryToDelete, setInquiryToDelete] = useState(null)

  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      property: 'Skyline Penthouse',
      subject: 'Property Viewing Request',
      message: 'I am interested in scheduling a viewing for the Skyline Penthouse. I am currently looking for a luxury property in Manhattan and this one caught my attention. Please let me know your available time slots.',
      status: 'new',
      date: '2024-12-15T10:30:00',
      priority: 'high'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 (555) 234-5678',
      property: 'The Grand Estate',
      subject: 'Pricing Information',
      message: 'Could you please provide more details about the pricing and any available financing options for The Grand Estate? I am a pre-approved buyer looking to make a purchase within the next 3 months.',
      status: 'contacted',
      date: '2024-12-14T14:15:00',
      priority: 'high'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'mbrown@email.com',
      phone: '+1 (555) 345-6789',
      property: 'Coastal Retreat',
      subject: 'General Inquiry',
      message: 'I would like to know more about the Coastal Retreat property. What are the HOA fees and what amenities are included? Also, is the property pet-friendly?',
      status: 'pending',
      date: '2024-12-13T09:45:00',
      priority: 'medium'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      email: 'emma.wilson@email.com',
      phone: '+1 (555) 456-7890',
      property: 'Mountain View Villa',
      subject: 'Construction Inquiry',
      message: 'I am interested in building a custom home similar to the Mountain View Villa. Can we schedule a consultation to discuss my requirements and your custom building services?',
      status: 'closed',
      date: '2024-12-12T16:20:00',
      priority: 'low'
    },
    {
      id: 5,
      name: 'David Lee',
      email: 'david.lee@email.com',
      phone: '+1 (555) 567-8901',
      property: 'Urban Loft',
      subject: 'Investment Opportunity',
      message: 'As a real estate investor, I am interested in learning more about investment opportunities with your company. Please send me information about any upcoming projects or current listings suitable for investment.',
      status: 'new',
      date: '2024-12-15T08:00:00',
      priority: 'medium'
    },
  ])

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = inquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         inquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         inquiry.property.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === 'all' || inquiry.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusStyle = (status) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500/20 text-blue-400'
      case 'contacted':
        return 'bg-gold-400/20 text-gold-400'
      case 'pending':
        return 'bg-orange-500/20 text-orange-400'
      case 'closed':
        return 'bg-green-500/20 text-green-400'
      default:
        return 'bg-secondary-500/20 text-secondary-400'
    }
  }

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400'
      case 'medium':
        return 'bg-gold-400/20 text-gold-400'
      case 'low':
        return 'bg-green-500/20 text-green-400'
      default:
        return 'bg-secondary-500/20 text-secondary-400'
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  const formatTime = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit'
    })
  }

  const updateStatus = (id, newStatus) => {
    setInquiries(inquiries.map(inquiry => 
      inquiry.id === id ? { ...inquiry, status: newStatus } : inquiry
    ))
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus })
    }
  }

  const handleDelete = (inquiry) => {
    setInquiryToDelete(inquiry)
    setShowDeleteModal(true)
  }

  const confirmDelete = () => {
    setInquiries(inquiries.filter(i => i.id !== inquiryToDelete.id))
    if (selectedInquiry && selectedInquiry.id === inquiryToDelete.id) {
      setSelectedInquiry(null)
    }
    setShowDeleteModal(false)
    setInquiryToDelete(null)
  }

  const stats = [
    { label: 'Total Inquiries', value: inquiries.length, icon: MessageSquare },
    { label: 'New', value: inquiries.filter(i => i.status === 'new').length, icon: AlertCircle },
    { label: 'Pending', value: inquiries.filter(i => i.status === 'pending').length, icon: Clock },
    { label: 'Closed', value: inquiries.filter(i => i.status === 'closed').length, icon: CheckCircle },
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">Inquiries</h1>
          <p className="text-secondary-400 mt-1">Manage customer inquiries and messages</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-dark-900/50 border border-gold-400/10 rounded-xl p-4 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-gold-400/10">
              <stat.icon size={20} className="text-gold-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-secondary-400 text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={20} />
          <input
            type="text"
            placeholder="Search inquiries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {['all', 'new', 'contacted', 'pending', 'closed'].map((status) => (
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

      {/* Main Content */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Inquiries List */}
        <div className="lg:col-span-2 space-y-3">
          {filteredInquiries.map((inquiry) => (
            <motion.div
              key={inquiry.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-dark-900/50 border rounded-xl p-4 cursor-pointer transition-all ${
                selectedInquiry?.id === inquiry.id
                  ? 'border-gold-400/40 bg-gold-400/5'
                  : 'border-gold-400/10 hover:border-gold-400/20'
              }`}
              onClick={() => setSelectedInquiry(inquiry)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-dark-950 font-semibold">
                    {inquiry.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{inquiry.name}</p>
                    <p className="text-secondary-400 text-sm">{inquiry.email}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(inquiry.status)}`}>
                  {inquiry.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gold-400 text-sm mb-2">
                <Building2 size={14} />
                {inquiry.property}
              </div>
              <p className="text-secondary-300 text-sm font-medium mb-1">{inquiry.subject}</p>
              <p className="text-secondary-400 text-sm line-clamp-2">{inquiry.message}</p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gold-400/10">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${getPriorityStyle(inquiry.priority)}`}>
                  {inquiry.priority}
                </span>
                <span className="text-secondary-500 text-xs flex items-center gap-1">
                  <Clock size={12} />
                  {formatDate(inquiry.date)}
                </span>
              </div>
            </motion.div>
          ))}

          {filteredInquiries.length === 0 && (
            <div className="bg-dark-900/50 border border-gold-400/10 rounded-xl p-8 text-center">
              <MessageSquare size={48} className="text-gold-400/30 mx-auto mb-4" />
              <p className="text-secondary-400">No inquiries found</p>
            </div>
          )}
        </div>

        {/* Inquiry Detail */}
        <div className="lg:col-span-3">
          {selectedInquiry ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-dark-900/50 border border-gold-400/10 rounded-xl overflow-hidden sticky top-24"
            >
              {/* Header */}
              <div className="p-6 border-b border-gold-400/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center text-dark-950 text-xl font-bold">
                      {selectedInquiry.name.charAt(0)}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white">{selectedInquiry.name}</h2>
                      <p className="text-secondary-400">{selectedInquiry.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDelete(selectedInquiry)}
                      className="p-2 text-secondary-400 hover:text-red-400 hover:bg-dark-800 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                    <button
                      onClick={() => setSelectedInquiry(null)}
                      className="p-2 text-secondary-400 hover:text-white hover:bg-dark-800 rounded-lg transition-colors lg:hidden"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-secondary-300">
                    <Phone size={16} className="text-gold-400" />
                    {selectedInquiry.phone}
                  </div>
                  <div className="flex items-center gap-2 text-secondary-300">
                    <Building2 size={16} className="text-gold-400" />
                    {selectedInquiry.property}
                  </div>
                  <div className="flex items-center gap-2 text-secondary-300">
                    <Calendar size={16} className="text-gold-400" />
                    {formatDate(selectedInquiry.date)} at {formatTime(selectedInquiry.date)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">{selectedInquiry.subject}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityStyle(selectedInquiry.priority)}`}>
                      {selectedInquiry.priority} priority
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(selectedInquiry.status)}`}>
                      {selectedInquiry.status}
                    </span>
                  </div>
                </div>

                <div className="bg-dark-800/50 rounded-lg p-4 mb-6">
                  <p className="text-secondary-300 leading-relaxed">{selectedInquiry.message}</p>
                </div>

                {/* Status Update */}
                <div className="mb-6">
                  <label className="block text-white text-sm font-medium mb-2">Update Status</label>
                  <div className="flex flex-wrap gap-2">
                    {['new', 'contacted', 'pending', 'closed'].map((status) => (
                      <button
                        key={status}
                        onClick={() => updateStatus(selectedInquiry.id, status)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedInquiry.status === status
                            ? 'bg-gold-400 text-dark-950'
                            : 'bg-dark-800 text-secondary-300 hover:bg-dark-700'
                        }`}
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Reply */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Quick Reply</label>
                  <textarea
                    rows={4}
                    placeholder="Type your reply..."
                    className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50 resize-none"
                  />
                  <div className="flex gap-3 mt-3">
                    <button className="btn-primary flex-1 inline-flex items-center justify-center gap-2">
                      <Reply size={18} />
                      Send Reply
                    </button>
                    <button className="btn-secondary inline-flex items-center justify-center gap-2">
                      <Mail size={18} />
                      Open in Email
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="bg-dark-900/50 border border-gold-400/10 rounded-xl p-12 text-center hidden lg:block">
              <MessageSquare size={64} className="text-gold-400/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Select an Inquiry</h3>
              <p className="text-secondary-400">Choose an inquiry from the list to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && inquiryToDelete && (
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
                <h2 className="text-xl font-semibold text-white mb-2">Delete Inquiry</h2>
                <p className="text-secondary-400 mb-6">
                  Are you sure you want to delete the inquiry from "{inquiryToDelete.name}"? This action cannot be undone.
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

export default AdminInquiries
