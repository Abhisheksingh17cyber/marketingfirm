import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Building2, Home, Key, Wrench, HardHat, Paintbrush,
  Shield, Clock, Users, CheckCircle2, ArrowRight,
  Ruler, Building, HomeIcon, ClipboardCheck
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const Services = () => {
  const mainServices = [
    {
      id: 'construction',
      icon: Building2,
      title: 'Construction Services',
      subtitle: 'Building Excellence',
      description: 'From ground-breaking to the final finish, we deliver exceptional construction services for residential and commercial properties.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      features: [
        'Custom Home Construction',
        'Commercial Building Development',
        'Renovation & Remodeling',
        'Sustainable Building Practices',
        'Project Management',
        'Quality Assurance'
      ],
      process: [
        { step: 1, title: 'Consultation', desc: 'Understanding your vision and requirements' },
        { step: 2, title: 'Design', desc: 'Creating detailed plans and 3D renders' },
        { step: 3, title: 'Planning', desc: 'Permits, materials, and timeline' },
        { step: 4, title: 'Construction', desc: 'Expert execution with quality control' },
        { step: 5, title: 'Completion', desc: 'Final walkthrough and handover' },
      ]
    },
    {
      id: 'home-finding',
      icon: Home,
      title: 'Home Finding',
      subtitle: 'Discover Your Dream Home',
      description: 'Our expert team helps you find the perfect property that matches your lifestyle, preferences, and budget.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      features: [
        'Personalized Property Search',
        'Market Analysis',
        'Neighborhood Insights',
        'Price Negotiation',
        'Legal Documentation Support',
        'Post-Purchase Assistance'
      ],
      process: [
        { step: 1, title: 'Consultation', desc: 'Understanding your needs and preferences' },
        { step: 2, title: 'Search', desc: 'Curating properties that match your criteria' },
        { step: 3, title: 'Tours', desc: 'Guided visits to selected properties' },
        { step: 4, title: 'Negotiation', desc: 'Securing the best deal for you' },
        { step: 5, title: 'Closing', desc: 'Smooth transaction and key handover' },
      ]
    },
    {
      id: 'rentals',
      icon: Key,
      title: 'Rental Properties',
      subtitle: 'Premium Rentals',
      description: 'Find the perfect rental property from our curated selection of luxury apartments, houses, and commercial spaces.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      features: [
        'Luxury Apartments',
        'Family Homes',
        'Commercial Spaces',
        'Short-term Rentals',
        'Tenant Screening',
        'Property Management'
      ],
      process: [
        { step: 1, title: 'Requirements', desc: 'Tell us what you\'re looking for' },
        { step: 2, title: 'Matching', desc: 'We find properties that fit your needs' },
        { step: 3, title: 'Viewing', desc: 'Tour your favorite options' },
        { step: 4, title: 'Application', desc: 'Quick and easy application process' },
        { step: 5, title: 'Move-In', desc: 'Seamless transition to your new home' },
      ]
    },
  ]

  const additionalServices = [
    {
      icon: Wrench,
      title: 'Renovation',
      description: 'Transform your existing property with our expert renovation services.'
    },
    {
      icon: HardHat,
      title: 'Project Management',
      description: 'End-to-end project oversight ensuring timely delivery.'
    },
    {
      icon: Paintbrush,
      title: 'Interior Design',
      description: 'Professional interior design services for stunning spaces.'
    },
    {
      icon: Ruler,
      title: 'Architecture',
      description: 'Innovative architectural designs that stand out.'
    },
    {
      icon: Building,
      title: 'Property Management',
      description: 'Comprehensive management services for property owners.'
    },
    {
      icon: ClipboardCheck,
      title: 'Consulting',
      description: 'Expert advice on real estate investments and development.'
    },
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed professionals with comprehensive insurance coverage.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time and deliver projects on schedule.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to excellence.'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920"
            alt="Our Services"
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
            <span className="subheading">Our Services</span>
            <h1 className="heading-xl text-white mt-4 mb-6">
              Comprehensive <span className="text-gradient-gold">Real Estate Solutions</span>
            </h1>
            <p className="text-xl text-secondary-300 leading-relaxed">
              From construction to property finding and rentals, we offer end-to-end 
              services designed to meet all your real estate needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      {mainServices.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-dark-950' : 'bg-dark-900/30'}`}
        >
          <div className="container-custom px-4 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-gold-400 text-sm font-medium tracking-wide uppercase">{service.subtitle}</span>
                    <h2 className="font-display text-3xl font-bold text-white">{service.title}</h2>
                  </div>
                </div>

                <p className="text-secondary-300 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0" />
                      <span className="text-secondary-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact" 
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              {/* Image & Process */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 !== 0 ? 'lg:order-1' : ''}
              >
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>

                  {/* Process Steps */}
                  <div className="mt-8 card-premium p-6">
                    <h4 className="font-heading font-semibold text-white mb-4">Our Process</h4>
                    <div className="space-y-4">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-gold-400 font-semibold text-sm">{step.step}</span>
                          </div>
                          <div>
                            <h5 className="font-medium text-white text-sm">{step.title}</h5>
                            <p className="text-secondary-400 text-xs">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom px-4 lg:px-8">
          <SectionHeading
            subtitle="More Services"
            title="Additional Offerings"
            description="Complete solutions for all your property needs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-premium p-6 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-4 group-hover:border-gold-400/40 transition-colors">
                  <service.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-400 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark-900/30">
        <div className="container-custom px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="subheading">Why Choose Us</span>
              <h2 className="heading-lg text-white mt-4 mb-6">
                Excellence in Every <span className="text-gradient-gold">Detail</span>
              </h2>
              <p className="text-secondary-300 leading-relaxed mb-8">
                When you work with Luxe Estates, you're partnering with a team that values 
                quality, transparency, and customer satisfaction above all else.
              </p>

              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-secondary-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
                alt="Why Choose Us"
                className="rounded-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold-400/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-950/90" />
        </div>

        <div className="container-custom px-4 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="subheading">Ready to Start?</span>
            <h2 className="heading-lg text-white mt-4 mb-6">
              Let's Build Your <span className="text-gradient-gold">Dream Together</span>
            </h2>
            <p className="body-text max-w-2xl mx-auto mb-10">
              Contact us today to discuss your project and discover how Luxe Estates 
              can bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link to="/properties" className="btn-secondary">
                Browse Properties
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services
