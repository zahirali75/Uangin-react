const types = [
  {
    value: 'income',
    label: 'Pemasukan',
    icon: 'ti-arrow-down-left',
    activeClassName: 'border-green-500 bg-green-50 text-green-700',
  },
  {
    value: 'expense',
    label: 'Pengeluaran',
    icon: 'ti-arrow-up-right',
    activeClassName: 'border-red-400 bg-red-50 text-red-600',
  },
]

export default function TransactionTypeToggle({ type, onChange }) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-400">
        Jenis Transaksi
      </label>
      <div className="flex gap-2">
        {types.map((item) => {
          const isActive = item.value === type

          return (
            <button
              className={[
                'flex flex-1 items-center justify-center gap-2 rounded-xl border-2 py-3 text-sm font-bold transition',
                isActive
                  ? item.activeClassName
                  : 'border-gray-200 bg-gray-50 text-gray-400',
              ].join(' ')}
              key={item.value}
              onClick={() => onChange(item.value)}
              type="button"
            >
              <i className={`ti ${item.icon}`}></i>
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
