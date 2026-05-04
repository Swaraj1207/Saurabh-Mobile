import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineShoppingBag, HiOutlineMenu, HiOutlineX, HiOutlineSearch, HiOutlineUser } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../utils/cartContext'

const categoryLinks = [
  { name: 'Mobiles', path: '/products?category=mobiles' },
  { name: 'Laptops', path: '/products?category=laptops' },
  { name: 'Accessories', path: '/products?category=accessories' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const { cartCount } = useCart()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search.trim())}`)
      setSearchOpen(false)
    }
  }

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full px-5 md:px-8 h-14 md:h-16 flex items-center justify-between"
      >
        
        {/* Left: Hamburger (Mobile) & Nav (Desktop) */}
        <div className="flex-1 flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white mr-4 active:scale-95 transition-transform">
            {mobileOpen ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {categoryLinks.map(link => (
              <Link key={link.name} to={link.path} className="text-xs font-semibold tracking-widest uppercase text-white/60 hover:text-cyan-400 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Center: Logo */}
        <div className="shrink-0 text-center">
          <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight text-white no-underline">
            SAURABH.
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex-1 flex items-center justify-end gap-5 md:gap-6">
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-white/70 hover:text-cyan-400 transition-colors active:scale-95">
            <HiOutlineSearch size={20} />
          </button>
          
          <button className="hidden sm:block text-white/70 hover:text-cyan-400 transition-colors active:scale-95">
            <HiOutlineUser size={20} />
          </button>

          <Link to="/cart" className="relative text-white/70 hover:text-cyan-400 transition-colors active:scale-95 flex items-center">
            <HiOutlineShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center bg-cyan-500 text-black shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </motion.div>

      {/* Expandable Search */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 8, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="absolute top-14 md:top-16 left-0 right-0 mx-auto w-full max-w-xl bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden mt-2"
          >
            <form onSubmit={handleSearch} className="px-5 py-4 flex items-center gap-3">
              <HiOutlineSearch size={20} className="text-white/40" />
              <input 
                autoFocus
                type="text" 
                value={search} 
                onChange={e => setSearch(e.target.value)}
                placeholder="Search for devices..."
                className="flex-1 bg-transparent border-none outline-none text-sm md:text-base font-medium placeholder-white/40 text-white"
              />
              <button type="button" onClick={() => setSearchOpen(false)} className="text-white/50 hover:text-cyan-400 transition-colors text-[10px] md:text-xs font-bold active:scale-95 uppercase tracking-wider">
                Close
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 8, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="md:hidden absolute top-14 left-0 right-0 bg-black/80 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden mt-2"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {categoryLinks.map(link => (
                <Link key={link.name} to={link.path} onClick={() => setMobileOpen(false)}
                  className="text-lg font-bold tracking-tight text-white/80 hover:text-cyan-400 transition-colors">
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-px bg-white/10 my-1" />
              <Link to="/admin" onClick={() => setMobileOpen(false)}
                className="text-[11px] font-bold text-white/40 hover:text-cyan-400 transition-colors uppercase tracking-wider">
                Admin Area
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
