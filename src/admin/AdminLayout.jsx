import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

export default function AdminLayout() {
  return (
    <main className="pt-28 sm:pt-36 pb-20 px-4">
      <div className="container-main max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <AdminSidebar />
          <div className="flex-1 min-w-0">
            <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-10 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.02)] min-h-[600px]">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
