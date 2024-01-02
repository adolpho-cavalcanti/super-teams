import { Team } from '@/data/types/teams'
import Image from 'next/image'

export interface AddToCompareTeamsButtonProps {
  team: Team
}

function somarPontos(team: Team) {
  const pointsForChampionship = team.titulos.reduce((total, titulo) => {
    // eslint-disable-next-line prettier/prettier
    return total + (titulo.peso * titulo.qtdTitulos)
  }, 0)

  return pointsForChampionship
}

export function CardCompare({ team }: AddToCompareTeamsButtonProps) {
  return (
    <div className="flex flex-col h-90 justify-between gap-4 items-center col-span-4 row-span-9 rounded-lg border-4 border-gray-400 bg-[#f2f2f2] p-12 min-h-[300px] overflow-hidden">
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
            <tr>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[0].nome}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[0].qtdTitulos}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[0].peso}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[0].peso * team.titulos[0].qtdTitulos}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[1].nome}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[1].qtdTitulos}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[1].peso}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[1].peso * team.titulos[1].qtdTitulos}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[2].nome}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[2].qtdTitulos}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[2].peso}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[2].peso * team.titulos[2].qtdTitulos}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[3].nome}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[3].qtdTitulos}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[3].peso}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {team.titulos[3].peso * team.titulos[3].qtdTitulos}
              </td>
            </tr>
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
