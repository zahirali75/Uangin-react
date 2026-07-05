import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import TransactionForm from '../components/transactions/TransactionForm'
import TransactionPreview from '../components/transactions/TransactionPreview'
import { getTransactionCategories, saveTransaction } from '../services/transactionService'

function getTodayInputValue() {
  return new Date().toISOString().split('T')[0]
}

const initialForm = {
  type: 'income',
  description: '',
  amount: '',
  category: '',
  date: getTodayInputValue(),
  note: '',
}

export default function AddTransactionPage({ onAddTransaction }) {
  const { showToast } = useOutletContext()
  const [form, setForm] = useState(initialForm)
  const [newTransactions, setNewTransactions] = useState([])

  const categories = getTransactionCategories(form.type)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function handleTypeChange(type) {
    setForm((currentForm) => ({
      ...currentForm,
      type,
      category: '',
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (Number(form.amount || 0) <= 0) {
      showToast('Masukkan nominal transaksi terlebih dahulu.')
      return
    }

    const savedTransaction = saveTransaction(form)
    onAddTransaction(savedTransaction)
    setNewTransactions((currentTransactions) => [savedTransaction, ...currentTransactions])
    setForm({ ...initialForm, type: form.type, date: getTodayInputValue() })
    showToast('Transaksi berhasil disimpan!')
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900">Tambah Transaksi</h1>
        <p className="mt-1 text-sm text-gray-500">Catat pemasukan atau pengeluaranmu</p>
      </div>

      <TransactionForm
        categories={categories}
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onTypeChange={handleTypeChange}
      />
      <TransactionPreview transactions={newTransactions} />
    </div>
  )
}
