import React from 'react'
import { BeakerIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black shadow-md p-2 py-5">
      <div className="max-w-full mx-auto grid grid-cols-2">
        {/* left */}
        <div className="flex items-center text-white">
          <svg className="mr-2" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 14.6667H8C3.585 14.6667 0 11.3804 0 7.33333C0 3.28625 3.585 0 8 0H16C20.415 0 24 3.28625 24 7.33333C24 11.3804 20.415 14.6667 16 14.6667ZM16 0.916667H8C4.137 0.916667 1 3.79225 1 7.33333C1 10.8744 4.137 13.75 8 13.75H16.045C19.888 13.7271 23 10.8607 23 7.33333C23 3.806 19.888 0.939583 16.045 0.916667H16ZM8 2.75C10.76 2.75 13 4.80333 13 7.33333C13 9.86333 10.76 11.9167 8 11.9167C5.24 11.9167 3 9.86333 3 7.33333C3 4.80333 5.24 2.75 8 2.75ZM8 3.66667C10.208 3.66667 12 5.30933 12 7.33333C12 9.35733 10.208 11 8 11C5.792 11 4 9.35733 4 7.33333C4 5.30933 5.792 3.66667 8 3.66667Z" fill="white"/>
          </svg>
          <div className="font-bold text-md">SUPER ADMIN</div>
        </div>

        {/* right */}
        <div className="flex flex-col xl:flex-row">
          <BeakerIcon className="h-8 text-white bg-black rounded-full p-2 cursor-pointer" />
          <div className="text-black">Dashboards</div>
        </div>
      </div>
    </header>
  )
}
export default Header

// export const Header = () => <h1>Header</h1>

