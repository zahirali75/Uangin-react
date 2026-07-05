export const user = {
  name: 'Budi Mahasiswa',
  email: 'budi@email.com',
  initials: 'BM',
}

export const balance = {
  month: 'Juni 2026',
  current: 'Rp 2.187.000',
  income: {
    label: 'Total Pemasukan',
    amount: 'Rp 3.817.000',
    trend: '+12% dari bulan lalu',
  },
  expense: {
    label: 'Total Pengeluaran',
    amount: 'Rp 1.630.000',
    trend: '-5% dari bulan lalu',
  },
}

export const monthlyStats = [
  {
    label: 'Pemasukan',
    amount: 'Rp 2.550.000',
    detail: '5 transaksi',
    icon: 'ti-trending-up',
    tone: 'green',
  },
  {
    label: 'Pengeluaran',
    amount: 'Rp 363.000',
    detail: '5 transaksi',
    icon: 'ti-trending-down',
    tone: 'red',
  },
  {
    label: 'Transaksi',
    amount: '10',
    detail: 'Juni 2026',
    icon: 'ti-receipt',
    tone: 'blue',
  },
]

export const recentTransactions = [
  {
    title: 'Uang Saku Bulan Ini',
    category: 'Uang Saku',
    date: '1 Jun 2026',
    amount: '+Rp 1.500.000',
    type: 'income',
    icon: 'ti-cash',
  },
  {
    title: 'Bayar Kos',
    category: 'Kos / Sewa',
    date: '2 Jun 2026',
    amount: '-Rp 600.000',
    type: 'expense',
    icon: 'ti-home',
  },
  {
    title: 'Beasiswa PPA',
    category: 'Beasiswa',
    date: '5 Jun 2026',
    amount: '+Rp 750.000',
    type: 'income',
    icon: 'ti-school',
  },
  {
    title: 'Boba sama teman',
    category: 'Nongkrong',
    date: '6 Jun 2026',
    amount: '-Rp 55.000',
    type: 'expense',
    icon: 'ti-coffee',
  },
  {
    title: 'Top-up Mobile Legends',
    category: 'Game',
    date: '7 Jun 2026',
    amount: '-Rp 100.000',
    type: 'expense',
    icon: 'ti-device-gamepad-2',
  },
]

export const topCategories = [
  {
    label: 'Kos / Sewa',
    amount: 'Rp 600rb',
    percent: 88,
    icon: 'ti-home',
    tone: 'purple',
  },
  {
    label: 'Belanja',
    amount: 'Rp 230rb',
    percent: 34,
    icon: 'ti-shopping-bag',
    tone: 'orange',
  },
  {
    label: 'Game',
    amount: 'Rp 100rb',
    percent: 15,
    icon: 'ti-device-gamepad-2',
    tone: 'pink',
  },
  {
    label: 'Nongkrong',
    amount: 'Rp 55rb',
    percent: 8,
    icon: 'ti-coffee',
    tone: 'yellow',
  },
  {
    label: 'Kuliah',
    amount: 'Rp 25rb',
    percent: 4,
    icon: 'ti-book',
    tone: 'blue',
  },
]
