'use client'

import { useCompareTeams } from '@/contexts/compare-team-context'
import { Team } from '@/data/types/teams'
import Link from 'next/link'

export interface AddToCompareTeamsButtonProps {
  team: Team
}

export function AddToCompareTeamsButton({
  team,
}: AddToCompareTeamsButtonProps) {
  const { addCompareTeam, maxLimit } = useCompareTeams()

  function handleAddTeamToCompare() {
    addCompareTeam(team)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleAddTeamToCompare}
        className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      >
        Adicionar ao Guia de Comparação
      </button>
      {maxLimit && (
        <div className="flex flex-col my-4 p-4 gap-3">
          <span className="text-red-600 font-bold">
            Limite máximo de times no comparativo foi atingido
          </span>
          <span className="text-red-600 font-bold">
            Vá até o comparativo e remova um Time.
          </span>
          <Link
            className="mt-8 flex h-12 items-center justify-center rounded-full bg-[#f2f2f2] border-2 border-cyan-400 font-semibold text-cyan-400"
            href="/team/compare"
          >
            Vá para o Comparativo
          </Link>
        </div>
      )}
    </>
  )
}
