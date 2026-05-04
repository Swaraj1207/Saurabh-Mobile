import { useState } from 'react'
import { HiPlus, HiPencil, HiTrash } from 'react-icons/hi'
import products from '../data/products'
import { formatPrice } from '../utils/formatPrice'
import AdminTable from './AdminTable'

const emptyForm = { name: '', price: '', category: 'mobiles', condition: 'new' }

export default function AdminProducts() {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [productList] = useState(products)

  const handleSubmit = (e) => { e.preventDefault(); alert('Product saved! (Firebase integration coming)'); setShowForm(false); setForm(emptyForm) }

  const columns = [
    { key: 'image', label: 'Image' },{ key: 'name', label: 'Name' },{ key: 'price', label: 'Price' },
    { key: 'category', label: 'Category' },{ key: 'condition', label: 'Condition' },{ key: 'actions', label: 'Actions' },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black mb-2 text-slate-800">Products</h1>
          <p className="text-sm font-medium text-slate-500">{productList.length} total products in store</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="px-6 py-3 rounded-full bg-indigo-600 text-white font-bold flex items-center gap-2 shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all">
          <HiPlus size={18} /> Add Product
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-indigo-50/50 rounded-[2rem] p-8 mb-8 border border-indigo-100 shadow-inner">
          <h3 className="text-xl font-black mb-6 text-indigo-900">Add New Product</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Product Name</label>
              <input type="text" required value={form.name} onChange={e => setForm({...form,name:e.target.value})}
                className="w-full py-3 px-4 rounded-xl text-sm bg-white border border-slate-200 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all font-medium text-slate-800" placeholder="Enter product name" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Price (₹)</label>
              <input type="number" required value={form.price} onChange={e => setForm({...form,price:e.target.value})}
                className="w-full py-3 px-4 rounded-xl text-sm bg-white border border-slate-200 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all font-medium text-slate-800" placeholder="Enter price" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Category</label>
              <select value={form.category} onChange={e => setForm({...form,category:e.target.value})}
                className="w-full py-3 px-4 rounded-xl text-sm bg-white border border-slate-200 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all font-medium text-slate-800 cursor-pointer">
                <option value="mobiles">Mobiles</option><option value="laptops">Laptops</option><option value="accessories">Accessories</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Condition</label>
              <div className="flex gap-6 mt-3">
                {['new','refurbished'].map(c => (
                  <label key={c} className="flex items-center gap-2 cursor-pointer text-sm font-bold text-slate-700">
                    <input type="radio" name="condition" value={c} checked={form.condition === c} onChange={e => setForm({...form,condition:e.target.value})} className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300" />
                    {c.charAt(0).toUpperCase()+c.slice(1)}
                  </label>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Image</label>
              <input type="file" accept="image/*" className="w-full py-3 px-4 rounded-xl text-sm bg-white border border-slate-200 cursor-pointer text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100 transition-all" />
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button type="submit" className="px-8 py-3 rounded-full font-bold bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition-colors">Save Product</button>
            <button type="button" onClick={() => setShowForm(false)} className="px-8 py-3 rounded-full font-bold bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors">Cancel</button>
          </div>
        </form>
      )}

      <AdminTable columns={columns} data={productList}
        renderRow={(product, i) => (
          <tr key={product.id} className="hover:bg-indigo-50/30 transition-colors">
            <td className="py-4 px-6">
              <div className="w-14 h-14 rounded-xl bg-slate-50 p-2 border border-slate-100 flex items-center justify-center">
                <img src={product.images[0]} alt="" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
            </td>
            <td className="py-4 px-6 text-sm font-bold text-slate-800">{product.name}</td>
            <td className="py-4 px-6 text-base font-black text-slate-900">{formatPrice(product.price)}</td>
            <td className="py-4 px-6">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 capitalize">{product.category}</span>
            </td>
            <td className="py-4 px-6">
              <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${product.condition === 'refurbished' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                {product.condition}
              </span>
            </td>
            <td className="py-4 px-6">
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors" onClick={() => alert('Edit: Firebase integration')}><HiPencil size={14} /></button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-rose-100 hover:text-rose-600 transition-colors" onClick={() => alert('Delete: Firebase integration')}><HiTrash size={14} /></button>
              </div>
            </td>
          </tr>
        )} />
    </div>
  )
}
