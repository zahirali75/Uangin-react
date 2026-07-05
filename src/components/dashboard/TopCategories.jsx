const toneClasses = {
  blue: {
    icon: 'bg-blue-100 text-blue-600',
    bar: 'bg-blue-400',
  },
  orange: {
    icon: 'bg-orange-100 text-orange-500',
    bar: 'bg-orange-400',
  },
  pink: {
    icon: 'bg-pink-100 text-pink-600',
    bar: 'bg-pink-500',
  },
  purple: {
    icon: 'bg-purple-100 text-purple-600',
    bar: 'bg-purple-500',
  },
  yellow: {
    icon: 'bg-yellow-100 text-yellow-600',
    bar: 'bg-yellow-400',
  },
}

export default function TopCategories({ categories }) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">
        Kategori Terbesar
      </div>

      <div className="space-y-4">
        {categories.map((category) => {
          const tone = toneClasses[category.tone]

          return (
            <article key={category.label}>
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-md text-xs ${tone.icon}`}
                  >
                    <i className={`ti ${category.icon}`}></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{category.label}</span>
                </div>
                <span className="text-xs font-bold text-gray-500">{category.amount}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div
                  className={`progress-bar h-2 rounded-full ${tone.bar}`}
                  style={{ width: `${category.percent}%` }}
                ></div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
