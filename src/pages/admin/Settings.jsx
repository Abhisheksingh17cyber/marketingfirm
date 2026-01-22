import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User, Mail, Phone, MapPin, Globe, Bell, Lock, Palette,
  Save, Camera, Shield, CreditCard, Building2
} from 'lucide-react'
import toast from 'react-hot-toast'

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('profile')

  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@luxeestates.com',
    phone: '+1 (555) 000-0000',
    role: 'Administrator'
  })

  const [company, setCompany] = useState({
    name: 'Luxe Estates',
    email: 'info@luxeestates.com',
    phone: '+1 (555) 123-4567',
    address: '123 Luxury Lane, Manhattan, NY 10001',
    website: 'www.luxeestates.com'
  })

  const [notifications, setNotifications] = useState({
    emailNewInquiry: true,
    emailPropertyView: false,
    emailWeeklyReport: true,
    pushNewInquiry: true,
    pushPropertyView: true,
    pushWeeklyReport: false
  })

  const [security, setSecurity] = useState({
    twoFactor: false,
    sessionTimeout: '30'
  })

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'company', label: 'Company', icon: Building2 },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
  ]

  const handleSave = () => {
    toast.success('Settings saved successfully!')
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-display font-bold text-white">Settings</h1>
        <p className="text-secondary-400 mt-1">Manage your account and application settings</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1">
          <div className="bg-dark-900/50 border border-gold-400/10 rounded-xl p-4 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-gold-400/10 text-gold-400'
                    : 'text-secondary-400 hover:text-white hover:bg-dark-800'
                }`}
              >
                <tab.icon size={20} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-dark-900/50 border border-gold-400/10 rounded-xl"
          >
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Profile Settings</h2>
                
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-32 h-32 rounded-full bg-gradient-gold flex items-center justify-center text-dark-950 text-4xl font-bold">
                        {profile.name.charAt(0)}
                      </div>
                      <button className="absolute bottom-0 right-0 p-2 bg-gold-400 rounded-full text-dark-950 hover:bg-gold-300 transition-colors">
                        <Camera size={16} />
                      </button>
                    </div>
                    <p className="text-white font-medium mt-3">{profile.name}</p>
                    <p className="text-gold-400 text-sm">{profile.role}</p>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          value={profile.name}
                          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                          className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                          className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          value={profile.phone}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Role</label>
                        <input
                          type="text"
                          value={profile.role}
                          disabled
                          className="w-full px-4 py-3 bg-dark-800/50 border border-gold-400/10 rounded-lg text-secondary-400 cursor-not-allowed"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-6 border-t border-gold-400/10">
                  <button onClick={handleSave} className="btn-primary inline-flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Company Settings */}
            {activeTab === 'company' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Company Settings</h2>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        <Building2 size={14} className="inline mr-2" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={company.name}
                        onChange={(e) => setCompany({ ...company, name: e.target.value })}
                        className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        <Globe size={14} className="inline mr-2" />
                        Website
                      </label>
                      <input
                        type="text"
                        value={company.website}
                        onChange={(e) => setCompany({ ...company, website: e.target.value })}
                        className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        <Mail size={14} className="inline mr-2" />
                        Contact Email
                      </label>
                      <input
                        type="email"
                        value={company.email}
                        onChange={(e) => setCompany({ ...company, email: e.target.value })}
                        className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        <Phone size={14} className="inline mr-2" />
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        value={company.phone}
                        onChange={(e) => setCompany({ ...company, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      <MapPin size={14} className="inline mr-2" />
                      Business Address
                    </label>
                    <textarea
                      rows={3}
                      value={company.address}
                      onChange={(e) => setCompany({ ...company, address: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50 resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-6 mt-6 border-t border-gold-400/10">
                  <button onClick={handleSave} className="btn-primary inline-flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Notification Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                      <Mail size={18} className="text-gold-400" />
                      Email Notifications
                    </h3>
                    <div className="space-y-3">
                      {[
                        { key: 'emailNewInquiry', label: 'New inquiry received' },
                        { key: 'emailPropertyView', label: 'Property viewed' },
                        { key: 'emailWeeklyReport', label: 'Weekly summary report' },
                      ].map((item) => (
                        <label key={item.key} className="flex items-center justify-between p-4 bg-dark-800/50 rounded-lg cursor-pointer hover:bg-dark-800 transition-colors">
                          <span className="text-secondary-300">{item.label}</span>
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={notifications[item.key]}
                              onChange={(e) => setNotifications({ ...notifications, [item.key]: e.target.checked })}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-dark-700 rounded-full peer peer-checked:bg-gold-400 transition-colors" />
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                      <Bell size={18} className="text-gold-400" />
                      Push Notifications
                    </h3>
                    <div className="space-y-3">
                      {[
                        { key: 'pushNewInquiry', label: 'New inquiry received' },
                        { key: 'pushPropertyView', label: 'Property viewed' },
                        { key: 'pushWeeklyReport', label: 'Weekly summary report' },
                      ].map((item) => (
                        <label key={item.key} className="flex items-center justify-between p-4 bg-dark-800/50 rounded-lg cursor-pointer hover:bg-dark-800 transition-colors">
                          <span className="text-secondary-300">{item.label}</span>
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={notifications[item.key]}
                              onChange={(e) => setNotifications({ ...notifications, [item.key]: e.target.checked })}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-dark-700 rounded-full peer peer-checked:bg-gold-400 transition-colors" />
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-6 mt-6 border-t border-gold-400/10">
                  <button onClick={handleSave} className="btn-primary inline-flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Security Settings</h2>
                
                <div className="space-y-6">
                  {/* Password Change */}
                  <div className="bg-dark-800/50 rounded-lg p-6">
                    <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                      <Lock size={18} className="text-gold-400" />
                      Change Password
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-secondary-300 text-sm mb-2">Current Password</label>
                        <input
                          type="password"
                          placeholder="Enter current password"
                          className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-secondary-300 text-sm mb-2">New Password</label>
                          <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
                          />
                        </div>
                        <div>
                          <label className="block text-secondary-300 text-sm mb-2">Confirm Password</label>
                          <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50"
                          />
                        </div>
                      </div>
                      <button className="btn-secondary">
                        Update Password
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="bg-dark-800/50 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-medium flex items-center gap-2">
                          <Shield size={18} className="text-gold-400" />
                          Two-Factor Authentication
                        </h3>
                        <p className="text-secondary-400 text-sm mt-1">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={security.twoFactor}
                          onChange={(e) => setSecurity({ ...security, twoFactor: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-dark-700 rounded-full peer peer-checked:bg-gold-400 transition-colors cursor-pointer" />
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 cursor-pointer" />
                      </div>
                    </div>
                  </div>

                  {/* Session Timeout */}
                  <div className="bg-dark-800/50 rounded-lg p-6">
                    <h3 className="text-white font-medium mb-4">Session Timeout</h3>
                    <div className="flex items-center gap-4">
                      <select
                        value={security.sessionTimeout}
                        onChange={(e) => setSecurity({ ...security, sessionTimeout: e.target.value })}
                        className="px-4 py-3 bg-dark-800 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50"
                      >
                        <option value="15">15 minutes</option>
                        <option value="30">30 minutes</option>
                        <option value="60">1 hour</option>
                        <option value="120">2 hours</option>
                        <option value="0">Never</option>
                      </select>
                      <span className="text-secondary-400 text-sm">
                        Automatically log out after inactivity
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-6 mt-6 border-t border-gold-400/10">
                  <button onClick={handleSave} className="btn-primary inline-flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings
