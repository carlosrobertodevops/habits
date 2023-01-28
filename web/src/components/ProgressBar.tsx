export function ProgressBar() {

  return (
  <div className="w-full h-3 mt-4 rounded-xl bg-zinc-700">
    <div
    role="progressbar"
    aria-label="Progresso de hábitps completados nesse dia"
    aria-valuenow={5}
    className="w-3/4 h-3 rounded-xl bg-violet-600"
    />
  </div>
  )
}