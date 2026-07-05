export default function MonthlyIncomeDetails({ items }) {
  return (
    <section className="mt-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">
        Detail Pemasukan Bulan Ini
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <article
            className="flex items-center justify-between rounded-xl bg-green-50 p-3"
            key={`${item.source}-${item.date}`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-700">
                <i className={`ti ${item.icon} text-sm`}></i>
              </div>
              <div>
                <div className="text-sm font-semibold">{item.source}</div>
                <div className="text-xs text-gray-400">{item.date}</div>
              </div>
            </div>
            <div className="text-sm font-bold text-green-600">{item.amount}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
