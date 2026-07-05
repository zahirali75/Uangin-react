import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: 'ti-layout-dashboard' },
  { label: 'Tambah', path: '/tambah', icon: 'ti-circle-plus' },
  { label: 'Statistik', path: '/statistik', icon: 'ti-chart-bar' },
  { label: 'Tabungan', path: '/tabungan', icon: 'ti-piggy-bank' },
]

export default function Header({ user }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white">
            <i className="ti ti-wallet text-base"></i>
          </div>
          <span className="text-lg font-extrabold text-gray-900">
            Uang<span className="text-green-500">in</span>
          </span>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                [
                  'rounded-lg px-4 py-2 text-sm font-semibold transition',
                  isActive
                    ? 'bg-green-50 text-green-700'
                    : 'text-gray-500 hover:bg-gray-100',
                ].join(' ')
              }
              end={item.path === '/dashboard'}
              key={item.path}
              to={item.path}
            >
              <i className={`ti ${item.icon} mr-1`}></i>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <div className="hidden text-right sm:block">
            <div className="text-sm font-semibold text-gray-900">{user.name}</div>
            <div className="text-xs text-gray-400">{user.email}</div>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
            {user.initials}
          </div>
        </div>
      </div>
    </nav>
  )
}
