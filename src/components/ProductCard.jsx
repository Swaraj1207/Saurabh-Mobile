import { Link } from 'react-router-dom'
import { HiShoppingCart } from 'react-icons/hi'
import { formatPrice } from '../utils/formatPrice'
import { useCart } from '../utils/cartContext'
import RatingStars from './RatingStars'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group relative">
      
      {/* Decorative gradient blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Badges */}
      <div className="relative p-3 pb-0 z-10">
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.condition === 'refurbished' && (
            <span className="badge-condition badge-refurbished shadow-sm">Refurbished</span>
          )}
        </div>
        {product.discount >= 20 && (
          <span className="absolute top-4 right-4 z-10 text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
            -{product.discount}%
          </span>
        )}

        {/* Image */}
        <Link to={`/products/${product.id}`} className="block">
          <div className="img-zoom-container h-[220px] bg-slate-50/50 rounded-2xl flex items-center justify-center overflow-hidden">
            <img src={product.images[0]} alt={product.name}
              className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110 mix-blend-multiply" loading="lazy" />
          </div>
        </Link>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1 z-10">
        <div className="text-[10px] font-bold uppercase tracking-widest mb-1.5 text-indigo-500">
          {product.brand}
        </div>
        <Link to={`/products/${product.id}`} className="no-underline block mb-2">
          <h3 className="text-[15px] font-bold leading-tight text-slate-800 line-clamp-2 group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="mb-3">
          <RatingStars rating={product.rating} size={14} showCount count={product.reviewCount} />
        </div>

        {/* Price */}
        <div className="flex flex-col gap-0.5 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-slate-900">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md">
                {product.discount}% off
              </span>
            )}
          </div>
          {product.originalPrice > product.price && (
            <span className="text-sm text-slate-400 line-through font-medium">MRP: {formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {/* Offer Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.emi && <span className="offer-tag text-[10px]">💳 EMI: {product.emi}</span>}
          {product.bankOffer && <span className="offer-tag text-[10px]">🏦 Offers</span>}
        </div>

        {/* Add to Cart */}
        <div className="mt-auto pt-4 border-t border-slate-100">
          <button onClick={() => addToCart(product)}
            className="w-full py-3 rounded-full flex items-center justify-center gap-2 text-sm font-bold cursor-pointer transition-all bg-indigo-50 text-indigo-600 hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95">
            <HiShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
