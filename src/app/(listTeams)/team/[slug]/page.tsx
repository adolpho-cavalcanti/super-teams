import Image from 'next/image'
import { Metadata } from 'next'
import { Team } from '@/data/types/teams'
import { api } from '@/data/api'
import { AddToCompareTeamsButton } from '@/components/add-to-compare-teams-button'

interface TeamSlugProps {
  params: {
    slug: string
  }
}

async function getTeamBySlug(slug: string): Promise<Team> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  const response = await fetch(`${baseUrl}/teams/${slug}`)
  const team = await response.json()
  return team
}

export async function generateMetadata({
  params,
}: TeamSlugProps): Promise<Metadata> {
  const team = await getTeamBySlug(params.slug)

  return {
    title: team.nome,
  }
}

const renderizarTitulos = (team: Team) => {
  const rows: JSX.Element[] = []
  let increment = 0

  team.titulos.forEach((titulo) => {
    for (let i = 1; i <= titulo.qtdTitulos; i++) {
      increment++
      rows.push(
        <div key={increment}>
          <Image
            src={titulo.imagem}
            className="group-hover:scale-105 transition-transform duration-500"
            width={50}
            height={50}
            quality={100}
            alt={titulo.nome}
          />
        </div>,
      )
    }
  })

  return rows
}

export default async function ProductPage({ params }: TeamSlugProps) {
  const team = await getTeamBySlug(params.slug)

  return (
    <div className="bg-[#f2f2f2] rounded-lg mt-12 p-12 relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-1 overflow-hidden">
        <Image
          src={team.imagem}
          alt=""
          width={500}
          height={500}
          quality={100}
        />
      </div>

      <div className="col-span-2 flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{team.nome}</h1>

        {/* <p className="mt-2 flex gap-2 leading-relaxed text-zinc-400">
          <Crown className="h-6 w-6 text-yellow-500" />
          Time do Rei Pelé e um dos maiores da história!
        </p> */}

        <div className="mt-8 flex items-center gap-1">
          {renderizarTitulos(team)}
        </div>

        <AddToCompareTeamsButton teamId={team.id} />
      </div>
    </div>
  )
}
