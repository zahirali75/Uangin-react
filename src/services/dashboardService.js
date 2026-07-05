import {
  balance,
  monthlyStats,
  recentTransactions,
  topCategories,
  user,
} from '../data/dashboardData'

// Placeholder service. Nanti isi fungsi ini bisa diganti fetch ke backend.
export function getDashboardData() {
  return {
    user,
    balance,
    monthlyStats,
    recentTransactions,
    topCategories,
  }
}
