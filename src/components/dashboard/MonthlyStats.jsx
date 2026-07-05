const toneClasses = {
  blue: {
    icon: 'bg-blue-50 text-blue-500',
    detail: 'text-blue-500',
    detailIcon: 'ti-calendar',
  },
  green: {
    icon: 'bg-green-50 text-green-600',
    detail: 'text-green-600',
    detailIcon: 'ti-arrow-up',
  },
  red: {
    icon: 'bg-red-50 text-red-500',
    detail: 'text-red-500',
    detailIcon: 'ti-arrow-down',
  },
}

export default function MonthlyStats({ stats }) {
  return (
    <section className="mb-6">
      <div className="mb-3">
        <h2 className="flex items-center gap-2 text-base font-bold text-gray-700">
          <i className="ti ti-calendar-stats text-green-500"></i>
          Statistik Bulan Ini
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((item) => {
          const tone = toneClasses[item.tone]

          return (
            <article
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
              key={item.label}
            >
              <div
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-xl ${tone.icon}`}
              >
                <i className={`ti ${item.icon}`}></i>
              </div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                {item.label}
              </div>
              <div className="text-xl font-extrabold text-gray-900">{item.amount}</div>
              <div className={`mt-2 flex items-center gap-1 text-xs font-medium ${tone.detail}`}>
                <i className={`ti ${tone.detailIcon}`}></i>
                {item.detail}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
