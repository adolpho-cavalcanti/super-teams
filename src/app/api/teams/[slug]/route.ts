import { z } from 'zod'

import data from '../data.json'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const slug = z.string().parse(params.slug)

  const team = data.teams.find((team) => team.slug === slug)

  if (!team) {
    return Response.json({ message: 'team not found.' }, { status: 400 })
  }

  return Response.json(team)
}
