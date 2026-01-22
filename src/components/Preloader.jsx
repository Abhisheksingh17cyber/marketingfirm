import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-dark-950 flex flex-col items-center justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c49a47' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Logo Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative mb-8"
      >
        {/* Animated Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
          className="absolute -inset-8 border-2 border-gold-400/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
          className="absolute -inset-12 border border-gold-400/10 rounded-full"
        />

        {/* Logo SVG */}
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 200 200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <defs>
            <linearGradient id="preloaderGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4b76e" />
              <stop offset="50%" stopColor="#c49a47" />
              <stop offset="100%" stopColor="#b07d3a" />
            </linearGradient>
          </defs>
          
          {/* Animated Building */}
          <motion.g
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <rect x="70" y="60" width="60" height="80" rx="2" fill="url(#preloaderGold)" />
            <rect x="78" y="70" width="12" height="12" fill="#0a0a0a" rx="1" />
            <rect x="110" y="70" width="12" height="12" fill="#0a0a0a" rx="1" />
            <rect x="78" y="90" width="12" height="12" fill="#0a0a0a" rx="1" />
            <rect x="110" y="90" width="12" height="12" fill="#0a0a0a" rx="1" />
            <rect x="78" y="110" width="12" height="12" fill="#0a0a0a" rx="1" />
            <rect x="110" y="110" width="12" height="12" fill="#0a0a0a" rx="1" />
            <rect x="92" y="118" width="16" height="22" fill="#0a0a0a" rx="1" />
            <polygon points="60,60 100,35 140,60" fill="url(#preloaderGold)" />
            <rect x="40" y="90" width="30" height="50" rx="2" fill="url(#preloaderGold)" />
            <rect x="130" y="90" width="30" height="50" rx="2" fill="url(#preloaderGold)" />
          </motion.g>
        </motion.svg>
      </motion.div>

      {/* Brand Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center"
      >
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-wider">
          <span className="text-gradient-gold">LUXE</span>
          <span className="text-white ml-2">ESTATES</span>
        </h1>
        <p className="text-gold-400/60 text-sm tracking-[0.3em] uppercase mt-2">
          Premium Real Estate
        </p>
      </motion.div>

      {/* Loading Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '200px' }}
        transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
        className="h-[2px] bg-gradient-gold mt-8 rounded-full"
      />

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
        className="text-secondary-400 text-sm mt-4 tracking-wider"
      >
        Loading Excellence...
      </motion.p>
    </motion.div>
  )
}

export default Preloader
