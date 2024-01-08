'use client'

import { useCompareTeams } from '@/contexts/compare-team-context'
import { Team } from '@/data/types/teams'
import { somarPontos } from '@/functions/somar-pontos'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import { Skeleton } from './skeleton'
import Link from 'next/link'

export interface AddToCompareTeamsButtonProps {
  team: Team
}

export function CardCompare({ team }: AddToCompareTeamsButtonProps) {
  const { removeCompareTeam } = useCompareTeams()

  if (!team || !team.imagem) {
    return (
      <div className="col-span-4 row-span-9 my-4 py-4 flex flex-col">
        <h1 className="font-bold text-lg">Volte e selecione um time</h1>
        <Link
          href="/"
          className="my-12 flex h-12 items-center justify-center rounded-full bg-[#d2d2d2] border-2 border-[#333] font-semibold text-[#333]"
        >
          VOLTAR PARA A PÁGINA INICIAL
        </Link>
        <Skeleton className="flex flex-col h-90 justify-between gap-4 items-center col-span-4 row-span-9 rounded-lg bg-[#333] p-4 min-h-[300px] overflow-hidden" />
      </div>
    )
  }

  function handleRemoveTeamToCompare() {
    removeCompareTeam(team.id)
  }

  return (
    <div className="flex flex-col h-90 justify-between gap-4 items-center col-span-4 md:col-span-4 row-span-9 rounded-lg border-4 border-gray-400 bg-[#f2f2f2] p-4 min-h-[300px] overflow-hidden">
      <button className="self-end" onClick={handleRemoveTeamToCompare}>
        <Trash className="h-8 w-8 text-red-700" />
      </button>
      <Image
        src={team.imagem}
        className="group-hover:scale-105 transition-transform duration-500"
        width={180}
        height={180}
        quality={100}
        alt=""
      />
      <div className="flex flex-col justify-center items-center">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-center">Campeonato</th>
              <th className="py-2 px-4 border-b text-center">Títulos</th>
              <th className="py-2 px-4 border-b text-center">
                Pontos por Título
              </th>
              <th className="py-2 px-4 border-b text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: team.titulos.length }, (_, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center">
                  {team.titulos[index].nome}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {team.titulos[index].qtdTitulos}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {team.titulos[index].peso}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {team.titulos[index].peso * team.titulos[index].qtdTitulos}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-center">
                Soma Total de Pontos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b text-center">
                {somarPontos(team)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
