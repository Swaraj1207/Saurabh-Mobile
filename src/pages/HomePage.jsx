import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiOutlineArrowRight } from 'react-icons/hi'

export default function HomePage() {
  const containerRef = useRef(null)

  // --- SCENE 1: VIDEO HERO ---
  const heroRef = useRef(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0])
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.95])



  return (
    <main ref={containerRef} className="bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* 🎬 SCENE 1: VIDEO IMMERSION HERO */}
      <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-60"
          >
            {/* Abstract dark technology glowing lines loop */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-lines-loop-27352-large.mp4" type="video/mp4" />
          </video>
          {/* Deep dark gradient overlay so text stays perfectly readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
        </div>
        
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 flex flex-col items-center text-center px-6 mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 inline-block rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            <span className="text-[10px] md:text-xs font-bold text-cyan-400 uppercase tracking-[0.3em]">The Absolute Pinnacle</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white mb-6 max-w-6xl leading-none"
          >
            DEFY <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              LIMITS.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl font-light mb-12 px-4"
          >
            Experience engineering that borders on magic. The next generation of mobile architecture is here.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }}
          >
            <Link to="/products" className="group flex items-center gap-4 bg-white text-black px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95 text-sm md:text-base tracking-wide uppercase">
              Explore The Vault
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 🎬 SCENE 2: MOBILE SHOWCASE */}
      <section className="py-24 px-6 md:px-12 max-w-[2000px] mx-auto bg-black relative z-10 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}
            className="flex flex-col"
          >
            <span className="text-cyan-500 font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">The Flagship</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
              Forged from <br/> Titanium.
            </h2>
            <p className="text-lg text-white/60 font-light mb-8 max-w-lg">
              Aerospace-grade titanium design. The most advanced neural engine ever put in a smartphone. Welcome to the future of mobile intelligence.
            </p>
            
            <div className="space-y-6 border-l-2 border-cyan-500/30 pl-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Pro-Grade Cameras</h4>
                <p className="text-sm text-white/50">Capture the night with a massive 1-inch sensor.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">All-Day Battery</h4>
                <p className="text-sm text-white/50">Intelligent power management that learns your habits.</p>
              </div>
            </div>
            
            <Link to="/products?category=mobiles" className="mt-12 inline-flex w-fit items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider text-sm hover:text-white transition-colors group">
              Explore The Series <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}
            className="relative h-[500px] md:h-[700px] rounded-[2rem] overflow-hidden flex items-center justify-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/20 blur-[100px] rounded-full z-0 pointer-events-none" />
            <img src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1200&auto=format&fit=crop" alt="Titanium Mobile" className="relative z-10 w-[80%] md:w-full max-h-full object-contain drop-shadow-[0_0_50px_rgba(6,182,212,0.2)] grayscale contrast-125" />
          </motion.div>

        </div>
      </section>

      {/* 🎬 SCENE 3: GLOWING BENTO ECOSYSTEM */}
      <section className="py-24 md:py-48 px-6 md:px-12 max-w-[2000px] mx-auto relative z-10 bg-black">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">The Ecosystem</h2>
          <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto">Interconnected hardware designed to amplify your workflow.</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-[auto] gap-4 md:gap-6 max-w-7xl mx-auto">
          
          {/* Large Item: Mobiles */}
          <Link to="/products?category=mobiles" className="group col-span-1 md:col-span-8 row-span-2 block relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[600px] rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-colors duration-500"
            >
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop" alt="Mobiles" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <span className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Flagship Series</span>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Smartphones</h3>
                <div className="inline-flex items-center gap-2 text-white/70 font-medium group-hover:text-cyan-400 transition-colors">
                  Shop Now <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Medium Item: Laptops */}
          <Link to="/products?category=laptops" className="group col-span-1 md:col-span-4 row-span-1 block relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
              className="relative h-[300px] md:h-[288px] rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden hover:border-purple-500/50 transition-colors duration-500"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop" alt="Laptops" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-black text-white mb-2">Laptops</h3>
                <div className="inline-flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-purple-400 transition-colors">
                  Explore <HiOutlineArrowRight />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Medium Item: Accessories */}
          <Link to="/products?category=accessories" className="group col-span-1 md:col-span-4 row-span-1 block relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[300px] md:h-[288px] rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/50 transition-colors duration-500"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop" alt="Accessories" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-black text-white mb-2">Audio</h3>
                <div className="inline-flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-blue-400 transition-colors">
                  Explore <HiOutlineArrowRight />
                </div>
              </div>
            </motion.div>
          </Link>

        </div>
      </section>

      {/* 🎬 SCENE 4: DARK GLASS CTA */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10 bg-black">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden"
        >
          {/* Intense center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 blur-[100px] rounded-full z-0 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Enter the Next Era.</h2>
            <p className="text-sm md:text-lg text-white/50 font-light mb-10 md:mb-12 max-w-xl mx-auto">
              Trade up to unparalleled performance. Get up to ₹25,000 credit towards your new flagship device.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link to="/products" className="bg-white text-black px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95 w-full sm:w-auto text-sm md:text-base uppercase tracking-wide">
                Purchase Now
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
