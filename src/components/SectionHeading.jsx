import { motion } from 'framer-motion'

const SectionHeading = ({ subtitle, title, description, align = 'center', light = false }) => {
  const alignmentClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${alignmentClasses[align]}`}
    >
      {subtitle && (
        <span className="subheading">{subtitle}</span>
      )}
      <h2 className={`heading-lg mt-3 ${light ? 'text-dark-950' : 'text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`body-text mt-4 ${light ? 'text-secondary-600' : 'text-secondary-400'}`}>
          {description}
        </p>
      )}
      <div className={`gold-line w-24 mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}

export default SectionHeading
