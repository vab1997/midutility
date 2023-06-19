import { supabase } from '@/lib/supabaseClient'

// interface Utility {
//   id: string
//   title: string
//   description: string
//   useCase: string
// }

// interface Utility_html_css_js extends Utility {
//   codeHtml: string
//   codeCss: string
//   codeJs: string
// }

interface Utility {
  title: string
  description: string
  useCase: string
}

interface UtilityHtmlCssJs extends Utility {
  codeHtml: string
  codeCss: string
  codeJs: string
  codeTs: string
}

interface UtilityReact extends Utility {
  codeComponent: string
  codeJs: string
  codeTs: string
}

export async function createUtility ({ title, description, useCase }: Utility) {
  const { data } = await supabase.from('utility').insert({ title, description, useCase }).select('id')
  if (!data) return null
  return { id: data[0].id }
}

export async function createUtilityHtmlCssJs ({ title, description, useCase, codeHtml, codeCss, codeJs, codeTs }: UtilityHtmlCssJs) {
  const data = await createUtility({ title, description, useCase })
  if (!data) return null

  const { data: dataUtilityHCJ } = await supabase.from('utility_html-css-js').insert({ utility_id: data.id, codeHtml, codeCss, codeJs, codeTs }).select('utility_id')
  if (!dataUtilityHCJ) return null
  return { id: dataUtilityHCJ[0].utility_id }
}

export async function createUtilityReact ({ title, description, useCase, codeComponent, codeJs, codeTs }: UtilityReact) {
  const data = createUtility({ title, description, useCase })
  if (!data) return null

  const { data: dataUtilityReact } = await supabase.from('utility_react').insert({ codeComponent, codeJs, codeTs }).select('utility_id')
  if (!dataUtilityReact) return null
  return { id: dataUtilityReact[0].utility_id }
}

export async function getUtilityHtmlCssJs () {
  const { data } = await supabase
    .from('utility')
    .select(`
      id,
      title,
      description,
      useCase,
      utility_html-css-js (
        utility_id,
        codeHtml,
        codeCss,
        codeJs
      )
    `)
    .limit(10)

  return data
}

export async function getSingleUtilityHtmlCssJs ({ utility_id }: { utility_id: string }) {
  const { data } = await supabase
    .from('utility')
    .select(`
      id,
      title,
      description,
      useCase,
      utility_html-css-js (
        utility_id,
        codeHtml,
        codeCss,
        codeJs
      )
    `)
    .eq('id', `${utility_id}`)
    .limit(1)

  return data
}
