import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function OfferBanners() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-12"
    >
      {/* Huge Offer Banner */}
      <motion.div variants={item}>
        <Link to="/products?category=mobiles" className="block w-full outline-none group">
          <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-slate-900 min-h-[400px] flex items-center p-8 sm:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:-translate-y-2">
            
            {/* Glowing dark blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/30 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none group-hover:bg-indigo-400/40 transition-colors duration-700" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full translate-y-1/3 pointer-events-none group-hover:bg-purple-400/30 transition-colors duration-700" />

            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md text-indigo-300 border border-white/10 mb-6">
                Limited Time Offer
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
                Up to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">50% Off</span>
              </h2>
              <p className="text-lg text-slate-300 font-medium mb-8 max-w-lg">
                Discover unmissable deals on our flagship smartphones. The performance you need at prices you'll love.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
                Shop the Sale <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>

            <div className="absolute right-10 bottom-0 text-[250px] opacity-20 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none select-none drop-shadow-2xl">
              🚀
            </div>
          </div>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Refurbished Deals Banner */}
        <motion.div variants={item}>
          <Link to="/products?condition=refurbished" className="block w-full h-full outline-none group">
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-emerald-50 border border-emerald-100 min-h-[350px] p-8 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)]">
              
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/60 blur-[50px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-3xl font-black text-emerald-900 tracking-tight mb-3">Refurbished Deals</h3>
                <p className="text-base font-medium text-emerald-700 mb-8 max-w-sm">Premium certified pre-owned devices with 1-year warranty. Good for your wallet, great for the planet.</p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 bg-white px-6 py-3 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                  Explore Deals <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>

              <div className="absolute right-8 bottom-4 text-[120px] opacity-20 group-hover:scale-110 transition-transform duration-700 pointer-events-none select-none">
                🌱
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Budget Phones Banner */}
        <motion.div variants={item}>
          <Link to="/products" className="block w-full h-full outline-none group">
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-indigo-50 border border-indigo-100 min-h-[350px] p-8 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(99,102,241,0.1)]">
              
              <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/60 blur-[50px] rounded-full -translate-x-1/4 -translate-y-1/4 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-3xl font-black text-indigo-900 tracking-tight mb-3">Best Budget Phones</h3>
                <p className="text-base font-medium text-indigo-700 mb-8 max-w-sm">Top performance doesn't have to break the bank. Discover our curated collection under ₹15,000.</p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 bg-white px-6 py-3 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                  View Collection <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>

              <div className="absolute right-8 bottom-4 text-[120px] opacity-20 group-hover:scale-110 transition-transform duration-700 pointer-events-none select-none">
                💡
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
