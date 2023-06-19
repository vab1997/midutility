import { kv } from '@vercel/kv'

export async function POST (request: Request) {
  const { title, description, use_case, codeHtml, codeCss, codeJs, codeTs } = await request.json()

  if (!title || !description || !use_case) {
    return new Response('Missing required fields', { status: 400 })
  }

  const id = crypto.randomUUID()
  const timestamp = Date.now()

  try {
    await kv.set(`utlity-${id}`, { title, description, use_case, codeHtml, codeCss, codeJs, codeTs, timestamp })

    return new Response('Contact saved!', { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response('Internal error', { status: 500 })
  }
}
