import { useState } from 'react'
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Building2, FolderKanban, MessageSquare,
  Settings, LogOut, Menu, X, Bell, Search, User,
  ChevronDown, Home, Sun, Moon
} from 'lucide-react'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const navigate = useNavigate()

  const navItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
    { path: '/admin/properties', icon: Building2, label: 'Properties' },
    { path: '/admin/projects', icon: FolderKanban, label: 'Projects' },
    { path: '/admin/inquiries', icon: MessageSquare, label: 'Inquiries' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' },
  ]

  const notifications = [
    { id: 1, message: 'New inquiry from John Doe', time: '5 min ago', unread: true },
    { id: 2, message: 'Property "Skyline Penthouse" was viewed 50 times', time: '1 hour ago', unread: true },
    { id: 3, message: 'Monthly report is ready', time: '3 hours ago', unread: false },
  ]

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-950/90 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-dark-900 border-r border-gold-400/10 z-50 transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-20'
        } ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-4 border-b border-gold-400/10">
          <Link to="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
              <span className="text-dark-950 font-bold text-xl">L</span>
            </div>
            {sidebarOpen && (
              <span className="font-display text-xl font-bold text-white">
                Luxe<span className="text-gold-400">Admin</span>
              </span>
            )}
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden text-secondary-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gold-400/10 text-gold-400'
                    : 'text-secondary-400 hover:text-white hover:bg-dark-800'
                }`
              }
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gold-400/10">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-secondary-400 hover:text-white hover:bg-dark-800 rounded-lg transition-all"
          >
            <Home size={20} />
            {sidebarOpen && <span className="font-medium">Back to Site</span>}
          </Link>
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-dark-800 rounded-lg transition-all"
          >
            <LogOut size={20} />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
        }`}
      >
        {/* Top Bar */}
        <header className="h-20 bg-dark-900/80 backdrop-blur-xl border-b border-gold-400/10 sticky top-0 z-30">
          <div className="h-full px-4 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden text-secondary-400 hover:text-white"
              >
                <Menu size={24} />
              </button>

              {/* Sidebar Toggle */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hidden lg:block text-secondary-400 hover:text-white"
              >
                <Menu size={24} />
              </button>

              {/* Search */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-dark-800 rounded-lg">
                <Search size={18} className="text-secondary-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-white placeholder:text-secondary-500 w-48"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="relative p-2 text-secondary-400 hover:text-white transition-colors"
                >
                  <Bell size={22} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-gold-400 rounded-full" />
                </button>

                <AnimatePresence>
                  {notificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-full mt-2 w-80 bg-dark-900 border border-gold-400/20 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-gold-400/10">
                        <h3 className="font-semibold text-white">Notifications</h3>
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`px-4 py-3 border-b border-gold-400/10 hover:bg-dark-800 transition-colors ${
                              notification.unread ? 'bg-gold-400/5' : ''
                            }`}
                          >
                            <p className="text-white text-sm">{notification.message}</p>
                            <p className="text-secondary-500 text-xs mt-1">{notification.time}</p>
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-3 text-center">
                        <button className="text-gold-400 text-sm font-medium hover:text-gold-300">
                          View All Notifications
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-3 p-2 hover:bg-dark-800 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                    <User size={20} className="text-dark-950" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-white text-sm font-medium">Admin User</p>
                    <p className="text-secondary-500 text-xs">admin@luxeestates.com</p>
                  </div>
                  <ChevronDown size={16} className="text-secondary-400 hidden md:block" />
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-dark-900 border border-gold-400/20 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <Link
                        to="/admin/settings"
                        className="flex items-center gap-3 px-4 py-3 text-secondary-300 hover:text-white hover:bg-dark-800 transition-colors"
                      >
                        <Settings size={18} />
                        Settings
                      </Link>
                      <button
                        onClick={() => navigate('/')}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-dark-800 transition-colors"
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
