import { NavLink } from 'react-router-dom'
import { HiChartBar, HiCube, HiClipboardList, HiArrowLeft } from 'react-icons/hi'

const links = [
  { name: 'Dashboard', path: '/admin', icon: HiChartBar, end: true },
  { name: 'Products', path: '/admin/products', icon: HiCube },
  { name: 'Orders', path: '/admin/orders', icon: HiClipboardList },
]

export default function AdminSidebar() {
  return (
    <aside className="w-[260px] shrink-0 hidden lg:block">
      <div className="sticky top-28 bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-6 pb-4 border-b border-slate-200/50 text-indigo-500">
          Admin Panel
        </h3>
        
        <nav className="flex flex-col gap-2">
          {links.map(link => (
            <NavLink key={link.path} to={link.path} end={link.end} className="no-underline group outline-none"
              style={({ isActive }) => ({
                display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '16px',
                fontSize: '14px', fontWeight: isActive ? 700 : 600, transition: 'all 0.3s',
                color: isActive ? '#4f46e5' : '#64748b', 
                background: isActive ? '#eef2ff' : 'transparent',
              })}>
              <link.icon size={20} className="transition-transform group-hover:scale-110" />
              {link.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="mt-8 pt-6 border-t border-slate-200/50">
          <NavLink to="/" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors no-underline group outline-none p-2">
            <HiArrowLeft className="transition-transform group-hover:-translate-x-1" /> Back to Store
          </NavLink>
        </div>
      </div>
    </aside>
  )
}
