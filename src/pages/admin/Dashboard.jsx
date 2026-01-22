import { motion } from 'framer-motion'
import {
  Building2, Users, DollarSign, TrendingUp, Eye, MessageSquare,
  ArrowUpRight, ArrowDownRight, MoreHorizontal, Calendar,
  CheckCircle, Clock, AlertCircle
} from 'lucide-react'
import CountUp from 'react-countup'

const Dashboard = () => {
  const stats = [
    {
      label: 'Total Properties',
      value: 156,
      change: '+12.5%',
      positive: true,
      icon: Building2,
      color: 'from-gold-400 to-gold-600'
    },
    {
      label: 'Total Inquiries',
      value: 342,
      change: '+8.2%',
      positive: true,
      icon: MessageSquare,
      color: 'from-blue-400 to-blue-600'
    },
    {
      label: 'Revenue (This Month)',
      value: 2450000,
      prefix: '$',
      change: '+15.3%',
      positive: true,
      icon: DollarSign,
      color: 'from-green-400 to-green-600'
    },
    {
      label: 'Active Visitors',
      value: 1247,
      change: '-3.1%',
      positive: false,
      icon: Users,
      color: 'from-purple-400 to-purple-600'
    },
  ]

  const recentInquiries = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@email.com',
      property: 'Skyline Penthouse',
      status: 'new',
      time: '5 min ago'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@email.com',
      property: 'The Grand Estate',
      status: 'contacted',
      time: '2 hours ago'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael@email.com',
      property: 'Coastal Retreat',
      status: 'pending',
      time: '5 hours ago'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      email: 'emma@email.com',
      property: 'Mountain View Villa',
      status: 'closed',
      time: '1 day ago'
    },
  ]

  const topProperties = [
    { name: 'Skyline Penthouse', views: 1250, inquiries: 45 },
    { name: 'The Grand Estate', views: 980, inquiries: 32 },
    { name: 'Coastal Retreat', views: 856, inquiries: 28 },
    { name: 'Mountain View Villa', views: 720, inquiries: 22 },
    { name: 'Urban Loft', views: 650, inquiries: 18 },
  ]

  const recentActivities = [
    { type: 'property', message: 'New property "The Heights" was added', time: '10 min ago' },
    { type: 'inquiry', message: 'New inquiry received for "Skyline Penthouse"', time: '25 min ago' },
    { type: 'update', message: 'Property "Coastal Retreat" price updated', time: '1 hour ago' },
    { type: 'inquiry', message: 'Inquiry #234 was marked as closed', time: '2 hours ago' },
    { type: 'property', message: 'Property "Urban Loft" status changed to sold', time: '3 hours ago' },
  ]

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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'new':
        return AlertCircle
      case 'contacted':
        return MessageSquare
      case 'pending':
        return Clock
      case 'closed':
        return CheckCircle
      default:
        return AlertCircle
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">Dashboard</h1>
          <p className="text-secondary-400 mt-1">Welcome back! Here's what's happening.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary text-sm">
            <Calendar size={18} className="mr-2" />
            Last 30 Days
          </button>
          <button className="btn-primary text-sm">
            Download Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-dark-900/50 border border-gold-400/10 rounded-xl p-6 hover:border-gold-400/20 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                <stat.icon size={24} className="text-dark-950" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                {stat.positive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {stat.change}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white">
              {stat.prefix}
              <CountUp end={stat.value} separator="," duration={2} />
            </h3>
            <p className="text-secondary-400 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="lg:col-span-2 bg-dark-900/50 border border-gold-400/10 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Revenue Overview</h2>
            <button className="text-secondary-400 hover:text-white">
              <MoreHorizontal size={20} />
            </button>
          </div>
          <div className="h-64 flex items-center justify-center bg-dark-800/50 rounded-lg">
            <div className="text-center">
              <TrendingUp size={48} className="text-gold-400/50 mx-auto mb-3" />
              <p className="text-secondary-400">Revenue chart visualization</p>
              <p className="text-secondary-500 text-sm">Integrate with your preferred chart library</p>
            </div>
          </div>
        </motion.div>

        {/* Top Properties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-dark-900/50 border border-gold-400/10 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Top Properties</h2>
            <button className="text-secondary-400 hover:text-white">
              <MoreHorizontal size={20} />
            </button>
          </div>
          <div className="space-y-4">
            {topProperties.map((property, index) => (
              <div key={property.name} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 text-sm font-medium">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm truncate">{property.name}</p>
                  <div className="flex items-center gap-3 text-xs text-secondary-400">
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {property.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare size={12} />
                      {property.inquiries}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tables Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Inquiries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="bg-dark-900/50 border border-gold-400/10 rounded-xl overflow-hidden"
        >
          <div className="flex items-center justify-between p-6 border-b border-gold-400/10">
            <h2 className="text-lg font-semibold text-white">Recent Inquiries</h2>
            <button className="text-gold-400 text-sm font-medium hover:text-gold-300">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gold-400/10">
                  <th className="text-left px-6 py-3 text-secondary-400 text-sm font-medium">Name</th>
                  <th className="text-left px-6 py-3 text-secondary-400 text-sm font-medium">Property</th>
                  <th className="text-left px-6 py-3 text-secondary-400 text-sm font-medium">Status</th>
                  <th className="text-left px-6 py-3 text-secondary-400 text-sm font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentInquiries.map((inquiry) => {
                  const StatusIcon = getStatusIcon(inquiry.status)
                  return (
                    <tr key={inquiry.id} className="border-b border-gold-400/10 hover:bg-dark-800/50">
                      <td className="px-6 py-4">
                        <p className="text-white text-sm">{inquiry.name}</p>
                        <p className="text-secondary-500 text-xs">{inquiry.email}</p>
                      </td>
                      <td className="px-6 py-4 text-secondary-300 text-sm">{inquiry.property}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(inquiry.status)}`}>
                          <StatusIcon size={12} />
                          {inquiry.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-secondary-400 text-sm">{inquiry.time}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="bg-dark-900/50 border border-gold-400/10 rounded-xl overflow-hidden"
        >
          <div className="flex items-center justify-between p-6 border-b border-gold-400/10">
            <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
            <button className="text-gold-400 text-sm font-medium hover:text-gold-300">
              View All
            </button>
          </div>
          <div className="p-6 space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`mt-1 w-2 h-2 rounded-full ${
                  activity.type === 'property' ? 'bg-gold-400' :
                  activity.type === 'inquiry' ? 'bg-blue-400' : 'bg-green-400'
                }`} />
                <div className="flex-1">
                  <p className="text-white text-sm">{activity.message}</p>
                  <p className="text-secondary-500 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
