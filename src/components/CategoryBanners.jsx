import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const categories = [
  { id: 'mobiles', name: 'Premium Mobiles', desc: 'Capture the world in stunning detail.', path: '/products?category=mobiles', bg: 'bg-gradient-to-br from-indigo-100/80 to-purple-50/80', icon: '📱', colSpan: 'md:col-span-2' },
  { id: 'laptops', name: 'Pro Laptops', desc: 'Power that moves with you.', path: '/products?category=laptops', bg: 'bg-gradient-to-br from-emerald-100/80 to-teal-50/80', icon: '💻', colSpan: 'md:col-span-1' },
  { id: 'accessories', name: 'Smart Accessories', desc: 'Elevate your daily carry.', path: '/products?category=accessories', bg: 'bg-gradient-to-br from-amber-100/80 to-orange-50/80', icon: '🎧', colSpan: 'md:col-span-1' },
  { id: 'refurbished', name: 'Certified Refurbished', desc: 'Like new. Guaranteed.', path: '/products?condition=refurbished', bg: 'bg-gradient-to-br from-rose-100/80 to-pink-50/80', icon: '✨', colSpan: 'md:col-span-2' },
]

export default function CategoryBanners() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
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
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {categories.map((cat) => (
        <motion.div key={cat.id} variants={item} className={`relative h-[350px] ${cat.colSpan}`}>
          <Link to={cat.path} className="block w-full h-full outline-none group">
            <div className={`w-full h-full rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-white/60 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] group-hover:-translate-y-2 ${cat.bg}`}>
              
              <div className="relative z-10 max-w-sm">
                <h3 className="text-3xl font-black text-slate-800 mb-3 tracking-tight">{cat.name}</h3>
                <p className="text-lg font-medium text-slate-600">{cat.desc}</p>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-sm font-bold text-slate-800 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full w-fit shadow-sm border border-white group-hover:bg-white transition-colors">
                Explore <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>

              {/* Huge background icon */}
              <div className="absolute -bottom-10 -right-10 text-[200px] opacity-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 pointer-events-none select-none drop-shadow-xl">
                {cat.icon}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
