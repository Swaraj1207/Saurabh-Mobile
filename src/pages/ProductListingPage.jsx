import { useState, useEffect, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import FilterSidebar from '../components/FilterSidebar'
import ProductGrid from '../components/ProductGrid'
import products from '../data/products'

const defaultFilters = { category: 'all', condition: 'all', minPrice: '', maxPrice: '', brands: [] }

export default function ProductListingPage() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState(defaultFilters)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cat = searchParams.get('category')
    const cond = searchParams.get('condition')
    setFilters(prev => ({ ...prev, category: cat || 'all', condition: cond || 'all' }))
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [searchParams])

  const filtered = useMemo(() => products.filter(p => {
    if (filters.category !== 'all' && p.category !== filters.category) return false
    if (filters.condition !== 'all' && p.condition !== filters.condition) return false
    if (filters.minPrice && p.price < Number(filters.minPrice)) return false
    if (filters.maxPrice && p.price > Number(filters.maxPrice)) return false
    if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) return false
    return true
  }), [filters])

  const pageTitle = filters.condition === 'refurbished' ? 'Refurbished Devices' :
    filters.category !== 'all' ? filters.category.charAt(0).toUpperCase() + filters.category.slice(1) : 'All Products'

  return (
    <main className="pt-28 sm:pt-36 pb-16 px-4">
      <div className="container-main max-w-[1400px] mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm font-medium text-slate-500">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800 transition-colors">Home</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800">{pageTitle}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar filters={filters} setFilters={setFilters} onReset={() => setFilters(defaultFilters)} />
          
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl sm:text-4xl font-black mb-8 text-slate-800 tracking-tight">{pageTitle}</h1>
            <ProductGrid products={filtered} loading={loading} />
          </div>
        </div>
      </div>
    </main>
  )
}
