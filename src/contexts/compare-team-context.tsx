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
  const storedItems = JSON.parse(localStorage.getItem('teams') || 'null')
  const [compareTeamItems, setCompareTeamItems] = useState<Team[]>(
    storedItems || [],
  )
  const [maxLimitTeams, setMaxLimitTeams] = useState<boolean>(false)

  function addCompareTeam(team: Team) {
    if (compareTeamItems?.length < 2) {
      setCompareTeamItems((state) => {
        localStorage.setItem('teams', JSON.stringify([...state, team]))
        return [...state, team]
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
