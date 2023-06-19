import { JSX, SVGProps } from 'react'

export function CopyClipboardIcon (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 36 36'
      fill='currentColor'
      className='text-gray-50'
      {...props}
    >
      <path d='M22.6 4h-1.05a3.89 3.89 0 0 0-7.31 0h-.84A2.41 2.41 0 0 0 11 6.4V10h14V6.4A2.41 2.41 0 0 0 22.6 4Zm.4 4H13V6.25a.25.25 0 0 1 .25-.25h2.69l.12-1.11a1.24 1.24 0 0 1 .55-.89 2 2 0 0 1 3.15 1.18l.09.84h2.9a.25.25 0 0 1 .25.25Z' className='clr-i-outline clr-i-outline-path-1' />
      <path d='M33.25 18.06H21.33l2.84-2.83a1 1 0 1 0-1.42-1.42l-5.25 5.25 5.25 5.25a1 1 0 0 0 .71.29 1 1 0 0 0 .71-1.7l-2.84-2.84h11.92a1 1 0 0 0 0-2Z' className='clr-i-outline clr-i-outline-path-2' />
      <path d='M29 16h2V6.68A1.66 1.66 0 0 0 29.35 5h-2.27v2H29Z' className='clr-i-outline clr-i-outline-path-3' />
      <path d='M29 31H7V7h2V5H6.64A1.66 1.66 0 0 0 5 6.67v24.65A1.66 1.66 0 0 0 6.65 33h22.71A1.66 1.66 0 0 0 31 31.33v-9.27h-2Z' className='clr-i-outline clr-i-outline-path-4' />
      <path fill='none' d='M0 0h36v36H0z' />
    </svg>
  )
}
