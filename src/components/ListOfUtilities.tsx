import { useGetRangeUtilities } from '@/hooks/useGetRangeUtilities'
import Link from 'next/link'

export async function ListOfUtilities () {
  const listUtilities = await useGetRangeUtilities({ limit: 10 })

  if (listUtilities === null) return null

  return (
    <aside className='fixed top-[90px] z-30 hidden h-[calc(100vh-5rem-10px)] w-full shrink-0 overflow-y-auto py-8 pr-2 border-r border-gray-800 md:sticky md:block lg:py-10'>
      <div className='w-full'>
        <div className='pb-6'>
          <h4 className='text-[#EE81C3] font-bold text-2xl pb-6'>Utilities</h4>
          {listUtilities.map((utility) => (
            <Link
              key={utility.id}
              href={`list-utilities/detail/${utility.id}`}
              className='flex w-full items-center rounded-md py-1.5 font-medium text-gray-50 hover:underline'
            >
              {utility.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
