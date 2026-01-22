import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

// Layouts
import MainLayout from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Properties from './pages/Properties'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard'
import AdminProperties from './pages/admin/Properties'
import AdminProjects from './pages/admin/Projects'
import AdminInquiries from './pages/admin/Inquiries'
import AdminSettings from './pages/admin/Settings'

// Components
import PageTransition from './components/PageTransition'
import Preloader from './components/Preloader'

function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const [showPageTransition, setShowPageTransition] = useState(false)

  useEffect(() => {
    // Initial page load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Page transition on route change
    if (!isLoading) {
      setShowPageTransition(true)
      const timer = setTimeout(() => {
        setShowPageTransition(false)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [location.pathname])

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#171717',
            color: '#fff',
            border: '1px solid rgba(196, 154, 71, 0.3)',
          },
          success: {
            iconTheme: {
              primary: '#c49a47',
              secondary: '#0a0a0a',
            },
          },
        }}
      />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showPageTransition && <PageTransition key="page-transition" />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="properties" element={<Properties />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="blog" element={<Blog />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="properties" element={<AdminProperties />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="inquiries" element={<AdminInquiries />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
