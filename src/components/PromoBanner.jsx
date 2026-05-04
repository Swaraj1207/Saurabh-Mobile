import { Link } from 'react-router-dom'

export default function PromoBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      <Link to="/products?category=mobiles" className="no-underline group outline-none">
        <div className="relative rounded-3xl p-8 md:p-10 flex items-center justify-between overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_10px_30px_rgba(79,70,229,0.2)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.3)] hover:-translate-y-1 transition-all duration-300">
          
          {/* Decorative blurs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 inline-block bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-sm">
              Bank Offer
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">HDFC Card Offer</h3>
            <p className="text-base text-indigo-100 font-medium">Extra 10% off on all Mobiles</p>
          </div>
          
          <span className="text-6xl md:text-7xl opacity-50 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">💳</span>
        </div>
      </Link>
      
      <Link to="/products?condition=refurbished" className="no-underline group outline-none">
        <div className="relative rounded-3xl p-8 md:p-10 flex items-center justify-between overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 shadow-[0_10px_30px_rgba(16,185,129,0.2)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all duration-300">
          
          {/* Decorative blurs */}
          <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-white/20 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 inline-block bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-sm">
              Save Big
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">Refurbished Deals</h3>
            <p className="text-base text-emerald-100 font-medium">Up to 50% off with warranty</p>
          </div>
          
          <span className="text-6xl md:text-7xl opacity-50 relative z-10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">♻️</span>
        </div>
      </Link>
    </div>
  )
}
