import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/dashboard', icon: 'ti-layout-dashboard' },
  { label: 'Tambah', path: '/tambah', icon: 'ti-circle-plus' },
  { label: 'Statistik', path: '/statistik', icon: 'ti-chart-bar' },
  { label: 'Tabungan', path: '/tabungan', icon: 'ti-piggy-bank' },
]

export default function BottomNav() {
  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-lg md:hidden">
        <div className="flex">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                [
                  'flex flex-1 flex-col items-center py-3',
                  isActive ? 'text-green-600' : 'text-gray-400',
                ].join(' ')
              }
              end={item.path === '/dashboard'}
              key={item.path}
              to={item.path}
            >
              <i className={`ti ${item.icon} text-xl`}></i>
              <span className="mt-0.5 text-xs font-semibold">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
      <div className="h-16 md:hidden"></div>
    </>
  )
}
