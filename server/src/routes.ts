
import dayjs from 'dayjs'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from "./lib/prisma"

export async function appRoutes(app: FastifyInstance) {

  /** post in the habits */
  app.post('/habits', async (request) => {
    const createHabitBody = z.object({
      title: z.string(),
      habitsWeeksDays: z.array(
        z.number().min(0).max(6)
      )
    })

    const { title, habitsWeeksDays } = createHabitBody.parse(request.body);

    const today = dayjs().startOf('day').toDate() // horas como 00:00:00.000

    await prisma.habit.create({
      data: {
        title,
        created_at: new Date(),
        habitsWeeksDays: {
          create: habitsWeeksDays.map((habitsWeeksDays: any) => {
            return {
              week_day: habitsWeeksDays,
            }
          })
        }
      }
    })
  })

  /** day */
  app.get('/day', async (request) => {
    const getDayParams = z.object({
      date: z.coerce.date()
    })

    const { date } = getDayParams.parse(request.query)

    const parsedDate = dayjs(date).startOf('day')

    const habitsWeeksDays = parsedDate.get('day')

    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date,
        },
        habitsWeeksDays: {
          some: {
            week_day: habitsWeeksDays,
          }
        }
      }
    })

    const day = await prisma.day.findUnique({
      where: {
        date: parsedDate.toDate(),
      },
        include: {
          daysHabits: true,
        }
    })

    const completedHabits = day?.daysHabits.map(dayHabit => {
      return dayHabit.habit_id
    }) ?? []

    return {
      possibleHabits,
      completedHabits,
    }
  })

  /* Todos os habits */
  app.patch('/habits/:id/toggle',  async (request) => {

    const toggleHabitParams = z.object({
      id: z.string().uuid(),
    })

    const { id } = toggleHabitParams.parse(request.params)

    const today = dayjs().startOf('day').toDate()

    let day = await prisma.day.findUnique({
      where: {
        date: today,
      }
    })

    if (!day) {
      day = await prisma.day.create({
        data: {
          date: today,
        }
      })
    }

    const dayHabit = await prisma.dayHabit.findUnique({
      where: {
        day_id_habit_id: {
          day_id: day.id,
          habit_id: id,
        }
      }
    })

    if (dayHabit) {
      await prisma.dayHabit.delete({
        where: {
          id: dayHabit.id
        }
      })
    } else {
      await prisma.dayHabit.create({
        data: {
          day_id: day.id,
          habit_id: id,
        }
      })
    }

  })


  app.get('/summary', async () => {
    const summary = await prisma.$queryRaw`
      SELECT
      D.id,
      D.date,
      (
        SELECT
          cast(count(*) as float)
        FROM days_habits DH
        WHERE
          DH.day_id = D.id
      ) as completed,
      (
        SELECT
          cast(count(*) as float)
        FROM habits_weeks_days HWD
        JOIN habits H
          ON H.id = HWD.habit_id
        WHERE
          HWD.week_day = cast(strftime('%w', D.date/1000.0, 'unixepoch') as int)
          AND H.created_at <= D.date
      ) as amount
      FROM days D
    `
    return summary
  })

  /* Todos os habits */
  app.get('/habits_all', async () => {
    const habits = await prisma.habit.findMany()

    return habits
  })

}
