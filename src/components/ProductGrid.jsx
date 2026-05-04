import { useState } from 'react'
import ProductCard from './ProductCard'
import { ProductCardSkeleton } from './LoadingSkeleton'

const sortOptions = [
  { value: 'default', label: 'Relevance' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'discount', label: 'Discount' },
]

export default function ProductGrid({ products, loading = false }) {
  const [sortBy, setSortBy] = useState('default')

  const sorted = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc': return a.price - b.price
      case 'price-desc': return b.price - a.price
      case 'newest': return new Date(b.createdAt) - new Date(a.createdAt)
      case 'rating': return b.rating - a.rating
      case 'discount': return b.discount - a.discount
      default: return 0
    }
  })

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-slate-200/50 gap-4">
        <p className="text-sm text-slate-500 font-medium">
          Showing <strong className="text-slate-800 text-lg">{products.length}</strong> products
        </p>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-500 hidden sm:block">Sort by:</span>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}
            className="text-sm py-2 px-4 rounded-full border-none bg-white shadow-sm outline-none text-slate-700 font-medium cursor-pointer focus:ring-2 focus:ring-indigo-100 transition-all hover:shadow-md">
            {sortOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {[...Array(8)].map((_, i) => <ProductCardSkeleton key={i} />)}
        </div>
      ) : sorted.length === 0 ? (
        <div className="text-center py-20 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/60 shadow-sm">
          <div className="text-6xl mb-4 opacity-50">🔍</div>
          <h3 className="text-xl font-bold mb-2 text-slate-800">No products found</h3>
          <p className="text-slate-500">Try adjusting your filters or search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {sorted.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </div>
  )
}
