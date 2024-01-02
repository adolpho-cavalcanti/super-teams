'use client'

import { Team } from '@/data/types/teams'
import { ReactNode, createContext, useContext, useState } from 'react'

interface CompareTeamContextType {
  maxLimit: boolean
  items: Team[]
  addCompareTeam: (team: Team) => void
}

const CompareTeamContext = createContext({} as CompareTeamContextType)

export function CompareTeamProvider({ children }: { children: ReactNode }) {
  const [compareTeamItems, setCompareTeamItems] = useState<Team[]>([])
  const [maxLimitTeams, setMaxLimitTeams] = useState<boolean>(false)

  function addCompareTeam(team: Team) {
    if (compareTeamItems.length < 2) {
      setCompareTeamItems((state) => {
        const teamInCompare = state.some((item) => item.id === team.id)

        if (teamInCompare) {
          return state.map((item) => {
            if (item.id === team.id) {
              return { ...item }
            } else {
              return item
            }
          })
        } else {
          return [...state, team]
        }
      })
    } else {
      setMaxLimitTeams(true)
    }
  }

  return (
    <CompareTeamContext.Provider
      value={{
        maxLimit: maxLimitTeams,
        items: compareTeamItems,
        addCompareTeam,
      }}
    >
      {children}
    </CompareTeamContext.Provider>
  )
}

export const useCompareTeams = () => useContext(CompareTeamContext)
