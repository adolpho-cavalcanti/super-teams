'use client'

import { CardCompare } from '@/components/card-compare'
import { useCompareTeams } from '@/contexts/compare-team-context'
import { Trophy, X } from 'lucide-react'

export default function ComparePage() {
  const { items } = useCompareTeams()
  const [team1, team2] = items
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-9 gap-6 md:grid-cols-9">
      <CardCompare team={team1} />

      <div className="group relative col-span-1 row-span-9 items-center min-h-[300px] overflow-hidden flex justify-center">
        <Trophy className="h-24 w-24 text-red-700" />
        <X className="h-24 w-24" />
        <Trophy className="h-24 w-24 text-green-700" />
      </div>

      <CardCompare team={team2} />
    </div>
  )
}
