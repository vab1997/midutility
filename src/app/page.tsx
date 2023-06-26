import Link from 'next/link'
import { SelectUtility } from '@/components/SelectCreateUtility'
import { Feature } from '@/components/Feature'

export default function Home () {
  return (
    <main className='flex flex-col items-center justify-center h-full w-full'>
      <section className='flex items-center gap-8 py-24 px-10 max-w-7xl w-full'>
        <div className='flex flex-col items-center justify-center gap-10 w-full'>
          <h2 className='font-display text-6xl font-extrabold text-white text-center leading-[65px]'>
            <span className='text-[#EE81C3]'>Utilities</span> ready to use, written in {' '}
            <span className='text-[#f7df1e]'>JavaScript</span> and {' '}
            <span className='text-[#007acc]'>TypeScript</span>
          </h2>
          <div className='flex items-center justify-center gap-4 mt-6 w-full'>
            <Link href='/list-utilities' className='inline-flex items-center justify-center px-8 py-4 rounded-lg text-gray-50 bg-tranparent border-2 border-gray-50 hover:border-[#EE81C3] hover:opacity-90'>
              <span className='font-medium text-2xl'>List utilities</span>
            </Link>
            <SelectUtility />
          </div>
        </div>
      </section>
      <Feature />
      <section className='flex items-center justify-center px-10 pb-10 pt-20 max-w-7xl w-full'>
        <div className='flex flex-col items-center justify-center gap-6'>
          <h2 className='text-gray-50 font-bold text-6xl'>Proudly Open Source</h2>
          <p className='text-gray-50 text-center text-xl'>
            Utility web is open source powered by open source
            <br />
            The code is available on {' '}
            <a href='https://github.com/vab1997/utilityweb' className='hover:opacity-75 underline underline-offset-4'>GitHub</a>
          </p>
          {/* <a href='' className='flex items-center justify-center gap-1 text-gray-50'>
            <span className='p-2 border border-[#EE81C3] rounded-md'>
              <GithubIcon width={28} height={28} />
            </span>
            <div className='flex items-center'>
              <div className='h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent border-[#EE81C3]' />
              <span className='text-gray-50 font-medium px-4 py-2.5 border border-[#EE81C3] rounded-md'>
                2,000 Stars in Github
              </span>
            </div>
          </a> */}
        </div>
      </section>
    </main>
  )
}
