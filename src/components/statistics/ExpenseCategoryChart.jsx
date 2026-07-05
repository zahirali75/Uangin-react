import { Chart } from 'chart.js/auto'
import { useEffect, useRef } from 'react'

export default function ExpenseCategoryChart({ data }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: 'doughnut',
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            backgroundColor: data.colors,
            borderColor: '#fff',
            borderWidth: 3,
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
              padding: 10,
            },
            position: 'bottom',
          },
        },
      },
    })

    return () => chart.destroy()
  }, [data])

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">
        Kategori Pengeluaran
      </div>
      <div className="relative h-56">
        <canvas ref={canvasRef}></canvas>
      </div>
    </section>
  )
}
