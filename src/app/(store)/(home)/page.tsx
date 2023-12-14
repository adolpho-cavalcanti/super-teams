import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-9 gap-6">
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg border-4 border-gray-400 bg-[#f2f2f2] p-12 min-h-[300px] overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/santos.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={180}
          height={180}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-2 left-2 h-18 flex items-end max-w-[280px]  p-2">
          <Image
            src="/libertadores.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={50}
            height={50}
            quality={100}
            alt=""
          />
          <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
            3
          </span>
        </div>

        <div className="absolute bottom-2 right-2 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-black bg-black/60 p-1">
          <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
            Compare
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg border-4 border-gray-400 bg-[#f2f2f2] p-12 min-h-[300px] overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/saopaulo.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={180}
          height={180}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-2 left-2 h-18 flex items-end max-w-[280px]  p-2">
          <Image
            src="/libertadores.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={50}
            height={50}
            quality={100}
            alt=""
          />
          <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
            3
          </span>
        </div>

        <div className="absolute bottom-2 right-2 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-black bg-black/60 p-1">
          <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
            Compare
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg border-4 border-gray-400 bg-[#f2f2f2] p-12 min-h-[300px] overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/gremio.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={180}
          height={180}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-2 left-2 h-18 flex items-end max-w-[280px]  p-2">
          <Image
            src="/libertadores.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={50}
            height={50}
            quality={100}
            alt=""
          />
          <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
            3
          </span>
        </div>

        <div className="absolute bottom-2 right-2 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-black bg-black/60 p-1">
          <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
            Compare
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg border-4 border-gray-400 bg-[#f2f2f2] p-12 min-h-[300px] overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/cruzeiro.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={180}
          height={180}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-2 left-2 h-18 flex items-end max-w-[280px]  p-2">
          <Image
            src="/libertadores.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={50}
            height={50}
            quality={100}
            alt=""
          />
          <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
            2
          </span>
        </div>

        <div className="absolute bottom-2 right-2 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-black bg-black/60 p-1">
          <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
            Compare
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg border-4 border-gray-400 bg-[#f2f2f2] p-12 min-h-[300px] overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/inter.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={180}
          height={180}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-2 left-2 h-18 flex items-end max-w-[280px]  p-2">
          <Image
            src="/libertadores.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={50}
            height={50}
            quality={100}
            alt=""
          />
          <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
            2
          </span>
        </div>

        <div className="absolute bottom-2 right-2 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-black bg-black/60 p-1">
          <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
            Compare
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg border-4 border-gray-400 bg-[#f2f2f2] p-12 min-h-[300px] overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/palmeiras.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={180}
          height={180}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-2 left-2 h-18 flex items-end max-w-[280px]  p-2">
          <Image
            src="/libertadores.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={50}
            height={50}
            quality={100}
            alt=""
          />
          <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
            3
          </span>
        </div>

        <div className="absolute bottom-2 right-2 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-black bg-black/60 p-1">
          <span className="flex h-full items-center justify-center rounded-full bg-[#d0d057] px-4 font-semibold">
            Compare
          </span>
        </div>
      </Link>
    </div>
  )
}
