import Image from 'next/image'
import { Metadata } from 'next'
import { Team } from '@/data/types/teams'
import { api } from '@/data/api'

interface TeamSlugProps {
  params: {
    slug: string
  }
}

async function getTeamBySlug(slug: string): Promise<Team> {
  const response = await api(`/teams/${slug}`, {
    next: {
      revalidate: 10,
    },
  })
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

export async function generateStaticParams() {
  const response = await api('/teams')
  const products: Team[] = await response.json()

  return products.map((product) => {
    return { slug: product.slug }
  })
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

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
          Adicionar ao Guia de Comparação
        </button>
      </div>
    </div>
  )
}
