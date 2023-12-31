import Image from 'next/image'
import { Metadata } from 'next'
import { Team } from '@/data/types/teams'
import { AddToCompareTeamsButton } from '@/components/add-to-compare-teams-button'
import { renderizarTitulos } from '@/functions/renderizar-titulos'

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

export default async function TeamPage({ params }: TeamSlugProps) {
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

        <div className="mt-8 flex items-center gap-1">
          {renderizarTitulos(team)}
        </div>

        <AddToCompareTeamsButton team={team} />
      </div>
    </div>
  )
}
