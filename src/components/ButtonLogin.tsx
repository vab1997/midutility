'use client'

import { GithubIcon } from '@/components/icons/GithubIcon'
import { signInWithGitHub } from '@/services/clientService'

export function ButtonLogin () {
  const singIn = async () => {
    const { user, error } = await signInWithGitHub()
    console.log({ user, error })
  }

  return (
    <button
      className='flex items-center justify-center gap-1.5 px-4 py-2 rounded font-medium bg-gray-50'
      onClick={singIn}
    >
      <GithubIcon width={24} height={24} />
      Login
    </button>
  )
}
