import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import AddTransactionPage from '../pages/AddTransactionPage'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'
import SavingsPage from '../pages/SavingsPage'
import StatisticsPage from '../pages/StatisticsPage'
import { getDashboardData } from '../services/dashboardService'
import { getSavingsGoals } from '../services/savingsService'
import { getInitialTransactions } from '../services/transactionService'

export default function AppRoutes() {
  const { user } = getDashboardData()
  const [transactions, setTransactions] = useState(getInitialTransactions())
  const [savingsGoals, setSavingsGoals] = useState(getSavingsGoals())

  function addTransaction(transaction) {
    setTransactions((currentTransactions) => [transaction, ...currentTransactions])
  }

  function addSavingsGoal(goal) {
    setSavingsGoals((currentGoals) => [goal, ...currentGoals])
  }

  function deleteSavingsGoal(goalId) {
    setSavingsGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== goalId))
  }

  function addFundsToGoal(goalId, amount) {
    setSavingsGoals((currentGoals) =>
      currentGoals.map((goal) => {
        if (goal.id !== goalId) {
          return goal
        }

        return {
          ...goal,
          collected: Math.min(goal.collected + amount, goal.target),
        }
      }),
    )
  }

  return (
    <Routes>
      <Route element={<LoginPage />} path="/" />
      <Route element={<AppLayout user={user} />} path="/">
        <Route element={<DashboardPage transactions={transactions} />} path="dashboard" />
        <Route element={<AddTransactionPage onAddTransaction={addTransaction} />} path="tambah" />
        <Route element={<StatisticsPage />} path="statistik" />
        <Route
          element={
            <SavingsPage
              goals={savingsGoals}
              onAddFunds={addFundsToGoal}
              onAddGoal={addSavingsGoal}
              onDeleteGoal={deleteSavingsGoal}
            />
          }
          path="tabungan"
        />
      </Route>
    </Routes>
  )
}
