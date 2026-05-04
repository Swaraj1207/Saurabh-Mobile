import AdminTable from './AdminTable'

const dummyOrders = [
  { id: 'ORD-001', customer: 'Rahul Sharma', amount: 129999, status: 'Delivered', date: '2026-04-28' },
  { id: 'ORD-002', customer: 'Priya Patel', amount: 59900, status: 'Shipped', date: '2026-04-30' },
  { id: 'ORD-003', customer: 'Amit Kumar', amount: 24900, status: 'Pending', date: '2026-05-01' },
  { id: 'ORD-004', customer: 'Sneha Reddy', amount: 74999, status: 'Delivered', date: '2026-04-25' },
  { id: 'ORD-005', customer: 'Vikram Singh', amount: 33999, status: 'Shipped', date: '2026-05-02' },
  { id: 'ORD-006', customer: 'Anita Desai', amount: 159900, status: 'Pending', date: '2026-05-03' },
  { id: 'ORD-007', customer: 'Rajesh Gupta', amount: 4999, status: 'Delivered', date: '2026-04-22' },
  { id: 'ORD-008', customer: 'Meera Nair', amount: 49999, status: 'Shipped', date: '2026-05-04' },
]

const statusColors = {
  Pending: { bg: 'bg-amber-100', text: 'text-amber-700' },
  Shipped: { bg: 'bg-indigo-100', text: 'text-indigo-700' },
  Delivered: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
}

const columns = [
  { key: 'id', label: 'Order ID' },{ key: 'customer', label: 'Customer' },{ key: 'amount', label: 'Amount' },
  { key: 'status', label: 'Status' },{ key: 'date', label: 'Date' },{ key: 'actions', label: 'Actions' },
]

export default function AdminOrders() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black mb-2 text-slate-800">Orders</h1>
        <p className="text-sm font-medium text-slate-500">{dummyOrders.length} total orders</p>
      </div>

      <AdminTable columns={columns} data={dummyOrders}
        renderRow={(order, i) => (
          <tr key={order.id} className="hover:bg-indigo-50/30 transition-colors">
            <td className="py-4 px-6 text-sm font-black tracking-wider text-indigo-500">{order.id}</td>
            <td className="py-4 px-6 text-sm font-bold text-slate-800">{order.customer}</td>
            <td className="py-4 px-6 text-base font-black text-slate-900">₹{order.amount.toLocaleString('en-IN')}</td>
            <td className="py-4 px-6">
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${statusColors[order.status].bg} ${statusColors[order.status].text}`}>
                {order.status}
              </span>
            </td>
            <td className="py-4 px-6 text-sm font-medium text-slate-500">{order.date}</td>
            <td className="py-4 px-6">
              <button className="px-4 py-2 bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 text-xs font-bold rounded-full transition-colors"
                onClick={() => alert('Order details: Firebase integration')}>
                View Details
              </button>
            </td>
          </tr>
        )} />
    </div>
  )
}
