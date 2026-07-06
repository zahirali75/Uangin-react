function FinanceTips() {
  const tips = [
    "Sisihkan minimal 20% dari pemasukan untuk tabungan.",
    "Catat semua pemasukan dan pengeluaran setiap hari.",
    "Utamakan kebutuhan daripada keinginan.",
    "Kurangi pengeluaran untuk nongkrong atau belanja impulsif.",
    "Evaluasi kondisi keuangan setiap akhir bulan."
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-4">
        💡 Tips Keuangan
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default FinanceTips;
