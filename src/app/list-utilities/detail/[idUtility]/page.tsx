import { Highligter } from '@/components/Highligther'
import { ButtonCopyClipboard } from '@/components/ButtonCopyClipboard'

import { useGetUtility } from '@/hooks/useGetUtility'
import { formatDate } from '@/utils'
import { HtmlIcon } from '@/components/icons/HtmlIcon'
import { CssIcon } from '@/components/icons/CssIcon'
import { JsIcon } from '@/components/icons/JsIcon'
import { TsIcon } from '@/components/icons/TsIcon'

export default async function DetailUtility ({ params }: { params: { idUtility: string } }) {
  const { idUtility } = params
  const utility = await useGetUtility({ idUtility })

  if (!utility) {
    return (
      <div className='flex items-center justify-center w-full h-full'>
        <h1 className='text-6xl text-[#EE81C3] font-bold'>Not found utility</h1>
      </div>
    )
  }

  const { title, description, useCase, timestamp, codeHtml, codeCss, codeJs, codeTs } = utility

  return (
    <main className='relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr]'>
      <section className='mx-auto w-full min-w-0'>
        <div className='flex flex-col items-center justify-center gap-4 w-full'>
          <header className='flex flex-col gap-4 py-2 w-full'>
            <div className='flex flex-col gap-4 w-full'>
              <h2 className='text-5xl text-[#EE81C3] font-bold pb-6 border-b border-b-gray-800 uppercase'>{title}</h2>
              <p className='text-gray-50 text-xl'>{description}</p>
            </div>
            <div className='flex items-center justify-between w-full mt-2'>
              <div className='text-gray-50'>
                <a href={useCase ?? ''} className='italic text-gray-50 hover:underline-offset-4 hover:text-[#EE81C3]' target='_blank' rel='noreferrer nopener'>
                  View an example of use
                </a>
              </div>
              <div className='flex items-center justify-center gap-1'>
                {timestamp !== null && <time className='text-gray-50 font-medium italic'>Created {formatDate(timestamp)}</time>}
                <span className='text-gray-50 font-medium italic'>by midudev</span>
              </div>
            </div>
          </header>
          <div className='relative py-2 w-full'>
            <span className='absolute -top-2 right-4 rounded-full text-gray-50 font-medium'>
              <HtmlIcon width={60} height={60} />
            </span>
            <Highligter codeString={codeHtml ?? ''} language='html' />
            {codeHtml && <ButtonCopyClipboard code={codeHtml} />}
          </div>
          <div className='relative py-2 w-full'>
            <span className='absolute -top-2 right-4 rounded-full text-gray-50 font-medium'>
              <CssIcon width={60} height={60} />
            </span>
            <Highligter codeString={codeCss ?? ''} language='css' />
            {codeCss && <ButtonCopyClipboard code={codeCss} />}
          </div>
          <div className='relative py-2 w-full'>
            <span className='absolute top-0 right-7 rounded-full pl-2 text-gray-50 font-medium'>
              {codeJs
                ? (
                  <JsIcon language='javascript' />
                  )
                : (
                  <TsIcon language='typescript' />
                  )}
            </span>
            <Highligter codeString={codeJs || codeTs} language={codeJs ? 'javascript' : 'typescript'} />
            {codeJs && <ButtonCopyClipboard code={codeJs} />}
          </div>
        </div>
      </section>
    </main>
  )
}
