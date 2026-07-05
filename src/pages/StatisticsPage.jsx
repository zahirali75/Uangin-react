import { useState } from 'react'
import ExpenseCategoryChart from '../components/statistics/ExpenseCategoryChart'
import IncomeExpenseChart from '../components/statistics/IncomeExpenseChart'
import MonthTabs from '../components/statistics/MonthTabs'
import MonthlyIncomeDetails from '../components/statistics/MonthlyIncomeDetails'
import StatisticsSummary from '../components/statistics/StatisticsSummary'
import { getStatisticsData } from '../services/statisticsService'

export default function StatisticsPage() {
  const {
    activeMonth,
    expenseCategoryChart,
    incomeExpenseChart,
    monthlyIncomeDetails,
    months,
    statisticsSummary,
  } = getStatisticsData()
  const [selectedMonth, setSelectedMonth] = useState(activeMonth)

  return (
    <>
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Statistik Bulanan</h1>
          <p className="mt-1 text-sm text-gray-500">Ringkasan keuangan per bulan</p>
        </div>
      </div>

      <MonthTabs activeMonth={selectedMonth} months={months} onChange={setSelectedMonth} />
      <StatisticsSummary items={statisticsSummary} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <IncomeExpenseChart data={incomeExpenseChart} />
        <ExpenseCategoryChart data={expenseCategoryChart} />
      </div>

      <MonthlyIncomeDetails items={monthlyIncomeDetails} />
    </>
  )
}
