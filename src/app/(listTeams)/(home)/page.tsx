import Champions from '@/components/champions'
import { Team } from '@/data/types/teams'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

async function getAllTeams(): Promise<Team[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  const response = await fetch(`${baseUrl}/teams`)
  const { teams }: { teams: Team[] } = await response.json()
  return teams
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const teams = await getAllTeams()

  return (
    <div className="cards max-h-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-8">
      {teams.map((team: Team) => {
        return (
          <Link
            key={team.id}
            href={`/team/${team.slug}`}
            className="group relative rounded-lg border-4 border-gray-400 bg-[#f2f2f2] p-12 min-h-[300px] overflow-hidden flex justify-center items-end"
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
