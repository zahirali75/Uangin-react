export default function SavingsSummary({ goals }) {
  const totalCollected = goals.reduce((total, goal) => total + goal.collected, 0)
  const totalTarget = goals.reduce((total, goal) => total + goal.target, 0)
  const remaining = Math.max(totalTarget - totalCollected, 0)

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <article className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
        <div className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-400">
          Total Target
        </div>
        <div className="text-xl font-extrabold text-gray-900">{goals.length} Target</div>
      </article>
      <article className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
        <div className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-400">
          Terkumpul
        </div>
        <div className="text-xl font-extrabold text-green-600">{formatCurrency(totalCollected)}</div>
      </article>
      <article className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
        <div className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-400">
          Sisa Target
        </div>
        <div className="text-xl font-extrabold text-orange-500">{formatCurrency(remaining)}</div>
      </article>
    </div>
  )
}

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    currency: 'IDR',
    maximumFractionDigits: 0,
    style: 'currency',
  })
    .format(value)
    .replace('IDR', 'Rp')
}
