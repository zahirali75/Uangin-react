import { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'
import Header from './Header'
import Toast from './Toast'

export default function AppLayout({ user }) {
  const [toast, setToast] = useState({ message: '', visible: false })
  const toastTimer = useRef(null)

  function showToast(message) {
    if (toastTimer.current) {
      clearTimeout(toastTimer.current)
    }

    setToast({ message, visible: true })
    toastTimer.current = setTimeout(() => {
      setToast((currentToast) => ({ ...currentToast, visible: false }))
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <Header user={user} />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <Outlet context={{ showToast }} />
      </main>
      <BottomNav />
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}
