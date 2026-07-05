import { Link } from 'react-router-dom'

export default function RecentTransactions({ transactions }) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm font-bold uppercase tracking-widest text-gray-500">
          Transaksi Terbaru
        </div>
        <Link className="text-xs font-semibold text-green-600 hover:underline" to="/tambah">
          + Tambah
        </Link>
      </div>

      <div className="space-y-2">
        {transactions.map((transaction) => {
          const isIncome = transaction.type === 'income'

          return (
            <article
              className={[
                'flex cursor-pointer items-center gap-3 rounded-xl bg-gray-50 p-3 transition',
                isIncome ? 'hover:bg-green-50' : 'hover:bg-red-50',
              ].join(' ')}
              key={`${transaction.title}-${transaction.date}`}
            >
              <div
                className={[
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg',
                  isIncome ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-500',
                ].join(' ')}
              >
                <i className={`ti ${transaction.icon}`}></i>
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-gray-900">
                  {transaction.title}
                </div>
                <div className="text-xs text-gray-400">
                  {transaction.category} - {transaction.date}
                </div>
              </div>
              <div
                className={[
                  'shrink-0 text-sm font-bold',
                  isIncome ? 'text-green-600' : 'text-red-500',
                ].join(' ')}
              >
                {transaction.amount}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
