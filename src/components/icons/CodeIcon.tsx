import { JSX, SVGProps } from 'react'

export function CodeIcon (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-8 w-8 mb-3'
      {...props}
    >
      <path d='m18 16 4-4-4-4' />
      <path d='m6 8-4 4 4 4' />
      <path d='m14.5 4-5 16' />
    </svg>
  )
}
