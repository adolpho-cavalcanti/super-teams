import { Team } from '@/data/types/teams'
import Image from 'next/image'

interface ChampionsProps {
  champions: Team['titulos']
}

export default function Champions({ champions }: ChampionsProps) {
  return (
    <div
      key={champions[0].id}
      className="absolute bottom-2 left-2 h-18 flex items-end max-w-[280px]  p-2"
    >
      <Image
        src={champions[0].imagem}
        className="group-hover:scale-105 transition-transform duration-500"
        width={50}
        height={50}
        quality={100}
        alt=""
      />
      <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
        {champions[0].qtdTitulos}
      </span>
    </div>
  )
}
