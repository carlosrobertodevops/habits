import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from "react";

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

export function NewHabitForm() {

  const { title, setTitle } = useState('')
  const { weekDays, setWeekDays } = useState<number[]>([])

  function createNewHabit(event: FormEvent) {
    event.preventDefault()
    console.log(title)
  }

  function handleToggleWeekDay(weekDay: number) {
    if (setWeekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)
      setWeekDays(weekDaysWithRemovedOne)

    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDay]
      setWeekDays(weekDaysWithAddedOne)
    }

  }


  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual o seu comprometimento?
      </label>

      <input
        type="text"
        id="title"
        placeholder="ex.: Exercícios, dormir bem, etc"
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        autoFocus
        onChange={ event=> setTitle(event.target.value)}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>

      <div className="flex flex-col gap-2 mt-3">

        {availableWeekDays.map((weekDay, index) =>{
          return (
            <Checkbox.Root
              key={weekDay}
              className='flex items-center gap-3 group'
              onCheckedChange={() => {handleToggleWeekDay(index)}}
            >
              <div className='w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500'>
                <Checkbox.Indicator>
                  <Check size={23} className="text-white" />
                </Checkbox.Indicator>
              </div>

              <span className='text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
              {weekDay}
              </span>
            </Checkbox.Root>
          )
        })}
      </div>

      <button
        type="submit"
        className="p-4 rounded-lg mt-6 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-400"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>

    </form>
  )
}