import { getSingleUtilityHtmlCssJs } from '@/services/clientService'

export async function useGetUtility ({ idUtility }: { idUtility: string }) {
  const utility = await getSingleUtilityHtmlCssJs({ utility_id: idUtility })
  return utility
}
