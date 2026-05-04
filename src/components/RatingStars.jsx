import { HiStar } from 'react-icons/hi'

export default function RatingStars({ rating = 0, size = 14, showCount = false, count = 0 }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="rating-badge" style={{ fontSize: `${size - 2}px` }}>
        {rating.toFixed(1)} <HiStar size={size - 4} />
      </span>
      {showCount && <span className="text-xs" style={{ color: '#878787' }}>({count.toLocaleString()})</span>}
    </div>
  )
}
