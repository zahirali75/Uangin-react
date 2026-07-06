import Sidebar from "../components/Sidebar";

function SmartInsight() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">
          🧠 Smart Insight
        </h1>

        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Analisis Keuangan
          </h2>

          <p className="mb-2">
            💰 Total pemasukan bulan ini: <strong>Rp4.500.000</strong>
          </p>

          <p className="mb-2">
            💸 Pengeluaran terbesar: <strong>Makanan</strong>
          </p>

          <p className="mb-2">
            📊 Persentase tabungan: <strong>35%</strong>
          </p>

          <p className="mt-4 text-blue-600 font-medium">
            Pengeluaran terbesar berasal dari kategori Makanan. Cobalah mengurangi pengeluaran di kategori ini agar target tabungan lebih cepat tercapai.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-3">
            Tips Keuangan
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Catat semua pemasukan dan pengeluaran setiap hari.</li>
            <li>Utamakan kebutuhan daripada keinginan.</li>
            <li>Sisihkan minimal 20% pemasukan untuk tabungan.</li>
            <li>Evaluasi pengeluaran setiap akhir bulan.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default SmartInsight;
