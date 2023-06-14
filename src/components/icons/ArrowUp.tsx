import { JSX, SVGProps } from 'react'

export function ArrowUp (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='800'
      height='800'
      fill='none'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M15 13V9m0 0h-4m4 0-6 6m12-3a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z'
      />
    </svg>
  )
}
