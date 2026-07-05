export function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    currency: 'IDR',
    maximumFractionDigits: 0,
    style: 'currency',
  })
    .format(value)
    .replace('IDR', 'Rp')
}

export function formatSignedCurrency(value, type) {
  const sign = type === 'income' ? '+' : '-'
  return `${sign}${formatCurrency(value)}`
}

export function formatShortCurrency(value) {
  return `Rp ${Math.round(value / 1000)}rb`
}

export function formatInputDate(value) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}
