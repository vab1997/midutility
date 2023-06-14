import { useGetUtilities } from '@/hooks/useGetUtilities'
import { Utility } from './Utility'

export async function ListOfUtilities () {
  const listUtilities = await useGetUtilities()

  if (typeof listUtilities !== 'object') {
    return (
      <div className='flex items-center justify-center w-full h-full'>
        <h1 className='text-6xl text-[#EE81C3] font-bold'>{listUtilities}</h1>
      </div>
    )
  }

  return (
    <section className='flex flex-col gap-12 px-10 py-16 w-full'>
      <h1 className='text-6xl text-[#EE81C3] font-bold'>Last utilities created</h1>
      <div className='flex items-center justify-center gap-4'>
        {listUtilities.map((utility) => (
          <Utility
            key={utility.key}
            id={utility.key}
            title={utility.title}
            description={utility.description}
          />
        ))}
      </div>
    </section>
  )
}
