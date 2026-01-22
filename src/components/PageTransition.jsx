import { motion } from 'framer-motion'

const PageTransition = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: [0, 1, 1, 0] }}
      transition={{ 
        duration: 1.2,
        times: [0, 0.4, 0.6, 1],
        ease: [0.76, 0, 0.24, 1]
      }}
      style={{ originY: 0 }}
      className="fixed inset-0 z-[9999] bg-dark-950 flex items-center justify-center"
    >
      {/* Logo Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          scale: [0.8, 1, 1, 1.1]
        }}
        transition={{ 
          duration: 1.2,
          times: [0, 0.3, 0.7, 1],
          ease: 'easeInOut'
        }}
        className="flex flex-col items-center"
      >
        {/* Logo SVG */}
        <svg width="80" height="80" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="transitionGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4b76e" />
              <stop offset="50%" stopColor="#c49a47" />
              <stop offset="100%" stopColor="#b07d3a" />
            </linearGradient>
          </defs>
          
          <g fill="url(#transitionGold)">
            <rect x="70" y="60" width="60" height="80" rx="2" />
            <rect x="78" y="70" width="12" height="12" fill="#0a0a0a" rx="1" />
            <rect x="110" y="70" width="12" height="12" fill="#0a0a0a" rx="1" />
            <rect x="78" y="90" width="12" height="12" fill="#0a0a0a" rx="1" />
            <rect x="110" y="90" width="12" height="12" fill="#0a0a0a" rx="1" />
            <rect x="78" y="110" width="12" height="12" fill="#0a0a0a" rx="1" />
            <rect x="110" y="110" width="12" height="12" fill="#0a0a0a" rx="1" />
            <rect x="92" y="118" width="16" height="22" fill="#0a0a0a" rx="1" />
            <polygon points="60,60 100,35 140,60" />
            <rect x="40" y="90" width="30" height="50" rx="2" />
            <rect x="130" y="90" width="30" height="50" rx="2" />
          </g>
        </svg>

        {/* Brand Name */}
        <div className="mt-4 flex items-center gap-2">
          <span className="font-display text-xl font-bold text-gradient-gold tracking-wider">LUXE</span>
          <span className="font-display text-xl font-bold text-white tracking-wider">ESTATES</span>
        </div>
      </motion.div>

      {/* Animated Lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 1, 0] }}
        transition={{ 
          duration: 1.2,
          times: [0, 0.4, 0.6, 1],
          ease: 'easeInOut'
        }}
        className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 1, 0] }}
        transition={{ 
          duration: 1.2,
          times: [0, 0.4, 0.6, 1],
          ease: 'easeInOut',
          delay: 0.1
        }}
        className="absolute bottom-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
      />
    </motion.div>
  )
}

export default PageTransition
