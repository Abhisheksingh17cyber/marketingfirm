import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Phone, Mail, MapPin, Clock, Send, 
  ArrowRight, MessageSquare, Calendar, Building2
} from 'lucide-react'
import toast from 'react-hot-toast'
import SectionHeading from '../components/SectionHeading'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success('Thank you! We\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      service: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (234) 567-890', '+1 (234) 567-891'],
      action: 'tel:+1234567890'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@luxeestates.com', 'sales@luxeestates.com'],
      action: 'mailto:info@luxeestates.com'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Luxury Avenue', 'Beverly Hills, CA 90210'],
      action: '#map'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9AM - 6PM', 'Sat: 10AM - 4PM'],
      action: null
    },
  ]

  const services = [
    'Construction Services',
    'Home Finding',
    'Rental Properties',
    'Property Management',
    'Renovation',
    'Consultation',
    'Other'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920"
            alt="Contact Us"
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
            <span className="subheading">Get in Touch</span>
            <h1 className="heading-xl text-white mt-4 mb-6">
              Let's Start a <span className="text-gradient-gold">Conversation</span>
            </h1>
            <p className="text-xl text-secondary-300 leading-relaxed">
              Have a project in mind or need assistance? Our team is here to help 
              you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-dark-900/50 relative -mt-8 z-10">
        <div className="container-custom px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-6 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center group-hover:border-gold-400/40 transition-colors">
                  <info.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-secondary-400 text-sm">
                    {info.action ? (
                      <a href={info.action} className="hover:text-gold-400 transition-colors">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="subheading">Send a Message</span>
              <h2 className="heading-md text-white mt-4 mb-8">
                We'd Love to Hear From You
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-secondary-300 text-sm mb-2 block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-secondary-300 text-sm mb-2 block">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-secondary-300 text-sm mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50 transition-colors"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div>
                    <label className="text-secondary-300 text-sm mb-2 block">Service Interest *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400/50 transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-secondary-300 text-sm mb-2 block">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="text-secondary-300 text-sm mb-2 block">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin w-5 h-5 border-2 border-dark-950 border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Quick Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Schedule Consultation */}
              <div className="card-premium p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-7 h-7 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-lg mb-2">
                      Schedule a Consultation
                    </h3>
                    <p className="text-secondary-400 text-sm mb-4">
                      Book a free consultation with our experts to discuss your project requirements.
                    </p>
                    <button className="text-gold-400 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
                      Book Now <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="card-premium p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-7 h-7 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-lg mb-2">
                      Live Chat Support
                    </h3>
                    <p className="text-secondary-400 text-sm mb-4">
                      Chat with our team in real-time for quick answers to your questions.
                    </p>
                    <button className="text-gold-400 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
                      Start Chat <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Visit Office */}
              <div className="card-premium p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-7 h-7 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-lg mb-2">
                      Visit Our Office
                    </h3>
                    <p className="text-secondary-400 text-sm mb-4">
                      Come visit us at our Beverly Hills office for a personal meeting.
                    </p>
                    <button className="text-gold-400 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
                      Get Directions <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div id="map" className="card-premium overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209796322542!3d34.07362785727453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-dark-900/30">
        <div className="container-custom px-4 lg:px-8">
          <SectionHeading
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Find quick answers to common questions"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { q: 'What areas do you serve?', a: 'We primarily serve the greater Los Angeles area, including Beverly Hills, Malibu, and surrounding regions.' },
              { q: 'How long does construction typically take?', a: 'Project timelines vary based on scope, but most custom homes take 12-18 months to complete.' },
              { q: 'Do you offer financing options?', a: 'We partner with trusted lenders to provide competitive financing solutions for our clients.' },
              { q: 'Can I customize property features?', a: 'Absolutely! We offer full customization options for both new construction and renovation projects.' },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-6"
              >
                <h4 className="font-heading font-semibold text-white mb-2">{faq.q}</h4>
                <p className="text-secondary-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
