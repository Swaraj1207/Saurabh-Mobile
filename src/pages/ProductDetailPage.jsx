import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { HiShoppingCart, HiLightningBolt, HiArrowLeft, HiStar, HiTruck, HiShieldCheck, HiCreditCard, HiCurrencyRupee } from 'react-icons/hi'
import products from '../data/products'
import { formatPrice } from '../utils/formatPrice'
import { useCart } from '../utils/cartContext'
import RatingStars from '../components/RatingStars'

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [pincode, setPincode] = useState('')
  const [showPayment, setShowPayment] = useState(false)

  if (!product) return (
    <div className="pt-40 pb-20 text-center">
      <div className="text-6xl mb-6 opacity-50">😕</div>
      <h2 className="text-3xl font-bold mb-6 text-slate-800">Product Not Found</h2>
      <Link to="/products" className="btn-secondary inline-flex items-center gap-2">
        <HiArrowLeft /> Back to Products
      </Link>
    </div>
  )

  const handlePayment = (m) => { alert(`💡 ${m} — Payment integration coming soon!`); setShowPayment(false) }
  const specLabels = { ram:'RAM', storage:'Storage', camera:'Camera', battery:'Battery', display:'Display', processor:'Processor', type:'Type', connectivity:'Connectivity', driver:'Driver', anc:'ANC', output:'Output', cable:'Cable', material:'Material', capacity:'Capacity', ports:'Ports', weight:'Weight', waterproof:'Waterproof', features:'Features', pack:'Pack', hardness:'Hardness', length:'Length', compatibility:'Compatibility', graphics:'Graphics', os:'OS' }

  return (
    <main className="pt-28 sm:pt-36 pb-20 px-4">
      <div className="container-main max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2 mb-6 text-sm font-medium text-slate-500">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800 transition-colors">Home</Link>
          <span className="text-slate-300">/</span>
          <Link to="/products" className="text-indigo-600 hover:text-indigo-800 transition-colors">Products</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800">{product.name}</span>
        </div>

        <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-6 sm:p-10 border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Image Gallery */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[2rem] overflow-hidden bg-slate-50/50 flex items-center justify-center p-8 h-[400px] sm:h-[500px]">
                <img src={product.images[selectedImage]} alt={product.name}
                  className="w-full h-full object-contain cursor-zoom-in transition-transform duration-500 hover:scale-110 mix-blend-multiply" />
              </div>
              
              {product.images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                  {product.images.map((img, i) => (
                    <button key={i} onClick={() => setSelectedImage(i)} 
                      className={`shrink-0 w-20 h-20 rounded-2xl overflow-hidden cursor-pointer bg-slate-50 p-2 transition-all duration-300 ${i === selectedImage ? 'border-2 border-indigo-500 shadow-md scale-105' : 'border border-transparent hover:border-slate-300'}`}>
                      <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-bold uppercase tracking-widest text-indigo-500">{product.brand}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${product.condition === 'refurbished' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                  {product.condition}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-black mb-4 text-slate-800 leading-tight">{product.name}</h1>
              
              <div className="mb-6 flex items-center gap-4">
                <RatingStars rating={product.rating} size={18} showCount count={product.reviewCount} />
              </div>

              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">{formatPrice(product.price)}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-slate-400 line-through font-medium">{formatPrice(product.originalPrice)}</span>
                    <span className="text-lg font-bold text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">{product.discount}% off</span>
                  </>
                )}
              </div>
              <p className="text-sm mb-8 text-slate-500 font-medium">Inclusive of all taxes</p>

              {/* Offers - Card inside Card */}
              <div className="rounded-3xl p-6 mb-8 bg-indigo-50/50 border border-indigo-100/50">
                <h4 className="text-base font-bold mb-4 text-indigo-900">Available Offers</h4>
                <div className="flex flex-col gap-3">
                  {product.bankOffer && (
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-200/50 text-indigo-600 shrink-0"><HiCreditCard size={14}/></span>
                      <span className="text-sm text-slate-700 font-medium">{product.bankOffer}</span>
                    </div>
                  )}
                  {product.emi && (
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-200/50 text-indigo-600 shrink-0"><HiCurrencyRupee size={14}/></span>
                      <span className="text-sm text-slate-700 font-medium">EMI starting from {product.emi}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Delivery Checker */}
              <div className="mb-8">
                <h4 className="text-base font-bold mb-4 text-slate-800">Check Delivery</h4>
                <div className="flex gap-3">
                  <input type="text" maxLength={6} value={pincode} onChange={e => setPincode(e.target.value.replace(/\D/g,''))}
                    placeholder="Enter pincode" className="flex-1 max-w-[200px] py-3 px-5 text-sm bg-slate-50 border border-slate-200 rounded-full outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all font-medium" />
                  <button className="px-6 py-3 text-sm font-bold rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors shadow-md">
                    Check
                  </button>
                </div>
                {product.deliveryInfo && (
                  <div className="flex items-center gap-2 mt-3 text-sm font-semibold text-emerald-600">
                    <HiTruck size={18} />{product.deliveryInfo}
                  </div>
                )}
              </div>

              {/* Specs */}
              <div className="mb-8">
                <h4 className="text-base font-bold mb-4 text-slate-800">Key Specifications</h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div key={k} className="py-3 px-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-center">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">{specLabels[k] || k}</span>
                      <span className="text-sm font-bold text-slate-700">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-base mb-10 leading-relaxed text-slate-600">{product.description}</p>

              {/* Quantity + Buttons */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-base font-bold text-slate-700">Quantity</span>
                <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-slate-600 hover:bg-white hover:shadow-sm transition-all">
                    −
                  </button>
                  <span className="w-10 text-center font-bold text-slate-800">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-slate-600 hover:bg-white hover:shadow-sm transition-all">
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button onClick={() => { for(let i=0;i<quantity;i++) addToCart(product) }} className="flex-1 py-4 rounded-full flex items-center justify-center gap-3 text-base font-bold transition-all bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:-translate-y-1">
                  <HiShoppingCart size={20} /> Add to Cart
                </button>
                <button onClick={() => setShowPayment(true)} className="flex-1 py-4 rounded-full flex items-center justify-center gap-3 text-base font-bold transition-all bg-indigo-600 text-white shadow-[0_10px_20px_rgba(79,70,229,0.3)] hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(79,70,229,0.4)]">
                  <HiLightningBolt size={20} /> Buy Now
                </button>
              </div>

              <div className="flex items-center gap-6 mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <span className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500"><HiShieldCheck size={18} /></span> 
                  Brand Warranty
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <span className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500"><HiTruck size={18} /></span> 
                  Free Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setShowPayment(false)}>
          <div className="w-full max-w-sm bg-white rounded-[2rem] p-8 shadow-2xl transition-transform"
            onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-black mb-2 text-slate-800">Payment Method</h3>
            <p className="text-sm font-bold mb-8 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl w-fit">Total: {formatPrice(product.price * quantity)}</p>
            <div className="flex flex-col gap-4">
              <button onClick={() => handlePayment('Pay Now')} className="w-full py-4 rounded-full font-bold bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                <HiCreditCard size={20}/> Pay Now
              </button>
              <button onClick={() => handlePayment('Cash on Delivery')} className="w-full py-4 rounded-full font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                📦 Cash on Delivery
              </button>
            </div>
            <button onClick={() => setShowPayment(false)} className="w-full mt-6 py-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">Cancel</button>
          </div>
        </div>
      )}
    </main>
  )
}
