import { getUtilityHtmlCssJs } from '@/services/clientService'

export async function useGetRangeUtilities ({ limit }: { limit?: number }) {
  const listUtilities = await getUtilityHtmlCssJs({ limit })
  return listUtilities
}
