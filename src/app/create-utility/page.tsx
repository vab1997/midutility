import { Form } from '@/components/Form'
import Link from 'next/link'

export default function CreateUtilityPage() {
  return (
    <main className="flex flex-col items-center justify-between h-full w-full">
      <header className='flex items-center justify-between px-10 py-6 border-b border-b-gray-50 w-full'>
        <div className='flex gap-8 items-center justify-center'>
          <Link href='/'>
            <h1 className='text-2xl text-gray-50 font-bold'>
              Utility
              <span className='p-1 ml-1 text-black uppercase bg-yellow-400 rounded-lg'>JS</span>
            </h1>
          </Link>
          <h1 className='text-xl text-gray-50 font-bold'>Create a new utility</h1>
        </div>
        <div>
          <div className="relative ml-3" data-headlessui-state="">
            <div id="notifications" className="relative pr-1">
              <button
                className="flex items-center text-sm rounded-full group"
                id="headlessui-menu-button-:r0:"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <img className="w-8 h-8 transition rounded-full group-hover:opacity-80" src="https://avatars.githubusercontent.com/u/54491743?v=4" alt="" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center px-10 overflow-hidden h-full w-full pt-16">
        <Form />
      </div>
    </main>
  )
}
