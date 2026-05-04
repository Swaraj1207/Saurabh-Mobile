import { motion } from 'framer-motion'
import { HiOutlineTruck, HiOutlineShieldCheck, HiOutlineLockClosed } from 'react-icons/hi'

const highlights = [
  { icon: HiOutlineTruck, title: 'Free Delivery', subtitle: 'On all orders above ₹999' },
  { icon: HiOutlineShieldCheck, title: 'Brand Warranty', subtitle: '100% genuine products' },
  { icon: HiOutlineLockClosed, title: 'Secure Payment', subtitle: 'Encrypted safe checkout' },
]

export default function HighlightStrip() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] p-8 sm:p-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        {highlights.map((h, i) => (
          <div key={i} className={`flex flex-col items-center text-center ${i !== 0 ? 'pt-8 md:pt-0' : ''}`}>
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-indigo-500 mb-4 border border-slate-100 shadow-sm">
              <h.icon size={32} />
            </div>
            <h4 className="text-lg font-black text-slate-800 mb-1">{h.title}</h4>
            <p className="text-sm font-medium text-slate-500">{h.subtitle}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
