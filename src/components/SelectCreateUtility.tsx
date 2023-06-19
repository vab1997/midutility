'use client'

import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'

export function SelectUtility () {
  return (
    <Menu as='div' className='inline-block'>
      <div>
        <Menu.Button className='inline-flex border-2 border-[#EE81C3] w-full justify-center bg-[#EE81C3] px-8 py-4 rounded-lg text-2xl font-medium text-gray-50 focus:outline-none '>
          Create new utility
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1 '>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='/create-utility'
                  className={`${
                    active ? 'bg-[#EE81C3] text-gray-50' : 'text-gray-900'
                  } group flex w-full items-center rounded-md font-medium px-2 py-2`}
                >
                  with HTML, CSS and JS
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='/create-utility-react'
                  className={`${
                    active ? 'bg-[#EE81C3] text-gray-50' : 'text-gray-900'
                  } group flex w-full items-center rounded-md font-medium p-2`}
                >
                  with React
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
