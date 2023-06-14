import { kv } from '@vercel/kv'
import { nonNullable } from '@/utils'

import { Utility } from '@/types/type.d'

export async function useGetUtilities () {
  try {
    const listKeysUtilities = (await kv.keys('*')).splice(0, 10)
    const listUtilities = await Promise.all(listKeysUtilities.map(async (key) => {
      const value = await kv.get<Utility | null>(key)
      if (value == null) return null

      const { title, description, use_case, code, language, timestamp } = value
      return { key, title, description, use_case, code, language, timestamp }
    }))

    const listUtilitiesFiltered = listUtilities.filter(nonNullable)

    return listUtilitiesFiltered
  } catch (error) {
    console.error(error)
    return 'Error getting utilities'
  }
}
