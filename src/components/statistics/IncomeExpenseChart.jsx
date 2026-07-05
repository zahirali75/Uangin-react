import { Chart } from 'chart.js/auto'
import { useEffect, useRef } from 'react'

export default function IncomeExpenseChart({ data }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Pemasukan',
            data: data.income,
            backgroundColor: '#22c55e',
            borderRadius: 8,
          },
          {
            label: 'Pengeluaran',
            data: data.expense,
            backgroundColor: '#f87171',
            borderRadius: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              font: { family: 'Plus Jakarta Sans', size: 11 },
              padding: 12,
            },
            position: 'bottom',
          },
        },
        scales: {
          x: {
            grid: { display: false },
          },
          y: {
            grid: { color: '#f1f5f9' },
            ticks: {
              callback: (value) => `Rp ${value / 1000}rb`,
              font: { size: 10 },
            },
          },
        },
      },
    })

    return () => chart.destroy()
  }, [data])

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">
        Tren Pemasukan 6 Bulan
      </div>
      <div className="relative h-56">
        <canvas ref={canvasRef}></canvas>
      </div>
    </section>
  )
}
