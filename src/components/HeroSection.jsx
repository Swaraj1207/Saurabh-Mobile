import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiOutlinePlay } from 'react-icons/hi'

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[90vh] pt-32 flex flex-col justify-end px-6 md:px-12 pb-12 border-editorial-b">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, filter: "grayscale(100%)" }}
          animate={{ scale: 1, filter: "grayscale(0%)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/image copy.png')" }}
        />
        {/* White blur overlay */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-md pointer-events-none"></div>
        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Quick Stats (Top Right) */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="absolute top-32 right-6 md:right-12 z-20 flex gap-12 text-[9px] font-bold tracking-[0.2em] uppercase text-black/60 hidden lg:flex"
      >
        <div className="flex flex-col gap-1">
          <span>Est. 1995</span>
          <span className="text-black">New Delhi, IN</span>
        </div>
        <div className="flex flex-col gap-1">
          <span>Inventory</span>
          <span className="text-black">10,000+ Units</span>
        </div>
        <div className="flex flex-col gap-1">
          <span>Status</span>
          <span className="text-black">Authorized Reseller</span>
        </div>
      </motion.div>



      <div className="relative z-10 w-full max-w-[2000px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12 mt-auto">
        
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-6">Edition 01 — Latest Collection</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl md:text-8xl lg:text-[160px] leading-[0.85] tracking-tighter uppercase mb-8"
          >
            The New <br/> Standard.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base md:text-xl font-medium max-w-xl leading-relaxed mb-12"
          >
            Curated electronics engineered for the modern aesthete. Pure performance encased in uncompromising design.
          </motion.p>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
            className="flex items-center gap-4"
          >
            <div className="w-px h-12 bg-black/20 relative overflow-hidden">
              <motion.div 
                animate={{ y: [0, 48, 0] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-full h-1/2 bg-black absolute top-0 left-0" 
              />
            </div>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-black/50">Scroll to Discover</span>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 flex items-center gap-8"
        >
          {/* Secondary Action: Brand Film */}
          <button className="hidden md:flex items-center gap-3 group hover:opacity-50 transition-opacity">
            <span className="flex items-center justify-center w-10 h-10 rounded-full border border-black">
              <HiOutlinePlay size={14} className="ml-0.5" />
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase border-b border-black pb-1">Brand Film</span>
          </button>

          {/* Primary Action: Explore */}
          <Link to="/products" className="group flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-500 bg-white/20 backdrop-blur-sm">
            <span className="text-[10px] font-bold tracking-widest uppercase">Explore</span>
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
