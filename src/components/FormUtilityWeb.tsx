'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { EditorMonaco } from '@/components/Editor'
import { InputForm } from '@/components/InputForm'
import { Loading } from '@/components/icons/Loading'
import { toast } from 'sonner'
import { createUtilityHtmlCssJs } from '@/services/clientService'

export function FormUtilityWeb () {
  const [codeHtml, setCodeHtml] = useState<string>('')
  const [codeCss, setCodeCss] = useState<string>('')
  const [codeJs, setCodeJs] = useState<string>('')
  const [codeTs, setCodeTs] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(false)

  const route = useRouter()

  const updateValues = ({ code, language }: { code: string, language: string }) => {
    if (language === 'html') return setCodeHtml(code)
    if (language === 'css') return setCodeCss(code)

    if (language === 'typescript') {
      setCodeTs(code)
      setCodeJs('')
      return
    }

    if (language === 'javascript') {
      setCodeJs(code)
      setCodeTs('')
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const title = formData.get('title')
    const description = formData.get('description')
    const use_case = formData.get('use_case')

    if (!title || !description || !use_case) {
      toast.error('All fields are required')
      return
    }

    setLoading(true)

    const res = await createUtilityHtmlCssJs({
      title: String(title),
      description: String(description),
      useCase: String(use_case),
      codeHtml,
      codeCss,
      codeJs,
      codeTs
    })

    if (res) {
      toast.success('Form submitted successfully!')
      setLoading(false)
      form.reset()
      void route.push('/')
    } else {
      toast.error('Error submitting form')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-center gap-4 h-full w-full'>
      <div className='flex flex-col items-stretch justify-start gap-6 transparent border border-gray-500 rounded-lg [&>div]:rounded-lg [&>div]:border [&>div]:border-gray-500 [&>div]:p-6 p-6 w-3/5'>
        <div className='border-none py-2 px-0'>
          <h1 className='text-[#EE81C3] text-6xl font-bold mb-4'>Create a new utiliy</h1>
          <p className='text-gray-50 text-xl'>Complete fiels and add code html, css, or js</p>
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <InputForm req label='Title' name='title' type='text' placeholder='Create timeago with web API' />
          <div className='relative flex flex-col gap-2 justify-start w-full'>
            <label className='flex gap-2 items-center font-medium text-gray-50 italic text-lg' htmlFor='Description'>
              Description
              <span title='Fiel required' className='text-red-500'>*</span>
            </label>
            <textarea
              className='px-4 py-2 rounded border border-current hover:border-[#EE81C3] outline-none'
              placeholder='Create a timeago with the platform web using Relative time format'
              rows={5}
              name='description'
              required
            />
          </div>
          <InputForm req label='Use case' name='use_case' type='text' placeholder='ej: youtube.com/shorts/VKAt8JMlqho' />

          <div className='absolute z-10 left-[28.5rem] bottom-[10.8rem] ml-1 border border-dashed border-gray-300 w-[2px] h-6 opacity-50' />
        </div>
        <div className='w-full'>
          <label className='flex gap-2 items-center font-medium text-gray-50 italic text-lg mb-2' htmlFor='Description'>
            Code HTML
          </label>
          <EditorMonaco updateValues={updateValues} lang='html' />
          <div className='absolute z-10 left-[28.5rem] bottom-[-32.55rem] ml-1 border border-dashed border-gray-300 w-[2px] h-6 opacity-50' />
        </div>
        <div className='w-full'>
          <label className='flex gap-2 items-center font-medium text-gray-50 italic text-lg mb-2' htmlFor='Description'>
            Code CSS
          </label>
          <EditorMonaco updateValues={updateValues} lang='css' />
          <div className='absolute z-10 left-[28.5rem] bottom-[-75.95rem] ml-1 border border-dashed border-gray-300 w-[2px] h-6 opacity-50' />
        </div>
        <div className='w-full'>
          <label className='flex gap-2 items-center font-medium text-gray-50 italic text-lg mb-2' htmlFor='Description'>
            Code JS-TS
          </label>
          <EditorMonaco updateValues={updateValues} lang='javascript' />
        </div>
        <button
          className='flex items-center justify-center py-3 bg-[#EE81C3] transition ease-in-out delay-50 border border-[#EE81C3] text-gray-50 hover:opacity-90 text-xl mt-2 font-medium p-0 rounded-lg'
          type='submit'
          disabled={loading}
        >
          {loading ? <Loading width={28} height={28} fill='' /> : 'Create utility'}
        </button>
      </div>
    </form>
  )
}
