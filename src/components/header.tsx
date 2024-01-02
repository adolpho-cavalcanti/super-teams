import Link from 'next/link'
import { Search } from 'lucide-react'
import { CompareTeamsWidget } from './compare-teams-widget'

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
        <CompareTeamsWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Super Teams</span>
        </Link>
      </div>
    </div>
  )
}
