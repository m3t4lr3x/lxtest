import React, { useState } from 'react'
import { ChartBarIcon, CubeTransparentIcon,UserIcon,ChartPieIcon,DocumentReportIcon,CogIcon } from '@heroicons/react/solid'
import {Transition} from "@headlessui/react"
import DdMenuAgent from './DdMenuAgent'
import DdMenuReport from './DdMenuReport'
import DdMenuInvoice from './DdMenuInvoice'
import DdMenuInternal from './DdMenuInternal'
import DdMenuUserLogin from './DdMenuUserLogin'


function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (

    <div>
      <nav className="bg-black">
        <div className="max-full mx-auto px-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full justify-between">
              <div className="flex-shrink-0 flex items-center text-white">

                <svg 
                  className="mr-2"
                  width="24" 
                  height="15" 
                  viewBox="0 0 24 15" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M16 14.6667H8C3.585 14.6667 0 11.3804 0 7.33333C0 3.28625 3.585 0 8 0H16C20.415 0 24 3.28625 24 7.33333C24 11.3804 20.415 14.6667 16 14.6667ZM16 0.916667H8C4.137 0.916667 1 3.79225 1 7.33333C1 10.8744 4.137 13.75 8 13.75H16.045C19.888 13.7271 23 10.8607 23 7.33333C23 3.806 19.888 0.939583 16.045 0.916667H16ZM8 2.75C10.76 2.75 13 4.80333 13 7.33333C13 9.86333 10.76 11.9167 8 11.9167C5.24 11.9167 3 9.86333 3 7.33333C3 4.80333 5.24 2.75 8 2.75ZM8 3.66667C10.208 3.66667 12 5.30933 12 7.33333C12 9.35733 10.208 11 8 11C5.792 11 4 9.35733 4 7.33333C4 5.30933 5.792 3.66667 8 3.66667Z" 
                    fill="white"
                  />
                </svg>
                <div className="font-bold text-md">SUPER ADMIN</div>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-center space-x-4">
                  <a
                    href="/#"
                    className="flex items-center text-gray-300 hover:bg-yellow-300 hover:text-black px-3 py-2 px-2 rounded-sm text-sm font-medium"
                  >
                    <CubeTransparentIcon 
                      className="h-4 mr-2"
                    />
                    Dashboard
                  </a>

                  <a
                    href="/#"
                    className="flex items-center text-gray-300 hover:bg-yellow-300 hover:text-black px-3 py-2 px-2 rounded-sm text-sm font-medium"
                  >
                    <ChartBarIcon 
                      className="h-4 mr-2"
                    />
                    Market
                  </a>

                  <DdMenuAgent />

                  <DdMenuReport />

                  <DdMenuInvoice />

                  <DdMenuInternal />

                  <DdMenuUserLogin />
                </div>
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/#"
                  className="flex items-center text-gray-300 hover:bg-yellow-300 hover:text-black px-3 py-2 px-2 rounded-sm text-sm font-medium"
                >
                  <CubeTransparentIcon 
                    className="h-4 mr-2"
                  />
                  Dashboard
                </a>

                <a
                  href="/#"
                  className="flex items-center text-gray-300 hover:bg-yellow-300 hover:text-black px-3 py-2 px-2 rounded-sm text-sm font-medium"
                >
                  <ChartBarIcon 
                    className="h-4 mr-2"
                  />
                  Market
                </a>
                <a
                  href="/#"
                  className="flex items-center text-gray-300 hover:bg-yellow-300 hover:text-black px-3 py-2 px-2 rounded-sm text-sm font-medium"
                >
                  <UserIcon
                    className="h-4 mr-2"
                  />
                  Agent
                </a>
                <a
                  href="/#"
                  className="flex items-center text-gray-300 hover:bg-yellow-300 hover:text-black px-3 py-2 px-2 rounded-sm text-sm font-medium"
                >
                  <ChartPieIcon 
                    className="h-4 mr-2"
                  />
                  Report
                </a>
                <a
                  href="/#"
                  className="flex items-center text-gray-300 hover:bg-yellow-300 hover:text-black px-3 py-2 px-2 rounded-sm text-sm font-medium"
                >
                  <DocumentReportIcon 
                    className="h-4 mr-2"
                  />
                  Invoice
                </a>
                <a
                  href="/#"
                  className="flex items-center text-gray-300 hover:bg-yellow-300 hover:text-black px-3 py-2 px-2 rounded-sm text-sm font-medium"
                >
                  <CogIcon 
                    className="h-4 mr-2"
                  />
                  Internal
                </a>
                <a
                  href="/#"
                  className="flex items-center text-gray-300 hover:bg-yellow-300 hover:text-black px-3 py-2 px-2 rounded-sm text-sm font-medium"
                >
                  <UserIcon 
                    className="h-4 mr-2"
                  />
                  Profile
                </a>
                {/* <DdMenuAgent />

                <DdMenuReport />

                <DdMenuInvoice />

                <DdMenuInternal />

                <DdMenuUserLogin /> */}
              </div>
            </div>
          )}
        </Transition>
      </nav>

      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with content -->
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          <!-- /End replace -->
        </div>
      </main> */}
    </div>
  )
}
export default Header

// export const Header = () => <h1>Header</h1>

