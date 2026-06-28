import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Transactions() {
  const [search, setSearch] = useState("");

  const transactions = [
    {
      id: 1,
      date: "28 Jun 2026",
      name: "Gaji",
      category: "Pemasukan",
      amount: "+ Rp4.000.000",
    },
    {
      id: 2,
      date: "28 Jun 2026",
      name: "Makan",
      category: "Pengeluaran",
      amount: "- Rp25.000",
    },
    {
      id: 3,
      date: "27 Jun 2026",
      name: "Transport",
      category: "Pengeluaran",
      amount: "- Rp15.000",
    },
    {
      id: 4,
      date: "26 Jun 2026",
      name: "Bonus",
      category: "Pemasukan",
      amount: "+ Rp500.000",
    },
  ];

  const filtered = transactions.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen p-8">

        <div className="flex justify-between items-center mb-6">

          <div>
            <h1 className="text-3xl font-bold">
              💸 Transaksi
            </h1>

            <p className="text-gray-500">
              Semua riwayat transaksi
            </p>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl">
            + Tambah Transaksi
          </button>

        </div>

        <input
          type="text"
          placeholder="Cari transaksi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 p-3 rounded-xl border"
        />

        <div className="bg-white rounded-xl shadow">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left p-4">Tanggal</th>

                <th className="text-left">Nama</th>

                <th className="text-left">Kategori</th>

                <th className="text-right pr-6">
                  Nominal
                </th>

              </tr>

            </thead>

            <tbody>

              {filtered.map((item) => (

                <tr key={item.id} className="border-t">

                  <td className="p-4">{item.date}</td>

                  <td>{item.name}</td>

                  <td>{item.category}</td>

                  <td
                    className={`text-right pr-6 font-semibold ${
                      item.amount.includes("+")
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {item.amount}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>
    </div>
  );
}

export default Transactions;