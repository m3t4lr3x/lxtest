import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { ChartPieIcon } from '@heroicons/react/solid'

export default function DdMenuReport() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-sm px-4 py-2 text-sm font-medium text-gray-400 hover:bg-yellow-300 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <ChartPieIcon
              className="h-4 mr-2"
            />
            Report
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-400 text-violet-200 hover:text-black"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-yellow-300 text-black' : 'text-gray-400'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Today
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-yellow-300 text-black' : 'text-gray-400'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Weekly
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-yellow-300 text-black' : 'text-gray-400'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Monthly
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

