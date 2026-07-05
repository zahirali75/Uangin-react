import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import AddFundsModal from '../components/savings/AddFundsModal'
import SavingsGoalCard from '../components/savings/SavingsGoalCard'
import SavingsGoalModal from '../components/savings/SavingsGoalModal'
import SavingsSummary from '../components/savings/SavingsSummary'
import { createSavingsGoal } from '../services/savingsService'

const initialGoalForm = {
  name: '',
  icon: 'ti-target-arrow',
  deadline: '',
  target: '',
  collected: '',
}

export default function SavingsPage({ goals, onAddFunds, onAddGoal, onDeleteGoal }) {
  const { showToast } = useOutletContext()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form, setForm] = useState(initialGoalForm)
  const [fundingGoalId, setFundingGoalId] = useState(null)
  const [fundAmount, setFundAmount] = useState('')

  const fundingGoal = goals.find((goal) => goal.id === fundingGoalId)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.name || Number(form.target || 0) <= 0) {
      showToast('Isi nama dan nominal target terlebih dahulu.')
      return
    }

    const newGoal = createSavingsGoal({
      ...form,
      deadline: formatDeadline(form.deadline),
    })

    onAddGoal(newGoal)
    setForm(initialGoalForm)
    closeModal()
    showToast('Target tabungan ditambahkan!')
  }

  function handleDelete(goalId) {
    onDeleteGoal(goalId)
    showToast('Target tabungan dihapus!')
  }

  function openFundsModal(goalId) {
    setFundingGoalId(goalId)
    setFundAmount('')
  }

  function closeFundsModal() {
    setFundingGoalId(null)
    setFundAmount('')
  }

  function handleAddFundsSubmit(event) {
    event.preventDefault()

    const amount = Number(fundAmount || 0)
    if (amount <= 0) {
      showToast('Masukkan nominal dana terlebih dahulu.')
      return
    }

    onAddFunds(fundingGoalId, amount)
    closeFundsModal()
    showToast('Dana tabungan berhasil ditambahkan!')
  }

  return (
    <>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Target Tabungan</h1>
          <p className="mt-1 text-sm text-gray-500">Pantau & capai tujuan keuanganmu</p>
        </div>
        <button
          className="flex items-center gap-2 rounded-xl bg-green-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30"
          onClick={openModal}
          type="button"
        >
          <i className="ti ti-plus"></i>
          Target Baru
        </button>
      </div>

      <SavingsSummary goals={goals} />

      <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {goals.map((goal) => (
          <SavingsGoalCard
            goal={goal}
            key={goal.id}
            onAddFunds={openFundsModal}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <button
        className="w-full rounded-2xl border-2 border-dashed border-gray-300 p-6 text-center text-gray-400 transition hover:border-green-400 hover:bg-green-50 hover:text-green-500"
        onClick={openModal}
        type="button"
      >
        <i className="ti ti-plus-circle mb-1.5 block text-3xl"></i>
        <div className="text-sm font-semibold">Tambah Target Tabungan Baru</div>
        <div className="mt-0.5 text-xs">Tentukan nama, nominal, dan deadline-mu</div>
      </button>

      <SavingsGoalModal
        form={form}
        isOpen={isModalOpen}
        onChange={handleChange}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
      <AddFundsModal
        amount={fundAmount}
        goal={fundingGoal}
        isOpen={Boolean(fundingGoalId)}
        onChange={(event) => setFundAmount(event.target.value)}
        onClose={closeFundsModal}
        onSubmit={handleAddFundsSubmit}
      />
    </>
  )
}

function formatDeadline(value) {
  if (!value) {
    return ''
  }

  const [year, month] = value.split('-')
  const date = new Date(Number(year), Number(month) - 1)

  return new Intl.DateTimeFormat('id-ID', {
    month: 'short',
    year: 'numeric',
  }).format(date)
}
