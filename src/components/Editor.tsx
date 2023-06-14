import { useEffect, useState } from 'react'

import Editor, { useMonaco } from '@monaco-editor/react'
import themeCustom from '@/utils/oneDark.json'
import { Loading } from '@/components/icons/Loading'
import { JsIcon } from './icons/JsIcon'
import { TsIcon } from './icons/TsIcon'

export function EditorMonaco ({ updateValues }: { updateValues: ({ code, language }: { code: string, language: string }) => void }) {
  const [code, setCode] = useState<string | undefined>()
  const [language, setLanguage] = useState<string>('javascript')
  const monaco = useMonaco()

  useEffect(() => {
    if (monaco != null) {
      monaco.editor.defineTheme('custom', {
        base: 'vs-dark',
        inherit: true,
        rules: [],
        ...themeCustom
      })
      monaco.editor.setTheme('custom')
    }
  }, [monaco])

  useEffect(() => {
    updateValues({ code: code ?? '', language })
  }, [code, language])

  const handleClick = () => {
    language === 'javascript'
      ? setLanguage('typescript')
      : setLanguage('javascript')
  }

  // console.log(code)
  // console.log(language)

  return (
    <div className='relative flex items-center justify-between bg-[#14151A] rounded-2xl py-4 px-2 h-full w-full'>
      {(monaco != null) && (
        <div className='flex gap-2 items-center justify-center absolute top-4 right-10 z-10'>
          <button className='flex gap-4 items-center justify-center font-medium text-white rounded' onClick={handleClick}>
            <JsIcon language={language} />
            <TsIcon language={language} />
          </button>
        </div>
      )}
      <Editor
        height='80vh'
        defaultLanguage='javascript'
        defaultValue={['function hello() {', '\tconsole.log("Hello world!");', '}'].join('\n')}
        className='bg-[#14151A] h-full w-full'
        language={language}
        theme='vs-dark'
        loading={<Loading width={48} height={48} />}
        onChange={(value: string | undefined) => setCode(value)}
        options={
          {
            fontSize: 16,
            minimap: {
              enabled: false
            }
          }
        }
      />
    </div>
  )
}
