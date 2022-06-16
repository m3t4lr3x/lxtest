import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import SmallCard from './components/SmallCard';

import { UserIcon, CurrencyDollarIcon, SearchIcon } from '@heroicons/react/solid'

export default function App() {
  return (
    // <div className='flex flex-col items-center justify-center min-h-screen py-2'>
    <div className=''>

      <Header />

      <main className="p-0 max-w-full mx-auto">
        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5 mb-5 ml-2">Dashboard</h2>

          <div className="grid grid-cols-1 lg:grid-cols-4">
            {/* Left-Bigcard */}
            <div className="flex flex-col items-center justify-center rounded-sm cursor-pointer bg-black hover:bg-gray-900 hover:scale-105 transition transform duration-200 ease-out mx-2 p-5">
              <div className="relative h-16 w-16 mb-2">
                <UserIcon className="h-18 p-2 text-white bg-gray-700 rounded-full"/>
              </div>
              <span className="text-white text-sm mb-2">Total Ongoing Bet</span>
              <h2 className="text-white font-bold text-3xl"><span className="text-sm text-gray-400 mr-2">Rp.</span>854.484M</h2>
            </div>
            
            {/* right-smallcard-container */}
            <div className="col-span-3">
              <div className="px-2 mt-5 sm:mt-5 md:mt-5 lg:mt-0">
                <a href="/#" className="text-white bg-black active:bg-black hover:bg-black hover:text-white px-2 py-1 rounded-sm mr-2 cursor-pointer text-sm">Today</a>
                <a href="/#" className="text-gray-400 active:bg-black hover:bg-black hover:text-white px-2 py-1 rounded-sm mr-2 cursor-pointer text-sm">Weekly</a>
                <a href="/#" className="text-gray-400 active:bg-black hover:bg-black hover:text-white px-2 py-1 rounded-sm mr-2 cursor-pointer">Monthly</a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                  {/* smallcards-area */}
                  <div className="flex items-center mx-2 mt-5 space-x-4 rounded-sm cursor-pointer bg-black hover:bg-gray-900 hover:scale-105 transition transform duration-200 ease-out py-3 px-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <UserIcon className="h-18 p-2 text-white bg-gray-700 rounded-full"/>
                    </div>
                    <div>
                      <span className="text-white text-sm">Total User Active</span>
                      <h2 className="text-white font-bold text-2xl">47.04M</h2>
                      <span className="text-green-500 text-xs mr-1">+5% </span>
                      <span className="text-gray-400 text-xs">Yesterday 31.987M</span>
                    </div>
                  </div>

                  <div className="flex items-center mx-2 mt-5 space-x-4 rounded-sm cursor-pointer bg-black hover:bg-gray-900 hover:scale-105 transition transform duration-200 ease-out py-3 px-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <UserIcon className="h-18 p-2 text-white bg-gray-700 rounded-full"/>
                    </div>
                    <div>
                      <span className="text-white text-sm">Total Active / Total Agent</span>
                      <h2 className="text-white font-bold text-2xl">2 / 2</h2>
                      <span className="text-green-500 text-xs mr-1">+50% </span>
                      <span className="text-gray-400 text-xs">Yesterday 1/2</span>
                    </div>
                  </div>

                  <div className="flex items-center mx-2 mt-5 space-x-4 rounded-sm cursor-pointer bg-black hover:bg-gray-900 hover:scale-105 transition transform duration-200 ease-out py-3 px-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <UserIcon className="h-18 p-2 text-white bg-gray-700 rounded-full"/>
                    </div>
                    <div>
                      <span className="text-white text-sm">Total Turnover</span>
                      <h2 className="text-white font-bold text-2xl"><span className="text-sm text-gray-400 mr-2">Rp.</span>854.484M</h2>
                      <span className="text-green-500 text-xs mr-1">+50% </span>
                      <span className="text-gray-400 text-xs">Yesterday 1/2</span>
                    </div>
                  </div>

                  <div className="flex items-center mx-2 mt-5 space-x-4 rounded-sm cursor-pointer bg-black hover:bg-gray-900 hover:scale-105 transition transform duration-200 ease-out py-3 px-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <UserIcon className="h-18 p-2 text-white bg-gray-700 rounded-full"/>
                    </div>
                    <div>
                      <span className="text-white text-sm">Total Paid</span>
                      <h2 className="text-white font-bold text-2xl"><span className="text-sm text-gray-400 mr-2">Rp.</span>185.024M</h2>
                      <span className="text-red-500 text-xs mr-1">-18% </span>
                      <span className="text-gray-400 text-xs">Yesterday Rp. 214.059M</span>
                    </div>
                  </div>

                  <div className="flex items-center mx-2 mt-5 space-x-4 rounded-sm cursor-pointer bg-black hover:bg-gray-900 hover:scale-105 transition transform duration-200 ease-out py-3 px-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <UserIcon className="h-18 p-2 text-white bg-gray-700 rounded-full"/>
                    </div>
                    <div>
                      <span className="text-white text-sm">Total Win</span>
                      <h2 className="text-white font-bold text-2xl"><span className="text-sm text-gray-400 mr-2">Rp.</span>345.048M</h2>
                      <span className="text-green-500 text-xs mr-1">+12% </span>
                      <span className="text-gray-400 text-xs">Yesterday 302.485M</span>
                    </div>
                  </div>

                  <div className="flex items-center mx-2 mt-5 space-x-4 rounded-sm cursor-pointer bg-black hover:bg-gray-900 hover:scale-105 transition transform duration-200 ease-out py-3 px-3">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <UserIcon className="h-18 p-2 text-white bg-gray-700 rounded-full"/>
                    </div>
                    <div>
                      <span className="text-white text-sm">Total Profit Lose</span>
                      <h2 className="text-white font-bold text-2xl"><span className="text-sm text-gray-400 mr-2">Rp.</span>47.490M</h2>
                      <span className="text-red-500 text-xs mr-1">+12% </span>
                      <span className="text-gray-400 text-xs">Yesterday 62.485M</span>
                    </div>
                  </div>

                  {/* end - smallcards-area */}
              </div>
            </div>
            {/* end right-smallcard-container */}
          </div>
        </section>
        <section className="pt-6">
          <div className='flex flex-col md:flex-row items-center justify-between ml-2'>
            <h2 className="text-2xl font-bold">Market Summary</h2>
            <div className='flex flex-row flex-end md:flex-row'>
              <label className="relative block mr-5">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter to search" type="text" name="search"/>
              </label>
              <select className="mr-5" id="status" name="status">
                <option value="" selected disabled hidden>Status</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
              <select className="mr-5" id="Period" name="Period">
                <option value="" selected disabled hidden>Period</option>
                <option value="online">1</option>
                <option value="offline">2</option>
                <option value="online">3</option>
                <option value="offline">4</option>
              </select>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}