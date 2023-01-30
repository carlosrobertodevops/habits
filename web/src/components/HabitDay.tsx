import * as Popover from '@radix-ui/react-popover'
import { ProgressBar } from './ProgressBar'

import { clsx } from 'clsx'

interface HabitDayProps {
  completed: number
  amount: number
}

export function HabitDay({ completed, amount }: HabitDayProps) {
  const completedPercent = Math.round((completed/amount) * 100)



  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg", {
          "bg-zinc-900 border-2 border-zinc-800": completedPercent === 0, // default
          "bg-violet-900 border-violet-700": completedPercent > 0 && completedPercent < 20,
          "bg-violet-800 border-violet-600": completedPercent >= 20 && completedPercent < 40,
          "bg-violet-700 border-violet-500": completedPercent >= 40 && completedPercent < 60,
          "bg-violet-600 border-violet-500": completedPercent >= 60 && completedPercent < 80,
          "bg-violet-500 border-violet-400": completedPercent >= 80,
        })}
      />
      <Popover.Portal>
        <Popover.Content className="p-6 min-w-[320px] /*border-2  border-zinc-800 rounded-2xl*/ bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">terça-feira</span>
          <span className="mt-1 font=extrabold leading-tight text-3xl"></span>

          <ProgressBar progress={completedPercent} />

          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}