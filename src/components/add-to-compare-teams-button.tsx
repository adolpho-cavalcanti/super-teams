'use client'

import { useCompareTeams } from '@/contexts/cart-context'

export interface AddToCompareTeamsButtonProps {
  teamId: number
}

export function AddToCompareTeamsButton({
  teamId,
}: AddToCompareTeamsButtonProps) {
  const { addCompareTeam } = useCompareTeams()

  function handleAddTeamToCompare() {
    addCompareTeam(teamId)
  }

  return (
    <button
      type="button"
      onClick={handleAddTeamToCompare}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao Guia de Comparação
    </button>
  )
}
