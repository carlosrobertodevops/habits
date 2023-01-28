import * as Popover from '@radix-ui/react-popover'

// interface HabitDayProps {
//   completed: number
// }

export function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg" />
      <Popover.Portal>
        <Popover.Content className="p-6 min-w-[320px] rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">terça-feira</span>
          <span className="mt-1 font=extrabold leading-tight text-3xl"></span>
          <div className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
            <div className="w-3/4 h-3 rounded-xl bg-violet-600"></div>
          </div>
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}