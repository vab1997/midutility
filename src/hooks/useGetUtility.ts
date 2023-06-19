import { getSingleUtility } from '@/services/utilityAdm'

export async function useGetUtility ({ idUtility }: { idUtility: string }) {
  try {
    const utility = await getSingleUtility({ idUtility })

    if (utility == null) {
      return 'Utility not found'
    }

    return utility
  } catch (error) {
    console.error(error)
    return 'Error get utility'
  }
}
