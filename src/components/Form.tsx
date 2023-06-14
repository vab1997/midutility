'use client'

import { EditorMonaco } from '@/components/Editor'
import { useState } from 'react'
import { toast } from 'sonner'
import { Loading } from './icons/Loading'

interface PropsInput {
  label: string
  type: string
  placeholder?: string
  name: string
  value?: string
  required?: boolean
}

function Input ({ label, type, placeholder, name, value, required }: PropsInput) {
  return (
    <>
      {type !== 'hidden'
        ? (
          <div className='flex flex-col gap-2 justify-start w-full'>
            <label className='flex gap-2 items-center font-medium text-gray-50 italic text-lg' htmlFor={label}>
              {label}
              {required ?? <span title='Fiel required' className='text-red-500'>*</span>}
            </label>
            <input
              className='bg-gray-50 px-4 py-2 rounded border border-current hover:border-[#EE81C3] outline-none'
              type={type}
              placeholder={placeholder}
              name={name}
              value={value}
              required={required}
            />
          </div>
          )
        : (
          <input
            type={type}
            name={name}
            value={value}
          />
          )}
    </>
  )
}

export function Form () {
  const [code, setCode] = useState<string>('')
  const [language, setLanguage] = useState<string>('javascript')
  const [loading, setLoading] = useState<boolean>(false)

  const updateValues = ({ code, language }: { code: string, language: string }) => {
    setCode(code)
    setLanguage(language)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const title = formData.get('title')
    const description = formData.get('description')
    const use_case = formData.get('use_case')
    const code = formData.get('code')
    const language = formData.get('language')

    console.log(code)

    if (!title || !description || !use_case || !code || !language) {
      toast.error('All fields are required')
      return
    }

    setLoading(true)

    fetch('/api/send-form-utility', {
      method: 'POST',
      body: JSON.stringify({ title, description, use_case, code, language }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      toast.success('Form submitted successfully!')
      form.reset()
      setLoading(false)
    }).catch(err => {
      console.error(err)
      toast.error('Error submitting form')
    })
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-4 h-full w-full'>
      <div className='flex flex-col gap-4 h-auto w-1/2'>
        <Input required label='Title' name='title' type='text' placeholder='Create timeago with web API' />
        <div className='flex flex-col gap-2 justify-start w-full'>
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
        <Input required label='Use case' name='use_case' type='text' placeholder='ej: youtube.com/shorts/VKAt8JMlqho' />
        <Input label='code' name='code' type='hidden' value={code} />
        <Input label='language' name='language' type='hidden' value={language} />
      </div>

      <div className='relative flex flex-col gap-2 justify-center rounded border border-gray-50 hover:border-[#EE81C3] w-3/4 h-full'>
        <EditorMonaco updateValues={updateValues} />
        <button
          className='absolute flex items-center justify-center bottom-2 right-0 left-0 bg-gray-50 transition ease-in-out delay-50 border border-gray-50 text-[#14151A] hover:bg-[#EE81C3] hover:text-gray-50 hover:border-[#EE81C3] text-xl mt-6 font-medium mx-8 py-2 rounded '
          type='submit'
        >
          {loading ? <Loading width={28} height={28} /> : 'Create utility'}
        </button>
      </div>
    </form>
  )
}
