export function RatingButton({ value, isSelected, onChange }) {
  return (
    <button
      onClick={() => onChange(value)}
      className={`
        w-10 h-10 rounded-full flex items-center justify-center
        border-2 transition-all duration-200 text-base font-medium
        ${isSelected 
          ? 'border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
          : 'border-gray-700 text-gray-400 hover:border-blue-400 hover:text-blue-400'}
      `}
      aria-label={`Rate ${value}`}
      aria-pressed={isSelected}
    >
      {value}
    </button>
  )
}

