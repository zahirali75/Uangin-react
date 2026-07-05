import {
  expenseCategoryChart,
  incomeExpenseChart,
  monthlyIncomeDetails,
  months,
  statisticsSummary,
} from '../data/statisticsData'

// Placeholder service agar nanti data statistik mudah dipindah ke backend.
export function getStatisticsData() {
  return {
    months,
    activeMonth: 'Jun',
    statisticsSummary,
    incomeExpenseChart,
    expenseCategoryChart,
    monthlyIncomeDetails,
  }
}
