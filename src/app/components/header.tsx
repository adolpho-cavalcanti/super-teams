import Link from 'next/link'
import { GitCompareIcon, Search, Trophy, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold">
          Super Teams
        </Link>

        <form className="flex w-[320px] items-center gap-3 rounded-full bg-[#c2c2c2] px-5 py-3 ring-zinc-700">
          <Search className="w-5 h-5 text-[#f2f2f2]" />
          <input className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#333333]" />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-8 w-8 text-red-700" />
            <X className="h-4 w-4" />
            <Trophy className="h-8 w-8 text-green-700" />
            <span className="text-sm">Compare 0</span>
          </div>
        </div>

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Minha Conta</span>
          <Image
            src="https://github.com/adolpho-cavalcanti.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt="Adolph"
          />
        </Link>
      </div>
    </div>
  )
}
