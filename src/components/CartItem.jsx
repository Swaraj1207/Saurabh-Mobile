import { HiTrash, HiPlus, HiMinus } from 'react-icons/hi'
import { formatPrice } from '../utils/formatPrice'
import { useCart } from '../utils/cartContext'
import { Link } from 'react-router-dom'

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 md:p-6 bg-white/80 backdrop-blur-md rounded-3xl border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] transition-shadow">
      <Link to={`/products/${item.id}`} className="shrink-0 w-full sm:w-auto">
        <div className="w-full sm:w-24 h-32 sm:h-24 bg-slate-50/80 rounded-2xl flex items-center justify-center p-2">
          <img src={item.images[0]} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
        </div>
      </Link>
      
      <div className="flex-1 min-w-0 w-full">
        <Link to={`/products/${item.id}`} className="no-underline">
          <h4 className="text-base font-bold text-slate-800 truncate hover:text-indigo-600 transition-colors">{item.name}</h4>
        </Link>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">{item.brand}</span>
          {item.condition === 'refurbished' && <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full uppercase">Refurbished</span>}
        </div>
        <div className="text-xl font-black mt-2 text-slate-900">{formatPrice(item.price)}</div>
      </div>
      
      <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0">
        <div className="flex items-center bg-slate-100/80 rounded-full p-1 border border-slate-200/50 mr-4 sm:mr-8">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer text-slate-600 hover:bg-white hover:shadow-sm transition-all border-none">
            <HiMinus size={14} />
          </button>
          <span className="w-8 text-center text-sm font-bold text-slate-800">{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer text-slate-600 hover:bg-white hover:shadow-sm transition-all border-none">
            <HiPlus size={14} />
          </button>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <div className="text-lg font-bold text-slate-800 hidden sm:block">{formatPrice(item.price * item.quantity)}</div>
          <button onClick={() => removeFromCart(item.id)}
            className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer border-none bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white hover:shadow-md transition-all">
            <HiTrash size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
