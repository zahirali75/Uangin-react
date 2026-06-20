import "./App.css";

function App() {
  const handleLogin = (event) => {
    event.preventDefault();

    alert("Login berhasil diklik!");
  };

  const togglePassword = () => {
    const passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-bl from-[#84cc16] via-[#16a34a] to-[#0f766e]">
      
      {/* Sisi kiri */}
      <div className="hidden lg:flex flex-1 flex-col justify-between p-12 text-white relative overflow-hidden">
        
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-10 -right-10 w-72 h-72 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/5 rounded-full"></div>

        {/* Logo */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
            <i className="ti ti-wallet text-white text-xl"></i>
          </div>

          <span className="text-2xl font-extrabold">Uangin</span>
        </div>

        {/* Konten */}
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            Kelola keuanganmu
            <br />
            lebih cerdas
          </h1>

          <p className="text-white/70 text-lg leading-relaxed max-w-sm">
            Catat pemasukan & pengeluaran, pantau statistik bulanan, dan capai
            target tabunganmu — semua dalam satu aplikasi.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                <i className="ti ti-chart-bar text-sm"></i>
              </div>

              <span className="text-sm font-medium">
                Statistik pengeluaran bulanan
              </span>
            </div>

            <div className="flex items-center gap-3 text-white/80">
              <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                <i className="ti ti-target-arrow text-sm"></i>
              </div>

              <span className="text-sm font-medium">
                Target & tracking tabungan
              </span>
            </div>

            <div className="flex items-center gap-3 text-white/80">
              <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                <i className="ti ti-list-details text-sm"></i>
              </div>

              <span className="text-sm font-medium">
                Histori transaksi lengkap
              </span>
            </div>
          </div>
        </div>

        <div className="text-white/40 text-xs relative z-10">
          © 2026 Uangin · Kelompok 2
        </div>
      </div>

      {/* Sisi kanan */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-slate-50 lg:rounded-l-3xl">
        <div className="w-full max-w-md">

          {/* Logo mobile */}
          <div className="flex items-center gap-2.5 mb-8 lg:hidden">
            <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center text-white">
              <i className="ti ti-wallet"></i>
            </div>

            <div className="text-xl font-extrabold">
              Uang<span className="text-green-500">in</span>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Selamat datang!
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            Masuk untuk mulai mengelola keuanganmu
          </p>

          <form className="space-y-4" onSubmit={handleLogin}>
            
            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                Email
              </label>

              <div className="relative">
                <i className="ti ti-mail absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>

                <input
                  type="email"
                  placeholder="mahasiswa@email.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Kata Sandi
                </label>

                <a href="#" className="text-xs text-green-600 font-semibold hover:underline">
                  Lupa password?
                </a>
              </div>

              <div className="relative">
                <i className="ti ti-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>

                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  <i className="ti ti-eye text-lg"></i>
                </button>
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-gray-300 text-green-500 accent-green-500 cursor-pointer"
              />

              <label
                htmlFor="remember"
                className="text-sm text-gray-500 cursor-pointer select-none"
              >
                Ingat saya selama 30 hari
              </label>
            </div>

            {/* Button login */}
            <button
              type="submit"
              className="w-full py-3.5 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold rounded-xl text-base transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
            >
              <i className="ti ti-login"></i>
              Masuk ke Akun
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400 font-medium">atau</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Register */}
          <a
            href="#"
            className="w-full py-3.5 border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 text-gray-600 hover:text-green-700 font-bold rounded-xl text-base transition flex items-center justify-center gap-2"
          >
            <i className="ti ti-user-plus"></i>
            Buat Akun Baru
          </a>

          <p className="text-center text-xs text-gray-400 mt-8">
            © 2026 Uangin · Kelompok 2
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;