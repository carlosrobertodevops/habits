import { Check, Stack } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";


const availableHabitsWeeksDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export function NewHabitForm() {

  const [ title, setTitle ] = useState('');
  const [ habitsWeeksDays, setHabitsWeeksDays ] = useState<number[]>([]);

  async function createNewHabit(event: FormEvent) {
    event.preventDefault();
    console.log(title, habitsWeeksDays)

    if (!title || habitsWeeksDays.length === 0) {
      return
    }

    /** acessando à api do backend */
    api.post('/habits', {
      title,
      habitsWeeksDays,
    })

    setTitle('')
    setHabitsWeeksDays([])
    alert('Hábito criado com sucesso !!')
  }

  function handleToggleWeekDay(weekDay: number) {
    if (habitsWeeksDays.includes(weekDay)) {
      const habitsWeeksDaysWithRemovedOne = habitsWeeksDays.filter(day => day !== weekDay)
      setHabitsWeeksDays(habitsWeeksDaysWithRemovedOne)

    } else {
      const habitsWeeksDaysWithAddedOne = [...habitsWeeksDays, weekDay]
      setHabitsWeeksDays(habitsWeeksDaysWithAddedOne)
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
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>

      <div className="flex flex-col gap-2 mt-3">

        {availableHabitsWeeksDays.map((weekDay, index) =>{
          return (
            <Checkbox.Root
              key={weekDay}
              className="flex items-center gap-3 group"
              checked={habitsWeeksDays.includes(index)}
              onCheckedChange={() => {handleToggleWeekDay(index)}}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 transition-colors">
                <Checkbox.Indicator>
                  <Check size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>

              <span className="text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
                {weekDay}
              </span>
            </Checkbox.Root>
          )
        })}

      </div>

      <button
        type="submit"
        className="p-4 rounded-lg mt-6 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-400 transition-colors"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>

    </form>
  )
}