import Link from "next/link"
import { GithubIcon } from "./icons/GithubIcon"

export function Header() {
  return (
    <header className='flex items-center justify-center px-10 py-6 border-b border-b-gray-800 w-full'>
      <div className="flex items-center justify-between w-full">
        <div className='flex gap-8 items-center justify-center'>
          <Link href='/'>
            <h1 className='text-2xl text-gray-50 font-bold'>
              Utility
              <span className='p-1 ml-1 text-black uppercase bg-yellow-300 rounded-lg'>Web</span>
            </h1>
          </Link>
        </div>
        <div className="flex item-center justify-center">
          <button className="flex items-center justify-center gap-1.5 px-4 py-2 rounded font-medium bg-gray-50">
            <GithubIcon width={24} height={24} />
            Login
          </button>
        </div>
      </div>
    </header>
  )
}