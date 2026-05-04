import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowUpRight } from 'react-icons/hi2'

export default function BentoGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[300px] gap-6 max-w-[1400px] mx-auto px-4"
    >
      
      {/* Block 1: Flagship Mobiles (Large) */}
      <motion.div variants={item} className="md:col-span-2 lg:col-span-2 row-span-2 group">
        <Link to="/products?category=mobiles" className="block w-full h-full outline-none">
          <div className="w-full h-full rounded-[2rem] glass-panel glass-panel-hover p-8 md:p-12 relative overflow-hidden flex flex-col justify-end">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-indigo-500/30 transition-colors duration-700" />
            
            <div className="relative z-20">
              <span className="text-indigo-400 font-bold text-sm tracking-widest uppercase mb-2 block">Pro Series</span>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Capture <br/> Brilliance.</h3>
              <div className="flex items-center gap-2 text-white/70 font-medium group-hover:text-white transition-colors">
                Shop Mobiles <HiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>

            <div className="absolute right-10 bottom-10 text-[180px] opacity-10 group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none z-0">
              📱
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Block 2: Pro Laptops */}
      <motion.div variants={item} className="md:col-span-1 lg:col-span-2 row-span-1 group">
        <Link to="/products?category=laptops" className="block w-full h-full outline-none">
          <div className="w-full h-full rounded-[2rem] glass-panel glass-panel-hover p-8 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-full h-full bg-emerald-500/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-500/20 transition-colors duration-700" />
            
            <div className="relative z-20">
              <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Ultra Power.</h3>
              <p className="text-white/50 text-sm font-medium mb-4 max-w-[200px]">Laptops engineered for boundary-pushing performance.</p>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                <HiArrowUpRight />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Block 3: Audio/Accessories */}
      <motion.div variants={item} className="md:col-span-1 lg:col-span-1 row-span-1 group">
        <Link to="/products?category=accessories" className="block w-full h-full outline-none">
          <div className="w-full h-full rounded-[2rem] glass-panel glass-panel-hover p-8 relative overflow-hidden flex flex-col justify-end">
            <div className="absolute top-0 left-0 w-full h-full bg-amber-500/10 blur-[60px] rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-amber-500/20 transition-colors duration-700" />
            
            <div className="relative z-20">
              <h3 className="text-2xl font-black text-white mb-1 tracking-tight">Immerse.</h3>
              <p className="text-white/50 text-xs font-medium mb-4">Premium audio & accessories.</p>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                <HiArrowUpRight />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Block 4: Refurbished */}
      <motion.div variants={item} className="md:col-span-2 lg:col-span-1 row-span-1 group">
        <Link to="/products?condition=refurbished" className="block w-full h-full outline-none">
          <div className="w-full h-full rounded-[2rem] glass-panel glass-panel-hover p-8 relative overflow-hidden flex flex-col justify-end border-emerald-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-20">
              <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-1 block">Certified</span>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Refurbished.</h3>
              <div className="flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                Save Now <HiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Block 5: Promo Banner (Full width) */}
      <motion.div variants={item} className="md:col-span-3 lg:col-span-4 row-span-1 group">
        <Link to="/products" className="block w-full h-full outline-none">
          <div className="w-full h-full rounded-[2rem] bg-white text-black p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between">
            
            <div className="relative z-20 max-w-xl">
              <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-2 block">Special Event</span>
              <h3 className="text-3xl md:text-5xl font-black mb-2 tracking-tight">Up to 50% Off</h3>
              <p className="text-black/60 text-sm md:text-base font-medium">Unprecedented power. Unbeatable prices. Limited time only.</p>
            </div>

            <div className="relative z-20 mt-6 md:mt-0">
              <button className="px-8 py-4 rounded-full text-sm font-bold bg-black text-white hover:scale-105 transition-transform duration-300">
                Explore Deals
              </button>
            </div>
          </div>
        </Link>
      </motion.div>

    </motion.div>
  )
}
