import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function EditorialGrid() {
  return (
    <div className="w-full max-w-[2000px] mx-auto border-editorial-t border-editorial-b">

      {/* Top Row: Full Width Mobiles */}
      <div className="w-full">
        <div className="group relative border-editorial-b border-black overflow-hidden flex flex-col md:flex-row">
          
          <div className="p-8 md:p-16 w-full md:w-1/3 flex flex-col justify-center relative z-10 bg-white border-b md:border-b-0 md:border-r border-black">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 block">Chapter I</span>
              <h2 className="font-serif text-6xl md:text-8xl uppercase tracking-tighter mb-6">Mobiles</h2>
              <p className="text-base md:text-lg font-medium max-w-sm leading-relaxed">The latest flagship devices, capturing life with uncompromising clarity.</p>
            </div>
            <div className="mt-16 md:mt-24">
              <Link to="/products?category=mobiles" className="text-[10px] font-bold tracking-widest uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity w-fit">
                Discover Collection
              </Link>
            </div>
          </div>

          <div className="w-full md:w-2/3 bg-slate-50 flex items-center justify-center p-8 md:p-12 overflow-hidden">
            <img
              src="/image copy.png"
              alt="Mobiles"
              className="w-full h-auto max-h-[700px] object-contain img-zoom grayscale group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
          
        </div>
      </div>

      {/* Middle Row: Massive Full Width Promo */}
      <div className="group relative w-full border-editorial-t overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=3000&auto=format&fit=crop"
            alt="Promo"
            className="w-full h-full object-cover img-zoom grayscale group-hover:grayscale-0"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>

        <div className="relative z-10 p-12 md:p-32 flex flex-col items-center text-center">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-8">The Seasonal Edit</span>
          <h2 className="font-serif text-6xl md:text-9xl uppercase tracking-tighter mb-8 leading-[0.85]">
            Up to <br /> 50% Off.
          </h2>
          <Link to="/products" className="inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-500 bg-transparent">
            <span className="text-[10px] font-bold tracking-widest uppercase">Shop Sale</span>
          </Link>
        </div>
      </div>

      {/* Bottom Row: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-editorial-t">

        {/* Left Col: Accessories */}
        <div className="group relative border-editorial-b lg:border-editorial-b-0 lg:border-r border-black overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-[300px] md:h-full overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2000&auto=format&fit=crop"
              alt="Accessories"
              className="w-full h-full object-cover img-zoom grayscale group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center bg-white">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Chapter III</span>
            <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-tighter mb-4">Audio</h2>
            <Link to="/products?category=accessories" className="text-[10px] font-bold tracking-widest uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity w-fit mt-8">
              Explore
            </Link>
          </div>
        </div>

        {/* Right Col: Refurbished */}
        <div className="group relative overflow-hidden flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2 h-[300px] md:h-full overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=2000&auto=format&fit=crop"
              alt="Refurbished"
              className="w-full h-full object-cover img-zoom grayscale group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center bg-black text-white">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block text-white/50">Chapter IV</span>
            <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-tighter mb-4">Archive</h2>
            <p className="text-xs text-white/70 font-medium mb-8">Certified Refurbished.</p>
            <Link to="/products?condition=refurbished" className="text-[10px] font-bold tracking-widest uppercase border-b border-white pb-1 hover:opacity-50 transition-opacity w-fit mt-auto">
              Explore
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}
