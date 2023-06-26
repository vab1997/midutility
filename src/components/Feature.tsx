import { FastIcon } from '@/components/icons/FastIcon'
import { CodeIcon } from '@/components/icons/CodeIcon'
import { EasyIcon } from '@/components/icons/EasyIcon'

export function Feature () {
  return (
    <section className='flex flex-col gap-6 pb-10 py-20 px-10 max-w-7xl w-full'>
      <header className='flex flex-col items-center justify-center'>
        <h1 className='font-bold text-6xl text-gray-50'>Features</h1>
      </header>
      <div className='flex items-center justify-center space-x-6 mt-6'>
        <article className='rounded-lg border border-[#EE81C3] p-2 w-96'>
          <div className='flex flex-col p-6 text-gray-50'>
            <FastIcon />
            <div className='flex flex-col justify-center'>
              <h3 className='font-bold text-gray-50 text-lg'>Lightweight</h3>
              <p className='text-gray-50 leading-6 mt-2'>Utilities without any dependencies, ensuring a lean and efficient solution.</p>
            </div>
          </div>
        </article>
        <article className='rounded-lg border border-[#EE81C3] p-2 w-96'>
          <div className='flex flex-col p-6 text-gray-50'>
            <CodeIcon />
            <div className='flex flex-col justify-center'>
              <h3 className='font-bold text-gray-50 text-lg'>Developer-Friendly</h3>
              <p className='text-gray-50 leading-6 mt-2'>Simplify development with an intuitive and ease example. Don't repeat yourself.</p>
            </div>
          </div>
        </article>
        <article className='rounded-lg border border-[#EE81C3] p-2 w-96'>
          <div className='flex flex-col p-6 text-gray-50'>
            <EasyIcon />
            <div className='flex flex-col justify-center'>
              <h3 className='font-bold text-gray-50 text-lg'>Easy to Use</h3>
              <p className='text-gray-50 leading-6 mt-2'>Get started in no time! Explores rich examples.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
