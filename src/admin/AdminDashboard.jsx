import { HiCurrencyRupee, HiCube, HiClipboardList, HiUsers } from 'react-icons/hi'

const stats = [
  { title: 'Total Revenue', value: '₹24,56,890', change: '+12.5%', icon: HiCurrencyRupee, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { title: 'Total Orders', value: '1,247', change: '+8.2%', icon: HiClipboardList, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { title: 'Total Products', value: '30', change: '+3', icon: HiCube, color: 'text-rose-600', bg: 'bg-rose-50' },
  { title: 'Active Users', value: '3,892', change: '+15.3%', icon: HiUsers, color: 'text-amber-600', bg: 'bg-amber-50' },
]

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-black mb-2 text-slate-800">Dashboard</h1>
      <p className="text-base text-slate-500 mb-8 font-medium">Overview of your store performance</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {stats.map(stat => (
          <div key={stat.title} className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 shadow-sm">{stat.change}</span>
            </div>
            <div className="text-3xl font-black mb-1 text-slate-800">{stat.value}</div>
            <div className="text-sm font-semibold text-slate-500">{stat.title}</div>
          </div>
        ))}
      </div>
      
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 text-center border border-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] h-[350px] flex flex-col items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 -z-10"></div>
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500 opacity-80">📊</div>
        <h3 className="text-xl font-bold mb-2 text-slate-800">Revenue Analytics</h3>
        <p className="text-slate-500 font-medium max-w-md mx-auto">Detailed chart visualization will be available once the backend integration is complete.</p>
      </div>
    </div>
  )
}
