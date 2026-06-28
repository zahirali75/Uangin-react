import Sidebar from "../components/Sidebar";
import SummaryCard from "../components/SummaryCard";

function Dashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen p-8">

        <h1 className="text-3xl font-bold">
          Halo, Riani 👋
        </h1>

        <p className="text-gray-500 mb-8">
          Selamat datang di Uangin
        </p>

        <div className="grid md:grid-cols-3 gap-5">

          <SummaryCard
            title="Saldo Saat Ini"
            value="Rp 5.250.000"
            color="text-green-600"
          />

          <SummaryCard
            title="Pemasukan"
            value="Rp 7.000.000"
            color="text-blue-600"
          />

          <SummaryCard
            title="Pengeluaran"
            value="Rp 1.750.000"
            color="text-red-500"
          />

        </div>

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-xl font-bold mb-4">
            Riwayat Transaksi
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">
                  Nama
                </th>

                <th className="text-left">
                  Kategori
                </th>

                <th className="text-right">
                  Nominal
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-4">💰 Gaji</td>

                <td>Pemasukan</td>

                <td className="text-right text-green-600">
                  + Rp4.000.000
                </td>

              </tr>

              <tr className="border-b">

                <td className="py-4">🍔 Makan</td>

                <td>Pengeluaran</td>

                <td className="text-right text-red-500">
                  - Rp25.000
                </td>

              </tr>

              <tr>

                <td className="py-4">🚗 Transport</td>

                <td>Pengeluaran</td>

                <td className="text-right text-red-500">
                  - Rp15.000
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;