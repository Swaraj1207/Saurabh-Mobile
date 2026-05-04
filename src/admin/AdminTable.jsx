export default function AdminTable({ columns, data, renderRow }) {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-white/60">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200/60">
              {columns.map(col => (
                <th key={col.key} className="text-left text-xs font-black uppercase tracking-wider py-4 px-6 text-slate-500">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100/80">
            {data.map((item, i) => renderRow(item, i))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
