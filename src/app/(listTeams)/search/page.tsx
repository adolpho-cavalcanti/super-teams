import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Team } from '@/data/types/teams'
import Champions from '@/components/champions'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function searchTeams(query: string): Promise<Team[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const response = await fetch(`${baseUrl}/teams-search?search=${query}`)

  const teams = await response.json()
  return teams
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const teams = await searchTeams(query)
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-9 gap-6">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>
      {teams?.map((team: Team) => {
        return (
          <Link
            key={team.id}
            href={`/team/${team.slug}`}
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

            <div className="absolute bottom-2 right-2 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 p-1">
              <span className="flex h-full items-center justify-center rounded-full bg-emerald-600 text-white px-4 font-semibold">
                Veja mais
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
