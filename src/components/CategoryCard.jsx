import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  return (
    <Link to={category.id === 'refurbished' ? '/products?condition=refurbished' : `/products?category=${category.id}`}
      className="no-underline group outline-none">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Bubble icon container */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_10px_20px_rgba(0,0,0,0.03)] flex items-center justify-center text-4xl sm:text-5xl group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-all duration-300">
          {category.icon}
        </div>
        
        {/* Label */}
        <div className="text-center">
          <h3 className="text-sm sm:text-base font-bold text-slate-700 group-hover:text-indigo-600 transition-colors mb-0.5">{category.name}</h3>
          <p className="text-[11px] sm:text-xs font-medium text-slate-400">{category.count} Items</p>
        </div>
      </div>
    </Link>
  )
}
