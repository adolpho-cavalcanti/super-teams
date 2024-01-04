'use client'

import { Team } from '@/data/types/teams'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

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
    if (compareTeamItems?.length < 2) {
      setCompareTeamItems((state) => {
        return [...state, team]
      })
    } else {
      setMaxLimitTeams(true)
    }
  }

  useEffect(() => {
    console.log('compareTeamItems', compareTeamItems)
    const storedItems =
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('teams') || 'null')
        : null
    console.log('storedItems', storedItems)
    setCompareTeamItems(storedItems)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
