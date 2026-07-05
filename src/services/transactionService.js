import { categoryIcons, initialTransactions, transactionCategories } from '../data/transactionData'

export function getTransactionCategories(type) {
  return transactionCategories[type] ?? []
}

export function getInitialTransactions() {
  return initialTransactions
}

// Placeholder service. Nanti fungsi ini bisa diganti menjadi POST ke backend.
export function saveTransaction(transaction) {
  return {
    id: crypto.randomUUID(),
    savedAt: new Date().toISOString(),
    ...transaction,
    amount: Number(transaction.amount || 0),
    description: transaction.description || 'Transaksi baru',
    icon: categoryIcons[transaction.category] ?? 'ti-receipt',
  }
}
