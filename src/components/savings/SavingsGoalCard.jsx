export default function SavingsGoalCard({ goal, onAddFunds, onDelete }) {
  const percentage = goal.target > 0 ? Math.min(Math.round((goal.collected / goal.target) * 100), 100) : 0
  const remaining = Math.max(goal.target - goal.collected, 0)
  const isAlmostDone = percentage >= 80

  return (
    <article
      className={[
        goal.gradient,
        'relative overflow-hidden rounded-2xl p-5 text-white shadow-xl',
        goal.shadow,
        goal.featured ? 'md:col-span-2' : '',
      ].join(' ')}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10"></div>

      <div className="relative z-10 mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl">
            <i className={`ti ${goal.icon}`}></i>
          </div>
          <div>
            <div className="text-lg font-bold">{goal.name}</div>
            <div className="text-xs text-white/60">
              Target: {formatCurrency(goal.target)}
              {goal.deadline ? ` - Deadline: ${goal.deadline}` : ''}
            </div>
          </div>
        </div>
        <button
          aria-label={`Hapus ${goal.name}`}
          className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 transition hover:bg-white/30"
          onClick={() => onDelete(goal.id)}
          type="button"
        >
          <i className="ti ti-trash text-sm"></i>
        </button>
      </div>

      <div className="relative z-10 mb-1">
        <div className="mb-1.5 flex justify-between text-xs">
          <span className="text-white/75">Terkumpul: {formatCurrency(goal.collected)}</span>
          <span className={isAlmostDone ? 'font-bold text-yellow-300' : 'font-bold'}>
            {percentage}%{isAlmostDone ? ' Hampir tercapai!' : ''}
          </span>
        </div>
        <div className={`w-full rounded-full bg-white/20 ${isAlmostDone ? 'h-3' : 'h-2.5'}`}>
          <div
            className={[
              'progress-bar rounded-full',
              isAlmostDone ? 'h-3 bg-yellow-300' : 'h-2.5 bg-white',
            ].join(' ')}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 mb-4 text-xs text-white/60">
        Sisa: {formatCurrency(remaining)}
      </div>
      <button
        className="relative z-10 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/30 bg-white/20 py-2 text-sm font-bold transition hover:bg-white/30"
        onClick={() => onAddFunds(goal.id)}
        type="button"
      >
        <i className="ti ti-plus"></i>
        Tambah Dana
      </button>
    </article>
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
