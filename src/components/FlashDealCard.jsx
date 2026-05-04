import { Link } from 'react-router-dom'
import { HiShoppingCart } from 'react-icons/hi'
import { formatPrice } from '../utils/formatPrice'
import { useCart } from '../utils/cartContext'

export default function FlashDealCard({ product }) {
  const { addToCart } = useCart()
  
  return (
    <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group">
      
      <div className="relative p-3 pb-0">
        {product.discount >= 20 && (
          <span className="absolute top-4 left-4 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full bg-rose-500 text-white shadow-md shadow-rose-500/20">
            -{product.discount}% OFF
          </span>
        )}
        
        <Link to={`/products/${product.id}`}>
          <div className="img-zoom-container h-[180px] bg-slate-50/50 rounded-2xl flex items-center justify-center overflow-hidden">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110 mix-blend-multiply" loading="lazy" />
          </div>
        </Link>
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <Link to={`/products/${product.id}`} className="no-underline mb-2">
          <h3 className="text-sm font-bold text-slate-800 leading-snug line-clamp-2 group-hover:text-rose-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg font-black text-slate-900">{formatPrice(product.price)}</span>
          <span className="text-xs font-medium text-slate-400 line-through">{formatPrice(product.originalPrice)}</span>
        </div>
        
        <div className="text-xs font-bold text-emerald-500 mb-4 bg-emerald-50 w-fit px-2 py-0.5 rounded-md">
          Save {formatPrice(product.originalPrice - product.price)}
        </div>
        
        <div className="mt-auto">
          <button onClick={() => addToCart(product)}
            className="w-full py-2.5 rounded-full text-sm font-bold cursor-pointer border-none bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white hover:shadow-lg hover:shadow-rose-500/30 active:scale-95 transition-all flex justify-center items-center gap-2">
            <HiShoppingCart size={16} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
