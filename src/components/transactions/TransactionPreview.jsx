export default function TransactionPreview({ transactions }) {
  if (transactions.length === 0) {
    return null
  }

  return (
    <section className="mt-5">
      <div className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
        Baru Ditambahkan
      </div>
      <div className="space-y-2">
        {transactions.map((transaction) => (
          <article
            className="flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 p-3"
            key={transaction.id}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-700">
              <i className="ti ti-check text-sm"></i>
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-800">
                {transaction.description || 'Transaksi baru ditambahkan'}
              </div>
              <div className="text-xs text-gray-400">{formatDate(transaction.savedAt)}</div>
            </div>
            <div className="text-sm font-bold text-green-600">Tersimpan</div>
          </article>
        ))}
      </div>
    </section>
  )
}

function formatDate(date) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}
