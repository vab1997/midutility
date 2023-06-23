import { FormUtilityWeb } from '@/components/FormUtilityWeb'

export default function CreateUtilityPage () {
  return (
    <main className='flex flex-col items-center justify-between h-full w-full'>
      <div className='flex flex-col items-center justify-center px-10 overflow-hidden h-full w-full pt-12'>
        <FormUtilityWeb />
      </div>
    </main>
  )
}
