import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, Quote, Play, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import SectionHeading from '../components/SectionHeading'

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null)

  const testimonials = [
    {
      id: 1,
      name: 'Michael Reynolds',
      role: 'CEO, Tech Innovations',
      content: 'Luxe Estates exceeded all our expectations. Their attention to detail in constructing our corporate headquarters was impeccable. The team was professional, communicative, and delivered the project ahead of schedule.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      project: 'Commercial Construction'
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      content: 'Finding our dream home seemed impossible until we worked with Luxe Estates. They understood exactly what we wanted and found us a property that exceeded our expectations. The entire process was seamless.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      project: 'Home Finding'
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Real Estate Investor',
      content: 'The professionalism and market knowledge of the Luxe Estates team is unmatched. They\'ve helped me acquire and develop multiple properties, each transaction smoother than the last. Highly recommend their services.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      project: 'Property Investment'
    },
    {
      id: 4,
      name: 'Emily Watson',
      role: 'Interior Designer',
      content: 'Working with Luxe Estates on our clients\' homes has been a pleasure. Their construction quality is top-notch, and they\'re always open to design innovations. A true partner in creating beautiful spaces.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150',
      project: 'Custom Home Build'
    },
    {
      id: 5,
      name: 'Robert Thompson',
      role: 'Business Owner',
      content: 'We relocated our family across the country and Luxe Estates made it effortless. They found us a perfect rental property while we searched for our permanent home. Their dedication to client satisfaction is remarkable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      project: 'Rental Services'
    },
    {
      id: 6,
      name: 'Jennifer Adams',
      role: 'Architect',
      content: 'As an architect, I\'m particular about construction quality. Luxe Estates\' attention to detail and commitment to architectural integrity is refreshing. They bring designs to life exactly as envisioned.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
      project: 'Residential Construction'
    },
  ]

  const videoTestimonials = [
    {
      id: 1,
      name: 'The Johnson Family',
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
      duration: '2:45',
      title: 'Our Dream Home Journey'
    },
    {
      id: 2,
      name: 'Sunrise Corporation',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
      duration: '3:20',
      title: 'Building Our Corporate HQ'
    },
    {
      id: 3,
      name: 'The Martinez Family',
      thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
      duration: '4:10',
      title: 'Finding Our Forever Home'
    },
  ]

  const stats = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '1200+', label: 'Happy Clients' },
    { number: '4.9', label: 'Average Rating' },
    { number: '500+', label: 'Projects Completed' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Testimonials"
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
            <span className="subheading">Testimonials</span>
            <h1 className="heading-xl text-white mt-4 mb-6">
              What Our <span className="text-gradient-gold">Clients Say</span>
            </h1>
            <p className="text-xl text-secondary-300 leading-relaxed">
              Don't just take our word for it — hear from the families and businesses 
              who have trusted us with their most important investments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-900/50">
        <div className="container-custom px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.number}
                </div>
                <p className="text-secondary-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom px-4 lg:px-8">
          <SectionHeading
            subtitle="Featured Reviews"
            title="Client Experiences"
            description="Real stories from real clients who trusted us with their dreams"
          />

          <div className="mt-16 relative">
            <Swiper
              modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              className="pb-16"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="card-premium p-8 mx-4 my-4"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote size={60} className="text-gold-400" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          size={18}
                          className={index < testimonial.rating ? 'text-gold-400 fill-gold-400' : 'text-secondary-600'}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-secondary-300 leading-relaxed mb-6 min-h-[120px]">
                      "{testimonial.content}"
                    </p>

                    {/* Project Type */}
                    <div className="mb-6">
                      <span className="px-3 py-1 bg-gold-400/10 border border-gold-400/20 rounded-full text-gold-400 text-xs">
                        {testimonial.project}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-gold-400/10">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400/30">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-gold-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-dark-900/80 border border-gold-400/20 flex items-center justify-center text-gold-400 hover:bg-gold-400/10 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-dark-900/80 border border-gold-400/20 flex items-center justify-center text-gold-400 hover:bg-gold-400/10 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding bg-dark-900/30">
        <div className="container-custom px-4 lg:px-8">
          <SectionHeading
            subtitle="Video Stories"
            title="Watch Their Stories"
            description="See and hear directly from our clients about their experience"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-premium group cursor-pointer overflow-hidden"
                onClick={() => setActiveVideo(video)}
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark-950/40 group-hover:bg-dark-950/20 transition-colors" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-gold-400 flex items-center justify-center shadow-lg shadow-gold-400/30"
                    >
                      <Play size={24} className="text-dark-950 ml-1" fill="currentColor" />
                    </motion.div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 px-2 py-1 bg-dark-950/80 rounded text-white text-xs">
                    {video.duration}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-heading font-semibold text-white group-hover:text-gold-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-secondary-400 text-sm mt-1">{video.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/95 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-video bg-dark-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-secondary-400">Video Player Placeholder</p>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-950/80 flex items-center justify-center text-white hover:text-gold-400 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* All Testimonials Grid */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom px-4 lg:px-8">
          <SectionHeading
            subtitle="All Reviews"
            title="More Success Stories"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="card-premium p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < testimonial.rating ? 'text-gold-400 fill-gold-400' : 'text-secondary-600'}
                    />
                  ))}
                </div>
                <p className="text-secondary-300 text-sm leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gold-400/10">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gold-400/30">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm">{testimonial.name}</h4>
                    <p className="text-gold-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Start Your Story?
            </h2>
            <p className="body-text max-w-2xl mx-auto mb-8">
              Join our growing family of satisfied clients. Let us help you achieve 
              your real estate dreams.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Get Started Today
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
