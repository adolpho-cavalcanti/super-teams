import Link from 'next/link'
import { CompareTeamsWidget } from './compare-teams-widget'
import { SearchForm } from './search-form'

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold">
          Super Teams
        </Link>

        <SearchForm />
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
