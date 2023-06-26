import { useEffect, useState } from 'react'

import Editor, { useMonaco } from '@monaco-editor/react'
import themeCustom from '@/utils/oneDark.json'
import { Loading } from '@/components/icons/Loading'
import { JsIcon } from '@/components/icons/JsIcon'
import { TsIcon } from '@/components/icons/TsIcon'
import { HtmlIcon } from '@/components/icons/HtmlIcon'
import { CssIcon } from '@/components/icons/CssIcon'
import { DEFAULT_VALUE } from '@/utils/constant'

interface EditorMonacoProps {
  updateValues: ({ code, language }: { code: string, language: string }) => void
  lang: string
  isJSX?: boolean
  isHook?: boolean
}

export function EditorMonaco ({ updateValues, lang, isJSX, isHook }: EditorMonacoProps) {
  const [code, setCode] = useState<string | undefined>()
  const [language, setLanguage] = useState<string>(lang)
  const monaco = useMonaco()

  useEffect(() => {
    if (monaco !== null) {
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

  let ValueLang
  if (isJSX) ValueLang = 'javascriptJSX'
  else if (isHook) ValueLang = 'CustomHook'
  else ValueLang = lang

  const handleClick = () => {
    language === 'javascript'
      ? setLanguage('typescript')
      : setLanguage('javascript')
  }

  const IconEditor = () => {
    if (lang === 'javascript') {
      return (
        <button className='flex gap-4 items-center justify-center font-medium text-white rounded' onClick={handleClick}>
          <JsIcon language={language} />
          <TsIcon language={language} />
        </button>
      )
    }
    if (lang === 'html') return <HtmlIcon />
    if (lang === 'css') return <CssIcon />
  }

  return (
    <div className='relative flex items-center justify-between bg-[#14151A] rounded-2xl p-2 h-full w-full'>
      {(monaco !== null) && (
        <div className='inline-flex gap-2 items-center justify-center absolute bottom-2 right-10 z-10'>
          <IconEditor />
        </div>
      )}
      <Editor
        height='60vh'
        defaultLanguage={language}
        defaultValue={DEFAULT_VALUE[ValueLang as keyof typeof DEFAULT_VALUE]}
        className='bg-[#14151A] h-full w-full'
        theme='vs-dark'
        language={language}
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
