import { GithubIcon } from './icons/GithubIcon'
import { TwitterIcon } from './icons/TwitterIcon'

export function Footer () {
  return (
    <footer className='flex items-center justify-between mt-20 py-10 px-10 w-full'>
      <div>
        <p className='text-lg text-gray-50 font-medium italic'>
          Create by Victor Bejas
        </p>
      </div>
      <div className='flex items-center justify-center gap-6 text-gray-50'>
        <a href='https://github.com/vab1997' target='_blank' rel='noreferrer nopener'>
          <GithubIcon width={32} height={32} />
        </a>
        <a href='https://twitter.com/victorbejas' target='_blank' rel='noreferrer nopener'>
          <TwitterIcon width={32} height={32} />
        </a>
      </div>
    </footer>
  )
}
