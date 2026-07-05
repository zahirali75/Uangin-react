import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-900 via-green-700 to-green-500">
      <div className="relative hidden flex-1 flex-col justify-between overflow-hidden p-12 text-white lg:flex">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white/5"></div>
        <div className="absolute bottom-10 -right-10 h-72 w-72 rounded-full bg-white/5"></div>
        <div className="absolute left-1/3 top-1/2 h-40 w-40 rounded-full bg-white/5"></div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
            <i className="ti ti-wallet text-xl text-white"></i>
          </div>
          <span className="text-2xl font-extrabold">Uangin</span>
        </div>

        <div className="relative z-10">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight">
            Kelola keuanganmu
            <br />
            lebih cerdas
          </h1>
          <p className="max-w-sm text-lg leading-relaxed text-white/70">
            Catat pemasukan & pengeluaran, pantau statistik bulanan, dan capai target
            tabunganmu -- semua dalam satu aplikasi.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-white/80">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/20">
                <i className="ti ti-chart-bar text-sm"></i>
              </div>
              <span className="text-sm font-medium">Statistik pengeluaran bulanan</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/20">
                <i className="ti ti-piggy-bank text-sm"></i>
              </div>
              <span className="text-sm font-medium">Target & tracking tabungan</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/20">
                <i className="ti ti-list-details text-sm"></i>
              </div>
              <span className="text-sm font-medium">Histori transaksi lengkap</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-xs text-white/40">© 2026 Uangin · Kelompok 2</div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-slate-50 p-6 lg:rounded-l-3xl lg:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center gap-2.5 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500 text-white">
              <i className="ti ti-wallet"></i>
            </div>
            <div className="text-xl font-extrabold">
              Uang<span className="text-green-500">in</span>
            </div>
          </div>

          <h2 className="mb-1 text-3xl font-extrabold tracking-tight text-gray-900">
            Selamat datang!
          </h2>
          <p className="mb-8 text-sm text-gray-500">
            Masuk untuk mulai mengelola keuanganmu
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-500">
                Email
              </label>
              <div className="relative">
                <i className="ti ti-mail absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-gray-400"></i>
                <input
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                  placeholder="mahasiswa@email.com"
                  type="email"
                />
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wide text-gray-500">
                  Kata Sandi
                </label>
                <a className="text-xs font-semibold text-green-600 hover:underline" href="#">
                  Lupa password?
                </a>
              </div>
              <div className="relative">
                <i className="ti ti-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-gray-400"></i>
                <input
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                  placeholder="••••••••"
                  type="password"
                />
                <button
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
                  type="button"
                >
                  <i className="ti ti-eye text-lg"></i>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <input
                className="h-4 w-4 cursor-pointer rounded border-gray-300 text-green-500 accent-green-500"
                id="remember"
                type="checkbox"
              />
              <label
                className="cursor-pointer select-none text-sm text-gray-500"
                htmlFor="remember"
              >
                Ingat saya selama 30 hari
              </label>
            </div>

            <button
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3.5 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 active:bg-green-700"
              type="submit"
            >
              <i className="ti ti-login"></i>
              Masuk ke Akun
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="text-xs font-medium text-gray-400">atau</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <a
            className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-200 py-3.5 text-base font-bold text-gray-600 transition hover:border-green-500 hover:bg-green-50 hover:text-green-700"
            href="#"
          >
            <i className="ti ti-user-plus"></i>
            Buat Akun Baru
          </a>

          <p className="mt-8 text-center text-xs text-gray-400">
            © 2026 Uangin · Kelompok 2
          </p>
        </div>
      </div>
    </div>
  )
}
