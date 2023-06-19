'use client'

import { toast } from 'sonner'
import { CopyClipboardIcon } from './icons/CopyClipboardIcon'
import { Toaster } from './Toaster'

export function ButtonCopyClipboard ({ code }: { code: string }) {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    toast.success('Copied to clipboard!')
  }

  return (
    <>
      <Toaster position='bottom-right' />
      <button
        className='absolute bottom-10 right-4 rounded-full text-gray-50 px-2 py-1'
        onClick={copyToClipboard}
      >
        <CopyClipboardIcon />
      </button>
    </>
  )
}
