import { useState, useEffect } from 'react'
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-editorial-b">
      <div className="flex items-center justify-between px-6 md:px-12 h-20">

        {/* Left: Hamburger (Mobile) & Nav (Desktop) */}
        <div className="flex-1 flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-black mr-4">
            {mobileOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {categoryLinks.map(link => (
              <Link key={link.name} to={link.path} className="text-[11px] font-bold tracking-[0.2em] uppercase hover:opacity-50 transition-opacity">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Center: Logo (Serif) */}
        <div className="flex-shrink-0 text-center">
          <Link to="/" className="text-2xl md:text-3xl font-serif font-black tracking-tighter uppercase no-underline">
            Saurabh
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-black hover:opacity-50 transition-opacity">
            <HiOutlineSearch size={22} />
          </button>

          <button className="hidden sm:block text-black hover:opacity-50 transition-opacity">
            <HiOutlineUser size={22} />
          </button>

          <Link to="/cart" className="relative text-black hover:opacity-50 transition-opacity flex items-center">
            <HiOutlineShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center bg-black text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Expandable Search */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white border-editorial-t"
          >
            <form onSubmit={handleSearch} className="px-6 md:px-12 py-6 flex items-center gap-4">
              <HiOutlineSearch size={24} className="text-black/30" />
              <input
                autoFocus
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Type to search..."
                className="flex-1 bg-transparent border-none outline-none text-3xl font-serif placeholder-black/20"
              />
              <button type="button" onClick={() => setSearchOpen(false)} className="text-black/50 hover:text-black transition-colors uppercase text-xs font-bold tracking-widest">
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-editorial-t"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {categoryLinks.map(link => (
                <Link key={link.name} to={link.path} onClick={() => setMobileOpen(false)}
                  className="text-2xl font-serif uppercase tracking-tight hover:opacity-50 transition-opacity">
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-px bg-black/10 my-4" />
              <Link to="/admin" onClick={() => setMobileOpen(false)}
                className="text-xs font-bold tracking-widest uppercase hover:opacity-50 transition-opacity">
                Admin
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
