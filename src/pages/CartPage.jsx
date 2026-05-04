import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiArrowLeft, HiShieldCheck, HiTruck, HiCreditCard } from 'react-icons/hi'
import CartItem from '../components/CartItem'
import { useCart } from '../utils/cartContext'
import { formatPrice } from '../utils/formatPrice'

export default function CartPage() {
  const { cart, cartTotal, clearCart } = useCart()
  const [coupon, setCoupon] = useState('')
  const [discount, setDiscount] = useState(0)
  const [showPayment, setShowPayment] = useState(false)

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'SAVE10') { setDiscount(Math.round(cartTotal * 0.1)); alert('Coupon applied! 10% off') }
    else if (coupon.toUpperCase() === 'FLAT500') { setDiscount(500); alert('Coupon applied! ₹500 off') }
    else alert('Invalid coupon code')
  }
  const finalTotal = Math.max(0, cartTotal - discount)
  const delivery = cartTotal >= 999 ? 0 : 99
  const handlePayment = (m) => { alert(`${m} — Payment integration coming soon!`); setShowPayment(false); clearCart() }

  if (cart.length === 0) return (
    <main className="pt-32 pb-20 px-4">
      <div className="container-main max-w-[800px] mx-auto text-center py-20 bg-white/70 backdrop-blur-xl rounded-[3rem] border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.03)]">
        <div className="w-32 h-32 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mb-6">
          <span className="text-6xl opacity-80">🛒</span>
        </div>
        <h2 className="text-3xl font-black mb-4 text-slate-800">Your cart is empty</h2>
        <p className="text-base text-slate-500 mb-8 max-w-sm mx-auto">Looks like you haven't added anything to your cart yet. Let's change that!</p>
        <Link to="/products">
          <button className="px-8 py-4 rounded-full font-bold bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all hover:-translate-y-1">
            Start Shopping →
          </button>
        </Link>
      </div>
    </main>
  )

  return (
    <main className="pt-28 sm:pt-36 pb-20 px-4">
      <div className="container-main max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2 mb-8 text-sm font-medium text-slate-500">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800 transition-colors">Home</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800">Cart ({cart.length} items)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <h1 className="text-2xl font-black text-slate-800">Shopping Cart</h1>
              <span className="text-sm font-bold text-slate-500">{cart.length} Items</span>
            </div>
            {cart.map(item => <CartItem key={item.id} item={item} />)}
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-28 bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              <h3 className="text-xl font-black mb-6 text-slate-800">Order Summary</h3>
              
              <div className="flex flex-col gap-4 text-sm font-medium">
                <div className="flex justify-between items-center"><span className="text-slate-500">Subtotal ({cart.length} items)</span><span className="text-slate-800 text-base">{formatPrice(cartTotal)}</span></div>
                <div className="flex justify-between items-center"><span className="text-slate-500">Delivery Charges</span><span className={`text-base font-bold ${delivery === 0 ? 'text-emerald-500' : 'text-slate-800'}`}>{delivery === 0 ? 'FREE' : formatPrice(delivery)}</span></div>
                {discount > 0 && <div className="flex justify-between items-center"><span className="text-slate-500">Coupon Discount</span><span className="text-emerald-500 font-bold text-base">-{formatPrice(discount)}</span></div>}
                
                <div className="flex justify-between items-center font-black text-lg pt-4 mt-2 border-t border-slate-200 text-slate-900">
                  <span>Total Amount</span>
                  <span>{formatPrice(finalTotal + delivery)}</span>
                </div>
                {discount > 0 && <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-xl text-center mt-2 border border-emerald-100">You will save {formatPrice(discount)} on this order</div>}
              </div>

              {/* Coupon */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-sm font-bold mb-3 text-slate-800">Promo Code</p>
                <div className="flex gap-2">
                  <input type="text" value={coupon} onChange={e => setCoupon(e.target.value)} placeholder="Enter code"
                    className="flex-1 py-3 px-4 text-sm bg-slate-50 border border-slate-200 rounded-full outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all font-medium text-slate-800 uppercase" />
                  <button onClick={applyCoupon} className="px-6 py-3 text-sm font-bold rounded-full cursor-pointer border-none bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-colors">
                    Apply
                  </button>
                </div>
                <p className="text-[11px] font-medium mt-2 text-slate-400 pl-2">Try codes: <span className="text-indigo-500">SAVE10</span>, <span className="text-indigo-500">FLAT500</span></p>
              </div>

              <button onClick={() => setShowPayment(true)} className="w-full mt-8 py-4 rounded-full font-bold bg-slate-900 text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:bg-slate-800 hover:-translate-y-1 transition-all">
                Proceed to Checkout
              </button>

              <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-slate-100">
                <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500"><HiShieldCheck size={16} className="text-emerald-500" /> Secure</span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500"><HiTruck size={16} className="text-indigo-500" /> Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md"
          onClick={() => setShowPayment(false)}>
          <div className="w-full max-w-sm bg-white rounded-[2rem] p-8 shadow-2xl transition-transform" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-black mb-2 text-slate-800">Select Payment</h3>
            <p className="text-sm font-bold mb-8 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl w-fit">Total Payable: {formatPrice(finalTotal + delivery)}</p>
            
            <div className="flex flex-col gap-4">
              <button onClick={() => handlePayment('Pay Now')} className="w-full py-4 rounded-full font-bold bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                <HiCreditCard size={20}/> Pay Now
              </button>
              <button onClick={() => handlePayment('Cash on Delivery')} className="w-full py-4 rounded-full font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                📦 Cash on Delivery
              </button>
            </div>
            
            <button onClick={() => setShowPayment(false)} className="w-full mt-6 py-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
