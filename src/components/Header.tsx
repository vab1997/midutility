import Link from 'next/link'
import { GithubIcon } from './icons/GithubIcon'

export function Header () {
  return (
    <header className='bg-[#14151A]/80 border-b border-b-gray-800 backdrop-blur flex items-center justify-center px-10 py-6 w-full sticky top-0 z-40 '>
      <div className='flex items-center justify-between px-10 max-w-7xl w-full'>
        <div className='flex gap-8 items-center justify-center'>
          <Link href='/'>
            <h1 className='text-[1.7rem] text-gray-50 font-bold'>
              Utility
              <span className='p-1 ml-1.5 text-gray-50 uppercase bg-[#EE81C3] rounded-lg'>Web</span>
            </h1>
          </Link>
        </div>
        <div className='flex item-center justify-center'>
          <button className='flex items-center justify-center gap-1.5 px-4 py-2 rounded font-medium bg-gray-50'>
            <GithubIcon width={24} height={24} />
            Login
          </button>
        </div>
      </div>
    </header>
  )
}
