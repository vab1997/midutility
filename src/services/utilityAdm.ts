import { kv } from '@vercel/kv'
import { Utility } from '@/types/type'

export async function getSingleUtility ({ idUtility }: { idUtility: string }) {
  return await kv.get<Utility | null>(idUtility)
}

export async function getAllUtilities () {
  return await kv.keys('*')
}

export async function createUtility ({ title, description, use_case, codeHtml, codeCss, codeJs, codeTs }:
{ title: string, description: string, use_case: string, codeHtml: string, codeCss: string, codeJs: string, codeTs: string }
) {
  return await fetch('/api/send-form-utility', {
    method: 'POST',
    body: JSON.stringify({ title, description, use_case, codeHtml, codeCss, codeJs, codeTs }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (res) => {
    return res
  }).catch(err => {
    console.error(err)
    return ('Error submitting form')
  })
}
