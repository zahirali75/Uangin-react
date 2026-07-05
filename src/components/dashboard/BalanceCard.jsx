export default function BalanceCard({ balance }) {
  return (
    <section className="balance-gradient relative mb-6 overflow-hidden rounded-3xl p-7 text-white shadow-2xl shadow-green-900/30">
      <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/10"></div>
      <div className="pointer-events-none absolute -bottom-14 right-24 h-36 w-36 rounded-full bg-white/5"></div>

      <div className="relative z-10 mb-1 flex items-start justify-between">
        <span className="text-sm font-medium text-white/70">Saldo Saat Ini</span>
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {balance.month}
        </span>
      </div>

      <div className="relative z-10 mb-6 text-5xl font-extrabold tracking-tight">
        {balance.current}
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <BalanceMiniCard
          amount={balance.income.amount}
          icon="ti-arrow-down-left"
          iconClassName="bg-green-300/30 text-green-200"
          label={balance.income.label}
          trend={balance.income.trend}
          trendIcon="ti-trending-up"
          trendClassName="text-green-300"
        />
        <BalanceMiniCard
          amount={balance.expense.amount}
          icon="ti-arrow-up-right"
          iconClassName="bg-red-300/30 text-red-200"
          label={balance.expense.label}
          trend={balance.expense.trend}
          trendIcon="ti-trending-down"
          trendClassName="text-red-300"
        />
      </div>
    </section>
  )
}

function BalanceMiniCard({
  amount,
  icon,
  iconClassName,
  label,
  trend,
  trendClassName,
  trendIcon,
}) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur">
      <div className="mb-2 flex items-center gap-2">
        <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${iconClassName}`}>
          <i className={`ti ${icon} text-base`}></i>
        </div>
        <span className="text-xs font-medium text-white/75">{label}</span>
      </div>
      <div className="text-2xl font-extrabold text-white">{amount}</div>
      <div className="mt-1 flex items-center gap-1 text-xs text-white/60">
        <i className={`ti ${trendIcon} ${trendClassName}`}></i>
        {trend}
      </div>
    </div>
  )
}
