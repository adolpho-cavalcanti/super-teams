import Champions from '@/components/champions'
import { api } from '@/data/api'
import { Team } from '@/data/types/teams'
import Image from 'next/image'
import Link from 'next/link'

async function getAllTeams(): Promise<Team[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await api('/teams', {
    next: {
      revalidate: 10,
    },
  })
  const teams = await response.json()
  return teams
}

export default async function Home() {
  const teams = await getAllTeams()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-9 gap-6">
      {teams.map((team: Team) => {
        return (
          <Link
            key={team.id}
            href="/"
            className="group relative col-span-3 row-span-3 rounded-lg border-4 border-gray-400 bg-[#f2f2f2] p-12 min-h-[300px] overflow-hidden flex justify-center items-end"
          >
            <Image
              src={team.imagem}
              className="group-hover:scale-105 transition-transform duration-500"
              width={180}
              height={180}
              quality={100}
              alt=""
            />

            <Champions champions={team.titulos} />

            <div className="absolute bottom-2 right-2 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-black bg-black/60 p-1">
              <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
                Compare
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
