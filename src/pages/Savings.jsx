import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Savings() {
  const [target, setTarget] = useState("");
  const [saved, setSaved] = useState("");

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">
          🎯 Target Tabungan
        </h1>

        <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
          <input
            type="number"
            placeholder="Masukkan target tabungan"
            className="w-full border p-3 rounded mb-4"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />

          <input
            type="number"
            placeholder="Uang yang sudah ditabung"
            className="w-full border p-3 rounded mb-4"
            value={saved}
            onChange={(e) => setSaved(e.target.value)}
          />

          <p className="mb-2">
            Target: Rp {target || 0}
          </p>

          <p className="mb-2">
            Terkumpul: Rp {saved || 0}
          </p>

          <p className="font-bold text-green-600">
            Progress: {target && saved ? Math.round((saved / target) * 100) : 0}%
          </p>
        </div>
      </main>
    </div>
  );
}

export default Savings;
