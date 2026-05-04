import HeroSection from '../components/HeroSection'
import EditorialGrid from '../components/EditorialGrid'
import { motion } from 'framer-motion'
import { HiOutlineTruck, HiOutlineShieldCheck, HiOutlineLockClosed } from 'react-icons/hi'

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen text-black">

      {/* Cover Story */}
      <HeroSection />

      {/* Editorial Trust Strip */}
      <div className="w-full max-w-[2000px] mx-auto border-editorial-b">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black">
          {[
            { i: HiOutlineTruck, t: "Free Shipping", s: "On orders above ₹999" },
            { i: HiOutlineShieldCheck, t: "Official Warranty", s: "100% genuine products" },
            { i: HiOutlineLockClosed, t: "Secure Checkout", s: "Encrypted transactions" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-12 md:py-16 group hover:bg-black hover:text-white transition-colors duration-500 cursor-default">
              <item.i size={24} className="mb-4" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{item.t}</span>
              <span className="font-serif italic text-sm">{item.s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Editorial Spread */}
      <div className="pt-20 pb-32">
        <div className="px-6 md:px-12 mb-12 max-w-[2000px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl uppercase tracking-tighter"
          >
            The <br /> Catalog.
          </motion.h2>
        </div>

        <EditorialGrid />
      </div>

    </main>
  )
}
