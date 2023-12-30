'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CompareItem {
  teamId: number
  quantity: number
}

interface CompareTeamContextType {
  items: CompareItem[]
  addCompareTeam: (teamId: number) => void
}

const CompareTeamContext = createContext({} as CompareTeamContextType)

export function CompareTeamProvider({ children }: { children: ReactNode }) {
  const [compareTeamItems, setCompareTeamItems] = useState<CompareItem[]>([])

  function addCompareTeam(teamId: number) {
    setCompareTeamItems((state) => {
      const teamInCompare = state.some((item) => item.teamId === teamId)

      if (teamInCompare) {
        return state.map((item) => {
          if (item.teamId === teamId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { teamId, quantity: 1 }]
      }
    })
  }

  return (
    <CompareTeamContext.Provider
      value={{ items: compareTeamItems, addCompareTeam }}
    >
      {children}
    </CompareTeamContext.Provider>
  )
}

export const useCompareTeams = () => useContext(CompareTeamContext)
