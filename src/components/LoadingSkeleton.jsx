export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden" style={{ border: '1px solid #e0e0e0' }}>
      <div className="skeleton h-48 w-full" />
      <div className="p-3 flex flex-col gap-2.5">
        <div className="skeleton h-3 w-2/3" />
        <div className="skeleton h-3 w-full" />
        <div className="skeleton h-5 w-24" />
        <div className="skeleton h-3 w-1/2" />
        <div className="skeleton h-8 w-full rounded-md" />
      </div>
    </div>
  )
}
export function ProductDetailSkeleton() {
  return (
    <div className="container-main py-8" style={{ marginTop: '120px' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg p-6">
        <div className="skeleton h-[400px] rounded-lg" />
        <div className="flex flex-col gap-3">
          <div className="skeleton h-6 w-3/4" /><div className="skeleton h-4 w-1/3" />
          <div className="skeleton h-8 w-40" /><div className="skeleton h-3 w-full" />
          <div className="skeleton h-3 w-full" /><div className="skeleton h-3 w-2/3" />
          <div className="flex gap-3 mt-4"><div className="skeleton h-12 w-40 rounded-md" /><div className="skeleton h-12 w-40 rounded-md" /></div>
        </div>
      </div>
    </div>
  )
}
export function TableRowSkeleton({ cols = 6 }) {
  return (<tr>{[...Array(cols)].map((_, i) => <td key={i} className="p-3"><div className="skeleton h-4 w-full" /></td>)}</tr>)
}
