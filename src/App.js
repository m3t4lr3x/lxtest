import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './components/Header';
// import SmallCard from './components/SmallCard';

import { UserIcon, CurrencyDollarIcon, SearchIcon, ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
// import DataTable from './components/DataTable';
import Table from './components/Table';
import DdMenuStatus from './components/DdMenuStatus';
import DdMenuPeriod from './components/DdMenuPeriod';

const getData = () => [
  {
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    status: "Active",
    role: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    title: "Product Directives Officer",
    department: "Intranet",
    status: "Active",
    role: "Owner",
    imgUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Forward Response Developer",
    department: "Directives",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    title: "Central Security Manager",
    department: "Program",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    title: "Lean Implementation Liaison",
    department: "Mobility",
    status: "Active",
    role: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function App() {

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Role",
        accessor: "role",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), [])

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
          <div className='flex flex-col md:flex-row items-center justify-between ml-2 mb-5'>
            <h2 className="text-2xl font-bold">Market Summary</h2>
            <div className='flex flex-row flex-end mr-2 md:flex-row'>
              <label className="relative block mr-5">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter to search" type="text" name="search"/>
              </label>
              {/* <select className="mr-5" id="status" name="status">
                <option value="" selected disabled hidden>Status</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select> */}
              <DdMenuStatus />
              {/* <select className="mr-5" id="Period" name="Period">
                <option value="" selected disabled hidden>Period</option>
                <option value="online">1</option>
                <option value="offline">2</option>
                <option value="online">3</option>
                <option value="offline">4</option>
              </select> */}
              <DdMenuPeriod />
            </div>
          </div>

          {/* <div className="min-h-screen bg-gray-100 text-gray-900">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className="">
                <h1 className="text-xl font-semibold">React Table + Tailwind CSS = ❤</h1>
              </div>
              <div className="mt-4">
                <DataTable columns={columns} data={data} />
              </div>
            </main>
          </div> */}

          {/* <h1>Hello React!</h1>
          <div>
            <Table columns={columns} data={data} />
          </div> */}

          <div className="w-full mb-12 px-2">
            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full bg-white border-collapse">
                <thead className="bg-black text-white">
                  <tr className="">
                    <td className="p-5">Name</td>
                    <td className="text-center">Period</td>
                    <td className="text-center">Close Time</td>
                    <td className="text-center w-30 px-5">Status</td>
                    <td className="text-right">Total Player Bet</td>
                    <td className="text-right pr-5">Total Player Paid</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-5">IL-ISTANBUL LOTTERY</td>
                    <td className="text-center">4</td>
                    <td className="text-center px-5 text-sm">
                      <div className="flex justify-between">
                        <div>Close 21.30</div>
                        <div>Close 21.30</div>
                      </div>
                      <div>
                        <div className="w-full bg-gray-300 h-1">
                          <div className="bg-yellow-300 h-1 w-1/2"></div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="bg-yellow-300 text-black w-20 px-3 inline-block rounded-md">Online</div>
                    </td>
                    <td className="text-right"><span className="text-sm text-gray-400 mr-2">Rp.</span>2.029.000</td>
                    <td className="text-right pr-5"><span className="text-sm text-gray-400 mr-2">Rp.</span>2.024.694</td>
                  </tr>
                  <tr>
                    <td className="p-5">JP-JAPANESE</td>
                    <td className="text-center">1</td>
                    <td className="text-center px-5 text-sm">
                      <div className="flex justify-between">
                        <div>Close 18.30</div>
                        <div>Offline</div>
                      </div>
                      <div>
                        <div className="w-full bg-gray-300 h-1">
                          <div className="bg-yellow-300 h-1 w-0"></div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="bg-gray-500 text-white w-20 px-3 inline-block rounded-md">Offline</div>
                    </td>
                    <td className="text-right"><span className="text-sm text-gray-400 mr-2">Rp.</span>0</td>
                    <td className="text-right pr-5"><span className="text-sm text-gray-400 mr-2">Rp.</span>0</td>
                  </tr>
                  <tr>
                    <td className="p-5">PL-POLLANDIA</td>
                    <td className="text-center">3</td>
                    <td className="text-center px-5 text-sm">
                      <div className="flex justify-between">
                        <div>Close 00.45</div>
                        <div>4.45</div>
                      </div>
                      <div>
                        <div className="w-full bg-gray-300 h-1">
                          <div className="bg-yellow-300 h-1 w-1/3"></div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="bg-yellow-300 text-black w-20 px-3 inline-block rounded-md">Online</div>
                    </td>
                    <td className="text-right"><span className="text-sm text-gray-400 mr-2">Rp.</span>2.972.100.</td>
                    <td className="text-right pr-5"><span className="text-sm text-gray-400 mr-2">Rp.</span>2.971.500</td>
                  </tr>
                  <tr>
                    <td className="p-5">UKN-UKRAINA</td>
                    <td className="text-center">1</td>
                    <td className="text-center px-5 text-sm">
                      <div className="flex justify-between">
                        <div>Close 11.00</div>
                        <div>Offline</div>
                      </div>
                      <div>
                        <div className="w-full bg-gray-300 h-1">
                          <div className="bg-yellow-300 h-1 w-0"></div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="bg-gray-500 text-white w-20 px-3 inline-block rounded-md">Offline</div>
                    </td>
                    <td className="text-right"><span className="text-sm text-gray-400 mr-2">Rp.</span>7.126.590</td>
                    <td className="text-right pr-5"><span className="text-sm text-gray-400 mr-2">Rp.</span>7.034078</td>
                  </tr>
                  <tr>
                    <td className="p-5">IL-ISTANBUL LOTTERY</td>
                    <td className="text-center">4</td>
                    <td className="text-center px-5 text-sm">
                      <div className="flex justify-between">
                        <div>Close 21.30</div>
                        <div>3.30</div>
                      </div>
                      <div>
                        <div className="w-full bg-gray-300 h-1">
                          <div className="bg-yellow-300 h-1 w-1/5"></div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="bg-yellow-300 text-black w-20 px-3 inline-block rounded-md">Online</div>
                    </td>
                    <td className="text-right"><span className="text-sm text-gray-400 mr-2">Rp.</span>2.029.000</td>
                    <td className="text-right pr-5"><span className="text-sm text-gray-400 mr-2">Rp.</span>2.24.694</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-row justify-end mr-2 mb-5 space-x-4">
            <div className="text-gray-400">Items per pages</div>
            <select className="w-14 cursor-pointer">
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
            <div className="text-gray-400">1 of 2</div>
            <div className="flex flex-row">
              <ChevronLeftIcon className="h-6 cursor-pointer text-gray-400"/>
              <ChevronRightIcon className="h-6 cursor-pointer"/>
            </div>
          </div>
          
        </section>
      </main>
    </div>
  );
}