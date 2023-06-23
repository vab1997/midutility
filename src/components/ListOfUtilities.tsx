import { useGetRangeUtilities } from '@/hooks/useGetRangeUtilities'
import { Utility } from '@/components/Utility'

export async function ListOfUtilities () {
  const listUtilities = await useGetRangeUtilities({ limit: 5 })

  if (listUtilities === null) return null

  return (
    <section className='flex flex-col gap-12 px-10 py-16 w-full'>
      <h1 className='text-6xl text-[#EE81C3] font-bold'>Last utilities created</h1>
      <div className='flex items-center justify-center gap-4'>
        {listUtilities.map((utility) => (
          <Utility
            key={utility.id}
            id={utility.id}
            title={utility.title ?? ''}
            description={utility.description ?? ''}
          />
        ))}
      </div>
    </section>
  )
}
