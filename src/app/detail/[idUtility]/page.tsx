import { Highligter } from '@/components/Highligther'
import { ButtonCopyClipboard } from '@/components/ButtonCopyClipboard'

import { useGetUtility } from '@/hooks/useGetUtility'
import { formatDate } from '@/utils'

export default async function DetailUtility ({ params }: { params: { idUtility: string } }) {
  const { idUtility } = params
  const utility = await useGetUtility({ idUtility })

  if (typeof utility !== 'object') {
    return (
      <div className='flex items-center justify-center w-full h-full'>
        <h1 className='text-6xl text-[#EE81C3] font-bold'>{utility}</h1>
      </div>
    )
  }

  const { code, description, language, timestamp, title, use_case } = utility

  return (
    <main>
      <section className='relative max-w-screen-lg px-4 py-10 mx-auto md:flex md:py-10 md:flex-row'>
        <div className='flex flex-col items-center justify-center gap-4 w-full'>
          <header className='flex flex-col gap-4 px-2 py-2 w-full'>
            <div className='flex flex-col gap-4 w-full'>
              <h2 className='text-6xl text-[#EE81C3] font-bold'>{title}</h2>
              <p className='text-gray-50 text-xl'>{description}</p>
            </div>
            <div className='flex items-center justify-between w-full mt-2'>
              <div className='text-gray-50'>
                <a href={use_case} className='italic text-gray-50 hover:underline-offset-4 hover:text-[#EE81C3]' target='_blank' rel='noreferrer nopener'>
                  View an example of use
                </a>
              </div>
              <div className='flex items-center justify-center gap-1'>
                <time className='text-gray-50 font-medium italic'>Created {formatDate(timestamp)}</time>
                <span className='text-gray-50 font-medium italic'>by midudev</span>
              </div>
            </div>
          </header>
          <div className='relative py-2 w-full'>
            <span className='absolute top-1 right-4 rounded-full px-2 py-1 bg-[#EE81C3] text-gray-50 font-medium'>{language}</span>
            <Highligter codeString={code} language={language} />
            {code && <ButtonCopyClipboard code={code} />}
          </div>
        </div>
      </section>
    </main>
  )
}
