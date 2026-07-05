export default function SavingsGoalModal({
  form,
  isOpen,
  onChange,
  onClose,
  onSubmit,
}) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-6"
      onClick={onClose}
    >
      <form
        className="modal-anim w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        onSubmit={onSubmit}
      >
        <div className="mb-5 flex items-center justify-between">
          <div className="text-lg font-extrabold text-gray-900">Target Tabungan Baru</div>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100"
            onClick={onClose}
            type="button"
          >
            <i className="ti ti-x"></i>
          </button>
        </div>

        <div className="mb-5 space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-400">
              Nama Target
            </label>
            <input
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20"
              name="name"
              onChange={onChange}
              placeholder="Contoh: Laptop, Liburan, Motor..."
              required
              type="text"
              value={form.name}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-400">
                Ikon
              </label>
              <select
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-center text-xl outline-none transition focus:border-green-500 focus:bg-white"
                name="icon"
                onChange={onChange}
                value={form.icon}
              >
                <option value="ti-target-arrow">Target</option>
                <option value="ti-device-laptop">Laptop</option>
                <option value="ti-plane">Liburan</option>
                <option value="ti-motorbike">Motor</option>
                <option value="ti-home">Rumah</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-400">
                Deadline
              </label>
              <input
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition focus:border-green-500 focus:bg-white"
                name="deadline"
                onChange={onChange}
                type="month"
                value={form.deadline}
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-400">
              Nominal Target (Rp)
            </label>
            <input
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20"
              min="0"
              name="target"
              onChange={onChange}
              placeholder="Masukkan jumlah target"
              required
              type="number"
              value={form.target}
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-400">
              Sudah terkumpul (Rp)
            </label>
            <input
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition focus:border-green-500 focus:bg-white"
              min="0"
              name="collected"
              onChange={onChange}
              placeholder="0"
              type="number"
              value={form.collected}
            />
          </div>
        </div>

        <button
          className="w-full rounded-xl bg-green-500 py-3 font-extrabold text-white transition hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30"
          type="submit"
        >
          Simpan Target
        </button>
      </form>
    </div>
  )
}
