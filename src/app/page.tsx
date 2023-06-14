import Link from 'next/link'
import { Highligter } from '@/components/Highligther'
import { ListOfUtilities } from '@/components/ListOfUtilities'
import { codeExample } from '@/utils/constant'

export default function Home () {
  return (
    <main className='flex flex-col items-center justify-center h-full w-full'>
      <section className='flex items-center gap-12 py-14 px-10 w-full'>
        <div className='flex flex-col items-center justify-center gap-8 w-1/2'>
          <h2 className='font-display text-3xl font-extrabold text-white mr-44 xl:leading-[80px] sm:text-5xl xl:text-7xl'>
            Create utilities for
            <span className='text-cyan-300'>
              {' '}add to web{' '}
            </span>
            in diferent
            <span className='text-green-300'>{' '}library and framework{' '}</span>
            UX
          </h2>
          <div className='flex items-center justify-start gap-4 mt-6 w-full'>
            <Link href='/list-utilities' className='inline-flex items-center justify-center px-8 py-4 rounded-lg text-gray-50 bg-tranparent border-2 border-gray-50 hover:border-[#EE81C3] hover:opacity-90'>
              <span className='font-medium text-2xl'>List utilities</span>
            </Link>
            <Link href='/create-utility' className='inline-flex items-center justify-center px-8 py-4 rounded-lg text-gray-50 bg-[#EE81C3] border-2 border-[#EE81C3] hover:opacity-90'>
              <span className='font-medium text-2xl'>Create new utility</span>
            </Link>
          </div>
        </div>
        <div className='relative -mx-6 mt-6 overflow-hidden p-4 sm:-mx-8 sm:p-8 md:p-10 lg:mt-0 lg:h-[48rem] lg:w-1/2 lg:rounded-l-2xl lg:p-8'>
          <svg className='absolute top-0 left-0 h-full xl:rounded-3xl -z-10' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 1920 1080'>
            <g clipPath='url(#clip0_230:73)'>
              <path fill='url(#paint0_linear_230:73)' d='M0 0H1920V1080H0z' />
              <path fill='url(#paint1_linear_230:73)' d='M664.307 809.4c-7.074-90.56-120.853-580.729-176.858-814.494l152.54-182.225c-238.022-21.168-727.33-60.742-780.388-49.698-66.322 13.805-79.586 563.243-99.483 668.161-15.917 83.934 146.645 574.286 229.916 808.976 135.592 7.36 416.06 17.67 453.2 0 46.426-22.09 229.916-317.519 221.073-430.72z' />
              <path fill='url(#paint2_linear_230:73)' d='M174.662 803.768C309.297 634.216 292.388 197.274 267.105-.002c14.222-14.663 45.984-47.187 59.258-59.983C342.955-75.981 30.073-149.96 6.369-147.96-12.593-146.361-45.778 429.875-60 717.792c22.123 99.305 100.028 255.527 234.662 85.976z' /><path fill='url(#paint3_linear_230:73)' d='M867.369 535.857c-105.199 62.977-57.22 440.793-48.583 564.173H2019.11l62.83-920.49c-64.77-201.867-257.55-510.307-510.44-129.13-252.89 381.176-213.12 906.695-305.1 963.99-109.48 68.19-293.833-541.52-399.031-478.543z' />
            </g>
            <defs>
              <linearGradient id='paint0_linear_230:73' x1='680.162' x2='1632.05' y1='577.98' y2='236.725' gradientUnits='userSpaceOnUse'>
                <stop stopColor='#EB6899' />
                <stop offset='0.243' stopColor='#F090AE' />
                <stop offset='1' stopColor='#F6BDC5' />
              </linearGradient>
              <linearGradient id='paint1_linear_230:73' x1='212.213' x2='586.594' y1='-18.898' y2='1121.55' gradientUnits='userSpaceOnUse'>
                <stop stopColor='#F892A2' />
                <stop offset='1' stopColor='#F4768C' />
              </linearGradient>
              <linearGradient id='paint2_linear_230:73' x1='297.919' x2='-16.453' y1='155.953' y2='236.012' gradientUnits='userSpaceOnUse'>
                <stop stopColor='#F6728F' />
                <stop offset='1' stopColor='#F24F70' />
              </linearGradient>
              <linearGradient id='paint3_linear_230:73' x1='866.073' x2='1903.93' y1='1072.4' y2='300.803' gradientUnits='userSpaceOnUse'>
                <stop offset='0.191' stopColor='#D45DA2' />
                <stop offset='0.415' stopColor='#9D58C7' />
                <stop offset='0.618' stopColor='#8F7DEC' />
                <stop offset='0.978' stopColor='#C1BAF4' />
              </linearGradient>
              <clipPath id='clip0_230:73'>
                <path fill='#fff' d='M0 0H1920V1080H0z' />
              </clipPath>
            </defs>
          </svg>
          <Highligter codeString={codeExample} language='typescript' styles='absolute top-5 left-10 z-10' />
        </div>
      </section>
      <ListOfUtilities />
    </main>
  )
}
