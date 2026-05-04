import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white/70 pt-16 md:pt-32 relative z-10 overflow-hidden border-t border-white/10">
      
      {/* Massive Brand Text Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none opacity-5 select-none mt-10">
        <h1 className="text-[20vw] font-black tracking-tighter leading-none whitespace-nowrap text-white">
          SAURABH.
        </h1>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 border-b border-white/10 pb-12 md:pb-24 gap-8 lg:gap-12">
          
          <div className="flex flex-col">
            <h4 className="font-bold text-xs md:text-sm mb-4 md:mb-8 text-white tracking-[0.2em] uppercase">Product</h4>
            <Link to="/products?category=mobiles" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">Smartphones</Link>
            <Link to="/products?category=laptops" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">Laptops</Link>
            <Link to="/products?category=accessories" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">Accessories</Link>
            <Link to="/products?condition=refurbished" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">Certified Refurbished</Link>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-xs md:text-sm mb-4 md:mb-8 text-white tracking-[0.2em] uppercase">Support</h4>
            <a href="#" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">Order Status</a>
            <a href="#" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">Warranty claims</a>
            <a href="#" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">Service Centers</a>
            <a href="#" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">Diagnostics</a>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-xs md:text-sm mb-4 md:mb-8 text-white tracking-[0.2em] uppercase">Exclusive</h4>
            <a href="#" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">The Vault</a>
            <a href="#" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">Corporate</a>
            <a href="#" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">Student Access</a>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-xs md:text-sm mb-4 md:mb-8 text-white tracking-[0.2em] uppercase">Brand</h4>
            <a href="#" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">Our Vision</a>
            <a href="#" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">Careers</a>
            <a href="#" className="text-sm font-medium hover:text-cyan-400 transition-colors mb-4">Press Room</a>
          </div>

        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 py-8 border-b border-white/10 text-xs text-white/40 space-y-3">
        <p className="font-medium tracking-wide">Copyright © 1995-{new Date().getFullYear()} SAURABH TECHNOLOGIES. All rights reserved.</p>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 py-6 flex flex-col lg:flex-row justify-between items-start lg:items-center text-[10px] md:text-xs font-semibold text-white/50">
        <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-4 lg:mb-0 uppercase tracking-widest">
          <span className="text-white pr-2 md:pr-4">India</span>
          <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Legal</a>
        </div>
        
        <div className="flex items-center gap-6 mt-2 md:mt-0 uppercase tracking-widest text-xs">
          <a href="#" className="hover:text-cyan-400 transition-colors">X</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">YouTube</a>
        </div>
      </div>
      
    </footer>
  )
}
