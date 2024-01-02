import { Team } from '@/data/types/teams'
import Image from 'next/image'

export const renderizarTitulos = (team: Team) => {
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
