import Image from 'next/image'
import { Crown } from 'lucide-react'

export default function ProductPage() {
  return (
    <div className="bg-[#f2f2f2] rounded-lg mt-12 p-12 relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/times/santos.png"
          alt=""
          width={500}
          height={500}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          Santos Futebol Clube
        </h1>

        <p className="mt-2 flex gap-2 leading-relaxed text-zinc-400">
          <Crown className="h-6 w-6 text-yellow-500" />
          Time do Rei Pelé e um dos maiores da história!
        </p>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
          Adicionar ao Guia de Comparação
        </button>
      </div>
    </div>
  )
}
