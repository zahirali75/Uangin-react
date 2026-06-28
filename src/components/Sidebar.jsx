import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-green-700 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-10">Uangin</h1>

      <nav className="space-y-4">

        <Link
          to="/dashboard"
          className="block p-3 rounded-lg hover:bg-green-600"
        >
          🏠 Dashboard
        </Link>

        <Link
          to="/transactions"
          className="block p-3 rounded-lg hover:bg-green-600"
        >
          💸 Transaksi
        </Link>

        <Link
          to="/categories"
          className="block p-3 rounded-lg hover:bg-green-600"
        >
          📂 Kategori
        </Link>

        <Link
          to="/statistics"
          className="block p-3 rounded-lg hover:bg-green-600"
        >
          📊 Statistik
        </Link>

        <Link
          to="/"
          className="block p-3 rounded-lg hover:bg-red-500 mt-10"
        >
          🚪 Logout
        </Link>

      </nav>
    </aside>
  );
}

export default Sidebar;