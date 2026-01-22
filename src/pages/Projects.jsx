import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  MapPin, Calendar, ArrowRight, ExternalLink, X
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'The Azure Tower',
      category: 'commercial',
      location: 'Downtown Los Angeles, CA',
      year: '2024',
      description: 'A 45-story mixed-use tower featuring premium office spaces and luxury condominiums with panoramic city views.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
        'https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'
      ],
      features: ['45 Stories', 'LEED Certified', '500,000 sq ft', 'Rooftop Amenities'],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Oceanview Residences',
      category: 'residential',
      location: 'Malibu, CA',
      year: '2023',
      description: 'An exclusive collection of 12 beachfront villas with private pools and direct ocean access.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
      ],
      features: ['12 Villas', 'Private Pools', 'Ocean Access', 'Smart Home'],
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Sterling Heights',
      category: 'residential',
      location: 'Beverly Hills, CA',
      year: '2023',
      description: 'A gated community of 8 ultra-luxury estates, each exceeding 15,000 sq ft with world-class amenities.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'
      ],
      features: ['8 Estates', 'Gated Community', '15,000+ sq ft', 'Home Theater'],
      status: 'Completed'
    },
    {
      id: 4,
      title: 'The Vertex Center',
      category: 'commercial',
      location: 'Santa Monica, CA',
      year: '2024',
      description: 'A state-of-the-art tech campus featuring sustainable design and cutting-edge workspace solutions.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800'
      ],
      features: ['Tech Campus', 'Sustainable', '200,000 sq ft', 'EV Charging'],
      status: 'In Progress'
    },
    {
      id: 5,
      title: 'Hillside Sanctuary',
      category: 'residential',
      location: 'Hollywood Hills, CA',
      year: '2022',
      description: 'Custom-built modern mansion featuring floor-to-ceiling glass walls and infinity edge pool.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800'
      ],
      features: ['Custom Build', 'Infinity Pool', '12,000 sq ft', 'City Views'],
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Marina Bay Complex',
      category: 'mixed',
      location: 'Marina del Rey, CA',
      year: '2024',
      description: 'A waterfront mixed-use development with luxury condos, retail spaces, and a yacht club.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
      ],
      features: ['Waterfront', 'Yacht Club', '300 Units', 'Retail Space'],
      status: 'In Progress'
    },
  ]

  const categories = ['all', 'residential', 'commercial', 'mixed']

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  )

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
            alt="Our Projects"
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
              Featured <span className="text-gradient-gold">Projects</span>
            </h1>
            <p className="text-xl text-secondary-300 leading-relaxed">
              Explore our portfolio of award-winning construction projects, from 
              luxury residences to iconic commercial developments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-dark-900/50 sticky top-20 z-30 backdrop-blur-xl border-b border-gold-400/10">
        <div className="container-custom px-4 lg:px-8">
          <div className="flex justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-lg font-heading font-medium text-sm tracking-wide uppercase transition-all ${
                  filter === category
                    ? 'bg-gradient-gold text-dark-950'
                    : 'bg-dark-900/50 text-secondary-300 border border-gold-400/20 hover:border-gold-400/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom px-4 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="card-premium group cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-gold-400/20 text-gold-400 border border-gold-400/30'
                    }`}>
                      {project.status}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-dark-950/80 text-gold-400 text-xs font-medium rounded-full uppercase">
                      {project.category}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-dark-950/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-medium flex items-center gap-2">
                        View Project <ExternalLink size={16} />
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-secondary-400 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-gold-400" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} className="text-gold-400" />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-white group-hover:text-gold-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-secondary-400 text-sm mt-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 bg-gold-400/10 border border-gold-400/20 rounded text-xs text-gold-400"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-900 border border-gold-400/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark-950/80 flex items-center justify-center text-white hover:text-gold-400 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Project Images */}
              <div className="relative h-64 md:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedProject.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-gold-400/20 text-gold-400 border border-gold-400/30'
                  }`}>
                    {selectedProject.status}
                  </span>
                  <span className="px-3 py-1 bg-dark-950/50 text-gold-400 text-xs font-medium rounded-full uppercase border border-gold-400/20">
                    {selectedProject.category}
                  </span>
                </div>

                <h2 className="font-display text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>

                <div className="flex items-center gap-6 text-secondary-400 text-sm mb-6">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-gold-400" />
                    {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-gold-400" />
                    {selectedProject.year}
                  </span>
                </div>

                <p className="text-secondary-300 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {/* Features */}
                <h4 className="font-heading font-semibold text-white mb-4">Project Features</h4>
                <div className="flex flex-wrap gap-3 mb-8">
                  {selectedProject.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-gold-400/10 border border-gold-400/20 rounded-lg text-sm text-gold-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <Link 
                    to="/contact" 
                    className="btn-primary flex items-center gap-2"
                    onClick={() => setSelectedProject(null)}
                  >
                    Inquire About This Project
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Have a Project in Mind?
            </h2>
            <p className="body-text max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your vision to life with our expertise 
              in construction and development.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Projects
