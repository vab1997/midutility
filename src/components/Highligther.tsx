import { Code } from 'bright'

Code.theme = {
  dark: 'github-dark',
  light: 'github-light'
}

const LANGUAGES = {
  javascript: 'js',
  typescript: 'typescript',
  html: 'html',
  css: 'css'
}

export function Highligter ({ codeString, language, styles = '' }: { codeString: string, language: string, styles?: string }) {
  return (
    <Code
      className={`${styles} border border-[#EE81C3] rounded-xl`}
      lineNumbers
      lang={LANGUAGES[language as keyof typeof LANGUAGES]}
    >
      {codeString}
    </Code>
  )
}
