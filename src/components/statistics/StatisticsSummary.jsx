export default function StatisticsSummary({ items }) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <article
          className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm"
          key={item.label}
        >
          <div className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-400">
            {item.label}
          </div>
          <div className={`text-2xl font-extrabold ${item.className}`}>{item.amount}</div>
        </article>
      ))}
    </div>
  )
}
