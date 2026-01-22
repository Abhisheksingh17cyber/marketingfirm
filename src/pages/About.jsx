import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { 
  Award, Users, Target, Heart, 
  CheckCircle2, ArrowRight, Building2,
  Shield, Clock, Trophy
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const About = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { icon: Building2, number: 500, suffix: '+', label: 'Projects Completed' },
    { icon: Users, number: 1200, suffix: '+', label: 'Happy Clients' },
    { icon: Award, number: 50, suffix: '+', label: 'Awards Won' },
    { icon: Clock, number: 25, suffix: '+', label: 'Years Experience' },
  ]

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and transparency in all our dealings.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering unmatched quality.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Our clients are at the heart of everything we do. Your satisfaction is our priority.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and modern design principles.'
    },
  ]

  const team = [
    {
      name: 'Alexander Sterling',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      bio: '30+ years of real estate and construction expertise'
    },
    {
      name: 'Victoria Chen',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      bio: 'Expert in luxury property development'
    },
    {
      name: 'Marcus Williams',
      role: 'Head of Construction',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Award-winning architect and builder'
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Director of Sales',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      bio: 'Top-performing real estate professional'
    },
  ]

  const milestones = [
    { year: '1999', title: 'Company Founded', description: 'Started with a vision to transform real estate' },
    { year: '2005', title: 'First Major Project', description: 'Completed our first $50M development' },
    { year: '2012', title: 'National Expansion', description: 'Expanded operations to 10 states' },
    { year: '2018', title: 'Luxury Division Launch', description: 'Introduced premium services for elite clients' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as top real estate firm in the region' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
            alt="About Us"
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
            <span className="subheading">About Luxe Estates</span>
            <h1 className="heading-xl text-white mt-4 mb-6">
              Building Legacy, <span className="text-gradient-gold">Creating Dreams</span>
            </h1>
            <p className="text-xl text-secondary-300 leading-relaxed">
              For over 25 years, Luxe Estates has been at the forefront of premium real estate 
              and construction, transforming visions into architectural masterpieces and helping 
              families find their perfect homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-dark-900/50">
        <div className="container-custom px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 card-premium"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-gold-400" />
                </div>
                <div className="font-display text-4xl font-bold text-gradient-gold mb-2">
                  {statsInView && (
                    <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-secondary-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="subheading">Our Story</span>
              <h2 className="heading-lg text-white mt-4 mb-6">
                A Legacy of <span className="text-gradient-gold">Excellence</span>
              </h2>
              <div className="space-y-4 text-secondary-300 leading-relaxed">
                <p>
                  Founded in 1999 by Alexander Sterling, Luxe Estates began as a small construction 
                  firm with a simple mission: to build homes that stand the test of time while 
                  exceeding client expectations.
                </p>
                <p>
                  Over the years, we've grown into a full-service real estate and construction 
                  company, handling everything from custom home construction to luxury property 
                  sales and premium rentals.
                </p>
                <p>
                  Today, with over 500 completed projects and 1,200 satisfied clients, we continue 
                  to set the standard for excellence in the industry. Our commitment to quality, 
                  innovation, and client satisfaction remains unwavering.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                {[
                  'Licensed & Insured',
                  '24/7 Client Support',
                  'Sustainable Building',
                  'Award-Winning Team'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold-400" />
                    <span className="text-secondary-300">{item}</span>
                  </div>
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
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
                  alt="Luxe Estates Story"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-dark-900 p-6 rounded-2xl border border-gold-400/20">
                <div className="text-center">
                  <span className="font-display text-4xl font-bold text-gradient-gold">25+</span>
                  <p className="text-secondary-300 text-sm mt-1">Years of Excellence</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-gold-400/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-dark-900/30">
        <div className="container-custom px-4 lg:px-8">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
            description="The principles that guide every decision and action at Luxe Estates"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-premium p-6 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center group-hover:border-gold-400/40 transition-colors">
                  <value.icon className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom px-4 lg:px-8">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones"
            description="Key moments that shaped Luxe Estates into the industry leader it is today"
          />

          <div className="relative mt-16">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-400/50 via-gold-400/20 to-transparent hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-gold-400 font-display text-2xl font-bold">{milestone.year}</span>
                    <h3 className="font-display text-xl font-semibold text-white mt-2">{milestone.title}</h3>
                    <p className="text-secondary-400 mt-2">{milestone.description}</p>
                  </div>

                  {/* Center Dot */}
                  <div className="w-4 h-4 rounded-full bg-gold-400 border-4 border-dark-950 flex-shrink-0 hidden md:block" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} id="team" className="section-padding bg-dark-900/50">
        <div className="container-custom px-4 lg:px-8">
          <SectionHeading
            subtitle="Leadership"
            title="Meet Our Team"
            description="The visionaries behind Luxe Estates' success"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-premium group overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-white group-hover:text-gold-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gold-400 text-sm font-medium mt-1">{member.role}</p>
                  <p className="text-secondary-400 text-sm mt-3">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom px-4 lg:px-8">
          <SectionHeading
            subtitle="Recognition"
            title="Awards & Accolades"
            description="Our commitment to excellence has been recognized by industry leaders"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Trophy, title: 'Best Luxury Developer 2024', org: 'Real Estate Excellence Awards' },
              { icon: Award, title: 'Top Construction Firm', org: 'National Builders Association' },
              { icon: Shield, title: 'Customer Service Excellence', org: 'Property Industry Awards' },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-premium p-8 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-gold/10 border-2 border-gold-400/30 flex items-center justify-center">
                  <award.icon className="w-10 h-10 text-gold-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{award.title}</h3>
                <p className="text-gold-400 text-sm">{award.org}</p>
              </motion.div>
            ))}
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
            <span className="subheading">Join Our Journey</span>
            <h2 className="heading-lg text-white mt-4 mb-6">
              Ready to Work with <span className="text-gradient-gold">the Best</span>?
            </h2>
            <p className="body-text max-w-2xl mx-auto mb-10">
              Whether you're looking to build your dream home, find the perfect property, 
              or explore rental options, our team is ready to help.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About
