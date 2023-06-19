interface PropsInput {
  label: string
  type: string
  placeholder?: string
  name: string
  value?: string
  req?: boolean
}

export function InputForm ({ label, type, placeholder, name, value, req }: PropsInput) {
  if (type === 'hidden') {
    return (
      <input
        type={type}
        name={name}
        value={value}
      />
    )
  }

  return (
    <div className='flex flex-col gap-2 justify-start w-full'>
      <label className='flex gap-2 items-center font-medium text-gray-50 italic text-lg' htmlFor={label}>
        {label}
        {req ? <span title='Fiel required' className='text-red-500'>*</span> : null}
      </label>
      <input
        className='bg-gray-50 px-4 py-2 rounded border border-current hover:border-[#EE81C3] outline-none'
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        required={req}
      />
    </div>
  )
}
