import { useState } from 'react'
import { HiFilter, HiX } from 'react-icons/hi'

export default function FilterSidebar({ filters, setFilters, onReset }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const updateFilter = (key, value) => setFilters(prev => ({ ...prev, [key]: value }))
  const toggleBrand = (brand) => setFilters(prev => ({
    ...prev, brands: prev.brands.includes(brand) ? prev.brands.filter(b => b !== brand) : [...prev.brands, brand]
  }))

  const phoneBrands = ['Samsung', 'Apple', 'OnePlus', 'Xiaomi', 'Vivo', 'Realme', 'Nothing', 'Google', 'Motorola', 'HP', 'Lenovo', 'Dell', 'ASUS']

  const sidebar = (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-800">Filters</h3>
        <button onClick={onReset} className="text-xs font-semibold cursor-pointer bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors">
          Clear All
        </button>
      </div>

      {/* Category */}
      <div className="border-t border-slate-200/60 pt-4">
        <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-slate-500">Category</h4>
        <div className="flex flex-col gap-2">
          {['all', 'mobiles', 'laptops', 'accessories'].map(cat => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm group">
              <div className="relative flex items-center justify-center">
                <input type="radio" name="category" checked={filters.category === cat}
                  onChange={() => updateFilter('category', cat)} className="peer appearance-none w-4 h-4 border-2 border-slate-300 rounded-full checked:border-indigo-500 transition-colors" />
                <div className="absolute w-2 h-2 rounded-full bg-indigo-500 scale-0 peer-checked:scale-100 transition-transform"></div>
              </div>
              <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">
                {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div className="border-t border-slate-200/60 pt-4">
        <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-slate-500">Condition</h4>
        <div className="flex flex-col gap-2">
          {['all', 'new', 'refurbished'].map(cond => (
            <label key={cond} className="flex items-center gap-3 cursor-pointer text-sm group">
              <div className="relative flex items-center justify-center">
                <input type="radio" name="condition" checked={filters.condition === cond}
                  onChange={() => updateFilter('condition', cond)} className="peer appearance-none w-4 h-4 border-2 border-slate-300 rounded-full checked:border-indigo-500 transition-colors" />
                <div className="absolute w-2 h-2 rounded-full bg-indigo-500 scale-0 peer-checked:scale-100 transition-transform"></div>
              </div>
              <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">
                {cond === 'all' ? 'All' : cond.charAt(0).toUpperCase() + cond.slice(1)}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="border-t border-slate-200/60 pt-4">
        <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-slate-500">Price Range</h4>
        <div className="flex items-center gap-2">
          <input type="number" placeholder="₹ Min" value={filters.minPrice}
            onChange={e => updateFilter('minPrice', e.target.value)}
            className="flex-1 py-2 px-3 rounded-xl text-sm bg-white border border-slate-200 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all text-slate-700" />
          <span className="text-slate-400 font-medium">-</span>
          <input type="number" placeholder="₹ Max" value={filters.maxPrice}
            onChange={e => updateFilter('maxPrice', e.target.value)}
            className="flex-1 py-2 px-3 rounded-xl text-sm bg-white border border-slate-200 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all text-slate-700" />
        </div>
      </div>

      {/* Brands */}
      <div className="border-t border-slate-200/60 pt-4">
        <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-slate-500">Brand</h4>
        <div className="flex flex-col gap-2 max-h-52 overflow-y-auto pr-2 custom-scrollbar">
          {phoneBrands.map(brand => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer text-sm group">
              <input type="checkbox" checked={filters.brands.includes(brand)}
                onChange={() => toggleBrand(brand)} 
                className="w-4 h-4 rounded border-slate-300 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0 transition-colors cursor-pointer" />
              <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">{brand}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <button onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer border-none shadow-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
        <HiFilter size={24} />
      </button>

      <div className="hidden lg:block w-[260px] shrink-0">
        <div className="sticky top-28 bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          {sidebar}
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}>
          <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-white p-6 overflow-y-auto shadow-2xl transition-transform"
            onClick={e => e.stopPropagation()}>
            <button onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors">
              <HiX size={20} />
            </button>
            <div className="mt-6">
              {sidebar}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
