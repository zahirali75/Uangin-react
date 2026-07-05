export default function MonthTabs({ activeMonth, months, onChange }) {
  return (
    <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto pb-1">
      {months.map((month) => {
        const isActive = month === activeMonth

        return (
          <button
            className={[
              'shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold transition',
              isActive
                ? 'border-green-500 bg-green-500 text-white'
                : 'border-gray-200 bg-white text-gray-400 hover:border-green-400',
            ].join(' ')}
            key={month}
            onClick={() => onChange(month)}
            type="button"
          >
            {month}
          </button>
        )
      })}
    </div>
  )
}
