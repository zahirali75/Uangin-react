export default function AddFundsModal({
  amount,
  goal,
  isOpen,
  onChange,
  onClose,
  onSubmit,
}) {
  if (!isOpen || !goal) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-6"
      onClick={onClose}
    >
      <form
        className="modal-anim w-full max-w-sm rounded-2xl bg-white p-7 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        onSubmit={onSubmit}
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-lg font-extrabold text-gray-900">Tambah Dana</div>
            <div className="mt-0.5 text-sm text-gray-500">{goal.name}</div>
          </div>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100"
            onClick={onClose}
            type="button"
          >
            <i className="ti ti-x"></i>
          </button>
        </div>

        <div className="mb-5">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-400">
            Nominal Dana (Rp)
          </label>
          <input
            autoFocus
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20"
            min="1"
            onChange={onChange}
            placeholder="Contoh: 100000"
            type="number"
            value={amount}
          />
        </div>

        <button
          className="w-full rounded-xl bg-green-500 py-3 font-extrabold text-white transition hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30"
          type="submit"
        >
          Simpan Dana
        </button>
      </form>
    </div>
  )
}
