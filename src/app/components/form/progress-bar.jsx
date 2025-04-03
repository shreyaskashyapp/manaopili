export function ProgressBar({ current, total, category }) {
  const progress = (current / total) * 100

  return (
    <div className="w-full space-y-1">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#455CFF]" />
          <span className="text-[#455CFF] font-medium">{category}</span>
        </div>
        <span className="text-gray-400">
          Showing {current} of {total} modules
        </span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#455CFF] to-blue-400 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}

