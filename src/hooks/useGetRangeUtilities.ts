import { nonNullable } from '@/utils'
import { getAllUtilities, getSingleUtility } from '@/services/utilityAdm'

export async function useGetRangeUtilities ({ limit }: { limit?: number }) {
  try {
    const listKeysUtilities = (await getAllUtilities()).splice(0, limit)
    const listUtilities = await Promise.all(listKeysUtilities.map(async (key) => {
      const value = await getSingleUtility({ idUtility: key })
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
