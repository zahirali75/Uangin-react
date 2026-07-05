import TransactionTypeToggle from './TransactionTypeToggle'

export default function TransactionForm({
  categories,
  form,
  onChange,
  onSubmit,
  onTypeChange,
}) {
  return (
    <form className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm" onSubmit={onSubmit}>
      <TransactionTypeToggle onChange={onTypeChange} type={form.type} />

      <div className="mb-4">
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-400">
          Deskripsi
        </label>
        <input
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20"
          name="description"
          onChange={onChange}
          placeholder="Contoh: Uang saku, Bayar kos, Makan siang..."
          required
          type="text"
          value={form.description}
        />
      </div>

      <div className="mb-4">
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-400">
          Nominal (Rp)
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400">
            Rp
          </span>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20"
            min="0"
            name="amount"
            onChange={onChange}
            placeholder="0"
            required
            type="number"
            value={form.amount}
          />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-400">
            Kategori
          </label>
          <select
            className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:bg-white"
            name="category"
            onChange={onChange}
            required
            value={form.category}
          >
            <option value="">-- Pilih --</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-400">
            Tanggal
          </label>
          <input
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:bg-white"
            name="date"
            onChange={onChange}
            required
            type="date"
            value={form.date}
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-400">
          Catatan (opsional)
        </label>
        <textarea
          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20"
          name="note"
          onChange={onChange}
          placeholder="Tambahkan catatan jika perlu..."
          rows="2"
          value={form.note}
        ></textarea>
      </div>

      <button
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3.5 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30"
        type="submit"
      >
        <i className="ti ti-check"></i>
        Simpan Transaksi
      </button>
    </form>
  )
}
