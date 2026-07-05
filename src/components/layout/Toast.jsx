export default function Toast({ message, visible }) {
  return (
    <div
      className={[
        'fixed bottom-20 right-6 z-[200] flex items-center gap-2.5 rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white shadow-2xl transition-all duration-300 md:bottom-6',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-20 opacity-0',
      ].join(' ')}
    >
      <i className="ti ti-check text-base text-green-400"></i>
      <span>{message}</span>
    </div>
  )
}
