import { supabase } from '@/lib/supabaseClient'

interface Utility {
  id?: string
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

  const { data: dataUtilityHCJ } = await supabase.from('utility_html_css_js').insert({ utility_id: data.id, codeHtml, codeCss, codeJs, codeTs }).select('utility_id')
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

export async function getUtilityHtmlCssJs ({ limit }: { limit?: number }) {
  const { data, error } = await supabase
    .from('utility')
    .select(`
      id,
      title,
      description,
      useCase,
      utility_html_css_js (
        codeHtml,
        codeCss,
        codeJs,
        codeTs
      )
    `)
    .limit(limit ?? 10)

  if (error) return null

  const utilities = data.map((utility) => {
    const { utility_html_css_js } = utility
    return {
      id: utility.id,
      title: utility.title,
      description: utility.description,
      useCase: utility.useCase,
      codeHtml: utility_html_css_js[0]?.codeHtml,
      codeCss: utility_html_css_js[0]?.codeCss,
      codeJs: utility_html_css_js[0]?.codeJs,
      codeTs: utility_html_css_js[0]?.codeTs
    }
  })

  return utilities
}

export async function getSingleUtilityHtmlCssJs ({ utility_id }: { utility_id: string }) {
  const { data } = await supabase
    .from('utility')
    .select(`
      id,
      title,
      description,
      useCase,
      utility_html_css_js (
        utility_id,
        codeHtml,
        codeCss,
        codeJs,
        codeTs
      )
    `)
    .eq('id', `${utility_id}`)
    .limit(1)

  return data
}
