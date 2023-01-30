
import { clsx } from 'clsx'

interface ProgressBarProps {
  progress: number
}

export function ProgressBar({progress}: ProgressBarProps) {
  return (
    <div className="w-full h-3 mt-4 rounded-xl bg-zinc-700">
      <div
        role="progressbar"
        aria-label="Progresso de hábitps completados nesse dia"
        aria-valuenow={progress}
        className={clsx("w-3/4 h-3 rounded-xl bg-zinc-900 border-2 border-zinc-800 rounded-lg", {
        "bg-zinc-900 border-2 border-zinc-800": progress === 0, // default
        "bg-violet-900 border-violet-700": progress > 0 && progress < 20,
        "bg-violet-800 border-violet-600": progress >= 20 && progress < 40,
        "bg-violet-700 border-violet-500": progress >= 40 && progress < 60,
        "bg-violet-600 border-violet-500": progress >= 60 && progress < 80,
        "bg-violet-500 border-violet-400": progress >= 80,
      })}
        style={{width: `${progress}%`}}
      />
    </div>
  )
}