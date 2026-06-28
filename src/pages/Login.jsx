import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // Demo Login
    if (email.trim() === "" || password.trim() === "") {
      alert("Silakan isi email dan password.");
      return;
    }

    navigate("/dashboard");
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
            Catat pemasukan, pengeluaran, statistik bulanan, dan target
            tabunganmu dalam satu aplikasi.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-white/80">
              <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                <i className="ti ti-chart-bar text-sm"></i>
              </div>
              <span className="text-sm">
                Statistik pengeluaran bulanan
              </span>
            </div>

            <div className="flex items-center gap-3 text-white/80">
              <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                <i className="ti ti-target-arrow text-sm"></i>
              </div>
              <span className="text-sm">
                Target & Tracking Tabungan
              </span>
            </div>

            <div className="flex items-center gap-3 text-white/80">
              <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                <i className="ti ti-list-details text-sm"></i>
              </div>
              <span className="text-sm">
                Riwayat transaksi lengkap
              </span>
            </div>
          </div>
        </div>

        <div className="text-white/40 text-xs">
          © 2026 Uangin · Kelompok 2
        </div>
      </div>

      {/* Login */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-slate-50 lg:rounded-l-3xl">
        <div className="w-full max-w-md">

          {/* Logo Mobile */}
          <div className="flex items-center gap-2.5 mb-8 lg:hidden">
            <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center text-white">
              <i className="ti ti-wallet"></i>
            </div>

            <div className="text-xl font-extrabold">
              Uang<span className="text-green-500">in</span>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Selamat Datang!
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            Masuk untuk mulai mengelola keuanganmu
          </p>

          <form onSubmit={handleLogin} className="space-y-4">

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                Email
              </label>

              <div className="relative">
                <i className="ti ti-mail absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

                <input
                  type="email"
                  placeholder="mahasiswa@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>

              <div className="flex justify-between mb-2">
                <label className="block text-xs font-bold text-gray-500 uppercase">
                  Kata Sandi
                </label>

                <button
                  type="button"
                  className="text-xs text-green-600 hover:underline"
                >
                  Lupa Password?
                </button>
              </div>

              <div className="relative">

                <i className="ti ti-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  <i
                    className={`ti ${
                      showPassword ? "ti-eye-off" : "ti-eye"
                    }`}
                  ></i>
                </button>

              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-500" />

              <label className="text-sm text-gray-500">
                Ingat saya selama 30 hari
              </label>
            </div>

            {/* Login */}
            <button
              type="submit"
              className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition"
            >
              Masuk ke Akun
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">atau</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Register */}
          <button
            className="w-full py-3 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition"
          >
            Buat Akun Baru
          </button>

          <p className="text-center text-xs text-gray-400 mt-8">
            © 2026 Uangin · Kelompok 2
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;