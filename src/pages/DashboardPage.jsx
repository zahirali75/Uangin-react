import BalanceCard from '../components/dashboard/BalanceCard'
import MonthlyStats from '../components/dashboard/MonthlyStats'
import RecentTransactions from '../components/dashboard/RecentTransactions'
import TopCategories from '../components/dashboard/TopCategories'
import { getDashboardData } from '../services/dashboardService'
import {
  formatCurrency,
  formatInputDate,
  formatShortCurrency,
  formatSignedCurrency,
} from '../utils/finance'

export default function DashboardPage({ transactions }) {
  const { topCategories, balance: defaultBalance } = getDashboardData()
  const dashboardData = buildDashboardData(transactions, defaultBalance.month)

  return (
    <>
      <BalanceCard balance={dashboardData.balance} />
      <MonthlyStats stats={dashboardData.monthlyStats} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_300px]">
        <RecentTransactions transactions={dashboardData.recentTransactions} />
        <TopCategories categories={buildTopCategories(transactions, topCategories)} />
      </div>
    </>
  )
}

function buildDashboardData(transactions, month) {
  const incomeTransactions = transactions.filter((transaction) => transaction.type === 'income')
  const expenseTransactions = transactions.filter((transaction) => transaction.type === 'expense')
  const totalIncome = sumAmounts(incomeTransactions)
  const totalExpense = sumAmounts(expenseTransactions)
  const currentBalance = totalIncome - totalExpense

  return {
    balance: {
      month,
      current: formatCurrency(currentBalance),
      income: {
        label: 'Total Pemasukan',
        amount: formatCurrency(totalIncome),
        trend: '+12% dari bulan lalu',
      },
      expense: {
        label: 'Total Pengeluaran',
        amount: formatCurrency(totalExpense),
        trend: '-5% dari bulan lalu',
      },
    },
    monthlyStats: [
      {
        label: 'Pemasukan',
        amount: formatCurrency(totalIncome),
        detail: `${incomeTransactions.length} transaksi`,
        icon: 'ti-trending-up',
        tone: 'green',
      },
      {
        label: 'Pengeluaran',
        amount: formatCurrency(totalExpense),
        detail: `${expenseTransactions.length} transaksi`,
        icon: 'ti-trending-down',
        tone: 'red',
      },
      {
        label: 'Transaksi',
        amount: String(transactions.length),
        detail: month,
        icon: 'ti-receipt',
        tone: 'blue',
      },
    ],
    recentTransactions: transactions.slice(0, 5).map((transaction) => ({
      title: transaction.description,
      category: transaction.category,
      date: formatInputDate(transaction.date),
      amount: formatSignedCurrency(transaction.amount, transaction.type),
      type: transaction.type,
      icon: transaction.icon,
    })),
  }
}

function buildTopCategories(transactions, fallbackCategories) {
  const expenseTransactions = transactions.filter((transaction) => transaction.type === 'expense')
  const totalExpense = sumAmounts(expenseTransactions)

  if (totalExpense === 0) {
    return fallbackCategories
  }

  const categoryTotals = expenseTransactions.reduce((totals, transaction) => {
    totals[transaction.category] = (totals[transaction.category] ?? 0) + transaction.amount
    return totals
  }, {})

  return Object.entries(categoryTotals)
    .sort(([, firstAmount], [, secondAmount]) => secondAmount - firstAmount)
    .slice(0, 5)
    .map(([label, amount], index) => ({
      label,
      amount: formatShortCurrency(amount),
      percent: Math.max(Math.round((amount / totalExpense) * 100), 4),
      icon: fallbackCategories[index]?.icon ?? 'ti-receipt',
      tone: fallbackCategories[index]?.tone ?? 'blue',
    }))
}

function sumAmounts(transactions) {
  return transactions.reduce((total, transaction) => total + transaction.amount, 0)
}
